import { MCED } from "../lib/constants.mjs";

export function defineTurtleShapesBlocks(Blockly) {

    Blockly.Blocks['turtleshapes_get_metric_ball'] = {
        init: function() {
            this.appendDummyInput().appendField("Digital Shape: Sphere/Diamond/Cube");
            this.appendValueInput('radius').appendField('Radius').setCheck('Number');
this.appendValueInput('metric').appendField('Metric').setCheck('Metric');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#C9A65B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['turtleshapes_get_arithmetic_plane'] = {
        init: function() {
            this.appendDummyInput().appendField("Digital Shape: Arithmetic Plane (Square)");
            this.appendValueInput('normal').appendField('Normal').setCheck('3DVector');
this.appendValueInput('side_length').appendField('Side Length').setCheck('Number');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#C9A65B");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['turtleshapes_get_line'] = {
        init: function() {
            this.appendDummyInput().appendField("Digital Shape: Line");
            this.appendValueInput('p1').appendField('point_1').setCheck('3DVector');
this.appendValueInput('p2').appendField('point_2').setCheck('3DVector');
            this.setOutput(true, 'Digital_Set');
            this.setColour("#C9A65B");
            this.setTooltip("");
        }
    };
}