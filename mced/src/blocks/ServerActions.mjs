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
                ["Do Daylight Cycle", "doDaylightCycle"],
                ["Do Weather Cycle", "doWeatherCycle"],
                ["Do Mob Spawning", "doMobSpawning"],
                ["Do Mob Loot", "doMobLoot"],
                ["Do Tile Drops", "doTileDrops"],
                ["Keep Inventory", "keepInventory"],
                ["Mob Griefing", "mobGriefing"],
                ["Natural Regeneration", "naturalRegeneration"],
                ["Do Fire Tick", "doFireTick"],
                ["Command Block Output", "commandBlockOutput"],
                ["Show Death Messages", "showDeathMessages"],
                ["Log Admin Commands", "logAdminCommands"],
                ["Do Insomnia (Phantoms)", "doInsomnia"],
                ["Drowning Damage", "drowningDamage"],
                ["Fall Damage", "fallDamage"],
                ["Fire Damage", "fireDamage"]
                ]), "VALUE");
            this.setOutput(true, "GameRule");
            this.setColour(230);
            this.setTooltip("Select a Gamerule.");
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
        this.appendDummyInput().appendField("Locate Structure [structure]");
        this.appendValueInput("STRUCTURE").setCheck("String").setAlign("RIGHT").appendField("Structure Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Locate Structure [structure]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('STRUCTURE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
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