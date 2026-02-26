package org.mcshell.mcjuice;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.Location;
import org.bukkit.util.Vector;
import java.util.HashMap;
import java.util.Map;

public class GeneratedCommandRegistry {
    private final Map<String, CommandExecutor> registry = new HashMap<>();

    public GeneratedCommandRegistry() {
        // Root level helper
        registry.put("ping", (args, session) -> session.send("pong"));

        // Support for MCJuiceClient.create(playerName=...)
        registry.put("world.getPlayerId", (args, session) -> {
            if (args.length < 1) { session.send("Fail,Missing Name"); return; }
            Player p = Bukkit.getPlayer(args[0]);
            if (p != null) {
                session.send(String.valueOf(p.getEntityId()));
            } else {
                session.send("Fail,Player not found");
            }
        });

        registry.put("player.getPos", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object result = player.getLocation();
            if (result == null) {
                session.send("null");
            } else if (result instanceof Location) {
                Location l = (Location) result;
                session.send(l.getX() + "," + l.getY() + "," + l.getZ());
            } else if (result instanceof Vector) {
                Vector v = (Vector) result;
                session.send(v.getX() + "," + v.getY() + "," + v.getZ());
            } else {
                session.send(String.valueOf(result));
            }
        });
        registry.put("player.setPos", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            double x = Double.parseDouble(args[1]);
            double y = Double.parseDouble(args[2]);
            double z = Double.parseDouble(args[3]);
            player.teleport(new Location(player.getWorld(), x, y, z, player.getLocation().getYaw(), player.getLocation().getPitch()));
            session.send("OK");
        });
        registry.put("player.getDirection", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object result = player.getEyeLocation().getDirection();
            if (result == null) {
                session.send("null");
            } else if (result instanceof Location) {
                Location l = (Location) result;
                session.send(l.getX() + "," + l.getY() + "," + l.getZ());
            } else if (result instanceof Vector) {
                Vector v = (Vector) result;
                session.send(v.getX() + "," + v.getY() + "," + v.getZ());
            } else {
                session.send(String.valueOf(result));
            }
        });
        registry.put("player.getRotation", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object result = player.getLocation().getYaw();
            if (result == null) {
                session.send("null");
            } else if (result instanceof Location) {
                Location l = (Location) result;
                session.send(l.getX() + "," + l.getY() + "," + l.getZ());
            } else if (result instanceof Vector) {
                Vector v = (Vector) result;
                session.send(v.getX() + "," + v.getY() + "," + v.getZ());
            } else {
                session.send(String.valueOf(result));
            }
        });
        registry.put("player.getPitch", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object result = player.getLocation().getPitch();
            if (result == null) {
                session.send("null");
            } else if (result instanceof Location) {
                Location l = (Location) result;
                session.send(l.getX() + "," + l.getY() + "," + l.getZ());
            } else if (result instanceof Vector) {
                Vector v = (Vector) result;
                session.send(v.getX() + "," + v.getY() + "," + v.getZ());
            } else {
                session.send(String.valueOf(result));
            }
        });
        registry.put("player.getHealth", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object result = player.getHealth();
            if (result == null) {
                session.send("null");
            } else if (result instanceof Location) {
                Location l = (Location) result;
                session.send(l.getX() + "," + l.getY() + "," + l.getZ());
            } else if (result instanceof Vector) {
                Vector v = (Vector) result;
                session.send(v.getX() + "," + v.getY() + "," + v.getZ());
            } else {
                session.send(String.valueOf(result));
            }
        });
        registry.put("player.setHealth", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            double health = Double.parseDouble(args[1]);
            player.setHealth(health);
            session.send("OK");
        });
        registry.put("player.getFoodLevel", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object result = player.getFoodLevel();
            if (result == null) {
                session.send("null");
            } else if (result instanceof Location) {
                Location l = (Location) result;
                session.send(l.getX() + "," + l.getY() + "," + l.getZ());
            } else if (result instanceof Vector) {
                Vector v = (Vector) result;
                session.send(v.getX() + "," + v.getY() + "," + v.getZ());
            } else {
                session.send(String.valueOf(result));
            }
        });
        registry.put("player.setFoodLevel", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            int level = Integer.parseInt(args[1]);
            player.setFoodLevel(level);
            session.send("OK");
        });
        registry.put("player.sendMessage", (args, session) -> {
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            String message = args[1];
            player.sendMessage(message);
            session.send("OK");
        });
    }

    public CommandExecutor getExecutor(String name) { return registry.get(name); }
}