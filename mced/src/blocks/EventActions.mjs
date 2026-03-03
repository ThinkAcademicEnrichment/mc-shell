import { MCED } from "../lib/constants.mjs";

export function defineEventActionsBlocks(Blockly) {

    Blockly.Blocks['eventactions_clear_events'] = {
        init: function() {
            this.appendDummyInput().appendField("Clear All Events");
            
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#D68C45");
            this.setTooltip("Directly calls the player's clear_events method to flush the buffer.");
        }
    };

    Blockly.Blocks['eventactions_wait_for_left_block_hit_by_player'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for left block hit by a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_player_death'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for a Player death");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };
}