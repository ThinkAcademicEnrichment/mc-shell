import pickle
import json
import re
from pathlib import Path
from typing import Dict, Any, List, Set, Tuple

from mcshell.constants import *
from blockapily import BlocklyGenerator

# Import Action Classes
try:
    from mcshell.serveractions import ServerActions
    from mcshell.pyncraftcactions import PyncraftActions
    from mcshell.playeractions import PlayerActions
    from mcshell.qturtleactions import QTurtleActions
    from mcshell.digitalgeometryactions import DigitalGeometryActions
    from mcshell.eventactions import EventActions
    from mcshell.mcactions import (
        TurtleShapes, LSystemShapes
    )
    HAS_ALL_ACTIONS = True
except ImportError as e:
    print(f"Warning: Some action classes could not be imported: {e}")
    HAS_ALL_ACTIONS = False

class RegistryBuilder:
    """
    Orchestrates the generation of Minecraft-specific Blockly blocks
    using structured data and the blockapily generation engine.
    """

    def __init__(self, toolbox_path: Path, blocks_dir: Path, gens_dir: Path):
        self.toolbox_path = toolbox_path
        self.blocks_dir = blocks_dir
        self.gens_dir = gens_dir

        try:
            with MC_MATERIALS_PATH.open('rb') as f:
                self.materials_data = pickle.load(f)
        except (FileNotFoundError, EOFError):
            self.materials_data = {}

        try:
            with MC_ENTITY_ID_MAP_PATH.open('rb') as f:
                self.entity_data = pickle.load(f)
        except (FileNotFoundError, EOFError):
            self.entity_data = {}

        self.COLORS = {
            "Block": 160,
            "Item": 50,
            "Entity": "#5b5ba5",
            "Picker": 230,
            "Geometry": "#364EE7",
            "Turtle": "#F3BA2B",
            "LSystem": "#75E538",
            "Player": "#3ECDE0",
            "Events": "#FCBA03",
            "Server": "#75E538",
        }

        self.TYPE_MAP = {
            'str': 'String',
            'int': 'Number',
            'float': 'Number',
            'bool': 'Boolean',
            'Vec3': "3DVector", 'Matrix3': "3DMatrix", 'Block': "Block", 'DigitalSet': "Digital_Set",
                    'Metric': 'Metric', 'QDirection': 'QDirection', 'Axis': 'Axis', 'QCompass': 'QCompass',
                    'Time': 'Time',
                    'Weather': 'Weather', 'Difficulty': 'Difficulty', 'Gamemode': 'Gamemode', 'GameRule': 'GameRule',
                    'LocateType': 'LocateType', 'Structure': 'Structure', 'Biome': 'Biome', 'Poi': 'Poi',
                    'Entity': 'Entity', 'Effect': "Effect"}

        self.SHADOW_MAP = dict(
            int = '<shadow type="math_number"><field name="NUM">1</field></shadow>',
            float = '<shadow type="math_number"><field name="NUM">1.0</field></shadow>',
            math_number = '<shadow type="math_number"><field name="NUM">1</field></shadow>',
            text = '<shadow type="text"><field name="TEXT"></field></shadow>',
            Vec3='<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>',
            Block='<shadow type="mc_block_picker_world"><field name="VALUE">STONE</field></shadow>',
            Item='<shadow type="mc_item_picker_world"><field name="VALUE">STONE</field></shadow>',
            Entity='<shadow type="mc_entity_picker_passive_mobs"><field name="VALUE">PIG</field></shadow>',
            Matrix3='<shadow type="minecraft_matrix_3d_euler"></shadow>',
            Metric='<shadow type="picker_metric"><field name="VALUE">euclidean</field></shadow>',
            QHeading ='<shadow type="picker_qheading"><field name="VALUE">F</field></shadow>',
            Axis='<shadow type="picker_axis"><field name="VALUE">y</field></shadow>',
            QCompass='<shadow type="picker_qcompass"><field name="VALUE">N</field></shadow>',
            Time='<shadow type="picker_time"><field name="VALUE">day</field></shadow>',
            Weather='<shadow type="picker_weather"><field name="VALUE">clear</field></shadow>',
            Difficulty='<shadow type="picker_difficulty"><field name="VALUE">normal</field></shadow>',
            GameMode='<shadow type="picker_gamemode"><field name="VALUE">creative</field></shadow>',
            GameRule='<shadow type="picker_gamerule"><field name="VALUE">advance_time</field></shadow>',
            IntegerGameRule='<shadow type="picker_integergamerule"><field name="VALUE">respawn_radius</field></shadow>',
            LocateType='<shadow type="picker_locatetype"><field name="VALUE">structure</field></shadow>',
            Structure='<shadow type="picker_structure"><field name="VALUE">ancient_city</field></shadow>',
            Biome='<shadow type="picker_biome"><field name="VALUE">badlands</field></shadow>',
            Poi='<shadow type="picker_poi"><field name="VALUE">armorer</field></shadow>',
            Effect='<shadow type="picker_effect"><field name="VALUE">speed</field></shadow>',
            TitleAction='<shadow type="picker_titleaction"><field name="VALUE">reset</field></shadow>',
        )


        self.ACTION_CLASSES = []
        if HAS_ALL_ACTIONS:
            self.ACTION_CLASSES.extend([
                (ServerActions, "ServerActions", self.COLORS["Server"]),
                (PyncraftActions, "PyncraftActions", "#252E28"),
                (PlayerActions, "PlayerActions", self.COLORS["Player"]),
                (TurtleShapes, "TurtleShapes", self.COLORS["Turtle"]),
                (LSystemShapes, "LSystemShapes", self.COLORS["LSystem"]),
                (DigitalGeometryActions, "DigitalGeometryActions", self.COLORS["Geometry"]),
                (QTurtleActions, "QTurtleActions", self.COLORS["Turtle"]),
                (EventActions, "EventActions", self.COLORS["Events"])
            ])

        # --- Utility Picker Options ---
        self.METRICS = [("Euclidean", "euclidean"), ("Manhattan", "manhattan"), ("Chebyshev", "chebyshev")]
        self.AXES = [("Yaw (Y)", "y"), ("Pitch (X)", "x"), ("Roll (Z)", "z")]
        self.COMPASS = [
            ("North (-Z)", "N"), ("South (+Z)", "S"),
            ("East (+X)", "E"), ("West (-X)", "W"),
            ("North-East", "NE"), ("North-West", "NW"),
            ("South-East", "SE"), ("South-West", "SW")]

        self.QHEADINGS = [
            # --- Pure Local Directions (6) ---
            ("Forward", "F"), ("Back", "B"),
            ("Right", "R"), ("Left", "L"),
            ("Up", "U"), ("Down", "D"),

            # --- Local Planar Diagonals (4) ---
            ("Forward-Right", "FR"), ("Forward-Left", "FL"),
            ("Back-Right", "BR"), ("Back-Left", "BL"),

            # --- Local Vertical Diagonals (8) ---
            ("Forward-Up", "FU"), ("Forward-Down", "FD"),
            ("Back-Up", "BU"), ("Back-Down", "BD"),
            ("Right-Up", "RU"), ("Right-Down", "RD"),
            ("Left-Up", "LU"), ("Left-Down", "LD"),

            # --- Local 3D Diagonals (Corners) (8) ---
            ("Forward-Right-Up", "FRU"), ("Forward-Right-Down", "FRD"),
            ("Forward-Left-Up", "FLU"), ("Forward-Left-Down", "FLD"),
            ("Back-Right-Up", "BRU"), ("Back-Right-Down", "BRD"),
            ("Back-Left-Up", "BLU"), ("Back-Left-Down", "BLD")
        ]

        self.QCOMPASS = [
            # --- Pure Cardinal Directions (6) ---
            ("North (-Z)", "N"), ("South (+Z)", "S"),
            ("East (+X)", "E"), ("West (-X)", "W"),
            ("Up (+Y)", "U"), ("Down (-Y)", "D"),

            # --- Horizontal Diagonals (4) ---
            ("North-East", "NE"), ("North-West", "NW"),
            ("South-East", "SE"), ("South-West", "SW"),

            # --- Vertical Diagonals (Planar) (8) ---
            ("North-Up", "NU"), ("North-Down", "ND"),
            ("South-Up", "SU"), ("South-Down", "SD"),
            ("East-Up", "EU"), ("East-Down", "ED"),
            ("West-Up", "WU"), ("West-Down", "WD"),

            # --- Full 3D Diagonals (Corners) (8) ---
            ("North-East-Up", "NEU"), ("North-East-Down", "NED"),
            ("North-West-Up", "NWU"), ("North-West-Down", "NWD"),
            ("South-East-Up", "SEU"), ("South-East-Down", "SED"),
            ("South-West-Up", "SWU"), ("South-West-Down", "SWD")
        ]

        self.TIMES = [
            ("Day (1000)", "day"),
            ("Noon (6000)", "noon"),
            ("Sunset (12000)", "sunset"),
            ("Night (13000)", "night"),
            ("Midnight (18000)", "midnight"),
            ("Sunrise (23000)", "sunrise")
        ]

        self.WEATHERS = [
            ("Clear", "clear"),
            ("Rain", "rain"),
            ("Thunder", "thunder")
        ]

        self.DIFFICULTYS = [
            ("Peaceful", "peaceful"),
            ("Easy", "easy"),
            ("Normal", "normal"),
            ("Hard", "hard")
        ]

        self.GAMEMODES = [
            ("Survival", "survival"),
            ("Creative", "creative"),
            ("Adventure", "adventure"),
            ("Spectator", "spectator")
        ]

        self.LOCATETYPES = [
            ("Structure", "structure"),
            ("Biome", "biome"),
            ("Point of Interest (POI)", "poi")
        ]

        # Structures (Minecraft 1.19+)
        self.STRUCTURES = [
            ("Ancient City", "ancient_city"),
            ("Bastion Remnant", "bastion_remnant"),
            ("Buried Treasure", "buried_treasure"),
            ("Desert Pyramid", "desert_pyramid"),
            ("End City", "end_city"),
            ("Fortress", "fortress"),
            ("Igloo", "igloo"),
            ("Jungle Pyramid", "jungle_pyramid"),
            ("Mansion", "mansion"),
            ("Mineshaft", "mineshaft"),
            ("Monument", "monument"),
            ("Nether Fossil", "nether_fossil"),
            ("Ocean Ruin", "ocean_ruin"),
            ("Pillager Outpost", "pillager_outpost"),
            ("Ruined Portal", "ruined_portal"),
            ("Shipwreck", "shipwreck"),
            ("Stronghold", "stronghold"),
            ("Swamp Hut", "swamp_hut"),
            ("Village", "village"),
            ("Woodland Mansion", "mansion")
        ]

        # Biomes (Common selection)
        self.BIOMES = [
            ("Badlands", "badlands"),
            ("Bamboo Jungle", "bamboo_jungle"),
            ("Beach", "beach"),
            ("Birch Forest", "birch_forest"),
            ("Cherry Grove", "cherry_grove"),
            ("Dark Forest", "dark_forest"),
            ("Deep Dark", "deep_dark"),
            ("Desert", "desert"),
            ("Dripstone Caves", "dripstone_caves"),
            ("End Highlands", "end_highlands"),
            ("End Midlands", "end_midlands"),
            ("Forest", "forest"),
            ("Frozen Peaks", "frozen_peaks"),
            ("Grove", "grove"),
            ("Ice Spikes", "ice_spikes"),
            ("Jagged Peaks", "jagged_peaks"),
            ("Jungle", "jungle"),
            ("Lush Caves", "lush_caves"),
            ("Mangrove Swamp", "mangrove_swamp"),
            ("Meadow", "meadow"),
            ("Mushroom Fields", "mushroom_fields"),
            ("Nether Wastes", "nether_wastes"),
            ("Ocean", "ocean"),
            ("Plains", "plains"),
            ("River", "river"),
            ("Savanna", "savanna"),
            ("Snowy Beach", "snowy_beach"),
            ("Snowy Plains", "snowy_plains"),
            ("Snowy Taiga", "snowy_taiga"),
            ("Soul Sand Valley", "soul_sand_valley"),
            ("Stony Peaks", "stony_peaks"),
            ("Swamp", "swamp"),
            ("Taiga", "taiga"),
            ("The End", "the_end"),
            ("The Void", "the_void"),
            ("Warm Ocean", "warm_ocean"),
            ("Warped Forest", "warped_forest")
        ]

        # Points of Interest (Villager jobs + others)
        self.POIS = [
            ("Armorer", "armorer"),
            ("Butcher", "butcher"),
            ("Cartographer", "cartographer"),
            ("Cleric", "cleric"),
            ("Farmer", "farmer"),
            ("Fisherman", "fisherman"),
            ("Fletcher", "fletcher"),
            ("Leatherworker", "leatherworker"),
            ("Librarian", "librarian"),
            ("Mason", "mason"),
            ("Shepherd", "shepherd"),
            ("Toolsmith", "toolsmith"),
            ("Weaponsmith", "weaponsmith"),
            ("Beehive", "beehive"),
            ("Bee Nest", "bee_nest"),
            ("End Portal", "end_portal"),
            ("Home", "home"),
            ("Lightning Rod", "lightning_rod"),
            ("Lodestone", "lodestone"),
            ("Meeting", "meeting"),
            ("Nether Portal", "nether_portal")
        ]

        # Boolean GameRules (True/False) - Snake Case for 1.21.11+
        self.GAMERULES = [
            ("Advance Time", "advance_time"),
            ("Advance Weather", "advance_weather"),
            ("Allow Entering Nether", "allow_entering_nether_using_portals"),
            ("Block Drops", "block_drops"),
            ("Block Explosion Drop Decay", "block_explosion_drop_decay"),
            ("Command Block Output", "command_block_output"),
            ("Command Blocks Work", "command_blocks_work"),
            ("Disable Elytra Movement Check", "elytra_movement_check"),
            ("Disable Raids", "raids"),
            ("Do Entity Drops", "entity_drops"),
            ("Drowning Damage", "drowning_damage"),
            ("Ender Pearls Vanish On Death", "ender_pearls_vanish_on_death"),
            ("Fall Damage", "fall_damage"),
            ("Fire Damage", "fire_damage"),
            ("Forgive Dead Players", "forgive_dead_players"),
            ("Freeze Damage", "freeze_damage"),
            ("Global Sound Events", "global_sound_events"),
            ("Immediate Respawn", "immediate_respawn"),
            ("Keep Inventory", "keep_inventory"),
            ("Lava Source Conversion", "lava_source_conversion"),
            ("Limit Crafting", "limited_crafting"),
            ("Locator Bar", "locator_bar"),
            ("Log Admin Commands", "log_admin_commands"),
            ("Mob Drops", "mob_drops"),
            ("Mob Explosion Drop Decay", "mob_explosion_drop_decay"),
            ("Mob Griefing", "mob_griefing"),
            ("Natural Health Regeneration", "natural_health_regeneration"),
            ("Player Movement Check", "player_movement_check"),
            ("Projectiles Can Break Blocks", "projectiles_can_break_blocks"),
            ("PVP", "pvp"),
            ("Reduced Debug Info", "reduced_debug_info"),
            ("Send Command Feedback", "send_command_feedback"),
            ("Show Advancement Messages", "show_advancement_messages"),
            ("Show Death Messages", "show_death_messages"),
            ("Spawn Mobs", "spawn_mobs"),
            ("Spawn Monsters", "spawn_monsters"),
            ("Spawn Patrols", "spawn_patrols"),
            ("Spawn Phantoms", "spawn_phantoms"),
            ("Spawn Wandering Traders", "spawn_wandering_traders"),
            ("Spawn Wardens", "spawn_wardens"),
            ("Spawner Blocks Work", "spawner_blocks_work"),
            ("Spectators Generate Chunks", "spectators_generate_chunks"),
            ("Spread Vines", "spread_vines"),
            ("TNT Explodes", "tnt_explodes"),
            ("TNT Explosion Drop Decay", "tnt_explosion_drop_decay"),
            ("Universal Anger", "universal_anger"),
            ("Water Source Conversion", "water_source_conversion")
        ]

        # Integer GameRules (Numeric Inputs) - Snake Case for 1.21.11+
        self.INTEGERGAMERULES = [
            ("Fire Spread Radius", "fire_spread_radius_around_player"),
            ("Max Block Modifications", "max_block_modifications"),
            ("Max Command Forks", "max_command_forks"),
            ("Max Command Sequence Length", "max_command_sequence_length"),
            ("Max Entity Cramming", "max_entity_cramming"),
            ("Max Snow Accumulation Height", "max_snow_accumulation_height"),
            ("Players Nether Portal Creative Delay", "players_nether_portal_creative_delay"),
            ("Players Nether Portal Default Delay", "players_nether_portal_default_delay"),
            ("Players Sleeping Percentage", "players_sleeping_percentage"),
            ("Random Tick Speed", "random_tick_speed"),
            ("Respawn Radius", "respawn_radius")
        ]

        self.EFFECTS = [
            ("Speed", "speed"), ("Slowness", "slowness"), ("Haste", "haste"),
            ("Strength", "strength"), ("Instant Health", "instant_health"),
            ("Instant Damage", "instant_damage"), ("Jump Boost", "jump_boost"),
            ("Regeneration", "regeneration"), ("Resistance", "resistance"),
            ("Fire Resistance", "fire_resistance"), ("Water Breathing", "water_breathing"),
            ("Invisibility", "invisibility"), ("Blindness", "blindness"),
            ("Night Vision", "night_vision"), ("Hunger", "hunger"),
            ("Weakness", "weakness"), ("Poison", "poison"), ("Wither", "wither"),
            ("Health Boost", "health_boost"), ("Absorption", "absorption"),
            ("Saturation", "saturation"), ("Glowing", "glowing"),
            ("Levitation", "levitation"), ("Luck", "luck"), ("Unluck", "unluck"),
            ("Slow Falling", "slow_falling"), ("Conduit Power", "conduit_power"),
            ("Dolphins Grace", "dolphins_grace"), ("Bad Omen", "bad_omen"),
            ("Hero of the Village", "hero_of_the_village"), ("Darkness", "darkness")
        ]


        self.TITLEACTIONS = [("Main Title", "title"), ("Subtitle", "subtitle"), ("Action Bar", "actionbar"), ("Clear", "clear"),
                    ("Reset", "reset")]

        self.ACTION_PICKERS = [
            {'id': 'picker_time', 'label': 'Time', 'options': self.TIMES, 'input_type': 'Time'},
            {'id': 'picker_weather', 'label': 'Weather', 'options': self.WEATHERS, 'input_type': 'Weather'},
            {'id': 'picker_difficulty', 'label': 'Difficulty', 'options': self.DIFFICULTYS, 'input_type': 'Difficulty'},
            {'id': 'picker_gamemode', 'label': 'Game Mode', 'options': self.GAMEMODES, 'input_type': 'GameMode'},
            {'id': 'picker_gamerule', 'label': 'Game Rule', 'options': self.GAMERULES, 'input_type': 'GameRule'},
            {'id': 'picker_integergamerule', 'label': 'Integer Game Rule', 'options': self.INTEGERGAMERULES,
             'input_type': 'IntegerGameRule'},
            {'id': 'picker_locatetype', 'label': 'Locate Type', 'options': self.LOCATETYPES,
             'input_type': 'LocateType'},
            {'id': 'picker_structure', 'label': 'Structure', 'options': self.STRUCTURES, 'input_type': 'Structure'},
            {'id': 'picker_biome', 'label': 'Structure', 'options': self.BIOMES, 'input_type': 'Biome'},
            {'id': 'picker_poi', 'label': 'Point of Interest', 'options': self.POIS, 'input_type': 'Poi'},
            {'id': 'picker_effect', 'label': 'Effect', 'options': self.EFFECTS, 'input_type': 'Effect'},
            {'id': 'picker_titleaction', 'label': 'Location', 'options': self.TITLEACTIONS,
             'input_type': 'TitleAction'},
            {'id': 'picker_metric', 'label': 'Metric', 'options': self.METRICS, 'input_type': 'Metric'},
            {'id': 'picker_qheading', 'label': 'Local Q-Heading', 'options': self.QHEADINGS, 'input_type': 'QHeading'},
            {'id': 'picker_axis', 'label': 'Axis', 'options': self.AXES, 'input_type': 'Axis'},
            {'id': 'picker_qcompass', 'label': 'Global Q-Compass Direction', 'options': self.QCOMPASS,
             'input_type': 'QCompass'},
        ]

       # --- Materials Logic ---
        self.WOOD_TYPES = ["OAK", "SPRUCE", "BIRCH", "JUNGLE", "ACACIA", "DARK_OAK", "MANGROVE", "CHERRY", "PALE_OAK", "BAMBOO", "CRIMSON", "WARPED"]
        self.COLORS_LIST = ["WHITE", "ORANGE", "MAGENTA", "LIGHT_BLUE", "YELLOW", "LIME", "PINK", "GRAY", "LIGHT_GRAY", "CYAN", "PURPLE", "BLUE", "BROWN", "GREEN", "RED", "BLACK"]

        self.VARIANT_MAP = {
            'WOOD': {
                'id': 'picker_wood_types',
                'label': 'Wood Type',
                'options': [(self._normalize_name(w), w) for w in self.WOOD_TYPES],
                'input_type': 'MinecraftWood',
                'shadow': 'picker_wood_types'
            },
            'COLOR': {
                'id': 'picker_colours',
                'label': 'Color',
                'options': [(self._normalize_name(c), c) for c in self.COLORS_LIST],
                'input_type': 'MinecraftColour',
                'shadow': 'picker_colours'
            }
        }

        # Complete Thematic Groupings for Blocks and Items
        self.MATERIAL_PICKER_GROUPS = {
            "world": ["AIR", "STONE", "GRANITE", "DIORITE", "ANDESITE", "DEEPSLATE", "CALCITE", "TUFF", "DIRT", "COARSE_DIRT", "ROOTED_DIRT", "GRASS_BLOCK", "PODZOL", "MYCELIUM", "DIRT_PATH", "SAND", "RED_SAND", "GRAVEL", "CLAY", "ICE", "PACKED_ICE", "BLUE_ICE", "SNOW", "SNOW_BLOCK", "WATER", "LAVA", "BEDROCK", "OBSIDIAN", "CRYING_OBSIDIAN", "MAGMA_BLOCK"],
            "ores": ["COAL_ORE", "DEEPSLATE_COAL_ORE", "IRON_ORE", "DEEPSLATE_IRON_ORE", "COPPER_ORE", "DEEPSLATE_COPPER_ORE", "GOLD_ORE", "DEEPSLATE_GOLD_ORE", "REDSTONE_ORE", "DEEPSLATE_REDSTONE_ORE", "EMERALD_ORE", "DEEPSLATE_EMERALD_ORE", "LAPIS_ORE", "DEEPSLATE_LAPIS_ORE", "DIAMOND_ORE", "DEEPSLATE_DIAMOND_ORE", "NETHER_GOLD_ORE", "NETHER_QUARTZ_ORE", "ANCIENT_DEBRIS"],
            "stone_bricks": ["BRICKS", "STONE_BRICKS", "MUD_BRICKS", "DEEPSLATE_BRICKS", "DEEPSLATE_TILES", "NETHER_BRICKS", "RED_NETHER_BRICKS", "POLISHED_BLACKSTONE_BRICKS", "END_STONE_BRICKS", "QUARTZ_BRICKS", "CHISELED_STONE_BRICKS", "CRACKED_STONE_BRICKS", "MOSSY_STONE_BRICKS", "CHISELED_NETHER_BRICKS", "CRACKED_NETHER_BRICKS", "CHISELED_POLISHED_BLACKSTONE", "CRACKED_POLISHED_BLACKSTONE_BRICKS", "CHISELED_DEEPSLATE", "CRACKED_DEEPSLATE_BRICKS", "CRACKED_DEEPSLATE_TILES", "CHISELED_TUFF_BRICKS"],
            "glass": ["GLASS", "GLASS_PANE", "TINTED_GLASS"],
            "redstone_components": ["REDSTONE_WIRE", "REDSTONE_BLOCK", "REDSTONE_TORCH", "REPEATER", "COMPARATOR", "PISTON", "STICKY_PISTON", "SLIME_BLOCK", "HONEY_BLOCK", "OBSERVER", "DROPPER", "DISPENSER", "HOPPER", "LECTERN", "LEVER", "DAYLIGHT_DETECTOR", "TRIPWIRE_HOOK", "TARGET", "NOTE_BLOCK", "RAIL", "POWERED_RAIL", "DETECTOR_RAIL", "ACTIVATOR_RAIL", "REDSTONE_LAMP"],
            "lighting": ["TORCH", "SOUL_TORCH", "LANTERN", "SOUL_LANTERN", "GLOWSTONE", "SEA_LANTERN", "OCHRE_FROGLIGHT", "PEARLESCENT_FROGLIGHT", "VERDANT_FROGLIGHT", "COPPER_LANTERN", "SHROOMLIGHT", "JACK_O_LANTERN", "BEACON", "END_ROD"],
            "copper_variants": ["COPPER_BLOCK", "EXPOSED_COPPER", "WEATHERED_COPPER", "OXIDIZED_COPPER", "CUT_COPPER", "CHISELED_COPPER", "COPPER_GRATE", "COPPER_BULB"],
            "nature": ["OAK_LEAVES", "SPRUCE_LEAVES", "BIRCH_LEAVES", "JUNGLE_LEAVES", "ACACIA_LEAVES", "DARK_OAK_LEAVES", "MANGROVE_LEAVES", "CHERRY_LEAVES", "AZALEA_LEAVES", "MOSS_BLOCK", "VINE", "CAVE_VINES", "TWISTING_VINES", "WEEPING_VINES"],
            "flowers": ["DANDELION", "POPPY", "BLUE_ORCHID", "ALLIUM", "AZURE_BLUET", "RED_TULIP", "ORANGE_TULIP", "WHITE_TULIP", "PINK_TULIP", "OXEYE_DAISY", "CORNFLOWER", "LILY_OF_THE_VALLEY", "WITHER_ROSE", "SUNFLOWER", "LILAC", "ROSE_BUSH", "PEONY"],
            "functional_storage": ["CHEST", "TRAPPED_CHEST", "BARREL", "ENDER_CHEST", "CRAFTER", "FURNACE", "BLAST_FURNACE", "SMOKER"],
            "spawning": ["SPAWNER", "TRIAL_SPAWNER", "FROGSPAWN", "RESPAWN_ANCHOR"]
        }

        self.ENTITY_GROUPS = {
            "passive_mobs": ["ALLAY", "ARMADILLO", "AXOLOTL", "BAT", "CAMEL", "CAT", "CHICKEN", "COD", "COW", "DONKEY", "FOX", "FROG", "GLOW_SQUID", "HORSE", "MOOSHROOM", "MULE", "OCELOT", "PANDA", "PARROT", "PIG", "POLAR_BEAR", "PUFFERFISH", "RABBIT", "SALMON", "SHEEP", "SNIFFER", "SQUID", "STRIDER", "TADPOLE", "TROPICAL_FISH", "TURTLE", "VILLAGER", "WANDERING_TRADER", "WOLF"],
            "hostile_mobs": ["BLAZE", "BOGGED", "BREEZE", "CAVE_SPIDER", "CREAKING", "CREEPER", "DROWNED", "ELDER_GUARDIAN", "ENDERMAN", "ENDERMITE", "EVOKER", "GHAST", "GUARDIAN", "HOGLIN", "HUSK", "ILLUSIONER", "MAGMA_CUBE", "PHANTOM", "PIGLIN", "PIGLIN_BRUTE", "PILLAGER", "RAVAGER", "SHULKER", "SILVERFISH", "SKELETON", "SLIME", "SPIDER", "STRAY", "VEX", "VINDICATOR", "WARDEN", "WITCH", "WITHER", "WITHER_SKELETON", "ZOGLIN", "ZOMBIE", "ZOMBIE_VILLAGER", "ZOMBIFIED_PIGLIN"],
            "minecarts": ["MINECART", "CHEST_MINECART", "COMMAND_BLOCK_MINECART", "FURNACE_MINECART", "HOPPER_MINECART", "SPAWNER_MINECART", "TNT_MINECART"],
            "projectiles": ["ARROW", "EGG", "ENDER_PEARL", "EXPERIENCE_BOTTLE", "FIREBALL", "FIREWORK_ROCKET", "SNOWBALL", "TRIDENT"],
            "utility": ["ARMOR_STAND", "END_CRYSTAL", "EXPERIENCE_ORB", "FALLING_BLOCK", "ITEM_FRAME", "PAINTING", "PLAYER"]
        }

    def _normalize_name(self, name: str) -> str:
        return name.replace('_', ' ').title()


    def build_all(self):
        """Executes the complete build pipeline."""
        self.build_blocks()
        self.build_items()
        self.build_entities()
        self.build_actions()
        self.build_pickers_category()

    def _generate_base_pickers(self) -> Dict[str, str]:
        """Generates the shared Wood and Color pickers used as shadows."""
        js, py = [], []
        for info in self.VARIANT_MAP.values():
            res = BlocklyGenerator.generate_picker(info['id'], info['label'], info['options'], info['input_type'], self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py'])
        return {"js": "\n".join(js), "py": "\n".join(py)}

    def build_blocks(self):
        """Processes blocks and organizes them into thematic groups."""
        js, py, xml = [], [], []
        base = self._generate_base_pickers()
        js.append(base['js']); py.append(base['py'])

        blocks = [k for k, v in self.materials_data.items() if v.get('is_block')]
        templates, consumed = self._classify_variants(blocks)

        # 1. Parameterized Templates (Wood, Color variants)
        for t, info in templates.items():
            b_type = f"mc_block_{t.lower().replace('{}_', '').replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(b_type, info["label"], "VARIANT", info["input_type"], "Block", self.COLORS["Block"], t, info["shadow"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

        # 2. Material Picker Groups (Ores, Glass, Nature, etc.)
        for group_name, members in self.MATERIAL_PICKER_GROUPS.items():
            valid_members = [m for m in members if m in blocks]
            if not valid_members: continue

            b_type = f"mc_block_picker_{group_name.lower()}"
            res = BlocklyGenerator.generate_picker(b_type, self._normalize_name(group_name), [(self._normalize_name(m), m) for m in valid_members], "Block", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            consumed.update(valid_members)

        # 3. Remaining General Blocks
        rem = sorted(list(set(blocks) - consumed))
        if rem:
            res = BlocklyGenerator.generate_picker("mc_block_picker_general", "Other Blocks", [(self._normalize_name(m), m) for m in rem], "Block", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

        self._write_output("blocks", "Blocks", js, py)
        BlocklyGenerator.update_toolbox(f'<category name="Blocks" colour="{self.COLORS["Block"]}">{"".join(xml)}</category>', self.toolbox_path)

    def build_items(self):
        """Processes items and organizes them into thematic groups."""
        js, py, xml = [], [], []
        items = [k for k, v in self.materials_data.items() if v.get('is_item')]
        templates, consumed = self._classify_variants(items)

        # 1. Parameterized Templates
        for t, info in templates.items():
            b_type = f"mc_item_{t.lower().replace('{}_', '').replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(b_type, info["label"], "VARIANT", info["input_type"], "Item", self.COLORS["Item"], t, info["shadow"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

        # 2. Material Picker Groups for Items
        for group_name, members in self.MATERIAL_PICKER_GROUPS.items():
            valid_members = [m for m in members if m in items]
            if not valid_members: continue

            b_type = f"mc_item_picker_{group_name.lower()}"
            res = BlocklyGenerator.generate_picker(b_type, self._normalize_name(group_name), [(self._normalize_name(m), m) for m in valid_members], "Item", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            consumed.update(valid_members)

        # 3. Remaining General Items
        rem = sorted(list(set(items) - consumed))
        if rem:
            res = BlocklyGenerator.generate_picker("mc_item_picker_general", "Other Items", [(self._normalize_name(m), m) for m in rem], "Item", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

        self._write_output("items", "Items", js, py)
        BlocklyGenerator.update_toolbox(f'<category name="Items" colour="{self.COLORS["Item"]}">{"".join(xml)}</category>', self.toolbox_path)

    def build_entities(self):
        js, py, xml = [], [], []
        for group, members in self.ENTITY_GROUPS.items():
            opts = [(self._normalize_name(e), e) for e in sorted(members) if e in self.entity_data]
            if not opts: continue
            res = BlocklyGenerator.generate_picker(f"mc_entity_picker_{group}", self._normalize_name(group), opts, "Entity", self.COLORS["Entity"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
        self._write_output("entities", "Entities", js, py)
        BlocklyGenerator.update_toolbox(f'<category name="Entities" colour="{self.COLORS["Entity"]}">{"".join(xml)}</category>', self.toolbox_path)

    def build_actions(self):
        pick_js, pick_py = [], []
        for p in self.ACTION_PICKERS:
            res = BlocklyGenerator.generate_picker(p['id'], p['label'], p['options'], p['input_type'], self.COLORS["Picker"])
            pick_js.append(res['js']); pick_py.append(res['py'])

        for i, (cls, name, color) in enumerate(self.ACTION_CLASSES):
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP, color)
            b_js, p_py, c_xml = gen.generate()
            js_out = pick_js + [b_js] if i == 0 else [b_js]
            py_out = pick_py + [p_py] if i == 0 else [p_py]
            self._write_output(name, name, js_out, py_out)
            BlocklyGenerator.update_toolbox(c_xml, self.toolbox_path)

    def build_pickers_category(self):
        """Creates a central category for all standalone pickers."""
        xml = [f'<block type="{info["id"]}"></block>' for info in self.VARIANT_MAP.values()]
        xml += [f'<block type="{p["id"]}"></block>' for p in self.ACTION_PICKERS]
        # Add the thematic group pickers to the central Pickers category too
        for group_name in self.MATERIAL_PICKER_GROUPS.keys():
            xml.append(f'<block type="mc_block_picker_{group_name.lower()}"></block>')

        BlocklyGenerator.update_toolbox(f'<category name="Pickers" colour="{self.COLORS["Picker"]}">{"".join(xml)}</category>', self.toolbox_path)

    def _classify_variants(self, material_list):
        parameterized, consumed = {}, set()
        suffixes = {}
        for mat in material_list:
            parts = mat.split('_')
            if len(parts) > 1:
                prefix, suffix = parts[0], "_".join(parts[1:])
                if prefix in self.WOOD_TYPES: suffixes.setdefault(f"{{}}_{suffix}", {"mats": [], "type": "WOOD"}).get("mats").append(mat)
                elif prefix in self.COLORS_LIST: suffixes.setdefault(f"{{}}_{suffix}", {"mats": [], "type": "COLOR"}).get("mats").append(mat)
        for t, info in suffixes.items():
            if len(info["mats"]) > 3:
                var = self.VARIANT_MAP[info["type"]]
                parameterized[t] = {"template": t, "input_type": var["input_type"], "shadow": var["shadow"], "label": self._normalize_name(t.replace('{}_', ''))}
                consumed.update(info["mats"])
        return parameterized, consumed

    def _write_output(self, file_name, export_name, js, py):
        header = 'import { MCED } from "../lib/constants.mjs";\n\n'
        js_c = f"{header}export function define{export_name}Blocks(Blockly) {{\n" + "\n".join(js) + "\n}"
        py_c = f"export function define{export_name}Generators(pythonGenerator) {{\n" + "\n".join(py) + "\n}"
        (self.blocks_dir / f"{file_name}.mjs").write_text(js_c, encoding='utf-8')
        (self.gens_dir / f"{file_name}.mjs").write_text(py_c, encoding='utf-8')

if __name__ == "__main__":
    builder = RegistryBuilder(MC_APP_SRC_DIR / 'toolbox.xml', MC_APP_SRC_DIR / 'blocks', MC_APP_SRC_DIR / 'generators' / 'python')
    builder.build_all()