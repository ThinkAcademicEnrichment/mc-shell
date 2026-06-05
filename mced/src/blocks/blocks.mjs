import { MCED } from "../lib/constants.mjs";

export function defineBlocksBlocks(Blockly) {

    Blockly.Blocks['picker_wood_types'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Wood Type")
                .appendField(new Blockly.FieldDropdown([
                ["Oak", "OAK"],
                ["Spruce", "SPRUCE"],
                ["Birch", "BIRCH"],
                ["Jungle", "JUNGLE"],
                ["Acacia", "ACACIA"],
                ["Dark Oak", "DARK_OAK"],
                ["Mangrove", "MANGROVE"],
                ["Cherry", "CHERRY"],
                ["Pale Oak", "PALE_OAK"],
                ["Bamboo", "BAMBOO"],
                ["Crimson", "CRIMSON"],
                ["Stripped Acacia", "STRIPPED_ACACIA"],
                ["Stripped Birch", "STRIPPED_BIRCH"],
                ["Stripped Cherry", "STRIPPED_CHERRY"],
                ["Stripped Dark Oak", "STRIPPED_DARK_OAK"],
                ["Stripped Jungle", "STRIPPED_JUNGLE"],
                ["Stripped Mangrove", "STRIPPED_MANGROVE"],
                ["Stripped Oak", "STRIPPED_OAK"],
                ["Stripped Pale Oak", "STRIPPED_PALE_OAK"],
                ["Stripped Spruce", "STRIPPED_SPRUCE"]
                ]), "VALUE");
            this.setOutput(true, "MinecraftWood");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_copper_types'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Copper Type")
                .appendField(new Blockly.FieldDropdown([
                ["Cut Copper", "CUT_COPPER"],
                ["Exposed Cut Copper", "EXPOSED_CUT_COPPER"],
                ["Waxed Oxidized Copper", "WAXED_OXIDIZED_COPPER"],
                ["Weathered Copper", "WEATHERED_COPPER"],
                ["Waxed Exposed Copper", "WAXED_EXPOSED_COPPER"],
                ["Waxed Weathered Cut Copper", "WAXED_WEATHERED_CUT_COPPER"],
                ["Weathered Cut Copper", "WEATHERED_CUT_COPPER"],
                ["Waxed Oxidized Cut Copper", "WAXED_OXIDIZED_CUT_COPPER"],
                ["Waxed Copper", "WAXED_COPPER"],
                ["Oxidized Copper", "OXIDIZED_COPPER"],
                ["Deepslate Copper", "DEEPSLATE_COPPER"],
                ["Waxed Exposed Cut Copper", "WAXED_EXPOSED_CUT_COPPER"],
                ["Raw Copper", "RAW_COPPER"],
                ["Waxed Weathered Copper", "WAXED_WEATHERED_COPPER"],
                ["Oxidized Cut Copper", "OXIDIZED_CUT_COPPER"],
                ["Waxed Cut Copper", "WAXED_CUT_COPPER"],
                ["Exposed Copper", "EXPOSED_COPPER"]
                ]), "VALUE");
            this.setOutput(true, "MinecraftCopper");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_colours'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Color")
                .appendField(new Blockly.FieldDropdown([
                ["White", "WHITE"],
                ["Orange", "ORANGE"],
                ["Magenta", "MAGENTA"],
                ["Light Blue", "LIGHT_BLUE"],
                ["Yellow", "YELLOW"],
                ["Lime", "LIME"],
                ["Pink", "PINK"],
                ["Gray", "GRAY"],
                ["Light Gray", "LIGHT_GRAY"],
                ["Cyan", "CYAN"],
                ["Purple", "PURPLE"],
                ["Blue", "BLUE"],
                ["Brown", "BROWN"],
                ["Green", "GREEN"],
                ["Red", "RED"],
                ["Black", "BLACK"]
                ]), "VALUE");
            this.setOutput(true, "MinecraftColour");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_armor_tier'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Armor Tier")
                .appendField(new Blockly.FieldDropdown([
                ["Leather", "LEATHER"],
                ["Stone", "STONE"],
                ["Wooden", "WOODEN"],
                ["Chainmail", "CHAINMAIL"],
                ["Iron", "IRON"],
                ["Golden", "GOLDEN"],
                ["Diamond", "DIAMOND"],
                ["Netherite", "NETHERITE"],
                ["Copper", "COPPER"]
                ]), "VALUE");
            this.setOutput(true, "MinecraftArmorTier");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['picker_tool_tier'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Tool Tier")
                .appendField(new Blockly.FieldDropdown([
                ["Wooden", "WOODEN"],
                ["Stone", "STONE"],
                ["Iron", "IRON"],
                ["Golden", "GOLDEN"],
                ["Diamond", "DIAMOND"],
                ["Netherite", "NETHERITE"],
                ["Copper", "COPPER"]
                ]), "VALUE");
            this.setOutput(true, "MinecraftToolTier");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_wood_button'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Button');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_door'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Door');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_fence'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Fence');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_fence_gate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Fence Gate');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_hanging_sign'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Hanging Sign');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_leaves'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Leaves');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_log'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Log');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_planks'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Planks');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_pressure_plate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Pressure Plate');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_sapling'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Sapling');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_shelf'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Shelf');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_sign'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Sign');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_slab'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Slab');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_stairs'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Stairs');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_trapdoor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Trapdoor');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_wood_wood'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Wood');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_banner'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Banner');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_bed'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Bed');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_candle'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Candle');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_carpet'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Carpet');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_concrete'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Concrete');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_concrete_powder'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Concrete Powder');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_glazed_terracotta'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Glazed Terracotta');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_shulker_box'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Shulker Box');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_stained_glass'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Stained Glass');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_stained_glass_pane'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Stained Glass Pane');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_terracotta'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Terracotta');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_wool'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Wool');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_armor_tier_block'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Block');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_slab'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Slab');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_stairs'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Stairs');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_bars'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Bars');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_bulb'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Bulb');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_chain'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Chain');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_chest'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Chest');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_door'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Door');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_golem_statue'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Golem Statue');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_grate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Grate');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_lantern'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Lantern');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_copper_trapdoor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftCopper')
                .appendField('Trapdoor');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_color_tulip'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Tulip');
            this.setOutput(true, 'Block');
            this.setColour("#B06161");
        }
    };

    Blockly.Blocks['mc_block_picker_world'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("World")
                .appendField(new Blockly.FieldDropdown([
                ["Air", "AIR"],
                ["Andesite", "ANDESITE"],
                ["Bedrock", "BEDROCK"],
                ["Blue Ice", "BLUE_ICE"],
                ["Calcite", "CALCITE"],
                ["Clay", "CLAY"],
                ["Coarse Dirt", "COARSE_DIRT"],
                ["Crying Obsidian", "CRYING_OBSIDIAN"],
                ["Deepslate", "DEEPSLATE"],
                ["Diorite", "DIORITE"],
                ["Dirt", "DIRT"],
                ["Dirt Path", "DIRT_PATH"],
                ["Granite", "GRANITE"],
                ["Grass Block", "GRASS_BLOCK"],
                ["Gravel", "GRAVEL"],
                ["Ice", "ICE"],
                ["Magma Block", "MAGMA_BLOCK"],
                ["Mycelium", "MYCELIUM"],
                ["Obsidian", "OBSIDIAN"],
                ["Packed Ice", "PACKED_ICE"],
                ["Podzol", "PODZOL"],
                ["Red Sand", "RED_SAND"],
                ["Rooted Dirt", "ROOTED_DIRT"],
                ["Sand", "SAND"],
                ["Snow", "SNOW"],
                ["Snow Block", "SNOW_BLOCK"],
                ["Stone", "STONE"],
                ["Tuff", "TUFF"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_ores'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Ores")
                .appendField(new Blockly.FieldDropdown([
                ["Ancient Debris", "ANCIENT_DEBRIS"],
                ["Coal Ore", "COAL_ORE"],
                ["Copper Ore", "COPPER_ORE"],
                ["Deepslate Coal Ore", "DEEPSLATE_COAL_ORE"],
                ["Deepslate Copper Ore", "DEEPSLATE_COPPER_ORE"],
                ["Deepslate Diamond Ore", "DEEPSLATE_DIAMOND_ORE"],
                ["Deepslate Emerald Ore", "DEEPSLATE_EMERALD_ORE"],
                ["Deepslate Gold Ore", "DEEPSLATE_GOLD_ORE"],
                ["Deepslate Iron Ore", "DEEPSLATE_IRON_ORE"],
                ["Deepslate Lapis Ore", "DEEPSLATE_LAPIS_ORE"],
                ["Deepslate Redstone Ore", "DEEPSLATE_REDSTONE_ORE"],
                ["Diamond Ore", "DIAMOND_ORE"],
                ["Emerald Ore", "EMERALD_ORE"],
                ["Gold Ore", "GOLD_ORE"],
                ["Iron Ore", "IRON_ORE"],
                ["Lapis Ore", "LAPIS_ORE"],
                ["Nether Gold Ore", "NETHER_GOLD_ORE"],
                ["Nether Quartz Ore", "NETHER_QUARTZ_ORE"],
                ["Redstone Ore", "REDSTONE_ORE"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_woods_and_logs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Woods And Logs")
                .appendField(new Blockly.FieldDropdown([
                ["Acacia Leaves", "ACACIA_LEAVES"],
                ["Acacia Log", "ACACIA_LOG"],
                ["Acacia Planks", "ACACIA_PLANKS"],
                ["Acacia Sapling", "ACACIA_SAPLING"],
                ["Acacia Wood", "ACACIA_WOOD"],
                ["Bamboo Planks", "BAMBOO_PLANKS"],
                ["Birch Leaves", "BIRCH_LEAVES"],
                ["Birch Log", "BIRCH_LOG"],
                ["Birch Planks", "BIRCH_PLANKS"],
                ["Birch Sapling", "BIRCH_SAPLING"],
                ["Birch Wood", "BIRCH_WOOD"],
                ["Cherry Leaves", "CHERRY_LEAVES"],
                ["Cherry Log", "CHERRY_LOG"],
                ["Cherry Planks", "CHERRY_PLANKS"],
                ["Cherry Sapling", "CHERRY_SAPLING"],
                ["Cherry Wood", "CHERRY_WOOD"],
                ["Crimson Planks", "CRIMSON_PLANKS"],
                ["Dark Oak Leaves", "DARK_OAK_LEAVES"],
                ["Dark Oak Log", "DARK_OAK_LOG"],
                ["Dark Oak Planks", "DARK_OAK_PLANKS"],
                ["Dark Oak Sapling", "DARK_OAK_SAPLING"],
                ["Dark Oak Wood", "DARK_OAK_WOOD"],
                ["Jungle Leaves", "JUNGLE_LEAVES"],
                ["Jungle Log", "JUNGLE_LOG"],
                ["Jungle Planks", "JUNGLE_PLANKS"],
                ["Jungle Sapling", "JUNGLE_SAPLING"],
                ["Jungle Wood", "JUNGLE_WOOD"],
                ["Mangrove Leaves", "MANGROVE_LEAVES"],
                ["Mangrove Log", "MANGROVE_LOG"],
                ["Mangrove Planks", "MANGROVE_PLANKS"],
                ["Mangrove Wood", "MANGROVE_WOOD"],
                ["Oak Leaves", "OAK_LEAVES"],
                ["Oak Log", "OAK_LOG"],
                ["Oak Planks", "OAK_PLANKS"],
                ["Oak Sapling", "OAK_SAPLING"],
                ["Oak Wood", "OAK_WOOD"],
                ["Pale Oak Leaves", "PALE_OAK_LEAVES"],
                ["Pale Oak Log", "PALE_OAK_LOG"],
                ["Pale Oak Planks", "PALE_OAK_PLANKS"],
                ["Pale Oak Sapling", "PALE_OAK_SAPLING"],
                ["Pale Oak Wood", "PALE_OAK_WOOD"],
                ["Spruce Leaves", "SPRUCE_LEAVES"],
                ["Spruce Log", "SPRUCE_LOG"],
                ["Spruce Planks", "SPRUCE_PLANKS"],
                ["Spruce Sapling", "SPRUCE_SAPLING"],
                ["Spruce Wood", "SPRUCE_WOOD"],
                ["Stripped Acacia Log", "STRIPPED_ACACIA_LOG"],
                ["Stripped Acacia Wood", "STRIPPED_ACACIA_WOOD"],
                ["Stripped Birch Log", "STRIPPED_BIRCH_LOG"],
                ["Stripped Birch Wood", "STRIPPED_BIRCH_WOOD"],
                ["Stripped Cherry Log", "STRIPPED_CHERRY_LOG"],
                ["Stripped Cherry Wood", "STRIPPED_CHERRY_WOOD"],
                ["Stripped Dark Oak Log", "STRIPPED_DARK_OAK_LOG"],
                ["Stripped Dark Oak Wood", "STRIPPED_DARK_OAK_WOOD"],
                ["Stripped Jungle Log", "STRIPPED_JUNGLE_LOG"],
                ["Stripped Jungle Wood", "STRIPPED_JUNGLE_WOOD"],
                ["Stripped Mangrove Log", "STRIPPED_MANGROVE_LOG"],
                ["Stripped Mangrove Wood", "STRIPPED_MANGROVE_WOOD"],
                ["Stripped Oak Log", "STRIPPED_OAK_LOG"],
                ["Stripped Oak Wood", "STRIPPED_OAK_WOOD"],
                ["Stripped Pale Oak Log", "STRIPPED_PALE_OAK_LOG"],
                ["Stripped Pale Oak Wood", "STRIPPED_PALE_OAK_WOOD"],
                ["Stripped Spruce Log", "STRIPPED_SPRUCE_LOG"],
                ["Stripped Spruce Wood", "STRIPPED_SPRUCE_WOOD"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_colored_blocks'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Colored Blocks")
                .appendField(new Blockly.FieldDropdown([
                ["Black Banner", "BLACK_BANNER"],
                ["Black Bed", "BLACK_BED"],
                ["Black Candle", "BLACK_CANDLE"],
                ["Black Carpet", "BLACK_CARPET"],
                ["Black Concrete", "BLACK_CONCRETE"],
                ["Black Concrete Powder", "BLACK_CONCRETE_POWDER"],
                ["Black Glazed Terracotta", "BLACK_GLAZED_TERRACOTTA"],
                ["Black Shulker Box", "BLACK_SHULKER_BOX"],
                ["Black Terracotta", "BLACK_TERRACOTTA"],
                ["Black Wool", "BLACK_WOOL"],
                ["Blue Banner", "BLUE_BANNER"],
                ["Blue Bed", "BLUE_BED"],
                ["Blue Candle", "BLUE_CANDLE"],
                ["Blue Carpet", "BLUE_CARPET"],
                ["Blue Concrete", "BLUE_CONCRETE"],
                ["Blue Concrete Powder", "BLUE_CONCRETE_POWDER"],
                ["Blue Glazed Terracotta", "BLUE_GLAZED_TERRACOTTA"],
                ["Blue Shulker Box", "BLUE_SHULKER_BOX"],
                ["Blue Terracotta", "BLUE_TERRACOTTA"],
                ["Blue Wool", "BLUE_WOOL"],
                ["Brown Banner", "BROWN_BANNER"],
                ["Brown Bed", "BROWN_BED"],
                ["Brown Candle", "BROWN_CANDLE"],
                ["Brown Carpet", "BROWN_CARPET"],
                ["Brown Concrete", "BROWN_CONCRETE"],
                ["Brown Concrete Powder", "BROWN_CONCRETE_POWDER"],
                ["Brown Glazed Terracotta", "BROWN_GLAZED_TERRACOTTA"],
                ["Brown Shulker Box", "BROWN_SHULKER_BOX"],
                ["Brown Terracotta", "BROWN_TERRACOTTA"],
                ["Brown Wool", "BROWN_WOOL"],
                ["Candle", "CANDLE"],
                ["Cyan Banner", "CYAN_BANNER"],
                ["Cyan Bed", "CYAN_BED"],
                ["Cyan Candle", "CYAN_CANDLE"],
                ["Cyan Carpet", "CYAN_CARPET"],
                ["Cyan Concrete", "CYAN_CONCRETE"],
                ["Cyan Concrete Powder", "CYAN_CONCRETE_POWDER"],
                ["Cyan Glazed Terracotta", "CYAN_GLAZED_TERRACOTTA"],
                ["Cyan Shulker Box", "CYAN_SHULKER_BOX"],
                ["Cyan Terracotta", "CYAN_TERRACOTTA"],
                ["Cyan Wool", "CYAN_WOOL"],
                ["Gray Banner", "GRAY_BANNER"],
                ["Gray Bed", "GRAY_BED"],
                ["Gray Candle", "GRAY_CANDLE"],
                ["Gray Carpet", "GRAY_CARPET"],
                ["Gray Concrete", "GRAY_CONCRETE"],
                ["Gray Concrete Powder", "GRAY_CONCRETE_POWDER"],
                ["Gray Glazed Terracotta", "GRAY_GLAZED_TERRACOTTA"],
                ["Gray Shulker Box", "GRAY_SHULKER_BOX"],
                ["Gray Terracotta", "GRAY_TERRACOTTA"],
                ["Gray Wool", "GRAY_WOOL"],
                ["Green Banner", "GREEN_BANNER"],
                ["Green Bed", "GREEN_BED"],
                ["Green Candle", "GREEN_CANDLE"],
                ["Green Carpet", "GREEN_CARPET"],
                ["Green Concrete", "GREEN_CONCRETE"],
                ["Green Concrete Powder", "GREEN_CONCRETE_POWDER"],
                ["Green Glazed Terracotta", "GREEN_GLAZED_TERRACOTTA"],
                ["Green Shulker Box", "GREEN_SHULKER_BOX"],
                ["Green Terracotta", "GREEN_TERRACOTTA"],
                ["Green Wool", "GREEN_WOOL"],
                ["Light Blue Banner", "LIGHT_BLUE_BANNER"],
                ["Light Blue Bed", "LIGHT_BLUE_BED"],
                ["Light Blue Candle", "LIGHT_BLUE_CANDLE"],
                ["Light Blue Carpet", "LIGHT_BLUE_CARPET"],
                ["Light Blue Concrete", "LIGHT_BLUE_CONCRETE"],
                ["Light Blue Concrete Powder", "LIGHT_BLUE_CONCRETE_POWDER"],
                ["Light Blue Glazed Terracotta", "LIGHT_BLUE_GLAZED_TERRACOTTA"],
                ["Light Blue Shulker Box", "LIGHT_BLUE_SHULKER_BOX"],
                ["Light Blue Terracotta", "LIGHT_BLUE_TERRACOTTA"],
                ["Light Blue Wool", "LIGHT_BLUE_WOOL"],
                ["Light Gray Banner", "LIGHT_GRAY_BANNER"],
                ["Light Gray Bed", "LIGHT_GRAY_BED"],
                ["Light Gray Candle", "LIGHT_GRAY_CANDLE"],
                ["Light Gray Carpet", "LIGHT_GRAY_CARPET"],
                ["Light Gray Concrete", "LIGHT_GRAY_CONCRETE"],
                ["Light Gray Concrete Powder", "LIGHT_GRAY_CONCRETE_POWDER"],
                ["Light Gray Glazed Terracotta", "LIGHT_GRAY_GLAZED_TERRACOTTA"],
                ["Light Gray Shulker Box", "LIGHT_GRAY_SHULKER_BOX"],
                ["Light Gray Terracotta", "LIGHT_GRAY_TERRACOTTA"],
                ["Light Gray Wool", "LIGHT_GRAY_WOOL"],
                ["Lime Banner", "LIME_BANNER"],
                ["Lime Bed", "LIME_BED"],
                ["Lime Candle", "LIME_CANDLE"],
                ["Lime Carpet", "LIME_CARPET"],
                ["Lime Concrete", "LIME_CONCRETE"],
                ["Lime Concrete Powder", "LIME_CONCRETE_POWDER"],
                ["Lime Glazed Terracotta", "LIME_GLAZED_TERRACOTTA"],
                ["Lime Shulker Box", "LIME_SHULKER_BOX"],
                ["Lime Terracotta", "LIME_TERRACOTTA"],
                ["Lime Wool", "LIME_WOOL"],
                ["Magenta Banner", "MAGENTA_BANNER"],
                ["Magenta Bed", "MAGENTA_BED"],
                ["Magenta Candle", "MAGENTA_CANDLE"],
                ["Magenta Carpet", "MAGENTA_CARPET"],
                ["Magenta Concrete", "MAGENTA_CONCRETE"],
                ["Magenta Concrete Powder", "MAGENTA_CONCRETE_POWDER"],
                ["Magenta Glazed Terracotta", "MAGENTA_GLAZED_TERRACOTTA"],
                ["Magenta Shulker Box", "MAGENTA_SHULKER_BOX"],
                ["Magenta Terracotta", "MAGENTA_TERRACOTTA"],
                ["Magenta Wool", "MAGENTA_WOOL"],
                ["Orange Banner", "ORANGE_BANNER"],
                ["Orange Bed", "ORANGE_BED"],
                ["Orange Candle", "ORANGE_CANDLE"],
                ["Orange Carpet", "ORANGE_CARPET"],
                ["Orange Concrete", "ORANGE_CONCRETE"],
                ["Orange Concrete Powder", "ORANGE_CONCRETE_POWDER"],
                ["Orange Glazed Terracotta", "ORANGE_GLAZED_TERRACOTTA"],
                ["Orange Shulker Box", "ORANGE_SHULKER_BOX"],
                ["Orange Terracotta", "ORANGE_TERRACOTTA"],
                ["Orange Wool", "ORANGE_WOOL"],
                ["Pink Banner", "PINK_BANNER"],
                ["Pink Bed", "PINK_BED"],
                ["Pink Candle", "PINK_CANDLE"],
                ["Pink Carpet", "PINK_CARPET"],
                ["Pink Concrete", "PINK_CONCRETE"],
                ["Pink Concrete Powder", "PINK_CONCRETE_POWDER"],
                ["Pink Glazed Terracotta", "PINK_GLAZED_TERRACOTTA"],
                ["Pink Shulker Box", "PINK_SHULKER_BOX"],
                ["Pink Terracotta", "PINK_TERRACOTTA"],
                ["Pink Wool", "PINK_WOOL"],
                ["Purple Banner", "PURPLE_BANNER"],
                ["Purple Bed", "PURPLE_BED"],
                ["Purple Candle", "PURPLE_CANDLE"],
                ["Purple Carpet", "PURPLE_CARPET"],
                ["Purple Concrete", "PURPLE_CONCRETE"],
                ["Purple Concrete Powder", "PURPLE_CONCRETE_POWDER"],
                ["Purple Glazed Terracotta", "PURPLE_GLAZED_TERRACOTTA"],
                ["Purple Shulker Box", "PURPLE_SHULKER_BOX"],
                ["Purple Terracotta", "PURPLE_TERRACOTTA"],
                ["Purple Wool", "PURPLE_WOOL"],
                ["Red Banner", "RED_BANNER"],
                ["Red Bed", "RED_BED"],
                ["Red Candle", "RED_CANDLE"],
                ["Red Carpet", "RED_CARPET"],
                ["Red Concrete", "RED_CONCRETE"],
                ["Red Concrete Powder", "RED_CONCRETE_POWDER"],
                ["Red Glazed Terracotta", "RED_GLAZED_TERRACOTTA"],
                ["Red Shulker Box", "RED_SHULKER_BOX"],
                ["Red Terracotta", "RED_TERRACOTTA"],
                ["Red Wool", "RED_WOOL"],
                ["Shulker Box", "SHULKER_BOX"],
                ["Terracotta", "TERRACOTTA"],
                ["White Banner", "WHITE_BANNER"],
                ["White Bed", "WHITE_BED"],
                ["White Candle", "WHITE_CANDLE"],
                ["White Carpet", "WHITE_CARPET"],
                ["White Concrete", "WHITE_CONCRETE"],
                ["White Concrete Powder", "WHITE_CONCRETE_POWDER"],
                ["White Glazed Terracotta", "WHITE_GLAZED_TERRACOTTA"],
                ["White Shulker Box", "WHITE_SHULKER_BOX"],
                ["White Terracotta", "WHITE_TERRACOTTA"],
                ["White Wool", "WHITE_WOOL"],
                ["Yellow Banner", "YELLOW_BANNER"],
                ["Yellow Bed", "YELLOW_BED"],
                ["Yellow Candle", "YELLOW_CANDLE"],
                ["Yellow Carpet", "YELLOW_CARPET"],
                ["Yellow Concrete", "YELLOW_CONCRETE"],
                ["Yellow Concrete Powder", "YELLOW_CONCRETE_POWDER"],
                ["Yellow Glazed Terracotta", "YELLOW_GLAZED_TERRACOTTA"],
                ["Yellow Shulker Box", "YELLOW_SHULKER_BOX"],
                ["Yellow Terracotta", "YELLOW_TERRACOTTA"],
                ["Yellow Wool", "YELLOW_WOOL"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_stone_bricks'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Stone Bricks")
                .appendField(new Blockly.FieldDropdown([
                ["Bricks", "BRICKS"],
                ["Chiseled Deepslate", "CHISELED_DEEPSLATE"],
                ["Chiseled Nether Bricks", "CHISELED_NETHER_BRICKS"],
                ["Chiseled Polished Blackstone", "CHISELED_POLISHED_BLACKSTONE"],
                ["Chiseled Stone Bricks", "CHISELED_STONE_BRICKS"],
                ["Chiseled Tuff Bricks", "CHISELED_TUFF_BRICKS"],
                ["Cracked Deepslate Bricks", "CRACKED_DEEPSLATE_BRICKS"],
                ["Cracked Deepslate Tiles", "CRACKED_DEEPSLATE_TILES"],
                ["Cracked Nether Bricks", "CRACKED_NETHER_BRICKS"],
                ["Cracked Polished Blackstone Bricks", "CRACKED_POLISHED_BLACKSTONE_BRICKS"],
                ["Cracked Stone Bricks", "CRACKED_STONE_BRICKS"],
                ["Deepslate Bricks", "DEEPSLATE_BRICKS"],
                ["Deepslate Tiles", "DEEPSLATE_TILES"],
                ["End Stone Bricks", "END_STONE_BRICKS"],
                ["Mossy Stone Bricks", "MOSSY_STONE_BRICKS"],
                ["Mud Bricks", "MUD_BRICKS"],
                ["Nether Bricks", "NETHER_BRICKS"],
                ["Polished Blackstone Bricks", "POLISHED_BLACKSTONE_BRICKS"],
                ["Quartz Bricks", "QUARTZ_BRICKS"],
                ["Red Nether Bricks", "RED_NETHER_BRICKS"],
                ["Stone Bricks", "STONE_BRICKS"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_glass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Glass")
                .appendField(new Blockly.FieldDropdown([
                ["Black Stained Glass", "BLACK_STAINED_GLASS"],
                ["Black Stained Glass Pane", "BLACK_STAINED_GLASS_PANE"],
                ["Blue Stained Glass", "BLUE_STAINED_GLASS"],
                ["Blue Stained Glass Pane", "BLUE_STAINED_GLASS_PANE"],
                ["Brown Stained Glass", "BROWN_STAINED_GLASS"],
                ["Brown Stained Glass Pane", "BROWN_STAINED_GLASS_PANE"],
                ["Cyan Stained Glass", "CYAN_STAINED_GLASS"],
                ["Cyan Stained Glass Pane", "CYAN_STAINED_GLASS_PANE"],
                ["Glass", "GLASS"],
                ["Glass Pane", "GLASS_PANE"],
                ["Gray Stained Glass", "GRAY_STAINED_GLASS"],
                ["Gray Stained Glass Pane", "GRAY_STAINED_GLASS_PANE"],
                ["Green Stained Glass", "GREEN_STAINED_GLASS"],
                ["Green Stained Glass Pane", "GREEN_STAINED_GLASS_PANE"],
                ["Light Blue Stained Glass", "LIGHT_BLUE_STAINED_GLASS"],
                ["Light Blue Stained Glass Pane", "LIGHT_BLUE_STAINED_GLASS_PANE"],
                ["Light Gray Stained Glass", "LIGHT_GRAY_STAINED_GLASS"],
                ["Light Gray Stained Glass Pane", "LIGHT_GRAY_STAINED_GLASS_PANE"],
                ["Lime Stained Glass", "LIME_STAINED_GLASS"],
                ["Lime Stained Glass Pane", "LIME_STAINED_GLASS_PANE"],
                ["Magenta Stained Glass", "MAGENTA_STAINED_GLASS"],
                ["Magenta Stained Glass Pane", "MAGENTA_STAINED_GLASS_PANE"],
                ["Orange Stained Glass", "ORANGE_STAINED_GLASS"],
                ["Orange Stained Glass Pane", "ORANGE_STAINED_GLASS_PANE"],
                ["Pink Stained Glass", "PINK_STAINED_GLASS"],
                ["Pink Stained Glass Pane", "PINK_STAINED_GLASS_PANE"],
                ["Purple Stained Glass", "PURPLE_STAINED_GLASS"],
                ["Purple Stained Glass Pane", "PURPLE_STAINED_GLASS_PANE"],
                ["Red Stained Glass", "RED_STAINED_GLASS"],
                ["Red Stained Glass Pane", "RED_STAINED_GLASS_PANE"],
                ["Tinted Glass", "TINTED_GLASS"],
                ["White Stained Glass", "WHITE_STAINED_GLASS"],
                ["White Stained Glass Pane", "WHITE_STAINED_GLASS_PANE"],
                ["Yellow Stained Glass", "YELLOW_STAINED_GLASS"],
                ["Yellow Stained Glass Pane", "YELLOW_STAINED_GLASS_PANE"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_redstone_components'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Redstone Components")
                .appendField(new Blockly.FieldDropdown([
                ["Activator Rail", "ACTIVATOR_RAIL"],
                ["Comparator", "COMPARATOR"],
                ["Daylight Detector", "DAYLIGHT_DETECTOR"],
                ["Detector Rail", "DETECTOR_RAIL"],
                ["Dispenser", "DISPENSER"],
                ["Dropper", "DROPPER"],
                ["Honey Block", "HONEY_BLOCK"],
                ["Hopper", "HOPPER"],
                ["Lectern", "LECTERN"],
                ["Lever", "LEVER"],
                ["Note Block", "NOTE_BLOCK"],
                ["Observer", "OBSERVER"],
                ["Piston", "PISTON"],
                ["Powered Rail", "POWERED_RAIL"],
                ["Rail", "RAIL"],
                ["Redstone Block", "REDSTONE_BLOCK"],
                ["Redstone Lamp", "REDSTONE_LAMP"],
                ["Redstone Torch", "REDSTONE_TORCH"],
                ["Repeater", "REPEATER"],
                ["Slime Block", "SLIME_BLOCK"],
                ["Sticky Piston", "STICKY_PISTON"],
                ["Target", "TARGET"],
                ["Tripwire Hook", "TRIPWIRE_HOOK"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_lighting'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Lighting")
                .appendField(new Blockly.FieldDropdown([
                ["Beacon", "BEACON"],
                ["Copper Lantern", "COPPER_LANTERN"],
                ["End Rod", "END_ROD"],
                ["Exposed Copper Lantern", "EXPOSED_COPPER_LANTERN"],
                ["Glowstone", "GLOWSTONE"],
                ["Jack O Lantern", "JACK_O_LANTERN"],
                ["Lantern", "LANTERN"],
                ["Ochre Froglight", "OCHRE_FROGLIGHT"],
                ["Oxidized Copper Lantern", "OXIDIZED_COPPER_LANTERN"],
                ["Pearlescent Froglight", "PEARLESCENT_FROGLIGHT"],
                ["Sea Lantern", "SEA_LANTERN"],
                ["Shroomlight", "SHROOMLIGHT"],
                ["Soul Lantern", "SOUL_LANTERN"],
                ["Soul Torch", "SOUL_TORCH"],
                ["Torch", "TORCH"],
                ["Verdant Froglight", "VERDANT_FROGLIGHT"],
                ["Waxed Copper Lantern", "WAXED_COPPER_LANTERN"],
                ["Waxed Exposed Copper Lantern", "WAXED_EXPOSED_COPPER_LANTERN"],
                ["Waxed Oxidized Copper Lantern", "WAXED_OXIDIZED_COPPER_LANTERN"],
                ["Waxed Weathered Copper Lantern", "WAXED_WEATHERED_COPPER_LANTERN"],
                ["Weathered Copper Lantern", "WEATHERED_COPPER_LANTERN"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_copper_variants'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Copper Variants")
                .appendField(new Blockly.FieldDropdown([
                ["Chiseled Copper", "CHISELED_COPPER"],
                ["Copper Block", "COPPER_BLOCK"],
                ["Copper Bulb", "COPPER_BULB"],
                ["Copper Grate", "COPPER_GRATE"],
                ["Cut Copper", "CUT_COPPER"],
                ["Exposed Copper", "EXPOSED_COPPER"],
                ["Oxidized Copper", "OXIDIZED_COPPER"],
                ["Weathered Copper", "WEATHERED_COPPER"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_nature'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Nature")
                .appendField(new Blockly.FieldDropdown([
                ["Bamboo", "BAMBOO"],
                ["Cactus", "CACTUS"],
                ["Lily Pad", "LILY_PAD"],
                ["Moss Block", "MOSS_BLOCK"],
                ["Sugar Cane", "SUGAR_CANE"],
                ["Twisting Vines", "TWISTING_VINES"],
                ["Vine", "VINE"],
                ["Weeping Vines", "WEEPING_VINES"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_flowers'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Flowers")
                .appendField(new Blockly.FieldDropdown([
                ["Allium", "ALLIUM"],
                ["Azure Bluet", "AZURE_BLUET"],
                ["Blue Orchid", "BLUE_ORCHID"],
                ["Cornflower", "CORNFLOWER"],
                ["Dandelion", "DANDELION"],
                ["Lilac", "LILAC"],
                ["Lily Of The Valley", "LILY_OF_THE_VALLEY"],
                ["Orange Tulip", "ORANGE_TULIP"],
                ["Oxeye Daisy", "OXEYE_DAISY"],
                ["Peony", "PEONY"],
                ["Pink Tulip", "PINK_TULIP"],
                ["Poppy", "POPPY"],
                ["Red Tulip", "RED_TULIP"],
                ["Rose Bush", "ROSE_BUSH"],
                ["Sunflower", "SUNFLOWER"],
                ["White Tulip", "WHITE_TULIP"],
                ["Wither Rose", "WITHER_ROSE"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_functional_storage'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Functional Storage")
                .appendField(new Blockly.FieldDropdown([
                ["Barrel", "BARREL"],
                ["Blast Furnace", "BLAST_FURNACE"],
                ["Chest", "CHEST"],
                ["Crafter", "CRAFTER"],
                ["Ender Chest", "ENDER_CHEST"],
                ["Exposed Copper Chest", "EXPOSED_COPPER_CHEST"],
                ["Furnace", "FURNACE"],
                ["Oxidized Copper Chest", "OXIDIZED_COPPER_CHEST"],
                ["Smoker", "SMOKER"],
                ["Trapped Chest", "TRAPPED_CHEST"],
                ["Waxed Copper Chest", "WAXED_COPPER_CHEST"],
                ["Waxed Exposed Copper Chest", "WAXED_EXPOSED_COPPER_CHEST"],
                ["Waxed Oxidized Copper Chest", "WAXED_OXIDIZED_COPPER_CHEST"],
                ["Waxed Weathered Copper Chest", "WAXED_WEATHERED_COPPER_CHEST"],
                ["Weathered Copper Chest", "WEATHERED_COPPER_CHEST"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_spawning'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Spawning")
                .appendField(new Blockly.FieldDropdown([
                ["Frogspawn", "FROGSPAWN"],
                ["Respawn Anchor", "RESPAWN_ANCHOR"],
                ["Spawner", "SPAWNER"],
                ["Trial Spawner", "TRIAL_SPAWNER"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_spawn_eggs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Spawn Eggs")
                .appendField(new Blockly.FieldDropdown([
                ["Frogspawn", "FROGSPAWN"],
                ["Respawn Anchor", "RESPAWN_ANCHOR"],
                ["Spawner", "SPAWNER"],
                ["Trial Spawner", "TRIAL_SPAWNER"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_bars'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Bars")
                .appendField(new Blockly.FieldDropdown([
                ["Copper Bars", "COPPER_BARS"],
                ["Exposed Copper Bars", "EXPOSED_COPPER_BARS"],
                ["Iron Bars", "IRON_BARS"],
                ["Oxidized Copper Bars", "OXIDIZED_COPPER_BARS"],
                ["Waxed Copper Bars", "WAXED_COPPER_BARS"],
                ["Waxed Exposed Copper Bars", "WAXED_EXPOSED_COPPER_BARS"],
                ["Waxed Oxidized Copper Bars", "WAXED_OXIDIZED_COPPER_BARS"],
                ["Waxed Weathered Copper Bars", "WAXED_WEATHERED_COPPER_BARS"],
                ["Weathered Copper Bars", "WEATHERED_COPPER_BARS"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_chains'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Chains")
                .appendField(new Blockly.FieldDropdown([
                ["Copper Chain", "COPPER_CHAIN"],
                ["Exposed Copper Chain", "EXPOSED_COPPER_CHAIN"],
                ["Iron Chain", "IRON_CHAIN"],
                ["Oxidized Copper Chain", "OXIDIZED_COPPER_CHAIN"],
                ["Waxed Copper Chain", "WAXED_COPPER_CHAIN"],
                ["Waxed Exposed Copper Chain", "WAXED_EXPOSED_COPPER_CHAIN"],
                ["Waxed Oxidized Copper Chain", "WAXED_OXIDIZED_COPPER_CHAIN"],
                ["Waxed Weathered Copper Chain", "WAXED_WEATHERED_COPPER_CHAIN"],
                ["Weathered Copper Chain", "WEATHERED_COPPER_CHAIN"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_walls'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Walls")
                .appendField(new Blockly.FieldDropdown([
                ["Andesite Wall", "ANDESITE_WALL"],
                ["Blackstone Wall", "BLACKSTONE_WALL"],
                ["Brick Wall", "BRICK_WALL"],
                ["Cobbled Deepslate Wall", "COBBLED_DEEPSLATE_WALL"],
                ["Cobblestone Wall", "COBBLESTONE_WALL"],
                ["Deepslate Brick Wall", "DEEPSLATE_BRICK_WALL"],
                ["Deepslate Tile Wall", "DEEPSLATE_TILE_WALL"],
                ["Diorite Wall", "DIORITE_WALL"],
                ["End Stone Brick Wall", "END_STONE_BRICK_WALL"],
                ["Granite Wall", "GRANITE_WALL"],
                ["Mossy Cobblestone Wall", "MOSSY_COBBLESTONE_WALL"],
                ["Mossy Stone Brick Wall", "MOSSY_STONE_BRICK_WALL"],
                ["Mud Brick Wall", "MUD_BRICK_WALL"],
                ["Nether Brick Wall", "NETHER_BRICK_WALL"],
                ["Polished Blackstone Brick Wall", "POLISHED_BLACKSTONE_BRICK_WALL"],
                ["Polished Blackstone Wall", "POLISHED_BLACKSTONE_WALL"],
                ["Polished Deepslate Wall", "POLISHED_DEEPSLATE_WALL"],
                ["Polished Tuff Wall", "POLISHED_TUFF_WALL"],
                ["Prismarine Wall", "PRISMARINE_WALL"],
                ["Red Nether Brick Wall", "RED_NETHER_BRICK_WALL"],
                ["Red Sandstone Wall", "RED_SANDSTONE_WALL"],
                ["Resin Brick Wall", "RESIN_BRICK_WALL"],
                ["Sandstone Wall", "SANDSTONE_WALL"],
                ["Stone Brick Wall", "STONE_BRICK_WALL"],
                ["Tuff Brick Wall", "TUFF_BRICK_WALL"],
                ["Tuff Wall", "TUFF_WALL"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_plants'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Plants")
                .appendField(new Blockly.FieldDropdown([
                ["Chorus Plant", "CHORUS_PLANT"],
                ["Pitcher Plant", "PITCHER_PLANT"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_music'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Music")
                .appendField(new Blockly.FieldDropdown([
                ["Jukebox", "JUKEBOX"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_various'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Various")
                .appendField(new Blockly.FieldDropdown([
                ["Anvil", "ANVIL"],
                ["Azalea", "AZALEA"],
                ["Barrier", "BARRIER"],
                ["Basalt", "BASALT"],
                ["Beehive", "BEEHIVE"],
                ["Bell", "BELL"],
                ["Blackstone", "BLACKSTONE"],
                ["Bookshelf", "BOOKSHELF"],
                ["Bush", "BUSH"],
                ["Campfire", "CAMPFIRE"],
                ["Cauldron", "CAULDRON"],
                ["Composter", "COMPOSTER"],
                ["Conduit", "CONDUIT"],
                ["Farmland", "FARMLAND"],
                ["Fern", "FERN"],
                ["Grindstone", "GRINDSTONE"],
                ["Jigsaw", "JIGSAW"],
                ["Ladder", "LADDER"],
                ["Light", "LIGHT"],
                ["Lodestone", "LODESTONE"],
                ["Loom", "LOOM"],
                ["Mud", "MUD"],
                ["Netherrack", "NETHERRACK"],
                ["Prismarine", "PRISMARINE"],
                ["Sandstone", "SANDSTONE"],
                ["Scaffolding", "SCAFFOLDING"],
                ["Sculk", "SCULK"],
                ["Seagrass", "SEAGRASS"],
                ["Sponge", "SPONGE"],
                ["Stonecutter", "STONECUTTER"],
                ["Tnt", "TNT"],
                ["Torchflower", "TORCHFLOWER"],
                ["Vault", "VAULT"],
                ["Wildflowers", "WILDFLOWERS"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_miscelleneous'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Miscelleneous")
                .appendField(new Blockly.FieldDropdown([
                ["Amethyst Block", "AMETHYST_BLOCK"],
                ["Bamboo Block", "BAMBOO_BLOCK"],
                ["Bone Block", "BONE_BLOCK"],
                ["Brain Coral Block", "BRAIN_CORAL_BLOCK"],
                ["Brown Mushroom Block", "BROWN_MUSHROOM_BLOCK"],
                ["Bubble Coral Block", "BUBBLE_CORAL_BLOCK"],
                ["Chiseled Quartz Block", "CHISELED_QUARTZ_BLOCK"],
                ["Coal Block", "COAL_BLOCK"],
                ["Dead Brain Coral Block", "DEAD_BRAIN_CORAL_BLOCK"],
                ["Dead Bubble Coral Block", "DEAD_BUBBLE_CORAL_BLOCK"],
                ["Dead Fire Coral Block", "DEAD_FIRE_CORAL_BLOCK"],
                ["Dead Horn Coral Block", "DEAD_HORN_CORAL_BLOCK"],
                ["Dead Tube Coral Block", "DEAD_TUBE_CORAL_BLOCK"],
                ["Dried Kelp Block", "DRIED_KELP_BLOCK"],
                ["Dripstone Block", "DRIPSTONE_BLOCK"],
                ["Emerald Block", "EMERALD_BLOCK"],
                ["Fire Coral Block", "FIRE_CORAL_BLOCK"],
                ["Gold Block", "GOLD_BLOCK"],
                ["Hay Block", "HAY_BLOCK"],
                ["Honeycomb Block", "HONEYCOMB_BLOCK"],
                ["Horn Coral Block", "HORN_CORAL_BLOCK"],
                ["Lapis Block", "LAPIS_BLOCK"],
                ["Nether Wart Block", "NETHER_WART_BLOCK"],
                ["Pale Moss Block", "PALE_MOSS_BLOCK"],
                ["Purpur Block", "PURPUR_BLOCK"],
                ["Quartz Block", "QUARTZ_BLOCK"],
                ["Raw Copper Block", "RAW_COPPER_BLOCK"],
                ["Raw Gold Block", "RAW_GOLD_BLOCK"],
                ["Raw Iron Block", "RAW_IRON_BLOCK"],
                ["Red Mushroom Block", "RED_MUSHROOM_BLOCK"],
                ["Resin Block", "RESIN_BLOCK"],
                ["Stripped Bamboo Block", "STRIPPED_BAMBOO_BLOCK"],
                ["Structure Block", "STRUCTURE_BLOCK"],
                ["Test Block", "TEST_BLOCK"],
                ["Test Instance Block", "TEST_INSTANCE_BLOCK"],
                ["Tube Coral Block", "TUBE_CORAL_BLOCK"],
                ["Warped Wart Block", "WARPED_WART_BLOCK"],
                ["Waxed Copper Block", "WAXED_COPPER_BLOCK"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_commands'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Commands")
                .appendField(new Blockly.FieldDropdown([
                ["Chain Command Block", "CHAIN_COMMAND_BLOCK"],
                ["Command Block", "COMMAND_BLOCK"],
                ["Repeating Command Block", "REPEATING_COMMAND_BLOCK"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_block_picker_general'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Other Blocks")
                .appendField(new Blockly.FieldDropdown([
                ["Amethyst Cluster", "AMETHYST_CLUSTER"],
                ["Andesite Slab", "ANDESITE_SLAB"],
                ["Andesite Stairs", "ANDESITE_STAIRS"],
                ["Azalea Leaves", "AZALEA_LEAVES"],
                ["Bamboo Mosaic", "BAMBOO_MOSAIC"],
                ["Bamboo Mosaic Slab", "BAMBOO_MOSAIC_SLAB"],
                ["Bamboo Mosaic Stairs", "BAMBOO_MOSAIC_STAIRS"],
                ["Bee Nest", "BEE_NEST"],
                ["Big Dripleaf", "BIG_DRIPLEAF"],
                ["Blackstone Slab", "BLACKSTONE_SLAB"],
                ["Blackstone Stairs", "BLACKSTONE_STAIRS"],
                ["Brain Coral", "BRAIN_CORAL"],
                ["Brain Coral Fan", "BRAIN_CORAL_FAN"],
                ["Brewing Stand", "BREWING_STAND"],
                ["Brick Slab", "BRICK_SLAB"],
                ["Brick Stairs", "BRICK_STAIRS"],
                ["Brown Mushroom", "BROWN_MUSHROOM"],
                ["Bubble Coral", "BUBBLE_CORAL"],
                ["Bubble Coral Fan", "BUBBLE_CORAL_FAN"],
                ["Budding Amethyst", "BUDDING_AMETHYST"],
                ["Cactus Flower", "CACTUS_FLOWER"],
                ["Cake", "CAKE"],
                ["Calibrated Sculk Sensor", "CALIBRATED_SCULK_SENSOR"],
                ["Cartography Table", "CARTOGRAPHY_TABLE"],
                ["Carved Pumpkin", "CARVED_PUMPKIN"],
                ["Chipped Anvil", "CHIPPED_ANVIL"],
                ["Chiseled Bookshelf", "CHISELED_BOOKSHELF"],
                ["Chiseled Red Sandstone", "CHISELED_RED_SANDSTONE"],
                ["Chiseled Resin Bricks", "CHISELED_RESIN_BRICKS"],
                ["Chiseled Sandstone", "CHISELED_SANDSTONE"],
                ["Chiseled Tuff", "CHISELED_TUFF"],
                ["Chorus Flower", "CHORUS_FLOWER"],
                ["Closed Eyeblossom", "CLOSED_EYEBLOSSOM"],
                ["Cobbled Deepslate", "COBBLED_DEEPSLATE"],
                ["Cobbled Deepslate Slab", "COBBLED_DEEPSLATE_SLAB"],
                ["Cobbled Deepslate Stairs", "COBBLED_DEEPSLATE_STAIRS"],
                ["Cobblestone", "COBBLESTONE"],
                ["Cobblestone Slab", "COBBLESTONE_SLAB"],
                ["Cobblestone Stairs", "COBBLESTONE_STAIRS"],
                ["Cobweb", "COBWEB"],
                ["Copper Chest", "COPPER_CHEST"],
                ["Copper Door", "COPPER_DOOR"],
                ["Copper Golem Statue", "COPPER_GOLEM_STATUE"],
                ["Copper Torch", "COPPER_TORCH"],
                ["Copper Trapdoor", "COPPER_TRAPDOOR"],
                ["Crafting Table", "CRAFTING_TABLE"],
                ["Creaking Heart", "CREAKING_HEART"],
                ["Creeper Head", "CREEPER_HEAD"],
                ["Crimson Fungus", "CRIMSON_FUNGUS"],
                ["Crimson Hyphae", "CRIMSON_HYPHAE"],
                ["Crimson Nylium", "CRIMSON_NYLIUM"],
                ["Crimson Roots", "CRIMSON_ROOTS"],
                ["Crimson Stem", "CRIMSON_STEM"],
                ["Cut Red Sandstone", "CUT_RED_SANDSTONE"],
                ["Cut Red Sandstone Slab", "CUT_RED_SANDSTONE_SLAB"],
                ["Cut Sandstone", "CUT_SANDSTONE"],
                ["Cut Sandstone Slab", "CUT_SANDSTONE_SLAB"],
                ["Damaged Anvil", "DAMAGED_ANVIL"],
                ["Dark Prismarine", "DARK_PRISMARINE"],
                ["Dark Prismarine Slab", "DARK_PRISMARINE_SLAB"],
                ["Dark Prismarine Stairs", "DARK_PRISMARINE_STAIRS"],
                ["Dead Brain Coral", "DEAD_BRAIN_CORAL"],
                ["Dead Brain Coral Fan", "DEAD_BRAIN_CORAL_FAN"],
                ["Dead Bubble Coral", "DEAD_BUBBLE_CORAL"],
                ["Dead Bubble Coral Fan", "DEAD_BUBBLE_CORAL_FAN"],
                ["Dead Bush", "DEAD_BUSH"],
                ["Dead Fire Coral", "DEAD_FIRE_CORAL"],
                ["Dead Fire Coral Fan", "DEAD_FIRE_CORAL_FAN"],
                ["Dead Horn Coral", "DEAD_HORN_CORAL"],
                ["Dead Horn Coral Fan", "DEAD_HORN_CORAL_FAN"],
                ["Dead Tube Coral", "DEAD_TUBE_CORAL"],
                ["Dead Tube Coral Fan", "DEAD_TUBE_CORAL_FAN"],
                ["Decorated Pot", "DECORATED_POT"],
                ["Deepslate Brick Slab", "DEEPSLATE_BRICK_SLAB"],
                ["Deepslate Brick Stairs", "DEEPSLATE_BRICK_STAIRS"],
                ["Deepslate Tile Slab", "DEEPSLATE_TILE_SLAB"],
                ["Deepslate Tile Stairs", "DEEPSLATE_TILE_STAIRS"],
                ["Diorite Slab", "DIORITE_SLAB"],
                ["Diorite Stairs", "DIORITE_STAIRS"],
                ["Dragon Egg", "DRAGON_EGG"],
                ["Dragon Head", "DRAGON_HEAD"],
                ["Dried Ghast", "DRIED_GHAST"],
                ["Enchanting Table", "ENCHANTING_TABLE"],
                ["End Portal Frame", "END_PORTAL_FRAME"],
                ["End Stone", "END_STONE"],
                ["End Stone Brick Slab", "END_STONE_BRICK_SLAB"],
                ["End Stone Brick Stairs", "END_STONE_BRICK_STAIRS"],
                ["Exposed Chiseled Copper", "EXPOSED_CHISELED_COPPER"],
                ["Exposed Cut Copper", "EXPOSED_CUT_COPPER"],
                ["Exposed Lightning Rod", "EXPOSED_LIGHTNING_ROD"],
                ["Firefly Bush", "FIREFLY_BUSH"],
                ["Fire Coral", "FIRE_CORAL"],
                ["Fire Coral Fan", "FIRE_CORAL_FAN"],
                ["Fletching Table", "FLETCHING_TABLE"],
                ["Flowering Azalea", "FLOWERING_AZALEA"],
                ["Flowering Azalea Leaves", "FLOWERING_AZALEA_LEAVES"],
                ["Flower Pot", "FLOWER_POT"],
                ["Gilded Blackstone", "GILDED_BLACKSTONE"],
                ["Glow Lichen", "GLOW_LICHEN"],
                ["Granite Slab", "GRANITE_SLAB"],
                ["Granite Stairs", "GRANITE_STAIRS"],
                ["Hanging Roots", "HANGING_ROOTS"],
                ["Heavy Core", "HEAVY_CORE"],
                ["Heavy Weighted Pressure Plate", "HEAVY_WEIGHTED_PRESSURE_PLATE"],
                ["Horn Coral", "HORN_CORAL"],
                ["Horn Coral Fan", "HORN_CORAL_FAN"],
                ["Infested Chiseled Stone Bricks", "INFESTED_CHISELED_STONE_BRICKS"],
                ["Infested Cobblestone", "INFESTED_COBBLESTONE"],
                ["Infested Cracked Stone Bricks", "INFESTED_CRACKED_STONE_BRICKS"],
                ["Infested Deepslate", "INFESTED_DEEPSLATE"],
                ["Infested Mossy Stone Bricks", "INFESTED_MOSSY_STONE_BRICKS"],
                ["Infested Stone", "INFESTED_STONE"],
                ["Infested Stone Bricks", "INFESTED_STONE_BRICKS"],
                ["Iron Door", "IRON_DOOR"],
                ["Iron Trapdoor", "IRON_TRAPDOOR"],
                ["Kelp", "KELP"],
                ["Large Amethyst Bud", "LARGE_AMETHYST_BUD"],
                ["Large Fern", "LARGE_FERN"],
                ["Leaf Litter", "LEAF_LITTER"],
                ["Lightning Rod", "LIGHTNING_ROD"],
                ["Light Weighted Pressure Plate", "LIGHT_WEIGHTED_PRESSURE_PLATE"],
                ["Mangrove Propagule", "MANGROVE_PROPAGULE"],
                ["Mangrove Roots", "MANGROVE_ROOTS"],
                ["Medium Amethyst Bud", "MEDIUM_AMETHYST_BUD"],
                ["Melon", "MELON"],
                ["Mossy Cobblestone", "MOSSY_COBBLESTONE"],
                ["Mossy Cobblestone Slab", "MOSSY_COBBLESTONE_SLAB"],
                ["Mossy Cobblestone Stairs", "MOSSY_COBBLESTONE_STAIRS"],
                ["Mossy Stone Brick Slab", "MOSSY_STONE_BRICK_SLAB"],
                ["Mossy Stone Brick Stairs", "MOSSY_STONE_BRICK_STAIRS"],
                ["Moss Carpet", "MOSS_CARPET"],
                ["Muddy Mangrove Roots", "MUDDY_MANGROVE_ROOTS"],
                ["Mud Brick Slab", "MUD_BRICK_SLAB"],
                ["Mud Brick Stairs", "MUD_BRICK_STAIRS"],
                ["Mushroom Stem", "MUSHROOM_STEM"],
                ["Nether Brick Fence", "NETHER_BRICK_FENCE"],
                ["Nether Brick Slab", "NETHER_BRICK_SLAB"],
                ["Nether Brick Stairs", "NETHER_BRICK_STAIRS"],
                ["Nether Sprouts", "NETHER_SPROUTS"],
                ["Nether Wart", "NETHER_WART"],
                ["Open Eyeblossom", "OPEN_EYEBLOSSOM"],
                ["Oxidized Chiseled Copper", "OXIDIZED_CHISELED_COPPER"],
                ["Oxidized Cut Copper", "OXIDIZED_CUT_COPPER"],
                ["Oxidized Lightning Rod", "OXIDIZED_LIGHTNING_ROD"],
                ["Packed Mud", "PACKED_MUD"],
                ["Pale Hanging Moss", "PALE_HANGING_MOSS"],
                ["Pale Moss Carpet", "PALE_MOSS_CARPET"],
                ["Petrified Oak Slab", "PETRIFIED_OAK_SLAB"],
                ["Piglin Head", "PIGLIN_HEAD"],
                ["Pink Petals", "PINK_PETALS"],
                ["Player Head", "PLAYER_HEAD"],
                ["Pointed Dripstone", "POINTED_DRIPSTONE"],
                ["Polished Andesite", "POLISHED_ANDESITE"],
                ["Polished Andesite Slab", "POLISHED_ANDESITE_SLAB"],
                ["Polished Andesite Stairs", "POLISHED_ANDESITE_STAIRS"],
                ["Polished Basalt", "POLISHED_BASALT"],
                ["Polished Blackstone", "POLISHED_BLACKSTONE"],
                ["Polished Blackstone Brick Slab", "POLISHED_BLACKSTONE_BRICK_SLAB"],
                ["Polished Blackstone Brick Stairs", "POLISHED_BLACKSTONE_BRICK_STAIRS"],
                ["Polished Blackstone Button", "POLISHED_BLACKSTONE_BUTTON"],
                ["Polished Blackstone Pressure Plate", "POLISHED_BLACKSTONE_PRESSURE_PLATE"],
                ["Polished Blackstone Slab", "POLISHED_BLACKSTONE_SLAB"],
                ["Polished Blackstone Stairs", "POLISHED_BLACKSTONE_STAIRS"],
                ["Polished Deepslate", "POLISHED_DEEPSLATE"],
                ["Polished Deepslate Slab", "POLISHED_DEEPSLATE_SLAB"],
                ["Polished Deepslate Stairs", "POLISHED_DEEPSLATE_STAIRS"],
                ["Polished Diorite", "POLISHED_DIORITE"],
                ["Polished Diorite Slab", "POLISHED_DIORITE_SLAB"],
                ["Polished Diorite Stairs", "POLISHED_DIORITE_STAIRS"],
                ["Polished Granite", "POLISHED_GRANITE"],
                ["Polished Granite Slab", "POLISHED_GRANITE_SLAB"],
                ["Polished Granite Stairs", "POLISHED_GRANITE_STAIRS"],
                ["Polished Tuff", "POLISHED_TUFF"],
                ["Polished Tuff Slab", "POLISHED_TUFF_SLAB"],
                ["Polished Tuff Stairs", "POLISHED_TUFF_STAIRS"],
                ["Prismarine Bricks", "PRISMARINE_BRICKS"],
                ["Prismarine Brick Slab", "PRISMARINE_BRICK_SLAB"],
                ["Prismarine Brick Stairs", "PRISMARINE_BRICK_STAIRS"],
                ["Prismarine Slab", "PRISMARINE_SLAB"],
                ["Prismarine Stairs", "PRISMARINE_STAIRS"],
                ["Pumpkin", "PUMPKIN"],
                ["Purpur Pillar", "PURPUR_PILLAR"],
                ["Purpur Slab", "PURPUR_SLAB"],
                ["Purpur Stairs", "PURPUR_STAIRS"],
                ["Quartz Pillar", "QUARTZ_PILLAR"],
                ["Quartz Slab", "QUARTZ_SLAB"],
                ["Quartz Stairs", "QUARTZ_STAIRS"],
                ["Red Mushroom", "RED_MUSHROOM"],
                ["Red Nether Brick Slab", "RED_NETHER_BRICK_SLAB"],
                ["Red Nether Brick Stairs", "RED_NETHER_BRICK_STAIRS"],
                ["Red Sandstone", "RED_SANDSTONE"],
                ["Red Sandstone Slab", "RED_SANDSTONE_SLAB"],
                ["Red Sandstone Stairs", "RED_SANDSTONE_STAIRS"],
                ["Reinforced Deepslate", "REINFORCED_DEEPSLATE"],
                ["Resin Bricks", "RESIN_BRICKS"],
                ["Resin Brick Slab", "RESIN_BRICK_SLAB"],
                ["Resin Brick Stairs", "RESIN_BRICK_STAIRS"],
                ["Resin Clump", "RESIN_CLUMP"],
                ["Sandstone Slab", "SANDSTONE_SLAB"],
                ["Sandstone Stairs", "SANDSTONE_STAIRS"],
                ["Sculk Catalyst", "SCULK_CATALYST"],
                ["Sculk Sensor", "SCULK_SENSOR"],
                ["Sculk Shrieker", "SCULK_SHRIEKER"],
                ["Sculk Vein", "SCULK_VEIN"],
                ["Sea Pickle", "SEA_PICKLE"],
                ["Short Dry Grass", "SHORT_DRY_GRASS"],
                ["Short Grass", "SHORT_GRASS"],
                ["Skeleton Skull", "SKELETON_SKULL"],
                ["Small Amethyst Bud", "SMALL_AMETHYST_BUD"],
                ["Small Dripleaf", "SMALL_DRIPLEAF"],
                ["Smithing Table", "SMITHING_TABLE"],
                ["Smooth Basalt", "SMOOTH_BASALT"],
                ["Smooth Quartz", "SMOOTH_QUARTZ"],
                ["Smooth Quartz Slab", "SMOOTH_QUARTZ_SLAB"],
                ["Smooth Quartz Stairs", "SMOOTH_QUARTZ_STAIRS"],
                ["Smooth Red Sandstone", "SMOOTH_RED_SANDSTONE"],
                ["Smooth Red Sandstone Slab", "SMOOTH_RED_SANDSTONE_SLAB"],
                ["Smooth Red Sandstone Stairs", "SMOOTH_RED_SANDSTONE_STAIRS"],
                ["Smooth Sandstone", "SMOOTH_SANDSTONE"],
                ["Smooth Sandstone Slab", "SMOOTH_SANDSTONE_SLAB"],
                ["Smooth Sandstone Stairs", "SMOOTH_SANDSTONE_STAIRS"],
                ["Smooth Stone", "SMOOTH_STONE"],
                ["Smooth Stone Slab", "SMOOTH_STONE_SLAB"],
                ["Sniffer Egg", "SNIFFER_EGG"],
                ["Soul Campfire", "SOUL_CAMPFIRE"],
                ["Soul Sand", "SOUL_SAND"],
                ["Soul Soil", "SOUL_SOIL"],
                ["Spore Blossom", "SPORE_BLOSSOM"],
                ["Stone Brick Slab", "STONE_BRICK_SLAB"],
                ["Stone Brick Stairs", "STONE_BRICK_STAIRS"],
                ["Stone Button", "STONE_BUTTON"],
                ["Stone Pressure Plate", "STONE_PRESSURE_PLATE"],
                ["Stone Slab", "STONE_SLAB"],
                ["Stone Stairs", "STONE_STAIRS"],
                ["Stripped Crimson Hyphae", "STRIPPED_CRIMSON_HYPHAE"],
                ["Stripped Crimson Stem", "STRIPPED_CRIMSON_STEM"],
                ["Stripped Warped Hyphae", "STRIPPED_WARPED_HYPHAE"],
                ["Stripped Warped Stem", "STRIPPED_WARPED_STEM"],
                ["Structure Void", "STRUCTURE_VOID"],
                ["Suspicious Gravel", "SUSPICIOUS_GRAVEL"],
                ["Suspicious Sand", "SUSPICIOUS_SAND"],
                ["Tall Dry Grass", "TALL_DRY_GRASS"],
                ["Tall Grass", "TALL_GRASS"],
                ["Tube Coral", "TUBE_CORAL"],
                ["Tube Coral Fan", "TUBE_CORAL_FAN"],
                ["Tuff Bricks", "TUFF_BRICKS"],
                ["Tuff Brick Slab", "TUFF_BRICK_SLAB"],
                ["Tuff Brick Stairs", "TUFF_BRICK_STAIRS"],
                ["Tuff Slab", "TUFF_SLAB"],
                ["Tuff Stairs", "TUFF_STAIRS"],
                ["Turtle Egg", "TURTLE_EGG"],
                ["Warped Button", "WARPED_BUTTON"],
                ["Warped Door", "WARPED_DOOR"],
                ["Warped Fence", "WARPED_FENCE"],
                ["Warped Fence Gate", "WARPED_FENCE_GATE"],
                ["Warped Fungus", "WARPED_FUNGUS"],
                ["Warped Hanging Sign", "WARPED_HANGING_SIGN"],
                ["Warped Hyphae", "WARPED_HYPHAE"],
                ["Warped Nylium", "WARPED_NYLIUM"],
                ["Warped Planks", "WARPED_PLANKS"],
                ["Warped Pressure Plate", "WARPED_PRESSURE_PLATE"],
                ["Warped Roots", "WARPED_ROOTS"],
                ["Warped Shelf", "WARPED_SHELF"],
                ["Warped Sign", "WARPED_SIGN"],
                ["Warped Slab", "WARPED_SLAB"],
                ["Warped Stairs", "WARPED_STAIRS"],
                ["Warped Stem", "WARPED_STEM"],
                ["Warped Trapdoor", "WARPED_TRAPDOOR"],
                ["Waxed Chiseled Copper", "WAXED_CHISELED_COPPER"],
                ["Waxed Cut Copper", "WAXED_CUT_COPPER"],
                ["Waxed Exposed Chiseled Copper", "WAXED_EXPOSED_CHISELED_COPPER"],
                ["Waxed Exposed Copper", "WAXED_EXPOSED_COPPER"],
                ["Waxed Exposed Cut Copper", "WAXED_EXPOSED_CUT_COPPER"],
                ["Waxed Exposed Lightning Rod", "WAXED_EXPOSED_LIGHTNING_ROD"],
                ["Waxed Lightning Rod", "WAXED_LIGHTNING_ROD"],
                ["Waxed Oxidized Chiseled Copper", "WAXED_OXIDIZED_CHISELED_COPPER"],
                ["Waxed Oxidized Copper", "WAXED_OXIDIZED_COPPER"],
                ["Waxed Oxidized Cut Copper", "WAXED_OXIDIZED_CUT_COPPER"],
                ["Waxed Oxidized Lightning Rod", "WAXED_OXIDIZED_LIGHTNING_ROD"],
                ["Waxed Weathered Chiseled Copper", "WAXED_WEATHERED_CHISELED_COPPER"],
                ["Waxed Weathered Copper", "WAXED_WEATHERED_COPPER"],
                ["Waxed Weathered Cut Copper", "WAXED_WEATHERED_CUT_COPPER"],
                ["Waxed Weathered Lightning Rod", "WAXED_WEATHERED_LIGHTNING_ROD"],
                ["Weathered Chiseled Copper", "WEATHERED_CHISELED_COPPER"],
                ["Weathered Cut Copper", "WEATHERED_CUT_COPPER"],
                ["Weathered Lightning Rod", "WEATHERED_LIGHTNING_ROD"],
                ["Wet Sponge", "WET_SPONGE"],
                ["Wheat", "WHEAT"],
                ["Wither Skeleton Skull", "WITHER_SKELETON_SKULL"],
                ["Zombie Head", "ZOMBIE_HEAD"]
                ]), "VALUE");
            this.setOutput(true, "Block");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };
}