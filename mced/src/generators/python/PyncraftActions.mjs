export function definePyncraftActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['pyncraftactions_get_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_block(${position})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_get_entities_in_radius'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_entities_in_radius(${position}, ${radius})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_get_food_level_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_food_level_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_get_health_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_health_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_get_highest_block_y'] = function(block, generator) {
        const x = generator.valueToCode(block, 'x', pythonGenerator.ORDER_ATOMIC) || 'None';
const z = generator.valueToCode(block, 'z', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_highest_block_y(${x}, ${z})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_get_position_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_position_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_get_tile_position_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.get_tile_position_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_send_title_by_name'] = function(block, generator) {
        const title = generator.valueToCode(block, 'title', pythonGenerator.ORDER_ATOMIC) || 'None';
const subtitle = generator.valueToCode(block, 'subtitle', pythonGenerator.ORDER_ATOMIC) || 'None';
const stay = generator.valueToCode(block, 'stay', pythonGenerator.ORDER_ATOMIC) || 'None';
const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.send_title_by_name(${title}, ${subtitle}, ${stay}, ${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_set_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.set_block(${position}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_set_blocks'] = function(block, generator) {
        const pos1 = generator.valueToCode(block, 'pos1', pythonGenerator.ORDER_ATOMIC) || 'None';
const pos2 = generator.valueToCode(block, 'pos2', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.set_blocks(${pos1}, ${pos2}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_set_sign'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const line1 = generator.valueToCode(block, 'line1', pythonGenerator.ORDER_ATOMIC) || 'None';
const line2 = generator.valueToCode(block, 'line2', pythonGenerator.ORDER_ATOMIC) || 'None';
const line3 = generator.valueToCode(block, 'line3', pythonGenerator.ORDER_ATOMIC) || 'None';
const line4 = generator.valueToCode(block, 'line4', pythonGenerator.ORDER_ATOMIC) || 'None';
const sign_type = generator.valueToCode(block, 'sign_type', pythonGenerator.ORDER_ATOMIC) || 'None';
const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.set_sign(${position}, ${line1}, ${line2}, ${line3}, ${line4}, ${sign_type}, ${direction})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['pyncraftactions_spawn_entity'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const entity_id = generator.valueToCode(block, 'entity_id', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PyncraftActions.spawn_entity(${position}, ${entity_id})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}