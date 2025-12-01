import { MCED } from "../lib/constants.mjs";

export function defineLSystemShapesBlocks(Blockly) {
Blockly.Blocks['l_system_shapes_define_rule'] = {
    init: function() {
        this.appendDummyInput().appendField("L-System: Define Rule");
        this.appendValueInput("PREDECESSOR").setCheck("String").setAlign("RIGHT").appendField("Symbol (char)");
        this.appendValueInput("SUCCESSOR").setCheck("String").setAlign("RIGHT").appendField("Replacement");
        this.setOutput(true, "LSYSTEM_RULE");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'L-System: Define Rule' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PREDECESSOR').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('SUCCESSOR').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['l_system_shapes_get_lsystem_shape'] = {
    init: function() {
        this.appendDummyInput().appendField("L-System: Generate Shape");
        this.appendValueInput("AXIOM").setCheck("String").setAlign("RIGHT").appendField("Axiom");
        this.appendValueInput("ITERATIONS").setCheck("Number").setAlign("RIGHT").appendField("Iterations");
        this.appendValueInput("STEP_LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Step Length");
        this.appendValueInput("RULES").setCheck(null).setAlign("RIGHT").appendField("Rules (List)");
        this.setOutput(true, "Digital_Set");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'L-System: Generate Shape' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('AXIOM').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('ITERATIONS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('STEP_LENGTH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
}