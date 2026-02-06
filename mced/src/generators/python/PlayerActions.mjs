
export function definePlayerActionsGenerators(pythonGenerator) {

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



pythonGenerator.forBlock['player_actions_get_compass_direction'] = function(block, generator) {
    
    const code = `self.action_implementer.get_compass_direction()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_get_compass_direction_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_compass_direction_by_name(player_name=${player_name})`;
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
pythonGenerator.forBlock['player_actions_get_q_compass_direction'] = function(block, generator) {
    
    const code = `self.action_implementer.get_q_compass_direction()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_get_tile_position'] = function(block, generator) {
    
    const code = `self.action_implementer.get_tile_position()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_get_tile_position_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.get_tile_position_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['player_actions_send_title'] = function(block, generator) {
    const title = generator.valueToCode(block, 'TITLE', generator.ORDER_ATOMIC) || '';
    const subtitle = generator.valueToCode(block, 'SUBTITLE', generator.ORDER_ATOMIC) || '';
    const stay = generator.valueToCode(block, 'STAY', generator.ORDER_ATOMIC) || 70;
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.send_title(title=${title}, subtitle=${subtitle}, stay=${stay}, player_name=${player_name})\n`;
};
pythonGenerator.forBlock['player_actions_set_compass_direction'] = function(block, generator) {
    const dir = generator.valueToCode(block, 'DIR', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.set_compass_direction(dir=${dir})\n`;
};
pythonGenerator.forBlock['player_actions_set_compass_q_direction'] = function(block, generator) {
    const dir = generator.valueToCode(block, 'DIR', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.set_compass_q_direction(dir=${dir})\n`;
};
pythonGenerator.forBlock['player_actions_set_direction'] = function(block, generator) {
    const direction = generator.valueToCode(block, 'DIRECTION', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.set_direction(direction=${direction})\n`;
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