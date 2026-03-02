package org.mcshell.mcjuice;

public interface CommandExecutor {
    void execute(String[] args, RemoteSession session);
}