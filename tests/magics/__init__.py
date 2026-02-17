import unittest
from unittest.mock import patch, MagicMock
import os
import shutil
import time
import io
import contextlib
from pathlib import Path
import IPython.testing.globalipapp

from mcshell.constants import MC_WORLDS_BASE_DIR, MC_SERVER_DATA
TEMP_PASSWORD='temporarypassword'

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
        if self.mcshell.active_paper_server and self.mcshell.active_paper_server.is_alive():
             self.ip.run_line_magic('pp_stop_world', '')
        world_path = MC_WORLDS_BASE_DIR/ self.test_world
        if world_path.exists():
            shutil.rmtree(world_path)

    def test_pp_create_world_mnemonic(self):
        """Test world creation triggers mnemonic password when input is empty."""
        stdout = io.StringIO()
        with contextlib.redirect_stdout(stdout):
            # To trigger MNEMONIC generation, getpass MUST return an empty string
            # We use a side_effect helper for Prompt.ask to simulate "Enter" key behavior
            def mock_ask(msg, default=None, **kwargs):
                return str(default) # Simulate user pressing Enter (returns the default)

            with patch('getpass.getpass', return_value=''), \
                 patch('rich.prompt.Prompt.ask', side_effect=mock_ask):

                self.ip.run_line_magic('pp_create_world', self.test_world)

        output = stdout.getvalue()
        self.assertIn("MNEMONIC_PASSWORD:", output)
        self.assertTrue((MC_WORLDS_BASE_DIR / self.test_world).exists())

    def test_pp_lifecycle(self):
        """Test full lifecycle: create -> start -> stop -> delete."""
        # 1. Create
        with patch('getpass.getpass', return_value='password'), \
             patch('rich.prompt.Prompt.ask', return_value=''):
            self.ip.run_line_magic('pp_create_world', self.test_world)

        # 2. Start
        self.ip.run_line_magic('pp_start_world', self.test_world)
        self.assertTrue(self.mcshell.active_paper_server.is_alive())

        # 3. Stop
        self.ip.run_line_magic('pp_stop_world', '')
        time.sleep(1) # Wait for process shutdown
        self.assertFalse(self.mcshell.active_paper_server.is_alive() if self.mcshell.active_paper_server else False)

if __name__ == '__main__':
    unittest.main()