export function defineDigitalGeometryGenerators(pythonGenerator) {

    pythonGenerator.forBlock['digitalgeometry_create_digital_cube'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const side_length = generator.valueToCode(block, 'side_length', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `.create_digital_cube(${center}, ${side_length}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometry_create_digital_sphere'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `.create_digital_sphere(${center}, ${radius}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}