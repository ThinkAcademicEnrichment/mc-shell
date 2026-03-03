export function defineEventActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['eventactions_clear_events'] = function(block, generator) {
        
        const code = `EventActions.clear_events()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_left_block_hit_by_player'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_left_block_hit_by_player(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_player_death'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_player_death(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}