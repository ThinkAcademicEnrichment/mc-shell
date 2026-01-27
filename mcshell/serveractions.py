from mcshell.mcactions_base import MCActionsBase
from mcshell.server_pickers import ServerPickers
from blockapily import mced_block
import time

class ServerActions(MCActionsBase):
    """
    Blocks for controlling server state, game rules, and global settings.
    Exposes commands like /time, /weather, /gamemode, and /gamerule.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    def _run_command(self, cmd: str):
        """
        Helper to execute a raw server command.
        Ensures the command starts with '/' and sends it via the connection.
        """
        if not cmd.startswith("/"):
            cmd = "/" + cmd

        # We use the player's connection to send the command.
        # This acts as if the player typed it in chat.
        # Requires the player to have OP permissions for most commands.
        print(f"Executing Server Command: {cmd}")
        self.mcplayer.pc.conn.send(b"chat", cmd)

        # Optional: Sleep briefly to ensure command processes before next action
        if self.delay_between_blocks > 0:
            time.sleep(self.delay_between_blocks)

    # --- Stage 1: Basic World Control ---

    @mced_block(
        label="Set Time to [time]",
        time_option={'label': 'Time', 'options': ServerPickers.Time}
    )
    def server_set_time(self, time_option: str):
        """Sets the world time."""
        self._run_command(f"time set {time_option}")

    @mced_block(
        label="Set Weather to [weather]",
        weather_option={'label': 'Weather', 'options': ServerPickers.Weather}
    )
    def server_set_weather(self, weather_option: str):
        """Sets the world weather."""
        self._run_command(f"weather {weather_option}")

    @mced_block(
        label="Set Difficulty to [difficulty]",
        difficulty_option={'label': 'Difficulty', 'options': ServerPickers.Difficulty}
    )
    def server_set_difficulty(self, difficulty_option: str):
        """Sets the game difficulty."""
        self._run_command(f"difficulty {difficulty_option}")

    @mced_block(
        label="Set Gamemode [mode] for [target]",
        mode={'label': 'Mode', 'options': ServerPickers.Gamemode},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def server_set_gamemode(self, mode: str, target: str = "SELF"):
        """
        Sets the gamemode for a specific player.
        """
        # Resolve 'SELF' to the actual player name for the command string
        if not target or target.strip().upper() == "SELF":
            target_name = self.mcplayer.name
        else:
            target_name = target

        self._run_command(f"gamemode {mode} {target_name}")

    # --- Stage 2: Game Rules ---

    @mced_block(
        label="Set Game Rule [rule] to [value]",
        rule={'label': 'Rule', 'options': ServerPickers.GameRules},
        value={'label': 'Enabled', 'shadow': '<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>'}
    )
    def server_set_gamerule(self, rule: str, value: bool):
        """Sets a boolean game rule."""
        str_value = "true" if value else "false"
        self._run_command(f"gamerule {rule} {str_value}")

    # --- Stage 3: Advanced Utility ---

    @mced_block(
        label="Locate Structure [structure]",
        structure={'label': 'Structure Type', 'shadow': 'text'},
        tooltip="Finds the nearest structure. Prints coordinates to chat."
    )
    def server_locate(self, structure: str):
        """
        Locates a structure.
        Note: The result is printed to the game chat, not returned to the block.
        """
        self._run_command(f"locate structure {structure}")

    @mced_block(
        label="Clear Inventory of [target]",
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def server_clear_inventory(self, target: str = "SELF"):
        """Clears items from a player's inventory."""
        if not target or target.strip().upper() == "SELF":
            target_name = self.mcplayer.name
        else:
            target_name = target
        self._run_command(f"clear {target_name}")

    @mced_block(
        label="Execute Command",
        command={'label': 'Command', 'shadow': 'text'},
        tooltip="Executes any arbitrary server command."
    )
    def server_execute_command(self, command: str):
        """Executes a custom command string."""
        self._run_command(command)