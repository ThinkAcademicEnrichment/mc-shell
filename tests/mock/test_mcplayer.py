from tests.config import *
from mcshell.mcplayer import MCPlayer
from mcshell.constants import DATA_PATHS, RECIPE_BOOK_DATA_PATHS
import asyncio

class TestMCPLayer(unittest.TestCase):
    def setUp(self):
        """Setup method to create MCPlayer and MCActionBase instances for each test."""
        self.mcp = MCPlayer(TEST_PLAYER_NAME, MC_SERVER_HOST, MC_RCON_PORT, FJ_PLUGIN_PORT)
        # You can add more common mappings to self.mca.block_id_map here if needed for extensive testing,
        # or ensure _initialize_block_id_maps is comprehensive enough.

    def test_init(self):
        self.assertIsNotNone(self.mcp)
        self.assertEqual(self.mcp.name,TEST_PLAYER_NAME)


if __name__ == '__main__':
    unittest.main()
