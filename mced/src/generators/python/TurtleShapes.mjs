
export function defineTurtleShapesGenerators(pythonGenerator) {

    pythonGenerator.forBlock['picker_metric'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };



pythonGenerator.forBlock['turtle_shapes_get_arithmetic_plane'] = function(block, generator) {
    const normal = generator.valueToCode(block, 'NORMAL', generator.ORDER_ATOMIC) || 'None';
    const side_length = generator.valueToCode(block, 'SIDE_LENGTH', generator.ORDER_ATOMIC) || 0;
    const code = `self.action_implementer.get_arithmetic_plane(normal=${normal}, side_length=${side_length})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['turtle_shapes_get_line'] = function(block, generator) {
    const p1 = generator.valueToCode(block, 'P1', generator.ORDER_ATOMIC) || 'None';
    const p2 = generator.valueToCode(block, 'P2', generator.ORDER_ATOMIC) || 'None';
    const code = `self.action_implementer.get_line(p1=${p1}, p2=${p2})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['turtle_shapes_get_metric_ball'] = function(block, generator) {
    const radius = generator.valueToCode(block, 'RADIUS', generator.ORDER_ATOMIC) || 0;
    const metric = generator.valueToCode(block, 'METRIC', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.get_metric_ball(radius=${radius}, metric=${metric})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
}