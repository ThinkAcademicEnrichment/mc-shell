import { MCED } from "../lib/constants.mjs";

export function defineItemsBlocks(Blockly) {

    Blockly.Blocks['mc_item_boat'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Boat');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_button'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Button');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_chest_boat'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Chest Boat');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_door'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Door');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_fence'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Fence');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_fence_gate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Fence Gate');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_hanging_sign'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Hanging Sign');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_leaves'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Leaves');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_log'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Log');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_planks'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Planks');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_pressure_plate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Pressure Plate');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_sapling'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Sapling');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_shelf'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Shelf');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_sign'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Sign');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_slab'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Slab');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_stairs'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Stairs');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_trapdoor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Trapdoor');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wall_hanging_sign'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Wall Hanging Sign');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wall_sign'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Wall Sign');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wood'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Wood');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_banner'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Banner');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_bed'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Bed');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_bundle'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Bundle');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_candle'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Candle');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_candle_cake'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Candle Cake');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_carpet'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Carpet');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_concrete'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Concrete');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_concrete_powder'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Concrete Powder');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_dye'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Dye');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_glazed_terracotta'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Glazed Terracotta');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_harness'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Harness');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_shulker_box'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Shulker Box');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_stained_glass'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Stained Glass');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_stained_glass_pane'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Stained Glass Pane');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_terracotta'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Terracotta');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wall_banner'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Wall Banner');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wool'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Wool');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_tulip'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Tulip');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_picker_world'] = {
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
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_ores'] = {
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
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_stone_bricks'] = {
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
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_glass'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Glass")
                .appendField(new Blockly.FieldDropdown([
                ["Glass", "GLASS"],
                ["Glass Pane", "GLASS_PANE"],
                ["Tinted Glass", "TINTED_GLASS"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_redstone_components'] = {
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
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_lighting'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Lighting")
                .appendField(new Blockly.FieldDropdown([
                ["Torch", "TORCH"],
                ["Soul Torch", "SOUL_TORCH"],
                ["Lantern", "LANTERN"],
                ["Soul Lantern", "SOUL_LANTERN"],
                ["Glowstone", "GLOWSTONE"],
                ["Sea Lantern", "SEA_LANTERN"],
                ["Ochre Froglight", "OCHRE_FROGLIGHT"],
                ["Pearlescent Froglight", "PEARLESCENT_FROGLIGHT"],
                ["Verdant Froglight", "VERDANT_FROGLIGHT"],
                ["Copper Lantern", "COPPER_LANTERN"],
                ["Shroomlight", "SHROOMLIGHT"],
                ["Jack O Lantern", "JACK_O_LANTERN"],
                ["Beacon", "BEACON"],
                ["End Rod", "END_ROD"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_copper_variants'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Copper Variants")
                .appendField(new Blockly.FieldDropdown([
                ["Copper Block", "COPPER_BLOCK"],
                ["Exposed Copper", "EXPOSED_COPPER"],
                ["Weathered Copper", "WEATHERED_COPPER"],
                ["Oxidized Copper", "OXIDIZED_COPPER"],
                ["Cut Copper", "CUT_COPPER"],
                ["Chiseled Copper", "CHISELED_COPPER"],
                ["Copper Grate", "COPPER_GRATE"],
                ["Copper Bulb", "COPPER_BULB"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_nature'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Nature")
                .appendField(new Blockly.FieldDropdown([
                ["Oak Leaves", "OAK_LEAVES"],
                ["Spruce Leaves", "SPRUCE_LEAVES"],
                ["Birch Leaves", "BIRCH_LEAVES"],
                ["Jungle Leaves", "JUNGLE_LEAVES"],
                ["Acacia Leaves", "ACACIA_LEAVES"],
                ["Dark Oak Leaves", "DARK_OAK_LEAVES"],
                ["Mangrove Leaves", "MANGROVE_LEAVES"],
                ["Cherry Leaves", "CHERRY_LEAVES"],
                ["Azalea Leaves", "AZALEA_LEAVES"],
                ["Moss Block", "MOSS_BLOCK"],
                ["Vine", "VINE"],
                ["Cave Vines", "CAVE_VINES"],
                ["Twisting Vines", "TWISTING_VINES"],
                ["Weeping Vines", "WEEPING_VINES"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_flowers'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Flowers")
                .appendField(new Blockly.FieldDropdown([
                ["Dandelion", "DANDELION"],
                ["Poppy", "POPPY"],
                ["Blue Orchid", "BLUE_ORCHID"],
                ["Allium", "ALLIUM"],
                ["Azure Bluet", "AZURE_BLUET"],
                ["Red Tulip", "RED_TULIP"],
                ["Orange Tulip", "ORANGE_TULIP"],
                ["White Tulip", "WHITE_TULIP"],
                ["Pink Tulip", "PINK_TULIP"],
                ["Oxeye Daisy", "OXEYE_DAISY"],
                ["Cornflower", "CORNFLOWER"],
                ["Lily Of The Valley", "LILY_OF_THE_VALLEY"],
                ["Wither Rose", "WITHER_ROSE"],
                ["Sunflower", "SUNFLOWER"],
                ["Lilac", "LILAC"],
                ["Rose Bush", "ROSE_BUSH"],
                ["Peony", "PEONY"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_functional_storage'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Functional Storage")
                .appendField(new Blockly.FieldDropdown([
                ["Chest", "CHEST"],
                ["Trapped Chest", "TRAPPED_CHEST"],
                ["Barrel", "BARREL"],
                ["Ender Chest", "ENDER_CHEST"],
                ["Crafter", "CRAFTER"],
                ["Furnace", "FURNACE"],
                ["Blast Furnace", "BLAST_FURNACE"],
                ["Smoker", "SMOKER"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_spawning'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Spawning")
                .appendField(new Blockly.FieldDropdown([
                ["Spawner", "SPAWNER"],
                ["Trial Spawner", "TRIAL_SPAWNER"],
                ["Frogspawn", "FROGSPAWN"],
                ["Respawn Anchor", "RESPAWN_ANCHOR"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_general'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Other Items")
                .appendField(new Blockly.FieldDropdown([
                ["Allay Spawn Egg", "ALLAY_SPAWN_EGG"],
                ["Amethyst Block", "AMETHYST_BLOCK"],
                ["Amethyst Cluster", "AMETHYST_CLUSTER"],
                ["Amethyst Shard", "AMETHYST_SHARD"],
                ["Andesite Slab", "ANDESITE_SLAB"],
                ["Andesite Stairs", "ANDESITE_STAIRS"],
                ["Andesite Wall", "ANDESITE_WALL"],
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
                ["Baked Potato", "BAKED_POTATO"],
                ["Bamboo", "BAMBOO"],
                ["Bamboo Block", "BAMBOO_BLOCK"],
                ["Bamboo Chest Raft", "BAMBOO_CHEST_RAFT"],
                ["Bamboo Mosaic", "BAMBOO_MOSAIC"],
                ["Bamboo Mosaic Slab", "BAMBOO_MOSAIC_SLAB"],
                ["Bamboo Mosaic Stairs", "BAMBOO_MOSAIC_STAIRS"],
                ["Bamboo Raft", "BAMBOO_RAFT"],
                ["Barrier", "BARRIER"],
                ["Basalt", "BASALT"],
                ["Bat Spawn Egg", "BAT_SPAWN_EGG"],
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
                ["Blackstone", "BLACKSTONE"],
                ["Blackstone Slab", "BLACKSTONE_SLAB"],
                ["Blackstone Stairs", "BLACKSTONE_STAIRS"],
                ["Blackstone Wall", "BLACKSTONE_WALL"],
                ["Blade Pottery Sherd", "BLADE_POTTERY_SHERD"],
                ["Blaze Powder", "BLAZE_POWDER"],
                ["Blaze Rod", "BLAZE_ROD"],
                ["Blaze Spawn Egg", "BLAZE_SPAWN_EGG"],
                ["Blue Egg", "BLUE_EGG"],
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
                ["Brick Slab", "BRICK_SLAB"],
                ["Brick Stairs", "BRICK_STAIRS"],
                ["Brick Wall", "BRICK_WALL"],
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
                ["Camel Husk Spawn Egg", "CAMEL_HUSK_SPAWN_EGG"],
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
                ["Cave Vines Plant", "CAVE_VINES_PLANT"],
                ["Chainmail Boots", "CHAINMAIL_BOOTS"],
                ["Chainmail Chestplate", "CHAINMAIL_CHESTPLATE"],
                ["Chainmail Helmet", "CHAINMAIL_HELMET"],
                ["Chainmail Leggings", "CHAINMAIL_LEGGINGS"],
                ["Chain Command Block", "CHAIN_COMMAND_BLOCK"],
                ["Charcoal", "CHARCOAL"],
                ["Chest Minecart", "CHEST_MINECART"],
                ["Chicken", "CHICKEN"],
                ["Chicken Spawn Egg", "CHICKEN_SPAWN_EGG"],
                ["Chipped Anvil", "CHIPPED_ANVIL"],
                ["Chiseled Bookshelf", "CHISELED_BOOKSHELF"],
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
                ["Cobbled Deepslate Slab", "COBBLED_DEEPSLATE_SLAB"],
                ["Cobbled Deepslate Stairs", "COBBLED_DEEPSLATE_STAIRS"],
                ["Cobbled Deepslate Wall", "COBBLED_DEEPSLATE_WALL"],
                ["Cobblestone", "COBBLESTONE"],
                ["Cobblestone Slab", "COBBLESTONE_SLAB"],
                ["Cobblestone Stairs", "COBBLESTONE_STAIRS"],
                ["Cobblestone Wall", "COBBLESTONE_WALL"],
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
                ["Copper Axe", "COPPER_AXE"],
                ["Copper Bars", "COPPER_BARS"],
                ["Copper Boots", "COPPER_BOOTS"],
                ["Copper Chain", "COPPER_CHAIN"],
                ["Copper Chest", "COPPER_CHEST"],
                ["Copper Chestplate", "COPPER_CHESTPLATE"],
                ["Copper Door", "COPPER_DOOR"],
                ["Copper Golem Spawn Egg", "COPPER_GOLEM_SPAWN_EGG"],
                ["Copper Golem Statue", "COPPER_GOLEM_STATUE"],
                ["Copper Helmet", "COPPER_HELMET"],
                ["Copper Hoe", "COPPER_HOE"],
                ["Copper Horse Armor", "COPPER_HORSE_ARMOR"],
                ["Copper Ingot", "COPPER_INGOT"],
                ["Copper Leggings", "COPPER_LEGGINGS"],
                ["Copper Nautilus Armor", "COPPER_NAUTILUS_ARMOR"],
                ["Copper Nugget", "COPPER_NUGGET"],
                ["Copper Pickaxe", "COPPER_PICKAXE"],
                ["Copper Shovel", "COPPER_SHOVEL"],
                ["Copper Spear", "COPPER_SPEAR"],
                ["Copper Sword", "COPPER_SWORD"],
                ["Copper Torch", "COPPER_TORCH"],
                ["Copper Trapdoor", "COPPER_TRAPDOOR"],
                ["Copper Wall Torch", "COPPER_WALL_TORCH"],
                ["Cow Spawn Egg", "COW_SPAWN_EGG"],
                ["Crafting Table", "CRAFTING_TABLE"],
                ["Creaking Heart", "CREAKING_HEART"],
                ["Creaking Spawn Egg", "CREAKING_SPAWN_EGG"],
                ["Creeper Banner Pattern", "CREEPER_BANNER_PATTERN"],
                ["Creeper Head", "CREEPER_HEAD"],
                ["Creeper Spawn Egg", "CREEPER_SPAWN_EGG"],
                ["Creeper Wall Head", "CREEPER_WALL_HEAD"],
                ["Crimson Fungus", "CRIMSON_FUNGUS"],
                ["Crimson Hyphae", "CRIMSON_HYPHAE"],
                ["Crimson Nylium", "CRIMSON_NYLIUM"],
                ["Crimson Roots", "CRIMSON_ROOTS"],
                ["Crimson Stem", "CRIMSON_STEM"],
                ["Crossbow", "CROSSBOW"],
                ["Cut Copper Slab", "CUT_COPPER_SLAB"],
                ["Cut Copper Stairs", "CUT_COPPER_STAIRS"],
                ["Cut Red Sandstone", "CUT_RED_SANDSTONE"],
                ["Cut Red Sandstone Slab", "CUT_RED_SANDSTONE_SLAB"],
                ["Cut Sandstone", "CUT_SANDSTONE"],
                ["Cut Sandstone Slab", "CUT_SANDSTONE_SLAB"],
                ["Damaged Anvil", "DAMAGED_ANVIL"],
                ["Danger Pottery Sherd", "DANGER_POTTERY_SHERD"],
                ["Dark Oak Boat", "DARK_OAK_BOAT"],
                ["Dark Oak Button", "DARK_OAK_BUTTON"],
                ["Dark Oak Chest Boat", "DARK_OAK_CHEST_BOAT"],
                ["Dark Oak Door", "DARK_OAK_DOOR"],
                ["Dark Oak Fence", "DARK_OAK_FENCE"],
                ["Dark Oak Fence Gate", "DARK_OAK_FENCE_GATE"],
                ["Dark Oak Hanging Sign", "DARK_OAK_HANGING_SIGN"],
                ["Dark Oak Log", "DARK_OAK_LOG"],
                ["Dark Oak Planks", "DARK_OAK_PLANKS"],
                ["Dark Oak Pressure Plate", "DARK_OAK_PRESSURE_PLATE"],
                ["Dark Oak Sapling", "DARK_OAK_SAPLING"],
                ["Dark Oak Shelf", "DARK_OAK_SHELF"],
                ["Dark Oak Sign", "DARK_OAK_SIGN"],
                ["Dark Oak Slab", "DARK_OAK_SLAB"],
                ["Dark Oak Stairs", "DARK_OAK_STAIRS"],
                ["Dark Oak Trapdoor", "DARK_OAK_TRAPDOOR"],
                ["Dark Oak Wall Hanging Sign", "DARK_OAK_WALL_HANGING_SIGN"],
                ["Dark Oak Wall Sign", "DARK_OAK_WALL_SIGN"],
                ["Dark Oak Wood", "DARK_OAK_WOOD"],
                ["Dark Prismarine", "DARK_PRISMARINE"],
                ["Dark Prismarine Slab", "DARK_PRISMARINE_SLAB"],
                ["Dark Prismarine Stairs", "DARK_PRISMARINE_STAIRS"],
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
                ["Deepslate Brick Slab", "DEEPSLATE_BRICK_SLAB"],
                ["Deepslate Brick Stairs", "DEEPSLATE_BRICK_STAIRS"],
                ["Deepslate Brick Wall", "DEEPSLATE_BRICK_WALL"],
                ["Deepslate Tile Slab", "DEEPSLATE_TILE_SLAB"],
                ["Deepslate Tile Stairs", "DEEPSLATE_TILE_STAIRS"],
                ["Deepslate Tile Wall", "DEEPSLATE_TILE_WALL"],
                ["Diamond", "DIAMOND"],
                ["Diamond Axe", "DIAMOND_AXE"],
                ["Diamond Block", "DIAMOND_BLOCK"],
                ["Diamond Boots", "DIAMOND_BOOTS"],
                ["Diamond Chestplate", "DIAMOND_CHESTPLATE"],
                ["Diamond Helmet", "DIAMOND_HELMET"],
                ["Diamond Hoe", "DIAMOND_HOE"],
                ["Diamond Horse Armor", "DIAMOND_HORSE_ARMOR"],
                ["Diamond Leggings", "DIAMOND_LEGGINGS"],
                ["Diamond Nautilus Armor", "DIAMOND_NAUTILUS_ARMOR"],
                ["Diamond Pickaxe", "DIAMOND_PICKAXE"],
                ["Diamond Shovel", "DIAMOND_SHOVEL"],
                ["Diamond Spear", "DIAMOND_SPEAR"],
                ["Diamond Sword", "DIAMOND_SWORD"],
                ["Diorite Slab", "DIORITE_SLAB"],
                ["Diorite Stairs", "DIORITE_STAIRS"],
                ["Diorite Wall", "DIORITE_WALL"],
                ["Disc Fragment 5", "DISC_FRAGMENT_5"],
                ["Dolphin Spawn Egg", "DOLPHIN_SPAWN_EGG"],
                ["Donkey Spawn Egg", "DONKEY_SPAWN_EGG"],
                ["Dragon Breath", "DRAGON_BREATH"],
                ["Dragon Egg", "DRAGON_EGG"],
                ["Dragon Head", "DRAGON_HEAD"],
                ["Dragon Wall Head", "DRAGON_WALL_HEAD"],
                ["Dried Ghast", "DRIED_GHAST"],
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
                ["Ender Dragon Spawn Egg", "ENDER_DRAGON_SPAWN_EGG"],
                ["Ender Eye", "ENDER_EYE"],
                ["Ender Pearl", "ENDER_PEARL"],
                ["End Crystal", "END_CRYSTAL"],
                ["End Gateway", "END_GATEWAY"],
                ["End Portal", "END_PORTAL"],
                ["End Portal Frame", "END_PORTAL_FRAME"],
                ["End Stone", "END_STONE"],
                ["End Stone Brick Slab", "END_STONE_BRICK_SLAB"],
                ["End Stone Brick Stairs", "END_STONE_BRICK_STAIRS"],
                ["End Stone Brick Wall", "END_STONE_BRICK_WALL"],
                ["Evoker Spawn Egg", "EVOKER_SPAWN_EGG"],
                ["Experience Bottle", "EXPERIENCE_BOTTLE"],
                ["Explorer Pottery Sherd", "EXPLORER_POTTERY_SHERD"],
                ["Exposed Chiseled Copper", "EXPOSED_CHISELED_COPPER"],
                ["Exposed Copper Bars", "EXPOSED_COPPER_BARS"],
                ["Exposed Copper Bulb", "EXPOSED_COPPER_BULB"],
                ["Exposed Copper Chain", "EXPOSED_COPPER_CHAIN"],
                ["Exposed Copper Chest", "EXPOSED_COPPER_CHEST"],
                ["Exposed Copper Door", "EXPOSED_COPPER_DOOR"],
                ["Exposed Copper Golem Statue", "EXPOSED_COPPER_GOLEM_STATUE"],
                ["Exposed Copper Grate", "EXPOSED_COPPER_GRATE"],
                ["Exposed Copper Lantern", "EXPOSED_COPPER_LANTERN"],
                ["Exposed Copper Trapdoor", "EXPOSED_COPPER_TRAPDOOR"],
                ["Exposed Cut Copper", "EXPOSED_CUT_COPPER"],
                ["Exposed Cut Copper Slab", "EXPOSED_CUT_COPPER_SLAB"],
                ["Exposed Cut Copper Stairs", "EXPOSED_CUT_COPPER_STAIRS"],
                ["Exposed Lightning Rod", "EXPOSED_LIGHTNING_ROD"],
                ["Eye Armor Trim Smithing Template", "EYE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Enum Constant", "Enum Constant"],
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
                ["Frog Spawn Egg", "FROG_SPAWN_EGG"],
                ["Frosted Ice", "FROSTED_ICE"],
                ["Furnace Minecart", "FURNACE_MINECART"],
                ["Ghast Spawn Egg", "GHAST_SPAWN_EGG"],
                ["Ghast Tear", "GHAST_TEAR"],
                ["Gilded Blackstone", "GILDED_BLACKSTONE"],
                ["Glass Bottle", "GLASS_BOTTLE"],
                ["Glistering Melon Slice", "GLISTERING_MELON_SLICE"],
                ["Globe Banner Pattern", "GLOBE_BANNER_PATTERN"],
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
                ["Golden Nautilus Armor", "GOLDEN_NAUTILUS_ARMOR"],
                ["Golden Pickaxe", "GOLDEN_PICKAXE"],
                ["Golden Shovel", "GOLDEN_SHOVEL"],
                ["Golden Spear", "GOLDEN_SPEAR"],
                ["Golden Sword", "GOLDEN_SWORD"],
                ["Gold Block", "GOLD_BLOCK"],
                ["Gold Ingot", "GOLD_INGOT"],
                ["Gold Nugget", "GOLD_NUGGET"],
                ["Granite Slab", "GRANITE_SLAB"],
                ["Granite Stairs", "GRANITE_STAIRS"],
                ["Granite Wall", "GRANITE_WALL"],
                ["Grindstone", "GRINDSTONE"],
                ["Guardian Spawn Egg", "GUARDIAN_SPAWN_EGG"],
                ["Gunpowder", "GUNPOWDER"],
                ["Guster Banner Pattern", "GUSTER_BANNER_PATTERN"],
                ["Guster Pottery Sherd", "GUSTER_POTTERY_SHERD"],
                ["Hanging Roots", "HANGING_ROOTS"],
                ["Happy Ghast Spawn Egg", "HAPPY_GHAST_SPAWN_EGG"],
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
                ["Iron Chain", "IRON_CHAIN"],
                ["Iron Chestplate", "IRON_CHESTPLATE"],
                ["Iron Door", "IRON_DOOR"],
                ["Iron Golem Spawn Egg", "IRON_GOLEM_SPAWN_EGG"],
                ["Iron Helmet", "IRON_HELMET"],
                ["Iron Hoe", "IRON_HOE"],
                ["Iron Horse Armor", "IRON_HORSE_ARMOR"],
                ["Iron Ingot", "IRON_INGOT"],
                ["Iron Leggings", "IRON_LEGGINGS"],
                ["Iron Nautilus Armor", "IRON_NAUTILUS_ARMOR"],
                ["Iron Nugget", "IRON_NUGGET"],
                ["Iron Pickaxe", "IRON_PICKAXE"],
                ["Iron Shovel", "IRON_SHOVEL"],
                ["Iron Spear", "IRON_SPEAR"],
                ["Iron Sword", "IRON_SWORD"],
                ["Iron Trapdoor", "IRON_TRAPDOOR"],
                ["Item Frame", "ITEM_FRAME"],
                ["Jigsaw", "JIGSAW"],
                ["Jukebox", "JUKEBOX"],
                ["Kelp", "KELP"],
                ["Kelp Plant", "KELP_PLANT"],
                ["Knowledge Book", "KNOWLEDGE_BOOK"],
                ["Ladder", "LADDER"],
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
                ["Light Blue Banner", "LIGHT_BLUE_BANNER"],
                ["Light Blue Bed", "LIGHT_BLUE_BED"],
                ["Light Blue Bundle", "LIGHT_BLUE_BUNDLE"],
                ["Light Blue Candle", "LIGHT_BLUE_CANDLE"],
                ["Light Blue Candle Cake", "LIGHT_BLUE_CANDLE_CAKE"],
                ["Light Blue Carpet", "LIGHT_BLUE_CARPET"],
                ["Light Blue Concrete", "LIGHT_BLUE_CONCRETE"],
                ["Light Blue Concrete Powder", "LIGHT_BLUE_CONCRETE_POWDER"],
                ["Light Blue Dye", "LIGHT_BLUE_DYE"],
                ["Light Blue Glazed Terracotta", "LIGHT_BLUE_GLAZED_TERRACOTTA"],
                ["Light Blue Harness", "LIGHT_BLUE_HARNESS"],
                ["Light Blue Shulker Box", "LIGHT_BLUE_SHULKER_BOX"],
                ["Light Blue Stained Glass", "LIGHT_BLUE_STAINED_GLASS"],
                ["Light Blue Stained Glass Pane", "LIGHT_BLUE_STAINED_GLASS_PANE"],
                ["Light Blue Terracotta", "LIGHT_BLUE_TERRACOTTA"],
                ["Light Blue Wall Banner", "LIGHT_BLUE_WALL_BANNER"],
                ["Light Blue Wool", "LIGHT_BLUE_WOOL"],
                ["Light Gray Banner", "LIGHT_GRAY_BANNER"],
                ["Light Gray Bed", "LIGHT_GRAY_BED"],
                ["Light Gray Bundle", "LIGHT_GRAY_BUNDLE"],
                ["Light Gray Candle", "LIGHT_GRAY_CANDLE"],
                ["Light Gray Candle Cake", "LIGHT_GRAY_CANDLE_CAKE"],
                ["Light Gray Carpet", "LIGHT_GRAY_CARPET"],
                ["Light Gray Concrete", "LIGHT_GRAY_CONCRETE"],
                ["Light Gray Concrete Powder", "LIGHT_GRAY_CONCRETE_POWDER"],
                ["Light Gray Dye", "LIGHT_GRAY_DYE"],
                ["Light Gray Glazed Terracotta", "LIGHT_GRAY_GLAZED_TERRACOTTA"],
                ["Light Gray Harness", "LIGHT_GRAY_HARNESS"],
                ["Light Gray Shulker Box", "LIGHT_GRAY_SHULKER_BOX"],
                ["Light Gray Stained Glass", "LIGHT_GRAY_STAINED_GLASS"],
                ["Light Gray Stained Glass Pane", "LIGHT_GRAY_STAINED_GLASS_PANE"],
                ["Light Gray Terracotta", "LIGHT_GRAY_TERRACOTTA"],
                ["Light Gray Wall Banner", "LIGHT_GRAY_WALL_BANNER"],
                ["Light Gray Wool", "LIGHT_GRAY_WOOL"],
                ["Light Weighted Pressure Plate", "LIGHT_WEIGHTED_PRESSURE_PLATE"],
                ["Lily Pad", "LILY_PAD"],
                ["Lingering Potion", "LINGERING_POTION"],
                ["Llama Spawn Egg", "LLAMA_SPAWN_EGG"],
                ["Lodestone", "LODESTONE"],
                ["Loom", "LOOM"],
                ["Mace", "MACE"],
                ["Magma Cream", "MAGMA_CREAM"],
                ["Magma Cube Spawn Egg", "MAGMA_CUBE_SPAWN_EGG"],
                ["Mangrove Propagule", "MANGROVE_PROPAGULE"],
                ["Mangrove Roots", "MANGROVE_ROOTS"],
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
                ["Mossy Cobblestone Slab", "MOSSY_COBBLESTONE_SLAB"],
                ["Mossy Cobblestone Stairs", "MOSSY_COBBLESTONE_STAIRS"],
                ["Mossy Cobblestone Wall", "MOSSY_COBBLESTONE_WALL"],
                ["Mossy Stone Brick Slab", "MOSSY_STONE_BRICK_SLAB"],
                ["Mossy Stone Brick Stairs", "MOSSY_STONE_BRICK_STAIRS"],
                ["Mossy Stone Brick Wall", "MOSSY_STONE_BRICK_WALL"],
                ["Moss Carpet", "MOSS_CARPET"],
                ["Mourner Pottery Sherd", "MOURNER_POTTERY_SHERD"],
                ["Moving Piston", "MOVING_PISTON"],
                ["Mud", "MUD"],
                ["Muddy Mangrove Roots", "MUDDY_MANGROVE_ROOTS"],
                ["Mud Brick Slab", "MUD_BRICK_SLAB"],
                ["Mud Brick Stairs", "MUD_BRICK_STAIRS"],
                ["Mud Brick Wall", "MUD_BRICK_WALL"],
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
                ["Music Disc Lava Chicken", "MUSIC_DISC_LAVA_CHICKEN"],
                ["Music Disc Mall", "MUSIC_DISC_MALL"],
                ["Music Disc Mellohi", "MUSIC_DISC_MELLOHI"],
                ["Music Disc Otherside", "MUSIC_DISC_OTHERSIDE"],
                ["Music Disc Pigstep", "MUSIC_DISC_PIGSTEP"],
                ["Music Disc Precipice", "MUSIC_DISC_PRECIPICE"],
                ["Music Disc Relic", "MUSIC_DISC_RELIC"],
                ["Music Disc Stal", "MUSIC_DISC_STAL"],
                ["Music Disc Strad", "MUSIC_DISC_STRAD"],
                ["Music Disc Tears", "MUSIC_DISC_TEARS"],
                ["Music Disc Wait", "MUSIC_DISC_WAIT"],
                ["Music Disc Ward", "MUSIC_DISC_WARD"],
                ["Mutton", "MUTTON"],
                ["Name Tag", "NAME_TAG"],
                ["Nautilus Shell", "NAUTILUS_SHELL"],
                ["Nautilus Spawn Egg", "NAUTILUS_SPAWN_EGG"],
                ["Netherite Axe", "NETHERITE_AXE"],
                ["Netherite Block", "NETHERITE_BLOCK"],
                ["Netherite Boots", "NETHERITE_BOOTS"],
                ["Netherite Chestplate", "NETHERITE_CHESTPLATE"],
                ["Netherite Helmet", "NETHERITE_HELMET"],
                ["Netherite Hoe", "NETHERITE_HOE"],
                ["Netherite Horse Armor", "NETHERITE_HORSE_ARMOR"],
                ["Netherite Ingot", "NETHERITE_INGOT"],
                ["Netherite Leggings", "NETHERITE_LEGGINGS"],
                ["Netherite Nautilus Armor", "NETHERITE_NAUTILUS_ARMOR"],
                ["Netherite Pickaxe", "NETHERITE_PICKAXE"],
                ["Netherite Scrap", "NETHERITE_SCRAP"],
                ["Netherite Shovel", "NETHERITE_SHOVEL"],
                ["Netherite Spear", "NETHERITE_SPEAR"],
                ["Netherite Sword", "NETHERITE_SWORD"],
                ["Netherite Upgrade Smithing Template", "NETHERITE_UPGRADE_SMITHING_TEMPLATE"],
                ["Netherrack", "NETHERRACK"],
                ["Nether Brick", "NETHER_BRICK"],
                ["Nether Brick Fence", "NETHER_BRICK_FENCE"],
                ["Nether Brick Slab", "NETHER_BRICK_SLAB"],
                ["Nether Brick Stairs", "NETHER_BRICK_STAIRS"],
                ["Nether Brick Wall", "NETHER_BRICK_WALL"],
                ["Nether Portal", "NETHER_PORTAL"],
                ["Nether Sprouts", "NETHER_SPROUTS"],
                ["Nether Star", "NETHER_STAR"],
                ["Nether Wart", "NETHER_WART"],
                ["Nether Wart Block", "NETHER_WART_BLOCK"],
                ["Ocelot Spawn Egg", "OCELOT_SPAWN_EGG"],
                ["Ominous Bottle", "OMINOUS_BOTTLE"],
                ["Ominous Trial Key", "OMINOUS_TRIAL_KEY"],
                ["Open Eyeblossom", "OPEN_EYEBLOSSOM"],
                ["Oxidized Chiseled Copper", "OXIDIZED_CHISELED_COPPER"],
                ["Oxidized Copper Bars", "OXIDIZED_COPPER_BARS"],
                ["Oxidized Copper Bulb", "OXIDIZED_COPPER_BULB"],
                ["Oxidized Copper Chain", "OXIDIZED_COPPER_CHAIN"],
                ["Oxidized Copper Chest", "OXIDIZED_COPPER_CHEST"],
                ["Oxidized Copper Door", "OXIDIZED_COPPER_DOOR"],
                ["Oxidized Copper Golem Statue", "OXIDIZED_COPPER_GOLEM_STATUE"],
                ["Oxidized Copper Grate", "OXIDIZED_COPPER_GRATE"],
                ["Oxidized Copper Lantern", "OXIDIZED_COPPER_LANTERN"],
                ["Oxidized Copper Trapdoor", "OXIDIZED_COPPER_TRAPDOOR"],
                ["Oxidized Cut Copper", "OXIDIZED_CUT_COPPER"],
                ["Oxidized Cut Copper Slab", "OXIDIZED_CUT_COPPER_SLAB"],
                ["Oxidized Cut Copper Stairs", "OXIDIZED_CUT_COPPER_STAIRS"],
                ["Oxidized Lightning Rod", "OXIDIZED_LIGHTNING_ROD"],
                ["Packed Mud", "PACKED_MUD"],
                ["Painting", "PAINTING"],
                ["Pale Hanging Moss", "PALE_HANGING_MOSS"],
                ["Pale Moss Block", "PALE_MOSS_BLOCK"],
                ["Pale Moss Carpet", "PALE_MOSS_CARPET"],
                ["Pale Oak Boat", "PALE_OAK_BOAT"],
                ["Pale Oak Button", "PALE_OAK_BUTTON"],
                ["Pale Oak Chest Boat", "PALE_OAK_CHEST_BOAT"],
                ["Pale Oak Door", "PALE_OAK_DOOR"],
                ["Pale Oak Fence", "PALE_OAK_FENCE"],
                ["Pale Oak Fence Gate", "PALE_OAK_FENCE_GATE"],
                ["Pale Oak Hanging Sign", "PALE_OAK_HANGING_SIGN"],
                ["Pale Oak Leaves", "PALE_OAK_LEAVES"],
                ["Pale Oak Log", "PALE_OAK_LOG"],
                ["Pale Oak Planks", "PALE_OAK_PLANKS"],
                ["Pale Oak Pressure Plate", "PALE_OAK_PRESSURE_PLATE"],
                ["Pale Oak Sapling", "PALE_OAK_SAPLING"],
                ["Pale Oak Shelf", "PALE_OAK_SHELF"],
                ["Pale Oak Sign", "PALE_OAK_SIGN"],
                ["Pale Oak Slab", "PALE_OAK_SLAB"],
                ["Pale Oak Stairs", "PALE_OAK_STAIRS"],
                ["Pale Oak Trapdoor", "PALE_OAK_TRAPDOOR"],
                ["Pale Oak Wall Hanging Sign", "PALE_OAK_WALL_HANGING_SIGN"],
                ["Pale Oak Wall Sign", "PALE_OAK_WALL_SIGN"],
                ["Pale Oak Wood", "PALE_OAK_WOOD"],
                ["Panda Spawn Egg", "PANDA_SPAWN_EGG"],
                ["Paper", "PAPER"],
                ["Parched Spawn Egg", "PARCHED_SPAWN_EGG"],
                ["Parrot Spawn Egg", "PARROT_SPAWN_EGG"],
                ["Petrified Oak Slab", "PETRIFIED_OAK_SLAB"],
                ["Phantom Membrane", "PHANTOM_MEMBRANE"],
                ["Phantom Spawn Egg", "PHANTOM_SPAWN_EGG"],
                ["Piglin Banner Pattern", "PIGLIN_BANNER_PATTERN"],
                ["Piglin Brute Spawn Egg", "PIGLIN_BRUTE_SPAWN_EGG"],
                ["Piglin Head", "PIGLIN_HEAD"],
                ["Piglin Spawn Egg", "PIGLIN_SPAWN_EGG"],
                ["Piglin Wall Head", "PIGLIN_WALL_HEAD"],
                ["Pig Spawn Egg", "PIG_SPAWN_EGG"],
                ["Pillager Spawn Egg", "PILLAGER_SPAWN_EGG"],
                ["Pink Petals", "PINK_PETALS"],
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
                ["Polished Andesite Slab", "POLISHED_ANDESITE_SLAB"],
                ["Polished Andesite Stairs", "POLISHED_ANDESITE_STAIRS"],
                ["Polished Basalt", "POLISHED_BASALT"],
                ["Polished Blackstone", "POLISHED_BLACKSTONE"],
                ["Polished Blackstone Brick Slab", "POLISHED_BLACKSTONE_BRICK_SLAB"],
                ["Polished Blackstone Brick Stairs", "POLISHED_BLACKSTONE_BRICK_STAIRS"],
                ["Polished Blackstone Brick Wall", "POLISHED_BLACKSTONE_BRICK_WALL"],
                ["Polished Blackstone Button", "POLISHED_BLACKSTONE_BUTTON"],
                ["Polished Blackstone Pressure Plate", "POLISHED_BLACKSTONE_PRESSURE_PLATE"],
                ["Polished Blackstone Slab", "POLISHED_BLACKSTONE_SLAB"],
                ["Polished Blackstone Stairs", "POLISHED_BLACKSTONE_STAIRS"],
                ["Polished Blackstone Wall", "POLISHED_BLACKSTONE_WALL"],
                ["Polished Deepslate", "POLISHED_DEEPSLATE"],
                ["Polished Deepslate Slab", "POLISHED_DEEPSLATE_SLAB"],
                ["Polished Deepslate Stairs", "POLISHED_DEEPSLATE_STAIRS"],
                ["Polished Deepslate Wall", "POLISHED_DEEPSLATE_WALL"],
                ["Polished Diorite", "POLISHED_DIORITE"],
                ["Polished Diorite Slab", "POLISHED_DIORITE_SLAB"],
                ["Polished Diorite Stairs", "POLISHED_DIORITE_STAIRS"],
                ["Polished Granite", "POLISHED_GRANITE"],
                ["Polished Granite Slab", "POLISHED_GRANITE_SLAB"],
                ["Polished Granite Stairs", "POLISHED_GRANITE_STAIRS"],
                ["Polished Tuff", "POLISHED_TUFF"],
                ["Polished Tuff Slab", "POLISHED_TUFF_SLAB"],
                ["Polished Tuff Stairs", "POLISHED_TUFF_STAIRS"],
                ["Polished Tuff Wall", "POLISHED_TUFF_WALL"],
                ["Popped Chorus Fruit", "POPPED_CHORUS_FRUIT"],
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
                ["Prismarine Brick Slab", "PRISMARINE_BRICK_SLAB"],
                ["Prismarine Brick Stairs", "PRISMARINE_BRICK_STAIRS"],
                ["Prismarine Crystals", "PRISMARINE_CRYSTALS"],
                ["Prismarine Shard", "PRISMARINE_SHARD"],
                ["Prismarine Slab", "PRISMARINE_SLAB"],
                ["Prismarine Stairs", "PRISMARINE_STAIRS"],
                ["Prismarine Wall", "PRISMARINE_WALL"],
                ["Prize Pottery Sherd", "PRIZE_POTTERY_SHERD"],
                ["Pufferfish", "PUFFERFISH"],
                ["Pufferfish Bucket", "PUFFERFISH_BUCKET"],
                ["Pufferfish Spawn Egg", "PUFFERFISH_SPAWN_EGG"],
                ["Pumpkin", "PUMPKIN"],
                ["Pumpkin Pie", "PUMPKIN_PIE"],
                ["Pumpkin Seeds", "PUMPKIN_SEEDS"],
                ["Pumpkin Stem", "PUMPKIN_STEM"],
                ["Purpur Block", "PURPUR_BLOCK"],
                ["Purpur Pillar", "PURPUR_PILLAR"],
                ["Purpur Slab", "PURPUR_SLAB"],
                ["Purpur Stairs", "PURPUR_STAIRS"],
                ["Quartz", "QUARTZ"],
                ["Quartz Block", "QUARTZ_BLOCK"],
                ["Quartz Pillar", "QUARTZ_PILLAR"],
                ["Quartz Slab", "QUARTZ_SLAB"],
                ["Quartz Stairs", "QUARTZ_STAIRS"],
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
                ["Red Mushroom", "RED_MUSHROOM"],
                ["Red Mushroom Block", "RED_MUSHROOM_BLOCK"],
                ["Red Nether Brick Slab", "RED_NETHER_BRICK_SLAB"],
                ["Red Nether Brick Stairs", "RED_NETHER_BRICK_STAIRS"],
                ["Red Nether Brick Wall", "RED_NETHER_BRICK_WALL"],
                ["Red Sandstone", "RED_SANDSTONE"],
                ["Red Sandstone Slab", "RED_SANDSTONE_SLAB"],
                ["Red Sandstone Stairs", "RED_SANDSTONE_STAIRS"],
                ["Red Sandstone Wall", "RED_SANDSTONE_WALL"],
                ["Reinforced Deepslate", "REINFORCED_DEEPSLATE"],
                ["Repeating Command Block", "REPEATING_COMMAND_BLOCK"],
                ["Resin Block", "RESIN_BLOCK"],
                ["Resin Brick", "RESIN_BRICK"],
                ["Resin Bricks", "RESIN_BRICKS"],
                ["Resin Brick Slab", "RESIN_BRICK_SLAB"],
                ["Resin Brick Stairs", "RESIN_BRICK_STAIRS"],
                ["Resin Brick Wall", "RESIN_BRICK_WALL"],
                ["Resin Clump", "RESIN_CLUMP"],
                ["Rib Armor Trim Smithing Template", "RIB_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Rotten Flesh", "ROTTEN_FLESH"],
                ["Saddle", "SADDLE"],
                ["Salmon", "SALMON"],
                ["Salmon Bucket", "SALMON_BUCKET"],
                ["Salmon Spawn Egg", "SALMON_SPAWN_EGG"],
                ["Sandstone", "SANDSTONE"],
                ["Sandstone Slab", "SANDSTONE_SLAB"],
                ["Sandstone Stairs", "SANDSTONE_STAIRS"],
                ["Sandstone Wall", "SANDSTONE_WALL"],
                ["Scaffolding", "SCAFFOLDING"],
                ["Scrape Pottery Sherd", "SCRAPE_POTTERY_SHERD"],
                ["Sculk", "SCULK"],
                ["Sculk Catalyst", "SCULK_CATALYST"],
                ["Sculk Sensor", "SCULK_SENSOR"],
                ["Sculk Shrieker", "SCULK_SHRIEKER"],
                ["Sculk Vein", "SCULK_VEIN"],
                ["Seagrass", "SEAGRASS"],
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
                ["Sniffer Spawn Egg", "SNIFFER_SPAWN_EGG"],
                ["Snort Pottery Sherd", "SNORT_POTTERY_SHERD"],
                ["Snout Armor Trim Smithing Template", "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Snowball", "SNOWBALL"],
                ["Snow Golem Spawn Egg", "SNOW_GOLEM_SPAWN_EGG"],
                ["Soul Campfire", "SOUL_CAMPFIRE"],
                ["Soul Fire", "SOUL_FIRE"],
                ["Soul Sand", "SOUL_SAND"],
                ["Soul Soil", "SOUL_SOIL"],
                ["Soul Wall Torch", "SOUL_WALL_TORCH"],
                ["Spectral Arrow", "SPECTRAL_ARROW"],
                ["Spider Eye", "SPIDER_EYE"],
                ["Spider Spawn Egg", "SPIDER_SPAWN_EGG"],
                ["Spire Armor Trim Smithing Template", "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Splash Potion", "SPLASH_POTION"],
                ["Sponge", "SPONGE"],
                ["Spore Blossom", "SPORE_BLOSSOM"],
                ["Spyglass", "SPYGLASS"],
                ["Squid Spawn Egg", "SQUID_SPAWN_EGG"],
                ["Stick", "STICK"],
                ["Stonecutter", "STONECUTTER"],
                ["Stone Axe", "STONE_AXE"],
                ["Stone Brick Slab", "STONE_BRICK_SLAB"],
                ["Stone Brick Stairs", "STONE_BRICK_STAIRS"],
                ["Stone Brick Wall", "STONE_BRICK_WALL"],
                ["Stone Button", "STONE_BUTTON"],
                ["Stone Hoe", "STONE_HOE"],
                ["Stone Pickaxe", "STONE_PICKAXE"],
                ["Stone Pressure Plate", "STONE_PRESSURE_PLATE"],
                ["Stone Shovel", "STONE_SHOVEL"],
                ["Stone Slab", "STONE_SLAB"],
                ["Stone Spear", "STONE_SPEAR"],
                ["Stone Stairs", "STONE_STAIRS"],
                ["Stone Sword", "STONE_SWORD"],
                ["Stray Spawn Egg", "STRAY_SPAWN_EGG"],
                ["Strider Spawn Egg", "STRIDER_SPAWN_EGG"],
                ["String", "STRING"],
                ["Stripped Acacia Log", "STRIPPED_ACACIA_LOG"],
                ["Stripped Acacia Wood", "STRIPPED_ACACIA_WOOD"],
                ["Stripped Bamboo Block", "STRIPPED_BAMBOO_BLOCK"],
                ["Stripped Birch Log", "STRIPPED_BIRCH_LOG"],
                ["Stripped Birch Wood", "STRIPPED_BIRCH_WOOD"],
                ["Stripped Cherry Log", "STRIPPED_CHERRY_LOG"],
                ["Stripped Cherry Wood", "STRIPPED_CHERRY_WOOD"],
                ["Stripped Crimson Hyphae", "STRIPPED_CRIMSON_HYPHAE"],
                ["Stripped Crimson Stem", "STRIPPED_CRIMSON_STEM"],
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
                ["Stripped Spruce Wood", "STRIPPED_SPRUCE_WOOD"],
                ["Stripped Warped Hyphae", "STRIPPED_WARPED_HYPHAE"],
                ["Stripped Warped Stem", "STRIPPED_WARPED_STEM"],
                ["Structure Block", "STRUCTURE_BLOCK"],
                ["Structure Void", "STRUCTURE_VOID"],
                ["Sugar", "SUGAR"],
                ["Sugar Cane", "SUGAR_CANE"],
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
                ["Torchflower", "TORCHFLOWER"],
                ["Torchflower Crop", "TORCHFLOWER_CROP"],
                ["Torchflower Seeds", "TORCHFLOWER_SEEDS"],
                ["Totem Of Undying", "TOTEM_OF_UNDYING"],
                ["Trader Llama Spawn Egg", "TRADER_LLAMA_SPAWN_EGG"],
                ["Trial Key", "TRIAL_KEY"],
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
                ["Tuff Brick Slab", "TUFF_BRICK_SLAB"],
                ["Tuff Brick Stairs", "TUFF_BRICK_STAIRS"],
                ["Tuff Brick Wall", "TUFF_BRICK_WALL"],
                ["Tuff Slab", "TUFF_SLAB"],
                ["Tuff Stairs", "TUFF_STAIRS"],
                ["Tuff Wall", "TUFF_WALL"],
                ["Turtle Egg", "TURTLE_EGG"],
                ["Turtle Helmet", "TURTLE_HELMET"],
                ["Turtle Scute", "TURTLE_SCUTE"],
                ["Turtle Spawn Egg", "TURTLE_SPAWN_EGG"],
                ["Twisting Vines Plant", "TWISTING_VINES_PLANT"],
                ["Vault", "VAULT"],
                ["Vex Armor Trim Smithing Template", "VEX_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Vex Spawn Egg", "VEX_SPAWN_EGG"],
                ["Villager Spawn Egg", "VILLAGER_SPAWN_EGG"],
                ["Vindicator Spawn Egg", "VINDICATOR_SPAWN_EGG"],
                ["Void Air", "VOID_AIR"],
                ["Wall Torch", "WALL_TORCH"],
                ["Wandering Trader Spawn Egg", "WANDERING_TRADER_SPAWN_EGG"],
                ["Warden Spawn Egg", "WARDEN_SPAWN_EGG"],
                ["Ward Armor Trim Smithing Template", "WARD_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Warped Fungus", "WARPED_FUNGUS"],
                ["Warped Fungus On A Stick", "WARPED_FUNGUS_ON_A_STICK"],
                ["Warped Hyphae", "WARPED_HYPHAE"],
                ["Warped Nylium", "WARPED_NYLIUM"],
                ["Warped Roots", "WARPED_ROOTS"],
                ["Warped Stem", "WARPED_STEM"],
                ["Warped Wart Block", "WARPED_WART_BLOCK"],
                ["Water Bucket", "WATER_BUCKET"],
                ["Water Cauldron", "WATER_CAULDRON"],
                ["Waxed Chiseled Copper", "WAXED_CHISELED_COPPER"],
                ["Waxed Copper Bars", "WAXED_COPPER_BARS"],
                ["Waxed Copper Block", "WAXED_COPPER_BLOCK"],
                ["Waxed Copper Bulb", "WAXED_COPPER_BULB"],
                ["Waxed Copper Chain", "WAXED_COPPER_CHAIN"],
                ["Waxed Copper Chest", "WAXED_COPPER_CHEST"],
                ["Waxed Copper Door", "WAXED_COPPER_DOOR"],
                ["Waxed Copper Golem Statue", "WAXED_COPPER_GOLEM_STATUE"],
                ["Waxed Copper Grate", "WAXED_COPPER_GRATE"],
                ["Waxed Copper Lantern", "WAXED_COPPER_LANTERN"],
                ["Waxed Copper Trapdoor", "WAXED_COPPER_TRAPDOOR"],
                ["Waxed Cut Copper", "WAXED_CUT_COPPER"],
                ["Waxed Cut Copper Slab", "WAXED_CUT_COPPER_SLAB"],
                ["Waxed Cut Copper Stairs", "WAXED_CUT_COPPER_STAIRS"],
                ["Waxed Exposed Chiseled Copper", "WAXED_EXPOSED_CHISELED_COPPER"],
                ["Waxed Exposed Copper", "WAXED_EXPOSED_COPPER"],
                ["Waxed Exposed Copper Bars", "WAXED_EXPOSED_COPPER_BARS"],
                ["Waxed Exposed Copper Bulb", "WAXED_EXPOSED_COPPER_BULB"],
                ["Waxed Exposed Copper Chain", "WAXED_EXPOSED_COPPER_CHAIN"],
                ["Waxed Exposed Copper Chest", "WAXED_EXPOSED_COPPER_CHEST"],
                ["Waxed Exposed Copper Door", "WAXED_EXPOSED_COPPER_DOOR"],
                ["Waxed Exposed Copper Golem Statue", "WAXED_EXPOSED_COPPER_GOLEM_STATUE"],
                ["Waxed Exposed Copper Grate", "WAXED_EXPOSED_COPPER_GRATE"],
                ["Waxed Exposed Copper Lantern", "WAXED_EXPOSED_COPPER_LANTERN"],
                ["Waxed Exposed Copper Trapdoor", "WAXED_EXPOSED_COPPER_TRAPDOOR"],
                ["Waxed Exposed Cut Copper", "WAXED_EXPOSED_CUT_COPPER"],
                ["Waxed Exposed Cut Copper Slab", "WAXED_EXPOSED_CUT_COPPER_SLAB"],
                ["Waxed Exposed Cut Copper Stairs", "WAXED_EXPOSED_CUT_COPPER_STAIRS"],
                ["Waxed Exposed Lightning Rod", "WAXED_EXPOSED_LIGHTNING_ROD"],
                ["Waxed Lightning Rod", "WAXED_LIGHTNING_ROD"],
                ["Waxed Oxidized Chiseled Copper", "WAXED_OXIDIZED_CHISELED_COPPER"],
                ["Waxed Oxidized Copper", "WAXED_OXIDIZED_COPPER"],
                ["Waxed Oxidized Copper Bars", "WAXED_OXIDIZED_COPPER_BARS"],
                ["Waxed Oxidized Copper Bulb", "WAXED_OXIDIZED_COPPER_BULB"],
                ["Waxed Oxidized Copper Chain", "WAXED_OXIDIZED_COPPER_CHAIN"],
                ["Waxed Oxidized Copper Chest", "WAXED_OXIDIZED_COPPER_CHEST"],
                ["Waxed Oxidized Copper Door", "WAXED_OXIDIZED_COPPER_DOOR"],
                ["Waxed Oxidized Copper Golem Statue", "WAXED_OXIDIZED_COPPER_GOLEM_STATUE"],
                ["Waxed Oxidized Copper Grate", "WAXED_OXIDIZED_COPPER_GRATE"],
                ["Waxed Oxidized Copper Lantern", "WAXED_OXIDIZED_COPPER_LANTERN"],
                ["Waxed Oxidized Copper Trapdoor", "WAXED_OXIDIZED_COPPER_TRAPDOOR"],
                ["Waxed Oxidized Cut Copper", "WAXED_OXIDIZED_CUT_COPPER"],
                ["Waxed Oxidized Cut Copper Slab", "WAXED_OXIDIZED_CUT_COPPER_SLAB"],
                ["Waxed Oxidized Cut Copper Stairs", "WAXED_OXIDIZED_CUT_COPPER_STAIRS"],
                ["Waxed Oxidized Lightning Rod", "WAXED_OXIDIZED_LIGHTNING_ROD"],
                ["Waxed Weathered Chiseled Copper", "WAXED_WEATHERED_CHISELED_COPPER"],
                ["Waxed Weathered Copper", "WAXED_WEATHERED_COPPER"],
                ["Waxed Weathered Copper Bars", "WAXED_WEATHERED_COPPER_BARS"],
                ["Waxed Weathered Copper Bulb", "WAXED_WEATHERED_COPPER_BULB"],
                ["Waxed Weathered Copper Chain", "WAXED_WEATHERED_COPPER_CHAIN"],
                ["Waxed Weathered Copper Chest", "WAXED_WEATHERED_COPPER_CHEST"],
                ["Waxed Weathered Copper Door", "WAXED_WEATHERED_COPPER_DOOR"],
                ["Waxed Weathered Copper Golem Statue", "WAXED_WEATHERED_COPPER_GOLEM_STATUE"],
                ["Waxed Weathered Copper Grate", "WAXED_WEATHERED_COPPER_GRATE"],
                ["Waxed Weathered Copper Lantern", "WAXED_WEATHERED_COPPER_LANTERN"],
                ["Waxed Weathered Copper Trapdoor", "WAXED_WEATHERED_COPPER_TRAPDOOR"],
                ["Waxed Weathered Cut Copper", "WAXED_WEATHERED_CUT_COPPER"],
                ["Waxed Weathered Cut Copper Slab", "WAXED_WEATHERED_CUT_COPPER_SLAB"],
                ["Waxed Weathered Cut Copper Stairs", "WAXED_WEATHERED_CUT_COPPER_STAIRS"],
                ["Waxed Weathered Lightning Rod", "WAXED_WEATHERED_LIGHTNING_ROD"],
                ["Wayfinder Armor Trim Smithing Template", "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Weathered Chiseled Copper", "WEATHERED_CHISELED_COPPER"],
                ["Weathered Copper Bars", "WEATHERED_COPPER_BARS"],
                ["Weathered Copper Bulb", "WEATHERED_COPPER_BULB"],
                ["Weathered Copper Chain", "WEATHERED_COPPER_CHAIN"],
                ["Weathered Copper Chest", "WEATHERED_COPPER_CHEST"],
                ["Weathered Copper Door", "WEATHERED_COPPER_DOOR"],
                ["Weathered Copper Golem Statue", "WEATHERED_COPPER_GOLEM_STATUE"],
                ["Weathered Copper Grate", "WEATHERED_COPPER_GRATE"],
                ["Weathered Copper Lantern", "WEATHERED_COPPER_LANTERN"],
                ["Weathered Copper Trapdoor", "WEATHERED_COPPER_TRAPDOOR"],
                ["Weathered Cut Copper", "WEATHERED_CUT_COPPER"],
                ["Weathered Cut Copper Slab", "WEATHERED_CUT_COPPER_SLAB"],
                ["Weathered Cut Copper Stairs", "WEATHERED_CUT_COPPER_STAIRS"],
                ["Weathered Lightning Rod", "WEATHERED_LIGHTNING_ROD"],
                ["Weeping Vines Plant", "WEEPING_VINES_PLANT"],
                ["Wet Sponge", "WET_SPONGE"],
                ["Wheat", "WHEAT"],
                ["Wheat Seeds", "WHEAT_SEEDS"],
                ["Wildflowers", "WILDFLOWERS"],
                ["Wild Armor Trim Smithing Template", "WILD_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Wind Charge", "WIND_CHARGE"],
                ["Witch Spawn Egg", "WITCH_SPAWN_EGG"],
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
                ["Wooden Spear", "WOODEN_SPEAR"],
                ["Wooden Sword", "WOODEN_SWORD"],
                ["Writable Book", "WRITABLE_BOOK"],
                ["Written Book", "WRITTEN_BOOK"],
                ["Zoglin Spawn Egg", "ZOGLIN_SPAWN_EGG"],
                ["Zombie Head", "ZOMBIE_HEAD"],
                ["Zombie Horse Spawn Egg", "ZOMBIE_HORSE_SPAWN_EGG"],
                ["Zombie Nautilus Spawn Egg", "ZOMBIE_NAUTILUS_SPAWN_EGG"],
                ["Zombie Spawn Egg", "ZOMBIE_SPAWN_EGG"],
                ["Zombie Villager Spawn Egg", "ZOMBIE_VILLAGER_SPAWN_EGG"],
                ["Zombie Wall Head", "ZOMBIE_WALL_HEAD"],
                ["Zombified Piglin Spawn Egg", "ZOMBIFIED_PIGLIN_SPAWN_EGG"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };
}