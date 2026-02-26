package org.mcshell.mcjuice;

import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.World;
import org.bukkit.entity.Player;
import java.io.*;
import java.net.Socket;
import java.util.Arrays;

/**
 * RemoteSession handles a single TCP connection from a Python client.
 */
public class RemoteSession implements Runnable {
    private final Socket socket;
    private final McJuicePlugin plugin;
    private BufferedReader in;
    private PrintWriter out;
    private volatile boolean running = true;

    private final GeneratedCommandRegistry registry = new GeneratedCommandRegistry();

    public RemoteSession(McJuicePlugin plugin, Socket socket) {
        this.plugin = plugin;
        this.socket = socket;
    }

    public boolean isRunning() {
        return running;
    }

    @Override
    public void run() {
        try {
            this.in = new BufferedReader(new InputStreamReader(socket.getInputStream(), "UTF-8"));
            this.out = new PrintWriter(new BufferedWriter(new OutputStreamWriter(socket.getOutputStream(), "UTF-8")), true);

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
            try {
                executor.execute(args, this);
            } catch (Exception e) {
                send("Fail,Internal execution error: " + e.getMessage());
            }
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

    /**
     * Sends data back to Python. Synchronized to prevent interleaving lines.
     */
    public synchronized void send(Object obj) {
        if (out != null) {
            String msg = (obj == null) ? "" : obj.toString();
            out.println(msg);
            out.flush();
        }
    }

    public void close() {
        running = false;
        try {
            if (socket != null && !socket.isClosed()) socket.close();
        } catch (IOException ignored) {}
    }
}