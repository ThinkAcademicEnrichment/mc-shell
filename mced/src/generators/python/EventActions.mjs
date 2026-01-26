
export function defineEventActionsGenerators(pythonGenerator) {
pythonGenerator.forBlock['event_actions_clear_events'] = function(block, generator) {
    
    return `self.action_implementer.clear_events()\n`;
};
pythonGenerator.forBlock['event_actions_wait_for_chat_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.wait_for_chat_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['event_actions_wait_for_projectile_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.wait_for_projectile_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['event_actions_wait_for_sword_strike_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.wait_for_sword_strike_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
}