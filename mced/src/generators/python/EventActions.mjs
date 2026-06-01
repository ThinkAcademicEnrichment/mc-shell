export function defineEventActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['eventactions_wait_for_right_block_hit'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_right_block_hit(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_left_block_hit'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_left_block_hit(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_block_place'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_block_place(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_block_break'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_block_break(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_chat'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_chat(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_projectile_hit_block'] = function(block, generator) {
        
        const code = `EventActions.wait_for_projectile_hit_block()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_projectile_hit_entity'] = function(block, generator) {
        
        const code = `EventActions.wait_for_projectile_hit_entity()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_projectile_launch'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_projectile_launch(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_player_death'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_player_death(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_player_respawn'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_player_respawn(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}