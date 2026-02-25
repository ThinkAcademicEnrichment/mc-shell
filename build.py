import sys
from pathlib import Path

# Ensure we can import from mcshell
sys.path.append(str(Path(__file__).parent))

from mcshell.mcscraper import make_materials, make_entity_id_map, make_item_id_map
from mcshell.registry_builder import RegistryBuilder
from mcshell.constants import MC_APP_SRC_DIR

def rebuild():
    """
    Primary orchestration script to rebuild the Minecraft Blockly registry.
    This serves as a full-pipeline test for the data-driven migration.
    """
    print("Step 1: Scraping latest Minecraft data...")
    # These functions now produce structured dictionaries for Blocks/Items/Entities
    make_materials()
    make_entity_id_map()
    make_item_id_map()

    print("\nStep 2: Building Blockly Registries...")
    builder = RegistryBuilder(
        toolbox_path=MC_APP_SRC_DIR / 'toolbox.xml',
        blocks_dir=MC_APP_SRC_DIR / 'blocks',
        gens_dir=MC_APP_SRC_DIR / 'generators' / 'python'
    )

    # This generates:
    # 1. blocks/materials.mjs, blocks/items.mjs, blocks/entities.mjs
    # 2. generators/python/materials.mjs, ... etc.
    # 3. Updates toolbox.xml via blockapily's structured XML injection
    builder.build_all()

    print("\nRebuild Complete!")
    print(f"Blocks generated in: {MC_APP_SRC_DIR / 'blocks'}")
    print(f"Toolbox updated: {MC_APP_SRC_DIR / 'toolbox.xml'}")
    print("\nYou can now refresh the mced editor or restart the web application.")

if __name__ == "__main__":
    rebuild()