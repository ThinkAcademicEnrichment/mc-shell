import yaml
from pathlib import Path
from blockapily import mced_block

from mcshell.constants import MC_WORLDS_BASE_DIR
from mcshell.mcactions_base import MCActionsBase

# Assuming MC_WORLDS_BASE_DIR is defined within your application's configuration/constants
# from your_config_module import MC_WORLDS_BASE_DIR

class BedWarsActions(MCActionsBase):
    """
    Blocks for building and configuring Screaming Bedwars arenas via YAML generation.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)
        
        # Initialize the state container for the builder pattern
        self._reset_state()

    def _reset_state(self):
        """Clears the current builder state and pre-loads required Bedwars configurations."""
        self.arena_name = "default_arena"
        self.arena_state = {
            'pauseCountdown': 60, 
            'gameTime': 3600, 
            'minPlayers': 2, 
            'postGameWaiting': 3, 
            'teams': {},
            'spawners': [],
            'stores': [],
            'constant': { 
                'compass-enabled': 'inherit',
                'add-wool-to-inventory-on-join': 'inherit',
                'in-lobby-colored-leather-by-team': 'inherit',
                'allow-crafting': 'inherit',
                'join-randomly-after-lobby-timeout': 'inherit',
                'join-randomly-on-lobby-join': 'inherit',
                'keep-inventory-on-death': 'inherit',
                'prevent-killing-villagers': 'inherit',
                'player-drops': 'inherit',
                'friendlyfire': 'inherit',
                'lobbybossbar': 'inherit',
                'bossbar': 'inherit',
                'lobbyscoreboard': 'inherit',
                'scoreboard': 'inherit',
                'prevent-spawning-mobs': 'inherit',
                'spawner-holograms': 'inherit',
                'spawner-disable-merge': 'inherit',
                'game-start-items': 'inherit',
                'player-respawn-items': 'inherit',
                'spawner-holograms-countdown': 'inherit',
                'damage-when-player-is-not-in-arena': 'inherit',
                'remove-unused-target-blocks': 'inherit',
                'allow-block-falling': 'inherit',
                'holo-above-bed': 'inherit',
                'allow-spectator-join': 'inherit',
                'anchor-auto-fill': 'inherit',
                'anchor-decreasing': 'inherit',
                'cake-target-block-eating': 'inherit',
                'target-block-explosions': 'inherit',
                'invisible-lobby-on-game-start': 'inherit'
            },
            'arenaTime': 'WORLD', 
            'arenaWeather': 'default', 
            'lobbyBossBarColor': 'default', 
            'gameBossBarColor': 'default' 
        }

    def _format_bw_loc(self, pos: 'Vec3', yaw: float = 0.0, pitch: float = 0.0) -> str:
        """Converts a Vec3 into the Screaming Bedwars location string format (x;y;z;yaw;pitch)."""
        return f"{float(pos.x)};{float(pos.y)};{float(pos.z)};{float(yaw)};{float(pitch)}"

    @mced_block(
        label="Initialize Bedwars Arena [name]",
        name={'label': 'Arena Name'}
    )
    def bw_init_arena(self, name: str):
        """Starts a new arena configuration build."""
        self._reset_state()
        self.arena_name = name
        self.arena_state['name'] = name 
        self.arena_state['world'] = "world" 

    @mced_block(
        label="Set Arena Boundaries [pos1] to [pos2]",
        pos1={'label': 'Corner 1'},
        pos2={'label': 'Corner 2'}
    )
    def bw_set_boundaries(self, pos1: 'Vec3', pos2: 'Vec3'):
        """Sets the physical limits of the arena."""
        self.arena_state['pos1'] = self._format_bw_loc(pos1) 
        self.arena_state['pos2'] = self._format_bw_loc(pos2) 

    @mced_block(
        label="Add Team [team_name] color [color] max players [max_players]",
        team_name={'label': 'Team Name'},
        color={'label': 'Color Enum'},
        max_players={'label': 'Max Players'},
        spawn_pos={'label': 'Spawn Position'},
        bed_pos={'label': 'Bed Position'}
    )
    def bw_add_team(self, team_name: str, color: 'Color', max_players: int, spawn_pos: 'Vec3', bed_pos: 'Vec3'):
        """Adds a team to the arena state."""
        self.arena_state['teams'][team_name] = {
            'isNewColor': True, 
            'color': color.upper(), 
            'maxPlayers': int(max_players), 
            'spawn': self._format_bw_loc(spawn_pos), 
            'bed': self._format_bw_loc(bed_pos), 
            'actualName': team_name 
        }

    @mced_block(
        label="Add Resource Spawner [resource_type] at [pos]",
        resource_type={'label': 'Resource (bronze/iron/gold)'},
        pos={'label': 'Location'}
    )
    def bw_add_spawner(self, resource_type: str, pos: 'Vec3'):
        """Adds a resource generator."""
        self.arena_state['spawners'].append({
            'maxSpawnedResources': -1, 
            'hologramEnabled': True, 
            'location': self._format_bw_loc(pos), 
            'customName': None, 
            'startLevel': 1.0, 
            'team': None, 
            'type': resource_type.lower() 
        })

    @mced_block(
        label="Add Shop Merchant at [pos]",
        pos={'label': 'Location'}
    )
    def bw_add_store(self, pos: 'Vec3'):
        """Adds a shopkeeper villager."""
        self.arena_state['stores'].append({
            'isBaby': 'false', 
            'loc': self._format_bw_loc(pos), 
            'parent': 'false', 
            'shop': None, 
            'skin': None, 
            'team': None, 
            'type': 'VILLAGER' 
        })

    @mced_block(
        label="Set Spectator Spawn at [pos]",
        pos={'label': 'Location'}
    )
    def bw_set_spec_spawn(self, pos: 'Vec3'):
        """Sets the spectator spawn location."""
        self.arena_state['specSpawn'] = self._format_bw_loc(pos) 

    @mced_block(
        label="Set Lobby Spawn at [pos]",
        pos={'label': 'Location'}
    )
    def bw_set_lobby_spawn(self, pos: 'Vec3'):
        """Sets the pre-game waiting lobby spawn location."""
        self.arena_state['lobbySpawn'] = self._format_bw_loc(pos) 
        self.arena_state['lobbySpawnWorld'] = "world" 

    @mced_block(
        label="Build Physical [color] Bed at [pos] facing [direction]",
        color={'label': 'Color'},
        pos={'label': 'Head Position'},
        direction={'label': 'Facing (north/south/east/west)'}
    )
    def build_physical_bed(self, color: 'Color', pos: 'Vec3', direction: 'QCompass'):
        """Places a complete two-block bed in the world safely."""
        head_x, head_y, head_z = int(pos.x), int(pos.y), int(pos.z)
        foot_x, foot_y, foot_z = head_x, head_y, head_z

        direction = direction.lower()
        if direction == "north":
            foot_z += 1
        elif direction == "south":
            foot_z -= 1
        elif direction == "east":
            foot_x -= 1
        elif direction == "west":
            foot_x += 1
        else:
            direction = "north"
            foot_z += 1

        bed_block = f"{color.lower()}_bed"
        cmd_foot = f"setblock {foot_x} {foot_y} {foot_z} {bed_block}[part=foot,facing={direction}] replace"
        cmd_head = f"setblock {head_x} {head_y} {head_z} {bed_block}[part=head,facing={direction}] replace"

        self._run_command(cmd_foot)
        self._run_command(cmd_head)

    @mced_block(
        label="Save and Deploy Arena"
    )
    def bw_save_and_deploy(self) -> str:
        """Writes the YAML file and reloads the Bedwars plugin."""
        try:
            plugins_dir = MC_WORLDS_BASE_DIR / self.mcplayer.world_name / "plugins" / "BedWars" / "arenas"
            plugins_dir.mkdir(parents=True, exist_ok=True)
            
            file_path = plugins_dir / f"{self.arena_name}.yml"
            
            with open(file_path, 'w') as f:
                yaml.dump(self.arena_state, f, default_flow_style=False, sort_keys=False)
                
        except IOError as e:
            return f"File System Error: Could not write YAML for {self.arena_name} - {e}"
        except NameError:
            return "Configuration Error: MC_WORLDS_BASE_DIR is not defined."

        try:
            response = self.mcplayer.run("bw reload")
            return response if response else "Arena saved and reloaded successfully."
        except Exception as e:
            return f"RCON Execution Failed: {e}"