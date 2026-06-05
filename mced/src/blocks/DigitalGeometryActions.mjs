import { MCED } from "../lib/constants.mjs";

export function defineDigitalGeometryActionsBlocks(Blockly) {

    Blockly.Blocks['digitalgeometryactions_create_digital_cube'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Cube");
            this.appendValueInput('center').appendField('Center').setCheck('3DVector');
this.appendValueInput('side_length').appendField('Side Length').setCheck('Number');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
this.appendValueInput('rotation_matrix').appendField('Rotation Matrix').setCheck('3DMatrix');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalgeometryactions_create_digital_line'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Line");
            this.appendValueInput('point1').appendField('Start Point').setCheck('3DVector');
this.appendValueInput('point2').appendField('End Point').setCheck('3DVector');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalgeometryactions_create_digital_sphere'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Sphere");
            this.appendValueInput('center').appendField('Center').setCheck('3DVector');
this.appendValueInput('radius').appendField('Radius').setCheck('Number');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalgeometryactions_create_digital_disc'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Disc");
            this.appendValueInput('center').appendField('Center').setCheck('3DVector');
this.appendValueInput('radius').appendField('Radius').setCheck('Number');
this.appendValueInput('normal').appendField('Normal').setCheck('3DVector');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalgeometryactions_create_digital_tube'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Tube");
            this.appendValueInput('p1').appendField('Start Point').setCheck('3DVector');
this.appendValueInput('p2').appendField('End Point').setCheck('3DVector');
this.appendValueInput('outer_thickness').appendField('Outer Thickness (Radius)').setCheck('Number');
this.appendValueInput('inner_thickness').appendField('Inner Thickness (Radius)').setCheck('Number');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalgeometryactions_create_digital_plane'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Plane");
            this.appendValueInput('normal').appendField('Normal').setCheck('3DVector');
this.appendValueInput('point_on_plane').appendField('Point on Plane').setCheck('3DVector');
this.appendValueInput('width').appendField('Width').setCheck('Number');
this.appendValueInput('height').appendField('Height').setCheck('Number');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['digitalgeometryactions_create_digital_ball'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Ball");
            this.appendValueInput('center').appendField('Center').setCheck('3DVector');
this.appendValueInput('radius').appendField('Outer Radius').setCheck('Number');
this.appendValueInput('inner_radius').appendField('Inner Radius').setCheck('Number');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5B7BA1");
            this.setTooltip("");
        }
    };
}