

export function defineTurtleShapesGenerators(pythonGenerator) {
pythonGenerator.forBlock['turtle_shapes_get_arithmetic_plane'] = function(block, generator) {
    const normal = generator.valueToCode(block, 'NORMAL', generator.ORDER_ATOMIC) || None;
    const dims = generator.valueToCode(block, 'DIMS', generator.ORDER_ATOMIC) || None;
    const code = `self.action_implementer.get_arithmetic_plane(normal=${normal}, dims=${dims})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['turtle_shapes_get_metric_ball'] = function(block, generator) {
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const metric = generator.valueToCode(block, 'METRIC', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.get_metric_ball(radius=${radius}, metric=${metric})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};

}