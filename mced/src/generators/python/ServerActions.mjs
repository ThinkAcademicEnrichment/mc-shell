export function defineServerActionsGenerators(pythonGenerator) {

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

    pythonGenerator.forBlock['picker_qheading'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_axis'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_qcompass'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['serveractions_server_apply_effect'] = function(block, generator) {
        const effect = generator.valueToCode(block, 'effect', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
const seconds = generator.valueToCode(block, 'seconds', pythonGenerator.ORDER_ATOMIC) || 'None';
const amplifier = generator.valueToCode(block, 'amplifier', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_apply_effect(${effect}, ${target}, ${seconds}, ${amplifier})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_clear_inventory'] = function(block, generator) {
        const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_clear_inventory(${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_damage'] = function(block, generator) {
        const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
const amount = generator.valueToCode(block, 'amount', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_damage(${target}, ${amount})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_execute_command'] = function(block, generator) {
        const command = generator.valueToCode(block, 'command', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_execute_command(${command})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_gamemode_set'] = function(block, generator) {
        const gamemode = generator.valueToCode(block, 'gamemode', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_gamemode_set(${gamemode}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_gamerule_set'] = function(block, generator) {
        const rule = generator.valueToCode(block, 'rule', pythonGenerator.ORDER_ATOMIC) || 'None';
const value = generator.valueToCode(block, 'value', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_gamerule_set(${rule}, ${value})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_give_item'] = function(block, generator) {
        const item = generator.valueToCode(block, 'item', pythonGenerator.ORDER_ATOMIC) || 'None';
const count = generator.valueToCode(block, 'count', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_give_item(${item}, ${count}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_locate_structure'] = function(block, generator) {
        const structure = generator.valueToCode(block, 'structure', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_locate_structure(${structure})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_show_title'] = function(block, generator) {
        const text = generator.valueToCode(block, 'text', pythonGenerator.ORDER_ATOMIC) || 'None';
const action = generator.valueToCode(block, 'action', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_show_title(${text}, ${action}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_summon'] = function(block, generator) {
        const entity = generator.valueToCode(block, 'entity', pythonGenerator.ORDER_ATOMIC) || 'None';
const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_summon(${entity}, ${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_teleport'] = function(block, generator) {
        const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_teleport(${target}, ${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_time_set'] = function(block, generator) {
        const time = generator.valueToCode(block, 'time', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_time_set(${time})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_weather_set'] = function(block, generator) {
        const weather = generator.valueToCode(block, 'weather', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_weather_set(${weather})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}