
export function defineServerActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['picker_time'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['picker_weather'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['picker_difficulty'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['picker_gamemode'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };


    pythonGenerator.forBlock['picker_gamerule'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };



pythonGenerator.forBlock['server_actions_server_clear_inventory'] = function(block, generator) {
    const target = generator.valueToCode(block, 'TARGET', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.server_clear_inventory(target=${target})\n`;
};
pythonGenerator.forBlock['server_actions_server_execute_command'] = function(block, generator) {
    const command = generator.valueToCode(block, 'COMMAND', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.server_execute_command(command=${command})\n`;
};
pythonGenerator.forBlock['server_actions_server_locate'] = function(block, generator) {
    const structure = generator.valueToCode(block, 'STRUCTURE', generator.ORDER_ATOMIC) || '';
    return `self.action_implementer.server_locate(structure=${structure})\n`;
};
pythonGenerator.forBlock['server_actions_server_set_difficulty'] = function(block, generator) {
    const difficulty_option = generator.valueToCode(block, 'DIFFICULTY_OPTION', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.server_set_difficulty(difficulty_option=${difficulty_option})\n`;
};
pythonGenerator.forBlock['server_actions_server_set_gamemode'] = function(block, generator) {
    const mode = generator.valueToCode(block, 'MODE', generator.ORDER_ATOMIC) || 'None';
    const target = generator.valueToCode(block, 'TARGET', generator.ORDER_ATOMIC) || 'SELF';
    return `self.action_implementer.server_set_gamemode(mode=${mode}, target=${target})\n`;
};
pythonGenerator.forBlock['server_actions_server_set_gamerule'] = function(block, generator) {
    const rule = generator.valueToCode(block, 'RULE', generator.ORDER_ATOMIC) || 'None';
    const value = generator.valueToCode(block, 'VALUE', generator.ORDER_ATOMIC) || true;
    return `self.action_implementer.server_set_gamerule(rule=${rule}, value=${value})\n`;
};
pythonGenerator.forBlock['server_actions_server_set_time'] = function(block, generator) {
    const time_option = generator.valueToCode(block, 'TIME_OPTION', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.server_set_time(time_option=${time_option})\n`;
};
pythonGenerator.forBlock['server_actions_server_set_weather'] = function(block, generator) {
    const weather_option = generator.valueToCode(block, 'WEATHER_OPTION', generator.ORDER_ATOMIC) || 'None';
    return `self.action_implementer.server_set_weather(weather_option=${weather_option})\n`;
};
}