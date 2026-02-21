from mcshell.mcplayer import MCPlayer
from mcshell.mcactions_base import MCActionsBase
from blockapily import mced_block
from mcshell.Vec3 import Vec3
from typing import Optional

# TODO: note we must wrap pyncraft api output with our Vec3

class PyncraftActions(MCActionsBase):
    """
    Exposes direct pyncraft API methods as Blockly blocks with multi-player support.
    Uses minecraft.py as the definitive source of truth for available methods.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    # --- Player Control (CmdPlayer) ---

    @mced_block(
        label="Get Health for [player]",
        player_name={'label': 'Player'}
    )
    def get_health_by_name(self, player_name: str = "SELF") -> float:
        """Returns the health of the specified player."""
        return float(self._get_player_by_name(player_name).pc.player.getHealth())

    @mced_block(
        label="Get Food Level for [player]",
        player_name={'label': 'Player'}
    )
    def get_food_level_by_name(self, player_name: str = "SELF") -> int:
        """Returns the food level of the specified player."""
        return int(self._get_player_by_name(player_name).pc.player.getFoodLevel())

    @mced_block(
        label="Get Position for [player]",
        player_name={'label': 'Player'}
    )
    def get_position_by_name(self, player_name: str = "SELF") -> 'Vec3':
        """Gets the position of the specified player."""
        pos = self._get_player_by_name(player_name).pc.player.getPos()
        return Vec3(pos.x, pos.y, pos.z)

    @mced_block(
        label="Get Tile Position for [player]",
        player_name={'label': 'Player'}
    )
    def get_tile_position_by_name(self, player_name: str = "SELF") -> 'Vec3':
        """Gets the position of the specified player."""
        pos = self._get_player_by_name(player_name).pc.player.getTilePos()
        return Vec3(pos.x, pos.y, pos.z)

    # --- Blocks (CmdBlocks) ---

    @mced_block(
        label="Get Block at [position]",
        position={'label': 'Position'}
    )
    def get_block(self, position: Vec3) -> 'Block':
        """Returns the Block ID at the specified position."""
        return self.mcplayer.pc.getBlock(int(position.x), int(position.y), int(position.z))

    @mced_block(
        label="Get Block with Data at [position]",
        position={'label': 'Position'}
    )
    def get_block_with_data(self, position: Vec3) -> 'Block':
        """Returns the Block ID with its blockstate data at the specified position."""
        return self.mcplayer.pc.getBlockWithData(int(position.x), int(position.y), int(position.z))

    @mced_block(
        label="Set Block [block_type] at [position]",
        position={'label': 'Position'},
        block_type={'label': 'Block'}
    )
    def set_block(self, position: Vec3, block_type: 'Block'):
        """Sets a block at the specified position."""
        self.mcplayer.pc.setBlock(int(position.x), int(position.y), int(position.z), block_type)

    @mced_block(
        label="Set Blocks [block_type] from [pos1] to [pos2]",
        pos1={'label': 'From Position'},
        pos2={'label': 'To Position'},
        block_type={'label': 'Block'}
    )
    def set_blocks(self, pos1: Vec3, pos2: Vec3, block_type: 'Block'):
        """Fills a cuboid area with the specified block."""
        self.mcplayer.pc.setBlocks(int(pos1.x), int(pos1.y), int(pos1.z),
                                   int(pos2.x), int(pos2.y), int(pos2.z), block_type)

    @mced_block(
        label="Get Highest Block Y at X: [x] Z: [z]",
        x={'label': 'X'},
        z={'label': 'Z'}
    )
    def get_highest_block_y(self, x: float, z: float) -> int:
        """Gets the Y coordinate of the highest solid block at X, Z."""
        return int(self.mcplayer.pc.getHeight(int(x), int(z)))

    # --- Entities (CmdEntity) ---

    @mced_block(
        label="Spawn [entity_id] at [position]",
        position={'label': 'Position'},
        entity_id={'label': 'Entity'}
    )
    def spawn_entity(self, position: Vec3, entity_id: 'Entity') -> int:
        """Spawns an entity at a given position and returns its unique ID."""
        return int(self.mcplayer.pc.spawnEntity(int(position.x), int(position.y), int(position.z), entity_id))

    @mced_block(
        label="Get Entities in [radius] block radius from [position]",
        position={'label': 'Position'},
        radius={'label': 'Radius'}
    )
    def get_entities_in_radius(self, position: Vec3, radius: float) -> 'Array':
        """Returns a list of entity IDs within a radius of a position."""
        return self.mcplayer.pc.getEntitiesInRadius(int(position.x), int(position.y), int(position.z), int(radius))

    # --- Game Data & Miscellaneous ---

    @mced_block(
        label="Set Sign Text",
        position={'label': 'At Position'},
        line1={'label': 'Line 1'},
        line2={'label': 'Line 2'},
        line3={'label': 'Line 3'},
        line4={'label': 'Line 4'},
        sign_type={'label': 'Sign Material', 'shadow': 'minecraft_log_picker'}, # custom shadow
        direction={'label': 'Direction (0-15)'}
    )
    def set_sign(self, position: Vec3, sign_type: 'Block' = "OAK_SIGN", direction: int = 0,
                 line1: str = "", line2: str = "", line3: str = "", line4: str = ""):
        """Sets the text and type of a sign at the specified position."""
        self.mcplayer.pc.setSign(int(position.x), int(position.y), int(position.z),
                                 sign_type, direction, line1, line2, line3, line4)