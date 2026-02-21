import { MCED } from "../lib/constants.mjs";

export function definePlayerActionsBlocks(Blockly) {

    Blockly.Blocks['playeractions_get_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Direction");
            
            this.setOutput(true, '3DVector');
            this.setColour("#3ECDE0");
            this.setTooltip("Returns the direction the player is looking as a unit vector.");
        }
    };

    Blockly.Blocks['playeractions_get_position'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Player Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#3ECDE0");
            this.setTooltip("Returns the player's current Vec3 position.");
        }
    };

    Blockly.Blocks['playeractions_get_q_compass_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Player Q-Compass Direction");
            
            this.setOutput(true, 'QCompass');
            this.setColour("#3ECDE0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_q_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Q Direction");
            
            this.setOutput(true, '3DVector');
            this.setColour("#3ECDE0");
            this.setTooltip("Returns the quantized direction the player is looking as a unit vector.");
        }
    };

    Blockly.Blocks['playeractions_get_tile_position'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Tile Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#3ECDE0");
            this.setTooltip("Returns the integer block coordinates of the player.");
        }
    };

    Blockly.Blocks['playeractions_set_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Direction");
            this.appendValueInput('direction').appendField('Direction Vector').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#3ECDE0");
            this.setTooltip("Sets the player's facing direction.");
        }
    };

    Blockly.Blocks['playeractions_set_position'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Player Position");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#3ECDE0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_set_q_compass_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Player Q-Compass Direction");
            this.appendValueInput('direction').appendField('Q-Compass Direction').setCheck('QCompass');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#3ECDE0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_set_tile_position'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Tile Position");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#3ECDE0");
            this.setTooltip("Returns the integer block coordinates of the player.");
        }
    };
}