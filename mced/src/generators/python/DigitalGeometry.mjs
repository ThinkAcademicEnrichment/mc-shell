
export function defineDigitalGeometryGenerators(pythonGenerator) {
pythonGenerator.forBlock['digital_geometry_create_digital_cube'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || 'None';
    const side_length = generator.valueToCode(block, 'SIDE_LENGTH', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.create_digital_cube(center=${center}, side_length=${side_length}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_disc'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || 'None';
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const normal = generator.valueToCode(block, 'NORMAL', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.create_digital_disc(center=${center}, radius=${radius}, normal=${normal}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_line'] = function(block, generator) {
    const point1 = generator.valueToCode(block, 'POINT1', generator.ORDER_ATOMIC) || 'None';
    const point2 = generator.valueToCode(block, 'POINT2', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.create_digital_line(point1=${point1}, point2=${point2}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_sphere'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || 'None';
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.create_digital_sphere(center=${center}, radius=${radius}, block_type=${block_type})\n`;
};
}