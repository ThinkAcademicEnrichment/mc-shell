package org.mcshell.mcjuice;
import org.bukkit.event.Listener;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;

public class GeneratedEventListener implements Listener {

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onRightblockhit(org.bukkit.event.player.PlayerInteractEvent event) {
        if (!(event.getAction() == org.bukkit.event.block.Action.RIGHT_CLICK_BLOCK && event.getClickedBlock() != null)) return;
        String data = event.getClickedBlock().getX() + "," + event.getClickedBlock().getY() + "," + event.getClickedBlock().getZ() + "," + event.getBlockFace().ordinal() + "," + event.getPlayer().getEntityId() + "," + event.getPlayer().getName();
        McJuicePlugin.getInstance().recordEvent("rightBlockHit", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onLeftblockhit(org.bukkit.event.player.PlayerInteractEvent event) {
        if (!(event.getAction() == org.bukkit.event.block.Action.LEFT_CLICK_BLOCK && event.getClickedBlock() != null)) return;
        String data = event.getClickedBlock().getX() + "," + event.getClickedBlock().getY() + "," + event.getClickedBlock().getZ() + "," + event.getBlockFace().ordinal() + "," + event.getPlayer().getEntityId() + "," + event.getPlayer().getName();
        McJuicePlugin.getInstance().recordEvent("leftBlockHit", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onBlockplace(org.bukkit.event.block.BlockPlaceEvent event) {
        String data = event.getBlock().getX() + "," + event.getBlock().getY() + "," + event.getBlock().getZ() + "," + event.getBlock().getType().name() + "," + event.getPlayer().getEntityId() + "," + event.getPlayer().getName();
        McJuicePlugin.getInstance().recordEvent("blockPlace", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onBlockbreak(org.bukkit.event.block.BlockBreakEvent event) {
        String data = event.getBlock().getX() + "," + event.getBlock().getY() + "," + event.getBlock().getZ() + "," + event.getPlayer().getEntityId() + "," + event.getPlayer().getName();
        McJuicePlugin.getInstance().recordEvent("blockBreak", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onChat(org.bukkit.event.player.AsyncPlayerChatEvent event) {
        String data = event.getPlayer().getEntityId() + "," + event.getPlayer().getName() + "," + event.getMessage();
        McJuicePlugin.getInstance().recordEvent("chat", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onProjectilehitblock(org.bukkit.event.entity.ProjectileHitEvent event) {
        if (!(event.getHitBlock() != null)) return;
        String data = event.getHitBlock().getX() + "," + event.getHitBlock().getY() + "," + event.getHitBlock().getZ() + "," + event.getEntity().getType().name();
        McJuicePlugin.getInstance().recordEvent("projectileHitBlock", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onProjectilehitentity(org.bukkit.event.entity.ProjectileHitEvent event) {
        if (!(event.getHitEntity() != null)) return;
        String data = event.getHitEntity().getEntityId() + "," + event.getHitEntity().getName() + "," + event.getEntity().getType().name() + "," + event.getHitEntity().getLocation().getX() + "," + event.getHitEntity().getLocation().getY() + "," + event.getHitEntity().getLocation().getZ();
        McJuicePlugin.getInstance().recordEvent("projectileHitEntity", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onProjectilelaunch(org.bukkit.event.entity.ProjectileLaunchEvent event) {
        if (!(event.getEntity().getShooter() instanceof org.bukkit.entity.Player)) return;
        String data = ((org.bukkit.entity.Player)event.getEntity().getShooter()).getEntityId() + "," + ((org.bukkit.entity.Player)event.getEntity().getShooter()).getName() + "," + event.getEntity().getType().name();
        McJuicePlugin.getInstance().recordEvent("projectileLaunch", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onPlayerdeath(org.bukkit.event.entity.PlayerDeathEvent event) {
        String data = event.getEntity().getEntityId() + "," + event.getEntity().getName() + "," + event.getEntity().getLocation().getX() + "," + event.getEntity().getLocation().getY() + "," + event.getEntity().getLocation().getZ();
        McJuicePlugin.getInstance().recordEvent("playerDeath", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onPlayerrespawn(org.bukkit.event.player.PlayerRespawnEvent event) {
        String data = event.getPlayer().getEntityId() + "," + event.getPlayer().getName() + "," + event.getRespawnLocation().getX() + "," + event.getRespawnLocation().getY() + "," + event.getRespawnLocation().getZ();
        McJuicePlugin.getInstance().recordEvent("playerRespawn", data);
    }
}