export function defineMinecraftMaterialGenerator(pythonGenerator) {

    pythonGenerator.forBlock['minecraft_picker_doors'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_fences'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_gates'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_glass'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_ores'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_redstone_components'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_slabs'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_stairs'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_stone_bricks'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_trapdoors'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_walls'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_wood_full'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_wood_logs'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_wood_planks'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_world'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_picker_miscellaneous'] = function(block, generator) {
        const code = block.getFieldValue('VALUE');
        return [`'${code}'`, generator.ORDER_ATOMIC];
    };

    function _combine_colour_and_material(colour_code, material_suffix) {
        let col = colour_code.replace(/'/g, "");
        return `'${col}_${material_suffix}'`;
    }

    pythonGenerator.forBlock['minecraft_material_banner'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'BANNER');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_bed'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'BED');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_candle'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'CANDLE');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_carpet'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'CARPET');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_concrete'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'CONCRETE');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_concrete_powder'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'CONCRETE_POWDER');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_glazed_terracotta'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'GLAZED_TERRACOTTA');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_shulker_box'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'SHULKER_BOX');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_stained_glass'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'STAINED_GLASS');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_stained_glass_pane'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'STAINED_GLASS_PANE');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_terracotta'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'TERRACOTTA');
      return [code, generator.ORDER_ATOMIC];
    };

    pythonGenerator.forBlock['minecraft_material_wool'] = function(block, generator) {
      const colour = generator.valueToCode(block, 'COLOUR', generator.ORDER_ATOMIC) || "'WHITE'";
      const code = _combine_colour_and_material(colour, 'WOOL');
      return [code, generator.ORDER_ATOMIC];
    };
}
