from mcshell.mcactions_base import MCActionsBase
from mcshell.constants import Vec3
from blockapily import mced_block
import time
import re
import json
from typing import Union

class ServerActions(MCActionsBase):
    """
    Blocks for controlling server state, game rules, and mini-game management.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    def _run_command(self, cmd: str) -> str:
        """Helper to execute a raw server command using the MCClient's run method."""
        if cmd.startswith("/"):
            cmd = cmd[1:]

        parts = cmd.split(' ', 1)
        verb = parts[0].replace('_', '-')
        if len(parts) > 1:
            cmd = f"{verb} {parts[1]}"
        else:
            cmd = verb

        # print(f"Sending Server Command: {cmd}")

        try:
            response = self.mcplayer.run(cmd)
            # if response:
            #     print(f"Server Response: {response}")
            return response
        except Exception as e:
            print(f"Failed to execute command '{cmd}': {e}")
            return None

    # -------------------------------------------------------------
    # CORE SERVER & WORLD COMMANDS
    # -------------------------------------------------------------
    def _parse_minecraft_time_query(self, output_text):
        """
        Parses the player list from Minecraft server 'list' command output.
        Returns a list of player name strings.
        """
        # Regex breakdown:
        # is:  -> Matches the literal label
        # \s* -> Matches any whitespace after the colon
        # (.*)     -> Captures everything else on that line (the time)
        match = re.search(r"is\s*(.*)", output_text)

        if not match:
            return 0

        time_str = match.group(1).strip()

        return int(time_str)

    @mced_block(
        label="Query the world time",
        time_type={'label':'Time Type'}
    )
    def server_time_query(self,time_type:'TimeType') -> int:
        """Query the world time."""
        return self._parse_minecraft_time_query(self._run_command(f"time query {time_type}"))

    @mced_block(
        label="Set the world time",
        time_of_day={'label':'Time'}
    )
    def server_time_set(self,time_of_day:'Time'):
        """Set the world time."""
        self._run_command(f"time set {time_of_day}")


    @mced_block(
        label="Set Time to [time]",
        time={'label': 'Time', 'shadow': 'math_number'}
    )
    def server_set_time(self, time: int):
        """Sets the server time."""
        self._run_command(f"time set {time}")

    @mced_block(
        label="Set Weather to [weather]",
        weather={'label': 'Weather', 'shadow': '<shadow type="text"><field name="TEXT">clear</field></shadow>'}
    )
    def server_weather_set(self, weather: str):
        """Sets the server weather (clear, rain, thunder)."""
        self._run_command(f"weather {weather}")

    @mced_block(
        label="Set Gamemode to [gamemode] for [target]",
        gamemode={'label': 'Game Mode'},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def server_gamemode_set(self, gamemode: 'GameMode', target: str = "SELF"):
        """Changes a player's gamemode."""
        target_name = self.mcplayer.name if target.upper() == "SELF" else target
        self._run_command(f"gamemode {gamemode} {target_name}")

    @mced_block(
        label="Set Gamerule [rule] to True/False",
        rule={'label': 'Game Rule'},
        value={'label': 'Value'}
    )
    def server_gamerule_set(self, rule: 'GameRule', value: bool):
        """Modifies a server game rule."""
        self._run_command(f"gamerule {rule} {str(value).lower()}")

    @mced_block(
        label="Set Gamerule [rule] to [value]",
        rule={'label': 'Game Rule'},
        value={'label': 'Value'}
    )
    def server_gamerule_integer_set(self, rule: 'IntegerGameRule', value: int):
        """Modifies a server game rule."""
        self._run_command(f"gamerule {rule} {value}")

    @mced_block(
        label="Locate Structure [structure]",
        structure={'label': 'Structure'}
    )
    def server_locate_structure(self, structure: 'Structure') -> Vec3:
        """Locates a structure and returns its coordinates."""
        response = self._run_command(f"locate structure {structure}")
        if response:
            match = re.search(r'\[(-?\d+),? (-?\d+|~),? (-?\d+)\]', response)
            if match:
                try:
                    parts = match.groups()
                    x = float(parts[0])
                    y = self.mcplayer.position.y if parts[1] == '~' else float(parts[1])
                    z = float(parts[2])
                    return Vec3(x, y, z)
                except ValueError:
                    print(f"Locate failed: Could not parse coordinates")

        print(f"Locate failed.")
        return self.mcplayer.position

    @mced_block(
        label="Execute Command",
        command={'label': 'Command', 'shadow': 'text'}
    )
    def server_execute_command(self, command: str):
        """Executes a custom command string."""
        self._run_command(command)

    # -------------------------------------------------------------
    # PLAYER INVENTORY & MINI-GAME MANAGEMENT
    # -------------------------------------------------------------

    @mced_block(
        label="Clear Inventory of [target]",
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def server_clear_inventory(self, target: str = "SELF"):
        """Clears items from a player's inventory."""
        target_name = self.mcplayer.name if target.upper() == "SELF" else target
        self._run_command(f"clear {target_name}")

    @mced_block(
        label="Give [count] [block|item|entity] to [target]",
        material={'label': 'Block or Item or Entity', 'shadow': 'minecraft_picker_world'},
        count={'label': 'Count', 'shadow': 'math_number'},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def server_give_block_item_projectile(self, material: Union['Block','Item','Entity'], count: int = 1, target: str = "SELF"):
        """Gives an item to a player."""
        target_name = self.mcplayer.name if target.upper() == "SELF" else target
        self._run_command(f"give {target_name} {self._get_item_id_from_bukkit_name(material)} {count}")

    @mced_block(
        label="Summon [entity] at [pos]",
        entity={'label': 'Entity'},
        pos={'label': 'Position'}
    )
    def server_summon(self, entity: 'Entity', pos: Vec3):
        """Summons an entity at a specific location."""
        self._run_command(f"summon {entity} {pos.x} {pos.y} {pos.z}")

    @mced_block(
        label="Teleport [target] to [pos]",
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'},
        pos={'label': 'Position'}
    )
    def server_teleport(self, target: str, pos: Vec3):
        """Teleports a player or entity to a location."""
        # note the custom shadow block that yields the default argument to target
        target_name = self.mcplayer.name if target.upper() == "SELF" else target
        self._run_command(f"tp {target_name} {int(pos.x)} {int(pos.y)} {int(pos.z)}")

    @mced_block(
        label="Get a Player's position",
        player_name={'label':'Player Name'}
    )
    def server_player_data_get_pos(self,player_name:str) -> Vec3:
        return Vec3(*self.mcplayer.data('get',f"entity @p[name={player_name}] Pos"))

    @mced_block(
        label="Apply [effect] to [target] for [seconds]s (Level [amplifier])",
        effect={'label': 'Effect'},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'},
        seconds={'label': 'Duration', 'shadow': 'math_number'},
        amplifier={'label': 'Level', 'shadow': 'math_number'}
    )
    def server_apply_effect(self, effect: 'Effect', target: str = "SELF", seconds: int = 30, amplifier: int = 1):
        """Applies a status effect to a target."""
        target_name = self.mcplayer.name if target.upper() == "SELF" else target
        self._run_command(f"effect give {target_name} {effect} {seconds} {amplifier}")

    @mced_block(
        label="Show Title [text] as [action] for [target]",
        text={'label': 'Message', 'shadow': 'text'},
        action={'label': 'Title Action'},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">@a</field></shadow>'}
    )
    def server_show_title(self, text: str, action: 'TitleAction', target: str = "@a"):
        """Displays large text on the player's screen."""
        # Using json dumps to ensure safely escaped strings for Minecraft's JSON text component
        json_text = json.dumps({"text": str(text)})
        self._run_command(f"title {target} {action} {json_text}")

    @mced_block(
        label="Damage [target] by [amount]",
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'},
        amount={'label': 'Amount'}
    )
    def server_damage(self, amount: float, target: str = "SELF"):
        """Deals damage to a target."""
        target_name = self.mcplayer.name if target.upper() == "SELF" else target
        self._run_command(f"damage {target_name} {amount}")

    def _parse_minecraft_players(self,output_text):
        """
        Parses the player list from Minecraft server 'list' command output.
        Returns a list of player name strings.
        """
        # Regex breakdown:
        # online:  -> Matches the literal label
        # \s* -> Matches any whitespace after the colon
        # (.*)     -> Captures everything else on that line (the player list)
        match = re.search(r"online:\s*(.*)", output_text)

        if not match:
            return []

        players_str = match.group(1).strip()

        # If the string is empty (0 players), return an empty list
        if not players_str:
            return []

        # Split by comma and strip whitespace from each name
        return [name.strip() for name in players_str.split(",")]
    
    @mced_block(
        label="List Players on Server"
    )
    def server_list(self) -> list:
        """List the players on the server. """
        return self._parse_minecraft_players(self._run_command("list"))

    @mced_block(
        label="Set the spawnpoint for [target] at [position]",
        position={'label':'Position'},
        target={'label': 'Target Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'},
    )
    def server_spawnpoint(self,position: Vec3,target: str = "@a"):
        """Sets the spawn point for a player."""
        self._run_command(f"spawnpoint {target} {int(position.x)} {int(position.y)} {int(position.z)}")

