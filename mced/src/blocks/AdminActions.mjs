import { MCED } from "../lib/constants.mjs";

export function defineAdminActionsBlocks(Blockly) {

    Blockly.Blocks['adminactions_all_material_properties'] = {
        init: function() {
            this.appendDummyInput().appendField("Is [material] an item, a block, edible, fuel?");
            this.appendValueInput('material').appendField('Material Name (e.g. ACACIA_BOAT)').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['adminactions_is_material_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Is [material] a placeable block?");
            this.appendValueInput('material').appendField('Material Name (e.g. ACACIA_BOAT)').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['adminactions_is_material_edible'] = {
        init: function() {
            this.appendDummyInput().appendField("Is [material] edible?");
            this.appendValueInput('material').appendField('Material Name (e.g. ACACIA_BOAT)').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['adminactions_is_material_fuel'] = {
        init: function() {
            this.appendDummyInput().appendField("Is [material] fuel?");
            this.appendValueInput('material').appendField('Material Name (e.g. ACACIA_BOAT)').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['adminactions_is_material_item'] = {
        init: function() {
            this.appendDummyInput().appendField("Is [material] an item?");
            this.appendValueInput('material').appendField('Material Name (e.g. ACACIA_BOAT)').setCheck('String');
            this.setOutput(true, 'String');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };
}