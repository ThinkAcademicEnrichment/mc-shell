export function definePlayerActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['playeractions_get_direction'] = function(block, generator) {
        
        const code = `PlayerActions.get_direction()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_get_height'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PlayerActions.get_height(${position})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_get_position'] = function(block, generator) {
        
        const code = `PlayerActions.get_position()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_get_q_compass_direction'] = function(block, generator) {
        
        const code = `PlayerActions.get_q_compass_direction()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_get_q_direction'] = function(block, generator) {
        
        const code = `PlayerActions.get_q_direction()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_get_tile_position'] = function(block, generator) {
        
        const code = `PlayerActions.get_tile_position()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_set_direction'] = function(block, generator) {
        const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PlayerActions.set_direction(${direction})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_set_position'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PlayerActions.set_position(${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_set_q_compass_direction'] = function(block, generator) {
        const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PlayerActions.set_q_compass_direction(${direction})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['playeractions_set_tile_position'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `PlayerActions.set_tile_position(${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}