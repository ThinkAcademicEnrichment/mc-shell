
export function defineTurtleActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['direction_picker'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['axis_picker'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['compass_picker'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

pythonGenerator.forBlock['turtle_actions_place_static_shape'] = function(block, generator) {
    const shape = generator.valueToCode(block, 'SHAPE', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.place_static_shape(shape=${shape}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_extrude'] = function(block, generator) {
    const length = generator.valueToCode(block, 'LENGTH', generator.ORDER_ATOMIC) || 0;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
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
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const orientation = generator.valueToCode(block, 'ORIENTATION', generator.ORDER_ATOMIC) || 'N';
    return `self.action_implementer.turtle_reset(position=${position}, orientation=${orientation})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_rotate'] = function(block, generator) {
    const axis = generator.valueToCode(block, 'AXIS', generator.ORDER_ATOMIC) || '';
    const steps = generator.valueToCode(block, 'STEPS', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.turtle_rotate(axis=${axis}, steps=${steps})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_set_brush'] = function(block, generator) {
    const shape = generator.valueToCode(block, 'SHAPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.turtle_set_brush(shape=${shape})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_shear'] = function(block, generator) {
    const primary = generator.valueToCode(block, 'PRIMARY', generator.ORDER_ATOMIC) || '';
    const secondary = generator.valueToCode(block, 'SECONDARY', generator.ORDER_ATOMIC) || '';
    const factor = generator.valueToCode(block, 'FACTOR', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.turtle_shear(primary=${primary}, secondary=${secondary}, factor=${factor})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_stamp'] = function(block, generator) {
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.turtle_stamp(block_type=${block_type})\n`;
};
}