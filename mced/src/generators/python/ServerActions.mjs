export function defineServerActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['serveractions_server_time_query'] = function(block, generator) {
        const time_type = generator.valueToCode(block, 'time_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_time_query(${time_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_time_set'] = function(block, generator) {
        const time_of_day = generator.valueToCode(block, 'time_of_day', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_time_set(${time_of_day})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_set_time'] = function(block, generator) {
        const time = generator.valueToCode(block, 'time', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_set_time(${time})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_weather_set'] = function(block, generator) {
        const weather = generator.valueToCode(block, 'weather', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_weather_set(${weather})\n`;
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

    pythonGenerator.forBlock['serveractions_server_gamerule_integer_set'] = function(block, generator) {
        const rule = generator.valueToCode(block, 'rule', pythonGenerator.ORDER_ATOMIC) || 'None';
const value = generator.valueToCode(block, 'value', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_gamerule_integer_set(${rule}, ${value})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_locate_structure'] = function(block, generator) {
        const structure = generator.valueToCode(block, 'structure', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_locate_structure(${structure})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_execute_command'] = function(block, generator) {
        const command = generator.valueToCode(block, 'command', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_execute_command(${command})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_clear_inventory'] = function(block, generator) {
        const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_clear_inventory(${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_give_item'] = function(block, generator) {
        const item = generator.valueToCode(block, 'item', pythonGenerator.ORDER_ATOMIC) || 'None';
const count = generator.valueToCode(block, 'count', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_give_item(${item}, ${count}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_give_block'] = function(block, generator) {
        const item = generator.valueToCode(block, 'item', pythonGenerator.ORDER_ATOMIC) || 'None';
const count = generator.valueToCode(block, 'count', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_give_block(${item}, ${count}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_give_projectile'] = function(block, generator) {
        const item = generator.valueToCode(block, 'item', pythonGenerator.ORDER_ATOMIC) || 'None';
const count = generator.valueToCode(block, 'count', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_give_projectile(${item}, ${count}, ${target})\n`;
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

    pythonGenerator.forBlock['serveractions_server_player_data_get_pos'] = function(block, generator) {
        const player_name = generator.valueToCode(block, 'player_name', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_player_data_get_pos(${player_name})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_apply_effect'] = function(block, generator) {
        const effect = generator.valueToCode(block, 'effect', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
const seconds = generator.valueToCode(block, 'seconds', pythonGenerator.ORDER_ATOMIC) || 'None';
const amplifier = generator.valueToCode(block, 'amplifier', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_apply_effect(${effect}, ${target}, ${seconds}, ${amplifier})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_show_title'] = function(block, generator) {
        const text = generator.valueToCode(block, 'text', pythonGenerator.ORDER_ATOMIC) || 'None';
const action = generator.valueToCode(block, 'action', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_show_title(${text}, ${action}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_damage'] = function(block, generator) {
        const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
const amount = generator.valueToCode(block, 'amount', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_damage(${target}, ${amount})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_list'] = function(block, generator) {
        
        const code = `ServerActions.server_list()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['serveractions_server_spawnpoint'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const target = generator.valueToCode(block, 'target', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ServerActions.server_spawnpoint(${position}, ${target})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}