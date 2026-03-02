package org.mcshell.mcjuice;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * ServerListenerThread runs in the background and accepts
 * incoming TCP connections from Python clients.
 */
public class ServerListenerThread extends Thread {
    private final McJuicePlugin plugin;
    private final String hostname;
    private final int port;
    private ServerSocket serverSocket;
    private boolean running = true;

    // Use a synchronized list to prevent ConcurrentModificationException
    private final List<RemoteSession> sessions = Collections.synchronizedList(new ArrayList<>());

    public ServerListenerThread(McJuicePlugin plugin, String hostname, int port) {
        super("McJuice-Listener");
        this.plugin = plugin;
        this.hostname = hostname;
        this.port = port;
    }

    @Override
    public void run() {
        try {
            serverSocket = new ServerSocket();
            serverSocket.bind(new InetSocketAddress(hostname, port));
            plugin.getLogger().info("McJuice listening for Python connections on " + hostname + ":" + port);

            while (running) {
                Socket clientSocket = serverSocket.accept();

                // Create a new session and start it in its own thread
                RemoteSession session = new RemoteSession(plugin, clientSocket);
                sessions.add(session);

                // Cleanup closed sessions occasionally
                sessions.removeIf(s -> !s.isRunning());

                new Thread(session).start();
            }
        } catch (IOException e) {
            if (running) {
                plugin.getLogger().severe("Socket error: " + e.getMessage());
            }
        } finally {
            shutdown();
        }
    }

    public void shutdown() {
        running = false;
        try {
            if (serverSocket != null && !serverSocket.isClosed()) {
                serverSocket.close();
            }
            synchronized (sessions) {
                for (RemoteSession session : sessions) {
                    session.close();
                }
                sessions.clear();
            }
        } catch (IOException ignored) {}
    }
}