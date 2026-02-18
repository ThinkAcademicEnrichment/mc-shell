from mcshell.constants import *
from blockapily import BlocklyGenerator, mced_block
import xml.etree.ElementTree as ET
import re
import json
import pickle
import pathlib
import inspect

# Path for persisting overrides between generation phases (ensures Boats/Eggs survive context boundaries)
MC_OVERRIDES_DATA_PATH = MC_DATA_DIR / 'materials' / 'entity_overrides.json'

def make_picker_group(materials, reg_exp):
    """Filters a list of materials based on a regex and returns sorted matches."""
    _matches = list(filter(lambda x: x is not None, map(lambda x: re.match(reg_exp, x), set(materials))))
    return sorted([_m.group() for _m in _matches])

# =========================================================================
# 1. CATEGORIZATION RULES (Wood, Colorable, and New Item Groups)
# =========================================================================

# Wood-based Blocks (Placeable in the world)
WOOD_BLOCK_RULES = {
    'BUTTON': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_BUTTON$"),
    'DOOR': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_DOOR$"),
    'FENCE': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_FENCE$"),
    'FENCE_GATE': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_FENCE_GATE$"),
    'PLANKS': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_PLANKS$"),
    'PRESSURE_PLATE': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_PRESSURE_PLATE$"),
    'SLAB': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_SLAB$"),
    'STAIRS': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_STAIRS$"),
    'TRAPDOOR': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_TRAPDOOR$"),
    'LOG': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK)_LOG$|^(CRIMSON|WARPED)_STEM$|^BAMBOO_BLOCK$"),
    'WOOD': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK)_WOOD$|^(CRIMSON|WARPED)_HYPHAE$")
}

# Wood-based Items (Usually Inventory, but can be Entities or Blocks)
WOOD_ITEM_RULES = {
    'BOAT': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO)_BOAT$"),
    'CHEST_BOAT': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO)_CHEST_BOAT$"),
    'SIGN': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_(WALL_)?SIGN$"),
    'HANGING_SIGN': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_(WALL_)?HANGING_SIGN$"),
    'SAPLING': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_SAPLING$"),
    'SHELF': re.compile(r"^(OAK|SPRUCE|BIRCH|JUNGLE|ACACIA|DARK_OAK|MANGROVE|CHERRY|PALE_OAK|BAMBOO|CRIMSON|WARPED)_SHELF$"),
}

# Generic categorization regexes to pull items out of Miscellaneous
ITEM_GROUP_RULES = {
    'SPAWN_EGG': re.compile(r"^(.*)_SPAWN_EGG$"),
    'POTTERY_SHERD': re.compile(r"^(.*)_POTTERY_SHERD$"),
    'MUSIC_DISC': re.compile(r"^MUSIC_DISC_(.*)$"),
    'DYE': re.compile(r"^(.*)_DYE$"),
    'SMITHING_TEMPLATE': re.compile(r"^(.*)_SMITHING_TEMPLATE$"),
}

# Colorable rules
COLORABLE_BLOCK_RULES = {
    'WOOL': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_WOOL$"),
    'TERRACOTTA': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK|LIGHT|LEGACY)_TERRACOTTA$"),
    'STAINED_GLASS': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_STAINED_GLASS$"),
    'STAINED_GLASS_PANE': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_STAINED_GLASS_PANE$"),
    'CONCRETE': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_CONCRETE$"),
    'CONCRETE_POWDER': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_CONCRETE_POWDER$"),
    'CANDLE': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_CANDLE$"),
    'SHULKER_BOX': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_SHULKER_BOX$"),
    'CARPET': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_CARPET$"),
    'GLAZED_TERRACOTTA': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_GLAZED_TERRACOTTA$"),
}

COLORABLE_ITEM_RULES = {
    'BED': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_BED$"),
    'BANNER': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_(WALL_)?BANNER$"),
    'BUNDLE': re.compile(r"^(WHITE|ORANGE|MAGENTA|LIGHT_BLUE|YELLOW|LIME|PINK|GRAY|LIGHT_GRAY|CYAN|PURPLE|BLUE|BROWN|GREEN|RED|BLACK)_BUNDLE$"),
}

# Rule for Spawn Eggs
SPAWN_EGG_RULE = re.compile(r"^(.*)_SPAWN_EGG$")

# EXTENSIBILITY POINT: Define semantic output types for base names.
SEMANTIC_OUTPUT_TYPES = {
    'BOAT': 'Entity',
    'CHEST_BOAT': 'Entity',
    'SIGN': 'Block',
    'HANGING_SIGN': 'Block',
    'SAPLING': 'Block',
    'SHELF': 'Block',
    'BED': 'Block',
    'BANNER': 'Block'
}

MATERIAL_PICKER_GROUPS = {
    "world": ["AIR", "STONE", "GRANITE", "DIORITE", "ANDESITE", "DEEPSLATE", "CALCITE", "TUFF", "DIRT", "COARSE_DIRT", "ROOTED_DIRT", "GRASS_BLOCK", "PODZOL", "MYCELIUM", "DIRT_PATH", "SAND", "RED_SAND", "GRAVEL", "CLAY", "ICE", "PACKED_ICE", "BLUE_ICE", "SNOW", "SNOW_BLOCK", "WATER", "LAVA", "BEDROCK", "OBSIDIAN", "CRYING_OBSIDIAN", "MAGMA_BLOCK"],
    "ores": ["COAL_ORE", "DEEPSLATE_COAL_ORE", "IRON_ORE", "DEEPSLATE_IRON_ORE", "COPPER_ORE", "DEEPSLATE_COPPER_ORE", "GOLD_ORE", "DEEPSLATE_GOLD_ORE", "REDSTONE_ORE", "DEEPSLATE_REDSTONE_ORE", "EMERALD_ORE", "DEEPSLATE_EMERALD_ORE", "LAPIS_ORE", "DEEPSLATE_LAPIS_ORE", "DIAMOND_ORE", "DEEPSLATE_DIAMOND_ORE", "NETHER_GOLD_ORE", "NETHER_QUARTZ_ORE", "ANCIENT_DEBRIS"],
    "stone_bricks": ["BRICKS", "STONE_BRICKS", "MUD_BRICKS", "DEEPSLATE_BRICKS", "DEEPSLATE_TILES", "NETHER_BRICKS", "RED_NETHER_BRICKS", "POLISHED_BLACKSTONE_BRICKS", "END_STONE_BRICKS", "QUARTZ_BRICKS", "CHISELED_STONE_BRICKS", "CRACKED_STONE_BRICKS", "MOSSY_STONE_BRICKS", "CHISELED_NETHER_BRICKS", "CRACKED_NETHER_BRICKS", "CHISELED_POLISHED_BLACKSTONE", "CRACKED_POLISHED_BLACKSTONE_BRICKS", "CHISELED_DEEPSLATE", "CRACKED_DEEPSLATE_BRICKS", "CRACKED_DEEPSLATE_TILES", "CHISELED_TUFF_BRICKS"],
    "glass": ["GLASS", "GLASS_PANE", "TINTED_GLASS"],
    "redstone_components": ["REDSTONE_WIRE", "REDSTONE_BLOCK", "REDSTONE_TORCH", "REPEATER", "COMPARATOR", "PISTON", "STICKY_PISTON", "SLIME_BLOCK", "HONEY_BLOCK", "OBSERVER", "DROPPER", "DISPENSER", "HOPPER", "LECTERN", "LEVER", "DAYLIGHT_DETECTOR", "TRIPWIRE_HOOK", "TARGET", "NOTE_BLOCK", "RAIL", "POWERED_RAIL", "DETECTOR_RAIL", "ACTIVATOR_RAIL", "REDSTONE_LAMP"],
    "lighting": ["TORCH", "SOUL_TORCH", "LANTERN", "SOUL_LANTERN", "GLOWSTONE", "SEA_LANTERN", "OCHRE_FROGLIGHT", "PEARLESCENT_FROGLIGHT", "VERDANT_FROGLIGHT", "COPPER_LANTERN", "SHROOMLIGHT", "JACK_O_LANTERN", "BEACON", "END_ROD"],
    "copper_variants": ["COPPER_BLOCK", "EXPOSED_COPPER", "WEATHERED_COPPER", "OXIDIZED_COPPER", "CUT_COPPER", "CHISELED_COPPER", "COPPER_GRATE", "COPPER_BULB"],
    "nature": ["OAK_LEAVES", "SPRUCE_LEAVES", "BIRCH_LEAVES", "JUNGLE_LEAVES", "ACACIA_LEAVES", "DARK_OAK_LEAVES", "MANGROVE_LEAVES", "CHERRY_LEAVES", "AZALEA_LEAVES", "MOSS_BLOCK", "VINE", "CAVE_VINES", "TWISTING_VINES", "WEEPING_VINES"],
    "flowers": ["DANDELION", "POPPY", "BLUE_ORCHID", "ALLIUM", "AZURE_BLUET", "RED_TULIP", "ORANGE_TULIP", "WHITE_TULIP", "PINK_TULIP", "OXEYE_DAISY", "CORNFLOWER", "LILY_OF_THE_VALLEY", "WITHER_ROSE", "SUNFLOWER", "LILAC", "ROSE_BUSH", "PEONY"],
    "functional_storage": ["CHEST", "TRAPPED_CHEST", "BARREL", "ENDER_CHEST", "CRAFTER", "FURNACE", "BLAST_FURNACE", "SMOKER"],
    "spawning": ["SPAWNER", "TRIAL_SPAWNER", "FROGSPAWN", "RESPAWN_ANCHOR"],
    "wood_types": ["OAK", "SPRUCE", "BIRCH", "JUNGLE", "ACACIA", "DARK_OAK", "MANGROVE", "CHERRY", "PALE_OAK", "BAMBOO", "CRIMSON", "WARPED"]
}

# =========================================================================
# 2. HELPER FUNCTIONS
# =========================================================================

def _generate_blockly_name(id_string):
    """Helper to format names like HOSTILE_MOBS -> 'Hostile Mobs'."""
    if not id_string or not isinstance(id_string, str):
        return ''
    return id_string.replace('_', ' ').title()

def ensure_toolbox():
    """Ensures the toolbox.xml exists and is valid."""
    output_toolbox_path = MC_APP_SRC_DIR / 'toolbox.xml'
    if not output_toolbox_path.exists():
        toolbox_template_path = MC_DATA_DIR / 'toolbox_template.xml'
        with output_toolbox_path.open('w') as f:
            f.write(toolbox_template_path.read_text())

# =========================================================================
# 3. MATERIAL PROCESSING (Blocks & Items)
# =========================================================================

def process_materials():
    """Categorizes all Minecraft materials into JSON data files."""
    try:
        _raw_materials_list = pickle.load(MC_MATERIALS_PATH.open('rb'))
    except FileNotFoundError:
        from mcshell.mcscraper import make_materials
        _raw_materials_list = make_materials()

    all_materials = {m for m in _raw_materials_list if m and not m.startswith("LEGACY_")}

    MATERIAL_PICKER_GROUPS['stairs'] = make_picker_group(all_materials, r".*_STAIRS$")
    MATERIAL_PICKER_GROUPS['slabs'] = make_picker_group(all_materials, r".*_SLAB$")
    MATERIAL_PICKER_GROUPS['walls'] = make_picker_group(all_materials, r".*_WALL$")

    colorable_bases = {}
    picker_data = {}
    processed_materials = set()

    # Process specialized item groups (Eggs, Sherds, Discs, etc.)
    for group_name, pattern in ITEM_GROUP_RULES.items():
        matches = [m for m in all_materials if pattern.match(m)]
        picker_data[f"{group_name.lower()}_types"] = sorted([pattern.match(m).group(1) for m in matches])
        processed_materials.update(matches)

    # Process colorables
    ALL_COLORABLE_RULES = {**COLORABLE_BLOCK_RULES, **COLORABLE_ITEM_RULES}
    for base, pattern in ALL_COLORABLE_RULES.items():
        colorable_bases[base] = [m for m in all_materials if pattern.match(m)]
        processed_materials.update(colorable_bases[base])

    # Wood processing
    for rule_set in [WOOD_BLOCK_RULES, WOOD_ITEM_RULES]:
        for base, pattern in rule_set.items():
            matches = [m for m in all_materials if pattern.match(m)]
            processed_materials.update(matches)

    # Standard static groups
    for group, mats in MATERIAL_PICKER_GROUPS.items():
        picker_data[group] = [m for m in mats if m in all_materials]
        processed_materials.update(picker_data[group])

    singles_data = sorted(list(all_materials - processed_materials))

    with MC_COLOURABLE_MATERIALS_DATA_PATH.open('w') as f:
        json.dump(colorable_bases, f, indent=4, sort_keys=True)
    with MC_PICKER_MATERIALS_DATA_PATH.open('w') as f:
        json.dump(picker_data, f, indent=4, sort_keys=True)
    with MC_SINGLE_MATERIALS_DATA_PATH.open('w') as f:
        json.dump(singles_data, f, indent=4, sort_keys=True)

def generate_material_blocks():
    """Generates Blockly JS definitions and Python generators for materials/items."""
    try:
        with open(MC_COLOURABLE_MATERIALS_DATA_PATH, 'r') as f: colourables_data = json.load(f)
        with open(MC_PICKER_MATERIALS_DATA_PATH, 'r') as f: pickers_data = json.load(f)
        with open(MC_SINGLE_MATERIALS_DATA_PATH, 'r') as f: singles_data = json.load(f)

        output_blocks_dir = MC_APP_SRC_DIR / 'blocks'
        output_python_dir = MC_APP_SRC_DIR / 'generators' / 'python'
        output_toolbox_path = MC_APP_SRC_DIR / 'toolbox.xml'

        block_defs, python_gens, material_xml, item_xml, entity_overrides = [], [], [], [], []

        # 1. SPECIALIZED PICKERS & BLOCKS (Spawn Eggs, Discs, Sherds, Dyes)
        # We use a placeholder {} to handle both prefix and suffix behavior correctly
        def _add_picker_logic(group_key, block_label, id_template, colour):
            types = pickers_data.get(f"{group_key.lower()}_types", [])
            options = ',\n'.join([f'["{_generate_blockly_name(t)}", "{t}"]' for t in types])
            picker_type = f"minecraft_{group_key.lower()}_picker"
            base_block = f"minecraft_item_{group_key.lower()}"

            block_defs.append(f"    Blockly.Blocks['{picker_type}'] = {{ init: function() {{ this.appendDummyInput().appendField('{block_label}').appendField(new Blockly.FieldDropdown([{options}]), 'TYPE'); this.setOutput(true, '{group_key.title()}Type'); this.setColour({colour}); }} }};")
            python_gens.append(f"    pythonGenerator.forBlock['{picker_type}'] = (block) => [`'${{block.getFieldValue('TYPE')}}'`, pythonGenerator.ORDER_ATOMIC];")

            block_defs.append(f"    Blockly.Blocks['{base_block}'] = {{ init: function() {{ this.appendValueInput('TYPE').setCheck('{group_key.title()}Type').appendField('{block_label}'); this.setOutput(true, 'Item'); this.setColour({colour}); MCED.BlocklyUtils.configureShadow(this, 'TYPE'); }} }};")

            # Use string concatenation for the generator logic to avoid complex f-string escaping
            val_js_expr = "(generator.valueToCode(block, 'TYPE', pythonGenerator.ORDER_ATOMIC) || \"'ZOMBIE'\").replace(/['\\\"]/g, '')"
            if "{}" in id_template:
                parts = id_template.split("{}")
                prefix = parts[0]
                suffix = parts[1]
            else:
                prefix, suffix = "", id_template

            gen_line = "    pythonGenerator.forBlock['" + base_block + "'] = (block, generator) => [`'" + prefix + "${" + val_js_expr + "}" + suffix + "'`, pythonGenerator.ORDER_ATOMIC];"
            python_gens.append(gen_line)

            item_xml.append(f'<block type="{base_block}"><value name="TYPE"><shadow type="{picker_type}"></shadow></value></block>')

        # Fixed MUSIC_DISC template to prefix 'MUSIC_DISC_' correctly
        _add_picker_logic('SPAWN_EGG', 'Spawn Egg for', '{}_SPAWN_EGG', 100)
        _add_picker_logic('MUSIC_DISC', 'Music Disc', 'MUSIC_DISC_{}', 230)
        _add_picker_logic('POTTERY_SHERD', 'Pottery Sherd', '{}_POTTERY_SHERD', 150)
        _add_picker_logic('DYE', 'Dye', '{}_DYE', 180)
        _add_picker_logic('SMITHING_TEMPLATE', 'Smithing Template', '{}_SMITHING_TEMPLATE', 210)

        # 2. WOOD & COLOUR BLOCKS
        wood_types = MATERIAL_PICKER_GROUPS['wood_types']
        wood_options = ',\n'.join([f'["{_generate_blockly_name(w)}", "{w}"]' for w in wood_types])
        block_defs.append(f"    Blockly.Blocks['minecraft_wood_type_picker'] = {{ init: function() {{ this.appendDummyInput().appendField('wood type').appendField(new Blockly.FieldDropdown([{wood_options}]), 'WOOD_TYPE'); this.setOutput(true, 'MinecraftWood'); this.setColour(120); }} }};")
        python_gens.append("    pythonGenerator.forBlock['minecraft_wood_type_picker'] = (block) => [`'${block.getFieldValue('WOOD_TYPE')}'`, pythonGenerator.ORDER_ATOMIC];")

        def _get_target_and_type(base_name, default_type):
            semantic = SEMANTIC_OUTPUT_TYPES.get(base_name, default_type)
            if semantic == 'Entity': return 'Entity', entity_overrides
            if semantic == 'Block': return 'Block', material_xml
            return 'Item', item_xml

        def _add_wood(base_name, default_type):
            out, target = _get_target_and_type(base_name, default_type)
            prefix = "material" if default_type == "Block" else "item"
            block_type = f"minecraft_{prefix}_wood_{base_name.lower()}"
            target.append(f'<block type="{block_type}"><value name="WOOD"><shadow type="minecraft_wood_type_picker"><field name="WOOD_TYPE">OAK</field></shadow></value></block>')
            block_defs.append(f"    Blockly.Blocks['{block_type}'] = {{ init: function() {{ this.appendValueInput('WOOD').setCheck('MinecraftWood').appendField('{_generate_blockly_name(base_name)} of type'); this.setOutput(true, '{out}'); this.setColour({120 if out == 'Block' else 110}); MCED.BlocklyUtils.configureShadow(this, 'WOOD'); }} }};")
            python_gens.append(f"    pythonGenerator.forBlock['{block_type}'] = (block, generator) => [_combine_wood_and_material(generator.valueToCode(block, 'WOOD', pythonGenerator.ORDER_ATOMIC) || \"'OAK'\", '{base_name}'), pythonGenerator.ORDER_ATOMIC];")

        for b in WOOD_BLOCK_RULES: _add_wood(b, "Block")
        for b in WOOD_ITEM_RULES: _add_wood(b, "Item")

        def _add_colour(base_name, default_type):
            out, target = _get_target_and_type(base_name, default_type)
            prefix = "material" if default_type == "Block" else "item"
            block_type = f"minecraft_{prefix}_colour_{base_name.lower()}"
            target.append(f'<block type="{block_type}"><value name="COLOUR"><shadow type="minecraft_coloured_block_picker"><field name="MINECRAFT_COLOUR_ID">WHITE</field></shadow></value></block>')
            # Fixed NameError: 'output_type' -> 'out'
            block_defs.append(f"    Blockly.Blocks['{block_type}'] = {{ init: function() {{ this.appendValueInput('COLOUR').setCheck('MinecraftColour').appendField('{_generate_blockly_name(base_name)} with color'); this.setOutput(true, '{out}'); this.setColour({160 if out == 'Block' else 140}); MCED.BlocklyUtils.configureShadow(this, 'COLOUR'); }} }};")
            python_gens.append(f"    pythonGenerator.forBlock['{block_type}'] = (block, generator) => [_combine_colour_and_material(generator.valueToCode(block, 'COLOUR', pythonGenerator.ORDER_ATOMIC) || \"'WHITE'\", '{base_name}'), pythonGenerator.ORDER_ATOMIC];")

        for b in COLORABLE_BLOCK_RULES: _add_colour(b, "Block")
        for b in COLORABLE_ITEM_RULES: _add_colour(b, "Item")

        # Standard Pickers
        for name, materials in pickers_data.items():
            if name in ["wood_types", "spawn_egg_types", "music_disc_types", "pottery_sherd_types", "dye_types", "smithing_template_types"]: continue
            block_type = f"minecraft_picker_{name.lower()}"
            material_xml.append(f'<block type="{block_type}"></block>')
            opts = ',\n'.join([f'["{_generate_blockly_name(m)}", "{m}"]' for m in materials])
            block_defs.append(f"    Blockly.Blocks['{block_type}'] = {{ init: function() {{ this.appendDummyInput().appendField('{_generate_blockly_name(name)}').appendField(new Blockly.FieldDropdown([{opts}]), 'MATERIAL_ID'); this.setOutput(true, 'Block'); this.setColour(180); }} }};")
            python_gens.append(f"    pythonGenerator.forBlock['{block_type}'] = (block) => [`'${{block.getFieldValue('MATERIAL_ID')}}'`, pythonGenerator.ORDER_ATOMIC];")

        if singles_data:
            material_xml.append('<sep></sep><block type="minecraft_picker_miscellaneous"></block>')
            opts = ',\n'.join([f'["{_generate_blockly_name(m)}", "{m}"]' for m in singles_data])
            block_defs.append(f"    Blockly.Blocks['minecraft_picker_miscellaneous'] = {{ init: function() {{ this.appendDummyInput().appendField('Misc. Block/Item').appendField(new Blockly.FieldDropdown([{opts}]), 'MATERIAL_ID'); this.setOutput(true, 'Block'); this.setColour(200); }} }};")
            python_gens.append("    pythonGenerator.forBlock['minecraft_picker_miscellaneous'] = (block) => [`'${block.getFieldValue('MATERIAL_ID')}'`, pythonGenerator.ORDER_ATOMIC];")

        # Persist Entity Overrides to disk
        with open(MC_OVERRIDES_DATA_PATH, 'w', encoding='utf-8') as f:
            json.dump(entity_overrides, f, indent=4)

        # Output logic
        block_defs_output = 'import { MCED } from "../lib/constants.mjs";\n\nexport function defineMineCraftMaterialBlocks(Blockly) {\n' + "\n".join(block_defs) + "\n}\n"
        python_helper = "function _combine_wood_and_material(wood,base){const w=wood.replace(/['\"]/g,'');let s=base;if(w==='BAMBOO'&&(base==='LOG'||base==='WOOD'))s='BLOCK';else if((w==='CRIMSON'||w==='WARPED')&&base==='LOG')s='STEM';else if((w==='CRIMSON'||w==='WARPED')&&base==='WOOD')s='HYPHAE';return `${w}_${s}`;}\nfunction _combine_colour_and_material(c,m){return `${c.replace(/['\"]/g,'')}_${m}`;}"
        python_gen_output = "import { pythonGenerator } from 'blockly/python';\n" + python_helper + "\nexport function defineMineCraftMaterialGenerators(pythonGenerator) {\n" + "\n".join(python_gens) + "\n}\n"

        (output_blocks_dir / 'materials.mjs').write_text(block_defs_output, 'utf-8')
        (output_python_dir / 'materials.mjs').write_text(python_gen_output, 'utf-8')

        class Dummy: pass
        dummy = BlocklyGenerator(Dummy, {}, {}, category_colour="#000")
        dummy.update_toolbox(f'<category name="Materials" colour="#777777">{"".join(material_xml)}</category>', output_toolbox_path)
        dummy.update_toolbox(f'<category name="Items" colour="#5ba58c">{"".join(item_xml)}</category>', output_toolbox_path)

    except Exception as e:
        print(f"Failed materials: {e}"); raise

def process_entities():
    """Reads the full entity list and categorizes them into picker groups."""
    try:
        _raw_entity_id_map = pickle.load(MC_ENTITY_ID_MAP_PATH.open('rb'))
    except FileNotFoundError:
        from mcshell.mcscraper import make_entity_id_map
        _raw_entity_id_map = make_entity_id_map()

    all_entities = {e for e in _raw_entity_id_map if not e.startswith("LEGACY_")}
    picker_data = {}
    processed = set()

    ENTITY_PICKER_GROUPS = {
        "passive_mobs": ["ALLAY", "ARMADILLO", "AXOLOTL", "BAT", "CAMEL", "CAT", "CHICKEN", "COD", "COW", "DONKEY", "FOX", "FROG", "GLOW_SQUID", "HORSE", "MOOSHROOM", "MULE", "OCELOT", "PANDA", "PARROT", "PIG", "POLAR_BEAR", "PUFFERFISH", "RABBIT", "SALMON", "SHEEP", "SNIFFER", "SQUID", "STRIDER", "TADPOLE", "TROPICAL_FISH", "TURTLE", "VILLAGER", "WANDERING_TRADER", "WOLF"],
        "hostile_mobs": ["BLAZE", "BOGGED", "BREEZE", "CAVE_SPIDER", "CREAKING", "CREEPER", "DROWNED", "ELDER_GUARDIAN", "ENDERMAN", "ENDERMITE", "EVOKER", "GHAST", "GUARDIAN", "HOGLIN", "HUSK", "ILLUSIONER", "MAGMA_CUBE", "PHANTOM", "PIGLIN", "PIGLIN_BRUTE", "PILLAGER", "RAVAGER", "SHULKER", "SILVERFISH", "SKELETON", "SLIME", "SPIDER", "STRAY", "VEX", "VINDICATOR", "WARDEN", "WITCH", "WITHER", "WITHER_SKELETON", "ZOGLIN", "ZOMBIE", "ZOMBIE_VILLAGER", "ZOMBIFIED_PIGLIN"],
        "minecarts": ["MINECART", "CHEST_MINECART", "COMMAND_BLOCK_MINECART", "FURNACE_MINECART", "HOPPER_MINECART", "SPAWNER_MINECART", "TNT_MINECART"],
        "projectiles": ["ARROW", "EGG", "ENDER_PEARL", "EXPERIENCE_BOTTLE", "FIREBALL", "FIREWORK_ROCKET", "SNOWBALL", "TRIDENT"],
        "utility": ["ARMOR_STAND", "END_CRYSTAL", "EXPERIENCE_ORB", "FALLING_BLOCK", "ITEM_FRAME", "PAINTING", "PLAYER"]
    }

    for group, entity_list in ENTITY_PICKER_GROUPS.items():
        picker_data[group] = [e for e in entity_list if e in all_entities]
        processed.update(picker_data[group])

    misc_entities = sorted(list(all_entities - processed))
    if misc_entities: picker_data["miscellaneous_entities"] = misc_entities

    with MC_ENTITY_PICKERS_PATH.open('w') as f:
        json.dump(picker_data, f, indent=4, sort_keys=True)

def generate_entity_blocks():
    """Generates Blockly code for entity pickers and injects overrides."""
    try:
        with open(MC_ENTITY_PICKERS_PATH, 'r', encoding='utf-8') as f: pickers_data = json.load(f)
        output_blocks_dir = MC_APP_SRC_DIR / 'blocks'
        output_python_dir = MC_APP_SRC_DIR / 'generators' / 'python'
        output_toolbox_path = MC_APP_SRC_DIR / 'toolbox.xml'

        block_defs, python_gens, toolbox_xml = [], [], []
        default_colour = "#5b5ba5"

        for name, entities in pickers_data.items():
            block_type = f"minecraft_entity_picker_{name.lower()}"
            opts = ',\n'.join([f'["{_generate_blockly_name(e)}", "{e}"]' for e in entities])
            block_defs.append(f"    Blockly.Blocks['{block_type}'] = {{ init: function() {{ this.appendDummyInput().appendField('{_generate_blockly_name(name)}').appendField(new Blockly.FieldDropdown([{opts}]), 'ENTITY_ID'); this.setOutput(true, 'Entity'); this.setColour('{default_colour}'); }} }};")
            python_gens.append(f"    pythonGenerator.forBlock['{block_type}'] = (block) => [`'${{block.getFieldValue('ENTITY_ID')}}'`, pythonGenerator.ORDER_ATOMIC];")
            toolbox_xml.append(f'<block type="{block_type}"></block>')

        if MC_OVERRIDES_DATA_PATH.exists():
            with open(MC_OVERRIDES_DATA_PATH, 'r', encoding='utf-8') as f:
                overrides = json.load(f)
                if overrides: toolbox_xml.extend(overrides)

        (output_blocks_dir / 'entities.mjs').write_text("export function defineMineCraftEntityBlocks(Blockly) {\n" + "\n".join(block_defs) + "\n}\n", 'utf-8')
        (output_python_dir / 'entities.mjs').write_text("export function defineMineCraftEntityGenerators(pythonGenerator) {\n" + "\n".join(python_gens) + "\n}\n", 'utf-8')

        class Dummy: pass
        dummy = BlocklyGenerator(Dummy, {}, {}, category_colour=default_colour)
        dummy.update_toolbox(f'<category name="Entities" colour="{default_colour}">{"".join(toolbox_xml)}</category>', output_toolbox_path)

    except Exception as e:
        print(f"Failed entities: {e}")

# =========================================================================
# 5. MC ACTIONS GENERATION (API Wrapper - DO NOT MODIFY SECTION)
# =========================================================================

def _generate_picker_block_js(block_type, label, options_list, colour, tooltip, output_type='String' ):
    formatted_options = ',\n'.join([f'                ["{opt[0]}", "{opt[1]}"]' for opt in options_list])
    field_name = "VALUE"
    safe_tooltip = tooltip.replace('"', '\\"')
    js_def = f"""
    Blockly.Blocks['{block_type}'] = {{
        init: function() {{
            this.appendDummyInput()
                .appendField("{label}")
                .appendField(new Blockly.FieldDropdown([
{formatted_options}
                ]), "{field_name}");
            this.setOutput(true, "{output_type}");
            this.setColour({colour});
            this.setTooltip("{safe_tooltip}");
        }}
    }};"""
    py_gen = f"""
    pythonGenerator.forBlock['{block_type}'] = function(block, generator) {{
        const code = block.getFieldValue('{field_name}');
        return [`'${{code}}'`, generator.ORDER_ATOMIC];
    }};"""
    xml_gen =  f'<block type="{block_type}"></block>'
    return js_def, py_gen, xml_gen

def _insert_block_xml_into_category(toolbox_xml, extra_xml):
    if "</category>" in toolbox_xml:
        return toolbox_xml.replace("</category>", f"{extra_xml}\n</category>")
    return toolbox_xml

def generate_mcactions_blocks():
    from mcshell.mcactions import (DigitalGeometry, QTurtleActions, TurtleShapes, PlayerActions, LSystemShapes, PyncraftActions, EventActions, WorldActions, ServerActions, Pickers)
    base_dir = pathlib.Path(__file__).parent.parent
    output_dir = base_dir / "mced" / "src" / "blocks"
    gen_output_dir = base_dir / "mced" / "src" / "generators" / "python"
    output_toolbox_path = MC_APP_SRC_DIR / 'toolbox.xml'

    # Configure Shadows for BlocklyGenerator
    type_map = {'Vec3': "3DVector", 'Matrix3': "3DMatrix", 'Block': "Block", 'DigitalSet': "Digital_Set", 'Metric': 'Metric', 'QDirection': 'QDirection', 'Axis': 'Axis', 'QCompass': 'QCompass', 'Time': 'Time', 'Weather': 'Weather', 'Difficulty': 'Difficulty', 'Gamemode': 'Gamemode', 'GameRule': 'GameRule', 'LocateType': 'LocateType', 'Structure': 'Structure', 'Biome': 'Biome', 'Poi': 'Poi', 'Entity': 'Entity'}
    shadow_map = dict(
        Vec3='<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>',
        Block='<shadow type="minecraft_picker_world"><field name="MATERIAL_ID">STONE</field></shadow>',
        Entity='<shadow type="minecraft_entity_picker_passive_mobs"><field name="ENTITY_ID">PIG</field></shadow>',
        Matrix3='<shadow type="minecraft_matrix_3d_euler"></shadow>',
        Metric = '<shadow type="picker_metric"><field name="VALUE">euclidean</field></shadow>',
        QDirection = '<shadow type="picker_qdirection"><field name="VALUE">forward</field></shadow>',
        Axis = '<shadow type="picker_axis"><field name="VALUE">y</field></shadow>',
        QCompass = '<shadow type="picker_qcompass"><field name="VALUE">N</field></shadow>',
        Time = '<shadow type="picker_time"><field name="VALUE">day</field></shadow>',
        Weather = '<shadow type="picker_weather"><field name="VALUE">clear</field></shadow>',
        Difficulty = '<shadow type="picker_difficulty"><field name="VALUE">normal</field></shadow>',
        Gamemode = '<shadow type="picker_gamemode"><field name="VALUE">creative</field></shadow>',
        GameRule = '<shadow type="picker_gamerule"><field name="VALUE">doDaylightCycle</field></shadow>',
        IntegerGameRule = '<shadow type="picker_integergamerule"><field name="VALUE">respawn_radius</field></shadow>',
        LocateType = '<shadow type="picker_locatetype"><field name="VALUE">structure</field></shadow>',
        Structure = '<shadow type="picker_structure"><field name="VALUE">ancient_city</field></shadow>',
        Biome='<shadow type="picker_biome"><field name="VALUE">badlands</field></shadow>',
        Poi ='<shadow type="picker_poi"><field name="VALUE">armorer</field></shadow>',
    )

    custom_pickers = {}
    for name, options in inspect.getmembers(Pickers):
        if isinstance(options, list):
            block_type = f"picker_{name.lower()}"
            js, py, xml = _generate_picker_block_js(block_type, name.title(), options, 230, f"Select a {name.title()}.", name)
            custom_pickers[name] = (js, py, xml)

    def get_extras(picker_names):
        js_acc, py_acc, xml_acc = "", "", ""
        for name in picker_names:
            if name in custom_pickers:
                js, py, xml = custom_pickers[name]
                js_acc += js + "\n\n"; py_acc += py + "\n\n"; xml_acc += xml + "\n"
        return js_acc, py_acc, xml_acc

    turtleshapes_extras = get_extras(["Metric"])
    playeractions_extras = get_extras(["QDirection", "Axis", "QCompass"])
    qturtleactions_extras = get_extras(["QDirection","Axis","QCompass"])
    serveractions_extras = get_extras(["Time","Weather","Difficulty","Gamemode","GameRule","IntegerGameRule","LocateType","Structure","Biome","Poi"])

    classes_to_generate = [
        (DigitalGeometry, "DigitalGeometry", None, None, None, "#364EE7"),
        (TurtleShapes, "TurtleShapes", turtleshapes_extras[0], turtleshapes_extras[1], turtleshapes_extras[2], "#F3BA2B"),
        (QTurtleActions, "QTurtleActions", qturtleactions_extras[0], qturtleactions_extras[1], qturtleactions_extras[2], "#F3BA2B"),
        (PlayerActions, "PlayerActions", playeractions_extras[0], playeractions_extras[1], playeractions_extras[2], "#3ECDE0"),
        (EventActions, "EventActions", None, None, None, "#FCBA03"),
        (LSystemShapes, "LSystemShapes", None, None, None, "#75E538"),
        (PyncraftActions, "PyncraftActions", None, None, None, "#252E28"),
        (WorldActions, "WorldActions", None, None, None, "#75E538"),
        (ServerActions, "ServerActions", serveractions_extras[0], serveractions_extras[1], serveractions_extras[2], "#252E28")
    ]

    for cls, filename_base, extra_js, extra_py, extra_xml, category_colour in classes_to_generate:
        generator = BlocklyGenerator(cls, type_map, shadow_map, category_colour=category_colour)
        blocks_js, generators_py, toolbox_cat = generator.generate()
        final_js, final_py = blocks_js, generators_py
        if extra_js: final_js = extra_js + "\n\n" + final_js
        if extra_py: final_py = extra_py + "\n\n" + final_py
        final_xml = _insert_block_xml_into_category(toolbox_cat, extra_xml) if extra_xml else toolbox_cat
        (output_dir / f"{filename_base}.mjs").write_text(f'import {{ MCED }} from "../lib/constants.mjs";\n\nexport function define{filename_base}Blocks(Blockly) {{\n{final_js}\n}}', encoding='utf-8')
        (gen_output_dir / f"{filename_base}.mjs").write_text(f'\nexport function define{filename_base}Generators(pythonGenerator) {{\n{final_py}\n}}', encoding='utf-8')
        generator.update_toolbox(final_xml, output_toolbox_path)

if __name__ == "__main__":
    ensure_toolbox()
    process_materials()
    process_entities()
    generate_material_blocks()
    generate_entity_blocks()
    generate_mcactions_blocks()