import { MCED } from "../lib/constants.mjs";

export function defineLSystemShapesBlocks(Blockly) {

    Blockly.Blocks['lsystemshapes_define_rule'] = {
        init: function() {
            this.appendDummyInput().appendField("L-System Rule: [predecessor] -> [successor]");
            this.appendValueInput('predecessor').appendField('Symbol').setCheck('String');
this.appendValueInput('successor').appendField('Replacement').setCheck('String');
            this.setOutput(true, 'list');
            this.setColour("#75E538");
            this.setTooltip("Defines a string replacement rule for an L-System.");
        }
    };

    Blockly.Blocks['lsystemshapes_get_lsystem_shape'] = {
        init: function() {
            this.appendDummyInput().appendField("L-System Shape: Axiom [axiom] Iterations [iterations]");
            this.appendValueInput('axiom').appendField('Axiom').setCheck('String');
this.appendValueInput('iterations').appendField('Iterations').setCheck('Number');
this.appendValueInput('step_length').appendField('Step Length').setCheck('Number');
this.appendValueInput('rules').appendField('Rules List').setCheck('list');
            this.setOutput(true, 'DigitalSet');
            this.setColour("#75E538");
            this.setTooltip("Iterates an L-System and interprets it as a digital shape.");
        }
    };
}