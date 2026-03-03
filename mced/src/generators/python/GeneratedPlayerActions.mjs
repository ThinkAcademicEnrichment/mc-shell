export function defineGeneratedPlayerActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['generatedplayeractions_get_deaths'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_deaths()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_direction'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_direction()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_food_level'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_food_level()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_health'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_health()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_pitch'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_pitch()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_pos'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_pos()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_rotation'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_rotation()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_get_tile_pos'] = function(block, generator) {
        
        const code = `GeneratedPlayerActions.get_tile_pos()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_send_title'] = function(block, generator) {
        const title = generator.valueToCode(block, 'title', pythonGenerator.ORDER_ATOMIC) || 'None';
const subtitle = generator.valueToCode(block, 'subtitle', pythonGenerator.ORDER_ATOMIC) || 'None';
const stay = generator.valueToCode(block, 'stay', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.send_title(${title}, ${subtitle}, ${stay})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_direction'] = function(block, generator) {
        const dir = generator.valueToCode(block, 'dir', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_direction(${dir})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_food_level'] = function(block, generator) {
        const level = generator.valueToCode(block, 'level', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_food_level(${level})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_health'] = function(block, generator) {
        const health = generator.valueToCode(block, 'health', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_health(${health})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_pitch'] = function(block, generator) {
        const pitch = generator.valueToCode(block, 'pitch', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_pitch(${pitch})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_pos'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_pos(${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_rotation'] = function(block, generator) {
        const yaw = generator.valueToCode(block, 'yaw', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_rotation(${yaw})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['generatedplayeractions_set_tile_pos'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedPlayerActions.set_tile_pos(${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}