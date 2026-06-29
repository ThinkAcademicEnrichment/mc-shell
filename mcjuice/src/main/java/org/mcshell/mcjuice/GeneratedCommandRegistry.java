package org.mcshell.mcjuice;

import org.bukkit.Bukkit;
import org.bukkit.World;
import org.bukkit.entity.Player;
import org.bukkit.entity.EntityType;
import org.bukkit.Location;
import org.bukkit.util.Vector;
import org.bukkit.Material;
import java.util.HashMap;
import java.util.Map;

@SuppressWarnings("deprecation")
public class GeneratedCommandRegistry {
    private final Map<String, CommandExecutor> registry = new HashMap<>();

    public GeneratedCommandRegistry() {
        // Root level helper
        registry.put("ping", (args, session) -> session.send("pong"));
        // --- PUSH ARCHITECTURE: Register event subscription ---
        registry.put("events.subscribe", (args, session) -> { McJuicePlugin.getInstance().addEventSubscriber(session); session.send("OK"); });

        registry.put("player.getPos", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getLocation();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setPos", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[1]);
            final double _arg_y = Double.parseDouble(args[2]);
            final double _arg_z = Double.parseDouble(args[3]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    player.teleport(new Location(player.getWorld(), _arg_x, _arg_y, _arg_z, player.getLocation().getYaw(), player.getLocation().getPitch()));
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getTilePos", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getLocation();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getBlockX()+","+l.getBlockY()+","+l.getBlockZ()); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setTilePos", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[1]);
            final double _arg_y = Double.parseDouble(args[2]);
            final double _arg_z = Double.parseDouble(args[3]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    player.teleport(new Location(player.getWorld(), Math.floor(_arg_x) + 0.5, Math.floor(_arg_y), Math.floor(_arg_z) + 0.5, player.getLocation().getYaw(), player.getLocation().getPitch()));
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getDirection", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getEyeLocation().getDirection();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setDirection", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[1]);
            final double _arg_y = Double.parseDouble(args[2]);
            final double _arg_z = Double.parseDouble(args[3]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    player.teleport(player.getLocation().setDirection(new org.bukkit.util.Vector(_arg_x, _arg_y, _arg_z)));
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getRotation", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getLocation().getYaw();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setRotation", (args, session) -> {
            final double _arg_yaw = Double.parseDouble(args[1]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    {
  org.bukkit.Location l = player.getLocation();
  l.setYaw((float)_arg_yaw);
  player.teleport(l);
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getPitch", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getLocation().getPitch();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setPitch", (args, session) -> {
            final double _arg_pitch = Double.parseDouble(args[1]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    {
  org.bukkit.Location l = player.getLocation();
  l.setPitch((float)_arg_pitch);
  player.teleport(l);
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getHealth", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getHealth();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setHealth", (args, session) -> {
            final double _arg_health = Double.parseDouble(args[1]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    player.setHealth(_arg_health);
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getFoodLevel", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getFoodLevel();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.setFoodLevel", (args, session) -> {
            final int _arg_level = Integer.parseInt(args[1]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    player.setFoodLevel(_arg_level);
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.getDeaths", (args, session) -> {
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    Object res = player.getStatistic(org.bukkit.Statistic.DEATHS);
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("player.sendTitle", (args, session) -> {
            final String _arg_title = args[1];
            final String _arg_subtitle = args[2];
            final int _arg_stay = Integer.parseInt(args[3]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    int eid = Integer.parseInt(args[0]);
                    Player player = session.getPlayerById(eid);
                    if (player == null) { session.send("Fail,No Player"); return; }
                    player.sendTitle(_arg_title, _arg_subtitle, 10, _arg_stay, 20);
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.getBlock", (args, session) -> {
            final int _arg_x = Integer.parseInt(args[0]);
            final int _arg_y = Integer.parseInt(args[1]);
            final int _arg_z = Integer.parseInt(args[2]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    Object res = world.getBlockAt(_arg_x, _arg_y, _arg_z).getType().name();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.setBlock", (args, session) -> {
            final int _arg_x = Integer.parseInt(args[0]);
            final int _arg_y = Integer.parseInt(args[1]);
            final int _arg_z = Integer.parseInt(args[2]);
            final String _arg_block = args[3];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    world.getBlockAt(_arg_x, _arg_y, _arg_z).setType(org.bukkit.Material.matchMaterial(_arg_block));
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.getBlocks", (args, session) -> {
            final int _arg_x1 = Integer.parseInt(args[0]);
            final int _arg_y1 = Integer.parseInt(args[1]);
            final int _arg_z1 = Integer.parseInt(args[2]);
            final int _arg_x2 = Integer.parseInt(args[3]);
            final int _arg_y2 = Integer.parseInt(args[4]);
            final int _arg_z2 = Integer.parseInt(args[5]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    {
  int x1 = _arg_x1, y1 = _arg_y1, z1 = _arg_z1, x2 = _arg_x2, y2 = _arg_y2, z2 = _arg_z2;
  int xMin = Math.min(x1, x2), xMax = Math.max(x1, x2);
  int yMin = Math.min(y1, y2), yMax = Math.max(y1, y2);
  int zMin = Math.min(z1, z2), zMax = Math.max(z1, z2);
  StringBuilder sb = new StringBuilder();
  for (int z = zMin; z <= zMax; z++) {
    for (int y = yMin; y <= yMax; y++) {
      for (int x = xMin; x <= xMax; x++) {
        sb.append(world.getBlockAt(x, y, z).getType().name()).append(",");
      }
    }
  }
  if (sb.length() > 0) sb.setLength(sb.length() - 1);
  session.send(sb.toString());
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.setBlocks", (args, session) -> {
            final int _arg_x1 = Integer.parseInt(args[0]);
            final int _arg_y1 = Integer.parseInt(args[1]);
            final int _arg_z1 = Integer.parseInt(args[2]);
            final int _arg_x2 = Integer.parseInt(args[3]);
            final int _arg_y2 = Integer.parseInt(args[4]);
            final int _arg_z2 = Integer.parseInt(args[5]);
            final String _arg_block = args[6];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    {
  int xMin = Math.min(_arg_x1, _arg_x2), xMax = Math.max(_arg_x1, _arg_x2);
  int yMin = Math.min(_arg_y1, _arg_y2), yMax = Math.max(_arg_y1, _arg_y2);
  int zMin = Math.min(_arg_z1, _arg_z2), zMax = Math.max(_arg_z1, _arg_z2);
  Material mat = Material.matchMaterial(_arg_block);
  for (int x = xMin; x <= xMax; x++) {
    for (int y = yMin; y <= yMax; y++) {
      for (int z = zMin; z <= zMax; z++) {
        world.getBlockAt(x, y, z).setType(mat, false);
      }
    }
  }
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.getHeight", (args, session) -> {
            final int _arg_x = Integer.parseInt(args[0]);
            final int _arg_z = Integer.parseInt(args[1]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    Object res = world.getHighestBlockYAt(_arg_x, _arg_z);
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.getPlayerId", (args, session) -> {
            final String _arg_name = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    Object res = Bukkit.getPlayer(_arg_name).getEntityId();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.spawnEntity", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[0]);
            final double _arg_y = Double.parseDouble(args[1]);
            final double _arg_z = Double.parseDouble(args[2]);
            final String _arg_type = args[3];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    Object res = world.spawnEntity(new Location(world, _arg_x, _arg_y, _arg_z), GeneratedCommandRegistry.matchEntityRobustly(_arg_type)).getEntityId();
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.removeEntity", (args, session) -> {
            final int _arg_id = Integer.parseInt(args[0]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    world.getEntities().stream().filter(e -> e.getEntityId() == _arg_id).forEach(org.bukkit.entity.Entity::remove);
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.getEntitiesInRadius", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[0]);
            final double _arg_y = Double.parseDouble(args[1]);
            final double _arg_z = Double.parseDouble(args[2]);
            final double _arg_r = Double.parseDouble(args[3]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    Object res = world.getNearbyEntities(new Location(world, _arg_x, _arg_y, _arg_z), _arg_r, _arg_r, _arg_r).stream().map(e -> String.valueOf(e.getEntityId())).collect(java.util.stream.Collectors.joining(","));
                    if (res == null) { session.send("null"); }
                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }
                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }
                    else { session.send(String.valueOf(res)); }
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.createExplosion", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[0]);
            final double _arg_y = Double.parseDouble(args[1]);
            final double _arg_z = Double.parseDouble(args[2]);
            final double _arg_power = Double.parseDouble(args[3]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    world.createExplosion(_arg_x, _arg_y, _arg_z, (float)_arg_power);
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.setSign", (args, session) -> {
            final int _arg_x = Integer.parseInt(args[0]);
            final int _arg_y = Integer.parseInt(args[1]);
            final int _arg_z = Integer.parseInt(args[2]);
            final String _arg_sign_type = args[3];
            final int _arg_direction = Integer.parseInt(args[4]);
            final String _arg_l1 = args[5];
            final String _arg_l2 = args[6];
            final String _arg_l3 = args[7];
            final String _arg_l4 = args[8];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    {
  org.bukkit.block.Block b = world.getBlockAt(_arg_x, _arg_y, _arg_z);
  b.setType(org.bukkit.Material.valueOf(_arg_sign_type.toUpperCase()));
  if (b.getBlockData() instanceof org.bukkit.block.data.Rotatable) {
      org.bukkit.block.data.Rotatable rot = (org.bukkit.block.data.Rotatable) b.getBlockData();
      org.bukkit.block.BlockFace[] faces = {org.bukkit.block.BlockFace.SOUTH, org.bukkit.block.BlockFace.SOUTH_SOUTH_WEST, org.bukkit.block.BlockFace.SOUTH_WEST, org.bukkit.block.BlockFace.WEST_SOUTH_WEST, org.bukkit.block.BlockFace.WEST, org.bukkit.block.BlockFace.WEST_NORTH_WEST, org.bukkit.block.BlockFace.NORTH_WEST, org.bukkit.block.BlockFace.NORTH_NORTH_WEST, org.bukkit.block.BlockFace.NORTH, org.bukkit.block.BlockFace.NORTH_NORTH_EAST, org.bukkit.block.BlockFace.NORTH_EAST, org.bukkit.block.BlockFace.EAST_NORTH_EAST, org.bukkit.block.BlockFace.EAST, org.bukkit.block.BlockFace.EAST_SOUTH_EAST, org.bukkit.block.BlockFace.SOUTH_EAST, org.bukkit.block.BlockFace.SOUTH_SOUTH_EAST};
      rot.setRotation(faces[_arg_direction % 16]);
      b.setBlockData(rot);
  }
  if (b.getState() instanceof org.bukkit.block.Sign) {
      org.bukkit.block.Sign sign = (org.bukkit.block.Sign) b.getState();
      sign.setLine(0, _arg_l1); sign.setLine(1, _arg_l2); sign.setLine(2, _arg_l3); sign.setLine(3, _arg_l4);
      sign.update();
  }
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.dropItem", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[0]);
            final double _arg_y = Double.parseDouble(args[1]);
            final double _arg_z = Double.parseDouble(args[2]);
            final String _arg_item = args[3];
            final int _arg_amount = Integer.parseInt(args[4]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    world.dropItemNaturally(new org.bukkit.Location(world, _arg_x, _arg_y, _arg_z), new org.bukkit.inventory.ItemStack(org.bukkit.Material.matchMaterial(_arg_item), _arg_amount));
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.dropRandomLoot", (args, session) -> {
            final double _arg_x = Double.parseDouble(args[0]);
            final double _arg_y = Double.parseDouble(args[1]);
            final double _arg_z = Double.parseDouble(args[2]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    {
  org.bukkit.Material[] pool = {
    org.bukkit.Material.DIAMOND, org.bukkit.Material.GOLD_INGOT, org.bukkit.Material.IRON_INGOT, 
    org.bukkit.Material.EMERALD, org.bukkit.Material.ENCHANTED_GOLDEN_APPLE, 
    org.bukkit.Material.ENDER_PEARL, org.bukkit.Material.TOTEM_OF_UNDYING, 
    org.bukkit.Material.EXPERIENCE_BOTTLE, org.bukkit.Material.SADDLE
  };
  org.bukkit.Material choice = pool[new java.util.Random().nextInt(pool.length)];
  world.dropItemNaturally(new org.bukkit.Location(world, _arg_x, _arg_y, _arg_z), new org.bukkit.inventory.ItemStack(choice, 1));
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.setContainerItem", (args, session) -> {
            final int _arg_x = Integer.parseInt(args[0]);
            final int _arg_y = Integer.parseInt(args[1]);
            final int _arg_z = Integer.parseInt(args[2]);
            final int _arg_slot = Integer.parseInt(args[3]);
            final String _arg_item = args[4];
            final int _arg_amount = Integer.parseInt(args[5]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    {
  org.bukkit.block.Block b = world.getBlockAt(_arg_x, _arg_y, _arg_z);
  if (b.getState() instanceof org.bukkit.inventory.InventoryHolder) {
      org.bukkit.inventory.Inventory inv = ((org.bukkit.inventory.InventoryHolder)b.getState()).getInventory();
      inv.setItem(_arg_slot, new org.bukkit.inventory.ItemStack(org.bukkit.Material.matchMaterial(_arg_item), _arg_amount));
  }
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("world.getEntityName", (args, session) -> {
            final int _arg_id = Integer.parseInt(args[0]);
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    World world = Bukkit.getWorlds().get(0);
                    {
  org.bukkit.entity.Entity e = null;
  for (org.bukkit.World w : Bukkit.getWorlds()) {
      for (org.bukkit.entity.Entity ent : w.getEntities()) {
          if (ent.getEntityId() == _arg_id) { e = ent; break; }
      }
      if (e != null) break;
  }
  session.send(e != null ? e.getName() : "Unknown");
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("chat.post", (args, session) -> {
            final String _arg_message = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    Bukkit.broadcastMessage(_arg_message);
                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("admin.isMaterialItem", (args, session) -> {
            final String _arg_material = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    {
   org.bukkit.Material material = org.bukkit.Material.matchMaterial(_arg_material.toUpperCase());
   if (material != null) { session.send(String.valueOf(material.isItem())); }
   else { session.send("null");}
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("admin.isMaterialBlock", (args, session) -> {
            final String _arg_material = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    {
   org.bukkit.Material material = org.bukkit.Material.matchMaterial(_arg_material.toUpperCase());
   if (material != null) { session.send(String.valueOf(material.isBlock())); }
   else { session.send("null");}
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("admin.isMaterialEdible", (args, session) -> {
            final String _arg_material = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    {
   org.bukkit.Material material = org.bukkit.Material.matchMaterial(_arg_material.toUpperCase());
   if (material != null) { session.send(String.valueOf(material.isEdible())); }
   else { session.send("null");}
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("admin.isMaterialFuel", (args, session) -> {
            final String _arg_material = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    {
   org.bukkit.Material material = org.bukkit.Material.matchMaterial(_arg_material.toUpperCase());
   if (material != null) { session.send(String.valueOf(material.isFuel())); }
   else { session.send("null");}
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
        registry.put("admin.allMaterialProperties", (args, session) -> {
            final String _arg_material = args[0];
            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {
                try {
                    {
   org.bukkit.Material material = org.bukkit.Material.matchMaterial(_arg_material.toUpperCase());

   if (material != null) { 
    String data = String.valueOf(material.isItem()) + "," 
      + String.valueOf(material.isBlock()) + "," 
      + String.valueOf(material.isEdible()) + "," 
      + String.valueOf(material.isFuel());
    session.send(data); }
   else { session.send("null");}
}

                } catch (Exception e) {
                    session.send("Fail," + e.getMessage());
                }
            });
        });
    }

    public CommandExecutor getExecutor(String name) { return registry.get(name); }

    public static EntityType matchEntityRobustly(String type) {
        try {
            Class<?> registryClass = Class.forName("org.bukkit.Registry");
            Object entityTypeRegistry = registryClass.getField("ENTITY_TYPE").get(null);
            
            Class<?> namespacedKeyClass = Class.forName("org.bukkit.NamespacedKey");
            Object key = namespacedKeyClass.getMethod("fromString", String.class).invoke(null, type.toLowerCase(java.util.Locale.ROOT));
            
            if (key != null) {
                return (EntityType) registryClass.getMethod("get", namespacedKeyClass).invoke(entityTypeRegistry, key);
            }
        } catch (Exception e) {
            try {
                return EntityType.valueOf(type.toUpperCase(java.util.Locale.ROOT));
            } catch (IllegalArgumentException ex) {
                return null;
            }
        }
        return null;
    }
}