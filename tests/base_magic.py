from tests import *

class BaseMagicTest(unittest.TestCase):
    """
    Base class that provides a running Minecraft server managed via
    IPython %pp_ magics. This class is fully automated and waits for
    player readiness before allowing tests to proceed.
    """

    @classmethod
    def setUpClass(cls):
        # 1. Setup Headless IPython session
        cls.ip = IPython.testing.globalipapp.get_ipython()
        from mcshell import load_ipython_extension
        load_ipython_extension(cls.ip)

        # Access the MCShell instance registered as a magic class
        cls.mcshell = cls.ip.magics_manager.registry['MCShell']

        # 2. Determine Player Name and Environment
        # We trigger the internal name resolution to see if we are 'g33zba' or 'TestBot'
        with patch('builtins.input', return_value=TEST_PLAYER_NAME):
            cls.player_name = cls.mcshell._get_mc_name()

        cls.world_name = "integration_test_world"
        print(f"\n[BASE] Automating setup for world '{cls.world_name}' (Player: {cls.player_name})...")

        # Clean previous run if it crashed or was left behind
        cls.cleanup_static(cls.mcshell, cls.world_name, cls.ip)

        # Define a mock helper that always returns the default value provided to the prompt.
        def mock_prompt_ask(msg, default=None, **kwargs):
            return str(default) if default is not None else ""

        # 3. Create and Start the World
        with patch('getpass.getpass', return_value='test_password'), \
             patch('rich.prompt.Prompt.ask', side_effect=mock_prompt_ask):

            cls.ip.run_line_magic('pp_create_world', cls.world_name)
            cls.ip.run_line_magic('pp_start_world', cls.world_name)

            # --- Readiness Wait Loop ---
            # Polling loop to wait for server console and RCON readiness.
            timeout = 90 # Generous timeout for slow chunk generation
            start_time = time.time()
            success = False

            print(f"[BASE] Waiting for Minecraft server and RCON listener...")

            # We get the player object directly from the mcshell instance
            # to avoid namespace injection issues during setup.
            cls.player = cls.mcshell._get_player(cls.player_name)
            # Manually inject into user namespace for tests/magics to find
            cls.ip.user_ns[cls.player_name] = cls.player

            while time.time() - start_time < timeout:
                if cls.mcshell.active_paper_server and cls.mcshell.active_paper_server.is_alive():
                    try:
                        # Ping server via RCON. '/help' is a safe check.
                        resp = cls.player.run("help")
                        if resp and "Unknown command" not in resp:
                            success = True
                            break
                    except Exception:
                        pass # Server starting or RCON not yet bound

                time.sleep(5)

            if not success:
                print(f"[BASE] WARNING: Readiness check timed out after {timeout}s. Environment may be unstable.")
            else:
                print(f"[BASE] Server ready! Player '{cls.player_name}' initialized and responsive.")
                # Give the FruitJuice plugin a moment to bind its separate port
                time.sleep(2)

    @classmethod
    def tearDownClass(cls):
        print(f"\n[BASE] Tearing down world '{cls.world_name}'...")
        cls.cleanup_static(cls.mcshell, cls.world_name, cls.ip)

    @staticmethod
    def cleanup_static(mcshell_instance, world_name, ip_instance):
        """Standard cleanup logic to stop server and remove directory."""
        if mcshell_instance.active_paper_server and mcshell_instance.active_paper_server.is_alive():
             ip_instance.run_line_magic('pp_stop_world', '')
             time.sleep(2)

        world_path = MC_WORLDS_BASE_DIR / world_name
        if world_path.exists():
            shutil.rmtree(world_path)

    def get_server_connection_params(self):
        """Returns connection data from the current active shell session."""
        return getattr(self.mcshell, 'server_data', {})