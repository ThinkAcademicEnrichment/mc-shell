import { MCED } from "../lib/constants.mjs";
export function defineMinecraftMaterialBlocks(Blockly) {

    Blockly.Blocks['minecraft_picker_doors'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Doors")
                .appendField(new Blockly.FieldDropdown([
                ["Oxidized Copper Door", "OXIDIZED_COPPER_DOOR"],
                ["Waxed Exposed Copper Door", "WAXED_EXPOSED_COPPER_DOOR"],
                ["Pale Oak Door", "PALE_OAK_DOOR"],
                ["Crimson Door", "CRIMSON_DOOR"],
                ["Weathered Copper Door", "WEATHERED_COPPER_DOOR"],
                ["Acacia Door", "ACACIA_DOOR"],
                ["Copper Door", "COPPER_DOOR"],
                ["Cherry Door", "CHERRY_DOOR"],
                ["Mangrove Door", "MANGROVE_DOOR"],
                ["Warped Door", "WARPED_DOOR"],
                ["Waxed Copper Door", "WAXED_COPPER_DOOR"],
                ["Waxed Oxidized Copper Door", "WAXED_OXIDIZED_COPPER_DOOR"],
                ["Dark Oak Door", "DARK_OAK_DOOR"],
                ["Iron Door", "IRON_DOOR"],
                ["Spruce Door", "SPRUCE_DOOR"],
                ["Bamboo Door", "BAMBOO_DOOR"],
                ["Jungle Door", "JUNGLE_DOOR"],
                ["Exposed Copper Door", "EXPOSED_COPPER_DOOR"],
                ["Waxed Weathered Copper Door", "WAXED_WEATHERED_COPPER_DOOR"],
                ["Birch Door", "BIRCH_DOOR"],
                ["Oak Door", "OAK_DOOR"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Doors material.");
        }
    };

    Blockly.Blocks['minecraft_picker_fences'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Fences")
                .appendField(new Blockly.FieldDropdown([
                ["Jungle Fence", "JUNGLE_FENCE"],
                ["Oak Fence", "OAK_FENCE"],
                ["Pale Oak Fence", "PALE_OAK_FENCE"],
                ["Birch Fence", "BIRCH_FENCE"],
                ["Acacia Fence", "ACACIA_FENCE"],
                ["Spruce Fence", "SPRUCE_FENCE"],
                ["Nether Brick Fence", "NETHER_BRICK_FENCE"],
                ["Cherry Fence", "CHERRY_FENCE"],
                ["Warped Fence", "WARPED_FENCE"],
                ["Crimson Fence", "CRIMSON_FENCE"],
                ["Bamboo Fence", "BAMBOO_FENCE"],
                ["Mangrove Fence", "MANGROVE_FENCE"],
                ["Dark Oak Fence", "DARK_OAK_FENCE"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Fences material.");
        }
    };

    Blockly.Blocks['minecraft_picker_gates'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Gates")
                .appendField(new Blockly.FieldDropdown([
                ["Bamboo Fence Gate", "BAMBOO_FENCE_GATE"],
                ["Spruce Fence Gate", "SPRUCE_FENCE_GATE"],
                ["Mangrove Fence Gate", "MANGROVE_FENCE_GATE"],
                ["Warped Fence Gate", "WARPED_FENCE_GATE"],
                ["Birch Fence Gate", "BIRCH_FENCE_GATE"],
                ["Oak Fence Gate", "OAK_FENCE_GATE"],
                ["Acacia Fence Gate", "ACACIA_FENCE_GATE"],
                ["Dark Oak Fence Gate", "DARK_OAK_FENCE_GATE"],
                ["Pale Oak Fence Gate", "PALE_OAK_FENCE_GATE"],
                ["Crimson Fence Gate", "CRIMSON_FENCE_GATE"],
                ["Jungle Fence Gate", "JUNGLE_FENCE_GATE"],
                ["Cherry Fence Gate", "CHERRY_FENCE_GATE"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Gates material.");
        }
    };

    Blockly.Blocks['minecraft_picker_glass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Glass")
                .appendField(new Blockly.FieldDropdown([
                ["Glass", "GLASS"],
                ["Glass Pane", "GLASS_PANE"],
                ["Tinted Glass", "TINTED_GLASS"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Glass material.");
        }
    };

    Blockly.Blocks['minecraft_picker_ores'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Ores")
                .appendField(new Blockly.FieldDropdown([
                ["Coal Ore", "COAL_ORE"],
                ["Deepslate Coal Ore", "DEEPSLATE_COAL_ORE"],
                ["Iron Ore", "IRON_ORE"],
                ["Deepslate Iron Ore", "DEEPSLATE_IRON_ORE"],
                ["Copper Ore", "COPPER_ORE"],
                ["Deepslate Copper Ore", "DEEPSLATE_COPPER_ORE"],
                ["Gold Ore", "GOLD_ORE"],
                ["Deepslate Gold Ore", "DEEPSLATE_GOLD_ORE"],
                ["Redstone Ore", "REDSTONE_ORE"],
                ["Deepslate Redstone Ore", "DEEPSLATE_REDSTONE_ORE"],
                ["Emerald Ore", "EMERALD_ORE"],
                ["Deepslate Emerald Ore", "DEEPSLATE_EMERALD_ORE"],
                ["Lapis Ore", "LAPIS_ORE"],
                ["Deepslate Lapis Ore", "DEEPSLATE_LAPIS_ORE"],
                ["Diamond Ore", "DIAMOND_ORE"],
                ["Deepslate Diamond Ore", "DEEPSLATE_DIAMOND_ORE"],
                ["Nether Gold Ore", "NETHER_GOLD_ORE"],
                ["Nether Quartz Ore", "NETHER_QUARTZ_ORE"],
                ["Ancient Debris", "ANCIENT_DEBRIS"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Ores material.");
        }
    };

    Blockly.Blocks['minecraft_picker_redstone_components'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Redstone Components")
                .appendField(new Blockly.FieldDropdown([
                ["Redstone Wire", "REDSTONE_WIRE"],
                ["Redstone Block", "REDSTONE_BLOCK"],
                ["Redstone Torch", "REDSTONE_TORCH"],
                ["Repeater", "REPEATER"],
                ["Comparator", "COMPARATOR"],
                ["Piston", "PISTON"],
                ["Sticky Piston", "STICKY_PISTON"],
                ["Slime Block", "SLIME_BLOCK"],
                ["Honey Block", "HONEY_BLOCK"],
                ["Observer", "OBSERVER"],
                ["Dropper", "DROPPER"],
                ["Dispenser", "DISPENSER"],
                ["Hopper", "HOPPER"],
                ["Lectern", "LECTERN"],
                ["Lever", "LEVER"],
                ["Daylight Detector", "DAYLIGHT_DETECTOR"],
                ["Tripwire Hook", "TRIPWIRE_HOOK"],
                ["Target", "TARGET"],
                ["Note Block", "NOTE_BLOCK"],
                ["Rail", "RAIL"],
                ["Powered Rail", "POWERED_RAIL"],
                ["Detector Rail", "DETECTOR_RAIL"],
                ["Activator Rail", "ACTIVATOR_RAIL"],
                ["Redstone Lamp", "REDSTONE_LAMP"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Redstone Components material.");
        }
    };

    Blockly.Blocks['minecraft_picker_slabs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Slabs")
                .appendField(new Blockly.FieldDropdown([
                ["Polished Blackstone Brick Slab", "POLISHED_BLACKSTONE_BRICK_SLAB"],
                ["End Stone Brick Slab", "END_STONE_BRICK_SLAB"],
                ["Smooth Stone Slab", "SMOOTH_STONE_SLAB"],
                ["Spruce Slab", "SPRUCE_SLAB"],
                ["Polished Blackstone Slab", "POLISHED_BLACKSTONE_SLAB"],
                ["Mossy Cobblestone Slab", "MOSSY_COBBLESTONE_SLAB"],
                ["Cobbled Deepslate Slab", "COBBLED_DEEPSLATE_SLAB"],
                ["Purpur Slab", "PURPUR_SLAB"],
                ["Smooth Quartz Slab", "SMOOTH_QUARTZ_SLAB"],
                ["Polished Tuff Slab", "POLISHED_TUFF_SLAB"],
                ["Sandstone Slab", "SANDSTONE_SLAB"],
                ["Oak Slab", "OAK_SLAB"],
                ["Polished Deepslate Slab", "POLISHED_DEEPSLATE_SLAB"],
                ["Prismarine Brick Slab", "PRISMARINE_BRICK_SLAB"],
                ["Waxed Exposed Cut Copper Slab", "WAXED_EXPOSED_CUT_COPPER_SLAB"],
                ["Stone Brick Slab", "STONE_BRICK_SLAB"],
                ["Blackstone Slab", "BLACKSTONE_SLAB"],
                ["Polished Andesite Slab", "POLISHED_ANDESITE_SLAB"],
                ["Birch Slab", "BIRCH_SLAB"],
                ["Tuff Brick Slab", "TUFF_BRICK_SLAB"],
                ["Brick Slab", "BRICK_SLAB"],
                ["Stone Slab", "STONE_SLAB"],
                ["Diorite Slab", "DIORITE_SLAB"],
                ["Cut Red Sandstone Slab", "CUT_RED_SANDSTONE_SLAB"],
                ["Deepslate Tile Slab", "DEEPSLATE_TILE_SLAB"],
                ["Mossy Stone Brick Slab", "MOSSY_STONE_BRICK_SLAB"],
                ["Bamboo Mosaic Slab", "BAMBOO_MOSAIC_SLAB"],
                ["Dark Oak Slab", "DARK_OAK_SLAB"],
                ["Prismarine Slab", "PRISMARINE_SLAB"],
                ["Polished Granite Slab", "POLISHED_GRANITE_SLAB"],
                ["Waxed Cut Copper Slab", "WAXED_CUT_COPPER_SLAB"],
                ["Smooth Red Sandstone Slab", "SMOOTH_RED_SANDSTONE_SLAB"],
                ["Polished Diorite Slab", "POLISHED_DIORITE_SLAB"],
                ["Bamboo Slab", "BAMBOO_SLAB"],
                ["Warped Slab", "WARPED_SLAB"],
                ["Smooth Sandstone Slab", "SMOOTH_SANDSTONE_SLAB"],
                ["Red Nether Brick Slab", "RED_NETHER_BRICK_SLAB"],
                ["Cut Copper Slab", "CUT_COPPER_SLAB"],
                ["Acacia Slab", "ACACIA_SLAB"],
                ["Tuff Slab", "TUFF_SLAB"],
                ["Crimson Slab", "CRIMSON_SLAB"],
                ["Waxed Oxidized Cut Copper Slab", "WAXED_OXIDIZED_CUT_COPPER_SLAB"],
                ["Oxidized Cut Copper Slab", "OXIDIZED_CUT_COPPER_SLAB"],
                ["Cherry Slab", "CHERRY_SLAB"],
                ["Granite Slab", "GRANITE_SLAB"],
                ["Jungle Slab", "JUNGLE_SLAB"],
                ["Weathered Cut Copper Slab", "WEATHERED_CUT_COPPER_SLAB"],
                ["Andesite Slab", "ANDESITE_SLAB"],
                ["Pale Oak Slab", "PALE_OAK_SLAB"],
                ["Mangrove Slab", "MANGROVE_SLAB"],
                ["Resin Brick Slab", "RESIN_BRICK_SLAB"],
                ["Dark Prismarine Slab", "DARK_PRISMARINE_SLAB"],
                ["Deepslate Brick Slab", "DEEPSLATE_BRICK_SLAB"],
                ["Nether Brick Slab", "NETHER_BRICK_SLAB"],
                ["Cobblestone Slab", "COBBLESTONE_SLAB"],
                ["Quartz Slab", "QUARTZ_SLAB"],
                ["Exposed Cut Copper Slab", "EXPOSED_CUT_COPPER_SLAB"],
                ["Red Sandstone Slab", "RED_SANDSTONE_SLAB"],
                ["Mud Brick Slab", "MUD_BRICK_SLAB"],
                ["Petrified Oak Slab", "PETRIFIED_OAK_SLAB"],
                ["Cut Sandstone Slab", "CUT_SANDSTONE_SLAB"],
                ["Waxed Weathered Cut Copper Slab", "WAXED_WEATHERED_CUT_COPPER_SLAB"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Slabs material.");
        }
    };

    Blockly.Blocks['minecraft_picker_stairs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Stairs")
                .appendField(new Blockly.FieldDropdown([
                ["Smooth Quartz Stairs", "SMOOTH_QUARTZ_STAIRS"],
                ["Cobbled Deepslate Stairs", "COBBLED_DEEPSLATE_STAIRS"],
                ["End Stone Brick Stairs", "END_STONE_BRICK_STAIRS"],
                ["Purpur Stairs", "PURPUR_STAIRS"],
                ["Red Sandstone Stairs", "RED_SANDSTONE_STAIRS"],
                ["Smooth Sandstone Stairs", "SMOOTH_SANDSTONE_STAIRS"],
                ["Polished Blackstone Brick Stairs", "POLISHED_BLACKSTONE_BRICK_STAIRS"],
                ["Stone Stairs", "STONE_STAIRS"],
                ["Nether Brick Stairs", "NETHER_BRICK_STAIRS"],
                ["Deepslate Tile Stairs", "DEEPSLATE_TILE_STAIRS"],
                ["Blackstone Stairs", "BLACKSTONE_STAIRS"],
                ["Polished Deepslate Stairs", "POLISHED_DEEPSLATE_STAIRS"],
                ["Waxed Exposed Cut Copper Stairs", "WAXED_EXPOSED_CUT_COPPER_STAIRS"],
                ["Bamboo Stairs", "BAMBOO_STAIRS"],
                ["Crimson Stairs", "CRIMSON_STAIRS"],
                ["Cut Copper Stairs", "CUT_COPPER_STAIRS"],
                ["Birch Stairs", "BIRCH_STAIRS"],
                ["Smooth Red Sandstone Stairs", "SMOOTH_RED_SANDSTONE_STAIRS"],
                ["Waxed Cut Copper Stairs", "WAXED_CUT_COPPER_STAIRS"],
                ["Bamboo Mosaic Stairs", "BAMBOO_MOSAIC_STAIRS"],
                ["Stone Brick Stairs", "STONE_BRICK_STAIRS"],
                ["Dark Oak Stairs", "DARK_OAK_STAIRS"],
                ["Cobblestone Stairs", "COBBLESTONE_STAIRS"],
                ["Warped Stairs", "WARPED_STAIRS"],
                ["Mud Brick Stairs", "MUD_BRICK_STAIRS"],
                ["Polished Andesite Stairs", "POLISHED_ANDESITE_STAIRS"],
                ["Diorite Stairs", "DIORITE_STAIRS"],
                ["Polished Granite Stairs", "POLISHED_GRANITE_STAIRS"],
                ["Resin Brick Stairs", "RESIN_BRICK_STAIRS"],
                ["Cherry Stairs", "CHERRY_STAIRS"],
                ["Deepslate Brick Stairs", "DEEPSLATE_BRICK_STAIRS"],
                ["Andesite Stairs", "ANDESITE_STAIRS"],
                ["Polished Tuff Stairs", "POLISHED_TUFF_STAIRS"],
                ["Exposed Cut Copper Stairs", "EXPOSED_CUT_COPPER_STAIRS"],
                ["Quartz Stairs", "QUARTZ_STAIRS"],
                ["Acacia Stairs", "ACACIA_STAIRS"],
                ["Pale Oak Stairs", "PALE_OAK_STAIRS"],
                ["Spruce Stairs", "SPRUCE_STAIRS"],
                ["Tuff Stairs", "TUFF_STAIRS"],
                ["Prismarine Brick Stairs", "PRISMARINE_BRICK_STAIRS"],
                ["Oxidized Cut Copper Stairs", "OXIDIZED_CUT_COPPER_STAIRS"],
                ["Jungle Stairs", "JUNGLE_STAIRS"],
                ["Tuff Brick Stairs", "TUFF_BRICK_STAIRS"],
                ["Mangrove Stairs", "MANGROVE_STAIRS"],
                ["Polished Blackstone Stairs", "POLISHED_BLACKSTONE_STAIRS"],
                ["Polished Diorite Stairs", "POLISHED_DIORITE_STAIRS"],
                ["Mossy Cobblestone Stairs", "MOSSY_COBBLESTONE_STAIRS"],
                ["Granite Stairs", "GRANITE_STAIRS"],
                ["Dark Prismarine Stairs", "DARK_PRISMARINE_STAIRS"],
                ["Mossy Stone Brick Stairs", "MOSSY_STONE_BRICK_STAIRS"],
                ["Weathered Cut Copper Stairs", "WEATHERED_CUT_COPPER_STAIRS"],
                ["Prismarine Stairs", "PRISMARINE_STAIRS"],
                ["Red Nether Brick Stairs", "RED_NETHER_BRICK_STAIRS"],
                ["Brick Stairs", "BRICK_STAIRS"],
                ["Waxed Weathered Cut Copper Stairs", "WAXED_WEATHERED_CUT_COPPER_STAIRS"],
                ["Oak Stairs", "OAK_STAIRS"],
                ["Sandstone Stairs", "SANDSTONE_STAIRS"],
                ["Waxed Oxidized Cut Copper Stairs", "WAXED_OXIDIZED_CUT_COPPER_STAIRS"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Stairs material.");
        }
    };

    Blockly.Blocks['minecraft_picker_stone_bricks'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Stone Bricks")
                .appendField(new Blockly.FieldDropdown([
                ["Bricks", "BRICKS"],
                ["Stone Bricks", "STONE_BRICKS"],
                ["Mud Bricks", "MUD_BRICKS"],
                ["Deepslate Bricks", "DEEPSLATE_BRICKS"],
                ["Deepslate Tiles", "DEEPSLATE_TILES"],
                ["Nether Bricks", "NETHER_BRICKS"],
                ["Red Nether Bricks", "RED_NETHER_BRICKS"],
                ["Polished Blackstone Bricks", "POLISHED_BLACKSTONE_BRICKS"],
                ["End Stone Bricks", "END_STONE_BRICKS"],
                ["Quartz Bricks", "QUARTZ_BRICKS"],
                ["Chiseled Stone Bricks", "CHISELED_STONE_BRICKS"],
                ["Cracked Stone Bricks", "CRACKED_STONE_BRICKS"],
                ["Mossy Stone Bricks", "MOSSY_STONE_BRICKS"],
                ["Chiseled Nether Bricks", "CHISELED_NETHER_BRICKS"],
                ["Cracked Nether Bricks", "CRACKED_NETHER_BRICKS"],
                ["Chiseled Polished Blackstone", "CHISELED_POLISHED_BLACKSTONE"],
                ["Cracked Polished Blackstone Bricks", "CRACKED_POLISHED_BLACKSTONE_BRICKS"],
                ["Chiseled Deepslate", "CHISELED_DEEPSLATE"],
                ["Cracked Deepslate Bricks", "CRACKED_DEEPSLATE_BRICKS"],
                ["Cracked Deepslate Tiles", "CRACKED_DEEPSLATE_TILES"],
                ["Chiseled Tuff Bricks", "CHISELED_TUFF_BRICKS"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Stone Bricks material.");
        }
    };

    Blockly.Blocks['minecraft_picker_trapdoors'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Trapdoors")
                .appendField(new Blockly.FieldDropdown([
                ["Jungle Trapdoor", "JUNGLE_TRAPDOOR"],
                ["Crimson Trapdoor", "CRIMSON_TRAPDOOR"],
                ["Copper Trapdoor", "COPPER_TRAPDOOR"],
                ["Pale Oak Trapdoor", "PALE_OAK_TRAPDOOR"],
                ["Bamboo Trapdoor", "BAMBOO_TRAPDOOR"],
                ["Warped Trapdoor", "WARPED_TRAPDOOR"],
                ["Birch Trapdoor", "BIRCH_TRAPDOOR"],
                ["Waxed Copper Trapdoor", "WAXED_COPPER_TRAPDOOR"],
                ["Weathered Copper Trapdoor", "WEATHERED_COPPER_TRAPDOOR"],
                ["Waxed Oxidized Copper Trapdoor", "WAXED_OXIDIZED_COPPER_TRAPDOOR"],
                ["Cherry Trapdoor", "CHERRY_TRAPDOOR"],
                ["Waxed Weathered Copper Trapdoor", "WAXED_WEATHERED_COPPER_TRAPDOOR"],
                ["Exposed Copper Trapdoor", "EXPOSED_COPPER_TRAPDOOR"],
                ["Oak Trapdoor", "OAK_TRAPDOOR"],
                ["Spruce Trapdoor", "SPRUCE_TRAPDOOR"],
                ["Oxidized Copper Trapdoor", "OXIDIZED_COPPER_TRAPDOOR"],
                ["Waxed Exposed Copper Trapdoor", "WAXED_EXPOSED_COPPER_TRAPDOOR"],
                ["Acacia Trapdoor", "ACACIA_TRAPDOOR"],
                ["Mangrove Trapdoor", "MANGROVE_TRAPDOOR"],
                ["Iron Trapdoor", "IRON_TRAPDOOR"],
                ["Dark Oak Trapdoor", "DARK_OAK_TRAPDOOR"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Trapdoors material.");
        }
    };

    Blockly.Blocks['minecraft_picker_walls'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Walls")
                .appendField(new Blockly.FieldDropdown([
                ["Cobbled Deepslate Wall", "COBBLED_DEEPSLATE_WALL"],
                ["Mud Brick Wall", "MUD_BRICK_WALL"],
                ["Tuff Wall", "TUFF_WALL"],
                ["Red Sandstone Wall", "RED_SANDSTONE_WALL"],
                ["Brick Wall", "BRICK_WALL"],
                ["Mossy Cobblestone Wall", "MOSSY_COBBLESTONE_WALL"],
                ["Deepslate Brick Wall", "DEEPSLATE_BRICK_WALL"],
                ["Mossy Stone Brick Wall", "MOSSY_STONE_BRICK_WALL"],
                ["Stone Brick Wall", "STONE_BRICK_WALL"],
                ["Polished Deepslate Wall", "POLISHED_DEEPSLATE_WALL"],
                ["Polished Tuff Wall", "POLISHED_TUFF_WALL"],
                ["End Stone Brick Wall", "END_STONE_BRICK_WALL"],
                ["Polished Blackstone Wall", "POLISHED_BLACKSTONE_WALL"],
                ["Diorite Wall", "DIORITE_WALL"],
                ["Blackstone Wall", "BLACKSTONE_WALL"],
                ["Andesite Wall", "ANDESITE_WALL"],
                ["Tuff Brick Wall", "TUFF_BRICK_WALL"],
                ["Nether Brick Wall", "NETHER_BRICK_WALL"],
                ["Sandstone Wall", "SANDSTONE_WALL"],
                ["Cobblestone Wall", "COBBLESTONE_WALL"],
                ["Deepslate Tile Wall", "DEEPSLATE_TILE_WALL"],
                ["Polished Blackstone Brick Wall", "POLISHED_BLACKSTONE_BRICK_WALL"],
                ["Resin Brick Wall", "RESIN_BRICK_WALL"],
                ["Prismarine Wall", "PRISMARINE_WALL"],
                ["Red Nether Brick Wall", "RED_NETHER_BRICK_WALL"],
                ["Granite Wall", "GRANITE_WALL"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Walls material.");
        }
    };

    Blockly.Blocks['minecraft_picker_wood_full'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Wood Full")
                .appendField(new Blockly.FieldDropdown([
                ["Oak Wood", "OAK_WOOD"],
                ["Spruce Wood", "SPRUCE_WOOD"],
                ["Birch Wood", "BIRCH_WOOD"],
                ["Jungle Wood", "JUNGLE_WOOD"],
                ["Acacia Wood", "ACACIA_WOOD"],
                ["Dark Oak Wood", "DARK_OAK_WOOD"],
                ["Mangrove Wood", "MANGROVE_WOOD"],
                ["Cherry Wood", "CHERRY_WOOD"],
                ["Crimson Hyphae", "CRIMSON_HYPHAE"],
                ["Warped Hyphae", "WARPED_HYPHAE"],
                ["Stripped Oak Wood", "STRIPPED_OAK_WOOD"],
                ["Stripped Spruce Wood", "STRIPPED_SPRUCE_WOOD"],
                ["Stripped Birch Wood", "STRIPPED_BIRCH_WOOD"],
                ["Stripped Jungle Wood", "STRIPPED_JUNGLE_WOOD"],
                ["Stripped Acacia Wood", "STRIPPED_ACACIA_WOOD"],
                ["Stripped Dark Oak Wood", "STRIPPED_DARK_OAK_WOOD"],
                ["Stripped Mangrove Wood", "STRIPPED_MANGROVE_WOOD"],
                ["Stripped Cherry Wood", "STRIPPED_CHERRY_WOOD"],
                ["Stripped Crimson Hyphae", "STRIPPED_CRIMSON_HYPHAE"],
                ["Stripped Warped Hyphae", "STRIPPED_WARPED_HYPHAE"],
                ["Bamboo Block", "BAMBOO_BLOCK"],
                ["Stripped Bamboo Block", "STRIPPED_BAMBOO_BLOCK"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Wood Full material.");
        }
    };

    Blockly.Blocks['minecraft_picker_wood_logs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Wood Logs")
                .appendField(new Blockly.FieldDropdown([
                ["Oak Log", "OAK_LOG"],
                ["Spruce Log", "SPRUCE_LOG"],
                ["Birch Log", "BIRCH_LOG"],
                ["Jungle Log", "JUNGLE_LOG"],
                ["Acacia Log", "ACACIA_LOG"],
                ["Dark Oak Log", "DARK_OAK_LOG"],
                ["Mangrove Log", "MANGROVE_LOG"],
                ["Cherry Log", "CHERRY_LOG"],
                ["Crimson Stem", "CRIMSON_STEM"],
                ["Warped Stem", "WARPED_STEM"],
                ["Stripped Oak Log", "STRIPPED_OAK_LOG"],
                ["Stripped Spruce Log", "STRIPPED_SPRUCE_LOG"],
                ["Stripped Birch Log", "STRIPPED_BIRCH_LOG"],
                ["Stripped Jungle Log", "STRIPPED_JUNGLE_LOG"],
                ["Stripped Acacia Log", "STRIPPED_ACACIA_LOG"],
                ["Stripped Dark Oak Log", "STRIPPED_DARK_OAK_LOG"],
                ["Stripped Mangrove Log", "STRIPPED_MANGROVE_LOG"],
                ["Stripped Cherry Log", "STRIPPED_CHERRY_LOG"],
                ["Stripped Crimson Stem", "STRIPPED_CRIMSON_STEM"],
                ["Stripped Warped Stem", "STRIPPED_WARPED_STEM"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Wood Logs material.");
        }
    };

    Blockly.Blocks['minecraft_picker_wood_planks'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Wood Planks")
                .appendField(new Blockly.FieldDropdown([
                ["Oak Planks", "OAK_PLANKS"],
                ["Spruce Planks", "SPRUCE_PLANKS"],
                ["Birch Planks", "BIRCH_PLANKS"],
                ["Jungle Planks", "JUNGLE_PLANKS"],
                ["Acacia Planks", "ACACIA_PLANKS"],
                ["Dark Oak Planks", "DARK_OAK_PLANKS"],
                ["Mangrove Planks", "MANGROVE_PLANKS"],
                ["Cherry Planks", "CHERRY_PLANKS"],
                ["Bamboo Planks", "BAMBOO_PLANKS"],
                ["Crimson Planks", "CRIMSON_PLANKS"],
                ["Warped Planks", "WARPED_PLANKS"],
                ["Bamboo Mosaic", "BAMBOO_MOSAIC"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a Wood Planks material.");
        }
    };

    Blockly.Blocks['minecraft_picker_world'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("World")
                .appendField(new Blockly.FieldDropdown([
                ["Air", "AIR"],
                ["Stone", "STONE"],
                ["Granite", "GRANITE"],
                ["Diorite", "DIORITE"],
                ["Andesite", "ANDESITE"],
                ["Deepslate", "DEEPSLATE"],
                ["Calcite", "CALCITE"],
                ["Tuff", "TUFF"],
                ["Dirt", "DIRT"],
                ["Coarse Dirt", "COARSE_DIRT"],
                ["Rooted Dirt", "ROOTED_DIRT"],
                ["Grass Block", "GRASS_BLOCK"],
                ["Podzol", "PODZOL"],
                ["Mycelium", "MYCELIUM"],
                ["Dirt Path", "DIRT_PATH"],
                ["Sand", "SAND"],
                ["Red Sand", "RED_SAND"],
                ["Gravel", "GRAVEL"],
                ["Clay", "CLAY"],
                ["Ice", "ICE"],
                ["Packed Ice", "PACKED_ICE"],
                ["Blue Ice", "BLUE_ICE"],
                ["Snow", "SNOW"],
                ["Snow Block", "SNOW_BLOCK"],
                ["Water", "WATER"],
                ["Lava", "LAVA"],
                ["Bedrock", "BEDROCK"],
                ["Obsidian", "OBSIDIAN"],
                ["Crying Obsidian", "CRYING_OBSIDIAN"],
                ["Magma Block", "MAGMA_BLOCK"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(230);
            this.setTooltip("Select a World material.");
        }
    };

    Blockly.Blocks['minecraft_picker_miscellaneous'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Misc. Block/Item")
                .appendField(new Blockly.FieldDropdown([
                ["Acacia Boat", "ACACIA_BOAT"],
                ["Acacia Button", "ACACIA_BUTTON"],
                ["Acacia Chest Boat", "ACACIA_CHEST_BOAT"],
                ["Acacia Hanging Sign", "ACACIA_HANGING_SIGN"],
                ["Acacia Leaves", "ACACIA_LEAVES"],
                ["Acacia Pressure Plate", "ACACIA_PRESSURE_PLATE"],
                ["Acacia Sapling", "ACACIA_SAPLING"],
                ["Acacia Sign", "ACACIA_SIGN"],
                ["Acacia Wall Hanging Sign", "ACACIA_WALL_HANGING_SIGN"],
                ["Acacia Wall Sign", "ACACIA_WALL_SIGN"],
                ["Allay Spawn Egg", "ALLAY_SPAWN_EGG"],
                ["Allium", "ALLIUM"],
                ["Amethyst Block", "AMETHYST_BLOCK"],
                ["Amethyst Cluster", "AMETHYST_CLUSTER"],
                ["Amethyst Shard", "AMETHYST_SHARD"],
                ["Angler Pottery Sherd", "ANGLER_POTTERY_SHERD"],
                ["Anvil", "ANVIL"],
                ["Apple", "APPLE"],
                ["Archer Pottery Sherd", "ARCHER_POTTERY_SHERD"],
                ["Armadillo Scute", "ARMADILLO_SCUTE"],
                ["Armadillo Spawn Egg", "ARMADILLO_SPAWN_EGG"],
                ["Armor Stand", "ARMOR_STAND"],
                ["Arms Up Pottery Sherd", "ARMS_UP_POTTERY_SHERD"],
                ["Arrow", "ARROW"],
                ["Attached Melon Stem", "ATTACHED_MELON_STEM"],
                ["Attached Pumpkin Stem", "ATTACHED_PUMPKIN_STEM"],
                ["Axolotl Bucket", "AXOLOTL_BUCKET"],
                ["Axolotl Spawn Egg", "AXOLOTL_SPAWN_EGG"],
                ["Azalea", "AZALEA"],
                ["Azalea Leaves", "AZALEA_LEAVES"],
                ["Azure Bluet", "AZURE_BLUET"],
                ["Baked Potato", "BAKED_POTATO"],
                ["Bamboo", "BAMBOO"],
                ["Bamboo Button", "BAMBOO_BUTTON"],
                ["Bamboo Chest Raft", "BAMBOO_CHEST_RAFT"],
                ["Bamboo Hanging Sign", "BAMBOO_HANGING_SIGN"],
                ["Bamboo Pressure Plate", "BAMBOO_PRESSURE_PLATE"],
                ["Bamboo Raft", "BAMBOO_RAFT"],
                ["Bamboo Sapling", "BAMBOO_SAPLING"],
                ["Bamboo Sign", "BAMBOO_SIGN"],
                ["Bamboo Wall Hanging Sign", "BAMBOO_WALL_HANGING_SIGN"],
                ["Bamboo Wall Sign", "BAMBOO_WALL_SIGN"],
                ["Barrel", "BARREL"],
                ["Barrier", "BARRIER"],
                ["Basalt", "BASALT"],
                ["Bat Spawn Egg", "BAT_SPAWN_EGG"],
                ["Beacon", "BEACON"],
                ["Beef", "BEEF"],
                ["Beehive", "BEEHIVE"],
                ["Beetroot", "BEETROOT"],
                ["Beetroots", "BEETROOTS"],
                ["Beetroot Seeds", "BEETROOT_SEEDS"],
                ["Beetroot Soup", "BEETROOT_SOUP"],
                ["Bee Nest", "BEE_NEST"],
                ["Bee Spawn Egg", "BEE_SPAWN_EGG"],
                ["Bell", "BELL"],
                ["Big Dripleaf", "BIG_DRIPLEAF"],
                ["Big Dripleaf Stem", "BIG_DRIPLEAF_STEM"],
                ["Birch Boat", "BIRCH_BOAT"],
                ["Birch Button", "BIRCH_BUTTON"],
                ["Birch Chest Boat", "BIRCH_CHEST_BOAT"],
                ["Birch Hanging Sign", "BIRCH_HANGING_SIGN"],
                ["Birch Leaves", "BIRCH_LEAVES"],
                ["Birch Pressure Plate", "BIRCH_PRESSURE_PLATE"],
                ["Birch Sapling", "BIRCH_SAPLING"],
                ["Birch Sign", "BIRCH_SIGN"],
                ["Birch Wall Hanging Sign", "BIRCH_WALL_HANGING_SIGN"],
                ["Birch Wall Sign", "BIRCH_WALL_SIGN"],
                ["Blackstone", "BLACKSTONE"],
                ["Black Bundle", "BLACK_BUNDLE"],
                ["Black Candle Cake", "BLACK_CANDLE_CAKE"],
                ["Black Dye", "BLACK_DYE"],
                ["Blade Pottery Sherd", "BLADE_POTTERY_SHERD"],
                ["Blast Furnace", "BLAST_FURNACE"],
                ["Blaze Powder", "BLAZE_POWDER"],
                ["Blaze Rod", "BLAZE_ROD"],
                ["Blaze Spawn Egg", "BLAZE_SPAWN_EGG"],
                ["Blue Bundle", "BLUE_BUNDLE"],
                ["Blue Candle Cake", "BLUE_CANDLE_CAKE"],
                ["Blue Dye", "BLUE_DYE"],
                ["Blue Egg", "BLUE_EGG"],
                ["Blue Orchid", "BLUE_ORCHID"],
                ["Bogged Spawn Egg", "BOGGED_SPAWN_EGG"],
                ["Bolt Armor Trim Smithing Template", "BOLT_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Bone", "BONE"],
                ["Bone Block", "BONE_BLOCK"],
                ["Bone Meal", "BONE_MEAL"],
                ["Book", "BOOK"],
                ["Bookshelf", "BOOKSHELF"],
                ["Bordure Indented Banner Pattern", "BORDURE_INDENTED_BANNER_PATTERN"],
                ["Bow", "BOW"],
                ["Bowl", "BOWL"],
                ["Brain Coral", "BRAIN_CORAL"],
                ["Brain Coral Block", "BRAIN_CORAL_BLOCK"],
                ["Brain Coral Fan", "BRAIN_CORAL_FAN"],
                ["Brain Coral Wall Fan", "BRAIN_CORAL_WALL_FAN"],
                ["Bread", "BREAD"],
                ["Breeze Rod", "BREEZE_ROD"],
                ["Breeze Spawn Egg", "BREEZE_SPAWN_EGG"],
                ["Brewer Pottery Sherd", "BREWER_POTTERY_SHERD"],
                ["Brewing Stand", "BREWING_STAND"],
                ["Brick", "BRICK"],
                ["Brown Bundle", "BROWN_BUNDLE"],
                ["Brown Candle Cake", "BROWN_CANDLE_CAKE"],
                ["Brown Dye", "BROWN_DYE"],
                ["Brown Egg", "BROWN_EGG"],
                ["Brown Mushroom", "BROWN_MUSHROOM"],
                ["Brown Mushroom Block", "BROWN_MUSHROOM_BLOCK"],
                ["Brush", "BRUSH"],
                ["Bubble Column", "BUBBLE_COLUMN"],
                ["Bubble Coral", "BUBBLE_CORAL"],
                ["Bubble Coral Block", "BUBBLE_CORAL_BLOCK"],
                ["Bubble Coral Fan", "BUBBLE_CORAL_FAN"],
                ["Bubble Coral Wall Fan", "BUBBLE_CORAL_WALL_FAN"],
                ["Bucket", "BUCKET"],
                ["Budding Amethyst", "BUDDING_AMETHYST"],
                ["Bundle", "BUNDLE"],
                ["Burn Pottery Sherd", "BURN_POTTERY_SHERD"],
                ["Bush", "BUSH"],
                ["Cactus", "CACTUS"],
                ["Cactus Flower", "CACTUS_FLOWER"],
                ["Cake", "CAKE"],
                ["Calibrated Sculk Sensor", "CALIBRATED_SCULK_SENSOR"],
                ["Camel Spawn Egg", "CAMEL_SPAWN_EGG"],
                ["Campfire", "CAMPFIRE"],
                ["Candle", "CANDLE"],
                ["Candle Cake", "CANDLE_CAKE"],
                ["Carrot", "CARROT"],
                ["Carrots", "CARROTS"],
                ["Carrot On A Stick", "CARROT_ON_A_STICK"],
                ["Cartography Table", "CARTOGRAPHY_TABLE"],
                ["Carved Pumpkin", "CARVED_PUMPKIN"],
                ["Cat Spawn Egg", "CAT_SPAWN_EGG"],
                ["Cauldron", "CAULDRON"],
                ["Cave Air", "CAVE_AIR"],
                ["Cave Spider Spawn Egg", "CAVE_SPIDER_SPAWN_EGG"],
                ["Cave Vines", "CAVE_VINES"],
                ["Cave Vines Plant", "CAVE_VINES_PLANT"],
                ["Chain", "CHAIN"],
                ["Chainmail Boots", "CHAINMAIL_BOOTS"],
                ["Chainmail Chestplate", "CHAINMAIL_CHESTPLATE"],
                ["Chainmail Helmet", "CHAINMAIL_HELMET"],
                ["Chainmail Leggings", "CHAINMAIL_LEGGINGS"],
                ["Chain Command Block", "CHAIN_COMMAND_BLOCK"],
                ["Charcoal", "CHARCOAL"],
                ["Cherry Boat", "CHERRY_BOAT"],
                ["Cherry Button", "CHERRY_BUTTON"],
                ["Cherry Chest Boat", "CHERRY_CHEST_BOAT"],
                ["Cherry Hanging Sign", "CHERRY_HANGING_SIGN"],
                ["Cherry Leaves", "CHERRY_LEAVES"],
                ["Cherry Pressure Plate", "CHERRY_PRESSURE_PLATE"],
                ["Cherry Sapling", "CHERRY_SAPLING"],
                ["Cherry Sign", "CHERRY_SIGN"],
                ["Cherry Wall Hanging Sign", "CHERRY_WALL_HANGING_SIGN"],
                ["Cherry Wall Sign", "CHERRY_WALL_SIGN"],
                ["Chest", "CHEST"],
                ["Chest Minecart", "CHEST_MINECART"],
                ["Chicken", "CHICKEN"],
                ["Chicken Spawn Egg", "CHICKEN_SPAWN_EGG"],
                ["Chipped Anvil", "CHIPPED_ANVIL"],
                ["Chiseled Bookshelf", "CHISELED_BOOKSHELF"],
                ["Chiseled Copper", "CHISELED_COPPER"],
                ["Chiseled Quartz Block", "CHISELED_QUARTZ_BLOCK"],
                ["Chiseled Red Sandstone", "CHISELED_RED_SANDSTONE"],
                ["Chiseled Resin Bricks", "CHISELED_RESIN_BRICKS"],
                ["Chiseled Sandstone", "CHISELED_SANDSTONE"],
                ["Chiseled Tuff", "CHISELED_TUFF"],
                ["Chorus Flower", "CHORUS_FLOWER"],
                ["Chorus Fruit", "CHORUS_FRUIT"],
                ["Chorus Plant", "CHORUS_PLANT"],
                ["Clay Ball", "CLAY_BALL"],
                ["Clock", "CLOCK"],
                ["Closed Eyeblossom", "CLOSED_EYEBLOSSOM"],
                ["Coal", "COAL"],
                ["Coal Block", "COAL_BLOCK"],
                ["Coast Armor Trim Smithing Template", "COAST_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Cobbled Deepslate", "COBBLED_DEEPSLATE"],
                ["Cobblestone", "COBBLESTONE"],
                ["Cobweb", "COBWEB"],
                ["Cocoa", "COCOA"],
                ["Cocoa Beans", "COCOA_BEANS"],
                ["Cod", "COD"],
                ["Cod Bucket", "COD_BUCKET"],
                ["Cod Spawn Egg", "COD_SPAWN_EGG"],
                ["Command Block", "COMMAND_BLOCK"],
                ["Command Block Minecart", "COMMAND_BLOCK_MINECART"],
                ["Compass", "COMPASS"],
                ["Composter", "COMPOSTER"],
                ["Conduit", "CONDUIT"],
                ["Cooked Beef", "COOKED_BEEF"],
                ["Cooked Chicken", "COOKED_CHICKEN"],
                ["Cooked Cod", "COOKED_COD"],
                ["Cooked Mutton", "COOKED_MUTTON"],
                ["Cooked Porkchop", "COOKED_PORKCHOP"],
                ["Cooked Rabbit", "COOKED_RABBIT"],
                ["Cooked Salmon", "COOKED_SALMON"],
                ["Cookie", "COOKIE"],
                ["Copper Block", "COPPER_BLOCK"],
                ["Copper Bulb", "COPPER_BULB"],
                ["Copper Grate", "COPPER_GRATE"],
                ["Copper Ingot", "COPPER_INGOT"],
                ["Cornflower", "CORNFLOWER"],
                ["Cow Spawn Egg", "COW_SPAWN_EGG"],
                ["Crafter", "CRAFTER"],
                ["Crafting Table", "CRAFTING_TABLE"],
                ["Creaking Heart", "CREAKING_HEART"],
                ["Creaking Spawn Egg", "CREAKING_SPAWN_EGG"],
                ["Creeper Banner Pattern", "CREEPER_BANNER_PATTERN"],
                ["Creeper Head", "CREEPER_HEAD"],
                ["Creeper Spawn Egg", "CREEPER_SPAWN_EGG"],
                ["Creeper Wall Head", "CREEPER_WALL_HEAD"],
                ["Crimson Button", "CRIMSON_BUTTON"],
                ["Crimson Fungus", "CRIMSON_FUNGUS"],
                ["Crimson Hanging Sign", "CRIMSON_HANGING_SIGN"],
                ["Crimson Nylium", "CRIMSON_NYLIUM"],
                ["Crimson Pressure Plate", "CRIMSON_PRESSURE_PLATE"],
                ["Crimson Roots", "CRIMSON_ROOTS"],
                ["Crimson Sign", "CRIMSON_SIGN"],
                ["Crimson Wall Hanging Sign", "CRIMSON_WALL_HANGING_SIGN"],
                ["Crimson Wall Sign", "CRIMSON_WALL_SIGN"],
                ["Crossbow", "CROSSBOW"],
                ["Cut Copper", "CUT_COPPER"],
                ["Cut Red Sandstone", "CUT_RED_SANDSTONE"],
                ["Cut Sandstone", "CUT_SANDSTONE"],
                ["Cyan Bundle", "CYAN_BUNDLE"],
                ["Cyan Candle Cake", "CYAN_CANDLE_CAKE"],
                ["Cyan Dye", "CYAN_DYE"],
                ["Damaged Anvil", "DAMAGED_ANVIL"],
                ["Dandelion", "DANDELION"],
                ["Danger Pottery Sherd", "DANGER_POTTERY_SHERD"],
                ["Dark Oak Boat", "DARK_OAK_BOAT"],
                ["Dark Oak Button", "DARK_OAK_BUTTON"],
                ["Dark Oak Chest Boat", "DARK_OAK_CHEST_BOAT"],
                ["Dark Oak Hanging Sign", "DARK_OAK_HANGING_SIGN"],
                ["Dark Oak Leaves", "DARK_OAK_LEAVES"],
                ["Dark Oak Pressure Plate", "DARK_OAK_PRESSURE_PLATE"],
                ["Dark Oak Sapling", "DARK_OAK_SAPLING"],
                ["Dark Oak Sign", "DARK_OAK_SIGN"],
                ["Dark Oak Wall Hanging Sign", "DARK_OAK_WALL_HANGING_SIGN"],
                ["Dark Oak Wall Sign", "DARK_OAK_WALL_SIGN"],
                ["Dark Prismarine", "DARK_PRISMARINE"],
                ["Dead Brain Coral", "DEAD_BRAIN_CORAL"],
                ["Dead Brain Coral Block", "DEAD_BRAIN_CORAL_BLOCK"],
                ["Dead Brain Coral Fan", "DEAD_BRAIN_CORAL_FAN"],
                ["Dead Brain Coral Wall Fan", "DEAD_BRAIN_CORAL_WALL_FAN"],
                ["Dead Bubble Coral", "DEAD_BUBBLE_CORAL"],
                ["Dead Bubble Coral Block", "DEAD_BUBBLE_CORAL_BLOCK"],
                ["Dead Bubble Coral Fan", "DEAD_BUBBLE_CORAL_FAN"],
                ["Dead Bubble Coral Wall Fan", "DEAD_BUBBLE_CORAL_WALL_FAN"],
                ["Dead Bush", "DEAD_BUSH"],
                ["Dead Fire Coral", "DEAD_FIRE_CORAL"],
                ["Dead Fire Coral Block", "DEAD_FIRE_CORAL_BLOCK"],
                ["Dead Fire Coral Fan", "DEAD_FIRE_CORAL_FAN"],
                ["Dead Fire Coral Wall Fan", "DEAD_FIRE_CORAL_WALL_FAN"],
                ["Dead Horn Coral", "DEAD_HORN_CORAL"],
                ["Dead Horn Coral Block", "DEAD_HORN_CORAL_BLOCK"],
                ["Dead Horn Coral Fan", "DEAD_HORN_CORAL_FAN"],
                ["Dead Horn Coral Wall Fan", "DEAD_HORN_CORAL_WALL_FAN"],
                ["Dead Tube Coral", "DEAD_TUBE_CORAL"],
                ["Dead Tube Coral Block", "DEAD_TUBE_CORAL_BLOCK"],
                ["Dead Tube Coral Fan", "DEAD_TUBE_CORAL_FAN"],
                ["Dead Tube Coral Wall Fan", "DEAD_TUBE_CORAL_WALL_FAN"],
                ["Debug Stick", "DEBUG_STICK"],
                ["Decorated Pot", "DECORATED_POT"],
                ["Diamond", "DIAMOND"],
                ["Diamond Axe", "DIAMOND_AXE"],
                ["Diamond Block", "DIAMOND_BLOCK"],
                ["Diamond Boots", "DIAMOND_BOOTS"],
                ["Diamond Chestplate", "DIAMOND_CHESTPLATE"],
                ["Diamond Helmet", "DIAMOND_HELMET"],
                ["Diamond Hoe", "DIAMOND_HOE"],
                ["Diamond Horse Armor", "DIAMOND_HORSE_ARMOR"],
                ["Diamond Leggings", "DIAMOND_LEGGINGS"],
                ["Diamond Pickaxe", "DIAMOND_PICKAXE"],
                ["Diamond Shovel", "DIAMOND_SHOVEL"],
                ["Diamond Sword", "DIAMOND_SWORD"],
                ["Disc Fragment 5", "DISC_FRAGMENT_5"],
                ["Dolphin Spawn Egg", "DOLPHIN_SPAWN_EGG"],
                ["Donkey Spawn Egg", "DONKEY_SPAWN_EGG"],
                ["Dragon Breath", "DRAGON_BREATH"],
                ["Dragon Egg", "DRAGON_EGG"],
                ["Dragon Head", "DRAGON_HEAD"],
                ["Dragon Wall Head", "DRAGON_WALL_HEAD"],
                ["Dried Kelp", "DRIED_KELP"],
                ["Dried Kelp Block", "DRIED_KELP_BLOCK"],
                ["Dripstone Block", "DRIPSTONE_BLOCK"],
                ["Drowned Spawn Egg", "DROWNED_SPAWN_EGG"],
                ["Dune Armor Trim Smithing Template", "DUNE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Echo Shard", "ECHO_SHARD"],
                ["Egg", "EGG"],
                ["Elder Guardian Spawn Egg", "ELDER_GUARDIAN_SPAWN_EGG"],
                ["Elytra", "ELYTRA"],
                ["Emerald", "EMERALD"],
                ["Emerald Block", "EMERALD_BLOCK"],
                ["Enchanted Book", "ENCHANTED_BOOK"],
                ["Enchanted Golden Apple", "ENCHANTED_GOLDEN_APPLE"],
                ["Enchanting Table", "ENCHANTING_TABLE"],
                ["Enderman Spawn Egg", "ENDERMAN_SPAWN_EGG"],
                ["Endermite Spawn Egg", "ENDERMITE_SPAWN_EGG"],
                ["Ender Chest", "ENDER_CHEST"],
                ["Ender Dragon Spawn Egg", "ENDER_DRAGON_SPAWN_EGG"],
                ["Ender Eye", "ENDER_EYE"],
                ["Ender Pearl", "ENDER_PEARL"],
                ["End Crystal", "END_CRYSTAL"],
                ["End Gateway", "END_GATEWAY"],
                ["End Portal", "END_PORTAL"],
                ["End Portal Frame", "END_PORTAL_FRAME"],
                ["End Rod", "END_ROD"],
                ["End Stone", "END_STONE"],
                ["Evoker Spawn Egg", "EVOKER_SPAWN_EGG"],
                ["Experience Bottle", "EXPERIENCE_BOTTLE"],
                ["Explorer Pottery Sherd", "EXPLORER_POTTERY_SHERD"],
                ["Exposed Chiseled Copper", "EXPOSED_CHISELED_COPPER"],
                ["Exposed Copper", "EXPOSED_COPPER"],
                ["Exposed Copper Bulb", "EXPOSED_COPPER_BULB"],
                ["Exposed Copper Grate", "EXPOSED_COPPER_GRATE"],
                ["Exposed Cut Copper", "EXPOSED_CUT_COPPER"],
                ["Eye Armor Trim Smithing Template", "EYE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Farmland", "FARMLAND"],
                ["Feather", "FEATHER"],
                ["Fermented Spider Eye", "FERMENTED_SPIDER_EYE"],
                ["Fern", "FERN"],
                ["Field Masoned Banner Pattern", "FIELD_MASONED_BANNER_PATTERN"],
                ["Filled Map", "FILLED_MAP"],
                ["Fire", "FIRE"],
                ["Firefly Bush", "FIREFLY_BUSH"],
                ["Firework Rocket", "FIREWORK_ROCKET"],
                ["Firework Star", "FIREWORK_STAR"],
                ["Fire Charge", "FIRE_CHARGE"],
                ["Fire Coral", "FIRE_CORAL"],
                ["Fire Coral Block", "FIRE_CORAL_BLOCK"],
                ["Fire Coral Fan", "FIRE_CORAL_FAN"],
                ["Fire Coral Wall Fan", "FIRE_CORAL_WALL_FAN"],
                ["Fishing Rod", "FISHING_ROD"],
                ["Fletching Table", "FLETCHING_TABLE"],
                ["Flint", "FLINT"],
                ["Flint And Steel", "FLINT_AND_STEEL"],
                ["Flowering Azalea", "FLOWERING_AZALEA"],
                ["Flowering Azalea Leaves", "FLOWERING_AZALEA_LEAVES"],
                ["Flower Banner Pattern", "FLOWER_BANNER_PATTERN"],
                ["Flower Pot", "FLOWER_POT"],
                ["Flow Armor Trim Smithing Template", "FLOW_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Flow Banner Pattern", "FLOW_BANNER_PATTERN"],
                ["Flow Pottery Sherd", "FLOW_POTTERY_SHERD"],
                ["Fox Spawn Egg", "FOX_SPAWN_EGG"],
                ["Friend Pottery Sherd", "FRIEND_POTTERY_SHERD"],
                ["Frogspawn", "FROGSPAWN"],
                ["Frog Spawn Egg", "FROG_SPAWN_EGG"],
                ["Frosted Ice", "FROSTED_ICE"],
                ["Furnace", "FURNACE"],
                ["Furnace Minecart", "FURNACE_MINECART"],
                ["Ghast Spawn Egg", "GHAST_SPAWN_EGG"],
                ["Ghast Tear", "GHAST_TEAR"],
                ["Gilded Blackstone", "GILDED_BLACKSTONE"],
                ["Glass Bottle", "GLASS_BOTTLE"],
                ["Glistering Melon Slice", "GLISTERING_MELON_SLICE"],
                ["Globe Banner Pattern", "GLOBE_BANNER_PATTERN"],
                ["Glowstone", "GLOWSTONE"],
                ["Glowstone Dust", "GLOWSTONE_DUST"],
                ["Glow Berries", "GLOW_BERRIES"],
                ["Glow Ink Sac", "GLOW_INK_SAC"],
                ["Glow Item Frame", "GLOW_ITEM_FRAME"],
                ["Glow Lichen", "GLOW_LICHEN"],
                ["Glow Squid Spawn Egg", "GLOW_SQUID_SPAWN_EGG"],
                ["Goat Horn", "GOAT_HORN"],
                ["Goat Spawn Egg", "GOAT_SPAWN_EGG"],
                ["Golden Apple", "GOLDEN_APPLE"],
                ["Golden Axe", "GOLDEN_AXE"],
                ["Golden Boots", "GOLDEN_BOOTS"],
                ["Golden Carrot", "GOLDEN_CARROT"],
                ["Golden Chestplate", "GOLDEN_CHESTPLATE"],
                ["Golden Helmet", "GOLDEN_HELMET"],
                ["Golden Hoe", "GOLDEN_HOE"],
                ["Golden Horse Armor", "GOLDEN_HORSE_ARMOR"],
                ["Golden Leggings", "GOLDEN_LEGGINGS"],
                ["Golden Pickaxe", "GOLDEN_PICKAXE"],
                ["Golden Shovel", "GOLDEN_SHOVEL"],
                ["Golden Sword", "GOLDEN_SWORD"],
                ["Gold Block", "GOLD_BLOCK"],
                ["Gold Ingot", "GOLD_INGOT"],
                ["Gold Nugget", "GOLD_NUGGET"],
                ["Gray Bundle", "GRAY_BUNDLE"],
                ["Gray Candle Cake", "GRAY_CANDLE_CAKE"],
                ["Gray Dye", "GRAY_DYE"],
                ["Green Bundle", "GREEN_BUNDLE"],
                ["Green Candle Cake", "GREEN_CANDLE_CAKE"],
                ["Green Dye", "GREEN_DYE"],
                ["Grindstone", "GRINDSTONE"],
                ["Guardian Spawn Egg", "GUARDIAN_SPAWN_EGG"],
                ["Gunpowder", "GUNPOWDER"],
                ["Guster Banner Pattern", "GUSTER_BANNER_PATTERN"],
                ["Guster Pottery Sherd", "GUSTER_POTTERY_SHERD"],
                ["Hanging Roots", "HANGING_ROOTS"],
                ["Hay Block", "HAY_BLOCK"],
                ["Heartbreak Pottery Sherd", "HEARTBREAK_POTTERY_SHERD"],
                ["Heart Of The Sea", "HEART_OF_THE_SEA"],
                ["Heart Pottery Sherd", "HEART_POTTERY_SHERD"],
                ["Heavy Core", "HEAVY_CORE"],
                ["Heavy Weighted Pressure Plate", "HEAVY_WEIGHTED_PRESSURE_PLATE"],
                ["Hoglin Spawn Egg", "HOGLIN_SPAWN_EGG"],
                ["Honeycomb", "HONEYCOMB"],
                ["Honeycomb Block", "HONEYCOMB_BLOCK"],
                ["Honey Bottle", "HONEY_BOTTLE"],
                ["Hopper Minecart", "HOPPER_MINECART"],
                ["Horn Coral", "HORN_CORAL"],
                ["Horn Coral Block", "HORN_CORAL_BLOCK"],
                ["Horn Coral Fan", "HORN_CORAL_FAN"],
                ["Horn Coral Wall Fan", "HORN_CORAL_WALL_FAN"],
                ["Horse Spawn Egg", "HORSE_SPAWN_EGG"],
                ["Host Armor Trim Smithing Template", "HOST_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Howl Pottery Sherd", "HOWL_POTTERY_SHERD"],
                ["Husk Spawn Egg", "HUSK_SPAWN_EGG"],
                ["Infested Chiseled Stone Bricks", "INFESTED_CHISELED_STONE_BRICKS"],
                ["Infested Cobblestone", "INFESTED_COBBLESTONE"],
                ["Infested Cracked Stone Bricks", "INFESTED_CRACKED_STONE_BRICKS"],
                ["Infested Deepslate", "INFESTED_DEEPSLATE"],
                ["Infested Mossy Stone Bricks", "INFESTED_MOSSY_STONE_BRICKS"],
                ["Infested Stone", "INFESTED_STONE"],
                ["Infested Stone Bricks", "INFESTED_STONE_BRICKS"],
                ["Ink Sac", "INK_SAC"],
                ["Iron Axe", "IRON_AXE"],
                ["Iron Bars", "IRON_BARS"],
                ["Iron Block", "IRON_BLOCK"],
                ["Iron Boots", "IRON_BOOTS"],
                ["Iron Chestplate", "IRON_CHESTPLATE"],
                ["Iron Golem Spawn Egg", "IRON_GOLEM_SPAWN_EGG"],
                ["Iron Helmet", "IRON_HELMET"],
                ["Iron Hoe", "IRON_HOE"],
                ["Iron Horse Armor", "IRON_HORSE_ARMOR"],
                ["Iron Ingot", "IRON_INGOT"],
                ["Iron Leggings", "IRON_LEGGINGS"],
                ["Iron Nugget", "IRON_NUGGET"],
                ["Iron Pickaxe", "IRON_PICKAXE"],
                ["Iron Shovel", "IRON_SHOVEL"],
                ["Iron Sword", "IRON_SWORD"],
                ["Item Frame", "ITEM_FRAME"],
                ["Jack O Lantern", "JACK_O_LANTERN"],
                ["Jigsaw", "JIGSAW"],
                ["Jukebox", "JUKEBOX"],
                ["Jungle Boat", "JUNGLE_BOAT"],
                ["Jungle Button", "JUNGLE_BUTTON"],
                ["Jungle Chest Boat", "JUNGLE_CHEST_BOAT"],
                ["Jungle Hanging Sign", "JUNGLE_HANGING_SIGN"],
                ["Jungle Leaves", "JUNGLE_LEAVES"],
                ["Jungle Pressure Plate", "JUNGLE_PRESSURE_PLATE"],
                ["Jungle Sapling", "JUNGLE_SAPLING"],
                ["Jungle Sign", "JUNGLE_SIGN"],
                ["Jungle Wall Hanging Sign", "JUNGLE_WALL_HANGING_SIGN"],
                ["Jungle Wall Sign", "JUNGLE_WALL_SIGN"],
                ["Kelp", "KELP"],
                ["Kelp Plant", "KELP_PLANT"],
                ["Knowledge Book", "KNOWLEDGE_BOOK"],
                ["Ladder", "LADDER"],
                ["Lantern", "LANTERN"],
                ["Lapis Block", "LAPIS_BLOCK"],
                ["Lapis Lazuli", "LAPIS_LAZULI"],
                ["Large Amethyst Bud", "LARGE_AMETHYST_BUD"],
                ["Large Fern", "LARGE_FERN"],
                ["Lava Bucket", "LAVA_BUCKET"],
                ["Lava Cauldron", "LAVA_CAULDRON"],
                ["Lead", "LEAD"],
                ["Leaf Litter", "LEAF_LITTER"],
                ["Leather", "LEATHER"],
                ["Leather Boots", "LEATHER_BOOTS"],
                ["Leather Chestplate", "LEATHER_CHESTPLATE"],
                ["Leather Helmet", "LEATHER_HELMET"],
                ["Leather Horse Armor", "LEATHER_HORSE_ARMOR"],
                ["Leather Leggings", "LEATHER_LEGGINGS"],
                ["Light", "LIGHT"],
                ["Lightning Rod", "LIGHTNING_ROD"],
                ["Light Blue Bundle", "LIGHT_BLUE_BUNDLE"],
                ["Light Blue Candle Cake", "LIGHT_BLUE_CANDLE_CAKE"],
                ["Light Blue Dye", "LIGHT_BLUE_DYE"],
                ["Light Gray Bundle", "LIGHT_GRAY_BUNDLE"],
                ["Light Gray Candle Cake", "LIGHT_GRAY_CANDLE_CAKE"],
                ["Light Gray Dye", "LIGHT_GRAY_DYE"],
                ["Light Weighted Pressure Plate", "LIGHT_WEIGHTED_PRESSURE_PLATE"],
                ["Lilac", "LILAC"],
                ["Lily Of The Valley", "LILY_OF_THE_VALLEY"],
                ["Lily Pad", "LILY_PAD"],
                ["Lime Bundle", "LIME_BUNDLE"],
                ["Lime Candle Cake", "LIME_CANDLE_CAKE"],
                ["Lime Dye", "LIME_DYE"],
                ["Lingering Potion", "LINGERING_POTION"],
                ["Llama Spawn Egg", "LLAMA_SPAWN_EGG"],
                ["Lodestone", "LODESTONE"],
                ["Loom", "LOOM"],
                ["Mace", "MACE"],
                ["Magenta Bundle", "MAGENTA_BUNDLE"],
                ["Magenta Candle Cake", "MAGENTA_CANDLE_CAKE"],
                ["Magenta Dye", "MAGENTA_DYE"],
                ["Magma Cream", "MAGMA_CREAM"],
                ["Magma Cube Spawn Egg", "MAGMA_CUBE_SPAWN_EGG"],
                ["Mangrove Boat", "MANGROVE_BOAT"],
                ["Mangrove Button", "MANGROVE_BUTTON"],
                ["Mangrove Chest Boat", "MANGROVE_CHEST_BOAT"],
                ["Mangrove Hanging Sign", "MANGROVE_HANGING_SIGN"],
                ["Mangrove Leaves", "MANGROVE_LEAVES"],
                ["Mangrove Pressure Plate", "MANGROVE_PRESSURE_PLATE"],
                ["Mangrove Propagule", "MANGROVE_PROPAGULE"],
                ["Mangrove Roots", "MANGROVE_ROOTS"],
                ["Mangrove Sign", "MANGROVE_SIGN"],
                ["Mangrove Wall Hanging Sign", "MANGROVE_WALL_HANGING_SIGN"],
                ["Mangrove Wall Sign", "MANGROVE_WALL_SIGN"],
                ["Map", "MAP"],
                ["Medium Amethyst Bud", "MEDIUM_AMETHYST_BUD"],
                ["Melon", "MELON"],
                ["Melon Seeds", "MELON_SEEDS"],
                ["Melon Slice", "MELON_SLICE"],
                ["Melon Stem", "MELON_STEM"],
                ["Milk Bucket", "MILK_BUCKET"],
                ["Minecart", "MINECART"],
                ["Miner Pottery Sherd", "MINER_POTTERY_SHERD"],
                ["Mojang Banner Pattern", "MOJANG_BANNER_PATTERN"],
                ["Mooshroom Spawn Egg", "MOOSHROOM_SPAWN_EGG"],
                ["Mossy Cobblestone", "MOSSY_COBBLESTONE"],
                ["Moss Block", "MOSS_BLOCK"],
                ["Moss Carpet", "MOSS_CARPET"],
                ["Mourner Pottery Sherd", "MOURNER_POTTERY_SHERD"],
                ["Moving Piston", "MOVING_PISTON"],
                ["Mud", "MUD"],
                ["Muddy Mangrove Roots", "MUDDY_MANGROVE_ROOTS"],
                ["Mule Spawn Egg", "MULE_SPAWN_EGG"],
                ["Mushroom Stem", "MUSHROOM_STEM"],
                ["Mushroom Stew", "MUSHROOM_STEW"],
                ["Music Disc 11", "MUSIC_DISC_11"],
                ["Music Disc 13", "MUSIC_DISC_13"],
                ["Music Disc 5", "MUSIC_DISC_5"],
                ["Music Disc Blocks", "MUSIC_DISC_BLOCKS"],
                ["Music Disc Cat", "MUSIC_DISC_CAT"],
                ["Music Disc Chirp", "MUSIC_DISC_CHIRP"],
                ["Music Disc Creator", "MUSIC_DISC_CREATOR"],
                ["Music Disc Creator Music Box", "MUSIC_DISC_CREATOR_MUSIC_BOX"],
                ["Music Disc Far", "MUSIC_DISC_FAR"],
                ["Music Disc Mall", "MUSIC_DISC_MALL"],
                ["Music Disc Mellohi", "MUSIC_DISC_MELLOHI"],
                ["Music Disc Otherside", "MUSIC_DISC_OTHERSIDE"],
                ["Music Disc Pigstep", "MUSIC_DISC_PIGSTEP"],
                ["Music Disc Precipice", "MUSIC_DISC_PRECIPICE"],
                ["Music Disc Relic", "MUSIC_DISC_RELIC"],
                ["Music Disc Stal", "MUSIC_DISC_STAL"],
                ["Music Disc Strad", "MUSIC_DISC_STRAD"],
                ["Music Disc Wait", "MUSIC_DISC_WAIT"],
                ["Music Disc Ward", "MUSIC_DISC_WARD"],
                ["Mutton", "MUTTON"],
                ["Name Tag", "NAME_TAG"],
                ["Nautilus Shell", "NAUTILUS_SHELL"],
                ["Netherite Axe", "NETHERITE_AXE"],
                ["Netherite Block", "NETHERITE_BLOCK"],
                ["Netherite Boots", "NETHERITE_BOOTS"],
                ["Netherite Chestplate", "NETHERITE_CHESTPLATE"],
                ["Netherite Helmet", "NETHERITE_HELMET"],
                ["Netherite Hoe", "NETHERITE_HOE"],
                ["Netherite Ingot", "NETHERITE_INGOT"],
                ["Netherite Leggings", "NETHERITE_LEGGINGS"],
                ["Netherite Pickaxe", "NETHERITE_PICKAXE"],
                ["Netherite Scrap", "NETHERITE_SCRAP"],
                ["Netherite Shovel", "NETHERITE_SHOVEL"],
                ["Netherite Sword", "NETHERITE_SWORD"],
                ["Netherite Upgrade Smithing Template", "NETHERITE_UPGRADE_SMITHING_TEMPLATE"],
                ["Netherrack", "NETHERRACK"],
                ["Nether Brick", "NETHER_BRICK"],
                ["Nether Portal", "NETHER_PORTAL"],
                ["Nether Sprouts", "NETHER_SPROUTS"],
                ["Nether Star", "NETHER_STAR"],
                ["Nether Wart", "NETHER_WART"],
                ["Nether Wart Block", "NETHER_WART_BLOCK"],
                ["Oak Boat", "OAK_BOAT"],
                ["Oak Button", "OAK_BUTTON"],
                ["Oak Chest Boat", "OAK_CHEST_BOAT"],
                ["Oak Hanging Sign", "OAK_HANGING_SIGN"],
                ["Oak Leaves", "OAK_LEAVES"],
                ["Oak Pressure Plate", "OAK_PRESSURE_PLATE"],
                ["Oak Sapling", "OAK_SAPLING"],
                ["Oak Sign", "OAK_SIGN"],
                ["Oak Wall Hanging Sign", "OAK_WALL_HANGING_SIGN"],
                ["Oak Wall Sign", "OAK_WALL_SIGN"],
                ["Ocelot Spawn Egg", "OCELOT_SPAWN_EGG"],
                ["Ochre Froglight", "OCHRE_FROGLIGHT"],
                ["Ominous Bottle", "OMINOUS_BOTTLE"],
                ["Ominous Trial Key", "OMINOUS_TRIAL_KEY"],
                ["Open Eyeblossom", "OPEN_EYEBLOSSOM"],
                ["Orange Bundle", "ORANGE_BUNDLE"],
                ["Orange Candle Cake", "ORANGE_CANDLE_CAKE"],
                ["Orange Dye", "ORANGE_DYE"],
                ["Orange Tulip", "ORANGE_TULIP"],
                ["Oxeye Daisy", "OXEYE_DAISY"],
                ["Oxidized Chiseled Copper", "OXIDIZED_CHISELED_COPPER"],
                ["Oxidized Copper", "OXIDIZED_COPPER"],
                ["Oxidized Copper Bulb", "OXIDIZED_COPPER_BULB"],
                ["Oxidized Copper Grate", "OXIDIZED_COPPER_GRATE"],
                ["Oxidized Cut Copper", "OXIDIZED_CUT_COPPER"],
                ["Packed Mud", "PACKED_MUD"],
                ["Painting", "PAINTING"],
                ["Pale Hanging Moss", "PALE_HANGING_MOSS"],
                ["Pale Moss Block", "PALE_MOSS_BLOCK"],
                ["Pale Moss Carpet", "PALE_MOSS_CARPET"],
                ["Pale Oak Boat", "PALE_OAK_BOAT"],
                ["Pale Oak Button", "PALE_OAK_BUTTON"],
                ["Pale Oak Chest Boat", "PALE_OAK_CHEST_BOAT"],
                ["Pale Oak Hanging Sign", "PALE_OAK_HANGING_SIGN"],
                ["Pale Oak Leaves", "PALE_OAK_LEAVES"],
                ["Pale Oak Log", "PALE_OAK_LOG"],
                ["Pale Oak Planks", "PALE_OAK_PLANKS"],
                ["Pale Oak Pressure Plate", "PALE_OAK_PRESSURE_PLATE"],
                ["Pale Oak Sapling", "PALE_OAK_SAPLING"],
                ["Pale Oak Sign", "PALE_OAK_SIGN"],
                ["Pale Oak Wall Hanging Sign", "PALE_OAK_WALL_HANGING_SIGN"],
                ["Pale Oak Wall Sign", "PALE_OAK_WALL_SIGN"],
                ["Pale Oak Wood", "PALE_OAK_WOOD"],
                ["Panda Spawn Egg", "PANDA_SPAWN_EGG"],
                ["Paper", "PAPER"],
                ["Parrot Spawn Egg", "PARROT_SPAWN_EGG"],
                ["Pearlescent Froglight", "PEARLESCENT_FROGLIGHT"],
                ["Peony", "PEONY"],
                ["Phantom Membrane", "PHANTOM_MEMBRANE"],
                ["Phantom Spawn Egg", "PHANTOM_SPAWN_EGG"],
                ["Piglin Banner Pattern", "PIGLIN_BANNER_PATTERN"],
                ["Piglin Brute Spawn Egg", "PIGLIN_BRUTE_SPAWN_EGG"],
                ["Piglin Head", "PIGLIN_HEAD"],
                ["Piglin Spawn Egg", "PIGLIN_SPAWN_EGG"],
                ["Piglin Wall Head", "PIGLIN_WALL_HEAD"],
                ["Pig Spawn Egg", "PIG_SPAWN_EGG"],
                ["Pillager Spawn Egg", "PILLAGER_SPAWN_EGG"],
                ["Pink Bundle", "PINK_BUNDLE"],
                ["Pink Candle Cake", "PINK_CANDLE_CAKE"],
                ["Pink Dye", "PINK_DYE"],
                ["Pink Petals", "PINK_PETALS"],
                ["Pink Tulip", "PINK_TULIP"],
                ["Piston Head", "PISTON_HEAD"],
                ["Pitcher Crop", "PITCHER_CROP"],
                ["Pitcher Plant", "PITCHER_PLANT"],
                ["Pitcher Pod", "PITCHER_POD"],
                ["Player Head", "PLAYER_HEAD"],
                ["Player Wall Head", "PLAYER_WALL_HEAD"],
                ["Plenty Pottery Sherd", "PLENTY_POTTERY_SHERD"],
                ["Pointed Dripstone", "POINTED_DRIPSTONE"],
                ["Poisonous Potato", "POISONOUS_POTATO"],
                ["Polar Bear Spawn Egg", "POLAR_BEAR_SPAWN_EGG"],
                ["Polished Andesite", "POLISHED_ANDESITE"],
                ["Polished Basalt", "POLISHED_BASALT"],
                ["Polished Blackstone", "POLISHED_BLACKSTONE"],
                ["Polished Blackstone Button", "POLISHED_BLACKSTONE_BUTTON"],
                ["Polished Blackstone Pressure Plate", "POLISHED_BLACKSTONE_PRESSURE_PLATE"],
                ["Polished Deepslate", "POLISHED_DEEPSLATE"],
                ["Polished Diorite", "POLISHED_DIORITE"],
                ["Polished Granite", "POLISHED_GRANITE"],
                ["Polished Tuff", "POLISHED_TUFF"],
                ["Popped Chorus Fruit", "POPPED_CHORUS_FRUIT"],
                ["Poppy", "POPPY"],
                ["Porkchop", "PORKCHOP"],
                ["Potato", "POTATO"],
                ["Potatoes", "POTATOES"],
                ["Potion", "POTION"],
                ["Potted Acacia Sapling", "POTTED_ACACIA_SAPLING"],
                ["Potted Allium", "POTTED_ALLIUM"],
                ["Potted Azalea Bush", "POTTED_AZALEA_BUSH"],
                ["Potted Azure Bluet", "POTTED_AZURE_BLUET"],
                ["Potted Bamboo", "POTTED_BAMBOO"],
                ["Potted Birch Sapling", "POTTED_BIRCH_SAPLING"],
                ["Potted Blue Orchid", "POTTED_BLUE_ORCHID"],
                ["Potted Brown Mushroom", "POTTED_BROWN_MUSHROOM"],
                ["Potted Cactus", "POTTED_CACTUS"],
                ["Potted Cherry Sapling", "POTTED_CHERRY_SAPLING"],
                ["Potted Closed Eyeblossom", "POTTED_CLOSED_EYEBLOSSOM"],
                ["Potted Cornflower", "POTTED_CORNFLOWER"],
                ["Potted Crimson Fungus", "POTTED_CRIMSON_FUNGUS"],
                ["Potted Crimson Roots", "POTTED_CRIMSON_ROOTS"],
                ["Potted Dandelion", "POTTED_DANDELION"],
                ["Potted Dark Oak Sapling", "POTTED_DARK_OAK_SAPLING"],
                ["Potted Dead Bush", "POTTED_DEAD_BUSH"],
                ["Potted Fern", "POTTED_FERN"],
                ["Potted Flowering Azalea Bush", "POTTED_FLOWERING_AZALEA_BUSH"],
                ["Potted Jungle Sapling", "POTTED_JUNGLE_SAPLING"],
                ["Potted Lily Of The Valley", "POTTED_LILY_OF_THE_VALLEY"],
                ["Potted Mangrove Propagule", "POTTED_MANGROVE_PROPAGULE"],
                ["Potted Oak Sapling", "POTTED_OAK_SAPLING"],
                ["Potted Open Eyeblossom", "POTTED_OPEN_EYEBLOSSOM"],
                ["Potted Orange Tulip", "POTTED_ORANGE_TULIP"],
                ["Potted Oxeye Daisy", "POTTED_OXEYE_DAISY"],
                ["Potted Pale Oak Sapling", "POTTED_PALE_OAK_SAPLING"],
                ["Potted Pink Tulip", "POTTED_PINK_TULIP"],
                ["Potted Poppy", "POTTED_POPPY"],
                ["Potted Red Mushroom", "POTTED_RED_MUSHROOM"],
                ["Potted Red Tulip", "POTTED_RED_TULIP"],
                ["Potted Spruce Sapling", "POTTED_SPRUCE_SAPLING"],
                ["Potted Torchflower", "POTTED_TORCHFLOWER"],
                ["Potted Warped Fungus", "POTTED_WARPED_FUNGUS"],
                ["Potted Warped Roots", "POTTED_WARPED_ROOTS"],
                ["Potted White Tulip", "POTTED_WHITE_TULIP"],
                ["Potted Wither Rose", "POTTED_WITHER_ROSE"],
                ["Powder Snow", "POWDER_SNOW"],
                ["Powder Snow Bucket", "POWDER_SNOW_BUCKET"],
                ["Powder Snow Cauldron", "POWDER_SNOW_CAULDRON"],
                ["Prismarine", "PRISMARINE"],
                ["Prismarine Bricks", "PRISMARINE_BRICKS"],
                ["Prismarine Crystals", "PRISMARINE_CRYSTALS"],
                ["Prismarine Shard", "PRISMARINE_SHARD"],
                ["Prize Pottery Sherd", "PRIZE_POTTERY_SHERD"],
                ["Pufferfish", "PUFFERFISH"],
                ["Pufferfish Bucket", "PUFFERFISH_BUCKET"],
                ["Pufferfish Spawn Egg", "PUFFERFISH_SPAWN_EGG"],
                ["Pumpkin", "PUMPKIN"],
                ["Pumpkin Pie", "PUMPKIN_PIE"],
                ["Pumpkin Seeds", "PUMPKIN_SEEDS"],
                ["Pumpkin Stem", "PUMPKIN_STEM"],
                ["Purple Bundle", "PURPLE_BUNDLE"],
                ["Purple Candle Cake", "PURPLE_CANDLE_CAKE"],
                ["Purple Dye", "PURPLE_DYE"],
                ["Purpur Block", "PURPUR_BLOCK"],
                ["Purpur Pillar", "PURPUR_PILLAR"],
                ["Quartz", "QUARTZ"],
                ["Quartz Block", "QUARTZ_BLOCK"],
                ["Quartz Pillar", "QUARTZ_PILLAR"],
                ["Rabbit", "RABBIT"],
                ["Rabbit Foot", "RABBIT_FOOT"],
                ["Rabbit Hide", "RABBIT_HIDE"],
                ["Rabbit Spawn Egg", "RABBIT_SPAWN_EGG"],
                ["Rabbit Stew", "RABBIT_STEW"],
                ["Raiser Armor Trim Smithing Template", "RAISER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Ravager Spawn Egg", "RAVAGER_SPAWN_EGG"],
                ["Raw Copper", "RAW_COPPER"],
                ["Raw Copper Block", "RAW_COPPER_BLOCK"],
                ["Raw Gold", "RAW_GOLD"],
                ["Raw Gold Block", "RAW_GOLD_BLOCK"],
                ["Raw Iron", "RAW_IRON"],
                ["Raw Iron Block", "RAW_IRON_BLOCK"],
                ["Recovery Compass", "RECOVERY_COMPASS"],
                ["Redstone", "REDSTONE"],
                ["Redstone Wall Torch", "REDSTONE_WALL_TORCH"],
                ["Red Bundle", "RED_BUNDLE"],
                ["Red Candle Cake", "RED_CANDLE_CAKE"],
                ["Red Dye", "RED_DYE"],
                ["Red Mushroom", "RED_MUSHROOM"],
                ["Red Mushroom Block", "RED_MUSHROOM_BLOCK"],
                ["Red Sandstone", "RED_SANDSTONE"],
                ["Red Tulip", "RED_TULIP"],
                ["Reinforced Deepslate", "REINFORCED_DEEPSLATE"],
                ["Repeating Command Block", "REPEATING_COMMAND_BLOCK"],
                ["Resin Block", "RESIN_BLOCK"],
                ["Resin Brick", "RESIN_BRICK"],
                ["Resin Bricks", "RESIN_BRICKS"],
                ["Resin Clump", "RESIN_CLUMP"],
                ["Respawn Anchor", "RESPAWN_ANCHOR"],
                ["Rib Armor Trim Smithing Template", "RIB_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Rose Bush", "ROSE_BUSH"],
                ["Rotten Flesh", "ROTTEN_FLESH"],
                ["Saddle", "SADDLE"],
                ["Salmon", "SALMON"],
                ["Salmon Bucket", "SALMON_BUCKET"],
                ["Salmon Spawn Egg", "SALMON_SPAWN_EGG"],
                ["Sandstone", "SANDSTONE"],
                ["Scaffolding", "SCAFFOLDING"],
                ["Scrape Pottery Sherd", "SCRAPE_POTTERY_SHERD"],
                ["Sculk", "SCULK"],
                ["Sculk Catalyst", "SCULK_CATALYST"],
                ["Sculk Sensor", "SCULK_SENSOR"],
                ["Sculk Shrieker", "SCULK_SHRIEKER"],
                ["Sculk Vein", "SCULK_VEIN"],
                ["Seagrass", "SEAGRASS"],
                ["Sea Lantern", "SEA_LANTERN"],
                ["Sea Pickle", "SEA_PICKLE"],
                ["Sentry Armor Trim Smithing Template", "SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Shaper Armor Trim Smithing Template", "SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Sheaf Pottery Sherd", "SHEAF_POTTERY_SHERD"],
                ["Shears", "SHEARS"],
                ["Sheep Spawn Egg", "SHEEP_SPAWN_EGG"],
                ["Shelter Pottery Sherd", "SHELTER_POTTERY_SHERD"],
                ["Shield", "SHIELD"],
                ["Short Dry Grass", "SHORT_DRY_GRASS"],
                ["Short Grass", "SHORT_GRASS"],
                ["Shroomlight", "SHROOMLIGHT"],
                ["Shulker Box", "SHULKER_BOX"],
                ["Shulker Shell", "SHULKER_SHELL"],
                ["Shulker Spawn Egg", "SHULKER_SPAWN_EGG"],
                ["Silence Armor Trim Smithing Template", "SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Silverfish Spawn Egg", "SILVERFISH_SPAWN_EGG"],
                ["Skeleton Horse Spawn Egg", "SKELETON_HORSE_SPAWN_EGG"],
                ["Skeleton Skull", "SKELETON_SKULL"],
                ["Skeleton Spawn Egg", "SKELETON_SPAWN_EGG"],
                ["Skeleton Wall Skull", "SKELETON_WALL_SKULL"],
                ["Skull Banner Pattern", "SKULL_BANNER_PATTERN"],
                ["Skull Pottery Sherd", "SKULL_POTTERY_SHERD"],
                ["Slime Ball", "SLIME_BALL"],
                ["Slime Spawn Egg", "SLIME_SPAWN_EGG"],
                ["Small Amethyst Bud", "SMALL_AMETHYST_BUD"],
                ["Small Dripleaf", "SMALL_DRIPLEAF"],
                ["Smithing Table", "SMITHING_TABLE"],
                ["Smoker", "SMOKER"],
                ["Smooth Basalt", "SMOOTH_BASALT"],
                ["Smooth Quartz", "SMOOTH_QUARTZ"],
                ["Smooth Red Sandstone", "SMOOTH_RED_SANDSTONE"],
                ["Smooth Sandstone", "SMOOTH_SANDSTONE"],
                ["Smooth Stone", "SMOOTH_STONE"],
                ["Sniffer Egg", "SNIFFER_EGG"],
                ["Sniffer Spawn Egg", "SNIFFER_SPAWN_EGG"],
                ["Snort Pottery Sherd", "SNORT_POTTERY_SHERD"],
                ["Snout Armor Trim Smithing Template", "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Snowball", "SNOWBALL"],
                ["Snow Golem Spawn Egg", "SNOW_GOLEM_SPAWN_EGG"],
                ["Soul Campfire", "SOUL_CAMPFIRE"],
                ["Soul Fire", "SOUL_FIRE"],
                ["Soul Lantern", "SOUL_LANTERN"],
                ["Soul Sand", "SOUL_SAND"],
                ["Soul Soil", "SOUL_SOIL"],
                ["Soul Torch", "SOUL_TORCH"],
                ["Soul Wall Torch", "SOUL_WALL_TORCH"],
                ["Spawner", "SPAWNER"],
                ["Spectral Arrow", "SPECTRAL_ARROW"],
                ["Spider Eye", "SPIDER_EYE"],
                ["Spider Spawn Egg", "SPIDER_SPAWN_EGG"],
                ["Spire Armor Trim Smithing Template", "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Splash Potion", "SPLASH_POTION"],
                ["Sponge", "SPONGE"],
                ["Spore Blossom", "SPORE_BLOSSOM"],
                ["Spruce Boat", "SPRUCE_BOAT"],
                ["Spruce Button", "SPRUCE_BUTTON"],
                ["Spruce Chest Boat", "SPRUCE_CHEST_BOAT"],
                ["Spruce Hanging Sign", "SPRUCE_HANGING_SIGN"],
                ["Spruce Leaves", "SPRUCE_LEAVES"],
                ["Spruce Pressure Plate", "SPRUCE_PRESSURE_PLATE"],
                ["Spruce Sapling", "SPRUCE_SAPLING"],
                ["Spruce Sign", "SPRUCE_SIGN"],
                ["Spruce Wall Hanging Sign", "SPRUCE_WALL_HANGING_SIGN"],
                ["Spruce Wall Sign", "SPRUCE_WALL_SIGN"],
                ["Spyglass", "SPYGLASS"],
                ["Squid Spawn Egg", "SQUID_SPAWN_EGG"],
                ["Stick", "STICK"],
                ["Stonecutter", "STONECUTTER"],
                ["Stone Axe", "STONE_AXE"],
                ["Stone Button", "STONE_BUTTON"],
                ["Stone Hoe", "STONE_HOE"],
                ["Stone Pickaxe", "STONE_PICKAXE"],
                ["Stone Pressure Plate", "STONE_PRESSURE_PLATE"],
                ["Stone Shovel", "STONE_SHOVEL"],
                ["Stone Sword", "STONE_SWORD"],
                ["Stray Spawn Egg", "STRAY_SPAWN_EGG"],
                ["Strider Spawn Egg", "STRIDER_SPAWN_EGG"],
                ["String", "STRING"],
                ["Stripped Pale Oak Log", "STRIPPED_PALE_OAK_LOG"],
                ["Stripped Pale Oak Wood", "STRIPPED_PALE_OAK_WOOD"],
                ["Structure Block", "STRUCTURE_BLOCK"],
                ["Structure Void", "STRUCTURE_VOID"],
                ["Sugar", "SUGAR"],
                ["Sugar Cane", "SUGAR_CANE"],
                ["Sunflower", "SUNFLOWER"],
                ["Suspicious Gravel", "SUSPICIOUS_GRAVEL"],
                ["Suspicious Sand", "SUSPICIOUS_SAND"],
                ["Suspicious Stew", "SUSPICIOUS_STEW"],
                ["Sweet Berries", "SWEET_BERRIES"],
                ["Sweet Berry Bush", "SWEET_BERRY_BUSH"],
                ["Tadpole Bucket", "TADPOLE_BUCKET"],
                ["Tadpole Spawn Egg", "TADPOLE_SPAWN_EGG"],
                ["Tall Dry Grass", "TALL_DRY_GRASS"],
                ["Tall Grass", "TALL_GRASS"],
                ["Tall Seagrass", "TALL_SEAGRASS"],
                ["Terracotta", "TERRACOTTA"],
                ["Test Block", "TEST_BLOCK"],
                ["Test Instance Block", "TEST_INSTANCE_BLOCK"],
                ["Tide Armor Trim Smithing Template", "TIDE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Tipped Arrow", "TIPPED_ARROW"],
                ["Tnt", "TNT"],
                ["Tnt Minecart", "TNT_MINECART"],
                ["Torch", "TORCH"],
                ["Torchflower", "TORCHFLOWER"],
                ["Torchflower Crop", "TORCHFLOWER_CROP"],
                ["Torchflower Seeds", "TORCHFLOWER_SEEDS"],
                ["Totem Of Undying", "TOTEM_OF_UNDYING"],
                ["Trader Llama Spawn Egg", "TRADER_LLAMA_SPAWN_EGG"],
                ["Trapped Chest", "TRAPPED_CHEST"],
                ["Trial Key", "TRIAL_KEY"],
                ["Trial Spawner", "TRIAL_SPAWNER"],
                ["Trident", "TRIDENT"],
                ["Tripwire", "TRIPWIRE"],
                ["Tropical Fish", "TROPICAL_FISH"],
                ["Tropical Fish Bucket", "TROPICAL_FISH_BUCKET"],
                ["Tropical Fish Spawn Egg", "TROPICAL_FISH_SPAWN_EGG"],
                ["Tube Coral", "TUBE_CORAL"],
                ["Tube Coral Block", "TUBE_CORAL_BLOCK"],
                ["Tube Coral Fan", "TUBE_CORAL_FAN"],
                ["Tube Coral Wall Fan", "TUBE_CORAL_WALL_FAN"],
                ["Tuff Bricks", "TUFF_BRICKS"],
                ["Turtle Egg", "TURTLE_EGG"],
                ["Turtle Helmet", "TURTLE_HELMET"],
                ["Turtle Scute", "TURTLE_SCUTE"],
                ["Turtle Spawn Egg", "TURTLE_SPAWN_EGG"],
                ["Twisting Vines", "TWISTING_VINES"],
                ["Twisting Vines Plant", "TWISTING_VINES_PLANT"],
                ["Vault", "VAULT"],
                ["Verdant Froglight", "VERDANT_FROGLIGHT"],
                ["Vex Armor Trim Smithing Template", "VEX_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Vex Spawn Egg", "VEX_SPAWN_EGG"],
                ["Villager Spawn Egg", "VILLAGER_SPAWN_EGG"],
                ["Vindicator Spawn Egg", "VINDICATOR_SPAWN_EGG"],
                ["Vine", "VINE"],
                ["Void Air", "VOID_AIR"],
                ["Wall Torch", "WALL_TORCH"],
                ["Wandering Trader Spawn Egg", "WANDERING_TRADER_SPAWN_EGG"],
                ["Warden Spawn Egg", "WARDEN_SPAWN_EGG"],
                ["Ward Armor Trim Smithing Template", "WARD_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Warped Button", "WARPED_BUTTON"],
                ["Warped Fungus", "WARPED_FUNGUS"],
                ["Warped Fungus On A Stick", "WARPED_FUNGUS_ON_A_STICK"],
                ["Warped Hanging Sign", "WARPED_HANGING_SIGN"],
                ["Warped Nylium", "WARPED_NYLIUM"],
                ["Warped Pressure Plate", "WARPED_PRESSURE_PLATE"],
                ["Warped Roots", "WARPED_ROOTS"],
                ["Warped Sign", "WARPED_SIGN"],
                ["Warped Wall Hanging Sign", "WARPED_WALL_HANGING_SIGN"],
                ["Warped Wall Sign", "WARPED_WALL_SIGN"],
                ["Warped Wart Block", "WARPED_WART_BLOCK"],
                ["Water Bucket", "WATER_BUCKET"],
                ["Water Cauldron", "WATER_CAULDRON"],
                ["Waxed Chiseled Copper", "WAXED_CHISELED_COPPER"],
                ["Waxed Copper Block", "WAXED_COPPER_BLOCK"],
                ["Waxed Copper Bulb", "WAXED_COPPER_BULB"],
                ["Waxed Copper Grate", "WAXED_COPPER_GRATE"],
                ["Waxed Cut Copper", "WAXED_CUT_COPPER"],
                ["Waxed Exposed Chiseled Copper", "WAXED_EXPOSED_CHISELED_COPPER"],
                ["Waxed Exposed Copper", "WAXED_EXPOSED_COPPER"],
                ["Waxed Exposed Copper Bulb", "WAXED_EXPOSED_COPPER_BULB"],
                ["Waxed Exposed Copper Grate", "WAXED_EXPOSED_COPPER_GRATE"],
                ["Waxed Exposed Cut Copper", "WAXED_EXPOSED_CUT_COPPER"],
                ["Waxed Oxidized Chiseled Copper", "WAXED_OXIDIZED_CHISELED_COPPER"],
                ["Waxed Oxidized Copper", "WAXED_OXIDIZED_COPPER"],
                ["Waxed Oxidized Copper Bulb", "WAXED_OXIDIZED_COPPER_BULB"],
                ["Waxed Oxidized Copper Grate", "WAXED_OXIDIZED_COPPER_GRATE"],
                ["Waxed Oxidized Cut Copper", "WAXED_OXIDIZED_CUT_COPPER"],
                ["Waxed Weathered Chiseled Copper", "WAXED_WEATHERED_CHISELED_COPPER"],
                ["Waxed Weathered Copper", "WAXED_WEATHERED_COPPER"],
                ["Waxed Weathered Copper Bulb", "WAXED_WEATHERED_COPPER_BULB"],
                ["Waxed Weathered Copper Grate", "WAXED_WEATHERED_COPPER_GRATE"],
                ["Waxed Weathered Cut Copper", "WAXED_WEATHERED_CUT_COPPER"],
                ["Wayfinder Armor Trim Smithing Template", "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Weathered Chiseled Copper", "WEATHERED_CHISELED_COPPER"],
                ["Weathered Copper", "WEATHERED_COPPER"],
                ["Weathered Copper Bulb", "WEATHERED_COPPER_BULB"],
                ["Weathered Copper Grate", "WEATHERED_COPPER_GRATE"],
                ["Weathered Cut Copper", "WEATHERED_CUT_COPPER"],
                ["Weeping Vines", "WEEPING_VINES"],
                ["Weeping Vines Plant", "WEEPING_VINES_PLANT"],
                ["Wet Sponge", "WET_SPONGE"],
                ["Wheat", "WHEAT"],
                ["Wheat Seeds", "WHEAT_SEEDS"],
                ["White Bundle", "WHITE_BUNDLE"],
                ["White Candle Cake", "WHITE_CANDLE_CAKE"],
                ["White Dye", "WHITE_DYE"],
                ["White Tulip", "WHITE_TULIP"],
                ["Wildflowers", "WILDFLOWERS"],
                ["Wild Armor Trim Smithing Template", "WILD_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Wind Charge", "WIND_CHARGE"],
                ["Witch Spawn Egg", "WITCH_SPAWN_EGG"],
                ["Wither Rose", "WITHER_ROSE"],
                ["Wither Skeleton Skull", "WITHER_SKELETON_SKULL"],
                ["Wither Skeleton Spawn Egg", "WITHER_SKELETON_SPAWN_EGG"],
                ["Wither Skeleton Wall Skull", "WITHER_SKELETON_WALL_SKULL"],
                ["Wither Spawn Egg", "WITHER_SPAWN_EGG"],
                ["Wolf Armor", "WOLF_ARMOR"],
                ["Wolf Spawn Egg", "WOLF_SPAWN_EGG"],
                ["Wooden Axe", "WOODEN_AXE"],
                ["Wooden Hoe", "WOODEN_HOE"],
                ["Wooden Pickaxe", "WOODEN_PICKAXE"],
                ["Wooden Shovel", "WOODEN_SHOVEL"],
                ["Wooden Sword", "WOODEN_SWORD"],
                ["Writable Book", "WRITABLE_BOOK"],
                ["Written Book", "WRITTEN_BOOK"],
                ["Yellow Bundle", "YELLOW_BUNDLE"],
                ["Yellow Candle Cake", "YELLOW_CANDLE_CAKE"],
                ["Yellow Dye", "YELLOW_DYE"],
                ["Zoglin Spawn Egg", "ZOGLIN_SPAWN_EGG"],
                ["Zombie Head", "ZOMBIE_HEAD"],
                ["Zombie Horse Spawn Egg", "ZOMBIE_HORSE_SPAWN_EGG"],
                ["Zombie Spawn Egg", "ZOMBIE_SPAWN_EGG"],
                ["Zombie Villager Spawn Egg", "ZOMBIE_VILLAGER_SPAWN_EGG"],
                ["Zombie Wall Head", "ZOMBIE_WALL_HEAD"],
                ["Zombified Piglin Spawn Egg", "ZOMBIFIED_PIGLIN_SPAWN_EGG"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(20);
            this.setTooltip("Select a miscellaneous Minecraft block or item.");
        }
    };

    Blockly.Blocks['minecraft_material_banner'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("BANNER with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Banner block that can be colored.");
        MCED.Defaults.values['minecraft_material_banner'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_bed'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("BED with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Bed block that can be colored.");
        MCED.Defaults.values['minecraft_material_bed'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_candle'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CANDLE with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Candle block that can be colored.");
        MCED.Defaults.values['minecraft_material_candle'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_carpet'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CARPET with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Carpet block that can be colored.");
        MCED.Defaults.values['minecraft_material_carpet'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_concrete'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CONCRETE with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Concrete block that can be colored.");
        MCED.Defaults.values['minecraft_material_concrete'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_concrete_powder'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("CONCRETE_POWDER with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Concrete Powder block that can be colored.");
        MCED.Defaults.values['minecraft_material_concrete_powder'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_glazed_terracotta'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("GLAZED_TERRACOTTA with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Glazed Terracotta block that can be colored.");
        MCED.Defaults.values['minecraft_material_glazed_terracotta'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_shulker_box'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("SHULKER_BOX with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Shulker Box block that can be colored.");
        MCED.Defaults.values['minecraft_material_shulker_box'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_stained_glass'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("STAINED_GLASS with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Stained Glass block that can be colored.");
        MCED.Defaults.values['minecraft_material_stained_glass'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_stained_glass_pane'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("STAINED_GLASS_PANE with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Stained Glass Pane block that can be colored.");
        MCED.Defaults.values['minecraft_material_stained_glass_pane'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_terracotta'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("TERRACOTTA with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Terracotta block that can be colored.");
        MCED.Defaults.values['minecraft_material_terracotta'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };

    Blockly.Blocks['minecraft_material_wool'] = {
      init: function() {
        this.appendValueInput("COLOUR")
            .setCheck("MinecraftColour")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("WOOL with color");
        this.setOutput(true, "Block");
        this.setColour(160);
        this.setTooltip("A Wool block that can be colored.");
        MCED.Defaults.values['minecraft_material_wool'] = {
          COLOUR: { shadow: '<shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow>' }
        };
        MCED.BlocklyUtils.configureShadow(this, "COLOUR");
      }
    };
}
