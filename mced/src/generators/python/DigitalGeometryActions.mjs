export function defineDigitalGeometryActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_cube'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const side_length = generator.valueToCode(block, 'side_length', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_cube(${center}, ${side_length}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_disc'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const normal = generator.valueToCode(block, 'normal', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_disc(${center}, ${radius}, ${normal}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_line'] = function(block, generator) {
        const point1 = generator.valueToCode(block, 'point1', pythonGenerator.ORDER_ATOMIC) || 'None';
const point2 = generator.valueToCode(block, 'point2', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_line(${point1}, ${point2}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_sphere'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_sphere(${center}, ${radius}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}