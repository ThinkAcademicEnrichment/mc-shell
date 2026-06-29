export function defineItemsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['mc_item_color_harness'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HARNESS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wood_boat'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BOAT'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wood_chest_boat'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CHEST_BOAT'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_helmet'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HELMET'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_sword'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SWORD'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_shovel'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SHOVEL'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_pickaxe'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_PICKAXE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_axe'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_AXE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_hoe'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HOE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_chestplate'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CHESTPLATE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_leggings'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_LEGGINGS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_boots'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BOOTS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_color_bundle'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BUNDLE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_color_dye'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_DYE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_horse_armor'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HORSE_ARMOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_spear'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SPEAR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_armor_types_nautilus_armor'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_NAUTILUS_ARMOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_world'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_miscellaneous'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_glass'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_redstone_components'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_music'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_copper_variants'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_armor'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_food'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_tools'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_seeds'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_buckets'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_fish'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_spawn_eggs'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_charges'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_books'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_trims'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };
}