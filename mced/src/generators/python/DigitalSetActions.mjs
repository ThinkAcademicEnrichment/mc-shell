export function defineDigitalSetActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['digitalsetactions_add_voxel'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const x = generator.valueToCode(block, 'x', pythonGenerator.ORDER_ATOMIC) || 'None';
const y = generator.valueToCode(block, 'y', pythonGenerator.ORDER_ATOMIC) || 'None';
const z = generator.valueToCode(block, 'z', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.add_voxel(${target_set}, ${x}, ${y}, ${z})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_difference'] = function(block, generator) {
        const set_a = generator.valueToCode(block, 'set_a', pythonGenerator.ORDER_ATOMIC) || 'None';
const set_b = generator.valueToCode(block, 'set_b', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.difference(${set_a}, ${set_b})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_dilate'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.dilate(${target_set})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_empty_set'] = function(block, generator) {
        
        const code = `DigitalSetActions.empty_set()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_erode'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.erode(${target_set})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_extrude'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const dx = generator.valueToCode(block, 'dx', pythonGenerator.ORDER_ATOMIC) || 'None';
const dy = generator.valueToCode(block, 'dy', pythonGenerator.ORDER_ATOMIC) || 'None';
const dz = generator.valueToCode(block, 'dz', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.extrude(${target_set}, ${dx}, ${dy}, ${dz})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_intersection'] = function(block, generator) {
        const set_a = generator.valueToCode(block, 'set_a', pythonGenerator.ORDER_ATOMIC) || 'None';
const set_b = generator.valueToCode(block, 'set_b', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.intersection(${set_a}, ${set_b})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_is_empty'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.is_empty(${target_set})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_rotate'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const axis = generator.valueToCode(block, 'axis', pythonGenerator.ORDER_ATOMIC) || 'None';
const angle = generator.valueToCode(block, 'angle', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.rotate(${target_set}, ${axis}, ${angle})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_scale'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const factor = generator.valueToCode(block, 'factor', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.scale(${target_set}, ${factor})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_shear'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const axis_primary = generator.valueToCode(block, 'axis_primary', pythonGenerator.ORDER_ATOMIC) || 'None';
const axis_secondary = generator.valueToCode(block, 'axis_secondary', pythonGenerator.ORDER_ATOMIC) || 'None';
const factor = generator.valueToCode(block, 'factor', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.shear(${target_set}, ${axis_primary}, ${axis_secondary}, ${factor})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_shell'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.shell(${target_set})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_symmetric_difference'] = function(block, generator) {
        const set_a = generator.valueToCode(block, 'set_a', pythonGenerator.ORDER_ATOMIC) || 'None';
const set_b = generator.valueToCode(block, 'set_b', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.symmetric_difference(${set_a}, ${set_b})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_translate'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const dx = generator.valueToCode(block, 'dx', pythonGenerator.ORDER_ATOMIC) || 'None';
const dy = generator.valueToCode(block, 'dy', pythonGenerator.ORDER_ATOMIC) || 'None';
const dz = generator.valueToCode(block, 'dz', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.translate(${target_set}, ${dx}, ${dy}, ${dz})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_union'] = function(block, generator) {
        const set_a = generator.valueToCode(block, 'set_a', pythonGenerator.ORDER_ATOMIC) || 'None';
const set_b = generator.valueToCode(block, 'set_b', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.union(${set_a}, ${set_b})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_union_all'] = function(block, generator) {
        const sets = generator.valueToCode(block, 'sets', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.union_all(${sets})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalsetactions_voxel_count'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.voxel_count(${target_set})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}