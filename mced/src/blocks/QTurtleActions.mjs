import { MCED } from "../lib/constants.mjs";

export function defineQTurtleActionsBlocks(Blockly) {

    Blockly.Blocks['qturtleactions_reset'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Reset to");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('heading_q_str').appendField('Facing').setCheck('QCompass');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("Resets the turtle to a specific position and aligns its Forward vector with the specified Global Q-Direction (e.g., 'N', 'NE', 'SWU').  It automatically recalculates the orthogonal(ish) Right and Up vectors to form a consistent basis frame.");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_capture_brush'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Capture Brush");
            this.appendValueInput('shape').appendField('Shape').setCheck('Digital_Set');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_extrude'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Extrude Brush");
            this.appendValueInput('length').appendField('Length').setCheck('Number');
this.appendValueInput('direction').appendField('Q-Heading').setCheck('QHeading');
this.appendValueInput('block_type').appendField('Material').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_move'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Move");
            this.appendValueInput('direction').appendField('Direction').setCheck('QHeading');
this.appendValueInput('distance').appendField('Distance').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_pop'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Pop State");
            
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_position'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Position");
            
            this.setOutput(true, '3DVector');
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_push'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Push State");
            
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_rotate'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Rotate 90");
            this.appendValueInput('axis').appendField('Axis').setCheck('Axis');
this.appendValueInput('steps').appendField('Steps (90 deg)').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_set_brush'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Set Brush");
            this.appendValueInput('shape').appendField('Shape').setCheck('Digital_Set');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['qturtleactions_turtle_stamp'] = {
        init: function() {
            this.appendDummyInput().appendField("QTurtle: Stamp Brush");
            this.appendValueInput('block_type').appendField('Material').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#F3BA2B");
            this.setTooltip("");
        }
    };
}