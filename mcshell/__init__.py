
from IPython.utils.capture import capture_output
import IPython
from IPython.core.magic import Magics, magics_class, line_magic,needs_local_scope

from mcshell.constants import *
from mcshell.mcrepo import PowerRepository,SQLiteRepository
from mcshell.mcclient import MCClient
from mcshell.mcserver import throw_app_server_error, start_app_server, reset_app_server_context, GUI_AUTH_TOKEN
from mcshell.mcserver import RUNNING_POWERS
from mcshell.ppmanager import *
from mcshell.ppdownloader import *
from mcshell.mcplayer import MCPlayer

from mcshell.mcplatforms import CrossPlatformBinary
from mcshell.mcregistry import TAILSCALE_REGISTRY


# =====================================================================
# SSH Tunnel Helper Functions
# =====================================================================
# from mcshell.mctunnelserver import start_host_gateway, connect_client_tunnel, _get_local_ip
# def _run_tunnel_client_thread(host, port, pin, remote_mc, remote_rcon, remote_mj, local_mc, local_rcon, local_mj):
#     loop = asyncio.new_event_loop()
#     asyncio.set_event_loop(loop)
#     try:
#         loop.run_until_complete(connect_client_tunnel(
#             host,
#             port,
#             pin,
#             remote_mc=remote_mc,
#             remote_rcon=remote_rcon,
#             remote_mj=remote_mj,
#             local_mc_port=local_mc,
#             local_rcon_port=local_rcon,
#             local_mj_port=local_mj
#         ))
#     except Exception as e:
#         print(f"\n[Tunnel Client Error] {e}")

# def _start_secure_tunnel_client(join_code, local_mc, local_rcon, local_mj):
#     # Parse the join_code: HOST:PORT#PIN[-MC-RCON-MJ]
#     try:
#         address_part, auth_part = join_code.split('#')
#         host, port_str = address_part.split(':')
#         port = int(port_str)

#         # Check if the host attached custom ports
#         if '-' in auth_part:
#             parts = auth_part.split('-')
#             pin = parts[0]
#             remote_mc = int(parts[1])
#             remote_rcon = int(parts[2])
#             remote_mj = int(parts[3])
#         else:
#             pin = auth_part
#             remote_mc = 25565
#             remote_rcon = 25575
#             remote_mj = 4721

#     except (ValueError, IndexError):
#         print("[Tunnel Client Error] Invalid Join Code format.")
#         return

#     thread = Thread(target=_run_tunnel_client_thread, args=(host, port, pin, remote_mc, remote_rcon, remote_mj, local_mc, local_rcon, local_mj), daemon=True)
#     thread.start()
# def _run_tunnel_host_thread(mc_port, rcon_port, mj_port, mc_version, out_token, use_ssh=False):
#     async def host_task():
#         # 1. Force integer types to ensure our logic works safely
#         mc_port_i = int(mc_port)
#         rcon_port_i = int(rcon_port)
#         mj_port_i = int(mj_port)

#         # Generate a 6-character Kahoot-style PIN (e.g. A9K2B4)
#         pin = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))

#         # Using bind_port=0 lets the OS pick a guaranteed free ephemeral port
#         bound_port = await start_host_gateway(pin, bind_ip='0.0.0.0', bind_port=0, mc_port=mc_port_i, rcon_port=rcon_port_i, mj_port=mj_port_i)

#         host_ip = None

#         if use_ssh:
#             try:
#                 import miniupnpc
#                 upnp = miniupnpc.UPnP()
#                 upnp.discoverdelay = 200
#                 upnp.discover()
#                 upnp.selectigd()
#                 external_ip = upnp.externalipaddress()

#                 # Ask router to map the external port directly to our OS-assigned local port
#                 mapped = upnp.addportmapping(bound_port, 'TCP', upnp.lanaddr, bound_port, 'MC-Shell Secure Tunnel', '')
#                 if mapped:
#                     host_ip = external_ip
#                     print(f"\n[SSH TUNNEL] Success! Router opened port {bound_port}.")
#                 else:
#                     print("\n[SSH TUNNEL] Router denied UPnP mapping. Falling back to local network mode.")
#             except ImportError:
#                 print("\n[SSH TUNNEL] 'miniupnpc' library missing. Falling back to local network mode.")
#             except Exception as e:
#                 print(f"\n[SSH TUNNEL] Failed to configure router UPnP ({e}). Falling back to local network mode.")

#         if not host_ip:
#             host_ip = _get_local_ip()

#         # 2. Formulate the robust Join Code
#         # If the ports match defaults exactly, keep the token short and clean.
#         if mc_port_i == 25565 and rcon_port_i == 25575 and mj_port_i == 4721:
#             join_code = f"{host_ip}:{bound_port}#{pin}-{mc_version}"
#         else:
#             # If ports deviated, append them so the client knows what to ask for
#             join_code = f"{host_ip}:{bound_port}#{pin}-{mc_port_i}-{rcon_port_i}-{mj_port_i}-{mc_version}"

#         out_token.append(join_code)

#         # Keep the event loop alive indefinitely so the SSH server stays up
#         while True:
#             await asyncio.sleep(3600)

#     loop = asyncio.new_event_loop()
#     asyncio.set_event_loop(loop)
#     try:
#         loop.run_until_complete(host_task())
#     except Exception as e:
#         print(f"\n[Tunnel Host Error] {e}")

# def _start_secure_tunnel_host(mc_port, rcon_port, mj_port, mc_version, use_ssh=False):
#     out_token = []
#     # Use daemon=True so the thread automatically dies when IPython exits
#     thread = Thread(target=_run_tunnel_host_thread, args=(mc_port, rcon_port, mj_port, mc_version, out_token, use_ssh), daemon=True)
#     thread.start()

#     # Wait up to 5 seconds for the cryptographic keys and token to generate
#     for _ in range(50):
#         if out_token:
#             return out_token[0]
#         time.sleep(0.1)
#     return None


# =====================================================================
# Networking & Plugin Helper Functions
# =====================================================================

def _get_local_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"


def _get_vpn_ip() -> str | None:
    """
    Scans the host's network interfaces for a VPN IP address.
    Specifically targets Tailscale while avoiding ChromeOS Crostini subnet collisions.
    """
    if not psutil:
        print("psutil module missing. VPN detection disabled.")
        return None

    try:
        # Iterate over all active network interfaces
        for interface, addrs in psutil.net_if_addrs().items():
            for addr in addrs:
                # We only care about IPv4 addresses
                if addr.family == socket.AF_INET:
                    ip = addr.address
                    
                    # Target the Tailscale interface directly
                    if interface.startswith('tailscale'):
                        print(f"Detected Tailscale interface '{interface}' with IP: {ip}")
                        return ip
                        
                    # Fallback for standard CGNAT, explicitly rejecting Crostini's eth0 subnet
                    elif ip.startswith('100.') and not ip.startswith('100.115.92.'):
                        print(f"Detected VPN interface '{interface}' with IP: {ip}")
                        return ip
                        
    except Exception as e:
        print(f"Failed to scan network interfaces for VPN: {e}")

    return None

def _resolve_geysermc_plugin(project_id: str, platform: str = "spigot") -> str:
    """
    Returns the direct download URL from the official GeyserMC API.
    project_id: 'geyser' or 'floodgate'
    platform: 'spigot' (works for both Spigot and Paper servers)
    """
    return f"https://download.geysermc.org/v2/projects/{project_id}/versions/latest/builds/latest/downloads/{platform}"

def _resolve_modrinth_plugin(project_id, mc_version):
    """Queries the Modrinth API for the exact plugin download URL matching the Minecraft version."""
    api_url = f"https://api.modrinth.com/v2/project/{project_id}/version"

    params = {
        "game_versions": f'["{mc_version}"]',
        "loaders": '["paper", "spigot"]'
    }

    headers = {
    "User-Agent": "MyServerManager/1.0 (jeff@thinkae.org)"
    }

    try:
        resp = requests.get(api_url, params=params, headers=headers, timeout=5)
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

def _start_rathole_client(relay_address, token):
    """
    Generates a temporary config and spawns the rathole client subprocess.
    Returns the subprocess.Popen object and the path to the temp config file.
    """

    # Define the UDP-only TOML configuration
    toml_content = f"""[client]
remote_addr = "{relay_address}:2333"
default_token = "{token}"

[client.services.geyser-bedrock]
type = "udp"
local_addr = "127.0.0.1:19132"
"""
    
    # Create a temporary file that won't automatically delete upon closing
    config_file = tempfile.NamedTemporaryFile(mode='w', delete=False, suffix='.toml')
    config_file.write(toml_content)
    config_file.close()

    print(f"[*] Relaying Bedrock UDP traffic via rathole to {relay_address}:2333...")
    
    # Spawn the background process
    # Note: You can redirect stdout/stderr to a log file instead of DEVNULL if needed for debugging
    RH_CLIENT_BIN = MC_DATA_DIR / "rathole"

    current_permissions = RH_CLIENT_BIN.stat().st_mode
    RH_CLIENT_BIN.chmod(current_permissions | stat.S_IEXEC)

    rathole_process = subprocess.Popen(
        [str(RH_CLIENT_BIN), "--client", config_file.name],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )
    
    return rathole_process, config_file.name

def _stop_rathole_client(process, config_path):
    """Terminates the rathole process and cleans up the temporary config."""
    if process:
        print("[*] Terminating rathole relay client...")
        process.terminate()
        try:
            process.wait(timeout=5)
        except subprocess.TimeoutExpired:
            process.kill()
            
    if config_path and os.path.exists(config_path):
        os.remove(config_path)

 

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
        self.ip.set_hook('complete_command', self._complete_slash_run, re_key='^/')

        self.ip.set_hook('complete_command', self._complete_mc_help, re_key='%mc_help')
        self.ip.set_hook('complete_command', self._complete_mc_cancel_power, re_key='%mc_cancel_power')
        self.ip.set_hook('complete_command', self._complete_world_command, re_key='%pp_start_world')
        self.ip.set_hook('complete_command', self._complete_world_command, re_key='%pp_delete_world')

        self.app_server_thread = None

        self.active_paper_server: Optional[PaperServerManager ,None ] = None

        # Track if this session automatically joined Tailscale so we can clean it up
        self.managed_tailscale = False
        self.current_ssh_token = None

    def _connect_tailscale(self, authkey: str, accept_routes: bool = False):
        from mcshell.mcplatforms import CrossPlatformBinary
        from mcshell.mcregistry import TAILSCALE_REGISTRY

    def _connect_tailscale(self, authkey: str, accept_routes: bool = False):
        """Automatically authenticates and connects to Tailscale cross-platform."""
        print("\n[TAILSCALE] Authenticating device to VPN...")

        tailscale = CrossPlatformBinary(TAILSCALE_REGISTRY)

        # Build the argument list dynamically
        args = ['up', f"--authkey={authkey}", "--force-reauth"]
        if accept_routes:
            args.append("--accept-routes")

        try:
            # Unpack the arguments and enforce check=True for error handling
            tailscale.execute(*args, check=True)
            
            self.managed_tailscale = True
            print("[TAILSCALE] Connected to VPN successfully!\n")
            time.sleep(3) # Give the OS network interface a moment to stabilize
            
        except subprocess.CalledProcessError:
            print("[TAILSCALE WARNING] Failed to automatically connect. You may need to run Tailscale manually.\n")
        except FileNotFoundError:
            # We can now use the abstraction's platform attribute for cleaner error routing
            if tailscale.platform == 'darwin':
                print("[TAILSCALE WARNING] Tailscale App not found in /Applications. Is it installed?\n")
            elif tailscale.platform in ['wsl', 'windows']:
                print("[TAILSCALE WARNING] 'tailscale.exe' not found. Please install the Windows Tailscale app.\n")
            else:
                print("[TAILSCALE WARNING] 'tailscale' command not found. Is Tailscale installed?\n")

    def _disconnect_tailscale(self):
        """Automatically logs out of Tailscale if we were the ones who brought it up."""
        if getattr(self, 'managed_tailscale', False):
            print("\n[TAILSCALE] Disconnecting from VPN...")
            tailscale = CrossPlatformBinary(TAILSCALE_REGISTRY)
            try:
                tailscale.execute('down',check=False, capture_output=True)
                tailscale.execute('logout',check=False, capture_output=True)
                self.managed_tailscale = False
                print("[TAILSCALE] Disconnected successfully.")
            except Exception as e:
                print(f"[TAILSCALE WARNING] Could not disconnect automatically: {e}")

    def _get_connection_hub_data(self):
        """Returns the raw connection hub data in a structured, JSON-friendly dictionary."""
        def _make_direct_token(ip, rh_host):
            # Only append the comma and relay host if one actually exists
            base_target = f"{ip},{rh_host}" if rh_host else str(ip)
            
            mc_p = self.server_data.get('port', MC_SERVER_PORT)
            rcon_p = self.server_data.get('rcon_port', MC_RCON_PORT)
            mj_p = self.server_data.get('mj_port', MJ_PLUGIN_PORT)
            mc_v = self.server_data.get('mc_version', MC_VERSION)
            
            # Return short token if ports are default, otherwise append ports and version
            if mc_p == 25565 and rcon_p == 25575 and mj_p == 4721:
                return base_target
            return f"{base_target}@{mc_p}-{rcon_p}-{mj_p}-{mc_v}"

        vpn_ip = _get_vpn_ip()
        local_ip = _get_local_ip()
        authkey = self.server_data.get('tailscale_authkey')
        rh_host = self.server_data.get('rh_host')

        data = {
            "local_ip": local_ip,
            "vpn_ip": vpn_ip,
            "authkey": authkey,
            "rh_host": rh_host,
            "tokens": {
                "lan": _make_direct_token(local_ip, rh_host)
            }
        }

        # Populate the remaining tokens based on available Tailscale data
        if authkey and vpn_ip:
            data['tokens']['classroom_vpn'] = f"{_make_direct_token(vpn_ip, rh_host)}^{authkey}"
        elif vpn_ip:
            data['tokens']['tailscale'] = _make_direct_token(vpn_ip, rh_host)

        return data


    def _print_connection_hub(self):
        """Helper method to print the share tokens cleanly."""
        data = self._get_connection_hub_data()
        app_port = self.server_data.get('app_port')

        print(f"\n" + "="*55)
        # 1. App Server (mc-ed) Status (Locked to localhost for ChromeOS constraints)
        if getattr(self, 'app_server_thread', None) and self.app_server_thread.is_alive():
            if getattr(self, 'mc_name', None):
                print(f"🟢 MCED App Server  : RUNNING (Active Player: {self.mc_name})")
                print(f"   Editor URL       : http://localhost:{app_port}/?auth={GUI_AUTH_TOKEN}")
                print(f"   Control URL      : http://localhost:{app_port}/control?auth={GUI_AUTH_TOKEN}")
            else:
                print(f"🟡 MCED App Server  : STANDBY")
                print(f"   Lobby URL        : http://localhost:{app_port}/lobby?auth={GUI_AUTH_TOKEN}")
        else:
            print("🔴 Editor App Server  : STOPPED")

        if getattr(self, 'mc_name', None):
            print(f"\n" + "="*60)
            print("🌍 CONNECTION HUB: Share these tokens with your friends!")
            print("="*60)

            # 2. VPN (Tailscale) Tokens
            if data.get('authkey'):
                if 'classroom_vpn' in data['tokens']:
                    print("\n[ VPN CONNECTION (Automated Tailscale Mesh) ]")
                    print(f"Token :\n{' '*4}{data['tokens']['classroom_vpn']}")
                else:
                    print("\n[ VPN CONNECTION ]")
                    print("⚠️  ERROR: Tailscale failed to acquire a VPN IP.")
                    print("⚠️  Cannot generate an automated remote token. Check your Tailscale installation.")
            elif 'tailscale' in data['tokens']:
                print("\n[ TAILSCALE CONNECTION (Manual Mesh) ]")
                print(f"Token :\n{' '*4}{data['tokens']['tailscale']}")

            # 3. Standard Direct Tokens
            print("\n[ DIRECT CONNECTION (Local LAN) ]")
            print(f"Local LAN Token :\n{' '*4}{data['tokens']['lan']}")

            # 4. Bedrock Instructions
            print("\n" + "="*60)
            print("🎮 BEDROCK PLAYERS:")
            print("="*60)
            if data.get('rh_host'):
                # Use Case 3: Dedicated rathole relay handling Bedrock UDP
                print(f"Please open Minecraft and connect to the public relay:\n{' '*4}{data['rh_host']}:19132")
            else:
                # Use Cases 1 & 2: Local LAN or Tailscale socat UDP forwarder
                print(f"Please open Minecraft and connect to this computer's IP:\n{' '*4}{data['local_ip']}:19132")

            # 5 Java Instructions 
            print("\n" + "="*60)
            print("🎮 JAVA PLAYERS:")
            print("="*60)
            print(f"Please open Minecraft and connect to this computer's IP:\n{' '*4}{data['local_ip']}:{self.server_data['port']}")

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
        """Creates a new PaperMC server world environment. 
        
        Type %pp_create_world --help for available formatting choices.
        """

        parser = argparse.ArgumentParser(
            prog="%pp_create_world",
            description="Creates a new PaperMC world with optional version and datapacks configuration."
        )
        
        # Positional required argument
        parser.add_argument(
            "world_name", 
            help="The name of the world directory to create."
        )
        
        # Optional arguments with string value assignments
        parser.add_argument(
            "--version", 
            default=MC_VERSION, 
            help=f"Minecraft version string override. Defaults to current system default: {MC_VERSION}"
        )
        parser.add_argument(
            "--datapacks", 
            default=None, 
            help="Comma-separated list of datapack names to pull and inject automatically."
        )

        split_args = shlex.split(line)
        
        try:
            parsed_args = parser.parse_args(split_args)
        except SystemExit:
            # Captures standard argparse help strings and structural syntax errors
            # seamlessly without crashing the ongoing IPython kernel loop session.
            return

        # Extract values from normalized argument configuration
        world_name = parsed_args.world_name
        mc_version = parsed_args.version
        
        # Safely split into list structure if arguments were given
        if parsed_args.datapacks is not None:
            datapacks_to_install = parsed_args.datapacks.split(",")
            for datapack_to_install in datapacks_to_install:
                datapack_mcmeta_file = MC_DATAPACK_LIB_DIR / datapack_to_install / 'pack.mcmeta'
                if not datapack_mcmeta_file.exists():
                    print(f"Cannot install datapack {datapack_to_install}: {datapack_mcmeta_file} does not exist.")
                    print(f"{parsed_args.world_name} world was not created.")
                    return
        else:
            datapacks_to_install = []

        # Proceed with execution using the sanitized variables
        print(f"Creating world '{world_name}' (Version: {mc_version})")
        if datapacks_to_install:
            print(f"Injecting datapacks: {datapacks_to_install}")

        # Quick version check (assuming semantic versioning format)
        v_parts = [int(x) for x in mc_version.split('.')]
        if v_parts[0] == 1 and (v_parts[1] < 20 or (v_parts[1] == 20 and v_parts[2] < 5)):
            print(f"Error: mcshell requires Minecraft 1.20.5 or newer (Java 21). Version '{mc_version}' is not supported.")
            return

        # NEW: handle versions
        self.server_data['mc_version'] = mc_version 

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

        print(f"Resolving compatible Geyser/Floodgate/ViaVersion plugins for Minecraft {mc_version}...")

        # Map the exact filenames you want to the resolved URLs
        plugin_urls= {
            "Geyser.jar": _resolve_geysermc_plugin('geyser'),
            "Floodgate.jar": _resolve_geysermc_plugin('floodgate'),
            "ViaVersion.jar": _resolve_modrinth_plugin('viaversion', mc_version)
        }

        # Create the world_manifest.json file with required Geyser/Floodgate/ViaVersion plugins

        manifest = {
            "world_name": world_name,
            "paper_version": mc_version,
            "java_path": "java", # Assumes java is in the system's PATH
            "server_jar_path": str(jar_path.relative_to(world_dir.parent)), # Store a path relative to the world_dir
            "world_data_path": str((world_dir / "world").relative_to(world_dir)),
            "plugins": plugin_urls,
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

        # Always install versioned McJuice from bundled version
        mc_major_version = '.'.join(mc_version.split('.')[:2])
        mc_juice_jar_path =  MC_DATA_DIR / f"mcjuice-{mc_major_version}.jar"
        if not mc_juice_jar_path.exists():
            print(f"The McJuice plugin does not exist!")
            print(f"Are you doing development? Run build.py to generate all required classes and artifacts.")
            print(f"The world {world_name} could not be created. :-(" )
            return
        plugins_dir.joinpath(mc_juice_jar_path.name).symlink_to(mc_juice_jar_path)

        # Install the plugins listed in the manifest (Downloads Geyser & Floodgate automatically)
        downloader.install_plugins(plugin_urls, plugins_dir)

        print("Patching configurations dynamically...")
       
        # 1. Patch Floodgate
        def patch_floodgate(data):
            # make arbitrary Bedrock names look the same as Java names
            data['username-prefix'] = ""
            
        downloader.extract_and_patch_jar_config(plugins_dir,"Floodgate.jar", "floodgate", patch_floodgate)

        # this does not work; geyser generates its config.yml; must do it on server startup
        # # 2. Patch Geyser
        # def patch_geyser(data):
        #     # force fragmenting of the nasty RakNet handshake packet
        #     data['advanced']['bedrock']['mtu'] = "1200"
            

        # --- Pre-seed Server Configs ---
        # Paper will read these partial files on first boot and append all missing defaults automatically.
        
        # 3. Pre-seed Spigot.yml
        spigot_file = world_dir / "spigot.yml"
        # We define only the structure we want to override
        spigot_data = {'settings': {'timeout-time': 240}}
        
        with open(spigot_file, 'w') as f:
            yaml.dump(spigot_data, f)
        print(f"Pre-seeded overrides into {spigot_file.name}")

        # 4. Pre-seed Bukkit.yml
        bukkit_file = world_dir / "bukkit.yml"
        bukkit_data = {'ticks-per': {'autosave': 10000}}
        
        with open(bukkit_file, 'w') as f:
            yaml.dump(bukkit_data, f)
        print(f"Pre-seeded overrides into {bukkit_file.name}")

        # --- Datapack Installation Logic ---
        if datapacks_to_install:
            # Datapacks must be in 'world_persistent/datapacks' for first-run generation
            world_datapacks_dir = world_dir / "world_persistent" / "datapacks"
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
        
        This command handles world initialization, Tailscale network configuration,
        and server process lifecycle. 
        
        Use `%pp_start_world --help` for the full list of configurable options.

        """
        parser = argparse.ArgumentParser(
            prog="%pp_start_world", 
            description="Starts a Paper server for a given world name."
        )
        parser.add_argument("world_name", help="The name of the world to start")

        # we may need to remove this
        # parser.add_argument("--ssh", action="store_true", help="Enable SSH tunnel")
        
        parser.add_argument("--authkey", help="Tailscale Auth Key")
        parser.add_argument("--clear-authkey", action="store_true", help="Wipe cached auth key")
        
        parser.add_argument("--do-not-join", action="store_true", help="Prevent auto-joining the world") 

        parser.add_argument("--relay", type=str, help="Hostname/IP of the rathole relay server (e.g., thunk.local)")

        args = shlex.split(line)
        
        try:
            parsed_args = parser.parse_args(args)
        except SystemExit:
            # This catches '--help' or invalid arguments and stops the function
            # without killing the IPython kernel
            return

        world_name = parsed_args.world_name
        world_directory = MC_WORLDS_BASE_DIR / parsed_args.world_name

        if not world_directory.exists():
            print(f"Error: World directory does not exist at '{world_directory}'.")
            print(f"Please create it first with: %pp_create_world {world_name}")
            return

        # 1. Load the existing credentials early to grab the cached Auth Key and settings
        creds_path = world_directory / '.mc_creds.json'
        with creds_path.open('r') as f:
            self.server_data = json.load(f)

        authkey = parsed_args.authkey
        # 2. Evaluate final authkey and routing mode from cache vs CLI
        if parsed_args.clear_authkey:
            if 'tailscale_authkey' in self.server_data:
                del self.server_data['tailscale_authkey']
        if authkey:
            self.server_data['tailscale_authkey'] = authkey

        with creds_path.open('w') as f:
            json.dump(self.server_data, f)
        creds_path.chmod(0o600)  # Ensure it remains secure

        # Stop any currently active server session first
        if getattr(self, 'active_paper_server', None) and self.active_paper_server.is_alive():
            print(f"Stopping the currently active server for world '{self.active_paper_server.world_name}'...")
            self.active_paper_server.stop()
            
        print(f"--- Starting new session for world: {world_name} ---")

        # Omni-Routing: Always bind to 0.0.0.0 so LAN, Tailscale, and SSH can hit it simultaneously
        extra_server_properties = {
            'server-ip': '0.0.0.0',
            'mcjuice-host': '0.0.0.0',
            'mcjuice-port': f"{self.server_data['mj_port']}"
        }

        # Start the Paper server
        self.active_paper_server = PaperServerManager(world_name, world_directory)
        self.active_paper_server.start(**extra_server_properties)
        # now start it after files are generated and it is terminated once
        if not self.active_paper_server.is_alive():
            self.active_paper_server = PaperServerManager(world_name, world_directory)
            # get a new PaperMC jar if available
            self.active_paper_server.update_jar_path()
            self.active_paper_server.start(**extra_server_properties)

        if not self.active_paper_server.is_alive():
            print("Could not start Paper server. Aborting.")
            return

        if not 'app_port' in list(self.server_data.keys()):
            self.server_data['app_port'] = 5001

        # if parsed_args.ssh: 
        #     # Start the background SSH Tunnel gateway if --ssh if requrested
        #     print("Starting secure SSH tunnel gateway in the background...")
        #     self.current_ssh_token = _start_secure_tunnel_host(
        #         self.server_data['port'], 
        #         self.server_data['rcon_port'], 
        #         self.server_data['mj_port'], 
        #         self.server_data['mc_version'],
        #         use_ssh=parsed_args.ssh
        #     )

        # Cross-platform automated host login (ONLY if we aren't relying on an external Subnet Router)
        if authkey:
            self._connect_tailscale(authkey, accept_routes=False)
            if parsed_args.relay is not None:
                relay_server_address = parsed_args.relay
                self.server_data['rh_host'] = relay_server_address
                self.rathole_process, self.rathole_config = _start_rathole_client(relay_server_address, authkey)
                
        geyser_config = world_directory / "plugins" / "Geyser-Spigot" / "config.yml"

        # geyser generates its config.yml after first startup :-(
        yaml = YAML()
        yaml.preserve_quotes = True

        if geyser_config.is_file():
            geyser_data = yaml.load(geyser_config)

            # force fragmenting of the nasty RakNet handshake packet
            geyser_data['advanced']['bedrock']['mtu'] = "1200"
            
            # ruamel.yaml can write directly to a pathlib.Path object
            yaml.dump(geyser_data, geyser_config)
            print(f"Updated bedrock mtu in {geyser_config.name}")

        # join the world or not
        if not parsed_args.do_not_join:
            # suspend the logs for the user name prompt
            self.active_paper_server.suspend_logs = True
            magic_cmd_line = f"\
                    127.0.0.1 \
                    --local-mc    {self.server_data['port']} \
                    --local-rcon  {self.server_data['rcon_port']} \
                    --local-mj    {self.server_data['mj_port']} \
                    --local-app   {self.server_data['app_port']} \
                    --mc_version  {self.server_data['mc_version']} \
                    --mc_name     {self._get_mc_name()} \
                    --password    {self.server_data['password']} \
                    "

            self.ip.run_line_magic('pp_join_world',magic_cmd_line)
            # restore server logs
            self.active_paper_server.suspend_logs = False 
        else:
            self.ip.run_line_magic('mc_server_info','')

    @line_magic
    def pp_join_world(self, line):
        """Connects to a PaperMC server instance.
        
        Type %pp_join_world --help for available configuration flags.
        """

        parser = argparse.ArgumentParser(
            prog="%pp_join_world",
            description="Starts the client connection architecture to link with a specific world server."
        )
        
        # Optional positional target (Token or IP)
        parser.add_argument(
            "connection_target",
            nargs="?",
            default=None,
            help="The direct target connection string (Token or IP address)."
        )

        # Authentication properties
        parser.add_argument("--password", default=None, help="Access security password required by remote server.")
        parser.add_argument("--authkey", default=None, help="Tailscale absolute authorization key string.")

        # MC overrides
        parser.add_argument("--mc_version", default=None, help="Minecraft version configuration override.")
        parser.add_argument("--mc_name", default=None, help="Minecraft player profile name override.")

        # Connection port overrides
        parser.add_argument("--local-mc", type=int, default=None, help="Minecraft local game port override.")
        parser.add_argument("--local-rcon", type=int, default=None, help="Local RCON admin port override.")
        parser.add_argument("--local-mj", type=int, default=None, help="Local McJuice API plugin port override.")
        parser.add_argument("--local-app", type=int, default=None, help="Local control panel web application port override.")
        
        # Toggles
        parser.add_argument("--login", action="store_true", help="Enable authenticating profile login state directly.")

        split_args = shlex.split(line)
        
        try:
            parsed_args = parser.parse_args(split_args)
        except SystemExit:
            # Prevent argparse exceptions or help prints from aborting IPython
            return

        # 0. Clean up previous Bedrock relays before binding new ones
        if getattr(self, 'socat_udp_process', None) and self.socat_udp_process.poll() is None:
            print("Stopping previous Bedrock UDP-to-UDP relay (socat)...")
            self.socat_udp_process.terminate()
            self.socat_udp_process.wait(timeout=3)

        if getattr(self, 'socat_tcp_process', None) and self.socat_tcp_process.poll() is None:
            print("Stopping previous Bedrock TCP-to-TCP relay (socat)...")
            self.socat_tcp_process.terminate()
            self.socat_tcp_process.wait(timeout=3)


        # 1. Profile Username Resolution
        if parsed_args.mc_name is not None:
            minecraft_name = parsed_args.mc_name
        else:
            minecraft_name = self._get_mc_name()
        self.mc_name = minecraft_name

        # 2. Server Password Resolution
        server_password = parsed_args.password
        self.server_data.update({'password': server_password})

        # 3. Connection Token & Tailscale Logic Parsing
        token = parsed_args.connection_target
        authkey = parsed_args.authkey

        # Split complex connection string format token (e.g. IP@ports^tskey-...)
        if token and '^' in token:
            token, extracted_key = token.split('^', 1)
            if extracted_key:
                authkey = extracted_key

        if authkey:
            self._connect_tailscale(authkey, accept_routes=False)

        if not token:
            self.server_data.update({
                'host': Prompt.ask('Server Address:', default=self.server_data['host']),
            })

            # 4. Interactive Configuration Fallbacks (Prompt if option missing)
            if parsed_args.local_mc is not None:
                local_mc = parsed_args.local_mc
            else:
                local_mc = int(Prompt.ask('Server Port:', default=str(self.server_data['port'])))

            if parsed_args.local_rcon is not None:
                local_rcon = parsed_args.local_rcon
            else:
                local_rcon = int(Prompt.ask('Rcon Port:', default=str(self.server_data['rcon_port'])))

            if parsed_args.local_mj is not None:
                local_mj = parsed_args.local_mj
            else:
                local_mj = int(Prompt.ask('Plugin Port:', default=str(self.server_data['mj_port'])))

            if parsed_args.mc_version is not None:
                mc_version = parsed_args.mc_version
            else:
                mc_version = str(Prompt.ask('Minecraft Version:', default=str(self.server_data['mc_version'])))

        if parsed_args.local_app is not None:
            local_app = parsed_args.local_app
        else:
            local_app = int(self.server_data['app_port'])

        is_login = parsed_args.login 

        if token:
            # DEFINE VARS FIRST: Determine intended local ports from defaults
            local_mc = self.server_data.get('port', MC_SERVER_PORT)
            local_rcon = self.server_data.get('rcon_port', MC_RCON_PORT)
            local_mj = self.server_data.get('mj_port', MJ_PLUGIN_PORT)
            mc_version = self.server_data.get('mc_version',MC_VERSION)
            local_app = self.server_data.get('app_port',MC_APP_PORT)

            # SAFETY CHECK
            if hasattr(self, 'active_paper_server') and getattr(self, 'active_paper_server') and self.active_paper_server.is_alive():
                print("A local Minecraft server is already running. Proceeding with proxy connections anyway.")


        # SMART TOKEN ROUTING
        # if token and '#' in token:
        #     print("Connecting to secure tunnel...")
        #     _start_secure_tunnel_client(token, local_mc, local_rcon, local_mj)

        #     target_host = '127.0.0.1'
        #     rh_host = None  # Secure tunnels don't use the UDP relay
        #     time.sleep(1.0)
        #     print("Tunnel connection established.")

        if token:
            # 1. Separate the IP/Relay routing segment from the ports segment
            if '@' in token:
                ip_relay_part, ports_part = token.split('@', 1)
                try:
                    p_mc, p_rcon, p_mj, p_ver = ports_part.split('-')
                    local_mc = int(p_mc)
                    local_rcon = int(p_rcon)
                    local_mj = int(p_mj)
                    mc_version = p_ver
                except ValueError:
                    print("\n[ERROR] Invalid Direct Token format. Falling back to default ports.")
            else:
                ip_relay_part = token

            # 2. Extract target IP and the Relay Host from the routing segment
            if ',' in ip_relay_part:
                target_host, raw_rh = ip_relay_part.split(',', 1)
                rh_host = None if raw_rh == 'none' else raw_rh
            else:
                target_host = ip_relay_part
                rh_host = None

            if '@' in token:
                print(f"\n[DIRECT CONNECT] Parsed token for {target_host} (Relay: {rh_host or 'None'}) with custom ports...")
        else:
             # Fallback if no token was used (interactive mode)
             target_host = self.server_data['host']
             rh_host = self.server_data.get('rh_host')

        # 3. Commit resolved target properties to in-memory data
        self.server_data['host'] = target_host
        self.server_data['rh_host'] = rh_host
        self.server_data['port'] = local_mc
        self.server_data['rcon_port'] = local_rcon
        self.server_data['mj_port'] = local_mj
        self.server_data['mc_version'] = mc_version
        self.server_data['app_port'] = local_app


        # 4. Start local Bedrock UDP->TCP translator (Only if NOT using local loopback SSH fallback)
        if target_host and target_host != '127.0.0.1':
            print(f"Starting socat UDP forwarder for local Bedrock clients...")
            socat_udp_cmd = [
                "socat",
                "UDP4-LISTEN:19132,reuseaddr,fork",
                f"UDP4:{target_host}:19132"
            ]
            try:
                self.socat_udp_process = subprocess.Popen(
                    socat_udp_cmd,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL
                )
            except FileNotFoundError:
                print("[WARNING] 'socat' command not found. iPads on your local network will not be able to join.")
                self.socat_udp_process = None

        # 5. Start local Java TCP forwarder (Vanilla Laptops on LAN)
        if target_host and target_host != '127.0.0.1':
            print("Starting socat TCP forwarder for local Java clients...")
            socat_tcp_cmd = [
                "socat",
                f"TCP4-LISTEN:{local_mc},reuseaddr,fork",
                f"TCP4:{target_host}:{local_mc}"
            ]
            try:
                self.socat_tcp_process = subprocess.Popen(
                    socat_tcp_cmd,
                    stdout=subprocess.DEVNULL,
                    stderr=subprocess.DEVNULL
                )
            except FileNotFoundError:
                print("[WARNING] 'socat' not found. Local Java forwarding disabled.")
                self.socat_tcp_process = None

        # get the server password if required
        if is_login and self.server_data['password'] is None:
            self.server_data.update({
                'password': Prompt.ask('Server Password:', password=True)
            })

        # get the sql db of user powers
        power_repo = SQLiteRepository(minecraft_name)

        print(f"Assigning application server context to Minecraft player: {minecraft_name}")
        self.app_server_thread = start_app_server(self.server_data, minecraft_name, self.shell, power_repo)

        self._print_connection_hub()

        return

    @line_magic
    def pp_stop_world(self, line):
        """
        Stops the currently running Paper server and its associated mc-ed app server.
        """
        if not self.active_paper_server or not self.active_paper_server.is_alive():
            print("No active Paper server session is currently running.")
            return

        print(f"--- Stopping session for world: {self.active_paper_server.world_name} ---")

        print("Returning application server to standby mode...")
        reset_app_server_context()
        self.mc_name = None

        print("Stopping Paper server (this may take a moment)...")
        self.active_paper_server.stop()
        self.active_paper_server = None
        if getattr(self, 'rathole_process', None) and self.rathole_process.poll() is None:
            _stop_rathole_client(self.rathole_process,self.rathole_config)
            del self.rathole_process
            del self.rathole_config

        # Stop any active socat translator process
        if getattr(self, 'socat_udp_process', None) and self.socat_udp_process.poll() is None:
            print("Stopping previous Bedrock UDP-to-UDP relay (socat)...")
            self.socat_udp_process.terminate()
            self.socat_udp_process.wait(timeout=3)
            del self.socat_udp_process

        if getattr(self, 'socat_tcp_process', None) and self.socat_tcp_process.poll() is None:
            print("Stopping previous Bedrock TCP-to-TCP relay (socat)...")
            self.socat_tcp_process.terminate()
            self.socat_tcp_process.wait(timeout=3)
            del self.socat_tcp_process

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
        """Permanently deletes a world directory.
        
        Type %pp_delete_world --help for usage information.
        """

        parser = argparse.ArgumentParser(
            prog="%pp_delete_world",
            description="Permanently deletes a world directory and all its contents with built-in safety checks."
        )
        
        # Positional required argument
        parser.add_argument(
            "world_name", 
            help="The exact name of the world directory to permanently delete."
        )

        split_args = shlex.split(line)
        
        try:
            parsed_args = parser.parse_args(split_args)
        except SystemExit:
            # Safely catch --help and syntax mismatches without 
            # terminating the ongoing IPython application loop shell.
            return

        # Extract the cleanly validated argument
        world_name = parsed_args.world_name 


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
        print(f"⚠️ WARNING: Preparing to permanently delete world: '{world_name}'")
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
    def pp_leave_world(self, line):
        """
        Leaves the current world and returns the app to the Lobby. 
        Hosts must safely shut down their local server first using %pp_stop_world.
        """
        print("\n--- Leaving World ---")

        # Intercept if we are the host
        if getattr(self, 'active_paper_server', None) and self.active_paper_server.is_alive():
            world_name = getattr(self.active_paper_server, 'world_name', 'Unknown World')
            error_msg = (
                f"Cannot leave world '{world_name}'. You are the current host. "
                f"Please use '%pp_stop_world' in the console to safely shut down the server first."
            )
            print(f"[Error] {error_msg}")
            
            # Assuming throw_app_server_error is imported/available in this scope
            throw_app_server_error(error_msg)
            
            return  # Abort the leave sequence

        # Reset Flask application context to put UI into standby mode
        print("Returning application server to standby mode...")
        reset_app_server_context()
        self.mc_name = None

        # Drop VPN connection if it was auto-managed
        self._disconnect_tailscale()

        # Stop any active socat translator process
        if getattr(self, 'socat_udp_process', None) and self.socat_udp_process.poll() is None:
            print("Stopping previous Bedrock UDP-to-UDP relay (socat)...")
            self.socat_udp_process.terminate()
            self.socat_udp_process.wait(timeout=3)
            del self.socat_udp_process

        if getattr(self, 'socat_tcp_process', None) and self.socat_tcp_process.poll() is None:
            print("Stopping previous Bedrock TCP-to-TCP relay (socat)...")
            self.socat_tcp_process.terminate()
            self.socat_tcp_process.wait(timeout=3)
            del self.socat_tcp_process

        if getattr(self, 'rathole_process', None) and self.rathole_process.poll() is None:
            _stop_rathole_client(self.rathole_process,self.rathole_config)
            del self.rathole_process
            del self.rathole_config

        # Ensure MC_APP_PORT is defined in your scope, usually via current_app.config or global
        app_port = globals().get('MC_APP_PORT', 5001) 

        print("="*60)
        print("🚀 RETURNED TO LOBBY")
        print("="*60)
        print(f"Lobby Access: http://localhost:{app_port}/lobby?auth={GUI_AUTH_TOKEN}")
        print("="*60 + "\n")

    @line_magic
    def pp_toggle_logs(self, line):
        """
        Turn server logs ON or OFF. 
        """
        if not self.active_paper_server or not self.active_paper_server.is_alive():
            print("No active Paper server session is currently running.")
            return

        self.active_paper_server.suspend_logs = not self.active_paper_server.suspend_logs

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
            return _response
        except ConnectionRefusedError as e:
            print("[red bold]Unable to send command. Is the server running?[/]")
            pprint(self.server_data)
        except RCONAuthenticationError as e:
            print("[red bold]The password is wrong. Use %mc_login[/]")

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

    @property
    def _commands(self):
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
            print("[green bold]Login successful! Admin privileges unlocked.[/]")

            # --- NEW: Trigger a UI refresh to update the Admin Badge ---
            from mcshell.mcserver import socketio
            socketio.emit('state_changed', {'status': 'active'})

        except Exception as e:
            print("[red bold]login failed[/]")

    @line_magic
    def mc_server_info(self, line):
        self._print_connection_hub()

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
            arg_matches = [c for c in self._commands.keys() if c.startswith(text_to_complete)]

        # Case 2: Showing/Completing sub-items (like gamerules)
        elif len(parts) >= 2 and command in self._commands:
            sub_map = self._commands[command]
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

        if _arg_list[0] == 'help':
            print("Use %mc_help instead.")
            return

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
        if response.split()[0] == 'Unknown':
            print("[red]Error in usage:[/]")
            self.mc_help(line)
        else:
            print(response)
        print('-' * 100)

    def _get_rconn_completions(self, ipyshell, raw_event, line, text_to_complete):
        """
        The core autocomplete logic. 
        Expects 'line' to always be formatted with a prefix (like '%mc_run').
        """
        # Capture debug data exactly as you had it, but use the normalized line/symbol
        ipyshell.user_ns.update(
            dict(
                rcon_event=copy.deepcopy(raw_event), 
                rcon_symbol=text_to_complete,
                rcon_line=line,
                rcon_cursor_pos=raw_event.text_until_cursor
            )
        ) 

        parts = line.split()

        ipyshell.user_ns.update(dict(rcon_text_to_complete=text_to_complete)) 
        ipyshell.user_ns.update(dict(rcon_parts=parts)) 

        if len(parts) >= 2:
            command = parts[1]
            if 'minecraft:' in command:
                command = command.split(':')[1]
                
        arg_matches = []
        if len(parts) == 1: # showing commands
            arg_matches = [c for c in self._commands.keys()]
        elif len(parts) == 2 and text_to_complete != '':  # completing commands
            arg_matches = [c for c in self._commands.keys() if c.startswith(text_to_complete)]
        elif len(parts) == 2 and text_to_complete == '':  # showing subcommands
            sub_commands = list(self._commands[command].keys())
            arg_matches = [sub_command for sub_command in sub_commands]
        elif len(parts) == 3 and text_to_complete != '':  # completing subcommands
            sub_commands = list(self._commands[command].keys())
            arg_matches = [sub_command for sub_command in sub_commands if sub_command.startswith(text_to_complete)]
        elif len(parts) == 3 and text_to_complete == '':  # showing arguments
            sub_command = parts[2]
            sub_command_args = self._commands[command][sub_command]
            arg_matches = [sub_command_arg for sub_command_arg in sub_command_args]
        elif len(parts) > 3: # completing arguments
            sub_command = parts[2]
            sub_command_args = self._commands[command][sub_command]
            current_arg_index = len(parts) - 3 # Index of current argument
            if text_to_complete == '': # showing next arguments
                arg_matches = [arg for arg in sub_command_args[current_arg_index+1]]
            else:
                try:
                    arg_matches = [arg for arg in sub_command_args[current_arg_index+1] if arg.startswith(text_to_complete)]
                except IndexError:
                    return []

        ipyshell.user_ns.update({'rcon_matches': arg_matches})
        return arg_matches 


    def _complete_mc_run(self, ipyshell, event):
        """Hook for standard %mc_run autocompletion."""
        # Pass the raw event strings directly
        return self._get_rconn_completions(ipyshell, event, event.line, event.symbol)

    def _complete_slash_run(self, ipyshell, event):
        """Hook for / shortcut autocompletion."""
        # 1. Strip leading slash for our internal logic
        clean_symbol = event.symbol[1:] if event.symbol.startswith('/') else event.symbol
        pseudo_line = f"%mc_run {event.line[1:]}"
        
        # 2. Get the matches from the core logic
        matches = self._get_rconn_completions(ipyshell, event, pseudo_line, clean_symbol)
        
        # 3. CRITICAL FIX: If the symbol started with a '/', put it back!
        # This ensures '/wea' is replaced by '/weather', not 'weather'
        if event.symbol.startswith('/'):
            return [f"/{match}" for match in matches]
            
        return matches

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

            # Initialize Player & Context
            player_name = self._get_mc_name()
            player = self._get_player(player_name)

            # create an executable script to run the power
            power_script_exe_block = \
            f"""\n
if __name__ == '__main__':

    from mcshell.mcplayer import MCPlayer
    mc_player = MCPlayer("{player_name}", host="{self.server_data['host']}", port={self.server_data['port']},
        rcon_port={self.server_data['rcon_port']}, mj_port={self.server_data['mj_port']}, app_port={self.server_data['app_port']},
        password="{self.server_data['password']}", cancel_event=None)

    from mcshell.mcactions import MCActions
    actions = MCActions(mc_player)
    runner = BlocklyProgramRunner(actions,cancel_event=None)
    runner.run_program()

            """

            # 3. Save the generated code
            with open(filepath, 'w') as f:
                f.write(code_to_execute + power_script_exe_block)

            # Setup cancellation support and bind to the player for blocking operations
            cancel_event = threading.Event()
            player.cancel_event = cancel_event

            # you must import AFTER the server regenerates this file
            from mcshell.mcactions import MCActions
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

            # --- NEW: Create a mutable container to catch exceptions ---
            task_error = []

            # 7. Define the Thread Execution Wrapper
            execution_id = f"debug_{file_hash}"
            def run_task():
                try:
                    runner.run_program()
                except Exception as e:
                    # Ignore PowerCancelledException which is a normal, clean exit
                    if type(e).__name__ == "PowerCancelledException":
                        pass
                    elif isinstance(e, PermissionError):
                        print(f"\n[Access Denied] {e}")
                        task_error.append(e)  # Record the failure
                    else:
                        import traceback
                        print(f"\n--- Error executing {execution_id}: {e} ---")
                        traceback.print_exc()
                        task_error.append(e)  # Record the failure
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

            # --- INSTANT FAILURE DETECTION ---
            # Wait briefly to see if the script immediately aborts (e.g., from a permission error)
            thread.join(timeout=0.3)

            # Check our explicit error state, NOT just if the thread is dead
            if task_error or cancel_event.is_set():
                if execution_id in RUNNING_POWERS:
                    del RUNNING_POWERS[execution_id]

                # Your TODO block will now work perfectly here!
                broken_power_dir = pathlib.Path("./powers/blockcode/broken")
                broken_power_dir.mkdir(parents=True, exist_ok=True)
                broken_filepath = broken_power_dir / filename
                print(f"Broken power saved to: {broken_filepath}")
                
                # Move the file
                import shutil
                if filepath.exists():
                    shutil.move(str(filepath), str(broken_filepath))

                # Suppress the success messages
                return

            print("")
            print(f"--- Successfully saved power to: {filepath}")
            print(f"--- To modify or inspect it, use:\n edit -x {filepath}")
            print(f"--- To run it, use:\n %run {filepath}")
            print("")
            print(f"--- Power '{metadata.get('function_name', 'None')}' metadata defined/updated. ---")
            print(f"--- Started debug execution with ID: {execution_id} ---")
            # The editor explicitly looks for this string format to hook its STOP button; do not modify!
            print(f"MCED_EXECUTION_ID:{execution_id}")
            print("")
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
            arg_matches = [c for c in RUNNING_POWERS]
            ipyshell.user_ns.update({'cancel_matches':arg_matches})
        elif len(parts) == 2 and text != '':  # completing commands
            arg_matches = [c for c in RUNNING_POWERS if c.startswith(text)]
            ipyshell.user_ns.update({'cancel_matches':arg_matches})

        return arg_matches


    @line_magic
    def mc_cancel_power(self, line):
        """Cancels a running background power or script loop.
        All execution ids are stored in the RUNNING_POWERS dictionary.
        <TAB> will list all current execution ids.
        
        Type %mc_cancel_power --help for usage details.
        """

        parser = argparse.ArgumentParser(
            prog="%mc_cancel_power",
            description="Cancels an active, background-running Blockly macro or script by its active execution ID."
        )
        
        # Positional required argument
        parser.add_argument(
            "execution_id", 
            help="The active string hash ID or key identifier of the background process."
        )

        split_args = shlex.split(line)
        
        try:
            parsed_args = parser.parse_args(split_args)
        except SystemExit:
            # Whenever the argument checks fail or --help is requested,
            # helpfully print the live options directly underneath the usage schema.
            if RUNNING_POWERS:
                print("\nCurrently active execution IDs:", list(RUNNING_POWERS.keys()))
            else:
                print("\nThere are currently no active background processes running.")
            return

        # Extract the cleanly validated argument
        execution_id = parsed_args.execution_id

        power_metadata = RUNNING_POWERS.get(execution_id)
        if power_metadata:
            print(f"Sending cancellation signal to power: {execution_id}")
            power_metadata['cancel_event'].set()
        else:
            print(f"Error: No running power found with ID: {execution_id}")
            if RUNNING_POWERS:
                print("Valid active IDs are:", list(RUNNING_POWERS.keys()))



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

# ---------------------------------------------------------------------------
# Startup and Initialization
# ---------------------------------------------------------------------------

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


def rconn_shortcut_transformer(lines):
    new_lines = []
    for line in lines:
        stripped = line.lstrip()
        if stripped.startswith('/'):
            leading_spaces = line[:len(line) - len(stripped)]
            # Rewrites '/list' to '%mc_run list'
            line = f"{leading_spaces}%mc_run {stripped[1:]}"
        new_lines.append(line)
    return new_lines

def load_ipython_extension(ip):
    """
    Called by IPython when the extension is loaded.
    This is where we register the magics and the shutdown hook.
    """
    sync_datapack_library()

    mcshell_instance = MCShell(ip)
    ip.register_magics(mcshell_instance)

    # --- REGISTER THE '/' SHORTCUT TRANSFORMER ---
    ip.input_transformers_cleanup.append(rconn_shortcut_transformer)

    mcshell_instance.app_server_thread = start_app_server(
        server_data=None,
        minecraft_name=None,
        shell=ip,
        power_repo=None,
        port=MC_APP_PORT
    )

    time.sleep(1)
    print("\n" + "="*60)
    print("🚀 MC-SHELL STANDBY LOBBY ACTIVATED")
    print("="*60)
    print(f"Lobby Access: http://localhost:{MC_APP_PORT}/lobby?auth={GUI_AUTH_TOKEN}")
    print("="*60 + "\n")

    def shutdown_hook():
        print("\nIPython is shutting down. Stopping active mc-shell session...")
        if mcshell_instance.active_paper_server and mcshell_instance.active_paper_server.is_alive():
            mcshell_instance.pp_stop_world('')

        # Clean up Tailscale if the user just hits Ctrl+D instead of %mc_stop_app
        mcshell_instance._disconnect_tailscale()

        # Ensure the background Flask thread is fully killed on exit
        ip.run_line_magic('pp_stop_world','')

        # --- CLEAN UP TRANSFORMER ON SHUTDOWN (Optional but clean) ---
        if rconn_shortcut_transformer in ip.input_transformers_cleanup:
            ip.input_transformers_cleanup.remove(rconn_shortcut_transformer)

        print("Cleanup complete.")

    atexit.register(shutdown_hook)

