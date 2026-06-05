import { MCED } from "../lib/constants.mjs";

export function definePlayerActionsBlocks(Blockly) {

    Blockly.Blocks['picker_qheading'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Local Q-Heading")
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
            this.setOutput(true, "QHeading");
            this.setColour("#95A5A6");
            this.setTooltip("");
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
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_qcompass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Global Q-Compass Direction")
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
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#61A1B0");
            this.setTooltip("Gets the exact XYZ position of the player.");
        }
    };

    Blockly.Blocks['playeractions_set_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Position to [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_tile_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Tile Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#61A1B0");
            this.setTooltip("Gets the integer block position of the player.");
        }
    };

    Blockly.Blocks['playeractions_set_tile_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Tile Position to [pos]");
            this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Direction");
            
            this.setOutput(true, '3DVector');
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_set_direction'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Direction to [dir]");
            this.appendValueInput('dir').appendField('Direction Vector').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_rotation'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Rotation");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_set_rotation'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Rotation to [yaw]");
            this.appendValueInput('yaw').appendField('Yaw').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_pitch'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Pitch");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_set_pitch'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Pitch to [pitch]");
            this.appendValueInput('pitch').appendField('Pitch').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_health'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Health");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("Returns the health of the player.");
        }
    };

    Blockly.Blocks['playeractions_set_health'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Health to [health]");
            this.appendValueInput('health').appendField('Health').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_food_level'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Food Level");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("Returns the food level of the player.");
        }
    };

    Blockly.Blocks['playeractions_set_food_level'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Food Level to [level]");
            this.appendValueInput('level').appendField('Food Level').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['playeractions_get_deaths'] = {
        init: function() {
            this.appendDummyInput().appendField("Get Death Count");
            
            this.setOutput(true, 'Number');
            this.setColour("#61A1B0");
            this.setTooltip("Returns the total number of times the player has died.");
        }
    };

    Blockly.Blocks['playeractions_send_title'] = {
        init: function() {
            this.appendDummyInput().appendField("Send Title to Screen");
            this.appendValueInput('title').appendField('Title').setCheck('String');
this.appendValueInput('subtitle').appendField('Subtitle').setCheck('String');
this.appendValueInput('stay').appendField('Stay (Ticks)').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#61A1B0");
            this.setTooltip("Sends a title and subtitle to the player's screen.");
        }
    };
}