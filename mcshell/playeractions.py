from mcshell.mcactions_base import MCActionsBase
from mcshell.constants import Vec3
from blockapily import mced_block

class PlayerActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(label="Get Player Position")
    def get_position(self) -> Vec3:
        """Returns the player's current Vec3 position."""
        return self.mcplayer.position

    @mced_block(
        label="Set Player Position",
        pos={'label': 'Position'}
    )
    def set_position(self, pos: Vec3):
        self.mcplayer.set_position(pos)

    @mced_block(label="Get Tile Position")
    def get_tile_position(self) -> Vec3:
        """Returns the integer block coordinates of the player."""
        return self.mcplayer.tile_position

    @mced_block(
        label="Set Tile Position",
        pos={'label': 'Position'}
    )
    def set_tile_position(self,pos: Vec3):
        """Returns the integer block coordinates of the player."""
        self.mcplayer.set_tile_position(pos)

    @mced_block(label="Get Direction")
    def get_direction(self) -> Vec3:
        """Returns the direction the player is looking as a unit vector."""
        return self.mcplayer.direction

    @mced_block(
        label="Set Direction",
        direction={'label': 'Direction Vector'}
    )
    def set_direction(self, direction: Vec3):
        """Sets the player's facing direction."""
        self.mcplayer.set_direction(direction)

    @mced_block(label="Get Q Direction")
    def get_q_direction(self) -> Vec3:
        """Returns the quantized direction the player is looking as a unit vector."""
        return self.mcplayer.q_direction

    @mced_block(
        label="Get Player Q-Compass Direction",
    )
    def get_q_compass_direction(self) -> 'QCompass':
        return self.mcplayer.q_compass_direction

    @mced_block(
        label="Set Player Q-Compass Direction",
        direction={'label':'Q-Compass Direction'}
    )
    def set_q_compass_direction(self, direction: 'QCompass'):
        self.mcplayer.set_q_compass_direction(direction)

    @mced_block(
        label="Get Height",
        position={'label': 'At Position [(X,Y,Z)]'}
    )
    def get_height_at(self, position: Vec3) -> int:
        """
        Gets the Y coordinate of the highest block at the X,Z of the given position.
        """
        x, z = (int(position.x), int(position.z))
        height = self.mcplayer.mj.world.getHeight(x, z)
        return int(height)

    @mced_block(
        label="Get Height",
        position={'label': 'At Position [(X,Y,Z)]'}
    )
    def get_height(self, position: Vec3) -> int:
        """
        Gets the Y coordinate of the highest block at the X,Z of the given position.
        """
        x, z = (int(position.x), int(position.z))
        height = self.mcplayer.mj.world.getHeight(x, z)
        return int(height)
