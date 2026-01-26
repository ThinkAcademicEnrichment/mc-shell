import { MCED } from "../lib/constants.mjs";

export function defineDigitalGeometryBlocks(Blockly) {
Blockly.Blocks['digital_geometry_create_digital_cube'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Cube");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("SIDE_LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Side Length");
        this.appendValueInput("BLOCK_TYPE").setCheck("String").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Cube' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('CENTER').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('SIDE_LENGTH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['digital_geometry_create_digital_disc'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Disc");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("NORMAL").setCheck("3DVector").setAlign("RIGHT").appendField("Normal");
        this.appendValueInput("BLOCK_TYPE").setCheck("String").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Disc' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('CENTER').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('RADIUS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('NORMAL').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['digital_geometry_create_digital_line'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Line");
        this.appendValueInput("POINT1").setCheck("3DVector").setAlign("RIGHT").appendField("Start Point");
        this.appendValueInput("POINT2").setCheck("3DVector").setAlign("RIGHT").appendField("End Point");
        this.appendValueInput("BLOCK_TYPE").setCheck("String").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Line' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POINT1').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('POINT2').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['digital_geometry_create_digital_sphere'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Sphere");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("BLOCK_TYPE").setCheck("String").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Sphere' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('CENTER').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
        this.getInput('RADIUS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
}