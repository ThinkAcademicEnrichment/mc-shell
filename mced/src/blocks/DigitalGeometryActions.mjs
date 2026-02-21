import { MCED } from "../lib/constants.mjs";

export function defineDigitalGeometryActionsBlocks(Blockly) {

    Blockly.Blocks['digitalgeometryactions_create_digital_cube'] = {
        init: function() {
            this.appendDummyInput().appendField("Create Digital Cube");
            this.appendValueInput('center').appendField('Center').setCheck('3DVector');
this.appendValueInput('side_length').appendField('Side Length').setCheck('Number');
this.appendValueInput('block_type').appendField('Block Type').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#364EE7");
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
            this.setColour("#364EE7");
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
            this.setColour("#364EE7");
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
            this.setColour("#364EE7");
            this.setTooltip("");
        }
    };
}