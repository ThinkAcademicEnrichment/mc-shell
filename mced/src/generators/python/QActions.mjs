export function defineQActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['picker_timetype'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_time'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_weather'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_difficulty'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_gamemode'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_gamerule'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_integergamerule'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_locatetype'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_structure'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_biome'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_poi'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_effect'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_titleaction'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_metric'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_data_path'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['qactions_set_q_compass_direction'] = function(block, generator) {
        const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QActions.set_q_compass_direction(${direction})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qactions_get_q_direction'] = function(block, generator) {
        
        const code = `QActions.get_q_direction()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qactions_get_q_compass_direction'] = function(block, generator) {
        
        const code = `QActions.get_q_compass_direction()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qactions_get_height_at'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QActions.get_height_at(${position})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}