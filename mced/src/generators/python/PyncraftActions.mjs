
export function definePyncraftActionsGenerators(pythonGenerator) {
pythonGenerator.forBlock['pyncraft_actions_camera_set_fixed_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.camera_set_fixed_by_name(player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_camera_set_follow_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.camera_set_follow_by_name(player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_camera_set_normal_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.camera_set_normal_by_name(player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_create_explosion'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const power = generator.valueToCode(block, 'POWER', generator.ORDER_ATOMIC) || 4;
    return `self.action_implementer.create_explosion(position=${position}, power=${power})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_get_block'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const code = `self.action_implementer.get_block(position=${position})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_block_with_data'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const code = `self.action_implementer.get_block_with_data(position=${position})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_direction_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_direction_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_food_level_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_food_level_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_health_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_health_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_height'] = function(block, generator) {
    const x = generator.valueToCode(block, 'X', generator.ORDER_ATOMIC) || 0;
    const z = generator.valueToCode(block, 'Z', generator.ORDER_ATOMIC) || 0;
    const code = `self.action_implementer.get_height(x=${x}, z=${z})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_pitch_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_pitch_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_player_entity_id'] = function(block, generator) {
    const name = generator.valueToCode(block, 'NAME', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.get_player_entity_id(name=${name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_player_entity_ids'] = function(block, generator) {
    
    const code = `self.action_implementer.get_player_entity_ids()`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_position_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_position_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_rotation_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_rotation_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_tile_position_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_tile_position_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_get_yaw_by_name'] = function(block, generator) {
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    const code = `self.action_implementer.get_yaw_by_name(player_name=${player_name})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_restore_checkpoint'] = function(block, generator) {
    
    return `self.action_implementer.restore_checkpoint()\n`;
};
pythonGenerator.forBlock['pyncraft_actions_save_checkpoint'] = function(block, generator) {
    
    return `self.action_implementer.save_checkpoint()\n`;
};
pythonGenerator.forBlock['pyncraft_actions_send_title_by_name'] = function(block, generator) {
    const title = generator.valueToCode(block, 'TITLE', generator.ORDER_ATOMIC) || '';
    const subtitle = generator.valueToCode(block, 'SUBTITLE', generator.ORDER_ATOMIC) || '';
    const stay = generator.valueToCode(block, 'STAY', generator.ORDER_ATOMIC) || 70;
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.send_title_by_name(title=${title}, subtitle=${subtitle}, stay=${stay}, player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_block'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.set_block(position=${position}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_blocks'] = function(block, generator) {
    const p1 = generator.valueToCode(block, 'P1', generator.ORDER_ATOMIC) || 'None';
    const p2 = generator.valueToCode(block, 'P2', generator.ORDER_ATOMIC) || 'None';
    const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.set_blocks(p1=${p1}, p2=${p2}, block_type=${block_type})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_direction_by_name'] = function(block, generator) {
    const direction = generator.valueToCode(block, 'DIRECTION', generator.ORDER_ATOMIC) || 'None';
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.set_direction_by_name(direction=${direction}, player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_position_by_name'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.set_position_by_name(position=${position}, player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_rotation_by_name'] = function(block, generator) {
    const yaw = generator.valueToCode(block, 'YAW', generator.ORDER_ATOMIC) || 0;
    const pitch = generator.valueToCode(block, 'PITCH', generator.ORDER_ATOMIC) || 0;
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.set_rotation_by_name(yaw=${yaw}, pitch=${pitch}, player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_sign'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const sign_type = generator.valueToCode(block, 'SIGN_TYPE', generator.ORDER_ATOMIC) || 'OAK';
    const direction = generator.valueToCode(block, 'DIRECTION', generator.ORDER_ATOMIC) || 0;
    const line1 = generator.valueToCode(block, 'LINE1', generator.ORDER_ATOMIC) || '';
    const line2 = generator.valueToCode(block, 'LINE2', generator.ORDER_ATOMIC) || '';
    const line3 = generator.valueToCode(block, 'LINE3', generator.ORDER_ATOMIC) || '';
    const line4 = generator.valueToCode(block, 'LINE4', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.set_sign(position=${position}, sign_type=${sign_type}, direction=${direction}, line1=${line1}, line2=${line2}, line3=${line3}, line4=${line4})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_set_tile_position_by_name'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const player_name = generator.valueToCode(block, 'PLAYER_NAME', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.set_tile_position_by_name(position=${position}, player_name=${player_name})\n`;
};
pythonGenerator.forBlock['pyncraft_actions_spawn_entity'] = function(block, generator) {
    const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || 'None';
    const entity_id = generator.valueToCode(block, 'ENTITY_ID', generator.ORDER_ATOMIC) || 0;
    const code = `self.action_implementer.spawn_entity(position=${position}, entity_id=${entity_id})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['pyncraft_actions_world_setting'] = function(block, generator) {
    const setting = generator.valueToCode(block, 'SETTING', generator.ORDER_ATOMIC) || '';
    const status = generator.valueToCode(block, 'STATUS', generator.ORDER_ATOMIC) || true;
    return `self.action_implementer.world_setting(setting=${setting}, status=${status})\n`;
};
}