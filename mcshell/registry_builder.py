import pickle
import json
import re
from pathlib import Path
from typing import Dict, Any, List, Set, Tuple

from mcshell.constants import *
from blockapily import BlocklyGenerator

class RegistryBuilder:
    """
    Orchestrates the generation of Minecraft-specific Blockly blocks
    using structured data and the blockapily generation engine.
    """

    def __init__(self, toolbox_path: Path, blocks_dir: Path, gens_dir: Path):
        self.toolbox_path = toolbox_path
        self.blocks_dir = blocks_dir
        self.gens_dir = gens_dir

        try:
            with MC_MATERIALS_PATH.open('rb') as f:
                self.materials_data = pickle.load(f)
        except (FileNotFoundError, EOFError):
            self.materials_data = {}

        try:
            with MC_ENTITY_ID_MAP_PATH.open('rb') as f:
                self.entity_data = pickle.load(f)
        except (FileNotFoundError, EOFError):
            self.entity_data = {}

        self.COLORS = {
            "Block": 160,
            "Item": 50,
            "Entity": "#5b5ba5",
            "Picker": 230
        }

        self.WOOD_TYPES = ["OAK", "SPRUCE", "BIRCH", "JUNGLE", "ACACIA", "DARK_OAK",
                          "MANGROVE", "CHERRY", "PALE_OAK", "BAMBOO", "CRIMSON", "WARPED"]

        self.COLORS_LIST = ["WHITE", "ORANGE", "MAGENTA", "LIGHT_BLUE", "YELLOW", "LIME",
                           "PINK", "GRAY", "LIGHT_GRAY", "CYAN", "PURPLE", "BLUE",
                           "BROWN", "GREEN", "RED", "BLACK"]

        self.VARIANT_MAP = {
            'WOOD': {
                'id': 'picker_wood_types',
                'label': 'Wood Type',
                'options': [(self._normalize_name(w), w) for w in self.WOOD_TYPES],
                'input_type': 'MinecraftWood',
                'shadow': 'picker_wood_types'
            },
            'COLOR': {
                'id': 'picker_colours',
                'label': 'Color',
                'options': [(self._normalize_name(c), c) for c in self.COLORS_LIST],
                'input_type': 'MinecraftColour',
                'shadow': 'picker_colours'
            }
        }

        self.ENTITY_GROUPS = {
            "passive_mobs": ["ALLAY", "ARMADILLO", "AXOLOTL", "BAT", "CAMEL", "CAT", "CHICKEN", "COD", "COW", "DONKEY", "FOX", "FROG", "GLOW_SQUID", "HORSE", "MOOSHROOM", "MULE", "OCELOT", "PANDA", "PARROT", "PIG", "POLAR_BEAR", "PUFFERFISH", "RABBIT", "SALMON", "SHEEP", "SNIFFER", "SQUID", "STRIDER", "TADPOLE", "TROPICAL_FISH", "TURTLE", "VILLAGER", "WANDERING_TRADER", "WOLF"],
            "hostile_mobs": ["BLAZE", "BOGGED", "BREEZE", "CAVE_SPIDER", "CREAKING", "CREEPER", "DROWNED", "ELDER_GUARDIAN", "ENDERMAN", "ENDERMITE", "EVOKER", "GHAST", "GUARDIAN", "HOGLIN", "HUSK", "ILLUSIONER", "MAGMA_CUBE", "PHANTOM", "PIGLIN", "PIGLIN_BRUTE", "PILLAGER", "RAVAGER", "SHULKER", "SILVERFISH", "SKELETON", "SLIME", "SPIDER", "STRAY", "VEX", "VINDICATOR", "WARDEN", "WITCH", "WITHER", "WITHER_SKELETON", "ZOGLIN", "ZOMBIE", "ZOMBIE_VILLAGER", "ZOMBIFIED_PIGLIN"],
            "minecarts": ["MINECART", "CHEST_MINECART", "COMMAND_BLOCK_MINECART", "FURNACE_MINECART", "HOPPER_MINECART", "SPAWNER_MINECART", "TNT_MINECART"],
            "projectiles": ["ARROW", "EGG", "ENDER_PEARL", "EXPERIENCE_BOTTLE", "FIREBALL", "FIREWORK_ROCKET", "SNOWBALL", "TRIDENT"],
            "utility": ["ARMOR_STAND", "END_CRYSTAL", "EXPERIENCE_ORB", "FALLING_BLOCK", "ITEM_FRAME", "PAINTING", "PLAYER"]
        }

    def _normalize_name(self, name: str) -> str:
        return name.replace('_', ' ').title()

    def build_all(self):
        self.build_blocks()
        self.build_items()
        self.build_entities()

    def _generate_base_pickers(self) -> Dict[str, str]:
        """Generates the shared Wood and Color pickers used as shadows."""
        js_parts = []
        py_parts = []
        for key, info in self.VARIANT_MAP.items():
            res = BlocklyGenerator.generate_picker(
                block_type=info['id'],
                label=info['label'],
                options=info['options'],
                output_type=info['input_type'],
                colour=self.COLORS["Picker"]
            )
            js_parts.append(res['js'])
            py_parts.append(res['py'])
        return {"js": "\n".join(js_parts), "py": "\n".join(py_parts)}

    def build_blocks(self):
        """Processes materials flagged as 'is_block' and generates the Blocks category."""
        js_defs, py_gens, xml_snippets = [], [], []

        # Include base pickers in the blocks file so they are loaded
        base = self._generate_base_pickers()
        js_defs.append(base['js']); py_gens.append(base['py'])

        blocks = [k for k, v in self.materials_data.items() if v.get('is_block')]
        templates, consumed = self._classify_variants(blocks)
        for template, info in templates.items():
            block_type = f"mc_block_{template.lower().replace('{}_', '').replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(
                block_type=block_type, label=info["label"], input_name="VARIANT",
                input_type=info["input_type"], output_type="Block", colour=self.COLORS["Block"],
                template=template, shadow_block=info["shadow"]
            )
            js_defs.append(res['js']); py_gens.append(res['py']); xml_snippets.append(res['xml'])

        remaining = sorted(list(set(blocks) - consumed))
        if remaining:
            picker_res = BlocklyGenerator.generate_picker(
                block_type="mc_block_picker_general", label="Other Blocks",
                options=[(self._normalize_name(m), m) for m in remaining],
                output_type="Block", colour=self.COLORS["Picker"]
            )
            js_defs.append(picker_res['js']); py_gens.append(picker_res['py']); xml_snippets.append(picker_res['xml'])

        self._write_output("blocks", js_defs, py_gens)
        BlocklyGenerator.update_toolbox(f'<category name="Blocks" colour="{self.COLORS["Block"]}">{"".join(xml_snippets)}</category>', self.toolbox_path)

    def build_items(self):
        """Processes materials flagged as 'is_item' and generates the Items category."""
        js_defs, py_gens, xml_snippets = [], [], []

        # We also need base pickers here if this category is loaded independently or if items use variants
        base = self._generate_base_pickers()
        js_defs.append(base['js']); py_gens.append(base['py'])

        # Filter for everything that is an item. Many blocks are also items (e.g. OAK_PLANKS).
        items = [k for k, v in self.materials_data.items() if v.get('is_item')]

        templates, consumed = self._classify_variants(items)
        for template, info in templates.items():
            block_type = f"mc_item_{template.lower().replace('{}_', '').replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(
                block_type=block_type, label=info["label"], input_name="VARIANT",
                input_type=info["input_type"], output_type="Item", colour=self.COLORS["Item"],
                template=template, shadow_block=info["shadow"]
            )
            js_defs.append(res['js']); py_gens.append(res['py']); xml_snippets.append(res['xml'])

        remaining = sorted(list(set(items) - consumed))
        if remaining:
            picker_res = BlocklyGenerator.generate_picker(
                block_type="mc_item_picker_general", label="Other Items",
                options=[(self._normalize_name(m), m) for m in remaining],
                output_type="Item", colour=self.COLORS["Picker"]
            )
            js_defs.append(picker_res['js']); py_gens.append(picker_res['py']); xml_snippets.append(picker_res['xml'])

        self._write_output("items", js_defs, py_gens)
        BlocklyGenerator.update_toolbox(f'<category name="Items" colour="{self.COLORS["Item"]}">{"".join(xml_snippets)}</category>', self.toolbox_path)

    def build_entities(self):
        """Processes entity data and generates the Entities category."""
        js_defs, py_gens, xml_snippets = [], [], []
        for group_name, members in self.ENTITY_GROUPS.items():
            options = [(self._normalize_name(e), e) for e in sorted(members) if e in self.entity_data]
            if not options: continue
            block_type = f"mc_entity_picker_{group_name.lower()}"
            res = BlocklyGenerator.generate_picker(block_type=block_type, label=self._normalize_name(group_name),
                options=options, output_type="Entity", colour=self.COLORS["Entity"])
            js_defs.append(res['js']); py_gens.append(res['py']); xml_snippets.append(res['xml'])
        self._write_output("entities", js_defs, py_gens)
        BlocklyGenerator.update_toolbox(f'<category name="Entities" colour="{self.COLORS["Entity"]}">{"".join(xml_snippets)}</category>', self.toolbox_path)

    def _classify_variants(self, material_list: List[str]) -> Tuple[Dict[str, Dict], Set[str]]:
        parameterized = {}
        consumed = set()
        suffixes = {}
        for mat in material_list:
            parts = mat.split('_')
            if len(parts) > 1:
                prefix = parts[0]
                suffix = "_".join(parts[1:])
                if prefix in self.WOOD_TYPES:
                    suffixes.setdefault(f"{{}}_{suffix}", {"mats": [], "type": "WOOD"}).get("mats").append(mat)
                elif prefix in self.COLORS_LIST:
                    suffixes.setdefault(f"{{}}_{suffix}", {"mats": [], "type": "COLOR"}).get("mats").append(mat)
        for template, info in suffixes.items():
            if len(info["mats"]) > 3:
                var_info = self.VARIANT_MAP[info["type"]]
                parameterized[template] = {
                    "template": template, "input_type": var_info["input_type"],
                    "shadow": var_info["shadow"], "label": self._normalize_name(template.replace('{}_', ''))
                }
                consumed.update(info["mats"])
        return parameterized, consumed

    def _write_output(self, name: str, js: List[str], py: List[str]):
        js_content = f"export function define{name.title()}Blocks(Blockly) {{\n" + "\n".join(js) + "\n}"
        py_content = f"export function define{name.title()}Generators(pythonGenerator) {{\n" + "\n".join(py) + "\n}"
        (self.blocks_dir / f"{name}.mjs").write_text(js_content, encoding='utf-8')
        (self.gens_dir / f"{name}.mjs").write_text(py_content, encoding='utf-8')

if __name__ == "__main__":
    builder = RegistryBuilder(toolbox_path=MC_APP_SRC_DIR / 'toolbox.xml', blocks_dir=MC_APP_SRC_DIR / 'blocks', gens_dir=MC_APP_SRC_DIR / 'generators' / 'python')
    builder.build_all()