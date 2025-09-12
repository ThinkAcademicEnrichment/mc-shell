import { MCED } from "../lib/constants.mjs";

export function defineDigitalGeometryBlocks(Blockly) {

    Blockly.Blocks['minecraft_action_create_digital_ball'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Ball");
            this.appendValueInput("CENTER")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Center");
            this.appendValueInput("RADIUS")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Radius");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Ball action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_ball'] = {
                CENTER: { shadow: MCED.VECTOR_3D_SHADOW },
            RADIUS: { shadow: '<shadow type="math_number"><field name="NUM">5</field></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "CENTER");
            MCED.BlocklyUtils.configureShadow(this, "RADIUS");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_cube'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Cube");
            this.appendValueInput("CENTER")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Center");
            this.appendValueInput("SIDE_LENGTH")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Side Length");
            this.appendValueInput("ROTATION_MATRIX")
                .setCheck("3DMatrix")
                .setAlign('RIGHT')
                .appendField("Rotation Matrix");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.appendValueInput("WALL_THICKNESS")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Wall Thickness (0=solid)");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Cube action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_cube'] = {
                CENTER: { shadow: MCED.VECTOR_3D_SHADOW },
            SIDE_LENGTH: { shadow: '<shadow type="math_number"><field name="NUM">5</field></shadow>' },
            ROTATION_MATRIX: { shadow: '<shadow type="minecraft_matrix_3d_euler"></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW },
            WALL_THICKNESS: { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' }
            };

            MCED.BlocklyUtils.configureShadow(this, "CENTER");
            MCED.BlocklyUtils.configureShadow(this, "SIDE_LENGTH");
            MCED.BlocklyUtils.configureShadow(this, "ROTATION_MATRIX");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
            MCED.BlocklyUtils.configureShadow(this, "WALL_THICKNESS");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_disc'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Disc");
            this.appendValueInput("CENTER")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Center");
            this.appendValueInput("NORMAL")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Normal");
            this.appendValueInput("RADIUS")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Radius");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Disc action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_disc'] = {
                CENTER: { shadow: MCED.VECTOR_3D_SHADOW },
            NORMAL: { shadow: MCED.VECTOR_3D_SHADOW_Y_UP },
            RADIUS: { shadow: '<shadow type="math_number"><field name="NUM">5</field></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "CENTER");
            MCED.BlocklyUtils.configureShadow(this, "NORMAL");
            MCED.BlocklyUtils.configureShadow(this, "RADIUS");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_line'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Line");
            this.appendValueInput("POINT1")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Start Point");
            this.appendValueInput("POINT2")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("End Point");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Line action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_line'] = {
                POINT1: { shadow: MCED.VECTOR_3D_SHADOW },
            POINT2: { shadow: MCED.VECTOR_3D_SHADOW },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "POINT1");
            MCED.BlocklyUtils.configureShadow(this, "POINT2");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_plane'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Plane");
            this.appendValueInput("CENTER")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Center");
            this.appendValueInput("NORMAL")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Normal");
            this.appendValueInput("SIDE_LENGTH")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Side Length");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Plane action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_plane'] = {
                CENTER: { shadow: MCED.VECTOR_3D_SHADOW },
            NORMAL: { shadow: MCED.VECTOR_3D_SHADOW_Y_UP },
            SIDE_LENGTH: { shadow: '<shadow type="math_number"><field name="NUM">10</field></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "CENTER");
            MCED.BlocklyUtils.configureShadow(this, "NORMAL");
            MCED.BlocklyUtils.configureShadow(this, "SIDE_LENGTH");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_sphere'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Sphere");
            this.appendValueInput("CENTER")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Center");
            this.appendValueInput("RADIUS")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Radius");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.appendValueInput("IS_HOLLOW")
                .setCheck("Boolean")
                .setAlign('RIGHT')
                .appendField("Hollow");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Sphere action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_sphere'] = {
                CENTER: { shadow: MCED.VECTOR_3D_SHADOW },
            RADIUS: { shadow: '<shadow type="math_number"><field name="NUM">5</field></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW },
            IS_HOLLOW: { shadow: '<shadow type="logic_boolean"><field name="BOOL">FALSE</field></shadow>' }
            };

            MCED.BlocklyUtils.configureShadow(this, "CENTER");
            MCED.BlocklyUtils.configureShadow(this, "RADIUS");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
            MCED.BlocklyUtils.configureShadow(this, "IS_HOLLOW");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_tetrahedron'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Tetrahedron");
            this.appendValueInput("P1")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Point 1");
            this.appendValueInput("P2")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Point 2");
            this.appendValueInput("P3")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Point 3");
            this.appendValueInput("P4")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Point 4");
            this.appendValueInput("INNER_OFFSET_FACTOR")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Inner Offset Factor");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Tetrahedron action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_tetrahedron'] = {
                P1: { shadow: MCED.VECTOR_3D_SHADOW },
            P2: { shadow: MCED.VECTOR_3D_SHADOW },
            P3: { shadow: MCED.VECTOR_3D_SHADOW },
            P4: { shadow: MCED.VECTOR_3D_SHADOW },
            INNER_OFFSET_FACTOR: { shadow: '<shadow type="math_number"><field name="NUM">3</field></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "P1");
            MCED.BlocklyUtils.configureShadow(this, "P2");
            MCED.BlocklyUtils.configureShadow(this, "P3");
            MCED.BlocklyUtils.configureShadow(this, "P4");
            MCED.BlocklyUtils.configureShadow(this, "INNER_OFFSET_FACTOR");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_create_digital_tube'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Tube");
            this.appendValueInput("START")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Start");
            this.appendValueInput("END")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("End");
            this.appendValueInput("RADIUS")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Radius");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.appendValueInput("IS_HOLLOW")
                .setCheck("Boolean")
                .setAlign('RIGHT')
                .appendField("Hollow");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Digital Tube action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_digital_tube'] = {
                START: { shadow: MCED.VECTOR_3D_SHADOW },
            END: { shadow: MCED.VECTOR_3D_SHADOW },
            RADIUS: { shadow: '<shadow type="math_number"><field name="NUM">3</field></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW },
            IS_HOLLOW: { shadow: '<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>' }
            };

            MCED.BlocklyUtils.configureShadow(this, "START");
            MCED.BlocklyUtils.configureShadow(this, "END");
            MCED.BlocklyUtils.configureShadow(this, "RADIUS");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
            MCED.BlocklyUtils.configureShadow(this, "IS_HOLLOW");
        }
};

}