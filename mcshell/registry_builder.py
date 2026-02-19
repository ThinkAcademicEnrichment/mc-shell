import pickle
import json
import re
from pathlib import Path
from typing import Dict, Any, List, Set, Tuple

from mcshell.constants import *
from blockapily import BlocklyGenerator

# Import Action Classes
try:
    from mcshell.serveractions import ServerActions
    HAS_SERVER_ACTIONS = True
except ImportError:
    HAS_SERVER_ACTIONS = False

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

        # --- Type and Shadow Mapping for Action Classes ---
        self.TYPE_MAP = {
            'str': 'String',
            'int': 'Number',
            'float': 'Number',
            'bool': 'Boolean',
            'Vec3': 'Vec3',
            'Matrix3': 'Matrix3',
            'Effect': 'Effect',
            'TitleAction': 'TitleAction'
        }

        self.SHADOW_MAP = {
            'math_number': '<shadow type="math_number"><field name="NUM">1</field></shadow>',
            'text': '<shadow type="text"><field name="TEXT"></field></shadow>',
            'minecraft_picker_world': '<shadow type="mc_item_picker_general"></shadow>',
            'minecraft_entity_picker_passive_mobs': '<shadow type="mc_entity_picker_passive_mobs"></shadow>',
            'picker_effect': '<shadow type="picker_effect"><field name="VALUE">speed</field></shadow>',
            'picker_titleaction': '<shadow type="picker_titleaction"><field name="VALUE">title</field></shadow>'
        }

        self.ACTION_CLASSES = []
        if HAS_SERVER_ACTIONS:
            self.ACTION_CLASSES.append((ServerActions, "ServerActions", "#252E28"))

        # --- Action Specific Pickers ---
        self.EFFECTS = [
            ("Speed", "speed"), ("Slowness", "slowness"), ("Haste", "haste"),
            ("Strength", "strength"), ("Instant Health", "instant_health"),
            ("Instant Damage", "instant_damage"), ("Jump Boost", "jump_boost"),
            ("Regeneration", "regeneration"), ("Resistance", "resistance"),
            ("Fire Resistance", "fire_resistance"), ("Water Breathing", "water_breathing"),
            ("Invisibility", "invisibility"), ("Blindness", "blindness"),
            ("Night Vision", "night_vision"), ("Hunger", "hunger"),
            ("Weakness", "weakness"), ("Poison", "poison"), ("Wither", "wither"),
            ("Health Boost", "health_boost"), ("Absorption", "absorption"),
            ("Saturation", "saturation"), ("Glowing", "glowing"),
            ("Levitation", "levitation"), ("Luck", "luck"), ("Unluck", "unluck"),
            ("Slow Falling", "slow_falling"), ("Conduit Power", "conduit_power"),
            ("Dolphins Grace", "dolphins_grace"), ("Bad Omen", "bad_omen"),
            ("Hero of the Village", "hero_of_the_village"), ("Darkness", "darkness")
        ]

        self.TITLE_ACTIONS = [
            ("Main Title", "title"),
            ("Subtitle", "subtitle"),
            ("Action Bar", "actionbar"),
            ("Clear", "clear"),
            ("Reset", "reset")
        ]

        self.ACTION_PICKERS = [
            {
                'id': 'picker_effect',
                'label': 'Effect',
                'options': self.EFFECTS,
                'input_type': 'Effect'
            },
            {
                'id': 'picker_titleaction',
                'label': 'Display Location',
                'options': self.TITLE_ACTIONS,
                'input_type': 'TitleAction'
            }
        ]

        # --- Variant and Group Definitions ---
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
        """Executes the complete build pipeline."""
        self.build_blocks()
        self.build_items()
        self.build_entities()
        self.build_actions()
        self.build_pickers_category()

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

        self._write_output("blocks", "Blocks", js_defs, py_gens)
        BlocklyGenerator.update_toolbox(f'<category name="Blocks" colour="{self.COLORS["Block"]}">{"".join(xml_snippets)}</category>', self.toolbox_path)

    def build_items(self):
        """Processes materials flagged as 'is_item' and generates the Items category."""
        js_defs, py_gens, xml_snippets = [], [], []

        base = self._generate_base_pickers()
        js_defs.append(base['js']); py_gens.append(base['py'])

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

        self._write_output("items", "Items", js_defs, py_gens)
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

        self._write_output("entities", "Entities", js_defs, py_gens)
        BlocklyGenerator.update_toolbox(f'<category name="Entities" colour="{self.COLORS["Entity"]}">{"".join(xml_snippets)}</category>', self.toolbox_path)

    def build_actions(self):
        """Reflects over MCActionsBase derived classes and generates their blocks."""

        # 1. Generate action-specific pickers
        action_pickers_js = []
        action_pickers_py = []
        for picker_info in self.ACTION_PICKERS:
            res = BlocklyGenerator.generate_picker(
                block_type=picker_info['id'],
                label=picker_info['label'],
                options=picker_info['options'],
                output_type=picker_info['input_type'],
                colour=self.COLORS["Picker"]
            )
            action_pickers_js.append(res['js'])
            action_pickers_py.append(res['py'])

        for i, (cls, export_name, color) in enumerate(self.ACTION_CLASSES):
            generator = BlocklyGenerator(
                cls=cls,
                type_map=self.TYPE_MAP,
                shadow_map=self.SHADOW_MAP,
                category_colour=color
            )

            blocks_js, generators_py, category_xml = generator.generate()

            # Inject the action pickers into the very first action file generated
            # to ensure they are available in the workspace without duplicating code heavily
            js_out = action_pickers_js + [blocks_js] if i == 0 else [blocks_js]
            py_out = action_pickers_py + [generators_py] if i == 0 else [generators_py]

            self._write_output(export_name, export_name, js_out, py_out)
            BlocklyGenerator.update_toolbox(category_xml, self.toolbox_path)

    def build_pickers_category(self):
        """Creates a dedicated category in the toolbox for all utility pickers."""
        xml_snippets = []

        # Add Base Variant Pickers (Wood Type, Color)
        for info in self.VARIANT_MAP.values():
            xml_snippets.append(f'<block type="{info["id"]}"></block>')

        # Add Action Pickers (Effect, Display Location)
        for picker_info in self.ACTION_PICKERS:
            xml_snippets.append(f'<block type="{picker_info["id"]}"></block>')

        # Inject the new category into toolbox.xml
        BlocklyGenerator.update_toolbox(
            f'<category name="Pickers" colour="{self.COLORS["Picker"]}">{"".join(xml_snippets)}</category>',
            self.toolbox_path
        )

    def _classify_variants(self, material_list: List[str]) -> Tuple[Dict[str, Dict], Set[str]]:
        """Identifies templates and consumed materials."""
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

    def _write_output(self, file_name: str, export_name: str, js: List[str], py: List[str]):
        """Helper to write JS and Python generator files with precise export naming."""
        js_content = f"import {{ MCED }} from \"../lib/constants.mjs\";\n\nexport function define{export_name}Blocks(Blockly) {{\n" + "\n".join(js) + "\n}"
        py_content = f"export function define{export_name}Generators(pythonGenerator) {{\n" + "\n".join(py) + "\n}"

        (self.blocks_dir / f"{file_name}.mjs").write_text(js_content, encoding='utf-8')
        (self.gens_dir / f"{file_name}.mjs").write_text(py_content, encoding='utf-8')

if __name__ == "__main__":
    builder = RegistryBuilder(
        toolbox_path=MC_APP_SRC_DIR / 'toolbox.xml',
        blocks_dir=MC_APP_SRC_DIR / 'blocks',
        gens_dir=MC_APP_SRC_DIR / 'generators' / 'python'
    )
    builder.build_all()