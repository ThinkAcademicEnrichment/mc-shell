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
 * It dispatches commands to the code-generated registry and provides
 * utility helpers for the generated logic.
 */
public class RemoteSession implements Runnable {
    private final Socket socket;
    private final McJuicePlugin plugin;
    private BufferedReader in;
    private PrintWriter out;
    private boolean running = true;

    // The registry object that contains all our generated command mappings
    private final GeneratedCommandRegistry registry = new GeneratedCommandRegistry();

    public RemoteSession(McJuicePlugin plugin, Socket socket) {
        this.plugin = plugin;
        this.socket = socket;
    }

    @Override
    public void run() {
        try {
            this.in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            this.out = new PrintWriter(socket.getOutputStream(), true);

            String line;
            while (running && (line = in.readLine()) != null) {
                handleLine(line);
            }
        } catch (IOException e) {
            plugin.logger.warning("Session connection lost: " + e.getMessage());
        } finally {
            close();
        }
    }

    /**
     * Splits incoming strings into command name and arguments.
     * Protocol: "namespace.command,arg1,arg2"
     */
    private void handleLine(String line) {
        if (line == null || line.trim().isEmpty()) return;

        String[] parts = line.split(",");
        String commandName = parts[0];
        String[] args = parts.length > 1 ? Arrays.copyOfRange(parts, 1, parts.length) : new String[0];

        dispatchCommand(commandName, args);
    }

    /**
     * Hand-off to the GeneratedCommandRegistry.
     */
    private void dispatchCommand(String commandName, String[] args) {
        CommandExecutor executor = registry.getExecutor(commandName);

        if (executor != null) {
            try {
                // Execute the generated lambda logic
                executor.execute(args, this);
            } catch (Exception e) {
                send("Fail,Error executing " + commandName + ": " + e.getMessage());
                plugin.logger.severe("Command Error [" + commandName + "]: " + e.getMessage());
            }
        } else {
            send("Fail,Unknown command: " + commandName);
        }
    }

    /**
     * HELPER: Parses coordinate strings into a Bukkit Location.
     * Used by generated code to simplify logic.
     */
    public Location parseLocation(String xStr, String yStr, String zStr) {
        double x = Double.parseDouble(xStr);
        double y = Double.parseDouble(yStr);
        double z = Double.parseDouble(zStr);
        World world = Bukkit.getWorlds().get(0); // Default to primary world
        return new Location(world, x, y, z);
    }

    /**
     * HELPER: Safely finds a player by entity ID.
     */
    public Player getPlayerById(int id) {
        for (Player player : Bukkit.getOnlinePlayers()) {
            if (player.getEntityId() == id) {
                return player;
            }
        }
        return null;
    }

    /**
     * Sends a message back to the Python client.
     */
    public void send(Object obj) {
        if (out != null) {
            out.println(obj.toString());
        }
    }

    public void close() {
        running = false;
        try {
            if (socket != null) socket.close();
        } catch (IOException ignored) {}
    }
}