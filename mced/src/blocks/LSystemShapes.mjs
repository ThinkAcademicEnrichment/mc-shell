import { MCED } from "../lib/constants.mjs";

export function defineLSystemShapesBlocks(Blockly) {

    Blockly.Blocks['lsystemshapes_define_rule'] = {
        init: function() {
            this.appendDummyInput().appendField("L-System: Define Rule");
            this.appendValueInput('predecessor').appendField('Symbol (char)').setCheck('String');
this.appendValueInput('successor').appendField('Replacement').setCheck('String');
            this.setOutput(true, 'LSYSTEM_RULE');
            this.setColour("#7A9473");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['lsystemshapes_get_lsystem_shape'] = {
        init: function() {
            this.appendDummyInput().appendField("L-System: Generate Shape");
            this.appendValueInput('axiom').appendField('Axiom').setCheck('String');
this.appendValueInput('iterations').appendField('Iterations').setCheck('Number');
this.appendValueInput('step_length').appendField('Step Length').setCheck('Number');
this.appendValueInput('rules').appendField('Rules (List)').setCheck('list');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#7A9473");
            this.setTooltip("");
        }
    };
}