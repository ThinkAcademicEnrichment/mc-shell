import { MCED } from "../lib/constants.mjs";

export function defineWorldActionsBlocks(Blockly) {

    Blockly.Blocks['worldactions_get_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Block at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
            this.setOutput(true, 'Block');
            this.setColour("#5C7457");
            this.setTooltip("Returns the Block ID at the specified position.");
        }
    };

    Blockly.Blocks['worldactions_set_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Block [block_type] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('block_type').appendField('Block').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets a block at the specified position.");
        }
    };

    Blockly.Blocks['worldactions_get_blocks'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Blocks from [pos1] to [pos2]");
            this.appendValueInput('pos1').appendField('From Position').setCheck('3DVector');
this.appendValueInput('pos2').appendField('To Position').setCheck('3DVector');
            this.setOutput(true, 'Array');
            this.setColour("#5C7457");
            this.setTooltip("Returns a list of Block IDs in the specified area.");
        }
    };

    Blockly.Blocks['worldactions_set_blocks'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Blocks [block_type] from [pos1] to [pos2]");
            this.appendValueInput('pos1').appendField('From Position').setCheck('3DVector');
this.appendValueInput('pos2').appendField('To Position').setCheck('3DVector');
this.appendValueInput('block_type').appendField('Block').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Fills a cuboid area with the specified block.");
        }
    };

    Blockly.Blocks['worldactions_get_height'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Highest Block Y at X: [x] Z: [z]");
            this.appendValueInput('x').appendField('X').setCheck('Number');
this.appendValueInput('z').appendField('Z').setCheck('Number');
            this.setOutput(true, 'Number');
            this.setColour("#5C7457");
            this.setTooltip("Gets the Y coordinate of the highest solid block at X, Z.");
        }
    };

    Blockly.Blocks['worldactions_spawn_entity'] = {
        init: function() {
            this.appendDummyInput().appendField("Spawn [entity_id] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('entity_id').appendField('Entity').setCheck('Entity');
            this.setOutput(true, 'Number');
            this.setColour("#5C7457");
            this.setTooltip("Spawns an entity at a given position and returns its unique ID.");
        }
    };

    Blockly.Blocks['worldactions_remove_entity'] = {
        init: function() {
            this.appendDummyInput().appendField("Remove Entity [entity_id]");
            this.appendValueInput('entity_id').appendField('Entity ID').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Removes the entity with the specified ID from the world.");
        }
    };

    Blockly.Blocks['worldactions_get_entities_in_radius'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Entities in [radius] block radius from [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('radius').appendField('Radius').setCheck('Number');
            this.setOutput(true, 'Array');
            this.setColour("#5C7457");
            this.setTooltip("Returns a list of entity IDs within a radius of a position.");
        }
    };

    Blockly.Blocks['worldactions_create_explosion'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Explosion power [power] at [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
this.appendValueInput('power').appendField('Power').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['worldactions_set_sign'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Sign Text");
            this.appendValueInput('position').appendField('At Position').setCheck('3DVector');
this.appendValueInput('line1').appendField('Line 1').setCheck('String');
this.appendValueInput('line2').appendField('Line 2').setCheck('String');
this.appendValueInput('line3').appendField('Line 3').setCheck('String');
this.appendValueInput('line4').appendField('Line 4').setCheck('String');
this.appendValueInput('sign_type').appendField('Sign Material').setCheck('Block');
this.appendValueInput('direction').appendField('Direction (0-15)').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the text and type of a sign at the specified position.");
        }
    };

    Blockly.Blocks['worldactions_drop_item'] = {
        init: function() {
            this.appendDummyInput().appendField("Drop [amount] [item] at [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
this.appendValueInput('item').appendField('Item').setCheck('Item');
this.appendValueInput('amount').appendField('Amount').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Drops a specific item on the ground at the position.");
        }
    };

    Blockly.Blocks['worldactions_drop_random_loot'] = {
        init: function() {
            this.appendDummyInput().appendField("Drop Random Loot at [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Drops a random high-value item at the specified position.");
        }
    };

    Blockly.Blocks['worldactions_set_container_item'] = {
        init: function() {
            this.appendDummyInput().appendField("In container at [pos] set slot [slot] to [amount] [item]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
this.appendValueInput('slot').appendField('Slot (0-26)').setCheck('Number');
this.appendValueInput('item').appendField('Item').setCheck('Item');
this.appendValueInput('amount').appendField('Amount').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets an item in a chest, barrel, or hopper inventory slot.");
        }
    };

    Blockly.Blocks['worldactions_get_entity_name'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Name of Entity ID [id]");
            this.appendValueInput('id').appendField('Entity ID').setCheck('Number');
            this.setOutput(true, 'String');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };
}