from blockapily import BlocklyGenerator
import yaml
from pathlib import Path
import re
import pickle
import pathlib

# Import Action Classes
try:
    from mcshell.serveractions import ServerActions
    from mcshell.pyncraftcactions import PyncraftActions
    from mcshell.playeractions import PlayerActions
    from mcshell.qturtleactions import QTurtleActions
    from mcshell.digitalgeometryactions import DigitalGeometryActions
    from mcshell.digitalsetactions import DigitalSetActions
    from mcshell.eventactions import EventActions
    from mcshell.mcactions import (
        TurtleShapes, LSystemShapes
    )
    # test
    from mcshell.generated_actions import (
        GeneratedPlayerActions, GeneratedChatActions, GeneratedWorldActions
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

    # --- Class Level Constants & Data Structures ---

    # Muted Primary & Secondary Palette
    COLORS = {
        "Block": "#B06161",     # Muted Red / Terracotta
        "Item": "#D4A373",      # Muted Gold / Tan
        "Entity": "#8D7EB5",    # Muted Purple / Lavender
        "Picker": "#95A5A6",    # Muted Slate / Gray
        "Geometry": "#5B7BA1",  # Muted Blue / Steel
        "Turtle": "#C9A65B",    # Muted Yellow / Amber
        "LSystem": "#7A9473",   # Muted Green / Sage
        "Player": "#61A1B0",    # Muted Cyan / Teal
        "Events": "#D68C45",    # Muted Orange / Copper
        "Server": "#5C7457",    # Muted Forest / Dark Green
        "Digital Set": "#A57582", # Muted Mauve / Rose
        # new generated action classes
        "J-Player": "#61A1B0",  # Muted Cyan / Teal
        "J-World": "#5C7457",  # Muted Forest / Dark Green
        "J-Chat": "#D68C45",  # Muted Orange / Copper
    }

    TYPE_MAP = {
        'str': 'String',
        'int': 'Number',
        'float': 'Number',
        'bool': 'Boolean',
        'list': 'Array',
        'tuple': 'List',
        'Vec3': "3DVector", 'Matrix3': "3DMatrix", 'Block': "Block", 'DigitalSet': "Digital_Set",
        'Metric': 'Metric', 'QDirection': 'QDirection', 'Axis': 'Axis', 'QCompass': 'QCompass',
        'Time': 'Time',
        'TimeType':'TimeType',
        'Weather': 'Weather', 'Difficulty': 'Difficulty', 'Gamemode': 'Gamemode', 'GameRule': 'GameRule',
        'LocateType': 'LocateType', 'Structure': 'Structure', 'Biome': 'Biome', 'Poi': 'Poi',
        'Entity': 'Entity', 'Effect': "Effect",
        'DataPath':'DataPath'
    }

    SHADOW_MAP = dict(
        int = '<shadow type="math_number"><field name="NUM">1</field></shadow>',
        float = '<shadow type="math_number"><field name="NUM">1.0</field></shadow>',
        bool = '<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>',
        math_number = '<shadow type="math_number"><field name="NUM">1</field></shadow>',
        str = '<shadow type="text"><field name="TEXT"></field></shadow>',
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
        TimeType='<shadow type="picker_timetype"><field name="VALUE">gametime</field></shadow>',
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
        DataPath='<shadow type="picker_datapath"><field name="VALUE">Brain</field></shadow>',
    )

    DATA_PATHS = [
        ('Brain', 'Brain'),
        ('Hurt By Timestamp', 'HurtByTimestamp'),
        ('Sleep Timer', 'SleepTimer'),
        ('Attributes', 'Attributes'),
        ('Invulnerable', 'Invulnerable'),
        ('Fall Flying', 'FallFlying'),
        ('Portal Cooldown', 'PortalCooldown'),
        ('Absorption Amount', 'AbsorptionAmount'),
        ('Abilities', 'abilities'),
        ('Fall Distance', 'FallDistance'),
        ('Recipe Book', 'recipeBook'),
        ('Death Time', 'DeathTime'),
        ('Xp Seed', 'XpSeed'),
        ('Xp Total', 'XpTotal'),
        ('UUID', 'UUID'),
        ('Player Game Type', 'playerGameType'),
        ('Seen Credits', 'seenCredits'),
        ('Motion', 'Motion'),
        ('Health', 'Health'),
        ('Food Saturation Level', 'foodSaturationLevel'),
        ('Air', 'Air'),
        ('On Ground', 'OnGround'),
        ('Dimension', 'Dimension'),
        ('Rotation', 'Rotation'),
        ('Xp Level', 'XpLevel'),
        ('Score', 'Score'),
        ('Pos', 'Pos'),
        ('Previous Player Game Type', 'previousPlayerGameType'),
        ('Fire', 'Fire'),
        ('Xp P', 'XpP'),
        ('Ender Items', 'EnderItems'),
        ('Data Version', 'DataVersion'),
        ('Food Level', 'foodLevel'),
        ('Food Exhaustion Level', 'foodExhaustionLevel'),
        ('Hurt Time', 'HurtTime'),
        ('Selected Item Slot', 'SelectedItemSlot'),
        ('Inventory', 'Inventory'),
        ('Food Tick Timer', 'foodTickTimer')
    ]

    METRICS = [("Euclidean", "euclidean"), ("Manhattan", "manhattan"), ("Chebyshev", "chebyshev")]
    AXES = [("Yaw (Y)", "y"), ("Pitch (X)", "x"), ("Roll (Z)", "z")]
    COMPASS = [
        ("North (-Z)", "N"), ("South (+Z)", "S"),
        ("East (+X)", "E"), ("West (-X)", "W"),
        ("North-East", "NE"), ("North-West", "NW"),
        ("South-East", "SE"), ("South-West", "SW")]

    QHEADINGS = [
        ("Forward", "F"), ("Back", "B"), ("Right", "R"), ("Left", "L"), ("Up", "U"), ("Down", "D"),
        ("Forward-Right", "FR"), ("Forward-Left", "FL"), ("Back-Right", "BR"), ("Back-Left", "BL"),
        ("Forward-Up", "FU"), ("Forward-Down", "FD"), ("Back-Up", "BU"), ("Back-Down", "BD"),
        ("Right-Up", "RU"), ("Right-Down", "RD"), ("Left-Up", "LU"), ("Left-Down", "LD"),
        ("Forward-Right-Up", "FRU"), ("Forward-Right-Down", "FRD"), ("Forward-Left-Up", "FLU"), ("Forward-Left-Down", "FLD"),
        ("Back-Right-Up", "BRU"), ("Back-Right-Down", "BRD"), ("Back-Left-Up", "BLU"), ("Back-Left-Down", "BLD")
    ]

    QCOMPASS = [
        ("North (-Z)", "N"), ("South (+Z)", "S"), ("East (+X)", "E"), ("West (-X)", "W"), ("Up (+Y)", "U"), ("Down (-Y)", "D"),
        ("North-East", "NE"), ("North-West", "NW"), ("South-East", "SE"), ("South-West", "SW"),
        ("North-Up", "NU"), ("North-Down", "ND"), ("South-Up", "SU"), ("South-Down", "SD"),
        ("East-Up", "EU"), ("East-Down", "ED"), ("West-Up", "WU"), ("West-Down", "WD"),
        ("North-East-Up", "NEU"), ("North-East-Down", "NED"), ("North-West-Up", "NWU"), ("North-West-Down", "NWD"),
        ("South-East-Up", "SEU"), ("South-East-Down", "SED"), ("South-West-Up", "SWU"), ("South-West-Down", "SWD")
    ]

    TIMES = [
        ("Day (1000)", "day"), ("Noon (6000)", "noon"),
        ("Night (13000)", "night"), ("Midnight (18000)", "midnight")
    ]

    TIMETYPES = [("Day Time", "daytime"), ("Game Time", "gametime"), ("Day", "day")]
    WEATHERS = [("Clear", "clear"), ("Rain", "rain"), ("Thunder", "thunder")]
    DIFFICULTYS = [("Peaceful", "peaceful"), ("Easy", "easy"), ("Normal", "normal"), ("Hard", "hard")]
    GAMEMODES = [("Survival", "survival"), ("Creative", "creative"), ("Adventure", "adventure"), ("Spectator", "spectator")]
    LOCATETYPES = [("Structure", "structure"), ("Biome", "biome"), ("Point of Interest (POI)", "poi")]

    STRUCTURES = [
        ("Ancient City", "ancient_city"), ("Bastion Remnant", "bastion_remnant"), ("Buried Treasure", "buried_treasure"),
        ("Desert Pyramid", "desert_pyramid"), ("End City", "end_city"), ("Fortress", "fortress"), ("Igloo", "igloo"),
        ("Jungle Pyramid", "jungle_pyramid"), ("Mansion", "mansion"), ("Mineshaft", "mineshaft"), ("Monument", "monument"),
        ("Nether Fossil", "nether_fossil"), ("Ocean Ruin", "ocean_ruin"), ("Pillager Outpost", "pillager_outpost"),
        ("Ruined Portal", "ruined_portal"), ("Shipwreck", "shipwreck"), ("Stronghold", "stronghold"), ("Swamp Hut", "swamp_hut"),
        ("Village", "village"), ("Woodland Mansion", "mansion")
    ]

    BIOMES = [
        ("Badlands", "badlands"), ("Bamboo Jungle", "bamboo_jungle"), ("Beach", "beach"), ("Birch Forest", "birch_forest"),
        ("Cherry Grove", "cherry_grove"), ("Dark Forest", "dark_forest"), ("Deep Dark", "deep_dark"), ("Desert", "desert"),
        ("Dripstone Caves", "dripstone_caves"), ("End Highlands", "end_highlands"), ("End Midlands", "end_midlands"),
        ("Forest", "forest"), ("Frozen Peaks", "frozen_peaks"), ("Grove", "grove"), ("Ice Spikes", "ice_spikes"),
        ("Jagged Peaks", "jagged_peaks"), ("Jungle", "jungle"), ("Lush Caves", "lush_caves"), ("Mangrove Swamp", "mangrove_swamp"),
        ("Meadow", "meadow"), ("Mushroom Fields", "mushroom_fields"), ("Nether Wastes", "nether_wastes"), ("Ocean", "ocean"),
        ("Plains", "plains"), ("River", "river"), ("Savanna", "savanna"), ("Snowy Beach", "snowy_beach"), ("Snowy Plains", "snowy_plain"),
        ("Snowy Taiga", "snowy_taiga"), ("Soul Sand Valley", "soul_sand_valley"), ("Stony Peaks", "stony_peaks"), ("Swamp", "swamp"),
        ("Taiga", "target_taiga"), ("The End", "the_end"), ("The Void", "the_void"), ("Warm Ocean", "warm_ocean"), ("Warped Forest", "warped_forest")
    ]

    POIS = [
        ("Armorer", "armorer"), ("Butcher", "butcher"), ("Cartographer", "cartographer"), ("Cleric", "cleric"),
        ("Farmer", "farmer"), ("Fisherman", "fisherman"), ("Fletcher", "fletcher"), ("Leatherworker", "leatherworker"),
        ("Librarian", "librarian"), ("Mason", "mason"), ("Shepherd", "shepherd"), ("Toolsmith", "toolsmith"),
        ("Weaponsmith", "weaponsmith"), ("Beehive", "beehive"), ("Bee Nest", "bee_nest"), ("End Portal", "end_portal"),
        ("Home", "home"), ("Lightning Rod", "lightning_rod"), ("Lodestone", "lodestone"), ("Meeting", "meeting"),
        ("Nether Portal", "nether_portal")
    ]

    GAMERULES = [
        ("Advance Time", "advance_time"), ("Advance Weather", "advance_weather"), ("Allow Entering Nether", "allow_entering_nether_using_portals"),
        ("Block Drops", "block_drops"), ("Block Explosion Drop Decay", "block_explosion_drop_decay"), ("Command Block Output", "command_block_output"),
        ("Command Blocks Work", "command_blocks_work"), ("Disable Elytra Movement Check", "elytra_movement_check"), ("Disable Raids", "raids"),
        ("Do Entity Drops", "entity_drops"), ("Drowning Damage", "drowning_damage"), ("Ender Pearls Vanish On Death", "ender_pearls_vanish_on_death"),
        ("Fall Damage", "fall_damage"), ("Fire Damage", "fire_damage"), ("Forgive Dead Players", "forgive_dead_players"), ("Freeze Damage", "freeze_damage"),
        ("Global Sound Events", "global_sound_events"), ("Immediate Respawn", "immediate_respawn"), ("Keep Inventory", "keep_inventory"),
        ("Lava Source Conversion", "lava_source_conversion"), ("Limit Crafting", "limited_crafting"), ("Locator Bar", "locator_bar"),
        ("Log Admin Commands", "log_admin_commands"), ("Mob Drops", "mob_drops"), ("Mob Explosion Drop Decay", "mob_explosion_drop_decay"),
        ("Mob Griefing", "mob_griefing"), ("Natural Health Regeneration", "natural_health_regeneration"), ("Player Movement Check", "player_movement_check"),
        ("Projectiles Can Break Blocks", "projectiles_can_break_blocks"), ("PVP", "pvp"), ("Reduced Debug Info", "reduced_debug_info"),
        ("Send Command Feedback", "send_command_feedback"), ("Show Advancement Messages", "show_advancement_messages"), ("Show Death Messages", "show_death_messages"),
        ("Spawn Mobs", "spawn_mobs"), ("Spawn Monsters", "spawn_monsters"), ("Spawn Patrols", "spawn_patrols"), ("Spawn Phantoms", "spawn_phantoms"),
        ("Spawn Wandering Traders", "spawn_wandering_traders"), ("Spawn Wardens", "spawn_wardens"), ("Spawner Blocks Work", "spawner_blocks_work"),
        ("Spectators Generate Chunks", "spectators_generate_chunks"), ("Spread Vines", "spread_vines"), ("TNT Explodes", "tnt_explodes"),
        ("TNT Explosion Drop Decay", "tnt_explosion_drop_decay"), ("Universal Anger", "universal_anger"), ("Water Source Conversion", "water_source_conversion")
    ]

    INTEGERGAMERULES = [
        ("Fire Spread Radius", "fire_spread_radius_around_player"), ("Max Block Modifications", "max_block_modifications"),
        ("Max Command Forks", "max_command_forks"), ("Max Command Sequence Length", "max_command_sequence_length"),
        ("Max Entity Cramming", "max_entity_cramming"), ("Max Snow Accumulation Height", "max_snow_accumulation_height"),
        ("Players Nether Portal Creative Delay", "players_nether_portal_creative_delay"), ("Players Nether Portal Default Delay", "players_nether_portal_default_delay"),
        ("Players Sleeping Percentage", "players_sleeping_percentage"), ("Random Tick Speed", "random_tick_speed"), ("Respawn Radius", "respawn_radius")
    ]

    EFFECTS = [
        ("Speed", "speed"), ("Slowness", "slowness"), ("Haste", "haste"), ("Strength", "strength"),
        ("Instant Health", "instant_health"), ("Instant Damage", "instant_damage"), ("Jump Boost", "jump_boost"),
        ("Regeneration", "regeneration"), ("Resistance", "resistance"), ("Fire Resistance", "fire_resistance"),
        ("Water Breathing", "water_breathing"), ("Invisibility", "invisibility"), ("Blindness", "blindness"),
        ("Night Vision", "night_vision"), ("Hunger", "hunger"), ("Weakness", "weakness"), ("Poison", "poison"),
        ("Wither", "wither"), ("Health Boost", "health_boost"), ("Absorption", "absorption"), ("Saturation", "saturation"),
        ("Glowing", "glowing"), ("Levitation", "levitation"), ("Luck", "luck"), ("Unluck", "unluck"), ("Slow Falling", "slow_falling"),
        ("Conduit Power", "conduit_power"), ("Dolphins Grace", "dolphins_grace"), ("Bad Omen", "bad_omen"),
        ("Hero of the Village", "hero_of_the_village"), ("Darkness", "darkness")
    ]

    TITLEACTIONS = [("Main Title", "title"), ("Subtitle", "subtitle"), ("Action Bar", "actionbar"), ("Clear", "clear"), ("Reset", "reset")]

    ACTION_PICKERS = [
        {'id': 'picker_timetype', 'label': 'Time Type', 'options': TIMETYPES, 'input_type': 'TimeType'},
        {'id': 'picker_time', 'label': 'Time', 'options': TIMES, 'input_type': 'Time'},
        {'id': 'picker_weather', 'label': 'Weather', 'options': WEATHERS, 'input_type': 'Weather'},
        {'id': 'picker_difficulty', 'label': 'Difficulty', 'options': DIFFICULTYS, 'input_type': 'Difficulty'},
        {'id': 'picker_gamemode', 'label': 'Game Mode', 'options': GAMEMODES, 'input_type': 'GameMode'},
        {'id': 'picker_gamerule', 'label': 'Game Rule', 'options': GAMERULES, 'input_type': 'GameRule'},
        {'id': 'picker_integergamerule', 'label': 'Integer Game Rule', 'options': INTEGERGAMERULES, 'input_type': 'IntegerGameRule'},
        {'id': 'picker_locatetype', 'label': 'Locate Type', 'options': LOCATETYPES, 'input_type': 'LocateType'},
        {'id': 'picker_structure', 'label': 'Structure', 'options': STRUCTURES, 'input_type': 'Structure'},
        {'id': 'picker_biome', 'label': 'Structure', 'options': BIOMES, 'input_type': 'Biome'},
        {'id': 'picker_poi', 'label': 'Point of Interest', 'options': POIS, 'input_type': 'Poi'},
        {'id': 'picker_effect', 'label': 'Effect', 'options': EFFECTS, 'input_type': 'Effect'},
        {'id': 'picker_titleaction', 'label': 'Location', 'options': TITLEACTIONS, 'input_type': 'TitleAction'},
        {'id': 'picker_metric', 'label': 'Metric', 'options': METRICS, 'input_type': 'Metric'},
        {'id': 'picker_qheading', 'label': 'Local Q-Heading', 'options': QHEADINGS, 'input_type': 'QHeading'},
        {'id': 'picker_axis', 'label': 'Axis', 'options': AXES, 'input_type': 'Axis'},
        {'id': 'picker_qcompass', 'label': 'Global Q-Compass Direction', 'options': QCOMPASS, 'input_type': 'QCompass'},
        {'id': 'picker_datapath', 'label': 'Player Data Paths', 'options': DATA_PATHS, 'input_type': 'DataPath'},
    ]

    WOOD_TYPES = ["OAK", "SPRUCE", "BIRCH", "JUNGLE", "ACACIA", "DARK_OAK", "MANGROVE", "CHERRY", "PALE_OAK", "BAMBOO", "CRIMSON", "WARPED"]
    COLORS_LIST = ["WHITE", "ORANGE", "MAGENTA", "LIGHT_BLUE", "YELLOW", "LIME", "PINK", "GRAY", "LIGHT_GRAY", "CYAN", "PURPLE", "BLUE", "BROWN", "GREEN", "RED", "BLACK"]

    VARIANT_MAP = {
        'WOOD': {
            'id': 'picker_wood_types',
            'label': 'Wood Type',
            'options': [(w.replace('_', ' ').title(), w) for w in WOOD_TYPES],
            'input_type': 'MinecraftWood',
            'shadow': 'picker_wood_types'
        },
        'COLOR': {
            'id': 'picker_colours',
            'label': 'Color',
            'options': [(c.replace('_', ' ').title(), c) for c in COLORS_LIST],
            'input_type': 'MinecraftColour',
            'shadow': 'picker_colours'
        }
    }

    MATERIAL_PICKER_GROUPS = {
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

    ENTITY_GROUPS = {
        "passive_mobs": ["ALLAY", "ARMADILLO", "AXOLOTL", "BAT", "CAMEL", "CAT", "CHICKEN", "COD", "COW", "DONKEY", "FOX", "FROG", "GLOW_SQUID", "HORSE", "MOOSHROOM", "MULE", "OCELOT", "PANDA", "PARROT", "PIG", "POLAR_BEAR", "PUFFERFISH", "RABBIT", "SALMON", "SHEEP", "SNIFFER", "SQUID", "STRIDER", "TADPOLE", "TROPICAL_FISH", "TURTLE", "VILLAGER", "WANDERING_TRADER", "WOLF"],
        "hostile_mobs": ["BLAZE", "BOGGED", "BREEZE", "CAVE_SPIDER", "CREAKING", "CREEPER", "DROWNED", "ELDER_GUARDIAN", "ENDERMAN", "ENDERMITE", "EVOKER", "GHAST", "GUARDIAN", "HOGLIN", "HUSK", "ILLUSIONER", "MAGMA_CUBE", "PHANTOM", "PIGLIN", "PIGLIN_BRUTE", "PILLAGER", "RAVAGER", "SHULKER", "SILVERFISH", "SKELETON", "SLIME", "SPIDER", "STRAY", "VEX", "VINDICATOR", "WARDEN", "WITCH", "WITHER", "WITHER_SKELETON", "ZOGLIN", "ZOMBIE", "ZOMBIE_VILLAGER", "ZOMBIFIED_PIGLIN"],
        "minecarts": ["MINECART", "CHEST_MINECART", "COMMAND_BLOCK_MINECART", "FURNACE_MINECART", "HOPPER_MINECART", "SPAWNER_MINECART", "TNT_MINECART"],
        "projectiles": ["ARROW", "EGG", "ENDER_PEARL", "EXPERIENCE_BOTTLE", "FIREBALL", "FIREWORK_ROCKET", "SNOWBALL", "TRIDENT"],
        "utility": ["ARMOR_STAND", "END_CRYSTAL", "EXPERIENCE_ORB", "FALLING_BLOCK", "ITEM_FRAME", "PAINTING", "PLAYER"]
    }

    def __init__(self, toolbox_path: pathlib.Path, blocks_dir: pathlib.Path, gens_dir: pathlib.Path,materials_path:pathlib.Path,entity_id_map_path:pathlib.Path):
        self.toolbox_path = toolbox_path
        self.blocks_dir = blocks_dir
        self.gens_dir = gens_dir

        try:
            with materials_path.open('rb') as f:
                self.materials_data = pickle.load(f)
        except (FileNotFoundError, EOFError):
            self.materials_data = {}

        try:
            with entity_id_map_path.open('rb') as f:
                self.entity_data = pickle.load(f)
        except (FileNotFoundError, EOFError):
            self.entity_data = {}

        self.ACTION_CLASSES = []
        if HAS_ALL_ACTIONS:
            self.ACTION_CLASSES.extend([
                (ServerActions, "Server", self.COLORS["Server"]),
                (PyncraftActions, "Pyncraft", "#252E28"),
                (PlayerActions, "Player", self.COLORS["Player"]),
                (TurtleShapes, "Turtle", self.COLORS["Turtle"]),
                (LSystemShapes, "LSystem", self.COLORS["LSystem"]),
                (DigitalGeometryActions, "Digital Geometry", self.COLORS["Geometry"]),
                (QTurtleActions, "Q-Turtle", self.COLORS["Turtle"]),
                (EventActions, "Event", self.COLORS["Events"]),
                (DigitalSetActions, "Digital Set", self.COLORS["Digital Set"]),
                (GeneratedPlayerActions, "J-Player", self.COLORS["J-Player"]),
                (GeneratedChatActions, "J-Chat", self.COLORS["J-Chat"]),
                (GeneratedWorldActions, "J-World", self.COLORS["J-World"]),
            ])

    def _normalize_name(self, name: str) -> str:
        return name.replace('_', ' ').title()


    def build_all(self):
        """Executes the complete build pipeline."""
        self.build_blocks()
        self.build_items()
        self.build_entities()
        self.build_actions()
        self.build_pickers_category()

    def _generate_base_pickers(self) -> dict[str, str]:
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
            # Fix: removed undefined ignore_cancelled
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
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP, color, name)
            b_js, p_py, c_xml = gen.generate()
            js_out = pick_js + [b_js] if i == 0 else [b_js]
            py_out = pick_py + [p_py] if i == 0 else [p_py]
            self._write_output(cls.__name__, cls.__name__, js_out, py_out)
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

class ApiGenerator:
    def __init__(self, schema_path, java_out, java_listener_out, python_out, python_actions_out=None):
        try:
            with open(schema_path, 'r') as f:
                self.schema = yaml.safe_load(f)
        except Exception as e:
            print(f"Error loading YAML schema: {e}")
            self.schema = {}
        self.output_path = Path(java_out)
        self.listener_output_path = Path(java_listener_out)
        self.python_out = Path(python_out)
        self.python_actions_out = Path(python_actions_out) if python_actions_out else None

    def run(self):
        self.generate_java_registry()
        self.generate_java_listener()
        self.generate_python_client()
        if self.python_actions_out:
            self.generate_action_classes()

    def generate_java_registry(self):
        code = [
            "package org.mcshell.mcjuice;",
            "",
            "import org.bukkit.Bukkit;",
            "import org.bukkit.World;",
            "import org.bukkit.entity.Player;",
            "import org.bukkit.Location;",
            "import org.bukkit.util.Vector;",
            "import org.bukkit.Material;",
            "import java.util.HashMap;",
            "import java.util.Map;",
            "",
            "public class GeneratedCommandRegistry {",
            "    private final Map<String, CommandExecutor> registry = new HashMap<>();",
            "",
            "    public GeneratedCommandRegistry() {",
            "        // Root level helper",
            "        registry.put(\"ping\", (args, session) -> session.send(\"pong\"));",
            "        // FIX: Event Polling now targets the SESSION-specific queue",
            "        registry.put(\"events.poll\", (args, session) -> session.send(session.pollEvents(args[0])));",
            "        registry.put(\"events.clear\", (args, session) -> { session.clearEvents(); session.send(\"OK\"); });",
            ""
        ]

        namespaces = self.schema.get('namespaces', {})
        for ns_name, ns_data in namespaces.items():
            target_type = ns_data.get('target', 'Player')
            for cmd in ns_data.get('commands', []):
                cmd_full_name = f"{ns_name}.{cmd['name']}"
                code.append(self._build_java_lambda(cmd_full_name, cmd, target_type))

        code.extend([
            "    }",
            "",
            "    public CommandExecutor getExecutor(String name) { return registry.get(name); }",
            "}"
        ])

        self.output_path.parent.mkdir(parents=True, exist_ok=True)
        with open(self.output_path, "w") as f:
            f.write("\n".join(code))

    def generate_java_listener(self):
        code = [
            "package org.mcshell.mcjuice;",
            "import org.bukkit.event.Listener;",
            "import org.bukkit.event.EventHandler;",
            "import org.bukkit.event.EventPriority;",
            "",
            "public class GeneratedEventListener implements Listener {"
        ]

        for event in self.schema.get('events', []):
            code.append(f"\n    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)")
            code.append(f"    public void on{event['name'].capitalize()}({event['bukkit_event']} event) {{")
            if 'condition' in event:
                code.append(f"        if (!({event['condition']})) return;")
            code.append(f"        String data = {event['data']};")
            code.append(f"        McJuicePlugin.getInstance().recordEvent(\"{event['name']}\", data);")
            code.append("    }")

        code.append("}")
        self.listener_output_path.parent.mkdir(parents=True, exist_ok=True)
        self.listener_output_path.write_text("\n".join(code))

    def _build_java_lambda(self, name, cmd, target_type):
        lines = [f'        registry.put("{name}", (args, session) -> {{']

        offset = 1 if target_type == "Player" else 0
        bukkit_call = cmd["bukkit"]

        if isinstance(bukkit_call, dict):
            bukkit_call = "{" + list(bukkit_call.keys())[0] + "}"

        yaml_args = cmd.get("args", [])
        for i, arg in enumerate(yaml_args):
            t, n, idx = arg["type"], arg["name"], i + offset
            arg_var = f"_arg_{n}"
            if t == "double": lines.append(f'            final double {arg_var} = Double.parseDouble(args[{idx}]);')
            elif t == "int": lines.append(f'            final int {arg_var} = Integer.parseInt(args[{idx}]);')
            elif t == "String": lines.append(f'            final String {arg_var} = args[{idx}];')
            bukkit_call = bukkit_call.replace(f"{{{n}}}", arg_var)

        lines.append('            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {')

        if target_type == "Player":
            lines.append('                int eid = Integer.parseInt(args[0]);')
            lines.append('                Player player = session.getPlayerById(eid);')
            lines.append('                if (player == null) { session.send("Fail,No Player"); return; }')
            exec_on = "player"
        elif target_type == "World":
            lines.append('                World world = Bukkit.getWorlds().get(0);')
            exec_on = "world"
        else:
            exec_on = "Bukkit"

        stripped_call = bukkit_call.strip()
        is_block = stripped_call.startswith("{")
        is_static = re.match(r'^(Bukkit|McJuicePlugin|org\.bukkit|[A-Z])', stripped_call)

        full_expr = bukkit_call if (is_block or is_static) else f"{exec_on}.{bukkit_call}"
        ret_type = cmd.get('returns', 'void')

        if is_block:
            lines.append(f'                {full_expr}')
        else:
            if ret_type == 'void':
                lines.append(f'                {full_expr};')
            else:
                lines.append(f'                Object res = {full_expr};')
                lines.append('                if (res == null) { session.send("null"); }')
                if ret_type == 'TileLocation':
                    lines.append('                else if (res instanceof Location) { Location l = (Location)res; session.send(l.getBlockX()+","+l.getBlockY()+","+l.getBlockZ()); }')
                else:
                    lines.append('                else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }')
                    lines.append('                else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }')
                    lines.append('                else { session.send(String.valueOf(res)); }')

        if ret_type == 'void':
            lines.append('                // No response for void to enable async speed');

        lines.append('            });'); lines.append('        });')
        return "\n".join(lines)

    def generate_python_client(self):
        code = [
            "from mcshell.mcjuiceconn import MCJuiceConnection",
            "from mcshell.Vec3 import Vec3",
            "",
            "class MCJuiceClient:",
            "    def __init__(self, conn, entity_id=None):",
            "        self.conn = conn",
            "        self.entity_id = entity_id"
        ]
        namespaces = self.schema.get('namespaces', {})
        if 'events' in namespaces: namespaces.pop('events', None)

        for ns in namespaces.keys():
            code.append(f"        self.{ns} = {ns.capitalize()}Namespace(conn, entity_id)")
        if 'events' in self.schema: code.append("        self.events = EventsNamespace(conn)")

        code.append("\n    @staticmethod\n    def create(address='localhost', port=4721, playerName=''):")
        code.append("        conn = MCJuiceConnection(address, port); eid = None")
        code.append("        if playerName: eid = int(conn.sendReceive('world.getPlayerId', playerName))")
        code.append("        return MCJuiceClient(conn, eid)")

        for ns, data in namespaces.items():
            target = data.get('target', 'Player')
            code.append(f"\nclass {ns.capitalize()}Namespace:")
            code.append("    def __init__(self, conn, entity_id): self.conn = conn; self.entity_id = entity_id")
            for cmd in data.get('commands', []):
                args = [a["name"] for a in cmd.get("args", [])]
                sig = ", ".join(["self"] + args + (["entity_id=None"] if target == "Player" else []))
                code.append(f"\n    def {cmd['name']}({sig}):")
                payload_parts = []
                if target == "Player":
                    code.append("        eid = entity_id if entity_id is not None else self.entity_id")
                    code.append("        if eid is None: raise ValueError('No entity_id')")
                    payload_parts.append("eid")
                payload_parts.extend(args)
                payload = ", ".join(payload_parts)
                r = cmd.get('returns', 'void')
                if r == 'void':
                    code.append(f"        self.conn.send('{ns}.{cmd['name']}', {payload})")
                    code.append("        return 'OK'")
                else:
                    code.append(f"        res = self.conn.sendReceive('{ns}.{cmd['name']}', {payload})")
                    if r in ('Location', 'Vector'): code.append("        return Vec3(*list(map(float, res.split(','))))")
                    elif r == 'TileLocation': code.append("        return Vec3(*list(map(int, res.split(','))))")
                    elif r == 'string_list': code.append("        return res.split(',')")
                    elif r == 'double': code.append("        return float(res)")
                    elif r == 'int': code.append("        return int(res)")
                    else: code.append("        return res")

        if 'events' in self.schema:
            code.append("\nclass EventsNamespace:")
            code.append("    def __init__(self, conn): self.conn = conn")
            code.append("\n    def poll(self, event_name: str):")
            code.append("        res = self.conn.sendReceive('events.poll', event_name)")
            code.append("        if res == 'OK' or not res: return []")
            code.append("        from mcshell.event import EventFactory")
            code.append("        events = [e for e in res.split('|') if e and ',' in e]")
            code.append("        return [EventFactory.create(event_name, e) for e in events]")
            code.append("\n    def clearAll(self): self.conn.sendReceive('events.clear')")
            for event in self.schema.get('events', []):
                e_name = event['name']
                method_name = f"poll{e_name[0].upper()}{e_name[1:]}s"
                code.append(f"\n    def {method_name}(self): return self.poll('{e_name}')")

        self.python_out.write_text("\n".join(code))

    def _camel_to_snake(self, name):
        s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
        return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

    def generate_action_classes(self):
        """Generates the blockly-compatible Python action classes using UI metadata."""
        code = [
            "from mcshell.mcactions_base import MCActionsBase",
            "from blockapily import mced_block",
            "from mcshell.Vec3 import Vec3",
            "from typing import Optional, Any",
            "",
            "# --- THIS FILE IS AUTOMATICALLY GENERATED FROM mcjuice_api.yaml ---",
            "# --- Do not edit directly! Inherit from these classes instead. ---",
            ""
        ]

        namespaces = self.schema.get('namespaces', {})
        for ns_name, ns_data in namespaces.items():
            # Only generate a class if at least one command has blockly metadata
            has_blockly = any('blockly' in cmd for cmd in ns_data.get('commands', []))
            if not has_blockly:
                continue

            class_name = f"Generated{ns_name.capitalize()}Actions"
            code.append(f"\nclass {class_name}(MCActionsBase):")
            code.append(f"    def __init__(self, mc_player_instance, delay_between_blocks=0):")
            code.append(f"        super().__init__(mc_player_instance, delay_between_blocks)")

            for cmd in ns_data.get('commands', []):
                blockly = cmd.get('blockly')
                if not blockly:
                    continue

                # 1. Generate the @mced_block Decorator
                code.append("\n    @mced_block(")

                decorator_args = [f"        label=\"{blockly.get('label', cmd['name'])}\""]

                b_args = blockly.get('args', {})
                for arg_name, arg_data in b_args.items():
                    # Format: {'label': '...', 'shadow': '...'}
                    arg_dict_str = f"{{'label': '{arg_data.get('label', arg_name)}'"
                    if 'shadow' in arg_data:
                        arg_dict_str += f", 'shadow': '{arg_data['shadow']}'"
                    arg_dict_str += "}"
                    decorator_args.append(f"        {arg_name}={arg_dict_str}")

                code.append(",\n".join(decorator_args))
                code.append("    )")

                # 2. Generate the Method Signature
                sig_parts = ["self"]
                for arg_name, arg_data in b_args.items():
                    sig_parts.append(f"{arg_name}: '{arg_data.get('type', 'Any')}'")

                sig_str = ", ".join(sig_parts)

                # Determine return type (Fallback to Bukkit returns)
                ret_type = blockly.get('returns')
                if not ret_type:
                    bukkit_r = cmd.get('returns', 'void')
                    if bukkit_r in ('Location', 'Vector', 'TileLocation'):
                        ret_type = 'Vec3'
                    elif bukkit_r == 'double':
                        ret_type = 'float'
                    elif bukkit_r == 'int':
                        ret_type = 'int'
                    elif bukkit_r == 'string_list':
                        ret_type = 'list'
                    elif bukkit_r == 'string':
                        ret_type = 'str'
                    elif bukkit_r != 'void':
                        ret_type = bukkit_r

                ret_str = f" -> '{ret_type}'" if ret_type else ""

                method_name = self._camel_to_snake(cmd['name'])
                code.append(f"    def {method_name}({sig_str}){ret_str}:")

                # 3. Generate the Docstring
                tooltip = blockly.get('tooltip', '')
                if tooltip:
                    code.append(f"        \"\"\"{tooltip}\"\"\"")

                # 4. Generate the API Execution Body
                call_args = blockly.get('call_args', [])
                call_args_str = ", ".join(call_args)

                # Fix: The mj client now handles .send() internally for void types
                call_stmt = f"self.mcplayer.mj.{ns_name}.{cmd['name']}({call_args_str})"
                if ret_type:
                    code.append(f"        return {call_stmt}")
                else:
                    code.append(f"        {call_stmt}")

        self.python_actions_out.parent.mkdir(parents=True, exist_ok=True)
        self.python_actions_out.write_text("\n".join(code))