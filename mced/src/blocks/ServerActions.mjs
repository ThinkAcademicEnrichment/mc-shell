import { MCED } from "../lib/constants.mjs";

export function defineServerActionsBlocks(Blockly) {

    Blockly.Blocks['picker_timetype'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Time Type")
                .appendField(new Blockly.FieldDropdown([
                ["Day Time", "daytime"],
                ["Game Time", "gametime"],
                ["Day", "day"]
                ]), "VALUE");
            this.setOutput(true, "TimeType");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_time'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Time")
                .appendField(new Blockly.FieldDropdown([
                ["Day (1000)", "day"],
                ["Noon (6000)", "noon"],
                ["Night (13000)", "night"],
                ["Midnight (18000)", "midnight"]
                ]), "VALUE");
            this.setOutput(true, "Time");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_weather'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Weather")
                .appendField(new Blockly.FieldDropdown([
                ["Clear", "clear"],
                ["Rain", "rain"],
                ["Thunder", "thunder"]
                ]), "VALUE");
            this.setOutput(true, "Weather");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_difficulty'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Difficulty")
                .appendField(new Blockly.FieldDropdown([
                ["Peaceful", "peaceful"],
                ["Easy", "easy"],
                ["Normal", "normal"],
                ["Hard", "hard"]
                ]), "VALUE");
            this.setOutput(true, "Difficulty");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_gamemode'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Game Mode")
                .appendField(new Blockly.FieldDropdown([
                ["Survival", "survival"],
                ["Creative", "creative"],
                ["Adventure", "adventure"],
                ["Spectator", "spectator"]
                ]), "VALUE");
            this.setOutput(true, "GameMode");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_gamerule'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Game Rule")
                .appendField(new Blockly.FieldDropdown([
                ["Advance Time", "advance_time"],
                ["Advance Weather", "advance_weather"],
                ["Allow Entering Nether", "allow_entering_nether_using_portals"],
                ["Block Drops", "block_drops"],
                ["Block Explosion Drop Decay", "block_explosion_drop_decay"],
                ["Command Block Output", "command_block_output"],
                ["Command Blocks Work", "command_blocks_work"],
                ["Disable Elytra Movement Check", "elytra_movement_check"],
                ["Disable Raids", "raids"],
                ["Do Entity Drops", "entity_drops"],
                ["Drowning Damage", "drowning_damage"],
                ["Ender Pearls Vanish On Death", "ender_pearls_vanish_on_death"],
                ["Fall Damage", "fall_damage"],
                ["Fire Damage", "fire_damage"],
                ["Forgive Dead Players", "forgive_dead_players"],
                ["Freeze Damage", "freeze_damage"],
                ["Global Sound Events", "global_sound_events"],
                ["Immediate Respawn", "immediate_respawn"],
                ["Keep Inventory", "keep_inventory"],
                ["Lava Source Conversion", "lava_source_conversion"],
                ["Limit Crafting", "limited_crafting"],
                ["Locator Bar", "locator_bar"],
                ["Log Admin Commands", "log_admin_commands"],
                ["Mob Drops", "mob_drops"],
                ["Mob Explosion Drop Decay", "mob_explosion_drop_decay"],
                ["Mob Griefing", "mob_griefing"],
                ["Natural Health Regeneration", "natural_health_regeneration"],
                ["Player Movement Check", "player_movement_check"],
                ["Projectiles Can Break Blocks", "projectiles_can_break_blocks"],
                ["PVP", "pvp"],
                ["Reduced Debug Info", "reduced_debug_info"],
                ["Send Command Feedback", "send_command_feedback"],
                ["Show Advancement Messages", "show_advancement_messages"],
                ["Show Death Messages", "show_death_messages"],
                ["Spawn Mobs", "spawn_mobs"],
                ["Spawn Monsters", "spawn_monsters"],
                ["Spawn Patrols", "spawn_patrols"],
                ["Spawn Phantoms", "spawn_phantoms"],
                ["Spawn Wandering Traders", "spawn_wandering_traders"],
                ["Spawn Wardens", "spawn_wardens"],
                ["Spawner Blocks Work", "spawner_blocks_work"],
                ["Spectators Generate Chunks", "spectators_generate_chunks"],
                ["Spread Vines", "spread_vines"],
                ["TNT Explodes", "tnt_explodes"],
                ["TNT Explosion Drop Decay", "tnt_explosion_drop_decay"],
                ["Universal Anger", "universal_anger"],
                ["Water Source Conversion", "water_source_conversion"]
                ]), "VALUE");
            this.setOutput(true, "GameRule");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_integergamerule'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Integer Game Rule")
                .appendField(new Blockly.FieldDropdown([
                ["Fire Spread Radius", "fire_spread_radius_around_player"],
                ["Max Block Modifications", "max_block_modifications"],
                ["Max Command Forks", "max_command_forks"],
                ["Max Command Sequence Length", "max_command_sequence_length"],
                ["Max Entity Cramming", "max_entity_cramming"],
                ["Max Snow Accumulation Height", "max_snow_accumulation_height"],
                ["Players Nether Portal Creative Delay", "players_nether_portal_creative_delay"],
                ["Players Nether Portal Default Delay", "players_nether_portal_default_delay"],
                ["Players Sleeping Percentage", "players_sleeping_percentage"],
                ["Random Tick Speed", "random_tick_speed"],
                ["Respawn Radius", "respawn_radius"]
                ]), "VALUE");
            this.setOutput(true, "IntegerGameRule");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_locatetype'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Locate Type")
                .appendField(new Blockly.FieldDropdown([
                ["Structure", "structure"],
                ["Biome", "biome"],
                ["Point of Interest (POI)", "poi"]
                ]), "VALUE");
            this.setOutput(true, "LocateType");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_structure'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Structure")
                .appendField(new Blockly.FieldDropdown([
                ["Ancient City", "ancient_city"],
                ["Bastion Remnant", "bastion_remnant"],
                ["Buried Treasure", "buried_treasure"],
                ["Desert Pyramid", "desert_pyramid"],
                ["End City", "end_city"],
                ["Fortress", "fortress"],
                ["Igloo", "igloo"],
                ["Jungle Pyramid", "jungle_pyramid"],
                ["Mansion", "mansion"],
                ["Mineshaft", "mineshaft"],
                ["Monument", "monument"],
                ["Nether Fossil", "nether_fossil"],
                ["Ocean Ruin", "ocean_ruin"],
                ["Pillager Outpost", "pillager_outpost"],
                ["Ruined Portal", "ruined_portal"],
                ["Shipwreck", "shipwreck"],
                ["Stronghold", "stronghold"],
                ["Swamp Hut", "swamp_hut"],
                ["Village", "village"],
                ["Woodland Mansion", "mansion"]
                ]), "VALUE");
            this.setOutput(true, "Structure");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_biome'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Structure")
                .appendField(new Blockly.FieldDropdown([
                ["Badlands", "badlands"],
                ["Bamboo Jungle", "bamboo_jungle"],
                ["Beach", "beach"],
                ["Birch Forest", "birch_forest"],
                ["Cherry Grove", "cherry_grove"],
                ["Dark Forest", "dark_forest"],
                ["Deep Dark", "deep_dark"],
                ["Desert", "desert"],
                ["Dripstone Caves", "dripstone_caves"],
                ["End Highlands", "end_highlands"],
                ["End Midlands", "end_midlands"],
                ["Forest", "forest"],
                ["Frozen Peaks", "frozen_peaks"],
                ["Grove", "grove"],
                ["Ice Spikes", "ice_spikes"],
                ["Jagged Peaks", "jagged_peaks"],
                ["Jungle", "jungle"],
                ["Lush Caves", "lush_caves"],
                ["Mangrove Swamp", "mangrove_swamp"],
                ["Meadow", "meadow"],
                ["Mushroom Fields", "mushroom_fields"],
                ["Nether Wastes", "nether_wastes"],
                ["Ocean", "ocean"],
                ["Plains", "plains"],
                ["River", "river"],
                ["Savanna", "savanna"],
                ["Snowy Beach", "snowy_beach"],
                ["Snowy Plains", "snowy_plains"],
                ["Snowy Taiga", "snowy_taiga"],
                ["Soul Sand Valley", "soul_sand_valley"],
                ["Stony Peaks", "stony_peaks"],
                ["Swamp", "swamp"],
                ["Taiga", "taiga"],
                ["The End", "the_end"],
                ["The Void", "the_void"],
                ["Warm Ocean", "warm_ocean"],
                ["Warped Forest", "warped_forest"]
                ]), "VALUE");
            this.setOutput(true, "Biome");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_poi'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Point of Interest")
                .appendField(new Blockly.FieldDropdown([
                ["Armorer", "armorer"],
                ["Butcher", "butcher"],
                ["Cartographer", "cartographer"],
                ["Cleric", "cleric"],
                ["Farmer", "farmer"],
                ["Fisherman", "fisherman"],
                ["Fletcher", "fletcher"],
                ["Leatherworker", "leatherworker"],
                ["Librarian", "librarian"],
                ["Mason", "mason"],
                ["Shepherd", "shepherd"],
                ["Toolsmith", "toolsmith"],
                ["Weaponsmith", "weaponsmith"],
                ["Beehive", "beehive"],
                ["Bee Nest", "bee_nest"],
                ["End Portal", "end_portal"],
                ["Home", "home"],
                ["Lightning Rod", "lightning_rod"],
                ["Lodestone", "lodestone"],
                ["Meeting", "meeting"],
                ["Nether Portal", "nether_portal"]
                ]), "VALUE");
            this.setOutput(true, "Poi");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_effect'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Effect")
                .appendField(new Blockly.FieldDropdown([
                ["Speed", "speed"],
                ["Slowness", "slowness"],
                ["Haste", "haste"],
                ["Strength", "strength"],
                ["Instant Health", "instant_health"],
                ["Instant Damage", "instant_damage"],
                ["Jump Boost", "jump_boost"],
                ["Regeneration", "regeneration"],
                ["Resistance", "resistance"],
                ["Fire Resistance", "fire_resistance"],
                ["Water Breathing", "water_breathing"],
                ["Invisibility", "invisibility"],
                ["Blindness", "blindness"],
                ["Night Vision", "night_vision"],
                ["Hunger", "hunger"],
                ["Weakness", "weakness"],
                ["Poison", "poison"],
                ["Wither", "wither"],
                ["Health Boost", "health_boost"],
                ["Absorption", "absorption"],
                ["Saturation", "saturation"],
                ["Glowing", "glowing"],
                ["Levitation", "levitation"],
                ["Luck", "luck"],
                ["Unluck", "unluck"],
                ["Slow Falling", "slow_falling"],
                ["Conduit Power", "conduit_power"],
                ["Dolphins Grace", "dolphins_grace"],
                ["Bad Omen", "bad_omen"],
                ["Hero of the Village", "hero_of_the_village"],
                ["Darkness", "darkness"]
                ]), "VALUE");
            this.setOutput(true, "Effect");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_titleaction'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Location")
                .appendField(new Blockly.FieldDropdown([
                ["Main Title", "title"],
                ["Subtitle", "subtitle"],
                ["Action Bar", "actionbar"],
                ["Clear", "clear"],
                ["Reset", "reset"]
                ]), "VALUE");
            this.setOutput(true, "TitleAction");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_metric'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Metric")
                .appendField(new Blockly.FieldDropdown([
                ["Euclidean", "euclidean"],
                ["Manhattan", "manhattan"],
                ["Chebyshev", "chebyshev"]
                ]), "VALUE");
            this.setOutput(true, "Metric");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_qheading'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Local Q-Heading")
                .appendField(new Blockly.FieldDropdown([
                ["Forward", "F"],
                ["Back", "B"],
                ["Right", "R"],
                ["Left", "L"],
                ["Up", "U"],
                ["Down", "D"],
                ["Forward-Right", "FR"],
                ["Forward-Left", "FL"],
                ["Back-Right", "BR"],
                ["Back-Left", "BL"],
                ["Forward-Up", "FU"],
                ["Forward-Down", "FD"],
                ["Back-Up", "BU"],
                ["Back-Down", "BD"],
                ["Right-Up", "RU"],
                ["Right-Down", "RD"],
                ["Left-Up", "LU"],
                ["Left-Down", "LD"],
                ["Forward-Right-Up", "FRU"],
                ["Forward-Right-Down", "FRD"],
                ["Forward-Left-Up", "FLU"],
                ["Forward-Left-Down", "FLD"],
                ["Back-Right-Up", "BRU"],
                ["Back-Right-Down", "BRD"],
                ["Back-Left-Up", "BLU"],
                ["Back-Left-Down", "BLD"]
                ]), "VALUE");
            this.setOutput(true, "QHeading");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_axis'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Axis")
                .appendField(new Blockly.FieldDropdown([
                ["Yaw (Y)", "y"],
                ["Pitch (X)", "x"],
                ["Roll (Z)", "z"]
                ]), "VALUE");
            this.setOutput(true, "Axis");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_qcompass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Global Q-Compass Direction")
                .appendField(new Blockly.FieldDropdown([
                ["North (-Z)", "N"],
                ["South (+Z)", "S"],
                ["East (+X)", "E"],
                ["West (-X)", "W"],
                ["Up (+Y)", "U"],
                ["Down (-Y)", "D"],
                ["North-East", "NE"],
                ["North-West", "NW"],
                ["South-East", "SE"],
                ["South-West", "SW"],
                ["North-Up", "NU"],
                ["North-Down", "ND"],
                ["South-Up", "SU"],
                ["South-Down", "SD"],
                ["East-Up", "EU"],
                ["East-Down", "ED"],
                ["West-Up", "WU"],
                ["West-Down", "WD"],
                ["North-East-Up", "NEU"],
                ["North-East-Down", "NED"],
                ["North-West-Up", "NWU"],
                ["North-West-Down", "NWD"],
                ["South-East-Up", "SEU"],
                ["South-East-Down", "SED"],
                ["South-West-Up", "SWU"],
                ["South-West-Down", "SWD"]
                ]), "VALUE");
            this.setOutput(true, "QCompass");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_data_path'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Data Path")
                .appendField(new Blockly.FieldDropdown([
                ["Brain", "Brain"],
                ["Hurt By Timestamp", "HurtByTimestamp"],
                ["Sleep Timer", "SleepTimer"],
                ["Attributes", "Attributes"],
                ["Invulnerable", "Invulnerable"],
                ["Fall Flying", "FallFlying"],
                ["Portal Cooldown", "PortalCooldown"],
                ["Absorption Amount", "AbsorptionAmount"],
                ["Abilities", "abilities"],
                ["Fall Distance", "FallDistance"],
                ["Recipe Book", "recipeBook"],
                ["Death Time", "DeathTime"],
                ["Xp Seed", "XpSeed"],
                ["Xp Total", "XpTotal"],
                ["UUID", "UUID"],
                ["Player Game Type", "playerGameType"],
                ["Seen Credits", "seenCredits"],
                ["Motion", "Motion"],
                ["Health", "Health"],
                ["Food Saturation Level", "foodSaturationLevel"],
                ["Air", "Air"],
                ["On Ground", "OnGround"],
                ["Dimension", "Dimension"],
                ["Rotation", "Rotation"],
                ["Xp Level", "XpLevel"],
                ["Score", "Score"],
                ["Pos", "Pos"],
                ["Previous Player Game Type", "previousPlayerGameType"],
                ["Fire", "Fire"],
                ["Xp P", "XpP"],
                ["Ender Items", "EnderItems"],
                ["Data Version", "DataVersion"],
                ["Food Level", "foodLevel"],
                ["Food Exhaustion Level", "foodExhaustionLevel"],
                ["Hurt Time", "HurtTime"],
                ["Selected Item Slot", "SelectedItemSlot"],
                ["Inventory", "Inventory"],
                ["Food Tick Timer", "foodTickTimer"]
                ]), "VALUE");
            this.setOutput(true, "DataPath");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['serveractions_server_apply_effect'] = {
        init: function() {
            this.appendDummyInput().appendField("Apply [effect] to [target] for [seconds]s (Level [amplifier])");
            this.appendValueInput('effect').appendField('Effect').setCheck('Effect');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
this.appendValueInput('seconds').appendField('Duration').setCheck('Number');
this.appendValueInput('amplifier').appendField('Level').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Applies a status effect to a target.");
        }
    };

    Blockly.Blocks['serveractions_server_clear_inventory'] = {
        init: function() {
            this.appendDummyInput().appendField("Clear Inventory of [target]");
            this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Clears items from a player's inventory.");
        }
    };

    Blockly.Blocks['serveractions_server_damage'] = {
        init: function() {
            this.appendDummyInput().appendField("Damage [target] by [amount]");
            this.appendValueInput('target').appendField('Target Player').setCheck('String');
this.appendValueInput('amount').appendField('Amount').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Deals damage to a target.");
        }
    };

    Blockly.Blocks['serveractions_server_execute_command'] = {
        init: function() {
            this.appendDummyInput().appendField("Execute Command");
            this.appendValueInput('command').appendField('Command').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Executes a custom command string.");
        }
    };

    Blockly.Blocks['serveractions_server_gamemode_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Gamemode to [gamemode] for [target]");
            this.appendValueInput('gamemode').appendField('Game Mode').setCheck('GameMode');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Changes a player's gamemode.");
        }
    };

    Blockly.Blocks['serveractions_server_gamerule_integer_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Gamerule [rule] to [value]");
            this.appendValueInput('rule').appendField('Game Rule').setCheck('IntegerGameRule');
this.appendValueInput('value').appendField('Value').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Modifies a server game rule.");
        }
    };

    Blockly.Blocks['serveractions_server_gamerule_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Gamerule [rule] to True/False");
            this.appendValueInput('rule').appendField('Game Rule').setCheck('GameRule');
this.appendValueInput('value').appendField('Value').setCheck('Boolean');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Modifies a server game rule.");
        }
    };

    Blockly.Blocks['serveractions_server_give_item'] = {
        init: function() {
            this.appendDummyInput().appendField("Give [count] [item] to [target]");
            this.appendValueInput('item').appendField('Item').setCheck('Item');
this.appendValueInput('count').appendField('Count').setCheck('Number');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Gives an item to a player.");
        }
    };

    Blockly.Blocks['serveractions_server_list'] = {
        init: function() {
            this.appendDummyInput().appendField("List Players on Server");
            
            this.setOutput(true, 'Array');
            this.setColour("#5C7457");
            this.setTooltip("List the players on the server. ");
        }
    };

    Blockly.Blocks['serveractions_server_locate_structure'] = {
        init: function() {
            this.appendDummyInput().appendField("Locate Structure [structure]");
            this.appendValueInput('structure').appendField('Structure').setCheck('Structure');
            this.setOutput(true, '3DVector');
            this.setColour("#5C7457");
            this.setTooltip("Locates a structure and returns its coordinates.");
        }
    };

    Blockly.Blocks['serveractions_server_player_data_get_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Get a Player's position");
            this.appendValueInput('player_name').appendField('Player Name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['serveractions_server_set_time'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Time to [time]");
            this.appendValueInput('time').appendField('Time').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the server time.");
        }
    };

    Blockly.Blocks['serveractions_server_show_title'] = {
        init: function() {
            this.appendDummyInput().appendField("Show Title [text] as [action] for [target]");
            this.appendValueInput('text').appendField('Message').setCheck('String');
this.appendValueInput('action').appendField('Title Action').setCheck('TitleAction');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Displays large text on the player's screen.");
        }
    };

    Blockly.Blocks['serveractions_server_spawnpoint'] = {
        init: function() {
            this.appendDummyInput().appendField("Set the spawnpoint for [target] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the spawn point for a player.");
        }
    };

    Blockly.Blocks['serveractions_server_summon'] = {
        init: function() {
            this.appendDummyInput().appendField("Summon [entity] at [pos]");
            this.appendValueInput('entity').appendField('Entity').setCheck('Entity');
this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Summons an entity at a specific location.");
        }
    };

    Blockly.Blocks['serveractions_server_teleport'] = {
        init: function() {
            this.appendDummyInput().appendField("Teleport [target] to [pos]");
            this.appendValueInput('target').appendField('Target Player').setCheck('String');
this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Teleports a player or entity to a location.");
        }
    };

    Blockly.Blocks['serveractions_server_time_query'] = {
        init: function() {
            this.appendDummyInput().appendField("Query the world time");
            this.appendValueInput('time_type').appendField('Time Type').setCheck('TimeType');
            this.setOutput(true, 'Number');
            this.setColour("#5C7457");
            this.setTooltip("Query the world time.");
        }
    };

    Blockly.Blocks['serveractions_server_time_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set the world time");
            this.appendValueInput('time_of_day').appendField('Time').setCheck('Time');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Set the world time.");
        }
    };

    Blockly.Blocks['serveractions_server_weather_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Weather to [weather]");
            this.appendValueInput('weather').appendField('Weather').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the server weather (clear, rain, thunder).");
        }
    };
}