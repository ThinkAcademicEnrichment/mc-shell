package org.mcshell.mcjuice;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.entity.Player;
import java.io.*;
import java.net.Socket;
import java.util.Arrays;
import java.util.Map;
import java.util.Random;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.LinkedBlockingQueue;

public class RemoteSession implements Runnable {
    // --- Shared Static Auth State Across Socket Connections ---
    private static final Map<String, String> ACTIVE_TOKENS = new ConcurrentHashMap<>(); // token -> playerName
    private static final Map<String, String> PENDING_PINS = new ConcurrentHashMap<>();  // playerName (lower) -> 4-digit PIN
    private static final Map<String, Long> PIN_LAST_SENT = new ConcurrentHashMap<>();   // playerName (lower) -> timestamp ms
    private static final Random RANDOM = new Random();

    // --- Per-Socket Instance State ---
    private volatile String authenticatedPlayer = null;

    private final Socket socket;
    private final McJuicePlugin plugin;
    private BufferedReader in;
    private PrintWriter out;
    private volatile boolean running = true;
    private final GeneratedCommandRegistry registry = new GeneratedCommandRegistry();

    // Add a thread-safe queue and a dedicated writer thread
    private final LinkedBlockingQueue<String> writeQueue = new LinkedBlockingQueue<>();
    private Thread writeThread;

    public RemoteSession(McJuicePlugin plugin, Socket socket) {
        this.plugin = plugin;
        this.socket = socket;
    }

    public boolean isRunning() { return running; }

    @Override
    public void run() {
        try {
            this.in = new BufferedReader(new InputStreamReader(socket.getInputStream(), "UTF-8"));
            this.out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream(), "UTF-8")), true);

            // 1. Spawn a dedicated thread just for flushing data to the socket
            this.writeThread = new Thread(() -> {
                try {
                    while (running) {
                        // Blocks until a message is available, using zero CPU
                        String msg = writeQueue.take();
                        if (out != null) {
                            out.println(msg);
                            out.flush(); // If this blocks, the main Bukkit thread is no longer affected!
                        }
                    }
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
            this.writeThread.setName("McJuice-WriteThread");
            this.writeThread.start();

            String line;
            while (running && (line = in.readLine()) != null) {
                handleLine(line);
            }
        } catch (IOException e) {
            if (running) plugin.getLogger().warning("Session connection lost: " + e.getMessage());
        } finally {
            close();
        }
    }

    private void handleLine(String line) {
        if (line == null || line.trim().isEmpty()) return;

        String[] parts = line.split(",");
        String commandName = parts[0];
        String[] args = parts.length > 1 ? Arrays.copyOfRange(parts, 1, parts.length) : new String[0];

        CommandExecutor executor = registry.getExecutor(commandName);
        if (executor != null) {
            // Route the execution to the main Bukkit thread
            Bukkit.getScheduler().runTask(plugin, () -> {
                try {
                    // This now safely executes on the main server tick
                    executor.execute(args, this);
                } catch (Exception e) {
                    // send() is thread-safe, so we can call it from here
                    send("Fail,Internal execution error: " + e.getMessage());
                }
            });
        } else {
            send("Fail,Unknown command: " + commandName);
        }
    }

    // for ip validation
    public String getRemoteIp() {
        if (socket != null && socket.getInetAddress() != null) {
            return socket.getInetAddress().getHostAddress();
        }
        return null;
    }

    // --- PIN & Session Token Authentication Methods ---

    public String requestPin(String playerName) {
        if (playerName == null || playerName.trim().isEmpty()) return "OFFLINE";
        Player player = Bukkit.getPlayerExact(playerName.trim());
        if (player == null || !player.isOnline()) {
            return "OFFLINE";
        }
        String key = player.getName().toLowerCase();
        String pin = PENDING_PINS.computeIfAbsent(key, k -> String.format("%04d", RANDOM.nextInt(10000)));

        // Only send the chat message once (or every 30s if the user still hasn't entered it)
        long now = System.currentTimeMillis();
        Long lastSent = PIN_LAST_SENT.get(key);
        if (lastSent == null || (now - lastSent) > 30_000L) {
            PIN_LAST_SENT.put(key, now);
            player.sendMessage(ChatColor.translateAlternateColorCodes(
                '&', "&a[MC-ED] &fYour 4-digit link code is: &e&l" + pin
            ));
        }
        return "PENDING";
    }

    public String verifyPin(String playerName, String pin) {
        if (playerName == null || pin == null) return "INVALID";
        String key = playerName.trim().toLowerCase();
        String expected = PENDING_PINS.get(key);
        if (expected != null && expected.equals(pin.trim())) {
            PENDING_PINS.remove(key);
            PIN_LAST_SENT.remove(key);
            this.authenticatedPlayer = playerName.trim();
            String token = UUID.randomUUID().toString();
            ACTIVE_TOKENS.put(token, this.authenticatedPlayer);
            return token;
        }
        return "INVALID";
    }

    public int resumeSession(String playerName, String token) {
        if (playerName == null || token == null) return -1;
        String authorizedPlayer = ACTIVE_TOKENS.get(token.trim());
        if (authorizedPlayer != null && authorizedPlayer.equalsIgnoreCase(playerName.trim())) {
            Player player = Bukkit.getPlayerExact(playerName.trim());
            if (player != null && player.isOnline()) {
                this.authenticatedPlayer = player.getName();
                return player.getEntityId();
            }
        }
        return -1;
    }

    public Player getPlayerById(int id) {
        // Security Gate: Ensure this socket session has authenticated as the target player
        if (this.authenticatedPlayer == null) {
            throw new SecurityException("Unauthenticated socket session. Verify PIN first.");
        }
        for (Player player : Bukkit.getOnlinePlayers()) {
            if (player.getEntityId() == id) {
                if (!player.getName().equalsIgnoreCase(this.authenticatedPlayer)) {
                    throw new SecurityException("Socket is authenticated for " + this.authenticatedPlayer + ", not " + player.getName());
                }
                return player;
            }
        }
        return null;
    }

    // 2. Refactor send to be completely non-blocking and safe for the Bukkit main thread
    public void send(Object obj) {
        if (running && obj != null) {
            writeQueue.offer(obj.toString());
        }
    }

    public void close() {
        running = false;
        plugin.removeEventSubscriber(this);

        // 3. Ensure we interrupt the writer thread so it shuts down cleanly
        if (writeThread != null) {
            writeThread.interrupt();
        }
        try {
            if (socket != null && !socket.isClosed()) socket.close();
        } catch (IOException ignored) {}
    }
}