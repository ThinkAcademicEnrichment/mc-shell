package org.mcshell.mcjuice;
import org.bukkit.event.Listener;
import org.bukkit.event.EventHandler;
import org.bukkit.event.EventPriority;

public class GeneratedEventListener implements Listener {

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onBlockhit(org.bukkit.event.player.PlayerInteractEvent event) {
        if (!(event.getAction() == org.bukkit.event.block.Action.RIGHT_CLICK_BLOCK && event.getClickedBlock() != null)) return;
        String data = event.getClickedBlock().getX() + "," + event.getClickedBlock().getY() + "," + event.getClickedBlock().getZ() + "," + event.getBlockFace().ordinal() + "," + event.getPlayer().getEntityId();
        McJuicePlugin.getInstance().recordEvent("blockHit", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onBlockplace(org.bukkit.event.block.BlockPlaceEvent event) {
        String data = event.getBlock().getX() + "," + event.getBlock().getY() + "," + event.getBlock().getZ() + "," + event.getBlock().getType().name() + "," + event.getPlayer().getEntityId();
        McJuicePlugin.getInstance().recordEvent("blockPlace", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onBlockbreak(org.bukkit.event.block.BlockBreakEvent event) {
        String data = event.getBlock().getX() + "," + event.getBlock().getY() + "," + event.getBlock().getZ() + "," + event.getPlayer().getEntityId();
        McJuicePlugin.getInstance().recordEvent("blockBreak", data);
    }

    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
    public void onChat(org.bukkit.event.player.AsyncPlayerChatEvent event) {
        String data = event.getPlayer().getEntityId() + "," + event.getMessage();
        McJuicePlugin.getInstance().recordEvent("chat", data);
    }
}