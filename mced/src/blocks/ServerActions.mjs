import { MCED } from "../lib/constants.mjs";

export function defineServerActionsBlocks(Blockly) {

    Blockly.Blocks['picker_time'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Time")
                .appendField(new Blockly.FieldDropdown([
                ["Day (1000)", "day"],
                ["Noon (6000)", "noon"],
                ["Sunset (12000)", "sunset"],
                ["Night (13000)", "night"],
                ["Midnight (18000)", "midnight"],
                ["Sunrise (23000)", "sunrise"]
                ]), "VALUE");
            this.setOutput(true, "Time");
            this.setColour(230);
            this.setTooltip("Select a Time.");
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
            this.setColour(230);
            this.setTooltip("Select a Weather.");
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
            this.setColour(230);
            this.setTooltip("Select a Difficulty.");
        }
    };


    Blockly.Blocks['picker_gamemode'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Gamemode")
                .appendField(new Blockly.FieldDropdown([
                ["Survival", "survival"],
                ["Creative", "creative"],
                ["Adventure", "adventure"],
                ["Spectator", "spectator"]
                ]), "VALUE");
            this.setOutput(true, "Gamemode");
            this.setColour(230);
            this.setTooltip("Select a Gamemode.");
        }
    };


    Blockly.Blocks['picker_gamerule'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Gamerule")
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
            this.setColour(230);
            this.setTooltip("Select a Gamerule.");
        }
    };


    Blockly.Blocks['picker_integergamerule'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Integergamerule")
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
            this.setColour(230);
            this.setTooltip("Select a Integergamerule.");
        }
    };


    Blockly.Blocks['picker_locatetype'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Locatetype")
                .appendField(new Blockly.FieldDropdown([
                ["Structure", "structure"],
                ["Biome", "biome"],
                ["Point of Interest (POI)", "poi"]
                ]), "VALUE");
            this.setOutput(true, "LocateType");
            this.setColour(230);
            this.setTooltip("Select a Locatetype.");
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
            this.setColour(230);
            this.setTooltip("Select a Structure.");
        }
    };


    Blockly.Blocks['picker_biome'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Biome")
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
            this.setColour(230);
            this.setTooltip("Select a Biome.");
        }
    };


    Blockly.Blocks['picker_poi'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Poi")
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
            this.setColour(230);
            this.setTooltip("Select a Poi.");
        }
    };



Blockly.Blocks['server_actions_server_clear_inventory'] = {
    init: function() {
        this.appendDummyInput().appendField("Clear Inventory of [target]");
        this.appendValueInput("TARGET").setCheck("String").setAlign("RIGHT").appendField("Target Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Clear Inventory of [target]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('TARGET').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_execute_command'] = {
    init: function() {
        this.appendDummyInput().appendField("Execute Command");
        this.appendValueInput("COMMAND").setCheck("String").setAlign("RIGHT").appendField("Command");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Execute Command' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('COMMAND').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_locate'] = {
    init: function() {
        this.appendDummyInput().appendField("Locate [type] [target]");
        this.appendValueInput("LOCATE_TYPE").setCheck("LocateType").setAlign("RIGHT").appendField("Type");
        this.appendValueInput("TARGET").setCheck(null).setAlign("RIGHT").appendField("Structure/Biome/POI");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Locate [type] [target]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('LOCATE_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_locatetype"><field name="VALUE">structure</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_difficulty'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Difficulty to [difficulty]");
        this.appendValueInput("DIFFICULTY_OPTION").setCheck("Difficulty").setAlign("RIGHT").appendField("Difficulty");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Difficulty to [difficulty]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIFFICULTY_OPTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_difficulty"><field name="VALUE">normal</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_gamemode'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Gamemode [mode] for [target]");
        this.appendValueInput("MODE").setCheck("Gamemode").setAlign("RIGHT").appendField("Mode");
        this.appendValueInput("TARGET").setCheck("String").setAlign("RIGHT").appendField("Target Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Gamemode [mode] for [target]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('MODE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_gamemode"><field name="VALUE">creative</field></shadow>`));
        this.getInput('TARGET').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_gamerule'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Game Rule [rule] to [value]");
        this.appendValueInput("RULE").setCheck("GameRule").setAlign("RIGHT").appendField("Rule");
        this.appendValueInput("VALUE").setCheck("Boolean").setAlign("RIGHT").appendField("Enabled");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Game Rule [rule] to [value]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('RULE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_gamerule"><field name="VALUE">doDaylightCycle</field></shadow>`));
        this.getInput('VALUE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_integer_gamerule'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Integer Game Rule [rule] to [value]");
        this.appendValueInput("RULE").setCheck(null).setAlign("RIGHT").appendField("Rule");
        this.appendValueInput("VALUE").setCheck("Number").setAlign("RIGHT").appendField("Value");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Integer Game Rule [rule] to [value]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('RULE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_integergamerule"><field name="VALUE">respawn_radius</field></shadow>`));
        this.getInput('VALUE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_time'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Time to [time]");
        this.appendValueInput("TIME_OPTION").setCheck("Time").setAlign("RIGHT").appendField("Time");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Time to [time]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('TIME_OPTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_time"><field name="VALUE">day</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_weather'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Weather to [weather]");
        this.appendValueInput("WEATHER_OPTION").setCheck("Weather").setAlign("RIGHT").appendField("Weather");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Weather to [weather]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('WEATHER_OPTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_weather"><field name="VALUE">clear</field></shadow>`));
    }
};
}