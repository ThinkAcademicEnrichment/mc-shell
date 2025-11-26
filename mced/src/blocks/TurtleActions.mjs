import { MCED } from "../lib/constants.mjs";

export function defineTurtleActionsBlocks(Blockly) {

    Blockly.Blocks['picker_direction'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Direction")
                .appendField(new Blockly.FieldDropdown([
                ["Forward", "forward"],
                ["Back", "back"],
                ["Up", "up"],
                ["Down", "down"],
                ["Left", "left"],
                ["Right", "right"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Direction.");
        }
    };


    Blockly.Blocks['picker_axis'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Axis")
                .appendField(new Blockly.FieldDropdown([
                ["Yaw (Y)", "y"],
                ["Pitch (X)", "x"],
                ["Roll (Z)", "z"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Axis.");
        }
    };


    Blockly.Blocks['picker_compass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Compass")
                .appendField(new Blockly.FieldDropdown([
                ["North (-Z)", "N"],
                ["South (+Z)", "S"],
                ["East (+X)", "E"],
                ["West (-X)", "W"],
                ["North-East", "NE"],
                ["North-West", "NW"],
                ["South-East", "SE"],
                ["South-West", "SW"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Compass.");
        }
    };



Blockly.Blocks['turtle_actions_place_static_shape'] = {
    init: function() {
        this.appendDummyInput().appendField("Construct Shape at Player");
        this.appendValueInput("SHAPE").setCheck(null).setAlign("RIGHT").appendField("Shape");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Material");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Construct Shape at Player' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_picker_world"><field name="MATERIAL_ID">STONE</field></shadow>`));
    }
};
Blockly.Blocks['turtle_actions_turtle_extrude'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Extrude Brush");
        this.appendValueInput("LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Length");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Material");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Extrude Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('LENGTH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_picker_world"><field name="MATERIAL_ID">STONE</field></shadow>`));
    }
};
Blockly.Blocks['turtle_actions_turtle_move'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Move");
        this.appendValueInput("DIRECTION").setCheck("String").setAlign("RIGHT").appendField("Direction");
        this.appendValueInput("DISTANCE").setCheck("Number").setAlign("RIGHT").appendField("Distance");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Move' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIRECTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('DISTANCE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['turtle_actions_turtle_pop'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Pop State");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Pop State' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['turtle_actions_turtle_push'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Push State");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Push State' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['turtle_actions_turtle_reset'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Reset to");
        this.appendValueInput("POSITION").setCheck("3DVector").setAlign("RIGHT").appendField("Position");
        this.appendValueInput("ORIENTATION").setCheck("String").setAlign("RIGHT").appendField("Facing");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Reset to' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POSITION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="vector_3d_shadow"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>`));
        this.getInput('ORIENTATION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">N</field></shadow>`));
    }
};
Blockly.Blocks['turtle_actions_turtle_rotate'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Rotate 90");
        this.appendValueInput("AXIS").setCheck("String").setAlign("RIGHT").appendField("Axis");
        this.appendValueInput("STEPS").setCheck("Number").setAlign("RIGHT").appendField("Steps (90 deg)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Rotate 90' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('AXIS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('STEPS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['turtle_actions_turtle_set_brush'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Set Brush");
        this.appendValueInput("SHAPE").setCheck(null).setAlign("RIGHT").appendField("Shape");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Set Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['turtle_actions_turtle_shear'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Shear");
        this.appendValueInput("PRIMARY").setCheck("String").setAlign("RIGHT").appendField("Primary Axis");
        this.appendValueInput("SECONDARY").setCheck("String").setAlign("RIGHT").appendField("Shear By Axis");
        this.appendValueInput("FACTOR").setCheck("Number").setAlign("RIGHT").appendField("Factor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Shear' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PRIMARY').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('SECONDARY').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('FACTOR').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['turtle_actions_turtle_stamp'] = {
    init: function() {
        this.appendDummyInput().appendField("Turtle: Stamp Brush");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Material");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Turtle: Stamp Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="minecraft_picker_world"><field name="MATERIAL_ID">STONE</field></shadow>`));
    }
};
}