# ========================================== #
#     MC-Shell UI & Design Tokens            #
# ========================================== #
# This file dictates the visual appearance, categories, and dropdown
# options for the Blockly frontend.

COLORS = {
    "Block": "#B06161", "Item": "#D4A373", "Entity": "#8D7EB5",
    "Picker": "#95A5A6", "Geometry": "#5B7BA1", "Turtle": "#C9A65B",
    "LSystem": "#7A9473", "Player": "#61A1B0", "Events": "#D68C45",
    "Server": "#5C7457", "Digital Set": "#A57582",
    "J-Player": "#61A1B0", "J-World": "#5C7457", "J-Chat": "#D68C45",
}

TYPE_MAP = {
    'str': 'String', 'int': 'Number', 'float': 'Number', 'bool': 'Boolean',
    'list': 'Array', 'tuple': 'List', 'Vec3': "3DVector", 'Matrix3': "3DMatrix",
    'Block': "Block", 'DigitalSet': "Digital_Set", 'Metric': 'Metric',
    'QDirection': 'QDirection', 'Axis': 'Axis', 'QCompass': 'QCompass',
    'Time': 'Time', 'TimeType':'TimeType', 'Weather': 'Weather',
    'Difficulty': 'Difficulty', 'Gamemode': 'Gamemode', 'GameRule': 'GameRule',
    'LocateType': 'LocateType', 'Structure': 'Structure', 'Biome': 'Biome',
    'Poi': 'Poi', 'Entity': 'Entity', 'Effect': "Effect", 'DataPath': 'DataPath'
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
    DataPath='<shadow type="picker_data_path"><field name="VALUE">Pos</field></shadow>',
)

DATA_PATHS = [
    ('Brain', 'Brain'), ('Hurt By Timestamp', 'HurtByTimestamp'), ('Sleep Timer', 'SleepTimer'),
    ('Attributes', 'Attributes'), ('Invulnerable', 'Invulnerable'), ('Fall Flying', 'FallFlying'),
    ('Portal Cooldown', 'PortalCooldown'), ('Absorption Amount', 'AbsorptionAmount'), ('Abilities', 'abilities'),
    ('Fall Distance', 'FallDistance'), ('Recipe Book', 'recipeBook'), ('Death Time', 'DeathTime'),
    ('Xp Seed', 'XpSeed'), ('Xp Total', 'XpTotal'), ('UUID', 'UUID'), ('Player Game Type', 'playerGameType'),
    ('Seen Credits', 'seenCredits'), ('Motion', 'Motion'), ('Health', 'Health'),
    ('Food Saturation Level', 'foodSaturationLevel'), ('Air', 'Air'), ('On Ground', 'OnGround'),
    ('Dimension', 'Dimension'), ('Rotation', 'Rotation'), ('Xp Level', 'XpLevel'), ('Score', 'Score'),
    ('Pos', 'Pos'), ('Previous Player Game Type', 'previousPlayerGameType'), ('Fire', 'Fire'),
    ('Xp P', 'XpP'), ('Ender Items', 'EnderItems'), ('Data Version', 'DataVersion'),
    ('Food Level', 'foodLevel'), ('Food Exhaustion Level', 'foodExhaustionLevel'), ('Hurt Time', 'HurtTime'),
    ('Selected Item Slot', 'SelectedItemSlot'), ('Inventory', 'Inventory'), ('Food Tick Timer', 'foodTickTimer')
]

TIMETYPES = [("Day Time", "daytime"), ("Game Time", "gametime"), ("Day", "day")]
WEATHERS = [("Clear", "clear"), ("Rain", "rain"), ("Thunder", "thunder")]
DIFFICULTYS = [("Peaceful", "peaceful"), ("Easy", "easy"), ("Normal", "normal"), ("Hard", "hard")]
GAMEMODES = [("Survival", "survival"), ("Creative", "creative"), ("Adventure", "adventure"), ("Spectator", "spectator")]
LOCATETYPES = [("Structure", "structure"), ("Biome", "biome"), ("Point of Interest (POI)", "poi")]
METRICS = [("Euclidean", "euclidean"), ("Manhattan", "manhattan"), ("Chebyshev", "chebyshev")]
AXES = [("Yaw (Y)", "y"), ("Pitch (X)", "x"), ("Roll (Z)", "z")]
COMPASS = [("North (-Z)", "N"), ("South (+Z)", "S"), ("East (+X)", "E"), ("West (-X)", "W"), ("North-East", "NE"), ("North-West", "NW"), ("South-East", "SE"), ("South-West", "SW")]
QHEADINGS = [("Forward", "F"), ("Back", "B"), ("Right", "R"), ("Left", "L"), ("Up", "U"), ("Down", "D"), ("Forward-Right", "FR"), ("Forward-Left", "FL"), ("Back-Right", "BR"), ("Back-Left", "BL"), ("Forward-Up", "FU"), ("Forward-Down", "FD"), ("Back-Up", "BU"), ("Back-Down", "BD"), ("Right-Up", "RU"), ("Right-Down", "RD"), ("Left-Up", "LU"), ("Left-Down", "LD"), ("Forward-Right-Up", "FRU"), ("Forward-Right-Down", "FRD"), ("Forward-Left-Up", "FLU"), ("Forward-Left-Down", "FLD"), ("Back-Right-Up", "BRU"), ("Back-Right-Down", "BRD"), ("Back-Left-Up", "BLU"), ("Back-Left-Down", "BLD")]
QCOMPASS = [("North (-Z)", "N"), ("South (+Z)", "S"), ("East (+X)", "E"), ("West (-X)", "W"), ("Up (+Y)", "U"), ("Down (-Y)", "D"), ("North-East", "NE"), ("North-West", "NW"), ("South-East", "SE"), ("South-West", "SW"), ("North-Up", "NU"), ("North-Down", "ND"), ("South-Up", "SU"), ("South-Down", "SD"), ("East-Up", "EU"), ("East-Down", "ED"), ("West-Up", "WU"), ("West-Down", "WD"), ("North-East-Up", "NEU"), ("North-East-Down", "NED"), ("North-West-Up", "NWU"), ("North-West-Down", "NWD"), ("South-East-Up", "SEU"), ("South-East-Down", "SED"), ("South-West-Up", "SWU"), ("South-West-Down", "SWD")]
TIMES = [("Day (1000)", "day"), ("Noon (6000)", "noon"), ("Night (13000)", "night"), ("Midnight (18000)", "midnight")]

STRUCTURES = [("Ancient City", "ancient_city"), ("Bastion Remnant", "bastion_remnant"), ("Buried Treasure", "buried_treasure"), ("Desert Pyramid", "desert_pyramid"), ("End City", "end_city"), ("Fortress", "fortress"), ("Igloo", "igloo"), ("Jungle Pyramid", "jungle_pyramid"), ("Mansion", "mansion"), ("Mineshaft", "mineshaft"), ("Monument", "monument"), ("Nether Fossil", "nether_fossil"), ("Ocean Ruin", "ocean_ruin"), ("Pillager Outpost", "pillager_outpost"), ("Ruined Portal", "ruined_portal"), ("Shipwreck", "shipwreck"), ("Stronghold", "stronghold"), ("Swamp Hut", "swamp_hut"), ("Village", "village"), ("Woodland Mansion", "mansion")]
BIOMES = [("Badlands", "badlands"), ("Bamboo Jungle", "bamboo_jungle"), ("Beach", "beach"), ("Birch Forest", "birch_forest"), ("Cherry Grove", "cherry_grove"), ("Dark Forest", "dark_forest"), ("Deep Dark", "deep_dark"), ("Desert", "desert"), ("Dripstone Caves", "dripstone_caves"), ("End Highlands", "end_highlands"), ("End Midlands", "end_midlands"), ("Forest", "forest"), ("Frozen Peaks", "frozen_peaks"), ("Grove", "grove"), ("Ice Spikes", "ice_spikes"), ("Jagged Peaks", "jagged_peaks"), ("Jungle", "jungle"), ("Lush Caves", "lush_caves"), ("Mangrove Swamp", "mangrove_swamp"), ("Meadow", "meadow"), ("Mushroom Fields", "mushroom_fields"), ("Nether Wastes", "nether_wastes"), ("Ocean", "ocean"), ("Plains", "plains"), ("River", "river"), ("Savanna", "savanna"), ("Snowy Beach", "snowy_beach"), ("Snowy Plains", "snowy_plains"), ("Snowy Taiga", "snowy_taiga"), ("Soul Sand Valley", "soul_sand_valley"), ("Stony Peaks", "stony_peaks"), ("Swamp", "swamp"), ("Taiga", "taiga"), ("The End", "the_end"), ("The Void", "the_void"), ("Warm Ocean", "warm_ocean"), ("Warped Forest", "warped_forest")]
POIS = [("Armorer", "armorer"), ("Butcher", "butcher"), ("Cartographer", "cartographer"), ("Cleric", "cleric"), ("Farmer", "farmer"), ("Fisherman", "fisherman"), ("Fletcher", "fletcher"), ("Leatherworker", "leatherworker"), ("Librarian", "librarian"), ("Mason", "mason"), ("Shepherd", "shepherd"), ("Toolsmith", "toolsmith"), ("Weaponsmith", "weaponsmith"), ("Beehive", "beehive"), ("Bee Nest", "bee_nest"), ("End Portal", "end_portal"), ("Home", "home"), ("Lightning Rod", "lightning_rod"), ("Lodestone", "lodestone"), ("Meeting", "meeting"), ("Nether Portal", "nether_portal")]
GAMERULES = [("Advance Time", "advance_time"), ("Advance Weather", "advance_weather"), ("Allow Entering Nether", "allow_entering_nether_using_portals"), ("Block Drops", "block_drops"), ("Block Explosion Drop Decay", "block_explosion_drop_decay"), ("Command Block Output", "command_block_output"), ("Command Blocks Work", "command_blocks_work"), ("Disable Elytra Movement Check", "elytra_movement_check"), ("Disable Raids", "raids"), ("Do Entity Drops", "entity_drops"), ("Drowning Damage", "drowning_damage"), ("Ender Pearls Vanish On Death", "ender_pearls_vanish_on_death"), ("Fall Damage", "fall_damage"), ("Fire Damage", "fire_damage"), ("Forgive Dead Players", "forgive_dead_players"), ("Freeze Damage", "freeze_damage"), ("Global Sound Events", "global_sound_events"), ("Immediate Respawn", "immediate_respawn"), ("Keep Inventory", "keep_inventory"), ("Lava Source Conversion", "lava_source_conversion"), ("Limit Crafting", "limited_crafting"), ("Locator Bar", "locator_bar"), ("Log Admin Commands", "log_admin_commands"), ("Mob Drops", "mob_drops"), ("Mob Explosion Drop Decay", "mob_explosion_drop_decay"), ("Mob Griefing", "mob_griefing"), ("Natural Health Regeneration", "natural_health_regeneration"), ("Player Movement Check", "player_movement_check"), ("Projectiles Can Break Blocks", "projectiles_can_break_blocks"), ("PVP", "pvp"), ("Reduced Debug Info", "reduced_debug_info"), ("Send Command Feedback", "send_command_feedback"), ("Show Advancement Messages", "show_advancement_messages"), ("Show Death Messages", "show_death_messages"), ("Spawn Mobs", "spawn_mobs"), ("Spawn Monsters", "spawn_monsters"), ("Spawn Patrols", "spawn_patrols"), ("Spawn Phantoms", "spawn_phantoms"), ("Spawn Wandering Traders", "spawn_wandering_traders"), ("Spawn Wardens", "spawn_wardens"), ("Spawner Blocks Work", "spawner_blocks_work"), ("Spectators Generate Chunks", "spectators_generate_chunks"), ("Spread Vines", "spread_vines"), ("TNT Explodes", "tnt_explodes"), ("TNT Explosion Drop Decay", "tnt_explosion_drop_decay"), ("Universal Anger", "universal_anger"), ("Water Source Conversion", "water_source_conversion")]
INTEGERGAMERULES = [("Fire Spread Radius", "fire_spread_radius_around_player"), ("Max Block Modifications", "max_block_modifications"), ("Max Command Forks", "max_command_forks"), ("Max Command Sequence Length", "max_command_sequence_length"), ("Max Entity Cramming", "max_entity_cramming"), ("Max Snow Accumulation Height", "max_snow_accumulation_height"), ("Players Nether Portal Creative Delay", "players_nether_portal_creative_delay"), ("Players Nether Portal Default Delay", "players_nether_portal_default_delay"), ("Players Sleeping Percentage", "players_sleeping_percentage"), ("Random Tick Speed", "random_tick_speed"), ("Respawn Radius", "respawn_radius")]
EFFECTS = [("Speed", "speed"), ("Slowness", "slowness"), ("Haste", "haste"), ("Strength", "strength"), ("Instant Health", "instant_health"), ("Instant Damage", "instant_damage"), ("Jump Boost", "jump_boost"), ("Regeneration", "regeneration"), ("Resistance", "resistance"), ("Fire Resistance", "fire_resistance"), ("Water Breathing", "water_breathing"), ("Invisibility", "invisibility"), ("Blindness", "blindness"), ("Night Vision", "night_vision"), ("Hunger", "hunger"), ("Weakness", "weakness"), ("Poison", "poison"), ("Wither", "wither"), ("Health Boost", "health_boost"), ("Absorption", "absorption"), ("Saturation", "saturation"), ("Glowing", "glowing"), ("Levitation", "levitation"), ("Luck", "luck"), ("Unluck", "unluck"), ("Slow Falling", "slow_falling"), ("Conduit Power", "conduit_power"), ("Dolphins Grace", "dolphins_grace"), ("Bad Omen", "bad_omen"), ("Hero of the Village", "hero_of_the_village"), ("Darkness", "darkness")]
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
    {'id': 'picker_data_path', 'label': 'Data Path', 'options': DATA_PATHS, 'input_type': 'DataPath'},
]

WOOD_TYPES = ["OAK", "SPRUCE", "BIRCH", "JUNGLE", "ACACIA", "DARK_OAK", "MANGROVE", "CHERRY", "PALE_OAK", "BAMBOO", "CRIMSON", "WARPED"]
COLORS_LIST = ["WHITE", "ORANGE", "MAGENTA", "LIGHT_BLUE", "YELLOW", "LIME", "PINK", "GRAY", "LIGHT_GRAY", "CYAN", "PURPLE", "BLUE", "BROWN", "GREEN", "RED", "BLACK"]

VARIANT_MAP = {
    'WOOD': {'id': 'picker_wood_types', 'label': 'Wood Type', 'options': [(w.replace('_', ' ').title(), w) for w in WOOD_TYPES], 'input_type': 'MinecraftWood', 'shadow': 'picker_wood_types'},
    'COLOR': {'id': 'picker_colours', 'label': 'Color', 'options': [(c.replace('_', ' ').title(), c) for c in COLORS_LIST], 'input_type': 'MinecraftColour', 'shadow': 'picker_colours'}
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