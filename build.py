import re
import sys
import yaml
from pathlib import Path
import xml.etree.ElementTree as ET

# we must use this class before trying to import mcshell 
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
        elif target_type == "Select":
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
            "import json",
            "from mcshell.mcjuiceconn import MCJuiceConnection",
            "from mcshell.Vec3 import Vec3",
            "from mcshell.mcstructure import MCStructure",
            "",
            "# --- THIS FILE IS AUTOMATICALLY GENERATED FROM mcjuice_api.yaml ---",
            "# --- Do not edit directly! Inherit from these classes instead. ---",
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
            "        from mcshell.mcevent import EventFactory",
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
                    elif r == 'MCStructure': code.append("        return MCStructure({tuple(map(int, k.split(','))): v for k, v in json.loads(res).items()},local_origin='min_corner')")
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

                # player_filter = blockly.get('player_filter', False)
                # if player_filter:
                #     dec_parts.append("        player_name={'label': 'Player name', 'shadow': '<shadow type=\"text\"><field name=\"TEXT\">SELF</field></shadow>'}")

                player_filter = blockly.get('player_filter', False)
                if player_filter:
                    dec_parts.append("        player_name={'label': 'Player name', 'shadow': {'xml': '<shadow type=\"text\"><field name=\"TEXT\">SELF</field></shadow>', 'json': {'type': 'text', 'fields': {'TEXT': 'SELF'}}}}")

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


# Ensure we can import from mcshell
current_dir = Path(__file__).parent
sys.path.append(str(current_dir))
print("\nStep 1: Building mcjuice Command Registry...")
gen = ApiGenerator(
    current_dir / "mcshell/data" / "mcjuice_api.yaml",
    current_dir / "mcjuice/src" / "main/java/org/mcshell/mcjuice/GeneratedCommandRegistry.java",
    current_dir / "mcjuice/src" / "main/java/org/mcshell/mcjuice/GeneratedEventListener.java",
    current_dir / "mcshell" / "mcjuice.py",
    current_dir / "mcshell" / "actions" / "generated_actions.py"
)

# generate the command registry Java class for the mcjuice plugin and a python client
# as well as the actions classes before triggering an import of them
gen.run()

from mcshell.mcbuilder import RegistryBuilder,TaxonomyEngine,RegistryEngine

from mcshell.mcscraper import fetch_minecraft_data
from mcshell.constants import MC_TOOLBOX_DIR,MC_APP_SRC_DIR, MC_DATA_DIR, MC_JUICE_SRC_DIR,MC_SHELL_DIR,subprocess,shutil

from mcshell.mcconfig import TAXONOMY_RULES,ENTITY_RULES

def rebuild(rebuild_mcjuice=True):
    """
    Primary orchestration script to rebuild the Minecraft Blockly registry.
    This serves as a full-pipeline test for the data-driven migration.
    """

    # print("\nStep 1: Building mcjuice Command Registry...")
    # gen = ApiGenerator(
    #     MC_DATA_DIR / "mcjuice_api.yaml",
    #     MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedCommandRegistry.java",
    #     MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedEventListener.java",
    #     MC_SHELL_DIR / "mcjuice.py",
    #     MC_SHELL_DIR / "actions" / "generated_actions.py"
    #     )

    # # generate the command registry Java class for the mcjuice plugin and a python client
    # gen.run()


    # 2. Run the Engine

    print("\nStep 2: Remove the existing toolbox.xml file...")
    output_toolbox_path = MC_TOOLBOX_DIR / 'toolbox.xml'
    output_toolbox_path.unlink(missing_ok=True)
    toolbox_template_path = MC_TOOLBOX_DIR / 'toolbox_template.xml'
    with output_toolbox_path.open('w') as f:
        f.write(toolbox_template_path.read_text())


    print("\nStep 3: Fetching JSON from minecraft-data...")
    prismarine_blocks = fetch_minecraft_data('1.21.11','blocks')
    prismarine_items = fetch_minecraft_data('1.21.11','items')
    prismarine_entities = fetch_minecraft_data('1.21.11','entities')


    engine = TaxonomyEngine(TAXONOMY_RULES, ENTITY_RULES, prismarine_blocks, prismarine_items, prismarine_entities,verbose=True)
    materials_data, entity_data, entity_groups, picker_groups, variant_config = engine.run()


    print("\nStep 4: Building Blockly Registries...")
    builder = RegistryBuilder(
        toolbox_path=MC_TOOLBOX_DIR / 'toolbox.xml',
        blocks_dir=MC_APP_SRC_DIR / 'blocks',
        gens_dir=MC_APP_SRC_DIR / 'generators' / 'python',
    )

    # 3. Inject it straight into RegistryBuilder!
    builder.materials_data = materials_data
    builder.entity_data = entity_data
    builder.ENTITY_GROUPS = entity_groups
    builder.MATERIAL_PICKER_GROUPS = picker_groups
    builder.VARIANT_CONFIG = variant_config

    # This generates:
    # 1. blocks/materials.mjs, blocks/items.mjs, blocks/entities.mjs
    # 2. generators/python/materials.mjs, ... etc.
    # 3. [Legacy function] Updates toolbox.xml via blockapily's structured XML injection
    # 4. Generates toolbox JSON for each action class in MC_TOOLBOX_DIR / snippets
    builder.build_all()

    if rebuild_mcjuice:
        print("\nStep 5: Build the McJuice plugin...")
        pom_path = MC_JUICE_SRC_DIR.parent / 'pom.xml'

        # Parse the pom.xml to dynamically detect all profile IDs
        print(f"Probing {pom_path} for Maven profiles...")
        tree = ET.parse(pom_path)
        ns = {'m': 'http://maven.apache.org/POM/4.0.0'}
        profile_ids = [p.text for p in tree.findall('.//m:profile/m:id', ns)]

        if not profile_ids:
            print("Warning: No profiles detected in pom.xml. Defaulting to standard build.")
            profile_ids = [None] # Allows the loop to run once with a standard build command

        # Build each profile and copy the artifact immediately
        for profile in profile_ids:
            if profile:
                print(f"\nBuilding McJuice JAR for profile: {profile}...")
                build_cmd = ["mvn","--quiet", "clean", "package", "-P", profile]
            else:
                print("\nBuilding McJuice JAR...")
                build_cmd = ["mvn","--quiet", "clean", "package"]
                
            # Execute the Maven build
            subprocess.run(build_cmd, cwd=str(MC_JUICE_SRC_DIR.parent), check=True)

            # 3. Move the artifact to the data directory before the next iteration's 'clean' wipes it
            built_jars = list(MC_JUICE_SRC_DIR.parent.joinpath('target').glob('mcjuice-*.jar'))
            
            if not built_jars:
                print(f"Error: No generated JARs found in target/ after building profile {profile}")
                continue
                
            for built_jar in built_jars:
                print(f"Copying {built_jar.name} to {MC_DATA_DIR}")
                shutil.copy2(built_jar, MC_DATA_DIR)

        print(f"\nMcJuice JAR integrated into mcshell/data/")
        print("\nAll builds completed and copied successfully.")
    else:
        print("\nStep 5: Skipping the build of the McJuice plugin...")

    print(f"\nRebuild Complete!")
    print(f"\nBlocks generated in: {MC_APP_SRC_DIR / 'blocks'}")
    print(f"\nToolbox updated: {MC_TOOLBOX_DIR / 'toolbox.xml'}")


    print("\nStep 6: Building the JS registry of blocks and generators...")
    reg_engine = RegistryEngine()
    # Files that must be loaded first (if any dependencies exist)
    reg_engine.PRIORITY_FILES = ["mc.mjs"]

    BLOCKS_DIR = MC_APP_SRC_DIR / 'blocks'
    print("Updating Block Registry...")
    reg_engine.generate_registry(BLOCKS_DIR, "registerAllBlocks", "Blockly")

    GENERATORS_DIR = MC_APP_SRC_DIR / 'generators' / 'python'
    print("\nUpdating Generator Registry...")
    reg_engine.generate_registry(GENERATORS_DIR, "registerAllGenerators", "pythonGenerator")

    print(f"\nYou can now refresh the mced editor or restart the web application.")

if __name__ == "__main__":
    import sys
    import shlex
    import argparse
    parser = argparse.ArgumentParser(
        prog="build", 
        description="Build the components for the mc-shell application"
    )

    
    parser.add_argument("--no-mcjuice", action="store_true",help="Rebuild the McJuice jar")
    
    try:
        parsed_args = parser.parse_args(sys.argv[1:])
    except SystemExit:
        # This catches '--help' or invalid arguments and stops the function
        # without killing the IPython kernel
        sys.exit(1) 

    rebuild(rebuild_mcjuice = not parsed_args.no_mcjuice)