import { MCED } from "../lib/constants.mjs";

export function defineItemsBlocks(Blockly) {

    Blockly.Blocks['mc_item_color_harness'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Harness');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wood_boat'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Boat');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_wood_chest_boat'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftWood')
                .appendField('Chest Boat');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_helmet'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Helmet');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_sword'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Sword');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_shovel'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Shovel');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_pickaxe'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Pickaxe');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_axe'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Axe');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_hoe'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Hoe');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_chestplate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Chestplate');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_leggings'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Leggings');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_boots'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Boots');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_color_bundle'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Bundle');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_color_dye'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Dye');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_horse_armor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Horse Armor');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_spear'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Spear');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_types_nautilus_armor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmor')
                .appendField('Nautilus Armor');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_picker_world'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("World")
                .appendField(new Blockly.FieldDropdown([
                ["Quartz", "QUARTZ"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_miscellaneous'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Miscellaneous")
                .appendField(new Blockly.FieldDropdown([
                ["Acacia Boat", "ACACIA_BOAT"],
                ["Acacia Chest Boat", "ACACIA_CHEST_BOAT"],
                ["Amethyst Shard", "AMETHYST_SHARD"],
                ["Angler Pottery Sherd", "ANGLER_POTTERY_SHERD"],
                ["Archer Pottery Sherd", "ARCHER_POTTERY_SHERD"],
                ["Armadillo Scute", "ARMADILLO_SCUTE"],
                ["Armor Stand", "ARMOR_STAND"],
                ["Arms Up Pottery Sherd", "ARMS_UP_POTTERY_SHERD"],
                ["Arrow", "ARROW"],
                ["Bamboo Chest Raft", "BAMBOO_CHEST_RAFT"],
                ["Bamboo Raft", "BAMBOO_RAFT"],
                ["Birch Boat", "BIRCH_BOAT"],
                ["Birch Chest Boat", "BIRCH_CHEST_BOAT"],
                ["Black Bundle", "BLACK_BUNDLE"],
                ["Black Dye", "BLACK_DYE"],
                ["Black Harness", "BLACK_HARNESS"],
                ["Blade Pottery Sherd", "BLADE_POTTERY_SHERD"],
                ["Blaze Powder", "BLAZE_POWDER"],
                ["Blaze Rod", "BLAZE_ROD"],
                ["Blue Bundle", "BLUE_BUNDLE"],
                ["Blue Dye", "BLUE_DYE"],
                ["Blue Egg", "BLUE_EGG"],
                ["Blue Harness", "BLUE_HARNESS"],
                ["Bone", "BONE"],
                ["Bone Meal", "BONE_MEAL"],
                ["Book", "BOOK"],
                ["Bordure Indented Banner Pattern", "BORDURE_INDENTED_BANNER_PATTERN"],
                ["Bow", "BOW"],
                ["Bowl", "BOWL"],
                ["Breeze Rod", "BREEZE_ROD"],
                ["Brewer Pottery Sherd", "BREWER_POTTERY_SHERD"],
                ["Brick", "BRICK"],
                ["Brown Bundle", "BROWN_BUNDLE"],
                ["Brown Dye", "BROWN_DYE"],
                ["Brown Egg", "BROWN_EGG"],
                ["Brown Harness", "BROWN_HARNESS"],
                ["Brush", "BRUSH"],
                ["Bucket", "BUCKET"],
                ["Bundle", "BUNDLE"],
                ["Burn Pottery Sherd", "BURN_POTTERY_SHERD"],
                ["Carrot On A Stick", "CARROT_ON_A_STICK"],
                ["Charcoal", "CHARCOAL"],
                ["Cherry Boat", "CHERRY_BOAT"],
                ["Cherry Chest Boat", "CHERRY_CHEST_BOAT"],
                ["Chest Minecart", "CHEST_MINECART"],
                ["Clay Ball", "CLAY_BALL"],
                ["Clock", "CLOCK"],
                ["Coal", "COAL"],
                ["Cocoa Beans", "COCOA_BEANS"],
                ["Command Block Minecart", "COMMAND_BLOCK_MINECART"],
                ["Compass", "COMPASS"],
                ["Copper Ingot", "COPPER_INGOT"],
                ["Copper Nautilus Armor", "COPPER_NAUTILUS_ARMOR"],
                ["Copper Nugget", "COPPER_NUGGET"],
                ["Copper Spear", "COPPER_SPEAR"],
                ["Copper Sword", "COPPER_SWORD"],
                ["Creeper Banner Pattern", "CREEPER_BANNER_PATTERN"],
                ["Crossbow", "CROSSBOW"],
                ["Cyan Bundle", "CYAN_BUNDLE"],
                ["Cyan Dye", "CYAN_DYE"],
                ["Cyan Harness", "CYAN_HARNESS"],
                ["Danger Pottery Sherd", "DANGER_POTTERY_SHERD"],
                ["Dark Oak Boat", "DARK_OAK_BOAT"],
                ["Dark Oak Chest Boat", "DARK_OAK_CHEST_BOAT"],
                ["Debug Stick", "DEBUG_STICK"],
                ["Diamond", "DIAMOND"],
                ["Diamond Nautilus Armor", "DIAMOND_NAUTILUS_ARMOR"],
                ["Diamond Spear", "DIAMOND_SPEAR"],
                ["Diamond Sword", "DIAMOND_SWORD"],
                ["Disc Fragment 5", "DISC_FRAGMENT_5"],
                ["Dragon Breath", "DRAGON_BREATH"],
                ["Echo Shard", "ECHO_SHARD"],
                ["Egg", "EGG"],
                ["Elytra", "ELYTRA"],
                ["Emerald", "EMERALD"],
                ["Ender Eye", "ENDER_EYE"],
                ["Ender Pearl", "ENDER_PEARL"],
                ["End Crystal", "END_CRYSTAL"],
                ["Experience Bottle", "EXPERIENCE_BOTTLE"],
                ["Explorer Pottery Sherd", "EXPLORER_POTTERY_SHERD"],
                ["Feather", "FEATHER"],
                ["Fermented Spider Eye", "FERMENTED_SPIDER_EYE"],
                ["Field Masoned Banner Pattern", "FIELD_MASONED_BANNER_PATTERN"],
                ["Filled Map", "FILLED_MAP"],
                ["Firework Rocket", "FIREWORK_ROCKET"],
                ["Firework Star", "FIREWORK_STAR"],
                ["Fishing Rod", "FISHING_ROD"],
                ["Flint", "FLINT"],
                ["Flint And Steel", "FLINT_AND_STEEL"],
                ["Flower Banner Pattern", "FLOWER_BANNER_PATTERN"],
                ["Flow Banner Pattern", "FLOW_BANNER_PATTERN"],
                ["Flow Pottery Sherd", "FLOW_POTTERY_SHERD"],
                ["Friend Pottery Sherd", "FRIEND_POTTERY_SHERD"],
                ["Furnace Minecart", "FURNACE_MINECART"],
                ["Ghast Tear", "GHAST_TEAR"],
                ["Glistering Melon Slice", "GLISTERING_MELON_SLICE"],
                ["Globe Banner Pattern", "GLOBE_BANNER_PATTERN"],
                ["Glowstone Dust", "GLOWSTONE_DUST"],
                ["Glow Ink Sac", "GLOW_INK_SAC"],
                ["Glow Item Frame", "GLOW_ITEM_FRAME"],
                ["Goat Horn", "GOAT_HORN"],
                ["Golden Nautilus Armor", "GOLDEN_NAUTILUS_ARMOR"],
                ["Golden Spear", "GOLDEN_SPEAR"],
                ["Golden Sword", "GOLDEN_SWORD"],
                ["Gold Ingot", "GOLD_INGOT"],
                ["Gold Nugget", "GOLD_NUGGET"],
                ["Gray Bundle", "GRAY_BUNDLE"],
                ["Gray Dye", "GRAY_DYE"],
                ["Gray Harness", "GRAY_HARNESS"],
                ["Green Bundle", "GREEN_BUNDLE"],
                ["Green Dye", "GREEN_DYE"],
                ["Green Harness", "GREEN_HARNESS"],
                ["Gunpowder", "GUNPOWDER"],
                ["Guster Banner Pattern", "GUSTER_BANNER_PATTERN"],
                ["Guster Pottery Sherd", "GUSTER_POTTERY_SHERD"],
                ["Heartbreak Pottery Sherd", "HEARTBREAK_POTTERY_SHERD"],
                ["Heart Of The Sea", "HEART_OF_THE_SEA"],
                ["Heart Pottery Sherd", "HEART_POTTERY_SHERD"],
                ["Honeycomb", "HONEYCOMB"],
                ["Hopper Minecart", "HOPPER_MINECART"],
                ["Howl Pottery Sherd", "HOWL_POTTERY_SHERD"],
                ["Ink Sac", "INK_SAC"],
                ["Iron Ingot", "IRON_INGOT"],
                ["Iron Nautilus Armor", "IRON_NAUTILUS_ARMOR"],
                ["Iron Nugget", "IRON_NUGGET"],
                ["Iron Spear", "IRON_SPEAR"],
                ["Iron Sword", "IRON_SWORD"],
                ["Item Frame", "ITEM_FRAME"],
                ["Jungle Boat", "JUNGLE_BOAT"],
                ["Jungle Chest Boat", "JUNGLE_CHEST_BOAT"],
                ["Lapis Lazuli", "LAPIS_LAZULI"],
                ["Lead", "LEAD"],
                ["Leather", "LEATHER"],
                ["Light Blue Bundle", "LIGHT_BLUE_BUNDLE"],
                ["Light Blue Dye", "LIGHT_BLUE_DYE"],
                ["Light Blue Harness", "LIGHT_BLUE_HARNESS"],
                ["Light Gray Bundle", "LIGHT_GRAY_BUNDLE"],
                ["Light Gray Dye", "LIGHT_GRAY_DYE"],
                ["Light Gray Harness", "LIGHT_GRAY_HARNESS"],
                ["Lime Bundle", "LIME_BUNDLE"],
                ["Lime Dye", "LIME_DYE"],
                ["Lime Harness", "LIME_HARNESS"],
                ["Lingering Potion", "LINGERING_POTION"],
                ["Mace", "MACE"],
                ["Magenta Bundle", "MAGENTA_BUNDLE"],
                ["Magenta Dye", "MAGENTA_DYE"],
                ["Magenta Harness", "MAGENTA_HARNESS"],
                ["Magma Cream", "MAGMA_CREAM"],
                ["Mangrove Boat", "MANGROVE_BOAT"],
                ["Mangrove Chest Boat", "MANGROVE_CHEST_BOAT"],
                ["Map", "MAP"],
                ["Minecart", "MINECART"],
                ["Miner Pottery Sherd", "MINER_POTTERY_SHERD"],
                ["Mojang Banner Pattern", "MOJANG_BANNER_PATTERN"],
                ["Mourner Pottery Sherd", "MOURNER_POTTERY_SHERD"],
                ["Name Tag", "NAME_TAG"],
                ["Nautilus Shell", "NAUTILUS_SHELL"],
                ["Netherite Ingot", "NETHERITE_INGOT"],
                ["Netherite Nautilus Armor", "NETHERITE_NAUTILUS_ARMOR"],
                ["Netherite Scrap", "NETHERITE_SCRAP"],
                ["Netherite Spear", "NETHERITE_SPEAR"],
                ["Netherite Sword", "NETHERITE_SWORD"],
                ["Netherite Upgrade Smithing Template", "NETHERITE_UPGRADE_SMITHING_TEMPLATE"],
                ["Nether Brick", "NETHER_BRICK"],
                ["Nether Star", "NETHER_STAR"],
                ["Oak Boat", "OAK_BOAT"],
                ["Oak Chest Boat", "OAK_CHEST_BOAT"],
                ["Ominous Bottle", "OMINOUS_BOTTLE"],
                ["Ominous Trial Key", "OMINOUS_TRIAL_KEY"],
                ["Orange Bundle", "ORANGE_BUNDLE"],
                ["Orange Dye", "ORANGE_DYE"],
                ["Orange Harness", "ORANGE_HARNESS"],
                ["Painting", "PAINTING"],
                ["Pale Oak Boat", "PALE_OAK_BOAT"],
                ["Pale Oak Chest Boat", "PALE_OAK_CHEST_BOAT"],
                ["Paper", "PAPER"],
                ["Phantom Membrane", "PHANTOM_MEMBRANE"],
                ["Piglin Banner Pattern", "PIGLIN_BANNER_PATTERN"],
                ["Pink Bundle", "PINK_BUNDLE"],
                ["Pink Dye", "PINK_DYE"],
                ["Pink Harness", "PINK_HARNESS"],
                ["Pitcher Pod", "PITCHER_POD"],
                ["Plenty Pottery Sherd", "PLENTY_POTTERY_SHERD"],
                ["Popped Chorus Fruit", "POPPED_CHORUS_FRUIT"],
                ["Potion", "POTION"],
                ["Prismarine Crystals", "PRISMARINE_CRYSTALS"],
                ["Prismarine Shard", "PRISMARINE_SHARD"],
                ["Prize Pottery Sherd", "PRIZE_POTTERY_SHERD"],
                ["Purple Bundle", "PURPLE_BUNDLE"],
                ["Purple Dye", "PURPLE_DYE"],
                ["Purple Harness", "PURPLE_HARNESS"],
                ["Rabbit Foot", "RABBIT_FOOT"],
                ["Rabbit Hide", "RABBIT_HIDE"],
                ["Raw Gold", "RAW_GOLD"],
                ["Raw Iron", "RAW_IRON"],
                ["Recovery Compass", "RECOVERY_COMPASS"],
                ["Red Bundle", "RED_BUNDLE"],
                ["Red Dye", "RED_DYE"],
                ["Red Harness", "RED_HARNESS"],
                ["Resin Brick", "RESIN_BRICK"],
                ["Saddle", "SADDLE"],
                ["Scrape Pottery Sherd", "SCRAPE_POTTERY_SHERD"],
                ["Sheaf Pottery Sherd", "SHEAF_POTTERY_SHERD"],
                ["Shears", "SHEARS"],
                ["Shelter Pottery Sherd", "SHELTER_POTTERY_SHERD"],
                ["Shield", "SHIELD"],
                ["Shulker Shell", "SHULKER_SHELL"],
                ["Skull Banner Pattern", "SKULL_BANNER_PATTERN"],
                ["Skull Pottery Sherd", "SKULL_POTTERY_SHERD"],
                ["Slime Ball", "SLIME_BALL"],
                ["Snort Pottery Sherd", "SNORT_POTTERY_SHERD"],
                ["Snowball", "SNOWBALL"],
                ["Spectral Arrow", "SPECTRAL_ARROW"],
                ["Splash Potion", "SPLASH_POTION"],
                ["Spruce Boat", "SPRUCE_BOAT"],
                ["Spruce Chest Boat", "SPRUCE_CHEST_BOAT"],
                ["Stick", "STICK"],
                ["Stone Spear", "STONE_SPEAR"],
                ["Stone Sword", "STONE_SWORD"],
                ["String", "STRING"],
                ["Sugar", "SUGAR"],
                ["Tipped Arrow", "TIPPED_ARROW"],
                ["Tnt Minecart", "TNT_MINECART"],
                ["Totem Of Undying", "TOTEM_OF_UNDYING"],
                ["Trial Key", "TRIAL_KEY"],
                ["Trident", "TRIDENT"],
                ["Turtle Scute", "TURTLE_SCUTE"],
                ["Warped Fungus On A Stick", "WARPED_FUNGUS_ON_A_STICK"],
                ["White Bundle", "WHITE_BUNDLE"],
                ["White Dye", "WHITE_DYE"],
                ["White Harness", "WHITE_HARNESS"],
                ["Wolf Armor", "WOLF_ARMOR"],
                ["Wooden Spear", "WOODEN_SPEAR"],
                ["Wooden Sword", "WOODEN_SWORD"],
                ["Yellow Bundle", "YELLOW_BUNDLE"],
                ["Yellow Dye", "YELLOW_DYE"],
                ["Yellow Harness", "YELLOW_HARNESS"]
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
                ["Glass Bottle", "GLASS_BOTTLE"],
                ["Spyglass", "SPYGLASS"]
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
                ["Redstone", "REDSTONE"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_music'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Music")
                .appendField(new Blockly.FieldDropdown([
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
                ["Music Disc Ward", "MUSIC_DISC_WARD"]
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
                ["Raw Copper", "RAW_COPPER"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_armor'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Armor")
                .appendField(new Blockly.FieldDropdown([
                ["Chainmail Boots", "CHAINMAIL_BOOTS"],
                ["Chainmail Chestplate", "CHAINMAIL_CHESTPLATE"],
                ["Chainmail Helmet", "CHAINMAIL_HELMET"],
                ["Chainmail Leggings", "CHAINMAIL_LEGGINGS"],
                ["Copper Boots", "COPPER_BOOTS"],
                ["Copper Chestplate", "COPPER_CHESTPLATE"],
                ["Copper Helmet", "COPPER_HELMET"],
                ["Copper Horse Armor", "COPPER_HORSE_ARMOR"],
                ["Copper Leggings", "COPPER_LEGGINGS"],
                ["Diamond Boots", "DIAMOND_BOOTS"],
                ["Diamond Chestplate", "DIAMOND_CHESTPLATE"],
                ["Diamond Helmet", "DIAMOND_HELMET"],
                ["Diamond Horse Armor", "DIAMOND_HORSE_ARMOR"],
                ["Diamond Leggings", "DIAMOND_LEGGINGS"],
                ["Golden Boots", "GOLDEN_BOOTS"],
                ["Golden Chestplate", "GOLDEN_CHESTPLATE"],
                ["Golden Helmet", "GOLDEN_HELMET"],
                ["Golden Horse Armor", "GOLDEN_HORSE_ARMOR"],
                ["Golden Leggings", "GOLDEN_LEGGINGS"],
                ["Iron Boots", "IRON_BOOTS"],
                ["Iron Chestplate", "IRON_CHESTPLATE"],
                ["Iron Helmet", "IRON_HELMET"],
                ["Iron Horse Armor", "IRON_HORSE_ARMOR"],
                ["Iron Leggings", "IRON_LEGGINGS"],
                ["Leather Boots", "LEATHER_BOOTS"],
                ["Leather Chestplate", "LEATHER_CHESTPLATE"],
                ["Leather Helmet", "LEATHER_HELMET"],
                ["Leather Horse Armor", "LEATHER_HORSE_ARMOR"],
                ["Leather Leggings", "LEATHER_LEGGINGS"],
                ["Netherite Boots", "NETHERITE_BOOTS"],
                ["Netherite Chestplate", "NETHERITE_CHESTPLATE"],
                ["Netherite Helmet", "NETHERITE_HELMET"],
                ["Netherite Horse Armor", "NETHERITE_HORSE_ARMOR"],
                ["Netherite Leggings", "NETHERITE_LEGGINGS"],
                ["Turtle Helmet", "TURTLE_HELMET"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_food'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Food")
                .appendField(new Blockly.FieldDropdown([
                ["Apple", "APPLE"],
                ["Baked Potato", "BAKED_POTATO"],
                ["Beef", "BEEF"],
                ["Beetroot", "BEETROOT"],
                ["Beetroot Soup", "BEETROOT_SOUP"],
                ["Bread", "BREAD"],
                ["Carrot", "CARROT"],
                ["Chicken", "CHICKEN"],
                ["Chorus Fruit", "CHORUS_FRUIT"],
                ["Cod", "COD"],
                ["Cooked Beef", "COOKED_BEEF"],
                ["Cooked Chicken", "COOKED_CHICKEN"],
                ["Cooked Cod", "COOKED_COD"],
                ["Cooked Mutton", "COOKED_MUTTON"],
                ["Cooked Porkchop", "COOKED_PORKCHOP"],
                ["Cooked Rabbit", "COOKED_RABBIT"],
                ["Cooked Salmon", "COOKED_SALMON"],
                ["Cookie", "COOKIE"],
                ["Dried Kelp", "DRIED_KELP"],
                ["Enchanted Golden Apple", "ENCHANTED_GOLDEN_APPLE"],
                ["Glow Berries", "GLOW_BERRIES"],
                ["Golden Apple", "GOLDEN_APPLE"],
                ["Golden Carrot", "GOLDEN_CARROT"],
                ["Honey Bottle", "HONEY_BOTTLE"],
                ["Melon Slice", "MELON_SLICE"],
                ["Mushroom Stew", "MUSHROOM_STEW"],
                ["Mutton", "MUTTON"],
                ["Poisonous Potato", "POISONOUS_POTATO"],
                ["Porkchop", "PORKCHOP"],
                ["Potato", "POTATO"],
                ["Pufferfish", "PUFFERFISH"],
                ["Pumpkin Pie", "PUMPKIN_PIE"],
                ["Rabbit", "RABBIT"],
                ["Rabbit Stew", "RABBIT_STEW"],
                ["Rotten Flesh", "ROTTEN_FLESH"],
                ["Salmon", "SALMON"],
                ["Spider Eye", "SPIDER_EYE"],
                ["Suspicious Stew", "SUSPICIOUS_STEW"],
                ["Sweet Berries", "SWEET_BERRIES"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_tools'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Tools")
                .appendField(new Blockly.FieldDropdown([
                ["Copper Axe", "COPPER_AXE"],
                ["Copper Hoe", "COPPER_HOE"],
                ["Copper Pickaxe", "COPPER_PICKAXE"],
                ["Copper Shovel", "COPPER_SHOVEL"],
                ["Diamond Axe", "DIAMOND_AXE"],
                ["Diamond Hoe", "DIAMOND_HOE"],
                ["Diamond Pickaxe", "DIAMOND_PICKAXE"],
                ["Diamond Shovel", "DIAMOND_SHOVEL"],
                ["Golden Axe", "GOLDEN_AXE"],
                ["Golden Hoe", "GOLDEN_HOE"],
                ["Golden Pickaxe", "GOLDEN_PICKAXE"],
                ["Golden Shovel", "GOLDEN_SHOVEL"],
                ["Iron Axe", "IRON_AXE"],
                ["Iron Hoe", "IRON_HOE"],
                ["Iron Pickaxe", "IRON_PICKAXE"],
                ["Iron Shovel", "IRON_SHOVEL"],
                ["Netherite Axe", "NETHERITE_AXE"],
                ["Netherite Hoe", "NETHERITE_HOE"],
                ["Netherite Pickaxe", "NETHERITE_PICKAXE"],
                ["Netherite Shovel", "NETHERITE_SHOVEL"],
                ["Stone Axe", "STONE_AXE"],
                ["Stone Hoe", "STONE_HOE"],
                ["Stone Pickaxe", "STONE_PICKAXE"],
                ["Stone Shovel", "STONE_SHOVEL"],
                ["Wooden Axe", "WOODEN_AXE"],
                ["Wooden Hoe", "WOODEN_HOE"],
                ["Wooden Pickaxe", "WOODEN_PICKAXE"],
                ["Wooden Shovel", "WOODEN_SHOVEL"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_seeds'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Seeds")
                .appendField(new Blockly.FieldDropdown([
                ["Beetroot Seeds", "BEETROOT_SEEDS"],
                ["Melon Seeds", "MELON_SEEDS"],
                ["Pumpkin Seeds", "PUMPKIN_SEEDS"],
                ["Torchflower Seeds", "TORCHFLOWER_SEEDS"],
                ["Wheat Seeds", "WHEAT_SEEDS"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_buckets'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Buckets")
                .appendField(new Blockly.FieldDropdown([
                ["Axolotl Bucket", "AXOLOTL_BUCKET"],
                ["Cod Bucket", "COD_BUCKET"],
                ["Lava Bucket", "LAVA_BUCKET"],
                ["Milk Bucket", "MILK_BUCKET"],
                ["Powder Snow Bucket", "POWDER_SNOW_BUCKET"],
                ["Pufferfish Bucket", "PUFFERFISH_BUCKET"],
                ["Salmon Bucket", "SALMON_BUCKET"],
                ["Tadpole Bucket", "TADPOLE_BUCKET"],
                ["Tropical Fish Bucket", "TROPICAL_FISH_BUCKET"],
                ["Water Bucket", "WATER_BUCKET"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_fish'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Fish")
                .appendField(new Blockly.FieldDropdown([
                ["Tropical Fish", "TROPICAL_FISH"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_spawn_eggs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Spawn Eggs")
                .appendField(new Blockly.FieldDropdown([
                ["Allay Spawn Egg", "ALLAY_SPAWN_EGG"],
                ["Armadillo Spawn Egg", "ARMADILLO_SPAWN_EGG"],
                ["Axolotl Spawn Egg", "AXOLOTL_SPAWN_EGG"],
                ["Bat Spawn Egg", "BAT_SPAWN_EGG"],
                ["Bee Spawn Egg", "BEE_SPAWN_EGG"],
                ["Blaze Spawn Egg", "BLAZE_SPAWN_EGG"],
                ["Bogged Spawn Egg", "BOGGED_SPAWN_EGG"],
                ["Breeze Spawn Egg", "BREEZE_SPAWN_EGG"],
                ["Camel Husk Spawn Egg", "CAMEL_HUSK_SPAWN_EGG"],
                ["Camel Spawn Egg", "CAMEL_SPAWN_EGG"],
                ["Cat Spawn Egg", "CAT_SPAWN_EGG"],
                ["Cave Spider Spawn Egg", "CAVE_SPIDER_SPAWN_EGG"],
                ["Chicken Spawn Egg", "CHICKEN_SPAWN_EGG"],
                ["Cod Spawn Egg", "COD_SPAWN_EGG"],
                ["Copper Golem Spawn Egg", "COPPER_GOLEM_SPAWN_EGG"],
                ["Cow Spawn Egg", "COW_SPAWN_EGG"],
                ["Creaking Spawn Egg", "CREAKING_SPAWN_EGG"],
                ["Creeper Spawn Egg", "CREEPER_SPAWN_EGG"],
                ["Dolphin Spawn Egg", "DOLPHIN_SPAWN_EGG"],
                ["Donkey Spawn Egg", "DONKEY_SPAWN_EGG"],
                ["Drowned Spawn Egg", "DROWNED_SPAWN_EGG"],
                ["Elder Guardian Spawn Egg", "ELDER_GUARDIAN_SPAWN_EGG"],
                ["Enderman Spawn Egg", "ENDERMAN_SPAWN_EGG"],
                ["Endermite Spawn Egg", "ENDERMITE_SPAWN_EGG"],
                ["Ender Dragon Spawn Egg", "ENDER_DRAGON_SPAWN_EGG"],
                ["Evoker Spawn Egg", "EVOKER_SPAWN_EGG"],
                ["Fox Spawn Egg", "FOX_SPAWN_EGG"],
                ["Frog Spawn Egg", "FROG_SPAWN_EGG"],
                ["Ghast Spawn Egg", "GHAST_SPAWN_EGG"],
                ["Glow Squid Spawn Egg", "GLOW_SQUID_SPAWN_EGG"],
                ["Goat Spawn Egg", "GOAT_SPAWN_EGG"],
                ["Guardian Spawn Egg", "GUARDIAN_SPAWN_EGG"],
                ["Happy Ghast Spawn Egg", "HAPPY_GHAST_SPAWN_EGG"],
                ["Hoglin Spawn Egg", "HOGLIN_SPAWN_EGG"],
                ["Horse Spawn Egg", "HORSE_SPAWN_EGG"],
                ["Husk Spawn Egg", "HUSK_SPAWN_EGG"],
                ["Iron Golem Spawn Egg", "IRON_GOLEM_SPAWN_EGG"],
                ["Llama Spawn Egg", "LLAMA_SPAWN_EGG"],
                ["Magma Cube Spawn Egg", "MAGMA_CUBE_SPAWN_EGG"],
                ["Mooshroom Spawn Egg", "MOOSHROOM_SPAWN_EGG"],
                ["Mule Spawn Egg", "MULE_SPAWN_EGG"],
                ["Nautilus Spawn Egg", "NAUTILUS_SPAWN_EGG"],
                ["Ocelot Spawn Egg", "OCELOT_SPAWN_EGG"],
                ["Panda Spawn Egg", "PANDA_SPAWN_EGG"],
                ["Parched Spawn Egg", "PARCHED_SPAWN_EGG"],
                ["Parrot Spawn Egg", "PARROT_SPAWN_EGG"],
                ["Phantom Spawn Egg", "PHANTOM_SPAWN_EGG"],
                ["Piglin Brute Spawn Egg", "PIGLIN_BRUTE_SPAWN_EGG"],
                ["Piglin Spawn Egg", "PIGLIN_SPAWN_EGG"],
                ["Pig Spawn Egg", "PIG_SPAWN_EGG"],
                ["Pillager Spawn Egg", "PILLAGER_SPAWN_EGG"],
                ["Polar Bear Spawn Egg", "POLAR_BEAR_SPAWN_EGG"],
                ["Pufferfish Spawn Egg", "PUFFERFISH_SPAWN_EGG"],
                ["Rabbit Spawn Egg", "RABBIT_SPAWN_EGG"],
                ["Ravager Spawn Egg", "RAVAGER_SPAWN_EGG"],
                ["Salmon Spawn Egg", "SALMON_SPAWN_EGG"],
                ["Sheep Spawn Egg", "SHEEP_SPAWN_EGG"],
                ["Shulker Spawn Egg", "SHULKER_SPAWN_EGG"],
                ["Silverfish Spawn Egg", "SILVERFISH_SPAWN_EGG"],
                ["Skeleton Horse Spawn Egg", "SKELETON_HORSE_SPAWN_EGG"],
                ["Skeleton Spawn Egg", "SKELETON_SPAWN_EGG"],
                ["Slime Spawn Egg", "SLIME_SPAWN_EGG"],
                ["Sniffer Spawn Egg", "SNIFFER_SPAWN_EGG"],
                ["Snow Golem Spawn Egg", "SNOW_GOLEM_SPAWN_EGG"],
                ["Spider Spawn Egg", "SPIDER_SPAWN_EGG"],
                ["Squid Spawn Egg", "SQUID_SPAWN_EGG"],
                ["Stray Spawn Egg", "STRAY_SPAWN_EGG"],
                ["Strider Spawn Egg", "STRIDER_SPAWN_EGG"],
                ["Tadpole Spawn Egg", "TADPOLE_SPAWN_EGG"],
                ["Trader Llama Spawn Egg", "TRADER_LLAMA_SPAWN_EGG"],
                ["Tropical Fish Spawn Egg", "TROPICAL_FISH_SPAWN_EGG"],
                ["Turtle Spawn Egg", "TURTLE_SPAWN_EGG"],
                ["Vex Spawn Egg", "VEX_SPAWN_EGG"],
                ["Villager Spawn Egg", "VILLAGER_SPAWN_EGG"],
                ["Vindicator Spawn Egg", "VINDICATOR_SPAWN_EGG"],
                ["Wandering Trader Spawn Egg", "WANDERING_TRADER_SPAWN_EGG"],
                ["Warden Spawn Egg", "WARDEN_SPAWN_EGG"],
                ["Witch Spawn Egg", "WITCH_SPAWN_EGG"],
                ["Wither Skeleton Spawn Egg", "WITHER_SKELETON_SPAWN_EGG"],
                ["Wither Spawn Egg", "WITHER_SPAWN_EGG"],
                ["Wolf Spawn Egg", "WOLF_SPAWN_EGG"],
                ["Zoglin Spawn Egg", "ZOGLIN_SPAWN_EGG"],
                ["Zombie Horse Spawn Egg", "ZOMBIE_HORSE_SPAWN_EGG"],
                ["Zombie Nautilus Spawn Egg", "ZOMBIE_NAUTILUS_SPAWN_EGG"],
                ["Zombie Spawn Egg", "ZOMBIE_SPAWN_EGG"],
                ["Zombie Villager Spawn Egg", "ZOMBIE_VILLAGER_SPAWN_EGG"],
                ["Zombified Piglin Spawn Egg", "ZOMBIFIED_PIGLIN_SPAWN_EGG"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_charges'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Charges")
                .appendField(new Blockly.FieldDropdown([
                ["Fire Charge", "FIRE_CHARGE"],
                ["Wind Charge", "WIND_CHARGE"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_books'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Books")
                .appendField(new Blockly.FieldDropdown([
                ["Enchanted Book", "ENCHANTED_BOOK"],
                ["Knowledge Book", "KNOWLEDGE_BOOK"],
                ["Writable Book", "WRITABLE_BOOK"],
                ["Written Book", "WRITTEN_BOOK"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_trims'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Trims")
                .appendField(new Blockly.FieldDropdown([
                ["Bolt Armor Trim Smithing Template", "BOLT_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Coast Armor Trim Smithing Template", "COAST_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Dune Armor Trim Smithing Template", "DUNE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Eye Armor Trim Smithing Template", "EYE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Flow Armor Trim Smithing Template", "FLOW_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Host Armor Trim Smithing Template", "HOST_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Raiser Armor Trim Smithing Template", "RAISER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Rib Armor Trim Smithing Template", "RIB_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Sentry Armor Trim Smithing Template", "SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Shaper Armor Trim Smithing Template", "SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Silence Armor Trim Smithing Template", "SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Snout Armor Trim Smithing Template", "SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Spire Armor Trim Smithing Template", "SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Tide Armor Trim Smithing Template", "TIDE_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Vex Armor Trim Smithing Template", "VEX_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Ward Armor Trim Smithing Template", "WARD_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Wayfinder Armor Trim Smithing Template", "WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE"],
                ["Wild Armor Trim Smithing Template", "WILD_ARMOR_TRIM_SMITHING_TEMPLATE"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };
}