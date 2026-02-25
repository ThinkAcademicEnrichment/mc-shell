export function defineDigitalSetActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['digitalsetactions_difference'] = function(block, generator) {
        const set_a = generator.valueToCode(block, 'set_a', pythonGenerator.ORDER_ATOMIC) || 'None';
const set_b = generator.valueToCode(block, 'set_b', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.difference(${set_a}, ${set_b})\n`;
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

    pythonGenerator.forBlock['digitalsetactions_shear'] = function(block, generator) {
        const target_set = generator.valueToCode(block, 'target_set', pythonGenerator.ORDER_ATOMIC) || 'None';
const axis_primary = generator.valueToCode(block, 'axis_primary', pythonGenerator.ORDER_ATOMIC) || 'None';
const axis_secondary = generator.valueToCode(block, 'axis_secondary', pythonGenerator.ORDER_ATOMIC) || 'None';
const factor = generator.valueToCode(block, 'factor', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalSetActions.shear(${target_set}, ${axis_primary}, ${axis_secondary}, ${factor})\n`;
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
}