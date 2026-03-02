import { MCED } from "../lib/constants.mjs";

export function defineGeneratedChatActionsBlocks(Blockly) {

    Blockly.Blocks['generatedchatactions_post'] = {
        init: function() {
            this.appendDummyInput().appendField("Post to Chat");
            this.appendValueInput('message').appendField('Message').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };
}