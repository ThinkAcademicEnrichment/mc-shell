export function defineBlocksGenerators(pythonGenerator) {

    pythonGenerator.forBlock['picker_wood_types'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_copper_types'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_colours'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_armor_tier'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['picker_tool_tier'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_button'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BUTTON'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_door'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_DOOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_fence'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_FENCE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_fence_gate'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_FENCE_GATE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_hanging_sign'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_HANGING_SIGN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_leaves'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_LEAVES'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_log'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_LOG'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_planks'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_PLANKS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_pressure_plate'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_PRESSURE_PLATE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_sapling'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SAPLING'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_shelf'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SHELF'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_sign'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SIGN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_slab'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SLAB'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_stairs'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAIRS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_trapdoor'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TRAPDOOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_wood_wood'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WOOD'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_banner'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BANNER'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_bed'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BED'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_candle'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CANDLE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_carpet'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CARPET'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_concrete'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CONCRETE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_concrete_powder'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CONCRETE_POWDER'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_glazed_terracotta'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_GLAZED_TERRACOTTA'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_shulker_box'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SHULKER_BOX'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_stained_glass'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAINED_GLASS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_stained_glass_pane'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAINED_GLASS_PANE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_terracotta'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TERRACOTTA'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_wool'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_WOOL'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_armor_tier_block'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BLOCK'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_slab'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_SLAB'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_stairs'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_STAIRS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_bars'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BARS'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_bulb'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_BULB'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_chain'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CHAIN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_chest'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_CHEST'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_door'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_DOOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_golem_statue'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_GOLEM_STATUE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_grate'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_GRATE'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_lantern'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_LANTERN'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_copper_trapdoor'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TRAPDOOR'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_color_tulip'] = function(block, generator) {
        const rawVal = generator.valueToCode(block, 'VARIANT', pythonGenerator.ORDER_ATOMIC) || "''";
        const val = rawVal.replace(/['"]/g, '');
        return [`'${val}_TULIP'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_world'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_ores'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_woods_and_logs'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_colored_blocks'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_stone_bricks'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_glass'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_redstone_components'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_lighting'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_copper_variants'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_nature'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_flowers'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_functional_storage'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_spawning'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_spawn_eggs'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_bars'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_chains'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_walls'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_plants'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_music'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_various'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_miscelleneous'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_commands'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['mc_block_picker_general'] = function(block, generator) {
        return [`'${block.getFieldValue('VALUE')}'`, pythonGenerator.ORDER_ATOMIC];
    };
}