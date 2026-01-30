import { MCED } from "../lib/constants.mjs";

export function defineWorldActionsBlocks(Blockly) {
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
}