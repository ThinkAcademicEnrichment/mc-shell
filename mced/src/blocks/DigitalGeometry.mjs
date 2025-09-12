import { MCED } from "../lib/constants.mjs";

export function defineDigitalGeometryBlocks(Blockly) {

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
            this.appendValueInput("ROTATION_MATRIX3")
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
            ROTATION_MATRIX3: { shadow: '<shadow type="minecraft_matrix_3d_euler"></shadow>' },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW },
            WALL_THICKNESS: { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' }
            };

            MCED.BlocklyUtils.configureShadow(this, "CENTER");
            MCED.BlocklyUtils.configureShadow(this, "SIDE_LENGTH");
            MCED.BlocklyUtils.configureShadow(this, "ROTATION_MATRIX3");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
            MCED.BlocklyUtils.configureShadow(this, "WALL_THICKNESS");
        }
    };
}