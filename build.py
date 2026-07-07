import sys
from pathlib import Path
import xml.etree.ElementTree as ET

# Ensure we can import from mcshell
sys.path.append(str(Path(__file__).parent))

from mcshell.mcbuilder import RegistryBuilder,ApiGenerator,TaxonomyEngine,RegistryEngine

from mcshell.mcscraper import fetch_minecraft_data
from mcshell.constants import MC_APP_SRC_DIR, MC_DATA_DIR, MC_JUICE_SRC_DIR,MC_SHELL_DIR,subprocess,shutil

from mcshell.mcconfig import TAXONOMY_RULES,ENTITY_RULES

def rebuild():
    """
    Primary orchestration script to rebuild the Minecraft Blockly registry.
    This serves as a full-pipeline test for the data-driven migration.
    """

    print("\nStep 1: Building mcjuice Command Registry...")
    gen = ApiGenerator(
        MC_DATA_DIR / "mcjuice_api.yaml",
        MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedCommandRegistry.java",
        MC_JUICE_SRC_DIR / "main/java/org/mcshell/mcjuice/GeneratedEventListener.java",
        MC_SHELL_DIR / "mcjuice.py",
        MC_SHELL_DIR / "generated_actions.py"
        )

    # generate the command registry Java class for the mcjuice plugin and a python client
    gen.run()


    # 2. Run the Engine

    print("\nStep 2: Remove the existing toolbox.xml file...")
    output_toolbox_path = MC_APP_SRC_DIR / 'toolbox.xml'
    output_toolbox_path.unlink(missing_ok=True)
    toolbox_template_path = MC_DATA_DIR / 'toolbox_template.xml'
    with output_toolbox_path.open('w') as f:
        f.write(toolbox_template_path.read_text())


    print("\nStep 3: Fetching JSON from minecraft-data...")
    prismarine_blocks = fetch_minecraft_data('1.21.11','blocks')
    prismarine_items = fetch_minecraft_data('1.21.11','items')
    prismarine_entities = fetch_minecraft_data('1.21.11','entities')


    engine = TaxonomyEngine(TAXONOMY_RULES, ENTITY_RULES, prismarine_blocks, prismarine_items, prismarine_entities,verbose=False)
    materials_data, entity_data, entity_groups, picker_groups, variant_config = engine.run()


    print("\nStep 4: Building Blockly Registries...")
    builder = RegistryBuilder(
        toolbox_path=MC_APP_SRC_DIR / 'toolbox.xml',
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
    # 3. Updates toolbox.xml via blockapily's structured XML injection
    builder.build_all()

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

    print("\nAll builds completed and copied successfully.")

    print(f"\nMcJuice JAR integrated into mcshell/data/")
    print(f"\nRebuild Complete!")
    print(f"\nBlocks generated in: {MC_APP_SRC_DIR / 'blocks'}")
    print(f"\nToolbox updated: {MC_APP_SRC_DIR / 'toolbox.xml'}")


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
    rebuild()