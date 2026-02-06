import { MCED } from "../lib/constants.mjs";

export function defineQTurtleActionsBlocks(Blockly) {

    Blockly.Blocks['picker_qdirection'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Qdirection")
                .appendField(new Blockly.FieldDropdown([
                ["Forward", "F"],
                ["Back", "B"],
                ["Right", "R"],
                ["Left", "L"],
                ["Up", "U"],
                ["Down", "D"],
                ["Forward-Right", "FR"],
                ["Forward-Left", "FL"],
                ["Back-Right", "BR"],
                ["Back-Left", "BL"],
                ["Forward-Up", "FU"],
                ["Forward-Down", "FD"],
                ["Back-Up", "BU"],
                ["Back-Down", "BD"],
                ["Right-Up", "RU"],
                ["Right-Down", "RD"],
                ["Left-Up", "LU"],
                ["Left-Down", "LD"],
                ["Forward-Right-Up", "FRU"],
                ["Forward-Right-Down", "FRD"],
                ["Forward-Left-Up", "FLU"],
                ["Forward-Left-Down", "FLD"],
                ["Back-Right-Up", "BRU"],
                ["Back-Right-Down", "BRD"],
                ["Back-Left-Up", "BLU"],
                ["Back-Left-Down", "BLD"]
                ]), "VALUE");
            this.setOutput(true, "QDirection");
            this.setColour(230);
            this.setTooltip("Select a Qdirection.");
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
            this.setOutput(true, "Axis");
            this.setColour(230);
            this.setTooltip("Select a Axis.");
        }
    };


    Blockly.Blocks['picker_qcompass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Qcompass")
                .appendField(new Blockly.FieldDropdown([
                ["North (-Z)", "N"],
                ["South (+Z)", "S"],
                ["East (+X)", "E"],
                ["West (-X)", "W"],
                ["Up (+Y)", "U"],
                ["Down (-Y)", "D"],
                ["North-East", "NE"],
                ["North-West", "NW"],
                ["South-East", "SE"],
                ["South-West", "SW"],
                ["North-Up", "NU"],
                ["North-Down", "ND"],
                ["South-Up", "SU"],
                ["South-Down", "SD"],
                ["East-Up", "EU"],
                ["East-Down", "ED"],
                ["West-Up", "WU"],
                ["West-Down", "WD"],
                ["North-East-Up", "NEU"],
                ["North-East-Down", "NED"],
                ["North-West-Up", "NWU"],
                ["North-West-Down", "NWD"],
                ["South-East-Up", "SEU"],
                ["South-East-Down", "SED"],
                ["South-West-Up", "SWU"],
                ["South-West-Down", "SWD"]
                ]), "VALUE");
            this.setOutput(true, "QCompass");
            this.setColour(230);
            this.setTooltip("Select a Qcompass.");
        }
    };



Blockly.Blocks['q_turtle_actions_reset'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Reset to");
        this.appendValueInput("POSITION").setCheck(null).setAlign("RIGHT").appendField("Position");
        this.appendValueInput("HEADING_Q_STR").setCheck("QCompass").setAlign("RIGHT").appendField("Heading Q Str");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Reset to' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('HEADING_Q_STR').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_qcompass"><field name="VALUE">N</field></shadow>`));
    }
};
Blockly.Blocks['q_turtle_actions_turtle_capture_brush'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Capture Brush");
        this.appendValueInput("SHAPE").setCheck(null).setAlign("RIGHT").appendField("Shape");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Capture Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['q_turtle_actions_turtle_extrude'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Extrude Brush");
        this.appendValueInput("LENGTH").setCheck("Number").setAlign("RIGHT").appendField("Length");
        this.appendValueInput("DIRECTION").setCheck("QDirection").setAlign("RIGHT").appendField("Direction");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Material");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Extrude Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('LENGTH').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
        this.getInput('DIRECTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_qdirection"><field name="VALUE">forward</field></shadow>`));
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
Blockly.Blocks['q_turtle_actions_turtle_move'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Move");
        this.appendValueInput("DIRECTION").setCheck("QDirection").setAlign("RIGHT").appendField("Direction");
        this.appendValueInput("DISTANCE").setCheck("Number").setAlign("RIGHT").appendField("Distance");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Move' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIRECTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_qdirection"><field name="VALUE">forward</field></shadow>`));
        this.getInput('DISTANCE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['q_turtle_actions_turtle_pop'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Pop State");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Pop State' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['q_turtle_actions_turtle_position'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Position");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Position' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['q_turtle_actions_turtle_push'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Push State");
        
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Push State' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['q_turtle_actions_turtle_rotate'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Rotate 90");
        this.appendValueInput("AXIS").setCheck("Axis").setAlign("RIGHT").appendField("Axis");
        this.appendValueInput("STEPS").setCheck("Number").setAlign("RIGHT").appendField("Steps (90 deg)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Rotate 90' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('AXIS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_axis"><field name="VALUE">y</field></shadow>`));
        this.getInput('STEPS').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">0</field></shadow>`));
    }
};
Blockly.Blocks['q_turtle_actions_turtle_set_brush'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Set Brush");
        this.appendValueInput("SHAPE").setCheck(null).setAlign("RIGHT").appendField("Shape");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Set Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['q_turtle_actions_turtle_stamp'] = {
    init: function() {
        this.appendDummyInput().appendField("QTurtle: Stamp Brush");
        this.appendValueInput("BLOCK_TYPE").setCheck("Block").setAlign("RIGHT").appendField("Material");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'QTurtle: Stamp Brush' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('BLOCK_TYPE').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                <shadow type="minecraft_picker_world">
                    <field name="MATERIAL_ID">STONE</field>
                </shadow>
        `));
    }
};
}