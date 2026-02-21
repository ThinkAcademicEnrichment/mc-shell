import { MCED } from "../lib/constants.mjs";

export function defineEventActionsBlocks(Blockly) {

    Blockly.Blocks['eventactions_clear_events'] = {
        init: function() {
            this.appendDummyInput().appendField("Clear All Events");
            
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#FCBA03");
            this.setTooltip("Directly calls the player's clear_events method to flush the buffer.");
        }
    };

    Blockly.Blocks['eventactions_wait_for_chat_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for Chat from [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, 'str');
            this.setColour("#FCBA03");
            this.setTooltip("Resolves the target player and waits for a chat message from them.");
        }
    };

    Blockly.Blocks['eventactions_wait_for_projectile_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for Arrow Hit from [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, '3DVector');
            this.setColour("#FCBA03");
            this.setTooltip("Resolves the target player and waits for a projectile hit event.");
        }
    };

    Blockly.Blocks['eventactions_wait_for_sword_strike_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for Sword Strike from [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, '3DVector');
            this.setColour("#FCBA03");
            this.setTooltip("Resolves the target player and waits for them to strike a block.");
        }
    };
}