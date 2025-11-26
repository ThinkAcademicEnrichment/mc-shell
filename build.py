from mcshell.mcblockly import generate_entity_blocks,generate_material_blocks,generate_mcactions_blocks
from mcshell.mcblockly import process_entities,process_materials


if __name__ == '__main__':
    process_entities()
    process_materials()
    generate_material_blocks()
    generate_entity_blocks()
    generate_mcactions_blocks()