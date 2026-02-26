import sys
from pathlib import Path

# Ensure we can import from mcshell
sys.path.append(str(Path(__file__).parent))

from mcshell.mcscraper import make_materials, make_entity_id_map, make_item_id_map
from mcshell.registry_builder import RegistryBuilder,ApiGenerator
from mcshell.constants import MC_APP_SRC_DIR, MC_DATA_DIR, MC_JUICE_SRC_DIR,MC_SHELL_DIR,subprocess,shutil

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

    print("\nStep 3: Building mcjuice Command Registry...")
    gen = ApiGenerator(
        MC_DATA_DIR / "mcjuice_api.yaml",
        MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedCommandRegistry.java",
        MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedEventListener.java",
        MC_SHELL_DIR / "mcjuice.py"
        )

    # generate the command registry Java class for the mcjuice plugin and a python client
    gen.run()

    # 2. Compile via Maven
    print("Building McJuice JAR...")
    subprocess.run(["mvn", "clean", "package"], cwd=str(MC_JUICE_SRC_DIR.parent), check=True)

    # 3. Move the artifact to the mc-shell data directory for PyPI packaging
    built_jar = list(MC_JUICE_SRC_DIR.parent.joinpath('target').glob('mcjuice-*.jar')).pop()
    dest_jar = MC_DATA_DIR
    shutil.copy2(built_jar, dest_jar)

    print(f"McJuice JAR integrated into mcshell/data/")
    print("\nRebuild Complete!")
    print(f"Blocks generated in: {MC_APP_SRC_DIR / 'blocks'}")
    print(f"Toolbox updated: {MC_APP_SRC_DIR / 'toolbox.xml'}")
    print("\nYou can now refresh the mced editor or restart the web application.")

if __name__ == "__main__":
    rebuild()