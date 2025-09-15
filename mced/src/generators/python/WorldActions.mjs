

export function defineWorldActionsGenerators(pythonGenerator) {
pythonGenerator.forBlock['world_actions_create_explosion'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || None;
    const power = generator.valueToCode(block, 'POWER', generator.ORDER_ATOMIC) || 0;
    return `self.action_implementer.create_explosion(position=${position}, power=${power})\n`;
};
pythonGenerator.forBlock['world_actions_get_block'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || None;
    const code = `self.action_implementer.get_block(position=${position})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['world_actions_get_height'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || None;
    const code = `self.action_implementer.get_height(position=${position})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['world_actions_post_to_chat'] = function(block, generator) {
    const message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.post_to_chat(message=${message})\n`;
};
pythonGenerator.forBlock['world_actions_set_block'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || None;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.set_block(position=${position}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['world_actions_set_blocks'] = function(block, generator) {
    const position_1 = generator.valueToCode(block, 'POSITION_1', generator.ORDER_ATOMIC) || None;
    const position_2 = generator.valueToCode(block, 'POSITION_2', generator.ORDER_ATOMIC) || None;
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.set_blocks(position_1=${position_1}, position_2=${position_2}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['world_actions_spawn_entity'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || None;
    const entity = generator.valueToCode(block, 'ENTITY', generator.ORDER_ATOMIC) || None;
    return `self.action_implementer.spawn_entity(position=${position}, entity=${entity})\n`;
};

}