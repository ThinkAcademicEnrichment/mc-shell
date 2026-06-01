export function defineAdminActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['adminactions_all_material_properties'] = function(block, generator) {
        const material = generator.valueToCode(block, 'material', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `AdminActions.all_material_properties(${material})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['adminactions_is_material_block'] = function(block, generator) {
        const material = generator.valueToCode(block, 'material', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `AdminActions.is_material_block(${material})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['adminactions_is_material_edible'] = function(block, generator) {
        const material = generator.valueToCode(block, 'material', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `AdminActions.is_material_edible(${material})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['adminactions_is_material_fuel'] = function(block, generator) {
        const material = generator.valueToCode(block, 'material', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `AdminActions.is_material_fuel(${material})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['adminactions_is_material_item'] = function(block, generator) {
        const material = generator.valueToCode(block, 'material', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `AdminActions.is_material_item(${material})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}