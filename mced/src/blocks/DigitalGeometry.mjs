
import { MCED } from "../lib/constants.mjs";
export function defineDigitalGeometryBlocks(Blockly) {
Blockly.Blocks['digital_geometry_create_digital_ball'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Ball");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Ball' action.");
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
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
Blockly.Blocks['digital_geometry_create_digital_cube'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Cube");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("SIDE_LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Side Length");
        this.appendValueInput("ROTATION_MATRIX").setCheck("3DMatrix").setAlign("RIGHT").appendField("Rotation Matrix");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.appendValueInput("WALL_THICKNESS").setCheck("Number").setAlign("RIGHT").appendField("Wall Thickness (0=solid)");
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
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
        this.getInput('WALL_THICKNESS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0.0</field></shadow>`));
    }
};
Blockly.Blocks['digital_geometry_create_digital_disc'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Disc");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("NORMAL").setCheck("3DVector").setAlign("RIGHT").appendField("Normal");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
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
        this.getInput('NORMAL').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('RADIUS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
Blockly.Blocks['digital_geometry_create_digital_line'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Line");
        this.appendValueInput("POINT1").setCheck("3DVector").setAlign("RIGHT").appendField("Start Point");
        this.appendValueInput("POINT2").setCheck("3DVector").setAlign("RIGHT").appendField("End Point");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
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
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
Blockly.Blocks['digital_geometry_create_digital_plane'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Plane");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("NORMAL").setCheck("3DVector").setAlign("RIGHT").appendField("Normal");
        this.appendValueInput("SIDE_LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Side Length");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Plane' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('CENTER').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('NORMAL').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('SIDE_LENGTH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
Blockly.Blocks['digital_geometry_create_digital_sphere'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Sphere");
        this.appendValueInput("CENTER").setCheck("3DVector").setAlign("RIGHT").appendField("Center");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.appendValueInput("IS_HOLLOW").setCheck("Boolean").setAlign("RIGHT").appendField("Hollow");
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
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
        this.getInput('IS_HOLLOW').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>`));
    }
};
Blockly.Blocks['digital_geometry_create_digital_tetrahedron'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Tetrahedron");
        this.appendValueInput("P1").setCheck("3DVector").setAlign("RIGHT").appendField("Point 1");
        this.appendValueInput("P2").setCheck("3DVector").setAlign("RIGHT").appendField("Point 2");
        this.appendValueInput("P3").setCheck("3DVector").setAlign("RIGHT").appendField("Point 3");
        this.appendValueInput("P4").setCheck("3DVector").setAlign("RIGHT").appendField("Point 4");
        this.appendValueInput("INNER_OFFSET_FACTOR").setCheck("Number").setAlign("RIGHT").appendField("Inner Offset Factor");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Tetrahedron' action.");
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
        this.getInput('P3').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('P4').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('INNER_OFFSET_FACTOR').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
Blockly.Blocks['digital_geometry_create_digital_tube'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Digital Tube");
        this.appendValueInput("START").setCheck("3DVector").setAlign("RIGHT").appendField("Start");
        this.appendValueInput("END").setCheck("3DVector").setAlign("RIGHT").appendField("End");
        this.appendValueInput("RADIUS").setCheck("Number").setAlign("RIGHT").appendField("Radius");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.appendValueInput("IS_HOLLOW").setCheck("Boolean").setAlign("RIGHT").appendField("Hollow");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Digital Tube' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('START').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('END').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('RADIUS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
        this.getInput('IS_HOLLOW').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>`));
    }
};

}