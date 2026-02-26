package org.mcshell.mcjuice;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.util.ArrayList;
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
    private final List<RemoteSession> sessions = new ArrayList<>();

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
            plugin.logger.info("Listening for Python connections on " + hostname + ":" + port);

            while (running) {
                Socket clientSocket = serverSocket.accept();

                // Create a new session and start it in its own thread
                RemoteSession session = new RemoteSession(plugin, clientSocket);
                sessions.add(session);
                new Thread(session).start();
            }
        } catch (IOException e) {
            if (running) {
                plugin.logger.severe("Socket error: " + e.getMessage());
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
            // Close all active sessions
            for (RemoteSession session : sessions) {
                session.close();
            }
        } catch (IOException ignored) {}
    }
}