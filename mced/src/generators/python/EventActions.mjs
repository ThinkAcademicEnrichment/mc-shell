export function defineEventActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['eventactions_clear_events'] = function(block, generator) {
        
        const code = `EventActions.clear_events()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_chat_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_chat_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_projectile_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_projectile_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['eventactions_wait_for_sword_strike_by_name'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `EventActions.wait_for_sword_strike_by_name(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}