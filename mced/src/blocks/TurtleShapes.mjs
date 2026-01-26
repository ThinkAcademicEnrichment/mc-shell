import { MCED } from "../lib/constants.mjs";

export function defineTurtleShapesBlocks(Blockly) {

    Blockly.Blocks['picker_metric'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Metric")
                .appendField(new Blockly.FieldDropdown([
                ["Euclidean", "euclidean"],
                ["Manhattan", "manhattan"],
                ["Chebyshev", "chebyshev"]
                ]), "VALUE");
            this.setOutput(true, "Metric");
            this.setColour(230);
            this.setTooltip("Select a Metric.");
        }
    };



Blockly.Blocks['turtle_shapes_get_arithmetic_plane'] = {
    init: function() {
        this.appendDummyInput().appendField("Digital Shape: Arithmetic Plane (Square)");
        this.appendValueInput("NORMAL").setCheck("3DVector").setAlign("RIGHT").appendField("Normal");
        this.appendValueInput("SIDE_LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Side Length");
        this.setOutput(true, "Digital_Set");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Digital Shape: Arithmetic Plane (Square)' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('NORMAL').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('SIDE_LENGTH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['turtle_shapes_get_line'] = {
    init: function() {
        this.appendDummyInput().appendField("Digital Shape: Line");
        this.appendValueInput("P1").setCheck("3DVector").setAlign("RIGHT").appendField("point_1");
        this.appendValueInput("P2").setCheck("3DVector").setAlign("RIGHT").appendField("point_2");
        this.setOutput(true, "Digital_Set");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Digital Shape: Line' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('P1').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('P2').connection.setShadowDom(Blockly.utils.xml.textToDom(`
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
        this.setOutput(true, "Digital_Set");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Digital Shape: Sphere/Diamond/Cube' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('RADIUS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('METRIC').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
}