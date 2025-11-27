
export function definePlayerActionsGenerators(pythonGenerator) {
pythonGenerator.forBlock['player_actions_get_compass_direction'] = function(block, generator) {
    
    const code = `self.action_implementer.get_compass_direction()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_get_direction'] = function(block, generator) {
    
    const code = `self.action_implementer.get_direction()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_get_position'] = function(block, generator) {
    
    const code = `self.action_implementer.get_position()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_get_tile_position'] = function(block, generator) {
    
    const code = `self.action_implementer.get_tile_position()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_set_compass_direction'] = function(block, generator) {
    const dir = generator.valueToCode(block, 'DIR', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.set_compass_direction(dir=${dir})\n`;
};
pythonGenerator.forBlock['player_actions_set_position'] = function(block, generator) {
    const pos = generator.valueToCode(block, 'POS', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.set_position(pos=${pos})\n`;
};
pythonGenerator.forBlock['player_actions_wait_for_sword_strike'] = function(block, generator) {
    
    const code = `self.action_implementer.wait_for_sword_strike()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
}