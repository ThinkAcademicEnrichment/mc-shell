from mcshell.mcplayer import MCPlayer
from blockapily import mced_block
from typing import Optional

class PyncraftActions:
    """
    Exposes direct pyncraft API methods as Blockly blocks with multi-player support.
    Uses minecraft.py as the definitive source of truth for available methods.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        self.mcplayer = mc_player_instance
        self.delay_between_blocks = delay_between_blocks

    def _get_player_by_name(self, player_name: str) -> MCPlayer:
        """Helper to resolve a string name to an MCPlayer object."""
        from mcshell.mcplayer import MCPlayer
        if not player_name or player_name.lower() == self.mcplayer.name.lower():
            return self.mcplayer
        try:
            target = MCPlayer(player_name, **self.mcplayer.server_args)
            return target
        except Exception:
            return self.mcplayer

    # --- Player Stats & Status (CmdPlayer) ---

    @mced_block(
        label="Get Health for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        output_type="Number"
    )
    def get_health_by_name(self, player_name: str) -> float:
        return self._get_player_by_name(player_name).pc.player.getHealth()

    @mced_block(
        label="Get Food Level for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        output_type="Number"
    )
    def get_food_level_by_name(self, player_name: str) -> int:
        return self._get_player_by_name(player_name).pc.player.getFoodLevel()

    @mced_block(
        label="Get Pitch for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        output_type="Number"
    )
    def get_pitch_by_name(self, player_name: str) -> float:
        return self._get_player_by_name(player_name).pc.player.getPitch()

    @mced_block(
        label="Get Yaw for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        output_type="Number"
    )
    def get_yaw_by_name(self, player_name: str) -> float:
        return self._get_player_by_name(player_name).pc.player.getYaw()

    @mced_block(
        label="Get Rotation for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        output_type="Number"
    )
    def get_rotation_by_name(self, player_name: str) -> float:
        return self._get_player_by_name(player_name).pc.player.getRotation()

    @mced_block(
        label="Get Position for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        output_type="3DVector"
    )
    def get_position_by_name(self, player_name: str):
        pos = self._get_player_by_name(player_name).pc.player.getPos()
        # Returns Vec3
        return pos

    @mced_block(
        label="Set Position for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        position={'label': 'To Position'}
    )
    def set_position_by_name(self, player_name: str, position: 'Vec3'):
        self._get_player_by_name(player_name).pc.player.setPos(position.x, position.y, position.z)

    @mced_block(
        label="Set Rotation for [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        yaw={'label': 'Yaw', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'},
        pitch={'label': 'Pitch', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'}
    )
    def set_rotation_by_name(self, player_name: str, yaw: float, pitch: float):
        self._get_player_by_name(player_name).pc.player.setRotation(yaw, pitch)

    @mced_block(
        label="Send Title to [player]",
        player_name={'label': 'Player', 'shadow': 'text'},
        title={'label': 'Title', 'shadow': 'text'},
        subtitle={'label': 'Subtitle', 'shadow': 'text'},
        stay={'label': 'Stay (Ticks)', 'shadow': '<shadow type="math_number"><field name="NUM">70</field></shadow>'}
    )
    def send_title_by_name(self, player_name: str, title: str = "", subtitle: str = "", stay: int = 70):
        self._get_player_by_name(player_name).pc.player.sendTitle(title=title, subTitle=subtitle, stay=stay)

    # --- Camera Control (CmdCamera) ---

    # @mced_block(
    #     label="Camera: Normal for [player]",
    #     player_name={'label': 'Player', 'shadow': 'text'}
    # )
    # def camera_set_normal_by_name(self, player_name: str):
    #     self._get_player_by_name(player_name).pc.camera.setNormal()
    #
    # @mced_block(
    #     label="Camera: Fixed for [player]",
    #     player_name={'label': 'Player', 'shadow': 'text'}
    # )
    # def camera_set_fixed_by_name(self, player_name: str):
    #     self._get_player_by_name(player_name).pc.camera.setFixed()
    #
    # @mced_block(
    #     label="Camera: Follow [player]",
    #     player_name={'label': 'Player', 'shadow': 'text'}
    # )
    # def camera_set_follow_by_name(self, player_name: str):
    #     self._get_player_by_name(player_name).pc.camera.setFollow()

    # --- World Manipulation (Minecraft) ---

    @mced_block(
        label="Set Block",
        position={'label': 'At Position'},
        block_type={'label': 'Block Type'}
    )
    def set_block(self, position: 'Vec3', block_type: str):
        self.mcplayer.pc.setBlock(int(position.x), int(position.y), int(position.z), block_type)

    @mced_block(
        label="Set Blocks",
        p1={'label': 'Position 1'},
        p2={'label': 'Position 2'},
        block_type={'label': 'Block Type'}
    )
    def set_blocks(self, p1: 'Vec3', p2: 'Vec3', block_type: str):
        self.mcplayer.pc.setBlocks(int(p1.x), int(p1.y), int(p1.z), int(p2.x), int(p2.y), int(p2.z), block_type)

    @mced_block(
        label="Get Block",
        position={'label': 'At Position'},
        output_type="String"
    )
    def get_block(self, position: 'Vec3') -> str:
        return str(self.mcplayer.pc.getBlock(int(position.x), int(position.y), int(position.z)))

    @mced_block(
        label="Get Height",
        x={'label': 'X', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'},
        z={'label': 'Z', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'},
        output_type="Number"
    )
    def get_height(self, x: int, z: int) -> int:
        return int(self.mcplayer.pc.getHeight(x, z))

    @mced_block(
        label="Spawn Entity",
        position={'label': 'At Position'},
        entity={'label': 'Entity'}
    )
    def spawn_entity(self, position: 'Vec3', entity: 'Entity') -> int:
        self.mcplayer.pc.spawnEntity(int(position.x), int(position.y), int(position.z), entity)

    @mced_block(
        label="Create Explosion",
        position={'label': 'At Position'},
        power={'label': 'Power', 'shadow': '<shadow type="math_number"><field name="NUM">4</field></shadow>'}
    )
    def create_explosion(self, position: 'Vec3', power: int = 4):
        self.mcplayer.pc.createExplosion(int(position.x), int(position.y), int(position.z), power)

    @mced_block(
        label="Set Sign Text",
        position={'label': 'At Position'},
        line1={'label': 'Line 1', 'shadow': 'text'},
        line2={'label': 'Line 2', 'shadow': 'text'},
        line3={'label': 'Line 3', 'shadow': 'text'},
        line4={'label': 'Line 4', 'shadow': 'text'},
        sign_type={'label': 'Sign Material (e.g. OAK)', 'shadow': 'text'},
        direction={'label': 'Direction (0-15)', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'}
    )
    def set_sign(self, position: 'Vec3', sign_type: str = "OAK", direction: int = 0,
                 line1: str = "", line2: str = "", line3: str = "", line4: str = ""):
        self.mcplayer.pc.setSign(int(position.x), int(position.y), int(position.z),
                                 sign_type, direction, line1, line2, line3, line4)