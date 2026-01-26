import { MCED } from "../lib/constants.mjs";

export function defineEventActionsBlocks(Blockly) {
Blockly.Blocks['event_actions_clear_events'] = {
    init: function() {
        this.appendDummyInput().appendField("Clear All Events");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Clear All Events' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['event_actions_wait_for_chat_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Wait for Chat from [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "String");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Wait for Chat from [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['event_actions_wait_for_projectile_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Wait for Arrow Hit from [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Wait for Arrow Hit from [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['event_actions_wait_for_sword_strike_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Wait for Sword Strike from [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Wait for Sword Strike from [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
}