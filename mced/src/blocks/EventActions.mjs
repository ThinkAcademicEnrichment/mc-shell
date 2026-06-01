import { MCED } from "../lib/constants.mjs";

export function defineEventActionsBlocks(Blockly) {

    Blockly.Blocks['eventactions_wait_for_right_block_hit'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for right block hit by a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_left_block_hit'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for left block hit by a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_block_place'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for block place by a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_block_break'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for block break by a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_chat'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for chat message from a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_projectile_hit_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for projectile to hit a block");
            
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_projectile_hit_entity'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for projectile to hit an entity");
            
            this.setOutput(true, 'String');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['eventactions_wait_for_projectile_launch'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for projectile launch by a Player");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, 'String');
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

    Blockly.Blocks['eventactions_wait_for_player_respawn'] = {
        init: function() {
            this.appendDummyInput().appendField("Wait for a Player respawn");
            this.appendValueInput('player_name').appendField('Player name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#D68C45");
            this.setTooltip("");
        }
    };
}