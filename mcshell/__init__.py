import socket
from pprint import pprint

import IPython
import getpass
from IPython.core.magic import Magics, magics_class, line_magic,needs_local_scope

from rich.prompt import Prompt

from mcshell.constants import *
from mcshell.mcrepo import SQLiteRepository
from mcshell.mcclient import MCClient
from mcshell.mcserver import start_app_server,app_server_thread
from mcshell.mcactions import *
from mcshell.mcserver import execute_power_in_thread, RUNNING_POWERS # Import helpers
from mcshell.ppmanager import *
from mcshell.ppdownloader import *

from mcshell.mcserver import stop_app_server
from mcshell.mcplayer import MCPlayer

import atexit
from threading import Thread,Event

import atexit
import string
from threading import Thread,Event
import asyncio
import time
from mcshell.mctunnelserver import start_host_gateway, connect_client_tunnel,get_vpn_ip

# =====================================================================
# Secure Tunnel & Plugin Helper Functions
# =====================================================================

def _resolve_modrinth_plugin(project_id, mc_version):
    """Queries the Modrinth API for the exact plugin download URL matching the Minecraft version."""
    api_url = f"https://api.modrinth.com/v2/project/{project_id}/version"
    params = {
        "game_versions": f'["{mc_version}"]',
        "loaders": '["paper", "spigot"]'
    }
    try:
        resp = requests.get(api_url, params=params, timeout=5)
        if resp.ok:
            data = resp.json()
            if data and len(data) > 0:
                # Retrieve the primary file of the most recent compatible release
                files = data[0].get("files", [])
                for f in files:
                    if f.get("primary"):
                        return f["url"]
                if files:
                    return files[0]["url"]
    except Exception as e:
        pass # Failsafe to fallback URLs
    return None

def _run_tunnel_host_thread(mc_port, rcon_port, mj_port, out_token, use_upnp=False, explicit_host=None):
    async def host_task():
        # 1. Force integer types to ensure our logic works safely
        mc_port_i = int(mc_port)
        rcon_port_i = int(rcon_port)
        mj_port_i = int(mj_port)

        # Generate a 6-character Kahoot-style PIN (e.g. A9K2B4)
        pin = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

        # Using bind_port=0 lets the OS pick a guaranteed free ephemeral port
        bound_port = await start_host_gateway(pin, bind_ip='0.0.0.0', bind_port=0, mc_port=mc_port_i, rcon_port=rcon_port_i, mj_port=mj_port_i)

        host_ip = None

        if explicit_host:
            host_ip = explicit_host
        elif use_upnp:
            try:
                import miniupnpc
                upnp = miniupnpc.UPnP()
                upnp.discoverdelay = 200
                upnp.discover()
                upnp.selectigd()
                external_ip = upnp.externalipaddress()

                # Ask router to map the external port directly to our OS-assigned local port
                mapped = upnp.addportmapping(bound_port, 'TCP', upnp.lanaddr, bound_port, 'MC-Shell Secure Tunnel', '')
                if mapped:
                    host_ip = external_ip
                    print(f"\n[UPnP] Success! Router opened port {bound_port}.")
                else:
                    print("\n[UPnP] Router denied mapping. Falling back to local network mode.")
            except ImportError:
                print("\n[UPnP] 'miniupnpc' library missing. Falling back to local network mode.")
            except Exception as e:
                print(f"\n[UPnP] Failed to configure router ({e}). Falling back to local network mode.")

        if not host_ip:
            from mcshell.mctunnelserver import _get_local_ip
            host_ip = _get_local_ip()

        # 2. Formulate the robust Join Code
        # If the ports match defaults exactly, keep the token short and clean.
        if mc_port_i == 25565 and rcon_port_i == 25575 and mj_port_i == 4721:
            join_code = f"{host_ip}:{bound_port}#{pin}"
        else:
            # If ports deviated, append them so the client knows what to ask for
            join_code = f"{host_ip}:{bound_port}#{pin}-{mc_port_i}-{rcon_port_i}-{mj_port_i}"

        out_token.append(join_code)

        # Keep the event loop alive indefinitely so the SSH server stays up
        while True:
            await asyncio.sleep(3600)

    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        loop.run_until_complete(host_task())
    except Exception as e:
        print(f"\n[Tunnel Host Error] {e}")

def _start_secure_tunnel_host(mc_port, rcon_port, mj_port, use_upnp=False, explicit_host=None):
    out_token = []
    # Use daemon=True so the thread automatically dies when IPython exits
    thread = Thread(target=_run_tunnel_host_thread, args=(mc_port, rcon_port, mj_port, out_token, use_upnp, explicit_host), daemon=True)
    thread.start()

    # Wait up to 5 seconds for the cryptographic keys and token to generate
    for _ in range(50):
        if out_token:
            return out_token[0]
        time.sleep(0.1)
    return None

def _run_tunnel_client_thread(host, port, pin, remote_mc, remote_rcon, remote_mj, local_mc, local_rcon, local_mj):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        loop.run_until_complete(connect_client_tunnel(
            host,
            port,
            pin,
            remote_mc=remote_mc,
            remote_rcon=remote_rcon,
            remote_mj=remote_mj,
            local_mc_port=local_mc,
            local_rcon_port=local_rcon,
            local_mj_port=local_mj
        ))
    except Exception as e:
        print(f"\n[Tunnel Client Error] {e}")

def _start_secure_tunnel_client(join_code, local_mc, local_rcon, local_mj):
    # Parse the join_code: HOST:PORT#PIN[-MC-RCON-MJ]
    try:
        address_part, auth_part = join_code.split('#')
        host, port_str = address_part.split(':')
        port = int(port_str)

        # Check if the host attached custom ports
        if '-' in auth_part:
            parts = auth_part.split('-')
            pin = parts[0]
            remote_mc = int(parts[1])
            remote_rcon = int(parts[2])
            remote_mj = int(parts[3])
        else:
            pin = auth_part
            remote_mc = 25565
            remote_rcon = 25575
            remote_mj = 4721

    except (ValueError, IndexError):
        print("[Tunnel Client Error] Invalid Join Code format.")
        return

    thread = Thread(target=_run_tunnel_client_thread, args=(host, port, pin, remote_mc, remote_rcon, remote_mj, local_mc, local_rcon, local_mj), daemon=True)
    thread.start()

@magics_class
class MCShell(Magics):

    def __init__(self,shell):
        super(MCShell,self).__init__(shell)

        self.ip = IPython.get_ipython()

        try:
            with MC_DOC_PATH.open('rb') as f:
                _mc_cmd_docs = pickle.load(f)
        except FileNotFoundError:
            from mcshell.mcscraper import make_docs
            _mc_cmd_docs = make_docs()

        self.mc_name = None

        self.mc_cmd_docs = _mc_cmd_docs
        self.rcon_commands = {}

        self.server_data = MC_SERVER_DATA

        self.ip.set_hook('complete_command', self._complete_mc_run, re_key='%mc_run')
        self.ip.set_hook('complete_command', self._complete_mc_help, re_key='%mc_help')
        self.ip.set_hook('complete_command',self._complete_mc_cancel_power, re_key='%mc_cancel_power')
        self.ip.set_hook('complete_command',self._complete_world_command, re_key='%pp_start_world')
        self.ip.set_hook('complete_command',self._complete_world_command, re_key='%pp_delete_world')

        self.app_server_thread = app_server_thread

        self.active_paper_server: Optional[PaperServerManager ,None ] = None


    def _complete_world_command(self, ipyshell, event):
        ipyshell.user_ns.update(dict(rcon_event=event))
        text = event.symbol
        parts = event.line.split()
        ipyshell.user_ns.update(dict(rcon_event=event))

        worlds_base_dir = MC_WORLDS_BASE_DIR

        if not worlds_base_dir.exists() or not worlds_base_dir.is_dir():
            print(f"Worlds directory not found at: {worlds_base_dir}")
            print("Create a world first with: %pp_create_world <world_name>")
            return

        found_worlds = []
        # Iterate through each item in the base worlds directory
        for world_dir in worlds_base_dir.iterdir():
            if world_dir.is_dir():
                manifest_path = world_dir / "world_manifest.json"
                if manifest_path.exists():
                    found_worlds.append(world_dir.name)

        arg_matches= []
        if len(parts) == 1:
            arg_matches = [c for c in found_worlds]
            ipyshell.user_ns.update({'world_matches':arg_matches})
        elif len(parts) == 2 and text != '':
            arg_matches = [c for c in found_worlds if c.startswith(text)]
            ipyshell.user_ns.update({'world_matches':arg_matches})

        return arg_matches


    @line_magic
    def pp_create_world(self, line):
        args = line.split()
        if not args:
            print("Usage: %pp_create_world <world_name> [--version=<v>] [--datapacks=p1,p2]")
            return

        world_name = args[0]
        mc_version = MC_VERSION
        datapacks_to_install = []

        # Enhanced argument parsing
        for arg in args[1:]:
            if arg.startswith("--version="):
                mc_version = arg.split('=', 1)[1]
            elif arg.startswith("--datapacks="):
                # Expects a comma-separated list of names
                datapacks_to_install = arg.split('=', 1)[1].split(',')

        # Define paths
        world_dir = MC_WORLDS_BASE_DIR.joinpath(world_name)
        server_jars_dir = MC_WORLDS_BASE_DIR.joinpath('server-jars')


        if world_dir.exists():
            print(f"Error: A world named '{world_name}' already exists at '{world_dir}'")
            return

        print(f"Creating new world '{world_name}' for Minecraft {mc_version}...")

        # Create the world directory structure
        world_dir.mkdir(parents=True)
        plugins_dir = (world_dir / "plugins")
        plugins_dir.mkdir(exist_ok=True)
        server_jars_dir.mkdir(exist_ok=True)

        # Prompt for a password
        # try:
        #     password = getpass.getpass(prompt=f"Create a password for world '{world_name}': ")
        #     if not password:
        #         print("Password cannot be empty.")
        #         return
        # except (EOFError, KeyboardInterrupt):
        #     print("\nWorld creation cancelled.")
        #     return

        # Prompt for a password
        try:
            password = getpass.getpass(prompt=f"Create a password for world '{world_name}' (leave empty for random): ")
            if not password:
                # Generate a simple mnemonic password
                adjectives = ["brave", "swift", "calm", "bright", "bold", "cool", "fast"]
                nouns = ["creeper", "steve", "zombie", "pickaxe", "torch", "diamond", "sword"]
                num = random.randint(10, 99)
                password = f"{random.choice(adjectives)}-{random.choice(nouns)}-{num}"

                # Print in a parseable format for test frameworks
                print(f"MNEMONIC_PASSWORD: {password}")

        except (EOFError, KeyboardInterrupt):
            print("\nWorld creation cancelled.")
            return

        self.server_data['password'] = password

        print("Input the ports for the server, rcon and plugin. These only need to be changed if you are running more than one mc-shell!")
        try:
            # Capturing strings first ensures we don't crash on int('')
            resp_port = Prompt.ask('Server Port:', default=str(self.server_data['port']))
            resp_rcon = Prompt.ask('RCON Port:', default=str(self.server_data['rcon_port']))
            resp_mj   = Prompt.ask('McJuice Port:', default=str(self.server_data['mj_port']))
            resp_app  = Prompt.ask('Application Port:', default=str(self.server_data['app_port']))

            # Robust casting logic
            ports = {
                'port': int(resp_port) if resp_port else self.server_data['port'],
                'rcon_port': int(resp_rcon) if resp_rcon else self.server_data['rcon_port'],
                'mj_port': int(resp_mj) if resp_mj else self.server_data['mj_port'],
                'app_port': int(resp_app) if resp_app else self.server_data['app_port']
            }


            self.server_data['port'] = ports['port']
            self.server_data['rcon_port'] = ports['rcon_port']
            self.server_data['mj_port'] = ports['mj_port']
            self.server_data['app_port'] = ports['app_port']

        except (EOFError, KeyboardInterrupt):
            print("\nWorld creation cancelled.")
            return
        except ValueError as e:
            print(f"Error: Invalid port number provided. {e}")
            return

        creds_path = world_dir / '.mc_creds.json'

        with creds_path.open('w') as f:
            json.dump(self.server_data, f)

        # Set file permissions to be readable/writable by owner only
        creds_path.chmod(0o600)

        #  Download the Paper server JAR if needed
        downloader = PaperDownloader(server_jars_dir)
        jar_path = downloader.get_jar_path(mc_version)
        if not jar_path:
            return # Stop if download failed


        # Create the eula.txt file and automatically agree to it
        try:
            with open(world_dir / "eula.txt", "w") as f:
                f.write("# By agreeing to the EULA you are indicating your agreement to our EULA (https://aka.ms/MinecraftEULA).\n")
                f.write("eula=true\n")
            print("Automatically agreed to Minecraft EULA.")
        except IOError as e:
            print(f"Error: Could not write eula.txt file. {e}")
            return

        print(f"Resolving compatible Geyser/Floodgate plugins for Minecraft {mc_version}...")
        # Resolve dynamic Modrinth URLs based on the MC version, falling back to Geyser's official 'latest' endpoints
        geyser_url = _resolve_modrinth_plugin("geyser", mc_version) or "https://download.geysermc.org/v2/projects/geyser/versions/latest/builds/latest/downloads/spigot"
        floodgate_url = _resolve_modrinth_plugin("floodgate", mc_version) or "https://download.geysermc.org/v2/projects/floodgate/versions/latest/builds/latest/downloads/spigot"

        # Create the world_manifest.json file with required Geyser/Floodgate plugins
        manifest = {
            "world_name": world_name,
            "paper_version": mc_version,
            "java_path": "java", # Assumes java is in the system's PATH
            "server_jar_path": str(jar_path.relative_to(world_dir.parent)), # Store a path relative to the world_dir
            "world_data_path": str((world_dir / "world").relative_to(world_dir)),
            "plugins": [
                geyser_url,
                floodgate_url
            ],
            "server_properties": {
                "gamemode": "creative",
                "motd": f"MC-ED World: {world_name}",
                "enable-rcon": "true",
                "server-port": self.server_data.get('port', MC_SERVER_PORT),
                "query.port": self.server_data.get('port', MC_SERVER_PORT),
                "rcon.port": self.server_data.get('rcon_port', MC_RCON_PORT),
                "app.port": self.server_data.get('app_port', MC_APP_PORT),
                "rcon.password": self.server_data.get('password'),
                "enable-command-block":'true',
            },
            "paper": {
                "packet-limiter": {
                    "all-packets": {
                        "max-rate": 1000.0,
                        "interval": 4.0
                    },
                    "overrides": {
                        "ServerboundUseItemOnPacket": {
                            "action": "DROP",
                            "interval": 2.0,
                            "max-packet-rate": 5000.0
                        }
                    }
                },
            }
        }

        try:
            with open(world_dir / "world_manifest.json", "w") as f:
                json.dump(manifest, f, indent=4)
            print(f"Created world manifest at: {world_dir / 'world_manifest.json'}")
        except IOError as e:
            print(f"Error: Could not write world_manifest.json file. {e}")
            return

        # Always install McJuice from bundled version
        plugins_dir.joinpath(MC_JUICE_JAR_PATH.name).symlink_to(MC_JUICE_JAR_PATH)

        # Install the plugins listed in the manifest (Downloads Geyser & Floodgate automatically)
        plugin_urls = manifest.get("plugins", [])
        if plugin_urls:
            downloader.install_plugins(plugin_urls, plugins_dir)

        # --- Datapack Installation Logic ---
        if datapacks_to_install:
            # Datapacks must be in 'world/datapacks' for first-run generation
            world_datapacks_dir = world_dir / "world" / "datapacks"
            world_datapacks_dir.mkdir(parents=True, exist_ok=True)

            for pack_name in datapacks_to_install:
                pack_name = pack_name.strip()
                source = MC_DATAPACK_LIB_DIR / pack_name

                # Check for the name directly (folder) or with .zip extension
                if not source.exists():
                    source = MC_DATAPACK_LIB_DIR / f"{pack_name}.zip"

                if source.exists():
                    target = world_datapacks_dir / source.name
                    if source.is_dir():
                        shutil.copytree(source, target)
                    else:
                        shutil.copy2(source, target)
                    print(f"Installed datapack: {pack_name}")
                else:
                    print(f"Warning: Datapack '{pack_name}' not found in library.")

        print(f"\nWorld '{world_name}' created successfully.")
        print(f"To start it, run: %pp_start_world {world_name}")


    @line_magic
    def pp_start_world(self, line):
        """
        Starts a Paper server for a given world name.
        If another server is running, it will be stopped first.
        Usage: %pp_start_world <world_name> [--secure [upnp | hostname]]
        """

        # Orthogonal flag extraction
        is_secure = '--secure' in line
        use_upnp = False
        explicit_host = None

        if is_secure:
            parts = line.split()
            idx = parts.index('--secure')
            # Extract optional modifier (upnp or hostname) following the secure flag
            if idx + 1 < len(parts) and not parts[idx + 1].startswith('--'):
                mod = parts.pop(idx + 1)
                if mod.lower() == 'upnp':
                    use_upnp = True
                else:
                    explicit_host = mod
            parts.remove('--secure')
            line = ' '.join(parts)

            extra_server_properties = {
                'server-ip' : '127.0.0.1',
                'mcjuice-host': '127.0.0.1'
            }
        else:
            extra_server_properties = {
                'server-ip': '0.0.0.0',
                'mcjuice-host': '0.0.0.0'
            }

        world_name = line.strip()
        if not world_name:
            print("Error: Please provide a world name. Usage: %pp_start <world_name>")
            return

        # Stop any currently active server session first
        if self.active_paper_server and self.active_paper_server.is_alive():
            print(f"Stopping the currently active server for world '{self.active_paper_server.world_name}'...")
            self.active_paper_server.stop()

        # Define the directory for the new world
        world_directory = MC_WORLDS_BASE_DIR / world_name

        # For now, we assume the directory exists.
        # The %pp_create magic would be responsible for actually creating it.
        if not world_directory.exists():
            print(f"Error: World directory does not exist at '{world_directory}'.")
            print(f"Please create it first with: %pp_create_world {world_name}")
            return

        print(f"--- Starting new session for world: {world_name} ---")

        # Start the Paper server
        self.active_paper_server = PaperServerManager(world_name, world_directory)
        self.active_paper_server.start(**extra_server_properties)
        # now start it after files are generated and it is terminated once
        if not self.active_paper_server.is_alive():
            self.active_paper_server = PaperServerManager(world_name, world_directory)
            self.active_paper_server.start(**extra_server_properties)

        if not self.active_paper_server.is_alive():
            print("Could not start Paper server. Aborting.")
            return

        creds_path = world_directory / '.mc_creds.json'

        with creds_path.open('r') as f:
            self.server_data = json.load(f)

        if not 'app_port' in list(self.server_data.keys()):
            self.server_data['app_port'] = 5001

        if is_secure:
            print("Starting secure SSH tunnel gateway...")
            token = _start_secure_tunnel_host(self.server_data['port'], self.server_data['rcon_port'], self.server_data['mj_port'], use_upnp=use_upnp, explicit_host=explicit_host)

            if token:
                vpn_ip = get_vpn_ip()

                print(f"\n[SECURE HOST] Tunnel active!")
                if vpn_ip:
                    print("\n🎮 Option A: PC/Mac Remote Play (No VPN required)")
                    print(f"Share this Join Code with your friends:\n{token}")

                    print("\n📱 Option B: Bedrock/iPad Remote Play (Requires Tailscale)")
                    print(f"Tell friends to run %mc_start_app with this IP: {vpn_ip}")
                    print(f"(Or type {vpn_ip} directly into the Minecraft Bedrock server list!)")
                else:
                    print(f"\nShare this Join Code with your friends:\n{token}")
                    print("\n💡 Did you know? You can allow Xbox and iPad players to join securely from anywhere")
                    print("by installing Tailscale (a free virtual network) on this computer!")
            else:
                print("\n[SECURE HOST] Failed to generate Join Code.\n")

    @line_magic
    def pp_stop_world(self, line):
        """
        Stops the currently running Paper server and its associated mc-ed app server.
        """
        # Check if a server session is active
        if not self.active_paper_server or not self.active_paper_server.is_alive():
            print("No active Paper server session is currently running.")
            return

        print(f"--- Stopping session for world: {self.active_paper_server.world_name} ---")

        # Stop the mc-ed application server first
        print("Stopping application server...")
        stop_app_server() # This is your existing function from mcserver.py
        self.mc_name = None
        # Stop the Paper server process
        # The .stop() method in PaperServerManager handles the graceful shutdown
        print("Stopping Paper server (this may take a moment)...")
        self.active_paper_server.stop()

        # Clean up the state
        self.active_paper_server = None
        print("Session stopped successfully.")

    @line_magic
    def pp_list_worlds(self, line):
        """
        Scans the user's worlds directory and lists all available worlds,
        their status, and Minecraft version.
        """
        worlds_base_dir = MC_WORLDS_BASE_DIR

        if not worlds_base_dir.exists() or not worlds_base_dir.is_dir():
            print(f"Worlds directory not found at: {worlds_base_dir}")
            print("Create a world first with: %pp_create_world <world_name>")
            return

        print("--- Available Minecraft Worlds ---")

        found_worlds = []
        # Iterate through each item in the base worlds directory
        for world_dir in worlds_base_dir.iterdir():
            if world_dir.is_dir():
                manifest_path = world_dir / "world_manifest.json"
                if manifest_path.exists():
                    # This is a valid world, so we'll read its manifest
                    try:
                        with open(manifest_path, 'r') as f:
                            manifest = json.load(f)

                        status = "RUNNING" if (
                            self.active_paper_server and
                            self.active_paper_server.world_name == world_dir.name and
                            self.active_paper_server.is_alive()
                        ) else "Stopped"

                        found_worlds.append({
                            "name": world_dir.name,
                            "version": manifest.get("paper_version", "Unknown"),
                            "status": status
                        })
                    except (json.JSONDecodeError, KeyError):
                        # Handle corrupted or incomplete manifest files
                        found_worlds.append({
                            "name": world_dir.name,
                            "version": "???",
                            "status": "Corrupted"
                        })

        if not found_worlds:
            print("No worlds found.")
            return

        # --- Print a formatted table ---
        # Find the longest name for formatting
        max_name_len = max(len(w['name']) for w in found_worlds)

        # Header
        print(f"{'World Name'.ljust(max_name_len)} | {'Version'.ljust(10)} | Status")
        print(f"{'-' * max_name_len}-|{'-' * 12}|---------")

        # Rows
        for world in sorted(found_worlds, key=lambda x: x['name']):
            status_line = f"{world['name'].ljust(max_name_len)} | {world['version'].ljust(10)} | {world['status']}"
            # Add a special indicator for the running world
            if world['status'] == "RUNNING":
                status_line += "  <-- ACTIVE"
            print(status_line)

    @line_magic
    def pp_delete_world(self, line):
        """
        Permanently deletes a world directory and all its contents.
        Includes multiple safety checks to prevent accidental deletion.
        Usage: %pp_delete_world <world_name>
        """
        world_name = line.strip()
        if not world_name:
            print("Usage: %pp_delete_world <world_name>")
            return

        # Define the path to the world directory
        world_dir = MC_WORLDS_BASE_DIR / world_name

        # Safety Check: Does the world exist?
        if not world_dir.exists() or not world_dir.is_dir():
            print(f"Error: No world named '{world_name}' found at '{world_dir}'.")
            return

        # Safety Check: Is this world currently running?
        if self.active_paper_server and self.active_paper_server.world_name == world_name and self.active_paper_server.is_alive():
            print(f"Error: Cannot delete the world '{world_name}' because it is currently running.")
            print("Please stop the server first with: %pp_stop_world")
            return

        # Final Confirmation: Get explicit confirmation from the user.
        print("-----------------------------------------------------------------")
        print(f"WARNING: You are about to permanently delete the world '{world_name}'")
        print("and all of its contents. This action cannot be undone.")
        print(f"Directory to be deleted: {world_dir}")
        print("-----------------------------------------------------------------")

        try:
            confirm = input("Type 'yes' to confirm deletion: ")
        except KeyboardInterrupt:
            print("\nDeletion cancelled by user.")
            return

        if confirm.lower() != 'yes':
            print("Deletion cancelled.")
            return

        # Perform the Deletion
        try:
            print(f"Deleting world '{world_name}'...")
            shutil.rmtree(world_dir)
            print("World deleted successfully.")
        except Exception as e:
            print(f"An error occurred while deleting the world directory: {e}")

    @line_magic
    def pp_join_world(self,line):
        """Join an existing world using and start an app server"""
        # Safety Check: Is this world currently running?
        if self.active_paper_server and self.active_paper_server.is_alive():
            print("Please stop the currently running world first with: %pp_stop_world")
            return
        self.ip.run_line_magic('mc_start_app','')

    def _send(self,kind,*args):
        assert kind in ('help','run','data')

        _rcon_client = self._get_client()
        try:
            if kind == 'run':
                _response = _rcon_client.run(*args)
            elif kind == 'data':
                _response = _rcon_client.data(*args)
            elif kind == 'help':
                _response = _rcon_client.help(*args)
            #print(f"[green]MCSHell running and connected to {SERVER_DATA['host']}[/]")
            return _response
        except ConnectionRefusedError as e:
            print("[red bold]Unable to send command. Is the server running?[/]")
            pprint(self.server_data)
        except RCONAuthenticationError as e:
            print("[red bold]The password is wrong. Use %mc_login reset[/]")

    def _get_client(self):
        return MCClient(**self.server_data)

    def _get_player(self, name):
        return MCPlayer(name, **self.server_data)

    def _help(self, *args):
        return self._send('help', *args)
    def _run(self, *args):
        return  self._send('run',*args)
    def _data(self, *args):
        return self._send('data',*args)

    # @property
    # def commands(self):
    #     _rcon_commands = {}
    #     if not self.rcon_commands:
    #         try:
    #             _help_text = self._help()
    #         except:
    #             return _rcon_commands
    #
    #         _help_data = list(filter(lambda x: x != '', map(lambda x: x.split(' '), _help_text.split('/'))))[1:]
    #         for _help_datum in _help_data:
    #             _cmd = _help_datum[0]
    #             if 'minecraft:' in _cmd:
    #                 _cmd = _cmd.split(':')[1]
    #             try:
    #                 _cmd_data = self._help(_cmd)
    #             except:
    #                 return
    #             if not _cmd_data:
    #                 # found a shortcut command like xp -> experience
    #                 continue
    #             _cmd_data = list(map(lambda x:x.split()[1:],_cmd_data.split('/')))
    #             _sub_cmd_data = {}
    #             for _sub_cmd_datum in _cmd_data[1:]:
    #                 if not _sub_cmd_datum[0][0]  in ('<','[','('):
    #                     _sub_cmd_data.update({_sub_cmd_datum[0]: _sub_cmd_datum[1:]})
    #                 else:
    #                     # TODO what about commands without sub-commands?
    #                     _sub_cmd_data.update({' ': _sub_cmd_datum})
    #                 _rcon_commands.update({_cmd.replace('-','_'): _sub_cmd_data})
    #         self.rcon_commands = _rcon_commands
    #     return self.rcon_commands

    @property
    def commands(self):
        """
        Builds a unique, deduplicated command and subcommand registry.
        Deduplicates sub-items like gamerules (e.g., 'spawn_mobs' vs 'minecraft:spawn_mobs').
        """
        if not self.rcon_commands:
            _rcon_commands = {}
            try:
                _help_text = self._help() # Stripped by MCClient
            except:
                return {}

            if not _help_text:
                return {}

            seen_base_cmds = set()
            _help_data = list(filter(None, _help_text.split('/')))

            for entry in _help_data:
                parts = entry.split()
                if not parts or parts[0] in ('?', 'bukkit:?'):
                    continue

                raw_cmd = parts[0]
                base_cmd = raw_cmd.split(':')[-1]

                if base_cmd in seen_base_cmds:
                    continue

                seen_base_cmds.add(base_cmd)
                clean_key = raw_cmd.replace('-', '_')

                try:
                    _cmd_help = self._help(raw_cmd) # Stripped by MCClient
                    _help_lines = list(map(lambda x: x.split()[1:], _cmd_help.split('/')))

                    _sub_cmd_data = {}
                    seen_sub_items = set() # Track subcommands/gamerules specifically

                    for line_args in _help_lines:
                        if not line_args:
                            continue

                        arg0 = line_args[0]
                        # If it's a literal (not a placeholder like <target>)
                        if not arg0.startswith(('<', '[', '(')):
                            # Deduplicate sub-item (e.g., minecraft:spawn_mobs -> spawn_mobs)
                            clean_sub = arg0.split(':')[-1]
                            if clean_sub not in seen_sub_items:
                                _sub_cmd_data.update({clean_sub: line_args[1:]})
                                seen_sub_items.add(clean_sub)
                        else:
                            # Catch-all for commands that take direct syntax arguments
                            _sub_cmd_data.update({' ': line_args})

                    _rcon_commands.update({clean_key: _sub_cmd_data})
                except:
                    continue

            self.rcon_commands = _rcon_commands

        return self.rcon_commands

    @line_magic
    def mc_login(self,line=''):
        '''
        %mc_login
        '''


        self.server_data.update({
            'host': Prompt.ask('Server Address:', default=self.server_data['host']),
            'rcon_port': int(Prompt.ask('Server Port:', default=str(self.server_data['rcon_port']))),
            'mj_port': int(Prompt.ask('Plugin Port:', default=str(self.server_data['mj_port']))),
            'password': Prompt.ask('Server Password:', password=True)
        })

        try:
            self._get_client().help()
        except Exception as e:
            print("[red bold]login failed[/]")

    @line_magic
    def mc_server_info(self,line):
        _mcc = self._get_client()
        pprint(self.server_data)


    @line_magic
    def mc_help(self, line):
        """
        Sorted, deduplicated help menu.
        Prevents 'minecraft:' clutter and gamerule text-walls.
        """
        _cmd = []
        if line:
            _line_parts = line.split()
            # Lookup docs by clean name (e.g., 'enchant' even if user types 'minecraft:enchant')
            clean_name = _line_parts[0].split(':')[-1]
            _doc_data = self.mc_cmd_docs.get(clean_name, (None, None, None))

            if _doc_data[0]:
                print(f"{_doc_data[0]}\n{_doc_data[1]}\n")

            if _doc_data[2]:
                for d_line in _doc_data[2]: print(d_line)
                return

            _cmd += [' '.join(_line_parts)]

        _raw_help = self._help(*_cmd)
        if not _raw_help:
            print("No help available!")
            return

        _help_text = _raw_help

        seen_base = set()
        output = []

        for entry in filter(None, _help_text.split('/')):
            parts = entry.split()
            if not parts or parts[0] in ('?', 'bukkit:?'): continue

            raw_cmd = parts[0]
            base_name = raw_cmd.split(':')[-1]

            if base_name in seen_base: continue
            seen_base.add(base_name)

            # Truncate the massive gamerule ruleset for the general list
            if base_name == "gamerule" and len(entry) > 200:
                entry = f"{raw_cmd} <rule> [<value>]"

            output.append(entry.replace('-', '_'))

        # Sort alphabetically for easy scanning
        for line in sorted(output):
            print(line)

    def _complete_mc_help(self, ipyshell, event):
        """
        Provides deep, deduplicated completion for %mc_help.
        Supports: %mc_help gamerule <TAB> -> clean list of rules.
        """
        text_to_complete = event.symbol
        parts = event.line.split()

        # Extract and normalize the command name
        command = None
        if len(parts) >= 2:
            command = parts[1].replace('-', '_')
            if ':' in command:
                command = command.split(':')[-1]

        arg_matches = []

        # Case 1: Completing the base command
        if len(parts) == 1 or (len(parts) == 2 and text_to_complete != ''):
            arg_matches = [c for c in self.commands.keys() if c.startswith(text_to_complete)]

        # Case 2: Showing/Completing sub-items (like gamerules)
        elif len(parts) >= 2 and command in self.commands:
            sub_map = self.commands[command]
            sub_keys = [k for k in sub_map.keys() if k != ' ']

            if len(parts) == 2 and text_to_complete == '':
                arg_matches = sub_keys
            elif len(parts) == 3 and text_to_complete != '':
                arg_matches = [k for k in sub_keys if k.startswith(text_to_complete)]

        ipyshell.user_ns.update({'rcon_matches': arg_matches})
        return arg_matches

    @line_magic
    def mc_run(self,line):
        '''
        %mc_run COMMAND
        '''

        _arg_list = line.split(' ')
        _arg_list[0] = _arg_list[0].replace('_','-')
        # print(f"Send: {' '.join(_arg_list)}")
        try:
            response = self._run(*_arg_list)
            if response == '':
                return
        except:
            return
        if not response:
            return
        
        print('Response:')
        print('-' * 100)
        if _arg_list[0] == 'help':
            _responses = response.split('/')
            for _resp in _responses:
                if _resp.strip():
                    # Keep namespaces, just fix hyphens
                    _parts = _resp.split()
                    _parts[0] = _parts[0].replace('-', '_')
                    print('\t' + ' '.join(_parts))
            # for _response in _responses:
            #     print('\t' + _response)
        elif response.split()[0] == 'Unknown':
            print("[red]Error in usage:[/]")
            self.mc_help(line)
        else:
            print(response)
        print('-' * 100)

    def _complete_mc_run(self, ipyshell, event):
        ipyshell.user_ns.update(
            dict(
                rcon_event=event,
                rcon_symbol=event.symbol,
                rcon_line=event.line,
                rcon_cursor_pos=event.text_until_cursor)
        ) # Capture ALL event data IMMEDIATELY

        text_to_complete = event.symbol
        line = event.line

        parts = line.split()

        ipyshell.user_ns.update(dict(rcon_text_to_complete=text_to_complete)) # Capture text_to_complete
        ipyshell.user_ns.update(dict(rcon_parts=parts)) # Capture parts

        if len(parts) >= 2:
            command = parts[1]
            if 'minecraft:' in command:
                command = command.split(':')[1]
        arg_matches = []
        if len(parts) == 1: # showing commands
            arg_matches = [c for c in self.commands.keys()]
        elif len(parts) == 2 and text_to_complete != '':  # completing commands
            arg_matches = [c for c in self.commands.keys() if c.startswith(text_to_complete)]
        elif len(parts) == 2 and text_to_complete == '':  # showing subcommands
            sub_commands = list(self.commands[command].keys())
            arg_matches = [sub_command for sub_command in sub_commands]
        elif len(parts) == 3 and text_to_complete != '':  # completing subcommands
            sub_commands = list(self.commands[command].keys())
            arg_matches = [sub_command for sub_command in sub_commands if sub_command.startswith(text_to_complete)]
        elif len(parts) == 3 and text_to_complete == '':  # showing arguments
            sub_command = parts[2]
            sub_command_args = self.commands[command][sub_command]
            arg_matches = [sub_command_arg for sub_command_arg in sub_command_args]
        elif len(parts) > 3: # completing arguments
            sub_command = parts[2]
            sub_command_args = self.commands[command][sub_command]
            current_arg_index = len(parts) - 3# Index of current argument
            if text_to_complete == '': # showing next arguments
                arg_matches = [arg for arg in sub_command_args[current_arg_index+1]]
            else:
                try:
                    arg_matches = [arg for arg in sub_command_args[current_arg_index+1] if arg.startswith(text_to_complete)]
                except IndexError:
                    return []

        ipyshell.user_ns.update({'rcon_matches': arg_matches})
        return arg_matches # Fallback

    @needs_local_scope
    @line_magic
    def mc_data(self, line,local_ns):
        '''
        %mc_data OPERATION ARGUMENTS
        '''

        _arg_list = line.split(' ')
        try:
            assert _arg_list[0] in ('get','modify','merge','remove')
        except AssertionError:
            print(f"Wrong arguments!")
            return
        print(f"Requesting data: {' '.join(_arg_list)}")
        _uuid = str(uuid.uuid1())[:4]
        _var_name = f"data_{_arg_list[0]}_{_uuid}"
        print(f"requested data will be available as {_var_name} locally")
        _data = self._data(*_arg_list)
        local_ns.update({_var_name:_data})

    @needs_local_scope
    @line_magic
    def mc_client(self,line,local_ns):
        _uuid = str(uuid.uuid1())[:4]
        _var_name = f"mcc_{_uuid}"
        print(f"requested client will be available as {_var_name} locally")
        local_ns[_var_name] = self._get_client()

    @needs_local_scope
    @line_magic
    def mc_player(self, line, local_ns):
        _line_parts = line.strip().split()
        if not len(_line_parts) == 1:
            _player_name = self._get_mc_name()
        else:
            _player_name = _line_parts.pop()
        print(f"requested player will be available as the variable {_player_name} locally")
        local_ns[_player_name] = self._get_player(_player_name)

    @line_magic
    def mc_create_script(self, line):
        """
        Receives a block of Python code from the mc-ed editor,
        saves it to a uniquely named file in powers/blockcode.
        """
        code_to_save = line
        if not code_to_save:
            print("Received empty code block. No script created.")
            return

        try:
            # Create a unique filename for the power
            power_dir = pathlib.Path("./powers/blockcode")
            power_dir.mkdir(parents=True, exist_ok=True)

            # Generate a unique suffix for the filename
            file_hash = uuid.uuid4().hex[:6]
            filename = f"power_{file_hash}.py"
            filepath = power_dir / filename

            with open(filepath, 'w') as f:
                f.write(code_to_save)

            print(f"Successfully saved power to: {filepath}")
            print(f"To use it, you can now run:\nfrom powers.blockcode.{filename.replace('.py','')} import *")

        except Exception as e:
            print(f"Error saving script: {e}")

    @line_magic
    def mc_debug_and_define(self, line):
        """
        Receives code and metadata from the editor, dynamically imports it,
        constructs the execution context, and runs it safely in a background thread.
        """
        try:
            # 1. Parse JSON payload from the editor
            payload = json.loads(line)
            code_to_execute = payload.get("code")
            metadata = payload.get("metadata", {})

            # 2. Setup the directory and file
            power_dir = pathlib.Path("./powers/blockcode")
            power_dir.mkdir(parents=True, exist_ok=True)
            (power_dir / "__init__.py").touch(exist_ok=True)

            file_hash = uuid.uuid4().hex[:6]
            filename = f"power_{file_hash}.py"
            filepath = power_dir / filename

            # 3. Save the generated code
            with open(filepath, 'w') as f:
                f.write(code_to_execute)

            print(f"Successfully saved power to: {filepath}")
            print(f"To use it, you can now run:\nfrom powers.blockcode.{filename.replace('.py','')} import *")

            # 4. Initialize Player & Context
            player_name = self._get_mc_name()
            player = self._get_player(player_name)

            # Setup cancellation support and bind to the player for blocking operations
            cancel_event = threading.Event()
            player.cancel_event = cancel_event

            actions = MCActions(player)

            # 5. Dynamically Import the Module
            module_name = f"powers.blockcode.power_{file_hash}"
            if module_name in sys.modules:
                module = sys.modules[module_name]
                importlib.reload(module)
            else:
                module = importlib.import_module(module_name)

            # 6. Instantiate the Runner
            runner = module.BlocklyProgramRunner(actions, cancel_event=cancel_event)

            # 7. Define the Thread Execution Wrapper
            execution_id = f"debug_{file_hash}"
            def run_task():
                try:
                    runner.run_program()
                except Exception as e:
                    # Ignore PowerCancelledException which is a normal, clean exit
                    if type(e).__name__ != "PowerCancelledException":
                        import traceback
                        print(f"\n--- Error executing {execution_id}: {e} ---")
                        traceback.print_exc()
                finally:
                    # Automatically remove from running registry when done
                    if execution_id in RUNNING_POWERS:
                        del RUNNING_POWERS[execution_id]

            # 8. Start Thread and Update Registry
            thread = threading.Thread(target=run_task, daemon=True)

            RUNNING_POWERS[execution_id] = {
                'thread': thread,
                'cancel_event': cancel_event,
                'power_id': metadata.get('id', file_hash),
                'start_time': time.time()
            }

            thread.start()

            print(f"--- Power '{metadata.get('function_name', 'None')}' metadata defined/updated. ---")
            print(f"--- Started debug execution with ID: {execution_id} ---")
            # The editor explicitly looks for this string format to hook its STOP button
            print(f"MCED_EXECUTION_ID:{execution_id}")
            print(f"--- To stop it, run: %mc_cancel_power {execution_id} ---")

        except Exception as e:
            import traceback
            print(f"An unexpected error occurred during execution setup: {e}")
            traceback.print_exc()

    def _complete_mc_cancel_power(self, ipyshell, event):
        text = event.symbol
        parts = event.line.split()

        arg_matches= []
        if len(parts) == 1: # showing commands
            # arg_matches = [c for c in self.commands.keys()]
            arg_matches = [c for c in RUNNING_POWERS]
            ipyshell.user_ns.update({'cancel_matches':arg_matches})
        elif len(parts) == 2 and text != '':  # completing commands
            arg_matches = [c for c in RUNNING_POWERS if c.startswith(text)]
            ipyshell.user_ns.update({'cancel_matches':arg_matches})

        return arg_matches

    @line_magic
    def mc_cancel_power(self, line):
        """Cancels a running power by its execution ID."""
        execution_id = line.strip()
        if not execution_id:
            print("Usage: %mc_cancel_power <execution_id>")
            if RUNNING_POWERS:
                print("Currently running powers:", list(RUNNING_POWERS.keys()))
            return

        power_metadata = RUNNING_POWERS.get(execution_id)
        if power_metadata:
            print(f"Sending cancellation signal to power: {execution_id}")
            # Corrected attribute access (removed paste garbage)
            power_metadata['cancel_event'].set()
        else:
            print(f"Error: No running power found with ID: {execution_id}")

    def _get_mc_name(self) -> Optional[str]:
        """
        Determines and caches the Minecraft username for the current session.

        On the first call, it checks for a system-wide config file and falls
        back to prompting the user. On subsequent calls, it returns the cached name.

        Returns:
            The Minecraft username as a string, or None if an error occurs.
        """
        # --- Caching Check: Return the name if already determined ---
        if self.mc_name:
            return self.mc_name

        minecraft_name = None

        # --- Lab Setup: Check for the central config file first ---
        if MC_CENTRAL_CONFIG_FILE.exists():
            print(f"Found system-wide configuration at {MC_CENTRAL_CONFIG_FILE}.")
            try:
                linux_user = os.getlogin()
            except OSError:
                linux_user = os.environ.get('USER')

            if not linux_user:
                print("Fatal Error: Could not determine Linux username.")
                return None

            try:
                with open(MC_CENTRAL_CONFIG_FILE, 'r') as f:
                    user_map = json.load(f)

                name_from_map = user_map.get(linux_user)
                if not name_from_map:
                    print(f"Error: Your Linux user '{linux_user}' is not registered. Please contact your administrator.")
                    return None

                print(f"Authenticated as Minecraft user: {name_from_map}")
                minecraft_name = name_from_map

            except (IOError, json.JSONDecodeError) as e:
                print(f"Fatal Error: Could not read or parse the system configuration file: {e}")
                return None

        # --- Personal Use: Fallback to prompting the user ---
        else:
            print("No system-wide configuration found. Running in personal use mode.")
            try:
                name_from_input = input("Please enter your Minecraft username: ").strip()
                if not name_from_input:
                    print("No username entered. Aborting.")
                    return None

                print(f"Session will run as Minecraft user: {name_from_input}")
                minecraft_name = name_from_input
            except KeyboardInterrupt:
                print("\nInput cancelled by user. Aborting.")
                return None

        # --- Cache the result before returning ---
        self.mc_name = minecraft_name
        return self.mc_name

    @line_magic
    def mc_start_app(self, line):
        """
        Starts the client application components to connect to a world.
        Usage: %mc_start_app [token|IP] [--local-mc <port>] [--local-rcon <port>] [--local-mj <port>]
        """
        parts = line.split()

        # If the first argument doesn't start with '--', it's our token
        token = parts[0] if parts and not parts[0].startswith('--') else None

        if not token:
            self.server_data = {
                'host': Prompt.ask('Server Address:', default=self.server_data['host']),
                'port': int(Prompt.ask('Server Port:', default=str(self.server_data['port']))),
                'rcon_port': int(Prompt.ask('Rcon Port:', default=str(self.server_data['rcon_port']))),
                'mj_port': int(Prompt.ask('Plugin Port:', default=str(self.server_data['mj_port']))),
                'app_port': int(Prompt.ask('Application Port:', default=str(self.server_data['app_port']))),
                'password':None,
            }

        if token:
            # 1. DEFINE VARS FIRST: Determine intended local ports from defaults
            local_mc = self.server_data.get('port', 25565)
            local_rcon = self.server_data.get('rcon_port', 25575)
            local_mj = self.server_data.get('mj_port', 4721)

            # 2. OVERRIDES: Process any user-provided terminal overrides
            if '--local-mc' in parts:
                local_mc = int(parts[parts.index('--local-mc') + 1])
            if '--local-rcon' in parts:
                local_rcon = int(parts[parts.index('--local-rcon') + 1])
            if '--local-mj' in parts:
                local_mj = int(parts[parts.index('--local-mj') + 1])

            # 3. SAFETY CHECK
            if hasattr(self, 'active_paper_server') and getattr(self, 'active_paper_server') and self.active_paper_server.is_alive():
                print("A local Minecraft server is already running. Proceeding with proxy connections anyway.")

            # 4. START TUNNEL OR VPN: Smart Token Routing
            if re.match(r"^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$", token):
                print(f"\n[VPN DETECTED] Connecting directly to {token} over virtual LAN...")
                self.server_data['host'] = token
                self.server_data['port'] = local_mc
                self.server_data['rcon_port'] = local_rcon
                self.server_data['mj_port'] = local_mj
            else:
                print("Connecting to secure tunnel...")
                _start_secure_tunnel_client(token, local_mc, local_rcon, local_mj)

                # THE MAGIC TRICK: Overwrite in-memory server_data to point to the secure tunnel entrances
                self.server_data['host'] = '127.0.0.1'
                self.server_data['port'] = local_mc
                self.server_data['rcon_port'] = local_rcon
                self.server_data['mj_port'] = local_mj

                # Give the background thread a moment to establish port forwards
                time.sleep(1.0)
                print("Tunnel connection established.")

        login_to_server = Prompt.ask('Do you want to be a server op?',choices=['yes','no'],default='no')
        if login_to_server.lower() == 'yes':
            self.server_data.update({
                'password': Prompt.ask('Server Password:', password=True)
            })

        minecraft_name = self._get_mc_name()
        power_repo = SQLiteRepository(minecraft_name)
        print("Stopping any running application servers.")
        stop_app_server()
        print(f"Starting application server for authorized Minecraft player: {minecraft_name}")
        start_app_server(self.server_data,minecraft_name,self.shell,power_repo)
        print(f"Open a browser here to use the editor:")
        print(f"\thttp://{socket.gethostname()}.local:{self.server_data['app_port']}")
        print(f"Open a browser here to use the control:")
        print(f"\thttp://{socket.gethostname()}.local:{self.server_data['app_port']}/control")
        return

    @line_magic
    def mc_stop_app(self, line):
        """Stops the app mcserver thread."""
        stop_app_server()
        # force another read of user_map.json or request user input
        self.mc_name = None

    @line_magic
    def mc_server_status(self,line):
        '''Check if servers are running'''
        if self.app_server_thread and self.app_server_thread.is_alive():
            print("The application server is running")
        else:
            print("The application server is not running")

    @line_magic
    def mc_invite_player(self, line):
        """
        Sends your current server connection details to another player.
        Usage: %mc_invite_player <recipient_app_url>
        Example: %mc_invite_player http://192.168.1.102:5000
        """
        if not MC_CENTRAL_CONFIG_FILE.exists():
            print("Invitations are not allowed without a central config file.")
            return

        args = line.split()
        if len(args) != 1:
            print("Usage: %mc_invite_player <recipient_app_url>")
            return

        recipient_url = args[0]
        sender_name = self._get_mc_name()
        host_name = socket.gethostname()

        # Ensure the user has an active server session
        if not self.active_paper_server or not self.active_paper_server.is_alive():
            print("Error: You must have an active world running to send an invitation.")
            return
        invitation_data = {
            "sender_name": sender_name,
            "world_name": self.active_paper_server.world_name,
            "host": f"{host_name}.local",
            "fj_port": self.server_data.get('fj_port'),
            "rcon_port":None,
            "password":None
        }

        invite_as_server_op = Prompt.ask('Do you want to make the player a server op?',choices=['yes','no'],default='no')
        if invite_as_server_op.lower() == 'yes':
            # Construct the payload with your connection details
            invitation_data.update({
                "rcon_port": self.server_data.get('rcon_port'),
                "password": self.server_data.get('password')
            })

        # The endpoint on the recipient's server we will send to
        invite_endpoint = f"{recipient_url.rstrip('/')}/api/receive_invite"

        print(f"Sending invitation to {recipient_url}...")
        try:
            response = requests.post(invite_endpoint, json=invitation_data, timeout=10)
            if response.ok:
                print("Invitation sent successfully!")
            else:
                print(f"Failed to send invitation. Server responded with: {response.status_code}")
                print(f"Message: {response.text}")
        except requests.exceptions.RequestException as e:
            print(f"Error: Could not connect to the other player's application server. {e}")

    @line_magic
    def mc_stdlib(self, line):
        """
        Management magic for the Minecraft Shell Standard Library.
        Usage:
            %mc_stdlib list [player_id]             - List available powers in a library.
            %mc_stdlib list-stdlib                  - List powers available in the Standard Library bundle.
            %mc_stdlib rename-category <old> <new>  - Rename a category in your library.
            %mc_stdlib export [player_id]           - Export powers to stdlib.json.
            %mc_stdlib remove                       - Remove powers from stdlib.json.
            %mc_stdlib sync                         - Merge missing Standard Library powers into your library.
        """
        # Using shlex.split to handle quoted strings with spaces
        try:
            args = shlex.split(line)
        except ValueError as e:
            print(f"Error parsing command line: {e}")
            return

        if not args:
            print("Usage: %mc_stdlib [list|list-stdlib|rename-category|export|remove|sync]")
            return

        command = args[0]
        from mcshell.constants import MC_DATA_DIR

        if command == "rename-category":
            if len(args) < 3:
                print("Usage: %mc_stdlib rename-category <old_name> <new_name>")
                return
            old_name, new_name = args[1], args[2]
            player = self.mc_name or self._get_mc_name()
            repo = SQLiteRepository(player)

            # Now correctly handles categories with spaces when quoted
            count = repo.rename_category(old_name, new_name)
            print(f"Renamed {count} powers from '{old_name}' to '{new_name}'.")
            print("Refresh the editor to see changes.")

        elif command == "list":
            target_player = args[1] if len(args) > 1 else (self.mc_name or self._get_mc_name())
            repo = SQLiteRepository(target_player)
            powers = repo.list_powers()
            if not powers:
                print(f"No powers found for {target_player}.")
                return
            print(f"\nPowers in {target_player}'s library:")
            for i, p in enumerate(powers):
                print(f" [{i}] {p['name']} ({p.get('category', 'General')})")

        elif command == "list-stdlib":
            target_path = MC_DATA_DIR.joinpath('powers/stdlib.json')
            if not target_path.exists():
                print("Standard Library file not found.")
                return
            try:
                with target_path.open('r') as f:
                    data = json.load(f)
                    powers = data.get('powers', [])
                    print(f"\nStandard Library Bundle (v{data.get('version', '?')}):")
                    for i, p in enumerate(powers):
                        print(f" [{i}] {p['name']} ({p.get('category', 'General')})")
            except Exception as e:
                print(f"Error reading stdlib: {e}")

        elif command == "export":
            target_player = args[1] if len(args) > 1 else (self.mc_name or self._get_mc_name())
            repo = SQLiteRepository(target_player)
            powers = repo.list_full_powers()
            if not powers:
                print(f"No powers found in {target_player}'s library.")
                return

            print(f"\nSelect powers to export from {target_player} to the Standard Library:")
            for i, p in enumerate(powers):
                print(f" [{i}] {p['name']} ({p.get('category', 'General')})")

            selection = Prompt.ask("Enter indices to export (space separated, or 'all')")

            if selection.lower() == 'all':
                selected_indices = range(len(powers))
            else:
                try:
                    selected_indices = [int(i) for i in selection.split()]
                except (ValueError, IndexError):
                    print("Invalid selection.")
                    return

            powers_to_export = []
            for idx in selected_indices:
                if 0 <= idx < len(powers):
                    full_p = powers[idx]
                    full_p['author'] = 'System'
                    powers_to_export.append(full_p)

            if not powers_to_export:
                print("No valid powers selected for export.")
                return

            target_path = MC_DATA_DIR.joinpath('powers/stdlib.json')
            current_version = 0
            existing_powers = []

            if target_path.exists():
                try:
                    with target_path.open('r') as f:
                        data = json.load(f)
                        current_version = data.get('version', 0)
                        existing_powers = data.get('powers', [])
                except Exception: pass

            stdlib_map = {p['power_id']: p for p in existing_powers}
            for p in powers_to_export:
                stdlib_map[p['power_id']] = p

            new_version = current_version + 1
            export_data = {"version": new_version, "powers": list(stdlib_map.values())}

            with target_path.open('w') as f:
                json.dump(export_data, f, indent=4)

            print(f"Successfully exported {len(powers_to_export)} powers.")
            print(f"Standard Library now contains {len(export_data['powers'])} powers (v{new_version}).")

        elif command == "remove":
            target_path = MC_DATA_DIR.joinpath('powers/stdlib.json')
            if not target_path.exists():
                print("Standard Library file not found.")
                return

            try:
                with target_path.open('r') as f:
                    data = json.load(f)
                    current_version = data.get('version', 0)
                    powers = data.get('powers', [])
            except Exception as e:
                print(f"Error reading stdlib: {e}")
                return

            if not powers:
                print("Standard Library is empty.")
                return

            print("\nSelect powers to remove from the Standard Library:")
            for i, p in enumerate(powers):
                print(f" [{i}] {p['name']} ({p.get('category', 'General')})")

            selection = Prompt.ask("Enter indices to remove (space separated)")
            try:
                indices_to_remove = set(int(i) for i in selection.split())
            except ValueError:
                print("Invalid selection.")
                return

            new_powers = [p for i, p in enumerate(powers) if i not in indices_to_remove]
            if len(new_powers) == len(powers):
                print("No powers removed.")
                return

            new_version = current_version + 1
            export_data = {"version": new_version, "powers": new_powers}

            with target_path.open('w') as f:
                json.dump(export_data, f, indent=4)

            print(f"Successfully removed {len(powers) - len(new_powers)} powers.")
            print(f"Standard Library now contains {len(new_powers)} powers (v{new_version}).")

        elif command == "sync":
            player = self.mc_name or self._get_mc_name()
            repo = SQLiteRepository(player)

            target_path = MC_DATA_DIR.joinpath('powers/stdlib.json')
            if not target_path.exists():
                print("Error: Standard library file not found.")
                return

            try:
                with target_path.open('r') as f:
                    data = json.load(f)
                    std_powers = data.get('powers', [])

                # Get current library to prevent overwriting user modifications
                current_power_ids = {p['power_id'] for p in repo.list_powers()}

                added = 0
                for p in std_powers:
                    if p['power_id'] not in current_power_ids:
                        p['author'] = 'System'
                        repo.save_power(p)
                        added += 1

                print(f"Merge Complete: Added {added} new powers from Standard Library.")
                if added > 0:
                    print("Refresh the editor to see the new additions.")
            except Exception as e:
                print(f"Sync failed: {e}")

    @line_magic
    def mc_library(self, line):
        """
        Management magic for your personal Minecraft Shell Power Library.
        Usage:
            %mc_library list                         - List all powers in your library.
            %mc_library rename-category <old> <new>  - Rename a category in your library.
            %mc_library remove                       - Interactively remove powers from your library.
            %mc_library export <filepath.json>       - Export selected powers to a JSON file.
            %mc_library import <filepath.json>       - Import powers from a JSON file into your library.
        """
        import shlex  # Ensure shlex is available
        from mcshell.mcrepo import PowerRepository, SQLiteRepository

        try:
            args = shlex.split(line)
        except ValueError as e:
            print(f"Error parsing command line: {e}")
            return

        if not args:
            print("Usage: %mc_library [list|rename-category|remove|export|import]")
            return

        command = args[0]
        player = self.mc_name or self._get_mc_name()
        if not player:
            return

        # Treat the repository purely as its interface type
        repo: PowerRepository = SQLiteRepository(player)

        if command == "list":
            powers = repo.list_powers()
            if not powers:
                print(f"No powers found in your library ({player}).")
                return
            print(f"\nPowers in your library ({player}):")
            for i, p in enumerate(powers):
                print(f" [{i}] {p['name']} ({p.get('category', 'General')})")

        elif command == "rename-category":
            if len(args) < 3:
                print("Usage: %mc_library rename-category <old_name> <new_name>")
                return
            old_name, new_name = args[1], args[2]

            # Utilizing strictly the PowerRepository interface
            powers = repo.list_full_powers()
            count = 0
            for p in powers:
                cat = p.get('category', '')
                if cat == old_name:
                    p['category'] = new_name
                    repo.save_power(p)
                    count += 1
                elif cat.startswith(f"{old_name}/"):
                    p['category'] = new_name + cat[len(old_name):]
                    repo.save_power(p)
                    count += 1

            print(f"Renamed {count} powers from '{old_name}' to '{new_name}'.")
            print("Refresh the editor to see changes.")

        elif command == "remove":
            powers = repo.list_powers()
            if not powers:
                print("Your library is empty.")
                return

            print("\nSelect powers to remove from your library:")
            for i, p in enumerate(powers):
                print(f" [{i}] {p['name']} ({p.get('category', 'General')})")

            selection = Prompt.ask("Enter indices to remove (space separated)")
            try:
                indices_to_remove = [int(i) for i in selection.split()]
            except ValueError:
                print("Invalid selection.")
                return

            removed_count = 0
            for idx in indices_to_remove:
                if 0 <= idx < len(powers):
                    power_id = powers[idx]['power_id']
                    if repo.delete_power(power_id):
                        removed_count += 1

            print(f"Successfully removed {removed_count} powers from your library.")

        elif command == "export":
            if len(args) < 2:
                print("Usage: %mc_library export <filepath.json>")
                return

            export_path = Path(args[1]).expanduser()
            powers = repo.list_full_powers()
            if not powers:
                print("Your library is empty. Nothing to export.")
                return

            print(f"\nSelect powers to export to {export_path}:")
            for i, p in enumerate(powers):
                print(f" [{i}] {p['name']} ({p.get('category', 'General')})")

            selection = Prompt.ask("Enter indices to export (space separated, or 'all')")

            if selection.lower() == 'all':
                powers_to_export = powers
            else:
                try:
                    selected_indices = [int(i) for i in selection.split()]
                    powers_to_export = [powers[i] for i in selected_indices if 0 <= i < len(powers)]
                except (ValueError, IndexError):
                    print("Invalid selection.")
                    return

            if not powers_to_export:
                print("No valid powers selected for export.")
                return

            export_data = {"powers": powers_to_export}
            export_path.parent.mkdir(parents=True, exist_ok=True)
            with export_path.open('w') as f:
                json.dump(export_data, f, indent=4)

            print(f"Successfully exported {len(powers_to_export)} powers to {export_path}.")

        elif command == "import":
            if len(args) < 2:
                print("Usage: %mc_library import <filepath.json>")
                return

            import_path = Path(args[1]).expanduser()
            if not import_path.exists():
                print(f"Error: File not found at {import_path}")
                return

            try:
                with import_path.open('r') as f:
                    data = json.load(f)

                # Handle standard {"powers": [...]} structure or legacy flat list/dict structures
                if isinstance(data, dict) and "powers" in data:
                    powers_to_import = data["powers"]
                else:
                    powers_to_import = data if isinstance(data, list) else data.values()

                count = 0
                for p_data in powers_to_import:
                    repo.save_power(p_data)
                    count += 1

                print(f"Successfully imported {count} powers into your library from {import_path}.")
            except Exception as e:
                print(f"Error importing powers: {e}")

        else:
            print(f"Unknown command: {command}")
            print("Usage: %mc_library [list|rename-category|remove|export|import]")

def sync_datapack_library():
    """
    Synchronizes the internal datapack library to the user's worlds directory.
    Does not overwrite existing files to allow students to tweak their copies.
    """
    if MC_INTERNAL_DATAPACKS.exists():
        MC_DATAPACK_LIB_DIR.mkdir(parents=True, exist_ok=True)
        for item in MC_INTERNAL_DATAPACKS.iterdir():
            target = MC_DATAPACK_LIB_DIR / item.name
            if not target.exists():
                if item.is_dir():
                    shutil.copytree(item, target)
                else:
                    shutil.copy2(item, target)

def load_ipython_extension(ip):
    """
    Called by IPython when the extension is loaded.
    This is where we register the magics and the shutdown hook.
    """

    sync_datapack_library()

    # Register the main magic class
    mcshell_instance = MCShell(ip)
    ip.register_magics(mcshell_instance)

    # Define the cleanup function that will be called on exit.
    def shutdown_hook():
        print("\nIPython is shutting down. Stopping active mc-shell session...")
        # We can access the magic instance to call its methods.
        if mcshell_instance.active_paper_server and mcshell_instance.active_paper_server.is_alive():
            mcshell_instance.pp_stop_world('') # Pass an empty line argument
        print("Cleanup complete.")


    # Register the shutdown_hook to run when the Python interpreter exits.
    atexit.register(shutdown_hook)