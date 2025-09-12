import { MCED } from "../lib/constants.mjs";

export function defineWorldActionsBlocks(Blockly) {

    Blockly.Blocks['minecraft_action_create_explosion'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Explosion");
            this.appendValueInput("POSITION")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("At Position");
            this.appendValueInput("POWER")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Power");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Create Explosion action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_create_explosion'] = {
                POSITION: { shadow: MCED.VECTOR_3D_SHADOW },
            POWER: { shadow: '<shadow type="math_number"><field name="NUM">4</field></shadow>' }
            };

            MCED.BlocklyUtils.configureShadow(this, "POSITION");
            MCED.BlocklyUtils.configureShadow(this, "POWER");
        }
};

    Blockly.Blocks['minecraft_action_get_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Block");
            this.appendValueInput("POSITION")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("At Position");
            this.setOutput(true, "Block");
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Get Block action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_get_block'] = {
                POSITION: { shadow: MCED.VECTOR_3D_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "POSITION");
        }
};

    Blockly.Blocks['minecraft_action_get_height'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Height");
            this.appendValueInput("POSITION")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("At Position (X,Z)");
            this.setOutput(true, "Number");
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Get Height action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_get_height'] = {
                POSITION: { shadow: MCED.VECTOR_3D_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "POSITION");
        }
};

    Blockly.Blocks['minecraft_action_post_to_chat'] = {
        init: function() {
            this.appendDummyInput().appendField("Post to Chat");
            this.appendValueInput("MESSAGE")
                .setCheck("String")
                .setAlign('RIGHT')
                .appendField("Message");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Post to Chat action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_post_to_chat'] = {
                MESSAGE: { shadow: '<shadow type="text"><field name="TEXT">Hello, World!</field></shadow>' }
            };

            MCED.BlocklyUtils.configureShadow(this, "MESSAGE");
        }
};

    Blockly.Blocks['minecraft_action_set_block'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Block");
            this.appendValueInput("POSITION")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("At Position");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck("Block")
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Set Block action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_set_block'] = {
                POSITION: { shadow: MCED.VECTOR_3D_SHADOW },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "POSITION");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_set_blocks'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Blocks");
            this.appendValueInput("POSITION_1")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Position 1");
            this.appendValueInput("POSITION_2")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("Position 2");
            this.appendValueInput("BLOCK_TYPE")
                .setCheck(null)
                .setAlign('RIGHT')
                .appendField("Block Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Set Blocks action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_set_blocks'] = {
                POSITION_1: { shadow: MCED.VECTOR_3D_SHADOW },
            POSITION_2: { shadow: MCED.VECTOR_3D_SHADOW },
            BLOCK_TYPE: { shadow: MCED.BLOCK_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "POSITION_1");
            MCED.BlocklyUtils.configureShadow(this, "POSITION_2");
            MCED.BlocklyUtils.configureShadow(this, "BLOCK_TYPE");
        }
};

    Blockly.Blocks['minecraft_action_spawn_entity'] = {
        init: function() {
            this.appendDummyInput().appendField("Spawn Entity");
            this.appendValueInput("POSITION")
                .setCheck("3DVector")
                .setAlign('RIGHT')
                .appendField("At Position");
            this.appendValueInput("ENTITY")
                .setCheck(null)
                .setAlign('RIGHT')
                .appendField("Entity Type");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(65);
            this.setTooltip("An auto-generated block for the Spawn Entity action.");
            this.setInputsInline(false);

            MCED.Defaults.values['minecraft_action_spawn_entity'] = {
                POSITION: { shadow: MCED.VECTOR_3D_SHADOW },
            ENTITY: { shadow: MCED.ENTITY_TYPE_SHADOW }
            };

            MCED.BlocklyUtils.configureShadow(this, "POSITION");
            MCED.BlocklyUtils.configureShadow(this, "ENTITY");
        }
};

}