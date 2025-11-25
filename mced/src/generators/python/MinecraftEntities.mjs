export function defineMinecraftEntityGenerator(pythonGenerator) {

    pythonGenerator.forBlock['minecraft_entity_picker_hostile_mobs'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_entity_picker_minecarts'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_entity_picker_miscellaneous_entities'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_entity_picker_passive_mobs'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_entity_picker_projectiles'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_entity_picker_utility_and_special'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };
}
