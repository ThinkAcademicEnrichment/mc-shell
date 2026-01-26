from mcshell.mcplayer import MCPlayer
from mcshell.constants import *
import time
import numpy as np
import pickle
from typing import Optional

# Advanced Digital Geometry and Turtle
from mcshell.mcturtle import (
    DigitalTurtle,
    generate_metric_ball,
    generate_digital_plane_coordinates as generate_arithmetic_plane,
    generate_linear_path,
    DigitalSet
)

# Global turtle instance (needed by subclasses)
_GLOBAL_TURTLE = DigitalTurtle()

class MCActionsBase:
    """
    Base class for all Action groups.
    Handles shared utilities like block placement, entity ID mapping, and player resolution.
    """
    def __init__(self, mc_player_instance:MCPlayer, delay_between_blocks:float):
        self.mcplayer = mc_player_instance
        self.bukkit_to_entity_id_map = {}
        self._initialize_entity_id_map()
        self.delay_between_blocks = delay_between_blocks

    def _place_blocks_from_coords(self, coords_list, block_type_from_blockly,
                                  placement_offset_vec3=None):
        """
        Helper method to take a list of coordinates and a Blockly block type,
        parse the block type, and set the blocks in the world.
        """
        if not coords_list:
            print("No coordinates generated, nothing to place.")
            return

        # we use Bukkit IDs which are output in mc-ed
        minecraft_block_id = block_type_from_blockly

        offset_x, offset_y, offset_z = (0,0,0)
        if placement_offset_vec3: # If a Vec3 object is given for overall placement
            offset_x, offset_y, offset_z = int(placement_offset_vec3.x), int(placement_offset_vec3.y), int(placement_offset_vec3.z)

        for x, y, z in coords_list:

            final_x = x + offset_x
            final_y = y + offset_y
            final_z = z + offset_z
            self.mcplayer.pc.setBlock(int(final_x), int(final_y), int(final_z), minecraft_block_id)

            # Pause execution for a fraction of a second to create animation effects
            if self.delay_between_blocks > 0:
                time.sleep(self.delay_between_blocks)

    def _place_digital_set(self, dset: DigitalSet, block_type):
        """
        Helper to render a DigitalSet (mathematical shape) into the world.
        """
        if not dset: return
        coords = dset.to_list()
        self._place_blocks_from_coords(coords, block_type)

    def _initialize_entity_id_map(self):
        """Loads the mapping of Bukkit entity names to Integer IDs."""
        try:
            with MC_ENTITY_ID_MAP_PATH.open('rb') as f:
                self.bukkit_to_entity_id_map = pickle.load(f)
        except Exception:
            self.bukkit_to_entity_id_map = {}

    def _get_entity_id_from_bukkit_name(self, bukkit_enum_string: str) -> Optional[int]:
        """
        Converts a Bukkit enum string (e.g., 'WITHER_SKELETON') to its Minecraft numeric ID.
        """
        return self.bukkit_to_entity_id_map.get(bukkit_enum_string)

    def _get_player_by_name(self, player_name: str) -> MCPlayer:
        """
        Helper to resolve a string name to an MCPlayer object.
        If the name matches the current player, returns self.mcplayer.
        Otherwise, creates a new MCPlayer instance for that target.
        """
        from mcshell.mcplayer import MCPlayer
        if not player_name or player_name.lower() == self.mcplayer.name.lower():
            return self.mcplayer
        try:
            # Create a contextual peer using server arguments from our own player.
            target = MCPlayer(player_name, **self.mcplayer.server_args)
            return target
        except Exception:
            # Fallback to executor if connection fails
            return self.mcplayer

class Pickers:
    """Registry of custom picker options for blocks (Dropdown menus)."""
    Metric = [("Euclidean", "euclidean"), ("Manhattan", "manhattan"), ("Chebyshev", "chebyshev")]
    Direction = [("Forward", "forward"), ("Back", "back"), ("Up", "up"), ("Down", "down"), ("Left", "left"), ("Right", "right")]
    Axis = [("Yaw (Y)", "y"), ("Pitch (X)", "x"), ("Roll (Z)", "z")]
    Compass = [("North (-Z)", "N"), ("South (+Z)", "S"), ("East (+X)", "E"), ("West (-X)", "W")]