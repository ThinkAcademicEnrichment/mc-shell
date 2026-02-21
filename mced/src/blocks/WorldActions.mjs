import { MCED } from "../lib/constants.mjs";

export function defineWorldActionsBlocks(Blockly) {

    Blockly.Blocks['worldactions_post_to_chat'] = {
        init: function() {
            this.appendDummyInput().appendField("Post Message to Chat: [message]");
            this.appendValueInput('message').appendField('Message').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#75E538");
            this.setTooltip("Broadcasts a message to all players on the server.");
        }
    };

    Blockly.Blocks['worldactions_set_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Block [block_type] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('Vec3');
this.appendValueInput('block_type').appendField('Material').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#75E538");
            this.setTooltip("Sets a single block at a specific coordinate.");
        }
    };
}