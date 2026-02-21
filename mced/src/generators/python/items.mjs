export function defineItemsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['mc_item_boat'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BOAT'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_button'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BUTTON'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_chest_boat'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CHEST_BOAT'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_door'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_DOOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_fence'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_FENCE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_fence_gate'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_FENCE_GATE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_hanging_sign'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HANGING_SIGN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_leaves'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_LEAVES'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_log'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_LOG'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_planks'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_PLANKS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_pressure_plate'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_PRESSURE_PLATE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_sapling'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SAPLING'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_shelf'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SHELF'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_sign'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SIGN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_slab'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SLAB'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_stairs'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAIRS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_trapdoor'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TRAPDOOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wall_hanging_sign'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WALL_HANGING_SIGN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wall_sign'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WALL_SIGN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wood'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WOOD'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_banner'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BANNER'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_bed'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BED'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_bundle'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BUNDLE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_candle'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CANDLE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_candle_cake'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CANDLE_CAKE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_carpet'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CARPET'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_concrete'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CONCRETE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_concrete_powder'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CONCRETE_POWDER'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_dye'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_DYE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_glazed_terracotta'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_GLAZED_TERRACOTTA'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_harness'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HARNESS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_shulker_box'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SHULKER_BOX'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_stained_glass'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAINED_GLASS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_stained_glass_pane'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAINED_GLASS_PANE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_terracotta'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TERRACOTTA'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wall_banner'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WALL_BANNER'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_wool'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WOOL'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_tulip'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TULIP'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_world'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_ores'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_stone_bricks'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_glass'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_redstone_components'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_lighting'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_copper_variants'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_nature'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_flowers'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_functional_storage'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_spawning'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_item_picker_general'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };
}