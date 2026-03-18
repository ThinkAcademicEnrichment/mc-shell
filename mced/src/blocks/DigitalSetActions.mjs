import { MCED } from "../lib/constants.mjs";

export function defineDigitalSetActionsBlocks(Blockly) {

    Blockly.Blocks['digitalsetactions_add_voxel'] = {
        init: function() {
            this.appendDummyInput().appendField("Add Voxel");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
this.appendValueInput('x').appendField('x').setCheck('Number');
this.appendValueInput('y').appendField('y').setCheck('Number');
this.appendValueInput('z').appendField('z').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Adds a single point to a set. Maintains immutability by cloning the set before adding the voxel.");
        }
    };

    Blockly.Blocks['digitalsetactions_difference'] = {
        init: function() {
            this.appendDummyInput().appendField("Difference");
            this.appendValueInput('set_a').appendField('Set A').setCheck('Digital_Set');
this.appendValueInput('set_b').appendField('Set B').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Returns a new Digital Set containing points from Set A that are NOT in Set B.");
        }
    };

    Blockly.Blocks['digitalsetactions_dilate'] = {
        init: function() {
            this.appendDummyInput().appendField("Dilate");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Expands the Digital Set by adding a layer of voxels to its boundary.");
        }
    };

    Blockly.Blocks['digitalsetactions_empty_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Empty Set");
            
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Creates a new, completely empty DigitalSet.");
        }
    };

    Blockly.Blocks['digitalsetactions_erode'] = {
        init: function() {
            this.appendDummyInput().appendField("Erode");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Shrinks the Digital Set by removing the outermost layer of voxels.");
        }
    };

    Blockly.Blocks['digitalsetactions_extrude'] = {
        init: function() {
            this.appendDummyInput().appendField("Extrude");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
this.appendValueInput('dx').appendField('dx').setCheck('Number');
this.appendValueInput('dy').appendField('dy').setCheck('Number');
this.appendValueInput('dz').appendField('dz').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Extrudes (sweeps) the Digital Set along a directional vector.");
        }
    };

    Blockly.Blocks['digitalsetactions_get_voxels'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Voxels");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
            this.setOutput(true, 'Array');
            this.setColour("#A57582");
            this.setTooltip("Returns the blocks/points in the Digital Set as a list of vectors.");
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
            this.setTooltip("Checks if a Digital Set contains zero points.");
        }
    };

    Blockly.Blocks['digitalsetactions_rotate'] = {
        init: function() {
            this.appendDummyInput().appendField("Rotate");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
this.appendValueInput('axis').appendField('Axis').setCheck('Axis');
this.appendValueInput('angle').appendField('Angle (deg)').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Rotates a Digital Set around a specific axis.");
        }
    };

    Blockly.Blocks['digitalsetactions_scale'] = {
        init: function() {
            this.appendDummyInput().appendField("Scale");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
this.appendValueInput('factor').appendField('Factor').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Scales a Digital Set by multiplying voxel coordinates.");
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
            this.setTooltip("Shear a Digital Set along given axes by a specific factor.");
        }
    };

    Blockly.Blocks['digitalsetactions_shell'] = {
        init: function() {
            this.appendDummyInput().appendField("Shell");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Returns the hollow boundary (shell) of the Digital Set.");
        }
    };

    Blockly.Blocks['digitalsetactions_symmetric_difference'] = {
        init: function() {
            this.appendDummyInput().appendField("Symmetric Difference");
            this.appendValueInput('set_a').appendField('Set A').setCheck('Digital_Set');
this.appendValueInput('set_b').appendField('Set B').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Returns a new Digital Set containing points in either Set A or Set B, but NOT both.");
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
            this.setTooltip("Moves a Digital Set by a given (dx, dy, dz) offset.");
        }
    };

    Blockly.Blocks['digitalsetactions_union'] = {
        init: function() {
            this.appendDummyInput().appendField("Union");
            this.appendValueInput('set_a').appendField('Set A').setCheck('Digital_Set');
this.appendValueInput('set_b').appendField('Set B').setCheck('Digital_Set');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Combines two Digital Sets, returning a new set containing all points from both.");
        }
    };

    Blockly.Blocks['digitalsetactions_union_all'] = {
        init: function() {
            this.appendDummyInput().appendField("Union All");
            this.appendValueInput('sets').appendField('Sets').setCheck('List');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#A57582");
            this.setTooltip("Combines a list of Digital Sets into a single Set. Used for Blockly mutator blocks taking N inputs.");
        }
    };

    Blockly.Blocks['digitalsetactions_voxel_count'] = {
        init: function() {
            this.appendDummyInput().appendField("Voxel Count");
            this.appendValueInput('target_set').appendField('Set').setCheck('Digital_Set');
            this.setOutput(true, 'Number');
            this.setColour("#A57582");
            this.setTooltip("Returns the total number of blocks/points in the Digital Set.");
        }
    };
}