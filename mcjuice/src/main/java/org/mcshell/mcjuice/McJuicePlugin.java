package org.mcshell.mcjuice;

import org.bukkit.plugin.java.JavaPlugin;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.List;

public class McJuicePlugin extends JavaPlugin {
    private static McJuicePlugin instance;
    private ServerListenerThread listenerThread;

    // Track active sessions to enable broadcasting events to all clients
    private final List<RemoteSession> activeSessions = new CopyOnWriteArrayList<>();

    @Override
    public void onEnable() {
        instance = this;
        saveDefaultConfig();

        getServer().getPluginManager().registerEvents(new GeneratedEventListener(), this);

        int port = getConfig().getInt("port", 4721);
        listenerThread = new ServerListenerThread(this, "0.0.0.0", port);
        listenerThread.start();

        getLogger().info("McJuice Plugin Enabled. Broadcasting events to Python sessions on port " + port);
    }

    @Override
    public void onDisable() {
        if (listenerThread != null) listenerThread.shutdown();
    }

    public static McJuicePlugin getInstance() { return instance; }

    public void registerSession(RemoteSession session) {
        activeSessions.add(session);
    }

    public void unregisterSession(RemoteSession session) {
        activeSessions.remove(session);
    }

    /**
     * Broadcasts a new event to EVERY active Python session.
     */
    public void recordEvent(String eventName, String data) {
        for (RemoteSession session : activeSessions) {
            session.enqueueEvent(eventName, data);
        }
    }

    /**
     * Clears event queues for all sessions.
     */
    public void clearEvents() {
        for (RemoteSession session : activeSessions) {
            session.clearEvents();
        }
    }
}