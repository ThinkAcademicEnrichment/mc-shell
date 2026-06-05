import { MCED } from "../lib/constants.mjs";

export function defineItemsBlocks(Blockly) {

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

    Blockly.Blocks['mc_item_color_harness'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftColour')
                .appendField('Harness');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_boots'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Boots');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_chestplate'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Chestplate');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_helmet'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Helmet');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_leggings'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Leggings');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_axe'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Axe');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_hoe'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Hoe');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_horse_armor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Horse Armor');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_nautilus_armor'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Nautilus Armor');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_pickaxe'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Pickaxe');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_shovel'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Shovel');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_spear'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Spear');
            this.setOutput(true, 'Item');
            this.setColour("#D4A373");
        }
    };

    Blockly.Blocks['mc_item_armor_tier_sword'] = {
        init: function() {
            this.appendValueInput('VARIANT')
                .setCheck('MinecraftArmorTier')
                .appendField('Sword');
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

    Blockly.Blocks['mc_item_picker_fish'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Fish")
                .appendField(new Blockly.FieldDropdown([
                ["Pufferfish", "PUFFERFISH"],
                ["Tropical Fish", "TROPICAL_FISH"]
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
                ["Sweet Berries", "SWEET_BERRIES"],
                ["Tropical Fish", "TROPICAL_FISH"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['mc_item_picker_various'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Various")
                .appendField(new Blockly.FieldDropdown([
                ["Arrow", "ARROW"],
                ["Beetroot", "BEETROOT"],
                ["Black Bundle", "BLACK_BUNDLE"],
                ["Blue Bundle", "BLUE_BUNDLE"],
                ["Bone", "BONE"],
                ["Book", "BOOK"],
                ["Bow", "BOW"],
                ["Bowl", "BOWL"],
                ["Brick", "BRICK"],
                ["Brown Bundle", "BROWN_BUNDLE"],
                ["Brush", "BRUSH"],
                ["Bundle", "BUNDLE"],
                ["Clock", "CLOCK"],
                ["Coal", "COAL"],
                ["Compass", "COMPASS"],
                ["Crossbow", "CROSSBOW"],
                ["Cyan Bundle", "CYAN_BUNDLE"],
                ["Diamond", "DIAMOND"],
                ["Elytra", "ELYTRA"],
                ["Emerald", "EMERALD"],
                ["Feather", "FEATHER"],
                ["Flint", "FLINT"],
                ["Gray Bundle", "GRAY_BUNDLE"],
                ["Green Bundle", "GREEN_BUNDLE"],
                ["Gunpowder", "GUNPOWDER"],
                ["Lead", "LEAD"],
                ["Leather", "LEATHER"],
                ["Light Blue Bundle", "LIGHT_BLUE_BUNDLE"],
                ["Light Gray Bundle", "LIGHT_GRAY_BUNDLE"],
                ["Lime Bundle", "LIME_BUNDLE"],
                ["Mace", "MACE"],
                ["Magenta Bundle", "MAGENTA_BUNDLE"],
                ["Map", "MAP"],
                ["Orange Bundle", "ORANGE_BUNDLE"],
                ["Painting", "PAINTING"],
                ["Paper", "PAPER"],
                ["Pink Bundle", "PINK_BUNDLE"],
                ["Potion", "POTION"],
                ["Pufferfish", "PUFFERFISH"],
                ["Purple Bundle", "PURPLE_BUNDLE"],
                ["Quartz", "QUARTZ"],
                ["Rabbit", "RABBIT"],
                ["Red Bundle", "RED_BUNDLE"],
                ["Saddle", "SADDLE"],
                ["Salmon", "SALMON"],
                ["Shears", "SHEARS"],
                ["Shield", "SHIELD"],
                ["Snowball", "SNOWBALL"],
                ["Spyglass", "SPYGLASS"],
                ["Stick", "STICK"],
                ["String", "STRING"],
                ["Trident", "TRIDENT"],
                ["White Bundle", "WHITE_BUNDLE"],
                ["Yellow Bundle", "YELLOW_BUNDLE"]
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
                ["Bucket", "BUCKET"],
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

    Blockly.Blocks['mc_item_picker_general'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Other Items")
                .appendField(new Blockly.FieldDropdown([
                ["Amethyst Shard", "AMETHYST_SHARD"],
                ["Angler Pottery Sherd", "ANGLER_POTTERY_SHERD"],
                ["Archer Pottery Sherd", "ARCHER_POTTERY_SHERD"],
                ["Armadillo Scute", "ARMADILLO_SCUTE"],
                ["Armor Stand", "ARMOR_STAND"],
                ["Arms Up Pottery Sherd", "ARMS_UP_POTTERY_SHERD"],
                ["Bamboo Chest Raft", "BAMBOO_CHEST_RAFT"],
                ["Bamboo Raft", "BAMBOO_RAFT"],
                ["Blade Pottery Sherd", "BLADE_POTTERY_SHERD"],
                ["Blaze Powder", "BLAZE_POWDER"],
                ["Blaze Rod", "BLAZE_ROD"],
                ["Blue Egg", "BLUE_EGG"],
                ["Bone Meal", "BONE_MEAL"],
                ["Bordure Indented Banner Pattern", "BORDURE_INDENTED_BANNER_PATTERN"],
                ["Breeze Rod", "BREEZE_ROD"],
                ["Brewer Pottery Sherd", "BREWER_POTTERY_SHERD"],
                ["Brown Egg", "BROWN_EGG"],
                ["Burn Pottery Sherd", "BURN_POTTERY_SHERD"],
                ["Carrot On A Stick", "CARROT_ON_A_STICK"],
                ["Charcoal", "CHARCOAL"],
                ["Chest Minecart", "CHEST_MINECART"],
                ["Clay Ball", "CLAY_BALL"],
                ["Cocoa Beans", "COCOA_BEANS"],
                ["Command Block Minecart", "COMMAND_BLOCK_MINECART"],
                ["Copper Ingot", "COPPER_INGOT"],
                ["Copper Nugget", "COPPER_NUGGET"],
                ["Creeper Banner Pattern", "CREEPER_BANNER_PATTERN"],
                ["Danger Pottery Sherd", "DANGER_POTTERY_SHERD"],
                ["Debug Stick", "DEBUG_STICK"],
                ["Disc Fragment 5", "DISC_FRAGMENT_5"],
                ["Dragon Breath", "DRAGON_BREATH"],
                ["Echo Shard", "ECHO_SHARD"],
                ["Egg", "EGG"],
                ["Ender Eye", "ENDER_EYE"],
                ["Ender Pearl", "ENDER_PEARL"],
                ["End Crystal", "END_CRYSTAL"],
                ["Experience Bottle", "EXPERIENCE_BOTTLE"],
                ["Explorer Pottery Sherd", "EXPLORER_POTTERY_SHERD"],
                ["Fermented Spider Eye", "FERMENTED_SPIDER_EYE"],
                ["Field Masoned Banner Pattern", "FIELD_MASONED_BANNER_PATTERN"],
                ["Filled Map", "FILLED_MAP"],
                ["Firework Rocket", "FIREWORK_ROCKET"],
                ["Firework Star", "FIREWORK_STAR"],
                ["Fishing Rod", "FISHING_ROD"],
                ["Flint And Steel", "FLINT_AND_STEEL"],
                ["Flower Banner Pattern", "FLOWER_BANNER_PATTERN"],
                ["Flow Banner Pattern", "FLOW_BANNER_PATTERN"],
                ["Flow Pottery Sherd", "FLOW_POTTERY_SHERD"],
                ["Friend Pottery Sherd", "FRIEND_POTTERY_SHERD"],
                ["Furnace Minecart", "FURNACE_MINECART"],
                ["Ghast Tear", "GHAST_TEAR"],
                ["Glass Bottle", "GLASS_BOTTLE"],
                ["Glistering Melon Slice", "GLISTERING_MELON_SLICE"],
                ["Globe Banner Pattern", "GLOBE_BANNER_PATTERN"],
                ["Glowstone Dust", "GLOWSTONE_DUST"],
                ["Glow Ink Sac", "GLOW_INK_SAC"],
                ["Glow Item Frame", "GLOW_ITEM_FRAME"],
                ["Goat Horn", "GOAT_HORN"],
                ["Gold Ingot", "GOLD_INGOT"],
                ["Gold Nugget", "GOLD_NUGGET"],
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
                ["Iron Nugget", "IRON_NUGGET"],
                ["Item Frame", "ITEM_FRAME"],
                ["Lapis Lazuli", "LAPIS_LAZULI"],
                ["Lingering Potion", "LINGERING_POTION"],
                ["Magma Cream", "MAGMA_CREAM"],
                ["Minecart", "MINECART"],
                ["Miner Pottery Sherd", "MINER_POTTERY_SHERD"],
                ["Mojang Banner Pattern", "MOJANG_BANNER_PATTERN"],
                ["Mourner Pottery Sherd", "MOURNER_POTTERY_SHERD"],
                ["Name Tag", "NAME_TAG"],
                ["Nautilus Shell", "NAUTILUS_SHELL"],
                ["Netherite Ingot", "NETHERITE_INGOT"],
                ["Netherite Scrap", "NETHERITE_SCRAP"],
                ["Netherite Upgrade Smithing Template", "NETHERITE_UPGRADE_SMITHING_TEMPLATE"],
                ["Nether Brick", "NETHER_BRICK"],
                ["Nether Star", "NETHER_STAR"],
                ["Ominous Bottle", "OMINOUS_BOTTLE"],
                ["Ominous Trial Key", "OMINOUS_TRIAL_KEY"],
                ["Phantom Membrane", "PHANTOM_MEMBRANE"],
                ["Piglin Banner Pattern", "PIGLIN_BANNER_PATTERN"],
                ["Pitcher Pod", "PITCHER_POD"],
                ["Plenty Pottery Sherd", "PLENTY_POTTERY_SHERD"],
                ["Popped Chorus Fruit", "POPPED_CHORUS_FRUIT"],
                ["Prismarine Crystals", "PRISMARINE_CRYSTALS"],
                ["Prismarine Shard", "PRISMARINE_SHARD"],
                ["Prize Pottery Sherd", "PRIZE_POTTERY_SHERD"],
                ["Rabbit Foot", "RABBIT_FOOT"],
                ["Rabbit Hide", "RABBIT_HIDE"],
                ["Raw Copper", "RAW_COPPER"],
                ["Raw Gold", "RAW_GOLD"],
                ["Raw Iron", "RAW_IRON"],
                ["Recovery Compass", "RECOVERY_COMPASS"],
                ["Resin Brick", "RESIN_BRICK"],
                ["Scrape Pottery Sherd", "SCRAPE_POTTERY_SHERD"],
                ["Sheaf Pottery Sherd", "SHEAF_POTTERY_SHERD"],
                ["Shelter Pottery Sherd", "SHELTER_POTTERY_SHERD"],
                ["Shulker Shell", "SHULKER_SHELL"],
                ["Skull Banner Pattern", "SKULL_BANNER_PATTERN"],
                ["Skull Pottery Sherd", "SKULL_POTTERY_SHERD"],
                ["Slime Ball", "SLIME_BALL"],
                ["Snort Pottery Sherd", "SNORT_POTTERY_SHERD"],
                ["Spectral Arrow", "SPECTRAL_ARROW"],
                ["Splash Potion", "SPLASH_POTION"],
                ["Sugar", "SUGAR"],
                ["Tipped Arrow", "TIPPED_ARROW"],
                ["Tnt Minecart", "TNT_MINECART"],
                ["Totem Of Undying", "TOTEM_OF_UNDYING"],
                ["Trial Key", "TRIAL_KEY"],
                ["Turtle Helmet", "TURTLE_HELMET"],
                ["Turtle Scute", "TURTLE_SCUTE"],
                ["Warped Fungus On A Stick", "WARPED_FUNGUS_ON_A_STICK"],
                ["Wolf Armor", "WOLF_ARMOR"]
                ]), "VALUE");
            this.setOutput(true, "Item");
            this.setColour("#95A5A6");
            this.setTooltip("");
        }
    };
}