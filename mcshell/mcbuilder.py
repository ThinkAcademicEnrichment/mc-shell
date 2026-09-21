from mcshell import MC_SHELL_DIR
from mcshell.constants import *

# --- EXTRACTED CONFIGURATION IMPORT ---
import mcshell.mcconfig as mcc

try:
    from blockapily import BlocklyGenerator, mced_block
except ImportError:
    BlocklyGenerator = None
    print("Warning: blockapily not found. Block generation will be skipped.")

def get_class(class_type, module_name, class_name):
    """Imports a class and forces a reload to capture newly generated code."""
    import importlib
    try:
        module = importlib.import_module(f"mcshell.{class_type}.{module_name}")
        importlib.reload(module) # Ensure fresh load after ApiGenerator runs
        return getattr(module, class_name)
    except (ImportError, AttributeError) as e:
        print(f"Error: could not import {class_name} from {class_type}.{module_name}")
        print(str(e))
        return None

class RegistryBuilder:
    # --- UI & Design Tokens ---
    COLORS = mcc.CAT_COLORS
    TYPE_MAP = mcc.TYPE_MAP
    SHADOW_MAP = mcc.SHADOW_MAP
    DATA_PATHS = mcc.DATA_PATHS
    TIMETYPES = mcc.TIMETYPES
    WEATHERS = mcc.WEATHERS
    DIFFICULTYS = mcc.DIFFICULTYS
    GAMEMODES = mcc.GAMEMODES
    LOCATETYPES = mcc.LOCATETYPES
    METRICS = mcc.METRICS
    AXES = mcc.AXES
    COMPASS = mcc.COMPASS
    QHEADINGS = mcc.QHEADINGS
    QCOMPASS = mcc.QCOMPASS
    TIMES = mcc.TIMES
    STRUCTURES = mcc.STRUCTURES
    BIOMES = mcc.BIOMES
    POIS = mcc.POIS
    GAMERULES = mcc.GAMERULES
    INTEGERGAMERULES = mcc.INTEGERGAMERULES
    EFFECTS = mcc.EFFECTS
    TITLEACTIONS = mcc.TITLEACTIONS
    ACTION_PICKERS = mcc.ACTION_PICKERS
    GENERATED_ACTION_PICKERS = mcc.GENERATED_ACTION_PICKERS

    # now injected in build.by
    VARIANT_CONFIG = None
    MATERIAL_PICKER_GROUPS = None
    ENTITY_GROUPS = None

    # sometimes we make Actions classes for local utilities
    GENERATED_ACTIONS_BLACKLIST = ['AdminActions']

    # def __init__(self, toolbox_path: pathlib.Path, blocks_dir: pathlib.Path, gens_dir: pathlib.Path, materials_path: pathlib.Path, entity_id_map_path: pathlib.Path):
    def __init__(self, toolbox_path: pathlib.Path, blocks_dir: pathlib.Path, gens_dir: pathlib.Path):
        self.toolbox_path = toolbox_path
        self.toolbox_snippet_dir= self.toolbox_path.parent.joinpath('snippets')

        self.blocks_dir = blocks_dir
        self.gens_dir = gens_dir
        self.generated_block_pickers = [] # <--- NEW: Tracks exactly what pickers get generated

        self.GENERATED_ACTION_CLASSES = []
        self.ACTION_CLASSES = []
        self.SHAPE_CLASSES = []
        if BlocklyGenerator is not None:
            classes = []
            yaml_path = MC_DATA_DIR / "mcjuice_api.yaml"
            if yaml_path.exists():
                try:
                    with open(yaml_path, 'r') as f:
                        schema = yaml.safe_load(f)

                        # 1. Discover standard Namespaces (Player, World, Chat)
                        for ns in schema.get('namespaces', {}).keys():
                            class_name = f"{ns.capitalize()}Actions"
                            label = f"{ns.capitalize()}"
                            color = self.COLORS.get(label, self.COLORS["World"])
                            classes.append((get_class("actions","generated_actions", class_name), label, color))


                        # 2. Discover generated Event Actions
                        if schema.get('events') and any('blockly' in e for e in schema['events']):
                            classes.append((get_class("actions","generated_actions", "EventActions"), "Event", self.COLORS.get("Events", "#D68C45")))

                except Exception as e:
                    print(f"Warning: Failed to auto-discover generated classes: {e}")


            self.GENERATED_ACTION_CLASSES.extend([(c, n, col) for c, n, col in classes if c is not None and not c.__name__ in self.GENERATED_ACTIONS_BLACKLIST])

            self.ACTION_CLASSES= [
                get_class("actions","qactions", "QActions"),
                get_class("actions","qturtleactions", "QTurtleActions"),
                get_class("actions","digitalsetactions", "DigitalSetActions"),
                get_class("actions","setactions", "SetActions"),
                get_class("actions","digitalgeometryactions", "DigitalGeometryActions"),
                get_class("actions","selectionactions", "SelectionActions"),
                get_class("actions","serveractions", "ServerActions"),
                get_class("actions","bedwarsactions", "BedWarsActions"),
            ]

            self.SHAPE_CLASSES = [
                get_class("shapes","qturtleshapes", "QTurtleShapes"),
                get_class("shapes","lsystemshapes", "LSystemShapes"),
            ]


    def _normalize_name(self, name: str) -> str:
        return name.replace('_', ' ').title()

    def build_all(self):
        if BlocklyGenerator is None: return

        self.ensure_toolbox(clean_toolbox=True)

        self.build_blocks()
        self.build_items()
        self.build_entities()

        self.build_actions()
        self.build_shapes()

        self.build_pickers_category()
        self.build_pickers_module()

        self.build_action_classes_export()
        self.export_taxonomy()
        
    def build_action_classes_export(self):
        class_names = [cls.__name__ for cls in self.SHAPE_CLASSES + self.ACTION_CLASSES] + [cls.__name__ for cls, _, _ in self.GENERATED_ACTION_CLASSES]
        js_content = f"export const ACTION_CLASSES = {class_names!r};\n"
        out_path = self.gens_dir / "action_classes.mjs"
        out_path.write_text(js_content, encoding='utf-8')
        return js_content

    def _generate_base_pickers(self) -> dict:
        js, py = [], []
        for info in self.VARIANT_CONFIG.values():
            options = [(self._normalize_name(p), p) for p in info['prefixes']]
            res = BlocklyGenerator.generate_picker(info['id'], info['label'], options, info['input_type'], self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py'])
        return {"js": "\n".join(js), "py": "\n".join(py)}

    def ensure_toolbox(self, clean_toolbox=False):
        if clean_toolbox:
            self.toolbox_path.unlink(missing_ok=True)
        if not self.toolbox_path.exists():
            template = self.toolbox_path.parent / 'toolbox_template.xml'
            if template.exists():
                self.toolbox_path.write_text(template.read_text())

    def _classify_variants(self, material_list):
        parameterized = {}
        consumed = set()
        classified_groups = {}
        suffix_map = {}

        for mat in material_list:
            matched = False
            for var_key, var_info in self.VARIANT_CONFIG.items():
                if matched: break
                for prefix in var_info["prefixes"]:
                    if mat.startswith(f"{prefix}_"):
                        suffix = mat[len(prefix)+1:]
                        group_key = (var_key, suffix)

                        if group_key not in classified_groups:
                            classified_groups[group_key] = {"mats": [], "type": var_key, "variants": [], "suffix": suffix}

                        classified_groups[group_key]["mats"].append(mat)
                        classified_groups[group_key]["variants"].append(self._normalize_name(prefix))
                        matched = True
                        break

        for (var_key, suffix), info in classified_groups.items():
            if len(info["mats"]) > 3:
                var_config = self.VARIANT_CONFIG[info["type"]]
                template_name = f"{var_key}_{suffix}"
                label = f"{suffix}"
                python_template = f"{{}}_{suffix}"

                parameterized[template_name] = {
                    "template": python_template,
                    "input_type": var_config["input_type"],
                    "shadow": var_config["shadow"],
                    # "label": self._normalize_name(template_name),
                    "label": self._normalize_name(label),
                    "available_variants": sorted(info["variants"]),
                    "mats": info["mats"] # <--- NEW: Explicitly output the raw underlying materials
                }
                consumed.update(info["mats"])

                if suffix not in suffix_map:
                    suffix_map[suffix] = []
                suffix_map[suffix].append(template_name)

        return parameterized, consumed, suffix_map

    def build_blocks(self, write_static_files=True):
        self.generated_block_pickers = [] # Reset block picker tracking
        js, py, xml = [], [], []
        
        # NEW: Track JSON outputs for the snippet and the Enum class
        json_blocks = []
        block_enums = {}
        
        base = self._generate_base_pickers()
        js.append(base['js']); py.append(base['py'])

        # a material should be classified as a block only if it is not also an item
        blocks = [k for k, v in self.materials_data.items() if (v.get('is_block') and  v.get('is_item'))]
        templates, consumed, suffix_map = self._classify_variants(blocks)

        for t_key, info in templates.items():
            b_type = f"mc_block_{t_key.lower().replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(
                b_type, info["label"], "VARIANT", info["input_type"], "Block",
                self.COLORS["Block"], info["template"], info["shadow"]
            )
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_blocks.append(res['json'])
            block_enums[b_type.upper()] = res['json']

        for group_name, members in self.MATERIAL_PICKER_GROUPS.items():
            valid_members = []
            for m in members:
                # 1. Grab Raw Blocks
                if m in blocks:
                    valid_members.append(m)
                # 2. FIX: Dynamically unpack templates (e.g. "LOG") back into raw blocks for the picker!
                if m in suffix_map:
                    for t_key in suffix_map[m]:
                        valid_members.extend(templates[t_key]["mats"])

            # Remove duplicates and ensure everything is actually a block
            valid_members = sorted(list(set([m for m in valid_members if m in blocks])))

            if not valid_members: continue

            b_type = f"mc_block_picker_{group_name.lower()}"
            self.generated_block_pickers.append(b_type) # Track it!

            res = BlocklyGenerator.generate_picker(b_type, self._normalize_name(group_name), [(self._normalize_name(m), m) for m in valid_members], "Block", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_blocks.append(res['json'])
            block_enums[b_type.upper()] = res['json']
            
            consumed.update(valid_members)

        rem = sorted(list(set(blocks) - consumed))
        if rem:
            b_type = "mc_block_picker_general"
            self.generated_block_pickers.append(b_type) # Track fallback picker
            res = BlocklyGenerator.generate_picker(b_type, "Other Blocks", [(self._normalize_name(m), m) for m in rem], "Block", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_blocks.append(res['json'])
            block_enums[b_type.upper()] = res['json']

        if write_static_files:
            self._write_output("blocks", "Blocks", js, py)

        BlocklyGenerator.update_toolbox(f'<category name="Blocks" colour="{self.COLORS["Block"]}">{"".join(xml)}</category>', self.toolbox_path)
        
        # --- NEW: JSON Category Snippet & Enum Class Generation ---
        # 1. Save the Blocks category JSON snippet
        json_category = {
            "kind": "category",
            "name": "Blocks",
            "colour": self.COLORS.get("Block", "#000000"),
            "contents": json_blocks
        }

        self._export_toolbox_json_snippet('Blocks',json_category,'blocks')       

           
        # 2. Build and save the Python Enum-like class
        py_lines = [
            "# AUTO-GENERATED FILE - DO NOT EDIT",
            "class Blocks:",
            '    """Available parameterized blocks and pickers for custom toolboxes."""'
        ]
        
        for attr_name, block_dict in block_enums.items():
            safe_attr = re.sub(r'[^A-Za-z0-9_]', '_', attr_name)
            py_lines.append(f"    {safe_attr} = {block_dict}")

        blocks_py_path = MC_SHELL_DIR / 'blockly' / 'blocks.py'
        blocks_py_path.parent.mkdir(parents=True, exist_ok=True)
        blocks_py_path.write_text("\n".join(py_lines), encoding='utf-8')

        return js, py 


    def build_items(self, write_static_files=True):
        js, py, xml = [], [], []
        
        # NEW: Track JSON outputs for the snippet and the Enum class
        json_items = []
        item_enums = {}
        
        items = [k for k, v in self.materials_data.items() if v.get('is_item') and not v.get('is_block')]
        templates, consumed, suffix_map = self._classify_variants(items)

        for t_key, info in templates.items():
            b_type = f"mc_item_{t_key.lower().replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(
                b_type, info["label"], "VARIANT", info["input_type"], "Item",
                self.COLORS["Item"], info["template"], info["shadow"]
            )
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_items.append(res['json'])
            item_enums[b_type.upper()] = res['json']

        for group_name, members in self.MATERIAL_PICKER_GROUPS.items():
            valid_members = []
            for m in members:
                # Identical Unpacking Fix for Items
                if m in items:
                    valid_members.append(m)
                if m in suffix_map:
                    for t_key in suffix_map[m]:
                        valid_members.extend(templates[t_key]["mats"])

            valid_members = sorted(list(set([m for m in valid_members if m in items])))

            if not valid_members: continue

            b_type = f"mc_item_picker_{group_name.lower()}"
            res = BlocklyGenerator.generate_picker(b_type, self._normalize_name(group_name), [(self._normalize_name(m), m) for m in valid_members], "Item", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_items.append(res['json'])
            item_enums[b_type.upper()] = res['json']
            
            consumed.update(valid_members)

        rem = sorted(list(set(items) - consumed))
        if rem:
            b_type = "mc_item_picker_general"
            res = BlocklyGenerator.generate_picker(b_type, "Other Items", [(self._normalize_name(m), m) for m in rem], "Item", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_items.append(res['json'])
            item_enums[b_type.upper()] = res['json']

        if write_static_files:
            self._write_output("items", "Items", js, py)
            
        BlocklyGenerator.update_toolbox(f'<category name="Items" colour="{self.COLORS["Item"]}">{"".join(xml)}</category>', self.toolbox_path)
        
        # --- NEW: JSON Category Snippet & Enum Class Generation ---
        import json
        import re
        
        # 1. Save the Items category JSON snippet
        json_category = {
            "kind": "category",
            "name": "Items",
            "colour": self.COLORS.get("Item", "#000000"),
            "contents": json_items
        }
        
        self._export_toolbox_json_snippet('Items',json_category,'items')       

                    
        # 2. Build and save the Python Enum-like class
        py_lines = [
            "# AUTO-GENERATED FILE - DO NOT EDIT",
            "class Items:",
            '    """Available parameterized blocks and pickers for custom toolboxes."""'
        ]
        
        for attr_name, block_dict in item_enums.items():
            safe_attr = re.sub(r'[^A-Za-z0-9_]', '_', attr_name)
            py_lines.append(f"    {safe_attr} = {block_dict}")

        items_py_path = MC_SHELL_DIR / 'blockly' / 'items.py'
        items_py_path.parent.mkdir(parents=True, exist_ok=True)
        items_py_path.write_text("\n".join(py_lines), encoding='utf-8')

        return js, py

    def build_entities(self, write_static_files=True):
        js, py, xml = [], [], []
        
        # NEW: Track JSON outputs for the snippet and the Enum class
        json_entities = []
        entity_enums = {}
        
        for group, members in self.ENTITY_GROUPS.items():
            opts = [(self._normalize_name(e), e) for e in sorted(members) if e in self.entity_data]
            if not opts: continue
            
            b_type = f"mc_entity_picker_{group}"
            res = BlocklyGenerator.generate_picker(b_type, self._normalize_name(group), opts, "Entity", self.COLORS["Entity"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
            
            # Track JSON representations
            json_entities.append(res['json'])
            entity_enums[b_type.upper()] = res['json']

        if write_static_files:
            self._write_output("entities", "Entities", js, py)

        BlocklyGenerator.update_toolbox(f'<category name="Entities" colour="{self.COLORS["Entity"]}">{"".join(xml)}</category>', self.toolbox_path, append_separator=False)
        
        # --- NEW: JSON Category Snippet & Enum Class Generation ---
        import json
        import re
        
        # 1. Save the Entities category JSON snippet
        json_category = {
            "kind": "category",
            "name": "Entities",
            "colour": self.COLORS.get("Entity", "#000000"),
            "contents": json_entities
        }
        self._export_toolbox_json_snippet("Entities",json_category,"entities") 
                   
        # 2. Build and save the Python Enum-like class
        py_lines = [
            "# AUTO-GENERATED FILE - DO NOT EDIT",
            "class Entities:",
            '    """Available entity pickers for custom toolboxes."""'
        ]
        
        for attr_name, block_dict in entity_enums.items():
            safe_attr = re.sub(r'[^A-Za-z0-9_]', '_', attr_name)
            py_lines.append(f"    {safe_attr} = {block_dict}")

        entities_py_path = MC_SHELL_DIR / 'blockly' / 'entities.py'
        entities_py_path.parent.mkdir(parents=True, exist_ok=True)
        entities_py_path.write_text("\n".join(py_lines), encoding='utf-8')

        return js, py

    def _export_toolbox_json_snippet(self,cls_name,json_string,snippet_dir='actions'):
        json_snippet_path = self.toolbox_snippet_dir.joinpath(f'{snippet_dir}/{cls_name}.json')
        json_snippet_path.parent.mkdir(exist_ok=True)
        json.dump(json_string, json_snippet_path.open('w'), indent=4)

    def _export_toolbox_xml_snippet(self,cls_name, xml_string):
        import xml.etree.ElementTree as ET

        # Parse the string into an Element object
        root = ET.fromstring(xml_string)

        # Indent the tree in-place (default is 2 spaces)
        ET.indent(root, space="    ")

        # Convert back to a pretty-printed string
        pretty_xml = ET.tostring(root, encoding="utf-8").decode("utf-8")
        xml_snippet_path = self.toolbox_snippet_dir.joinpath(f'{cls_name}.xml')
        xml_snippet_path.parent.mkdir(exist_ok=True)
        xml_snippet_path.write_text(pretty_xml)

    def build_actions(self):
        pick_js, pick_py = [], []
        for p in self.GENERATED_ACTION_PICKERS:
            res = BlocklyGenerator.generate_picker(p['id'], p['label'], p['options'], p['input_type'], self.COLORS["Picker"])
            pick_js.append(res['js']); pick_py.append(res['py'])

        for i, (cls, name, color) in enumerate(self.GENERATED_ACTION_CLASSES):
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP, color, name)
            b_js, p_py, c_xml, c_json = gen.generate()
            js_out = pick_js + [b_js] if i == 0 else [b_js]
            py_out = pick_py + [p_py] if i == 0 else [p_py]
            self._write_output(cls.__name__, cls.__name__, js_out, py_out)

            # fragile
            append_separator = False
            if i == len(self.GENERATED_ACTION_CLASSES) -1:
                append_separator = True

            # eventually this will go away
            BlocklyGenerator.update_toolbox(c_xml, self.toolbox_path,append_separator=append_separator)
            self._export_toolbox_json_snippet(cls.__name__, c_json)




        pick_js, pick_py = [], []
        for p in self.ACTION_PICKERS:
            res = BlocklyGenerator.generate_picker(p['id'], p['label'], p['options'], p['input_type'], self.COLORS["Picker"])
            pick_js.append(res['js']); pick_py.append(res['py'])


        for i, cls in enumerate(self.ACTION_CLASSES):
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP)
            b_js, p_py, c_xml,c_json = gen.generate()
            js_out = pick_js + [b_js] if i == 0 else [b_js]
            py_out = pick_py + [p_py] if i == 0 else [p_py]
            self._write_output(cls.__name__, cls.__name__, js_out, py_out)

            # this is so fragile
            separated_action_classes = ['ServerActions','DigitalGeometryActions']
            append_separator = False
            if i < len(self.ACTION_CLASSES) - 1 and self.ACTION_CLASSES[i+1].__name__ in separated_action_classes:
                append_separator = True
            elif i == len(self.ACTION_CLASSES) - 1:
                append_separator = True

            # eventually this will go away
            BlocklyGenerator.update_toolbox(c_xml, self.toolbox_path,append_separator=append_separator)
            self._export_toolbox_json_snippet(cls.__name__, c_json)

    def build_shapes(self):
        for i, cls in enumerate(self.SHAPE_CLASSES):
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP)
            b_js, p_py, c_xml,c_json = gen.generate()
            js_out = [b_js]
            py_out = [p_py]
            self._write_output(cls.__name__, cls.__name__, js_out, py_out)

            # eventually this will go away
            BlocklyGenerator.update_toolbox(c_xml, self.toolbox_path,append_separator=False)
            self._export_toolbox_json_snippet(cls.__name__, c_json,'shapes')


    def build_pickers_category(self):
        """
        Safely builds the Pickers category in both XML and JSON formats.
        """
        # 1. Gather all dynamic picker types
        picker_types = [info["id"] for info in self.VARIANT_CONFIG.values()]
        picker_types += [p["id"] for p in self.ACTION_PICKERS]
        picker_types += [p["id"] for p in self.GENERATED_ACTION_PICKERS]
        picker_types += getattr(self, 'generated_block_pickers', [])

        # 2. Legacy XML generation
        xml_blocks = [f'<block type="{b_type}"></block>' for b_type in picker_types]
        BlocklyGenerator.update_toolbox(
            f'<category name="Pickers" colour="{self.COLORS["Picker"]}">{"".join(xml_blocks)}</category>', 
            self.toolbox_path
        )

        # 3. New JSON Snippet Generation
        json_category = {
            "kind": "category",
            "name": "Pickers",
            "colour": self.COLORS.get("Picker", "#000000"),
            "contents": [{"kind": "block", "type": b_type} for b_type in picker_types]
        }
        
        self._export_toolbox_json_snippet("Pickers", json_category,'pickers')

        
    def build_pickers_module(self):
        """
        Builds the legacy XML Pickers category and auto-generates a Python class 
        for granular JSON toolbox picker selection.
        """
        # 1. Gather all dynamic picker types
        picker_types = [info["id"] for info in self.VARIANT_CONFIG.values()]
        picker_types += [p["id"] for p in self.ACTION_PICKERS]
        picker_types += [p["id"] for p in self.GENERATED_ACTION_PICKERS]
        picker_types += getattr(self, 'generated_block_pickers', [])
        
        # Deduplicate and sort for clean output
        picker_types = sorted(list(set(picker_types)))

        # 2. Legacy XML generation
        xml_blocks = [f'<block type="{b_type}"></block>' for b_type in picker_types]
        BlocklyGenerator.update_toolbox(
            f'<category name="Pickers" colour="{self.COLORS["Picker"]}">{"".join(xml_blocks)}</category>', 
            self.toolbox_path
        )

        # 3. Generate the Python Enum-like class
        import re
        py_lines = [
            "# AUTO-GENERATED FILE - DO NOT EDIT",
            "class Pickers:",
            '    """Available picker blocks for custom toolbox configurations."""'
        ]
        
        for p_type in picker_types:
            # Clean the ID to create a valid, uppercase Python attribute name
            attr_name = re.sub(r'[^A-Za-z0-9_]', '_', p_type).upper()
            
            # The attribute holds the literal JSON block dictionary
            block_dict = {"kind": "block", "type": p_type}
            py_lines.append(f"    {attr_name} = {block_dict}")

        # 4. Write the Python file to the blockly namespace
        # (Assuming you have access to your project's root or MC_TOOLBOX_DIR parent)
        pickers_py_path = MC_SHELL_DIR / 'blockly' / 'pickers.py'
        pickers_py_path.parent.mkdir(parents=True, exist_ok=True)
        
        pickers_py_path.write_text("\n".join(py_lines), encoding='utf-8')

    def export_taxonomy(self):
        taxonomy = {"Block": [], "Item": [], "Entity": []}

        for p in self.ACTION_PICKERS:
            taxonomy[p['input_type']] = [{"name": opt[0], "value": opt[1]} for opt in p['options']]

        def build_category(groups_dict, all_items, category_key):
            parameterized, consumed, suffix_map = self._classify_variants(all_items)
            global_added_templates = set()

            for group_name, members in groups_dict.items():
                group_out = {"name": self._normalize_name(group_name), "items": []}

                for m in members:
                    if m in all_items and m not in consumed:
                        group_out["items"].append({"name": self._normalize_name(m), "value": m})
                    elif m in suffix_map:
                        for t_key in suffix_map[m]:
                            if t_key not in global_added_templates:
                                t_info = parameterized[t_key]
                                group_out["items"].append({
                                    "name": t_info["label"],
                                    "template": t_info["template"],
                                    "variants": t_info["available_variants"],
                                    "currentVariant": t_info["available_variants"][0] if t_info["available_variants"] else ""
                                })
                                global_added_templates.add(t_key)

                if group_out["items"]:
                    taxonomy[category_key].append(group_out)

            other_items = []
            rem = sorted(list(set(all_items) - consumed))
            grouped_raw = set(item for sublist in groups_dict.values() for item in sublist)
            rem = [x for x in rem if x not in grouped_raw]

            for m in rem:
                other_items.append({"name": self._normalize_name(m), "value": m})

            leftover_templates = set(parameterized.keys()) - global_added_templates
            for t_key in sorted(leftover_templates):
                t_info = parameterized[t_key]
                other_items.append({
                    "name": t_info["label"],
                    "template": t_info["template"],
                    "variants": t_info["available_variants"],
                    "currentVariant": t_info["available_variants"][0] if t_info["available_variants"] else ""
                })

            if other_items:
                other_items.sort(key=lambda x: x["name"])
                taxonomy[category_key].append({
                    "name": f"Other {category_key}s",
                    "items": other_items
                })

        blocks = [k for k, v in self.materials_data.items() if v.get('is_block')]
        build_category(self.MATERIAL_PICKER_GROUPS, blocks, "Block")

        items = [k for k, v in self.materials_data.items() if v.get('is_item')]
        build_category(self.MATERIAL_PICKER_GROUPS, items, "Item")

        # entities = [k for k in self.entity_data.keys()]
        build_category(self.ENTITY_GROUPS, self.entity_data, "Entity")

        out_path = MC_DATA_DIR / "taxonomy.json"
        with open(out_path, "w") as f:
            json.dump(taxonomy, f, indent=2)
        print(f"Exported UI Taxonomy successfully to {out_path}")
        return taxonomy

    def _write_output(self, file_name, export_name, js, py):
        header = 'import { MCED } from "../lib/constants.mjs";\n\n'
        js_c = f"{header}export function define{export_name}Blocks(Blockly) {{\n" + "\n".join(js) + "\n}"
        py_c = f"export function define{export_name}Generators(pythonGenerator) {{\n" + "\n".join(py) + "\n}"
        self.blocks_dir.mkdir(parents=True, exist_ok=True)
        self.gens_dir.mkdir(parents=True, exist_ok=True)
        (self.blocks_dir / f"{file_name}.mjs").write_text(js_c, encoding='utf-8')
        (self.gens_dir / f"{file_name}.mjs").write_text(py_c, encoding='utf-8')

class TaxonomyEngine:
    def __init__(self, taxonomy_rules, entity_rules, prismarine_blocks, prismarine_items, prismarine_entities, verbose=False):
        self.taxonomy_rules = taxonomy_rules
        self.entity_rules = entity_rules
        self.raw_blocks = prismarine_blocks
        self.raw_items = prismarine_items
        self.raw_entities = prismarine_entities
        self.verbose = verbose
        
        # Outputs
        self.materials_data = {}
        self.entity_data = {}
        
        self.material_picker_groups = {}
        self.entity_groups = {}
        self.variant_config = {}

    def run(self):
        self._normalize_data()
        self._apply_material_rules()
        self._apply_entity_rules()

        # Generate the flat, sorted list of all known uppercase entities
        entities_data = sorted(list(self.entity_data.keys()))
        
        # Return exactly the 5-tuple your updated workflow expects
        return self.materials_data, entities_data, self.entity_groups, self.material_picker_groups, self.variant_config

    def _normalize_data(self):
        """Stage 1: Merge blocks, items, and entities to Bukkit-style UPPERCASE."""
        for block in self.raw_blocks:
            self.materials_data[block["name"].upper()] = {'is_block': True, 'is_item': False}
            
        for item in self.raw_items:
            name = item["name"].upper()
            if name in self.materials_data:
                self.materials_data[name]['is_item'] = True
            else:
                self.materials_data[name] = {'is_block': False, 'is_item': True}
                
        for entity in self.raw_entities:
            name = entity["name"].upper()
            # Store the full dictionary so we can access attributes like 'category' later
            self.entity_data[name] = entity 

    def _apply_material_rules(self):
        """Stage 2a: Run materials through self.rules."""
        self.misc_materials = []
        self.material_rule_hits = {rule["group"]: 0 for rule in self.taxonomy_rules}

        for rule in self.taxonomy_rules:
            if "exact_list" in rule and isinstance(rule["exact_list"], list):
                rule["exact_list"] = set(rule["exact_list"])

        for mat_name in self.materials_data.keys():
            matched = False
            
            for rule in self.taxonomy_rules:
                if "exclude" in rule and rule["exclude"].match(mat_name):
                    continue

                is_match = False
                prefix = None

                if "exact_list" in rule and mat_name in rule["exact_list"]:
                    is_match = True
                elif "regex" in rule:
                    match = rule["regex"].match(mat_name)
                    if match:
                        is_match = True
                        if rule.get("is_variant"):
                            prefix = match.group(1)

                if is_match:
                    group_name = rule["group"]
                    if group_name not in self.material_picker_groups:
                        self.material_picker_groups[group_name] = []
                        
                    self.material_picker_groups[group_name].append(mat_name)
                    self.material_rule_hits[group_name] += 1
                    
                    if rule.get("is_variant") and prefix:
                        var_type = rule["variant_type"]
                        if var_type not in self.variant_config:
                            self.variant_config[var_type] = {
                                "id": f"picker_{var_type.lower()}_types",
                                "label": rule["label"],
                                "prefixes": set(), 
                                "input_type": rule["input_type"],
                                "shadow": f"picker_{var_type.lower()}_types"
                            }
                        self.variant_config[var_type]["prefixes"].add(prefix)

                    matched = True
                    break 
            
            if not matched:
                if "miscellaneous" not in self.material_picker_groups:
                    self.material_picker_groups["miscellaneous"] = []
                self.material_picker_groups["miscellaneous"].append(mat_name)
                self.misc_materials.append(mat_name)

        for var in self.variant_config.values():
            var["prefixes"] = sorted(list(var["prefixes"]))

    def _apply_entity_rules(self):
        """Stage 2b: Run entities through self.entity_rules."""
        self.misc_entities = []
        self.entity_rule_hits = {rule["group"]: 0 for rule in self.entity_rules}

        for rule in self.entity_rules:
            if "exact_list" in rule and isinstance(rule["exact_list"], list):
                rule["exact_list"] = set(rule["exact_list"])

        for ent_name, ent_attributes in self.entity_data.items():
            matched = False
            
            for rule in self.entity_rules:
                is_match = False

                if "exact_list" in rule and ent_name in rule["exact_list"]:
                    is_match = True
                elif "category_match" in rule and ent_attributes.get("category") == rule["category_match"]:
                    is_match = True
                elif "regex" in rule and rule["regex"].match(ent_name):
                    is_match = True

                if is_match:
                    group_name = rule["group"]
                    if group_name not in self.entity_groups:
                        self.entity_groups[group_name] = []
                        
                    self.entity_groups[group_name].append(ent_name)
                    self.entity_rule_hits[group_name] += 1
                    matched = True
                    break 
            
            if not matched:
                if "other_entities" not in self.entity_groups:
                    self.entity_groups["other_entities"] = []
                self.entity_groups["other_entities"].append(ent_name)
                self.misc_entities.append(ent_name)

        if self.verbose:
            self._print_telemetry()

    def _print_telemetry(self):
        print("\n" + "="*50)
        print(" TAXONOMY ENGINE VERBOSE REPORT")
        print("="*50)
        
        # --- Materials ---
        print(f"\n[ MATERIALS - Total: {len(self.materials_data)} ]")
        for group, hits in self.material_rule_hits.items():
            print(f"  {group:<20} : {hits} items")
        print(f"  {'miscellaneous':<20} : {len(self.misc_materials)} items")
        
        print("\n[ Extracted Variant Prefixes ]")
        for var_type, config in self.variant_config.items():
            preview = ", ".join(config['prefixes'][:3])
            print(f"  {var_type:<10} : {len(config['prefixes']):>2} prefixes -> [{preview}...]")
            
        # --- Entities ---
        print(f"\n[ ENTITIES - Total: {len(self.entity_data)} ]")
        for group, hits in self.entity_rule_hits.items():
            print(f"  {group:<20} : {hits} entities")
        print(f"  {'other_entities':<20} : {len(self.misc_entities)} entities")

        if self.misc_entities:
            print(f"\n[ Uncategorized Entities (First 15 of {len(self.misc_entities)}) ]")
            print("  " + ", ".join(self.misc_entities[:15]))

        print("="*50 + "\n")

class RegistryEngine:
    PRIORITY_FILES = []

    @staticmethod
    def find_export_function(file_path):
        """
        Reads a file and returns the name of the exported 'define' function.
        Assumes one main define function per file.
        """
        content = file_path.read_text(encoding='utf-8')
        # Regex to find: export function defineSomething(...)
        match = re.search(r'export\s+function\s+(define\w+)\s*\(', content)
        if match:
            return match.group(1)
        return None

    def generate_registry(self,target_dir, main_function_name, arg_name):
        """
        Scans directory for .mjs files, extracts functions, and writes registry.mjs
        """
        if not target_dir.exists():
            print(f"Directory not found: {target_dir}")
            return

        definitions = []

        # Get all .mjs files excluding the registry itself
        files = [f for f in target_dir.glob("*.mjs") if f.name != "registry.mjs"]

        # Sort files: Priority files first, then alphabetical
        files.sort(key=lambda f: (
            0 if f.name in self.PRIORITY_FILES else 1,
            f.name
        ))

        for f in files:
            func_name = self.find_export_function(f)
            if func_name:
                definitions.append({
                    "file": f.name,
                    "func": func_name
                })
                # print(f"  Found {func_name} in {f.name}")

        # Generate the JS content
        lines = ["// Auto-generated registry. Do not edit manually."]
        lines.append(f"// Generated by mcbuilder.RegistryEngine\n")

        # 1. Imports
        for d in definitions:
            lines.append(f'import {{ {d["func"]} }} from "./{d["file"]}";')

        lines.append("")

        # 2. Main Register Function
        lines.append(f"export function {main_function_name}({arg_name}) {{")
        for d in definitions:
            lines.append(f"    {d['func']}({arg_name});")
        lines.append("}")

        # Write file
        registry_path = target_dir / "registry.mjs"
        registry_path.write_text("\n".join(lines), encoding='utf-8')
        print(f"✅ Generated {registry_path} with {len(definitions)} modules.")

