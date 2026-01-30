
export function defineWorldActionsGenerators(pythonGenerator) {
pythonGenerator.forBlock['world_actions_get_height'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const code = `self.action_implementer.get_height(position=${position})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['world_actions_post_to_chat'] = function(block, generator) {
    const message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.post_to_chat(message=${message})\n`;
};
pythonGenerator.forBlock['world_actions_set_block'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.set_block(position=${position}, block_type=${block_type})\n`;
};
}