
import { MCED } from "../lib/constants.mjs";
export function defineWorldActionsBlocks(Blockly) {
Blockly.Blocks['world_actions_create_explosion'] = {
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
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('POWER').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['world_actions_get_block'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Block");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.setOutput(true, "Block");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Block' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
    }
};
Blockly.Blocks['world_actions_get_height'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Height");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position (X,Z)");
        this.setOutput(true, "Number");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Height' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
    }
};
Blockly.Blocks['world_actions_post_to_chat'] = {
    init: function() {
        this.appendDummyInput().appendField("Post to Chat");
        this.appendValueInput("MESSAGE").setCheck("String").setAlign("RIGHT").appendField("Message");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Post to Chat' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('MESSAGE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['world_actions_set_block'] = {
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
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`
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
Blockly.Blocks['world_actions_set_blocks'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Blocks");
        this.appendValueInput("POSITION_1").setCheck("3DVector").setAlign("RIGHT").appendField("Position 1");
        this.appendValueInput("POSITION_2").setCheck("3DVector").setAlign("RIGHT").appendField("Position 2");
        this.appendValueInput("BLOCK_TYPE").setCheck(null).setAlign("RIGHT").appendField("Block Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Blocks' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION_1').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('POSITION_2').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
    }
};
Blockly.Blocks['world_actions_spawn_entity'] = {
    init: function() {
        this.appendDummyInput().appendField("Spawn Entity");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("At Position");
        this.appendValueInput("ENTITY").setCheck(null).setAlign("RIGHT").appendField("Entity Type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Spawn Entity' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>   
        `));
        this.getInput('ENTITY').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_entity_picker_passive_mobs">
                    <field name="ENTITY_ID">PIG</field>
                </shadow>
        `));
    }
};

}