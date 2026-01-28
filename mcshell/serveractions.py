from mcshell.mcactions_base import MCActionsBase
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
        Helper to execute a raw server command using the MCClient's run method.
        This handles authentication and the RCON connection properly.
        """
        # 1. Clean the command string
        if cmd.startswith("/"):
            cmd = cmd[1:]

        # 2. Prepare arguments for MCClient.run(*args)
        # We split by space to pass command parts as separate arguments.
        # Note: This simple split might break quoted arguments with spaces (e.g. say "Hello World")
        # but works for the current set of simple server commands.
        arg_list = cmd.split(' ')

        # 3. Normalize command name (e.g., convert 'save_all' -> 'save-all')
        arg_list[0] = arg_list[0].replace('_', '-')

        print(f"Sending: {' '.join(arg_list)}")

        try:
            # 4. Execute via RCON
            response = self.mcplayer.run(*arg_list)

            # 5. Handle Response
            if response:
                # Log success or server feedback
                print(f"Server Response: {response}")

        except Exception as e:
            # 6. Error Handling
            print(f"Error executing command '{cmd}': {e}")
            # We explicitly pass here to allow the script to continue even if one command fails
            pass

        if self.delay_between_blocks > 0:
            time.sleep(self.delay_between_blocks)

    # --- Stage 1: Basic World Control ---

    @mced_block(
        label="Set Time to [time]",
        time_option={'label': 'Time'}
    )
    def server_set_time(self, time_option: 'Time'):
        """Sets the world time."""
        self._run_command(f"time set {time_option}")

    @mced_block(
        label="Set Weather to [weather]",
        weather_option={'label': 'Weather'}
    )
    def server_set_weather(self, weather_option: 'Weather'):
        """Sets the world weather."""
        self._run_command(f"weather {weather_option}")

    @mced_block(
        label="Set Difficulty to [difficulty]",
        difficulty_option={'label': 'Difficulty'}
    )
    def server_set_difficulty(self, difficulty_option: 'Difficulty'):
        """Sets the game difficulty."""
        self._run_command(f"difficulty {difficulty_option}")

    @mced_block(
        label="Set Gamemode [mode] for [target]",
        mode={'label': 'Mode'},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def server_set_gamemode(self, mode: 'Gamemode', target: str = "SELF"):
        """
        Sets the gamemode for a specific player.
        """
        if not target or target.strip().upper() == "SELF":
            target_name = self.mcplayer.name
        else:
            target_name = target

        self._run_command(f"gamemode {mode} {target_name}")

    # --- Stage 2: Game Rules ---

    @mced_block(
        label="Set Game Rule [rule] to [value]",
        rule={'label': 'Rule'},
        value={'label': 'Enabled', 'shadow': '<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>'}
    )
    def server_set_gamerule(self, rule: 'GameRule', value: bool):
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