import { MCED } from "../lib/constants.mjs";

export function defineTurtleShapesBlocks(Blockly) {

    Blockly.Blocks['turtleshapes_get_arithmetic_plane'] = {
        init: function() {
            this.appendDummyInput().appendField("Digital Shape: Arithmetic Plane");
            this.appendValueInput('normal').appendField('Normal').setCheck('Vec3');
this.appendValueInput('side_length').appendField('Side Length').setCheck('Number');
            this.setOutput(true, 'DigitalSet');
            this.setColour("#F3BA2B");
            this.setTooltip("Generates a discrete square plane coordinate set.");
        }
    };

    Blockly.Blocks['turtleshapes_get_line'] = {
        init: function() {
            this.appendDummyInput().appendField("Digital Shape: Line");
            this.appendValueInput('p1').appendField('Point 1').setCheck('Vec3');
this.appendValueInput('p2').appendField('Point 2').setCheck('Vec3');
            this.setOutput(true, 'DigitalSet');
            this.setColour("#F3BA2B");
            this.setTooltip("Generates a discrete linear path between two points.");
        }
    };

    Blockly.Blocks['turtleshapes_get_metric_ball'] = {
        init: function() {
            this.appendDummyInput().appendField("Digital Shape: Sphere/Diamond/Cube");
            this.appendValueInput('radius').appendField('Radius').setCheck('Number');
this.appendValueInput('metric').appendField('Metric').setCheck('Metric');
            this.setOutput(true, 'DigitalSet');
            this.setColour("#F3BA2B");
            this.setTooltip("Generates a ball of voxels using a specific metric distance.");
        }
    };
}