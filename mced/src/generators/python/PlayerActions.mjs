
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
pythonGenerator.forBlock['player_actions_wait_for_sword_strike'] = function(block, generator) {
    
    const code = `self.action_implementer.wait_for_sword_strike()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
}