import { MCED } from "../lib/constants.mjs";

export function defineServerActionsBlocks(Blockly) {
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
        this.appendValueInput("DIFFICULTY_OPTION").setCheck("String").setAlign("RIGHT").appendField("Difficulty");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Difficulty to [difficulty]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIFFICULTY_OPTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_gamemode'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Gamemode [mode] for [target]");
        this.appendValueInput("MODE").setCheck("String").setAlign("RIGHT").appendField("Mode");
        this.appendValueInput("TARGET").setCheck("String").setAlign("RIGHT").appendField("Target Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Gamemode [mode] for [target]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('MODE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('TARGET').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_gamerule'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Game Rule [rule] to [value]");
        this.appendValueInput("RULE").setCheck("String").setAlign("RIGHT").appendField("Rule");
        this.appendValueInput("VALUE").setCheck("Boolean").setAlign("RIGHT").appendField("Enabled");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Game Rule [rule] to [value]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('RULE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('VALUE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_time'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Time to [time]");
        this.appendValueInput("TIME_OPTION").setCheck("String").setAlign("RIGHT").appendField("Time");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Time to [time]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('TIME_OPTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['server_actions_server_set_weather'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Weather to [weather]");
        this.appendValueInput("WEATHER_OPTION").setCheck("String").setAlign("RIGHT").appendField("Weather");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Weather to [weather]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('WEATHER_OPTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
}