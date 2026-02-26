package org.mcshell.mcjuice;

import org.bukkit.plugin.java.JavaPlugin;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.Map;

public class McJuicePlugin extends JavaPlugin {
    private static McJuicePlugin instance;
    private ServerListenerThread listenerThread;

    // Dynamic Event Queues map event names to their specific queue
    private final Map<String, ConcurrentLinkedQueue<String>> eventQueues = new ConcurrentHashMap<>();

    @Override
    public void onEnable() {
        instance = this;
        saveDefaultConfig();

        // Register the dynamically generated event listener
        getServer().getPluginManager().registerEvents(new GeneratedEventListener(), this);

        int port = getConfig().getInt("port", 4721);
        listenerThread = new ServerListenerThread(this, "0.0.0.0", port);
        listenerThread.start();

        getLogger().info("McJuice Plugin Enabled. Listening for Python connections on port " + port);
    }

    @Override
    public void onDisable() {
        if (listenerThread != null) listenerThread.shutdown();
    }

    public static McJuicePlugin getInstance() { return instance; }

    // --- Dynamic Event Polling Methods ---

    /**
     * Called by GeneratedEventListener to store new events
     */
    public void recordEvent(String eventName, String data) {
        eventQueues.computeIfAbsent(eventName, k -> new ConcurrentLinkedQueue<>()).add(data);
    }

    /**
     * Called by GeneratedCommandRegistry to retrieve events for Python
     */
    public String pollEvents(String eventName) {
        ConcurrentLinkedQueue<String> queue = eventQueues.get(eventName);
        if (queue == null || queue.isEmpty()) return "";

        StringBuilder sb = new StringBuilder();
        while (!queue.isEmpty()) {
            sb.append(queue.poll()).append("|");
        }
        return sb.toString();
    }

    /**
     * Clears all event queues
     */
    public void clearEvents() {
        eventQueues.clear();
    }
}