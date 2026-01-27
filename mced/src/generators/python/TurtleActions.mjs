
export function defineTurtleActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['picker_direction'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['picker_axis'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['picker_compass'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };



pythonGenerator.forBlock['turtle_actions_turtle_extrude'] = function(block, generator) {
    const length = generator.valueToCode(block, 'LENGTH', generator.ORDER_ATOMIC) || 0;
    const direction = generator.valueToCode(block, 'DIRECTION', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.turtle_extrude(length=${length}, direction=${direction}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_move'] = function(block, generator) {
    const direction = generator.valueToCode(block, 'DIRECTION', generator.ORDER_ATOMIC) || 'None';
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
    const axis = generator.valueToCode(block, 'AXIS', generator.ORDER_ATOMIC) || 'None';
    const steps = generator.valueToCode(block, 'STEPS', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.turtle_rotate(axis=${axis}, steps=${steps})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_set_brush'] = function(block, generator) {
    const shape = generator.valueToCode(block, 'SHAPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.turtle_set_brush(shape=${shape})\n`;
};
pythonGenerator.forBlock['turtle_actions_turtle_stamp'] = function(block, generator) {
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.turtle_stamp(block_type=${block_type})\n`;
};
}