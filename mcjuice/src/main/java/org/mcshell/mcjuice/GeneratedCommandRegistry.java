package org.mcshell.mcjuice;

import org.bukkit.entity.Player;
import org.bukkit.Location;
import java.util.HashMap;
import java.util.Map;

public class GeneratedCommandRegistry {
    private final Map<String, CommandExecutor> registry = new HashMap<>();

    public GeneratedCommandRegistry() {
        // Root level helper
        registry.put("ping", (args, session) -> session.send("pong"));

        registry.put("player.getPos", (args, session) -> {
            if (args.length < 1) { session.send("Fail,Missing ID"); return; }
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Location loc = player.getLocation();
            session.send(loc.getX() + "," + loc.getY() + "," + loc.getZ());
        });
        registry.put("player.getHealth", (args, session) -> {
            if (args.length < 1) { session.send("Fail,Missing ID"); return; }
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            Object res = player.getHealth();
            session.send(String.valueOf(res));
        });
        registry.put("player.setHealth", (args, session) -> {
            if (args.length < 1) { session.send("Fail,Missing ID"); return; }
            int entityId = Integer.parseInt(args[0]);
            Player player = session.getPlayerById(entityId);
            if (player == null) { session.send("Fail,Player not found"); return; }
            double health = Double.parseDouble(args[1]);
            player.setHealth(health);
            session.send("OK");
        });
    }

    public CommandExecutor getExecutor(String name) { return registry.get(name); }
}