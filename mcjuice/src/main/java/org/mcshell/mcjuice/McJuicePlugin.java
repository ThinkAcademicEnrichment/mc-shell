package org.mcshell.mcjuice;

import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.plugin.java.JavaPlugin;
import java.util.logging.Logger;

/**
 * McJuicePlugin is the primary entry point for the Bukkit/Paper server plugin.
 * It manages the lifecycle of the socket listener and handles configuration.
 */
public class McJuicePlugin extends JavaPlugin {
    private static McJuicePlugin instance;
    private ServerListenerThread listenerThread;
    public Logger logger;

    @Override
    public void onEnable() {
        instance = this;
        this.logger = getLogger();

        // 1. Initialize and save default configuration (config.yml) if it doesn't exist
        saveDefaultConfig();
        FileConfiguration config = getConfig();

        // 2. Read networking parameters from config.yml
        String hostname = config.getString("hostname", "0.0.0.0");
        int port = config.getInt("port", 4721); // Your chosen port

        logger.info("McJuice is starting on " + hostname + ":" + port);

        // 3. Start the socket listener thread
        try {
            listenerThread = new ServerListenerThread(this, hostname, port);
            listenerThread.start();
            logger.info("Socket listener thread started successfully.");
        } catch (Exception e) {
            logger.severe("Failed to start socket listener: " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public void onDisable() {
        // Shut down the listener thread gracefully
        if (listenerThread != null) {
            listenerThread.shutdown();
        }
        logger.info("McJuice has been disabled.");
    }

    /**
     * Global access to the plugin instance for other components like RemoteSession.
     */
    public static McJuicePlugin getInstance() {
        return instance;
    }
}