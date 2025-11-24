

export function defineTurtleActionsGenerators(pythonGenerator) {
pythonGenerator.forBlock['turtle_actions_get_arithmetic_plane'] = function(block, generator) {
    const normal = generator.valueToCode(block, 'NORMAL', generator.ORDER_ATOMIC) || None;
    const dims = generator.valueToCode(block, 'DIMS', generator.ORDER_ATOMIC) || None;
    const code = `self.action_implementer.get_arithmetic_plane(normal=${normal}, dims=${dims})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['turtle_actions_get_metric_ball'] = function(block, generator) {
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const metric = generator.valueToCode(block, 'METRIC', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.get_metric_ball(radius=${radius}, metric=${metric})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['turtle_actions_place_static_shape'] = function(block, generator) {
    const shape = generator.valueToCode(block, 'SHAPE', generator.ORDER_ATOMIC) || None;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.place_static_shape(shape=${shape}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_extrude'] = function(block, generator) {
    const length = generator.valueToCode(block, 'LENGTH', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.turtle_extrude(length=${length}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_move'] = function(block, generator) {
    const direction = generator.valueToCode(block, 'DIRECTION', generator.ORDER_ATOMIC) || '';
    const distance = generator.valueToCode(block, 'DISTANCE', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.turtle_move(direction=${direction}, distance=${distance})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_pop'] = function(block, generator) {
    
    return `self.action_implementer.turtle_pop()\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_push'] = function(block, generator) {
    
    return `self.action_implementer.turtle_push()\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_reset'] = function(block, generator) {
    
    return `self.action_implementer.turtle_reset()\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_rotate'] = function(block, generator) {
    const axis = generator.valueToCode(block, 'AXIS', generator.ORDER_ATOMIC) || '';
    const steps = generator.valueToCode(block, 'STEPS', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.turtle_rotate(axis=${axis}, steps=${steps})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_set_brush'] = function(block, generator) {
    const shape = generator.valueToCode(block, 'SHAPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.turtle_set_brush(shape=${shape})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_shear'] = function(block, generator) {
    const primary = generator.valueToCode(block, 'PRIMARY', generator.ORDER_ATOMIC) || '';
    const secondary = generator.valueToCode(block, 'SECONDARY', generator.ORDER_ATOMIC) || '';
    const factor = generator.valueToCode(block, 'FACTOR', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.turtle_shear(primary=${primary}, secondary=${secondary}, factor=${factor})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_stamp'] = function(block, generator) {
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.turtle_stamp(block_type=${block_type})\n`;
};

}