from mcshell.mcblockly import generate_entity_blocks,generate_material_blocks,generate_mcactions_blocks
from mcshell.mcblockly import ensure_toolbox,process_entities,process_materials


if __name__ == '__main__':

    ensure_toolbox()

    process_entities()
    generate_entity_blocks()

    process_materials()
    generate_material_blocks()

    generate_mcactions_blocks()