export function defineWorldActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['worldactions_get_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.get_block(${position})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_set_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.set_block(${position}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_get_blocks'] = function(block, generator) {
        const pos1 = generator.valueToCode(block, 'pos1', pythonGenerator.ORDER_ATOMIC) || 'None';
const pos2 = generator.valueToCode(block, 'pos2', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.get_blocks(${pos1}, ${pos2})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_set_blocks'] = function(block, generator) {
        const pos1 = generator.valueToCode(block, 'pos1', pythonGenerator.ORDER_ATOMIC) || 'None';
const pos2 = generator.valueToCode(block, 'pos2', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.set_blocks(${pos1}, ${pos2}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_get_height'] = function(block, generator) {
        const x = generator.valueToCode(block, 'x', pythonGenerator.ORDER_ATOMIC) || 'None';
const z = generator.valueToCode(block, 'z', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.get_height(${x}, ${z})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_spawn_entity'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const entity_id = generator.valueToCode(block, 'entity_id', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.spawn_entity(${position}, ${entity_id})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_remove_entity'] = function(block, generator) {
        const entity_id = generator.valueToCode(block, 'entity_id', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.remove_entity(${entity_id})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_get_entities_in_radius'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.get_entities_in_radius(${position}, ${radius})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_create_explosion'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
const power = generator.valueToCode(block, 'power', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.create_explosion(${pos}, ${power})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_set_sign'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const line1 = generator.valueToCode(block, 'line1', pythonGenerator.ORDER_ATOMIC) || 'None';
const line2 = generator.valueToCode(block, 'line2', pythonGenerator.ORDER_ATOMIC) || 'None';
const line3 = generator.valueToCode(block, 'line3', pythonGenerator.ORDER_ATOMIC) || 'None';
const line4 = generator.valueToCode(block, 'line4', pythonGenerator.ORDER_ATOMIC) || 'None';
const sign_type = generator.valueToCode(block, 'sign_type', pythonGenerator.ORDER_ATOMIC) || 'None';
const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.set_sign(${position}, ${line1}, ${line2}, ${line3}, ${line4}, ${sign_type}, ${direction})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_drop_item'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
const item = generator.valueToCode(block, 'item', pythonGenerator.ORDER_ATOMIC) || 'None';
const amount = generator.valueToCode(block, 'amount', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.drop_item(${pos}, ${item}, ${amount})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_drop_random_loot'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.drop_random_loot(${pos})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_set_container_item'] = function(block, generator) {
        const pos = generator.valueToCode(block, 'pos', pythonGenerator.ORDER_ATOMIC) || 'None';
const slot = generator.valueToCode(block, 'slot', pythonGenerator.ORDER_ATOMIC) || 'None';
const item = generator.valueToCode(block, 'item', pythonGenerator.ORDER_ATOMIC) || 'None';
const amount = generator.valueToCode(block, 'amount', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.set_container_item(${pos}, ${slot}, ${item}, ${amount})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_get_entity_name'] = function(block, generator) {
        const id = generator.valueToCode(block, 'id', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `WorldActions.get_entity_name(${id})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}