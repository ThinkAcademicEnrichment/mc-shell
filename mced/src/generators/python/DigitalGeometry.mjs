

export function defineDigitalGeometryGenerators(pythonGenerator) {
pythonGenerator.forBlock['digital_geometry_create_digital_ball'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || None;
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.create_digital_ball(center=${center}, radius=${radius}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_cube'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || None;
    const side_length = generator.valueToCode(block, 'SIDE_LENGTH', generator.ORDER_ATOMIC) || 0;
    const rotation_matrix = generator.valueToCode(block, 'ROTATION_MATRIX', generator.ORDER_ATOMIC) || None;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    const wall_thickness = generator.valueToCode(block, 'WALL_THICKNESS', generator.ORDER_ATOMIC) || 0.0;
    return `self.action_implementer.create_digital_cube(center=${center}, side_length=${side_length}, rotation_matrix=${rotation_matrix}, block_type=${block_type}, wall_thickness=${wall_thickness})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_disc'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || None;
    const normal = generator.valueToCode(block, 'NORMAL', generator.ORDER_ATOMIC) || None;
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.create_digital_disc(center=${center}, normal=${normal}, radius=${radius}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_line'] = function(block, generator) {
    const point1 = generator.valueToCode(block, 'POINT1', generator.ORDER_ATOMIC) || None;
    const point2 = generator.valueToCode(block, 'POINT2', generator.ORDER_ATOMIC) || None;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.create_digital_line(point1=${point1}, point2=${point2}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_plane'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || None;
    const normal = generator.valueToCode(block, 'NORMAL', generator.ORDER_ATOMIC) || None;
    const side_length = generator.valueToCode(block, 'SIDE_LENGTH', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.create_digital_plane(center=${center}, normal=${normal}, side_length=${side_length}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_sphere'] = function(block, generator) {
    const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || None;
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    const is_hollow = generator.valueToCode(block, 'IS_HOLLOW', generator.ORDER_ATOMIC) || true;
    return `self.action_implementer.create_digital_sphere(center=${center}, radius=${radius}, block_type=${block_type}, is_hollow=${is_hollow})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_tetrahedron'] = function(block, generator) {
    const p1 = generator.valueToCode(block, 'P1', generator.ORDER_ATOMIC) || None;
    const p2 = generator.valueToCode(block, 'P2', generator.ORDER_ATOMIC) || None;
    const p3 = generator.valueToCode(block, 'P3', generator.ORDER_ATOMIC) || None;
    const p4 = generator.valueToCode(block, 'P4', generator.ORDER_ATOMIC) || None;
    const inner_offset_factor = generator.valueToCode(block, 'INNER_OFFSET_FACTOR', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.create_digital_tetrahedron(p1=${p1}, p2=${p2}, p3=${p3}, p4=${p4}, inner_offset_factor=${inner_offset_factor}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['digital_geometry_create_digital_tube'] = function(block, generator) {
    const start = generator.valueToCode(block, 'START', generator.ORDER_ATOMIC) || None;
    const end = generator.valueToCode(block, 'END', generator.ORDER_ATOMIC) || None;
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    const is_hollow = generator.valueToCode(block, 'IS_HOLLOW', generator.ORDER_ATOMIC) || true;
    return `self.action_implementer.create_digital_tube(start=${start}, end=${end}, radius=${radius}, block_type=${block_type}, is_hollow=${is_hollow})\n`;
};

}