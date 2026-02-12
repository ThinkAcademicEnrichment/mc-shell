import { MCED } from "../lib/constants.mjs";

export function definePyncraftActionsBlocks(Blockly) {
Blockly.Blocks['pyncraft_actions_create_explosion'] = {
    init: function() {
        this.appendDummyInput().appendField("Create Explosion");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.appendValueInput("POWER").setCheck("Number").setAlign("RIGHT").appendField("Power");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Create Explosion' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('POWER').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">4</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_block'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Block");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.setOutput(true, "String");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Block' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_block_with_data'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Block With Data");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.setOutput(true, "String");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Block With Data' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_direction_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Direction for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Direction for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_food_level_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Food Level for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Food Level for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_health_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Health for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Health for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_height'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Height");
        this.appendValueInput("X").setCheck("Number").setAlign("RIGHT").appendField("X");
        this.appendValueInput("Z").setCheck("Number").setAlign("RIGHT").appendField("Z");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Height' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('X').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('Z').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_pitch_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Pitch for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Pitch for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_player_entity_id'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Entity ID");
        this.appendValueInput("NAME").setCheck("String").setAlign("RIGHT").appendField("Player Name");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Entity ID' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_player_entity_ids'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Entity IDs");
        
        this.setOutput(true, "Array");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Entity IDs' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['pyncraft_actions_get_position_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Position for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Position for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_rotation_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Rotation for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Rotation for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_tile_position_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Tile Position for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Tile Position for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_get_yaw_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Yaw for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Yaw for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_send_title_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Send Title to [player]");
        this.appendValueInput("TITLE").setCheck("String").setAlign("RIGHT").appendField("Title");
        this.appendValueInput("SUBTITLE").setCheck("String").setAlign("RIGHT").appendField("Subtitle");
        this.appendValueInput("STAY").setCheck("Number").setAlign("RIGHT").appendField("Stay (Ticks)");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Send Title to [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('TITLE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('SUBTITLE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('STAY').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">70</field></shadow>`));
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_block'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Block");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Block' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_picker_world"><field name="MATERIAL_ID">STONE</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_blocks'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Blocks");
        this.appendValueInput("P1").setCheck("3DVector").setAlign("RIGHT").appendField("Position 1");
        this.appendValueInput("P2").setCheck("3DVector").setAlign("RIGHT").appendField("Position 2");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Blocks' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('P1').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('P2').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_picker_world"><field name="MATERIAL_ID">STONE</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_direction_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Direction for [player]");
        this.appendValueInput("DIRECTION").setCheck("3DVector").setAlign("RIGHT").appendField("Direction Vector");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Direction for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIRECTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_position_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Position for [player]");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("To Position");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Position for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_rotation_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Rotation for [player]");
        this.appendValueInput("YAW").setCheck("Number").setAlign("RIGHT").appendField("Yaw");
        this.appendValueInput("PITCH").setCheck("Number").setAlign("RIGHT").appendField("Pitch");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Rotation for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('YAW').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('PITCH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_sign'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Sign Text");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.appendValueInput("SIGN_TYPE").setCheck("String").setAlign("RIGHT").appendField("Sign Material (e.g. OAK)");
        this.appendValueInput("DIRECTION").setCheck("Number").setAlign("RIGHT").appendField("Direction (0-15)");
        this.appendValueInput("LINE1").setCheck("String").setAlign("RIGHT").appendField("Line 1");
        this.appendValueInput("LINE2").setCheck("String").setAlign("RIGHT").appendField("Line 2");
        this.appendValueInput("LINE3").setCheck("String").setAlign("RIGHT").appendField("Line 3");
        this.appendValueInput("LINE4").setCheck("String").setAlign("RIGHT").appendField("Line 4");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Sign Text' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('SIGN_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">OAK</field></shadow>`));
        this.getInput('DIRECTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('LINE1').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('LINE2').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('LINE3').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('LINE4').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_set_tile_position_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Tile Position for [player]");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("To Tile Position");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Tile Position for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['pyncraft_actions_spawn_entity'] = {
    init: function() {
        this.appendDummyInput().appendField("Spawn Entity");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.appendValueInput("ENTITY").setCheck("Entity").setAlign("RIGHT").appendField("Entity Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Spawn Entity' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('ENTITY').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_entity_picker_passive_mobs"><field name="ENTITY_ID">PIG</field></shadow>`));
    }
};
}