import { MCED } from "../lib/constants.mjs";

export function defineQActionsBlocks(Blockly) {

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

    Blockly.Blocks['qactions_set_q_compass_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Player Q-Compass Direction");
            this.appendValueInput('direction').appendField('Q-Compass Direction').setCheck('QCompass');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#C9A65B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qactions_get_q_compass_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Player Q-Compass Direction");
            
            this.setOutput(true, 'QCompass');
            this.setColour("#C9A65B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qactions_get_q_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Player Q-Direction");
            
            this.setOutput(true, '3DVector');
            this.setColour("#C9A65B");
            this.setTooltip("Returns the quantized direction the player is looking as a unit vector.");
        }
    };

    Blockly.Blocks['qactions_get_height_at'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Height");
            this.appendValueInput('position').appendField('At Position [(X,Y,Z)]').setCheck('3DVector');
            this.setOutput(true, 'Number');
            this.setColour("#C9A65B");
            this.setTooltip("Gets the Y coordinate of the highest block at the X,Z of the given position.");
        }
    };
}