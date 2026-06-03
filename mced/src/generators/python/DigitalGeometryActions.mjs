export function defineDigitalGeometryActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_cube'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const side_length = generator.valueToCode(block, 'side_length', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
const rotation_matrix = generator.valueToCode(block, 'rotation_matrix', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_cube(${center}, ${side_length}, ${block_type}, ${rotation_matrix})\n`;
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

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_disc'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const normal = generator.valueToCode(block, 'normal', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_disc(${center}, ${radius}, ${normal}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_tube'] = function(block, generator) {
        const p1 = generator.valueToCode(block, 'p1', pythonGenerator.ORDER_ATOMIC) || 'None';
const p2 = generator.valueToCode(block, 'p2', pythonGenerator.ORDER_ATOMIC) || 'None';
const outer_thickness = generator.valueToCode(block, 'outer_thickness', pythonGenerator.ORDER_ATOMIC) || 'None';
const inner_thickness = generator.valueToCode(block, 'inner_thickness', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_tube(${p1}, ${p2}, ${outer_thickness}, ${inner_thickness}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_plane'] = function(block, generator) {
        const normal = generator.valueToCode(block, 'normal', pythonGenerator.ORDER_ATOMIC) || 'None';
const point_on_plane = generator.valueToCode(block, 'point_on_plane', pythonGenerator.ORDER_ATOMIC) || 'None';
const width = generator.valueToCode(block, 'width', pythonGenerator.ORDER_ATOMIC) || 'None';
const height = generator.valueToCode(block, 'height', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_plane(${normal}, ${point_on_plane}, ${width}, ${height}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['digitalgeometryactions_create_digital_ball'] = function(block, generator) {
        const center = generator.valueToCode(block, 'center', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const inner_radius = generator.valueToCode(block, 'inner_radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `DigitalGeometryActions.create_digital_ball(${center}, ${radius}, ${inner_radius}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}