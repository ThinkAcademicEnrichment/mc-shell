package org.mcshell.mcjuice;

import org.bukkit.plugin.java.JavaPlugin;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class McJuicePlugin extends JavaPlugin {
    private static McJuicePlugin instance;
    private ServerListenerThread listenerThread;

    // The thread-safe list of active event subscribers
    private final List<RemoteSession> eventSubscribers = new CopyOnWriteArrayList<>();

    @Override
    public void onEnable() {
        instance = this;

        // This natively creates the "plugins/McJuice/" folder next to the jar
        // and copies the resources/config.yml into it if it doesn't exist.
        saveDefaultConfig();

        getServer().getPluginManager().registerEvents(new GeneratedEventListener(), this);

        // Read settings from the configuration file
        String host = getConfig().getString("host", "0.0.0.0");
        int port = getConfig().getInt("port", 4721);

        listenerThread = new ServerListenerThread(this, host, port);
        listenerThread.start();

        getLogger().info("McJuice Plugin Enabled. Push Architecture Active on " + host + ":" + port);
    }

    @Override
    public void onDisable() {
        if (listenerThread != null) listenerThread.shutdown();
    }

    public static McJuicePlugin getInstance() { return instance; }

    public void addEventSubscriber(RemoteSession session) {
        if (!eventSubscribers.contains(session)) {
            eventSubscribers.add(session);
        }
    }

    public void removeEventSubscriber(RemoteSession session) {
        eventSubscribers.remove(session);
    }

    /**
     * Pushes an event directly to all subscribed Python sessions instantaneously.
     */
    public void recordEvent(String eventName, String data) {
        String payload = eventName + "," + data;
        for (RemoteSession session : eventSubscribers) {
            if (session.isRunning()) {
                session.send(payload);
            } else {
                removeEventSubscriber(session);
            }
        }
    }
}