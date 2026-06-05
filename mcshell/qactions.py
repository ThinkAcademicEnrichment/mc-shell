from mcshell.constants import Vec3
from blockapily import mced_block
from mcshell.mcactions_base import MCActionsBase

class QActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Set Player Q-Compass Direction",
        direction={'label':'Q-Compass Direction'}
    )
    def set_q_compass_direction(self, direction: 'QCompass'):
        self.mcplayer.set_q_compass_direction(direction)

    @mced_block(
        label="Get Player Q-Compass Direction",
    )
    def get_q_compass_direction(self) -> 'QCompass':
        return self.mcplayer.q_compass_direction

    @mced_block(label="Get Player Q-Direction")
    def get_q_direction(self) -> Vec3:
        """Returns the quantized direction the player is looking as a unit vector."""
        return self.mcplayer.q_direction

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

