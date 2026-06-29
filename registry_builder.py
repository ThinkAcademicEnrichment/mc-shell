from mcshell.constants import *

# --- EXTRACTED CONFIGURATION IMPORT ---
import registry_config as rc

# --- STANDALONE PATH CONFIGURATION ---
BASE_DIR = Path(__file__).parent.resolve()
MC_SHELL_DIR = BASE_DIR / "mcshell"
MC_DATA_DIR = MC_SHELL_DIR / "data"
MC_APP_SRC_DIR = MC_DATA_DIR / "app_src"
MC_JUICE_DIR = BASE_DIR / "mcjuice"
MC_JUICE_SRC_DIR = MC_JUICE_DIR / "src"

# MC_MATERIALS_PATH = MC_DATA_DIR / "materials.pkl"
# MC_ENTITY_ID_MAP_PATH = MC_DATA_DIR / "entity_id_map.pkl"

if str(BASE_DIR) not in sys.path:
    sys.path.append(str(BASE_DIR))

try:
    from blockapily import BlocklyGenerator, mced_block
except ImportError:
    BlocklyGenerator = None
    print("Warning: blockapily not found. Block generation will be skipped.")

def get_action_class(module_name, class_name):
    """Imports a class and forces a reload to capture newly generated code."""
    import importlib
    try:
        module = importlib.import_module(f"mcshell.{module_name}")
        importlib.reload(module) # Ensure fresh load after ApiGenerator runs
        return getattr(module, class_name)
    except (ImportError, AttributeError):
        return None

class RegistryBuilder:
    # --- UI & Design Tokens (Sourced from registry_config.py) ---
    COLORS = rc.CAT_COLORS
    TYPE_MAP = rc.TYPE_MAP
    SHADOW_MAP = rc.SHADOW_MAP
    DATA_PATHS = rc.DATA_PATHS
    TIMETYPES = rc.TIMETYPES
    WEATHERS = rc.WEATHERS
    DIFFICULTYS = rc.DIFFICULTYS
    GAMEMODES = rc.GAMEMODES
    LOCATETYPES = rc.LOCATETYPES
    METRICS = rc.METRICS
    AXES = rc.AXES
    COMPASS = rc.COMPASS
    QHEADINGS = rc.QHEADINGS
    QCOMPASS = rc.QCOMPASS
    TIMES = rc.TIMES
    STRUCTURES = rc.STRUCTURES
    BIOMES = rc.BIOMES
    POIS = rc.POIS
    GAMERULES = rc.GAMERULES
    INTEGERGAMERULES = rc.INTEGERGAMERULES
    EFFECTS = rc.EFFECTS
    TITLEACTIONS = rc.TITLEACTIONS
    ACTION_PICKERS = rc.ACTION_PICKERS
    GENERATED_ACTION_PICKERS = rc.GENERATED_ACTION_PICKERS

    # now injected in build.by
    VARIANT_CONFIG = None
    MATERIAL_PICKER_GROUPS = None
    ENTITY_GROUPS = None

    # sometimes we make Actions classes for local utilities
    GENERATED_ACTIONS_BLACKLIST = ['AdminActions']

    # def __init__(self, toolbox_path: pathlib.Path, blocks_dir: pathlib.Path, gens_dir: pathlib.Path, materials_path: pathlib.Path, entity_id_map_path: pathlib.Path):
    def __init__(self, toolbox_path: pathlib.Path, blocks_dir: pathlib.Path, gens_dir: pathlib.Path):
        self.toolbox_path = toolbox_path
        self.blocks_dir = blocks_dir
        self.gens_dir = gens_dir
        self.generated_block_pickers = [] # <--- NEW: Tracks exactly what pickers get generated

        self.GENERATED_ACTION_CLASSES = []
        self.ACTION_CLASSES = []
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
                            classes.append((get_action_class("generated_actions", class_name), label, color))


                        # 2. Discover generated Event Actions
                        if schema.get('events') and any('blockly' in e for e in schema['events']):
                            classes.append((get_action_class("generated_actions", "EventActions"), "Event", self.COLORS.get("Events", "#D68C45")))

                except Exception as e:
                    print(f"Warning: Failed to auto-discover generated classes: {e}")

            if self.GENERATED_ACTIONS_BLACKLIST:
                print(f"Skipping {','.join(self.GENERATED_ACTIONS_BLACKLIST)} block generation")

            self.GENERATED_ACTION_CLASSES.extend([(c, n, col) for c, n, col in classes if c is not None and not c.__name__ in self.GENERATED_ACTIONS_BLACKLIST])

            classes = [
                (get_action_class("qactions", "QActions"), "Q-Stuff", self.COLORS["Turtle"]),
                (get_action_class("qturtleactions", "QTurtleActions"), "Q-Turtle", self.COLORS["Turtle"]),
                (get_action_class("mcactions", "TurtleShapes"), "Turtle Sets", self.COLORS["Turtle"]),
                (get_action_class("mcactions", "LSystemShapes"), "LSystem Sets", self.COLORS["LSystem"]),
                (get_action_class("digitalsetactions", "DigitalSetActions"), "Digital Set Ops", self.COLORS["Digital Set"]),
                (get_action_class("digitalgeometryactions", "DigitalGeometryActions"), "Digital Geometry", self.COLORS["Geometry"]),
                (get_action_class("serveractions", "ServerActions"), "Server", self.COLORS["Server"]),
            ]

            self.ACTION_CLASSES.extend([(c, n, col) for c, n, col in classes if c is not None])

    def _normalize_name(self, name: str) -> str:
        return name.replace('_', ' ').title()

    def build_all(self):
        if BlocklyGenerator is None: return
        self.ensure_toolbox(clean_toolbox=True)
        self.build_blocks()
        self.build_items()
        self.build_entities()
        self.build_actions()
        self.build_pickers_category()
        self.build_action_classes_export()
        self.export_taxonomy()

    def build_action_classes_export(self):
        class_names = [cls.__name__ for cls, _, _ in self.ACTION_CLASSES + self.GENERATED_ACTION_CLASSES]
        js_content = f"export const ACTION_CLASSES = {class_names!r};\n"
        out_path = self.gens_dir / "action_classes.mjs"
        out_path.write_text(js_content, encoding='utf-8')

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
            template = MC_DATA_DIR / 'toolbox_template.xml'
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

    def build_blocks(self):
        self.generated_block_pickers = [] # Reset block picker tracking
        js, py, xml = [], [], []
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
            consumed.update(valid_members)

        rem = sorted(list(set(blocks) - consumed))
        if rem:
            b_type = "mc_block_picker_general"
            self.generated_block_pickers.append(b_type) # Track fallback picker
            res = BlocklyGenerator.generate_picker(b_type, "Other Blocks", [(self._normalize_name(m), m) for m in rem], "Block", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

        self._write_output("blocks", "Blocks", js, py)
        BlocklyGenerator.update_toolbox(f'<category name="Blocks" colour="{self.COLORS["Block"]}">{"".join(xml)}</category>', self.toolbox_path)

    def build_items(self):
        js, py, xml = [], [], []
        items = [k for k, v in self.materials_data.items() if v.get('is_item') and not v.get('is_block')]
        templates, consumed, suffix_map = self._classify_variants(items)

        for t_key, info in templates.items():
            b_type = f"mc_item_{t_key.lower().replace(' ', '_')}"
            res = BlocklyGenerator.generate_parameterized_block(
                b_type, info["label"], "VARIANT", info["input_type"], "Item",
                self.COLORS["Item"], info["template"], info["shadow"]
            )
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

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
            consumed.update(valid_members)

        rem = sorted(list(set(items) - consumed))
        if rem:
            res = BlocklyGenerator.generate_picker("mc_item_picker_general", "Other Items", [(self._normalize_name(m), m) for m in rem], "Item", self.COLORS["Picker"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])

        self._write_output("items", "Items", js, py)
        BlocklyGenerator.update_toolbox(f'<category name="Items" colour="{self.COLORS["Item"]}">{"".join(xml)}</category>', self.toolbox_path)

    def build_entities(self):
        js, py, xml = [], [], []
        for group, members in self.ENTITY_GROUPS.items():
            opts = [(self._normalize_name(e), e) for e in sorted(members) if e in self.entity_data]
            if not opts: continue
            res = BlocklyGenerator.generate_picker(f"mc_entity_picker_{group}", self._normalize_name(group), opts, "Entity", self.COLORS["Entity"])
            js.append(res['js']); py.append(res['py']); xml.append(res['xml'])
        self._write_output("entities", "Entities", js, py)
        BlocklyGenerator.update_toolbox(f'<category name="Entities" colour="{self.COLORS["Entity"]}">{"".join(xml)}</category>', self.toolbox_path, append_separator=True)

    def build_actions(self):
        pick_js, pick_py = [], []
        for p in self.GENERATED_ACTION_PICKERS:
            res = BlocklyGenerator.generate_picker(p['id'], p['label'], p['options'], p['input_type'], self.COLORS["Picker"])
            pick_js.append(res['js']); pick_py.append(res['py'])

        for i, (cls, name, color) in enumerate(self.GENERATED_ACTION_CLASSES):
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP, color, name)
            b_js, p_py, c_xml = gen.generate()
            js_out = pick_js + [b_js] if i == 0 else [b_js]
            py_out = pick_py + [p_py] if i == 0 else [p_py]
            self._write_output(cls.__name__, cls.__name__, js_out, py_out)

            # fragile
            append_separator = False
            if i == len(self.GENERATED_ACTION_CLASSES) -1:
                append_separator = True

            BlocklyGenerator.update_toolbox(c_xml, self.toolbox_path,append_separator=append_separator)


        pick_js, pick_py = [], []
        for p in self.ACTION_PICKERS:
            res = BlocklyGenerator.generate_picker(p['id'], p['label'], p['options'], p['input_type'], self.COLORS["Picker"])
            pick_js.append(res['js']); pick_py.append(res['py'])

        for i, (cls, name, color) in enumerate(self.ACTION_CLASSES):
            gen = BlocklyGenerator(cls, self.TYPE_MAP, self.SHADOW_MAP, color, name)
            b_js, p_py, c_xml = gen.generate()
            js_out = pick_js + [b_js] if i == 0 else [b_js]
            py_out = pick_py + [p_py] if i == 0 else [p_py]
            self._write_output(cls.__name__, cls.__name__, js_out, py_out)

            # this is so fragile
            separated_action_classes = ['ServerActions','DigitalGeometryActions']
            append_separator = False
            if i < len(self.ACTION_CLASSES) - 1 and self.ACTION_CLASSES[i+1][0].__name__ in separated_action_classes:
                append_separator = True
            elif i == len(self.ACTION_CLASSES) - 1:
                append_separator = True


            BlocklyGenerator.update_toolbox(c_xml, self.toolbox_path,append_separator=append_separator)

    def build_pickers_category(self):
        """
        NEW: Safely builds the Pickers category in the toolbox by *only* inserting
        blocks that were successfully generated and tracked in the previous steps.
        """
        xml = [f'<block type="{info["id"]}"></block>' for info in self.VARIANT_CONFIG.values()]
        xml += [f'<block type="{p["id"]}"></block>' for p in self.ACTION_PICKERS]
        xml += [f'<block type="{p["id"]}"></block>' for p in self.GENERATED_ACTION_PICKERS]

        # Pull exactly what was verified and built in build_blocks()
        for b_type in getattr(self, 'generated_block_pickers', []):
            xml.append(f'<block type="{b_type}"></block>')

        BlocklyGenerator.update_toolbox(f'<category name="Pickers" colour="{self.COLORS["Picker"]}">{"".join(xml)}</category>', self.toolbox_path)

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

    def _write_output(self, file_name, export_name, js, py):
        header = 'import { MCED } from "../lib/constants.mjs";\n\n'
        js_c = f"{header}export function define{export_name}Blocks(Blockly) {{\n" + "\n".join(js) + "\n}"
        py_c = f"export function define{export_name}Generators(pythonGenerator) {{\n" + "\n".join(py) + "\n}"
        self.blocks_dir.mkdir(parents=True, exist_ok=True)
        self.gens_dir.mkdir(parents=True, exist_ok=True)
        (self.blocks_dir / f"{file_name}.mjs").write_text(js_c, encoding='utf-8')
        (self.gens_dir / f"{file_name}.mjs").write_text(py_c, encoding='utf-8')

class ApiGenerator:
    """
    Generates the Java Registry, Event Listener, and Python Client.
    Includes the robust Java compilation fix and the Push Architecture.
    """
    def __init__(self, schema_path, java_out, java_listener_out, python_out, python_actions_out=None):
        try:
            with open(schema_path, 'r') as f:
                self.schema = yaml.safe_load(f)
        except Exception as e:
            print(f"Error loading YAML schema: {e}")
            self.schema = {}
        self.java_out = Path(java_out)
        self.listener_output_path = Path(java_listener_out)
        self.python_out = Path(python_out)
        self.python_actions_out = Path(python_actions_out) if python_actions_out else None

    def run(self):
        self.generate_java_registry()
        self.generate_java_listener()
        self.generate_python_client()
        if self.python_actions_out:
            self.generate_action_classes()

    def generate_java_registry(self):
        code = [
            "package org.mcshell.mcjuice;",
            "",
            "import org.bukkit.Bukkit;",
            "import org.bukkit.World;",
            "import org.bukkit.entity.Player;",
            "import org.bukkit.entity.EntityType;", # Add this import
            "import org.bukkit.Location;",
            "import org.bukkit.util.Vector;",
            "import org.bukkit.Material;",
            "import java.util.HashMap;",
            "import java.util.Map;",
            "",
            "@SuppressWarnings(\"deprecation\")", # Good to add for those earlier warnings
            "public class GeneratedCommandRegistry {",
            "    private final Map<String, CommandExecutor> registry = new HashMap<>();",
            "",
            "    public GeneratedCommandRegistry() {",
            "        // Root level helper",
            "        registry.put(\"ping\", (args, session) -> session.send(\"pong\"));",
            "        // --- PUSH ARCHITECTURE: Register event subscription ---",
            "        registry.put(\"events.subscribe\", (args, session) -> { McJuicePlugin.getInstance().addEventSubscriber(session); session.send(\"OK\"); });",
            ""
        ]

        for ns, data in self.schema.get('namespaces', {}).items():
            target = data.get('target', 'Player')
            for cmd in data.get('commands', []):
                code.append(self._build_java_lambda(f"{ns}.{cmd['name']}", cmd, target))

        # Append the new method at the end of the class
        code.extend([
            "    }",
            "",
            "    public CommandExecutor getExecutor(String name) { return registry.get(name); }",
            "",
            "    public static EntityType matchEntityRobustly(String type) {",
            "        try {",
            "            Class<?> registryClass = Class.forName(\"org.bukkit.Registry\");",
            "            Object entityTypeRegistry = registryClass.getField(\"ENTITY_TYPE\").get(null);",
            "            ",
            "            Class<?> namespacedKeyClass = Class.forName(\"org.bukkit.NamespacedKey\");",
            "            Object key = namespacedKeyClass.getMethod(\"fromString\", String.class).invoke(null, type.toLowerCase(java.util.Locale.ROOT));",
            "            ",
            "            if (key != null) {",
            "                return (EntityType) registryClass.getMethod(\"get\", namespacedKeyClass).invoke(entityTypeRegistry, key);",
            "            }",
            "        } catch (Exception e) {",
            "            try {",
            "                return EntityType.valueOf(type.toUpperCase(java.util.Locale.ROOT));",
            "            } catch (IllegalArgumentException ex) {",
            "                return null;",
            "            }",
            "        }",
            "        return null;",
            "    }",
            "}"
        ])

        self.java_out.parent.mkdir(parents=True, exist_ok=True)
        self.java_out.write_text("\n".join(code))

    def generate_java_listener(self):
        """Generates the Bukkit Listener from the events schema section."""
        code = [
            "package org.mcshell.mcjuice;",
            "import org.bukkit.event.Listener;",
            "import org.bukkit.event.EventHandler;",
            "import org.bukkit.event.EventPriority;",
            "",
            "public class GeneratedEventListener implements Listener {"
        ]

        for event in self.schema.get('events', []):
            code.append(f"\n    @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)")
            code.append(f"    public void on{event['name'].capitalize()}({event['bukkit_event']} event) {{")
            if 'condition' in event:
                code.append(f"        if (!({event['condition']})) return;")
            code.append(f"        String data = {event['data']};")
            code.append(f"        McJuicePlugin.getInstance().recordEvent(\"{event['name']}\", data);")
            code.append("    }")

        code.append("}")
        self.listener_output_path.parent.mkdir(parents=True, exist_ok=True)
        self.listener_output_path.write_text("\n".join(code))

    def _build_java_lambda(self, name, cmd, target_type):
        """Creates the Java registry lambda, ensuring variable names are unique and scoped correctly."""
        lines = [f'        registry.put("{name}", (args, session) -> {{']

        offset = 1 if target_type == "Player" else 0
        bukkit_call = cmd["bukkit"]

        if isinstance(bukkit_call, dict):
            bukkit_call = "{" + list(bukkit_call.keys())[0] + "}"

        yaml_args = cmd.get("args", [])
        for i, arg in enumerate(yaml_args):
            t, n, idx = arg["type"], arg["name"], i + offset
            arg_var = f"_arg_{n}"

            if t == "double": lines.append(f'            final double {arg_var} = Double.parseDouble(args[{idx}]);')
            elif t == "int": lines.append(f'            final int {arg_var} = Integer.parseInt(args[{idx}]);')
            elif t == "String": lines.append(f'            final String {arg_var} = args[{idx}];')

            bukkit_call = bukkit_call.replace(f"{{{n}}}", arg_var)

        lines.append('            Bukkit.getScheduler().runTask(McJuicePlugin.getInstance(), () -> {')
        
        # INJECT TRY BLOCK HERE
        lines.append('                try {')

        if target_type == "Player":
            lines.append('                    int eid = Integer.parseInt(args[0]);')
            lines.append('                    Player player = session.getPlayerById(eid);')
            lines.append('                    if (player == null) { session.send("Fail,No Player"); return; }')
            exec_on = "player"
        elif target_type == "World":
            lines.append('                    World world = Bukkit.getWorlds().get(0);')
            exec_on = "world"
        else:
            exec_on = "Bukkit"

        is_block = bukkit_call.strip().startswith("{")
        is_static = re.match(r'^(Bukkit|McJuicePlugin|org\.bukkit|[A-Z])', bukkit_call.strip())
        full_expr = bukkit_call if (is_block or is_static) else f"{exec_on}.{bukkit_call}"

        ret_type = cmd.get('returns', 'void')

        if is_block:
            lines.append(f'                    {full_expr}')
        else:
            if ret_type == 'void':
                lines.append(f'                    {full_expr};')
            else:
                lines.append(f'                    Object res = {full_expr};')
                lines.append('                    if (res == null) { session.send("null"); }')
                if ret_type == 'TileLocation':
                    lines.append('                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getBlockX()+","+l.getBlockY()+","+l.getBlockZ()); }')
                else:
                    lines.append('                    else if (res instanceof Location) { Location l = (Location)res; session.send(l.getX()+","+l.getY()+","+l.getZ()); }')
                    lines.append('                    else if (res instanceof Vector) { Vector v = (Vector)res; session.send(v.getX()+","+v.getY()+","+v.getZ()); }')
                    lines.append('                    else { session.send(String.valueOf(res)); }')

        # INJECT CATCH BLOCK HERE
        lines.append('                } catch (Exception e) {')
        lines.append('                    session.send("Fail," + e.getMessage());')
        lines.append('                }')

        lines.append('            });')
        lines.append('        });')
        return "\n".join(lines)

    def generate_python_client(self):
        """Generates the dual-socket Python Client for the Push architecture."""
        code = [
            "import threading",
            "import queue",
            "import socket",
            "from mcshell.mcjuiceconn import MCJuiceConnection",
            "from mcshell.Vec3 import Vec3",
            "",
            "class MCJuiceClient:",
            "    def __init__(self, conn, event_conn, entity_id=None):",
            "        self.conn = conn",
            "        self.event_conn = event_conn",
            "        self.entity_id = entity_id",
            "        self.event_queues = {} # event_name -> list of queues",
            "",
            "        # --- PUSH ARCHITECTURE: Dedicated Event Router ---",
            "        self.event_conn.socket.settimeout(None)",
            "        self.event_conn.send('events.subscribe')",
            "        self.reader_thread = threading.Thread(target=self._event_reader_loop, daemon=True)",
            "        self.reader_thread.start()"
        ]

        namespaces = dict(self.schema.get('namespaces', {}))
        for ns in namespaces.keys():
            if ns != 'events':
                code.append(f"        self.{ns} = {ns.capitalize()}Namespace(self.conn, self.entity_id)")

        if 'events' in self.schema:
            code.append("        self.events = EventsNamespace(self)")

        code.extend([
            "",
            "    def _event_reader_loop(self):",
            "        from mcshell.event import EventFactory",
            "        while True:",
            "            try:",
            "                line = self.event_conn.receive()",
            "                if not line: break",
            "                if line == 'OK': continue",
            "                ",
            "                parts = line.split(',', 1)",
            "                if len(parts) < 2: continue",
            "                event_name, raw_data = parts[0], parts[1]",
            "                ",
            "                event_obj = EventFactory.create(event_name, raw_data)",
            "                if not event_obj: continue",
            "                ",
            "                if event_name in self.event_queues:",
            "                    for q in self.event_queues[event_name]:",
            "                        q.put(event_obj)",
            "            except (socket.timeout, TimeoutError):",
            "                continue",
            "            except Exception as e:",
            "                break",
            "",
            "    @staticmethod",
            "    def create(address='localhost', port=4721, playerName=''):",
            "        conn = MCJuiceConnection(address, port)",
            "        event_conn = MCJuiceConnection(address, port)",
            "        eid = None",
            "        if playerName:",
            "            eid = int(conn.sendReceive('world.getPlayerId', playerName))",
            "        return MCJuiceClient(conn, event_conn, eid)"
        ])

        for ns, data in namespaces.items():
            if ns == 'events': continue
            target = data.get('target', 'Player')
            code.append(f"\nclass {ns.capitalize()}Namespace:")
            code.append("    def __init__(self, conn, entity_id): self.conn = conn; self.entity_id = entity_id")
            for cmd in data.get('commands', []):
                args = [a["name"] for a in cmd.get("args", [])]
                sig = ", ".join(["self"] + args + (["entity_id=None"] if target == "Player" else []))
                code.append(f"    def {cmd['name']}({sig}):")
                payload_parts = []
                if target == "Player":
                    code.append("        eid = entity_id if entity_id is not None else self.entity_id")
                    code.append("        if eid is None: raise ValueError('No entity_id')")
                    payload_parts.append("eid")
                payload_parts.extend(args)
                payload = ", ".join(payload_parts)

                r = cmd.get('returns', 'void')
                if r == 'void':
                    code.append(f"        self.conn.send('{ns}.{cmd['name']}', {payload})")
                    code.append("        return 'OK'")
                else:
                    code.append(f"        res = self.conn.sendReceive('{ns}.{cmd['name']}', {payload})")
                    if r in ('Location', 'Vector'): code.append("        return Vec3(*list(map(float, res.split(','))))")
                    elif r == 'TileLocation': code.append("        return Vec3(*list(map(int, res.split(','))))")
                    elif r == 'string_list': code.append("        return res.split(',')")
                    elif r == 'double': code.append("        return float(res)")
                    elif r == 'int': code.append("        return int(res)")
                    else: code.append("        return res")

        if 'events' in self.schema:
            code.extend([
                "\nclass EventsNamespace:",
                "    def __init__(self, client):",
                "        self.client = client",
                "",
                "    def subscribe_local(self, event_name: str, target_queue: 'queue.Queue'):",
                "        if event_name not in self.client.event_queues:",
                "            self.client.event_queues[event_name] = []",
                "        self.client.event_queues[event_name].append(target_queue)",
                "",
                "    def unsubscribe_local(self, event_name: str, target_queue: 'queue.Queue'):",
                "        if event_name in self.client.event_queues:",
                "            try:",
                "                self.client.event_queues[event_name].remove(target_queue)",
                "            except ValueError:",
                "                pass"
            ])

        self.python_out.parent.mkdir(parents=True, exist_ok=True)
        self.python_out.write_text("\n".join(code))

    def _camel_to_snake(self, name):
        s1 = re.sub('(.)([A-Z][a-z]+)', r'\1_\2', name)
        return re.sub('([a-z0-9])([A-Z])', r'\1_\2', s1).lower()

    def generate_action_classes(self):
        # 1. MODIFIED: Added specific imports required for the events generation loops.
        code = [
            "from mcshell.mcactions_base import MCActionsBase",
            "from blockapily import mced_block",
            "from mcshell.Vec3 import Vec3",
            "from typing import Optional, Any",
            "import queue",
            "from mcshell.constants import PowerCancelledException",
            "",
            "# --- THIS FILE IS AUTOMATICALLY GENERATED FROM mcjuice_api.yaml ---",
            "# --- Do not edit directly! Inherit from these classes instead. ---",
            ""
        ]

        namespaces = self.schema.get('namespaces', {})
        for ns_name, ns_data in namespaces.items():
            has_blockly = any('blockly' in cmd for cmd in ns_data.get('commands', []))
            if not has_blockly:
                continue

            class_name = f"{ns_name.capitalize()}Actions"
            code.append(f"\nclass {class_name}(MCActionsBase):")
            code.append(f"    def __init__(self, mc_player_instance, delay_between_blocks=0):")
            code.append(f"        super().__init__(mc_player_instance, delay_between_blocks)")

            for cmd in ns_data.get('commands', []):
                blockly = cmd.get('blockly')
                if not blockly:
                    continue

                label_val = blockly.get('label', cmd['name'])
                dec_parts = [f"        label=\"{label_val}\""]

                b_args = blockly.get('args', {})
                for k, v in b_args.items():
                    l_val = v.get('label', k)
                    s_val = v.get('shadow')
                    if s_val:
                        dec_parts.append(f"        {k}={{'label': '{l_val}', 'shadow': '{s_val}'}}")
                    else:
                        dec_parts.append(f"        {k}={{'label': '{l_val}'}}")

                args_dec = ",\n".join(dec_parts)
                code.append(f"\n    @mced_block(\n{args_dec}\n    )")

                sig_parts = ["self"]
                for arg_name, arg_data in b_args.items():
                    sig_parts.append(f"{arg_name}: '{arg_data.get('type', 'Any')}'")

                sig_str = ", ".join(sig_parts)

                ret_type = blockly.get('returns')
                if not ret_type:
                    bukkit_r = cmd.get('returns', 'void')
                    if bukkit_r in ('Location', 'Vector', 'TileLocation'): ret_type = 'Vec3'
                    elif bukkit_r == 'double': ret_type = 'float'
                    elif bukkit_r == 'int': ret_type = 'int'
                    elif bukkit_r == 'string_list': ret_type = 'list'
                    elif bukkit_r == 'string': ret_type = 'str'
                    elif bukkit_r != 'void': ret_type = bukkit_r

                ret_str = f" -> '{ret_type}'" if ret_type else ""
                method_name = self._camel_to_snake(cmd['name'])
                code.append(f"    def {method_name}({sig_str}){ret_str}:")

                tooltip = blockly.get('tooltip', '')
                if tooltip: code.append(f"        \"\"\"{tooltip}\"\"\"")

                call_args = blockly.get('call_args', [])
                call_args_str = ", ".join(call_args)

                call_stmt = f"self.mcplayer.mj.{ns_name}.{cmd['name']}({call_args_str})"
                if ret_type: code.append(f"        return {call_stmt}")
                else: code.append(f"        {call_stmt}")

        # 2. MODIFIED: Added the auto-generation block that interprets the `events` yaml blockly metadata
        # to construct the EventActions class dynamically.
        events = self.schema.get('events', [])
        if events and any('blockly' in e for e in events):
            code.append(f"\nclass EventActions(MCActionsBase):")
            code.append(f"    def __init__(self, mc_player_instance, delay_between_blocks=0):")
            code.append(f"        super().__init__(mc_player_instance, delay_between_blocks)")

            for event in events:
                blockly = event.get('blockly')
                if not blockly:
                    continue

                label_val = blockly.get('label', f"Wait for {event['name']}")
                dec_parts = [f"        label=\"{label_val}\""]

                player_filter = blockly.get('player_filter', False)
                if player_filter:
                    dec_parts.append("        player_name={'label': 'Player name', 'shadow': '<shadow type=\"text\"><field name=\"TEXT\">SELF</field></shadow>'}")

                args_dec = ",\n".join(dec_parts)
                code.append(f"\n    @mced_block(\n{args_dec}\n    )")

                sig_str = "self, player_name: 'str'" if player_filter else "self"
                ret_type = blockly.get('returns', 'Any')
                method_name = f"wait_for_{self._camel_to_snake(event['name'])}"

                code.append(f"    def {method_name}({sig_str}) -> '{ret_type}':")
                if player_filter:
                    code.append("        target_name = self.mcplayer.name if (not player_name or player_name == 'SELF') else player_name")

                code.append("        q = queue.Queue()")
                code.append(f"        self.mcplayer.mj.events.subscribe_local('{event['name']}', q)")
                code.append("        try:")
                code.append("            while True:")
                code.append("                if self.mcplayer.cancel_event and self.mcplayer.cancel_event.is_set():")
                code.append("                    raise PowerCancelledException")
                code.append("                try:")
                code.append("                    event_obj = q.get(timeout=0.1)")

                yields_val = blockly.get('yields', 'event_obj').replace('event.', 'event_obj.')
                if player_filter:
                    player_attr = blockly.get('player_attr', 'name')
                    code.append(f"                    if target_name == 'ALL' or getattr(event_obj, '{player_attr}', None) == target_name:")
                    code.append(f"                        return {yields_val}")
                else:
                    code.append(f"                    return {yields_val}")

                code.append("                except queue.Empty:")
                code.append("                    continue")
                code.append("        finally:")
                code.append(f"            self.mcplayer.mj.events.unsubscribe_local('{event['name']}', q)")

        self.python_actions_out.parent.mkdir(parents=True, exist_ok=True)
        self.python_actions_out.write_text("\n".join(code))


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

if __name__ == "__main__":
    # 1. RUN API GENERATOR FIRST so generated_actions.py is fully populated and fresh on disk
    gen = ApiGenerator(
        MC_DATA_DIR / "mcjuice_api.yaml",
        MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedCommandRegistry.java",
        MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedEventListener.java",
        MC_SHELL_DIR / "mcjuice.py",
        MC_SHELL_DIR / "generated_actions.py"
    )
    gen.run()

    from mcshell.mcscraper import fetch_minecraft_data
    print("Step 1: Fetching JSON from minecraft-data...")
    prismarine_blocks = fetch_minecraft_data('1.21.11','blocks')
    prismarine_items = fetch_minecraft_data('1.21.11','items')
    prismarine_entities = fetch_minecraft_data('1.21.11','entities')


    engine = TaxonomyEngine(prismarine_blocks, prismarine_items, prismarine_entities,verbose=True)
    materials_data, entity_data, entity_groups, picker_groups, variant_config = engine.run()


    print("\nStep 3: Building Blockly Registries...")
    builder = RegistryBuilder(
        toolbox_path=MC_APP_SRC_DIR / 'toolbox.xml',
        blocks_dir=MC_APP_SRC_DIR / 'blocks',
        gens_dir=MC_APP_SRC_DIR / 'generators' / 'python',
    )

    # 3. Inject it straight into your frozen RegistryBuilder!
    builder.materials_data = materials_data
    builder.entity_data = entity_data
    builder.ENTITY_GROUPS = entity_groups
    builder.MATERIAL_PICKER_GROUPS = picker_groups
    builder.VARIANT_CONFIG = variant_config

    # This generates:
    # 1. blocks/materials.mjs, blocks/items.mjs, blocks/entities.mjs
    # 2. generators/python/materials.mjs, ... etc.
    # 3. Updates toolbox.xml via blockapily's structured XML injection
    builder.build_all()

