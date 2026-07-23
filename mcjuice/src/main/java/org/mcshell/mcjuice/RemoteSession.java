package org.mcshell.mcjuice;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import java.io.*;
import java.net.Socket;
import java.util.Arrays;
import java.util.concurrent.LinkedBlockingQueue;

public class RemoteSession implements Runnable {
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

    public Player getPlayerById(int id) {
        for (Player player : Bukkit.getOnlinePlayers()) {
            if (player.getEntityId() == id) return player;
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