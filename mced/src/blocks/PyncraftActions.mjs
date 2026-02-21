import { MCED } from "../lib/constants.mjs";

export function definePyncraftActionsBlocks(Blockly) {

    Blockly.Blocks['pyncraftactions_get_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Block at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
            this.setOutput(true, 'Block');
            this.setColour("#252E28");
            this.setTooltip("Returns the Block ID at the specified position.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_block_with_data'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Block with Data at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
            this.setOutput(true, 'Block');
            this.setColour("#252E28");
            this.setTooltip("Returns the Block ID with its blockstate data at the specified position.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_entities_in_radius'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Entities in [radius] block radius from [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('radius').appendField('Radius').setCheck('float');
            this.setOutput(true, 'Array');
            this.setColour("#252E28");
            this.setTooltip("Returns a list of entity IDs within a radius of a position.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_food_level_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Food Level for [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, 'int');
            this.setColour("#252E28");
            this.setTooltip("Returns the food level of the specified player.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_health_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Health for [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, 'float');
            this.setColour("#252E28");
            this.setTooltip("Returns the health of the specified player.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_highest_block_y'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Highest Block Y at X: [x] Z: [z]");
            this.appendValueInput('x').appendField('X').setCheck('float');
this.appendValueInput('z').appendField('Z').setCheck('float');
            this.setOutput(true, 'int');
            this.setColour("#252E28");
            this.setTooltip("Gets the Y coordinate of the highest solid block at X, Z.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_position_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Position for [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, '3DVector');
            this.setColour("#252E28");
            this.setTooltip("Gets the position of the specified player.");
        }
    };

    Blockly.Blocks['pyncraftactions_get_tile_position_by_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Tile Position for [player]");
            this.appendValueInput('player_name').appendField('Player').setCheck('str');
            this.setOutput(true, '3DVector');
            this.setColour("#252E28");
            this.setTooltip("Gets the position of the specified player.");
        }
    };

    Blockly.Blocks['pyncraftactions_set_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Block [block_type] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('block_type').appendField('Block').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#252E28");
            this.setTooltip("Sets a block at the specified position.");
        }
    };

    Blockly.Blocks['pyncraftactions_set_blocks'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Blocks [block_type] from [pos1] to [pos2]");
            this.appendValueInput('pos1').appendField('From Position').setCheck('3DVector');
this.appendValueInput('pos2').appendField('To Position').setCheck('3DVector');
this.appendValueInput('block_type').appendField('Block').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#252E28");
            this.setTooltip("Fills a cuboid area with the specified block.");
        }
    };

    Blockly.Blocks['pyncraftactions_set_sign'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Sign Text");
            this.appendValueInput('position').appendField('At Position').setCheck('3DVector');
this.appendValueInput('line1').appendField('Line 1').setCheck('str');
this.appendValueInput('line2').appendField('Line 2').setCheck('str');
this.appendValueInput('line3').appendField('Line 3').setCheck('str');
this.appendValueInput('line4').appendField('Line 4').setCheck('str');
this.appendValueInput('sign_type').appendField('Sign Material').setCheck('Block');
this.appendValueInput('direction').appendField('Direction (0-15)').setCheck('int');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#252E28");
            this.setTooltip("Sets the text and type of a sign at the specified position.");
        }
    };

    Blockly.Blocks['pyncraftactions_spawn_entity'] = {
        init: function() {
            this.appendDummyInput().appendField("Spawn [entity_id] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('entity_id').appendField('Entity').setCheck('Entity');
            this.setOutput(true, 'int');
            this.setColour("#252E28");
            this.setTooltip("Spawns an entity at a given position and returns its unique ID.");
        }
    };
}