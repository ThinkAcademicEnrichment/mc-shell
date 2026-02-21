import { MCED } from "../lib/constants.mjs";

export function defineDigitalGeometryBlocks(Blockly) {

    Blockly.Blocks['digitalgeometry_create_digital_cube'] = {
        init: function() {
            this.appendDummyInput().appendField("Place Digital Cube at [center] with Side [side_length]");
            this.appendValueInput('center').appendField('Center').setCheck('Vec3');
this.appendValueInput('side_length').appendField('Side Length').setCheck('Number');
this.appendValueInput('block_type').appendField('Material').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#364EE7");
            this.setTooltip("Fills a digital cube in the world.");
        }
    };

    Blockly.Blocks['digitalgeometry_create_digital_sphere'] = {
        init: function() {
            this.appendDummyInput().appendField("Place Digital Sphere at [center] with Radius [radius]");
            this.appendValueInput('center').appendField('Center').setCheck('Vec3');
this.appendValueInput('radius').appendField('Radius').setCheck('Number');
this.appendValueInput('block_type').appendField('Material').setCheck('Block');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#364EE7");
            this.setTooltip("Fills a digital sphere in the world.");
        }
    };
}