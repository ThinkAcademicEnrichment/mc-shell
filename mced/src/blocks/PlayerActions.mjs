import { MCED } from "../lib/constants.mjs";

export function definePlayerActionsBlocks(Blockly) {

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



Blockly.Blocks['player_actions_get_compass_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Compass Direction");
        
        this.setOutput(true, "Compass");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Compass Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_get_compass_direction_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Compass Direction for [player]");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setOutput(true, "Compass");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Compass Direction for [player]' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['player_actions_get_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Q Direction");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Q Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_get_position'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Position");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Position' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_get_q_compass_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player QCompass Direction");
        
        this.setOutput(true, "QCompass");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player QCompass Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_get_tile_position'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Tile Position");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Tile Position' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_get_tile_position_by_name'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Tile Position by Name");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player Name");
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Tile Position by Name' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
    }
};
Blockly.Blocks['player_actions_send_title'] = {
    init: function() {
        this.appendDummyInput().appendField("Send Title");
        this.appendValueInput("TITLE").setCheck("String").setAlign("RIGHT").appendField("Title Text");
        this.appendValueInput("SUBTITLE").setCheck("String").setAlign("RIGHT").appendField("Subtitle Text");
        this.appendValueInput("STAY").setCheck("Number").setAlign("RIGHT").appendField("Time Onscreen");
        this.appendValueInput("PLAYER_NAME").setCheck("String").setAlign("RIGHT").appendField("Player");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Send Title' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('TITLE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('SUBTITLE').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT"></field></shadow>`));
        this.getInput('STAY').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="math_number"><field name="NUM">70</field></shadow>`));
        this.getInput('PLAYER_NAME').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="text"><field name="TEXT">SELF</field></shadow>`));
    }
};
Blockly.Blocks['player_actions_set_compass_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Player Compass Direction");
        this.appendValueInput("DIR").setCheck(null).setAlign("RIGHT").appendField("Direction");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Player Compass Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_set_compass_q_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Player Q Compass Direction");
        this.appendValueInput("DIR").setCheck("QCompass").setAlign("RIGHT").appendField("Q Direction");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Player Q Compass Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIR').connection.setShadowDom(Blockly.utils.xml.textToDom(`<shadow type="picker_qcompass"><field name="VALUE">N</field></shadow>`));
    }
};
Blockly.Blocks['player_actions_set_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Direction");
        this.appendValueInput("DIRECTION").setCheck("3DVector").setAlign("RIGHT").appendField("Direction Vector");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('DIRECTION').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
    }
};
Blockly.Blocks['player_actions_set_position'] = {
    init: function() {
        this.appendDummyInput().appendField("Set Player Position");
        this.appendValueInput("POS").setCheck("3DVector").setAlign("RIGHT").appendField("Position");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Set Player Position' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        this.getInput('POS').connection.setShadowDom(Blockly.utils.xml.textToDom(`
                 <shadow type="minecraft_vector_3d">
                    <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                </shadow>
        `));
    }
};
Blockly.Blocks['player_actions_wait_for_sword_strike'] = {
    init: function() {
        this.appendDummyInput().appendField("Wait for Sword Strike Position (Legacy)");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Wait for Sword Strike Position (Legacy)' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
}