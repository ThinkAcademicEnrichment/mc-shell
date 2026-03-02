import { MCED } from "../lib/constants.mjs";

export function defineGeneratedPlayerActionsBlocks(Blockly) {

    Blockly.Blocks['generatedplayeractions_get_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Direction");
            
            this.setOutput(true, '3DVector');
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['generatedplayeractions_get_food_level'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Food Level");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("Returns the food level of the player.");
        }
    };

    Blockly.Blocks['generatedplayeractions_get_health'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Health");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("Returns the health of the player.");
        }
    };

    Blockly.Blocks['generatedplayeractions_get_pitch'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Pitch");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['generatedplayeractions_get_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#61A1B0");
            this.setTooltip("Gets the exact XYZ position of the player.");
        }
    };

    Blockly.Blocks['generatedplayeractions_get_rotation'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Rotation");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['generatedplayeractions_get_tile_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Tile Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#61A1B0");
            this.setTooltip("Gets the integer block position of the player.");
        }
    };

    Blockly.Blocks['generatedplayeractions_send_title'] = {
        init: function() {
            this.appendDummyInput().appendField("Send Title to Screen");
            this.appendValueInput('title').appendField('Title').setCheck('String');
this.appendValueInput('subtitle').appendField('Subtitle').setCheck('String');
this.appendValueInput('stay').appendField('Stay (Ticks)').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("Sends a title and subtitle to the player's screen.");
        }
    };

    Blockly.Blocks['generatedplayeractions_set_health'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Health to [health]");
            this.appendValueInput('health').appendField('Health').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['generatedplayeractions_set_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Position to [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['generatedplayeractions_set_tile_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Tile Position to [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };
}