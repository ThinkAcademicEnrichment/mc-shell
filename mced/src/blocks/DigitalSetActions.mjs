import { MCED } from "../lib/constants.mjs";

export function defineDigitalSetActionsBlocks(Blockly) {

    Blockly.Blocks['digitalsetactions_difference'] = {
        init: function() {
            this.appendDummyInput().appendField("Difference");
            this.appendValueInput('set_a').appendField('Set A').setCheck('Digital_Set');
this.appendValueInput('set_b').appendField('Set B').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Returns a new Digital Set containing points from Set A that are NOT in Set B. Note: Unlike union and intersection, difference is order-dependent.");
        }
    };

    Blockly.Blocks['digitalsetactions_intersection'] = {
        init: function() {
            this.appendDummyInput().appendField("Intersection");
            this.appendValueInput('set_a').appendField('Set A').setCheck('Digital_Set');
this.appendValueInput('set_b').appendField('Set B').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Returns a new Digital Set containing only points that exist in BOTH Set A and Set B.");
        }
    };

    Blockly.Blocks['digitalsetactions_is_empty'] = {
        init: function() {
            this.appendDummyInput().appendField("Is Empty");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
            this.setOutput(true, 'Boolean');
            this.setColour("#A57582");
            this.setTooltip("Checks if a Digital Set contains zero points. Returns a Boolean value, useful in Blockly logic statements.");
        }
    };

    Blockly.Blocks['digitalsetactions_shear'] = {
        init: function() {
            this.appendDummyInput().appendField("Shear");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
this.appendValueInput('axis_primary').appendField('Primary Axis').setCheck('Axis');
this.appendValueInput('axis_secondary').appendField('Secondary Axis').setCheck('Axis');
this.appendValueInput('factor').appendField('Factor').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalsetactions_translate'] = {
        init: function() {
            this.appendDummyInput().appendField("Translate");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
this.appendValueInput('dx').appendField('dx').setCheck('Number');
this.appendValueInput('dy').appendField('dy').setCheck('Number');
this.appendValueInput('dz').appendField('dz').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Moves a Digital Set by a given (dx, dy, dz) offset and returns the new Set. Treats the input set as immutable and returns a newly transformed set.");
        }
    };

    Blockly.Blocks['digitalsetactions_union'] = {
        init: function() {
            this.appendDummyInput().appendField("Union");
            this.appendValueInput('set_a').appendField('Set A').setCheck('Digital_Set');
this.appendValueInput('set_b').appendField('Set B').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Combines two Digital Sets, returning a new set containing all points from both. Generates a symmetric 2-input block.");
        }
    };

    Blockly.Blocks['digitalsetactions_union_all'] = {
        init: function() {
            this.appendDummyInput().appendField("Union All");
            this.appendValueInput('sets').appendField('Sets').setCheck('List');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Combines a list of Digital Sets into a single Set. This is perfect for a Blockly block equipped with a mutator (+/- buttons) to accept an arbitrary number of inputs.");
        }
    };
}