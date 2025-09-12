from mcshell.mcblockly import build_final_toolbox,generate_entity_blocks,generate_material_blocks,generate_mcactions_blocks
from mcshell.mcblockly import process_entities,process_materials


if __name__ == '__main__':
    process_entities()
    process_materials()

    generate_material_blocks()
    generate_entity_blocks()

    generate_mcactions_blocks()

    build_final_toolbox()

    # os.system(f"cp {MC_DATA_DIR.joinpath('materials/blocks/materials.mjs')} {MC_APP_SRC_DIR.joinpath('blocks')}")
    # os.system(f"cp {MC_DATA_DIR.joinpath('materials/python/materials.mjs')} {MC_APP_SRC_DIR.joinpath('generators/python')}")
    #
    # os.system(f"cp {MC_DATA_DIR.joinpath('entities/blocks/entities.mjs')} {MC_APP_SRC_DIR.joinpath('blocks')}")
    # os.system(f"cp {MC_DATA_DIR.joinpath('entities/python/entities.mjs')} {MC_APP_SRC_DIR.joinpath('generators/python')}")
