import { MCED } from "../lib/constants.mjs";

export function definePlayerActionsBlocks(Blockly) {
Blockly.Blocks['player_actions_get_compass_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Compass Direction");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Compass Direction' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_get_direction'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Direction");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Direction' action.");
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
Blockly.Blocks['player_actions_get_tile_position'] = {
    init: function() {
        this.appendDummyInput().appendField("Get Player Tile Position");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Get Player Tile Position' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
Blockly.Blocks['player_actions_wait_for_sword_strike'] = {
    init: function() {
        this.appendDummyInput().appendField("Wait for Sword Strike Position");
        
        this.setOutput(true, "3DVector");
        this.setColour(65);
        this.setTooltip("An auto-generated block for the 'Wait for Sword Strike Position' action.");
        this.setInputsInline(false);

        // Configure shadow blocks directly
        
    }
};
}