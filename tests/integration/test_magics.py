import unittest
from unittest.mock import patch
import os
import shutil
import time
import io
import contextlib
import IPython.testing.globalipapp
from mcshell.constants import MC_WORLDS_BASE_DIR
from tests.config import *

# Ensure Java starts in headless mode and bypasses 3D client checks
os.environ["MCSHELL_TEST_MODE"] = "1"

class MagicTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.ip = IPython.testing.globalipapp.get_ipython()
        from mcshell import load_ipython_extension
        load_ipython_extension(cls.ip)
        cls.mcshell = cls.ip.magics_manager.registry['MCShell']
        cls.test_world = "magic_test_world"

    def setUp(self):
        self._cleanup()

    def tearDown(self):
        self._cleanup()

    def _cleanup(self):
        if self.mcshell.local_server.process and self.mcshell.local_server.process.is_alive():
             self.ip.run_line_magic('pp_stop_world', '')
        world_path = MC_WORLDS_BASE_DIR / self.test_world
        if world_path.exists():
            shutil.rmtree(world_path)

    def test_pp_lifecycle(self):
        """Test full lifecycle: create -> start -> stop -> delete."""
        
        # Simulated console input handler
        def mock_ask(msg, default=None, **kwargs):
            if "PIN" in msg:
                print(f"[TEST] Bypassing PIN Prompt for headless execution")
                return "1234" # Provide a mock 4-digit PIN
            return str(default) if default is not None else ""

        # Pre-seed the cache so Java skips the verification step for tests
        from mcshell.mcjuice import MCJuiceClient
        key = ("127.0.0.1", self.mcshell.local_server.mj_port, TEST_PLAYER_NAME.lower())
        MCJuiceClient._SESSION_TOKENS[key] = "mock-ci-token-bypass"
        
        with patch('getpass.getpass', return_value='password'), \
             patch('rich.prompt.Prompt.ask', side_effect=mock_ask), \
             patch('builtins.input', return_value=TEST_PLAYER_NAME):

            # 1. Create
            self.ip.run_line_magic('pp_create_world', self.test_world)

            # 2. Start
            self.ip.run_line_magic('pp_start_world', self.test_world)
            self.assertTrue(self.mcshell.local_server.process.is_alive())

            # 3. Stop
            self.ip.run_line_magic('pp_stop_world', '')
            time.sleep(2)
            is_alive = self.mcshell.local_server.process.is_alive() if self.mcshell.local_server.process else False
            self.assertFalse(is_alive)

    def test_pp_create_world_mnemonic(self):
        """Test world creation triggers mnemonic password when input is empty."""
        stdout = io.StringIO()
        with contextlib.redirect_stdout(stdout):
            # empty getpass triggers mnemonic logic
            with patch('getpass.getpass', return_value=''), \
                 patch('rich.prompt.Prompt.ask', side_effect=lambda m, default=None, **kwargs: str(default)):

                self.ip.run_line_magic('pp_create_world', self.test_world)

        output = stdout.getvalue()
        self.assertIn("MNEMONIC_PASSWORD:", output)
        self.assertTrue((MC_WORLDS_BASE_DIR / self.test_world).exists())

if __name__ == '__main__':
    unittest.main()