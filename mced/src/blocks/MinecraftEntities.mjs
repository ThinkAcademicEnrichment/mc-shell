import { MCED } from "../lib/constants.mjs";
export function defineMinecraftEntityBlocks(Blockly) {

    Blockly.Blocks['minecraft_entity_picker_hostile_mobs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Hostile Mobs")
                .appendField(new Blockly.FieldDropdown([
                ["Blaze", "BLAZE"],
                ["Cave Spider", "CAVE_SPIDER"],
                ["Creeper", "CREEPER"],
                ["Elder Guardian", "ELDER_GUARDIAN"],
                ["Enderman", "ENDERMAN"],
                ["Endermite", "ENDERMITE"],
                ["Evoker", "EVOKER"],
                ["Ghast", "GHAST"],
                ["Guardian", "GUARDIAN"],
                ["Husk", "HUSK"],
                ["Illusioner", "ILLUSIONER"],
                ["Magma Cube", "MAGMA_CUBE"],
                ["Shulker", "SHULKER"],
                ["Silverfish", "SILVERFISH"],
                ["Skeleton", "SKELETON"],
                ["Slime", "SLIME"],
                ["Spider", "SPIDER"],
                ["Stray", "STRAY"],
                ["Vex", "VEX"],
                ["Vindicator", "VINDICATOR"],
                ["Witch", "WITCH"],
                ["Wither", "WITHER"],
                ["Wither Skeleton", "WITHER_SKELETON"],
                ["Zombie", "ZOMBIE"],
                ["Zombie Villager", "ZOMBIE_VILLAGER"],
                ["Zombified Piglin", "ZOMBIFIED_PIGLIN"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(260);
            this.setTooltip("Select a Hostile Mobs entity.");
        }
    };

    Blockly.Blocks['minecraft_entity_picker_minecarts'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Minecarts")
                .appendField(new Blockly.FieldDropdown([
                ["Minecart", "MINECART"],
                ["Chest Minecart", "CHEST_MINECART"],
                ["Command Block Minecart", "COMMAND_BLOCK_MINECART"],
                ["Furnace Minecart", "FURNACE_MINECART"],
                ["Hopper Minecart", "HOPPER_MINECART"],
                ["Spawner Minecart", "SPAWNER_MINECART"],
                ["Tnt Minecart", "TNT_MINECART"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(260);
            this.setTooltip("Select a Minecarts entity.");
        }
    };

    Blockly.Blocks['minecraft_entity_picker_miscellaneous_entities'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Miscellaneous Entities")
                .appendField(new Blockly.FieldDropdown([
                ["Ender Dragon", "ENDER_DRAGON"],
                ["Evoker Fangs", "EVOKER_FANGS"],
                ["Giant", "GIANT"],
                ["Iron Golem", "IRON_GOLEM"],
                ["Llama", "LLAMA"],
                ["Skeleton Horse", "SKELETON_HORSE"],
                ["Snow Golem", "SNOW_GOLEM"],
                ["Tnt", "TNT"],
                ["Zombie Horse", "ZOMBIE_HORSE"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(260);
            this.setTooltip("Select a Miscellaneous Entities entity.");
        }
    };

    Blockly.Blocks['minecraft_entity_picker_passive_mobs'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Passive Mobs")
                .appendField(new Blockly.FieldDropdown([
                ["Bat", "BAT"],
                ["Chicken", "CHICKEN"],
                ["Cow", "COW"],
                ["Donkey", "DONKEY"],
                ["Horse", "HORSE"],
                ["Mooshroom", "MOOSHROOM"],
                ["Mule", "MULE"],
                ["Ocelot", "OCELOT"],
                ["Parrot", "PARROT"],
                ["Pig", "PIG"],
                ["Polar Bear", "POLAR_BEAR"],
                ["Rabbit", "RABBIT"],
                ["Sheep", "SHEEP"],
                ["Squid", "SQUID"],
                ["Villager", "VILLAGER"],
                ["Wolf", "WOLF"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(260);
            this.setTooltip("Select a Passive Mobs entity.");
        }
    };

    Blockly.Blocks['minecraft_entity_picker_projectiles'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Projectiles")
                .appendField(new Blockly.FieldDropdown([
                ["Arrow", "ARROW"],
                ["Dragon Fireball", "DRAGON_FIREBALL"],
                ["Egg", "EGG"],
                ["Ender Pearl", "ENDER_PEARL"],
                ["Experience Bottle", "EXPERIENCE_BOTTLE"],
                ["Fireball", "FIREBALL"],
                ["Firework Rocket", "FIREWORK_ROCKET"],
                ["Llama Spit", "LLAMA_SPIT"],
                ["Shulker Bullet", "SHULKER_BULLET"],
                ["Small Fireball", "SMALL_FIREBALL"],
                ["Snowball", "SNOWBALL"],
                ["Spectral Arrow", "SPECTRAL_ARROW"],
                ["Splash Potion", "SPLASH_POTION"],
                ["Wither Skull", "WITHER_SKULL"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(260);
            this.setTooltip("Select a Projectiles entity.");
        }
    };

    Blockly.Blocks['minecraft_entity_picker_utility_and_special'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("Utility And Special")
                .appendField(new Blockly.FieldDropdown([
                ["Area Effect Cloud", "AREA_EFFECT_CLOUD"],
                ["Armor Stand", "ARMOR_STAND"],
                ["End Crystal", "END_CRYSTAL"],
                ["Experience Orb", "EXPERIENCE_ORB"],
                ["Eye Of Ender", "EYE_OF_ENDER"],
                ["Falling Block", "FALLING_BLOCK"],
                ["Item", "ITEM"],
                ["Item Frame", "ITEM_FRAME"],
                ["Leash Knot", "LEASH_KNOT"],
                ["Painting", "PAINTING"]
                ]), "VALUE");
            this.setOutput(true, "String");
            this.setColour(260);
            this.setTooltip("Select a Utility And Special entity.");
        }
    };
}
