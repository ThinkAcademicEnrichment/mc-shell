
import { MCED } from "../lib/constants.mjs";
export function defineTurtleShapesBlocks(Blockly) {
Blockly.Blocks['turtle_shapes_get_arithmetic_plane'] = {
    init: function() {
        this.appendDummyInput().appendField("Digital Shape: Arithmetic Plane");
        this.appendValueInput("NORMAL").setCheck("3DVector").setAlign("RIGHT").appendField("Normal");
        this.appendValueInput("DIMS").setCheck(null).setAlign("RIGHT").appendField("Size (W, H)");
        this.setOutput(true, "DIGITAL_SET");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Digital Shape: Arithmetic Plane' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('NORMAL').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
    }
};
Blockly.Blocks['turtle_shapes_get_metric_ball'] = {
    init: function() {
        this.appendDummyInput().appendField("Digital Shape: Sphere/Diamond/Cube");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("METRIC").setCheck("String").setAlign("RIGHT").appendField("Metric");
        this.setOutput(true, "DIGITAL_SET");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Digital Shape: Sphere/Diamond/Cube' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('RADIUS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('METRIC').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};

}