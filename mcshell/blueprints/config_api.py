from flask import Blueprint, current_app, render_template_string, make_response,jsonify
from flask import Response, abort

# 1. Create a Blueprint instance.
#    'powers_api' is the name of the blueprint.
#    __name__ helps Flask locate the blueprint.
#    url_prefix='/api' automatically prepends '/api' to all routes in this file.
config_bp = Blueprint('config_api', __name__, url_prefix='/config')

from mcshell.constants import MC_DATA_DIR, MC_APP_SRC_DIR, MC_VERSION,json
from mcshell.mcconfig import TAXONOMY_RULES, ENTITY_RULES
from mcshell.mcscraper import fetch_minecraft_data
from mcshell.mcbuilder import RegistryBuilder, TaxonomyEngine

@config_bp.route('/taxonomy')
def get_taxonomy():
    try:
        import json
        taxonomy_path = MC_DATA_DIR / "taxonomy.json"
        with open(taxonomy_path, 'r') as f:
            taxonomy_data = json.load(f)
        return jsonify(taxonomy_data)
    except FileNotFoundError:
        return jsonify({"error": "Taxonomy data file not found."}), 404
    except Exception as e:
        return jsonify({"error": f"Could not load taxonomy data: {e}"}), 500

@config_bp.route('/version')
def get_config():
    try:
        return jsonify({
            'version': current_app.config.get('MCSHELL_SERVER_DATA').get('mc_version')
        })
    except Exception as e:
        # we are in an app state with no config data yet
        return jsonify({
            'version': MC_VERSION
        })

    
@config_bp.route('/<script_version>/<script_name>.js')
def serve_dynamic_js(script_version, script_name):
    # 1. (Optional) Verify the requested version matches the active server version
    try:
        active_version = current_app.config.get('MCSHELL_SERVER_DATA').get('mc_version')
    except Exception as e:
        active_version = None
    
    if not active_version:
        abort(500, description="Minecraft version not initialized in application config.")
        
    if script_version != active_version:
        print(f"Warning: Client requested scripts for {script_version}, but server is running {active_version}")
        # You can choose to abort(400) here, or just let it serve the requested version anyway.

    # 2. Call your Python logic to generate the literal JS string
    try:
        # NOTE: Replace this with your actual generator module/function
        # js_content = your_generator_module.create_js(script_version, script_name)
        prismarine_blocks = fetch_minecraft_data(script_version,'blocks')
        prismarine_items = fetch_minecraft_data(script_version,'items')
        prismarine_entities = fetch_minecraft_data(script_version,'entities')


        engine = TaxonomyEngine(TAXONOMY_RULES, ENTITY_RULES, prismarine_blocks, prismarine_items, prismarine_entities,verbose=False)
        materials_data, entity_data, entity_groups, picker_groups, variant_config = engine.run()


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

        blocks_js, blocks_py = builder.build_blocks(write_static_files=False)
        items_js, items_py = builder.build_items(write_static_files=False)
        entities_js, entities_py = builder.build_entities(write_static_files=False)

        block_data = dict(
            blocks=dict(
                js="\n".join(blocks_js),
                py="\n".join(blocks_py)
            ),
            items=dict(
                js="\n".join(items_js),
                py="\n".join(items_py)
            ),
            entities=dict(
                js="\n".join(entities_js),
                py="\n".join(entities_py)
            ),
        )

    except Exception as e:
        print(f"Generation error: {e}")
        abort(404, description=f"Could not generate {script_name}.js for version {script_version}")

    try:
        
        toolbox_path = MC_APP_SRC_DIR / 'toolbox.xml'
        xml_content = toolbox_path.read_text(encoding='utf-8')

        if script_name == 'all':
            # Combine your JS blocks
            js_content = "\n".join([
                block_data['blocks']['js'], block_data['blocks']['py'],
                block_data['items']['js'], block_data['items']['py'],
                block_data['entities']['js'], block_data['entities']['py'],
            ])
            
            # Bundle the XML safely as a global JavaScript string
            escaped_xml = json.dumps(xml_content)
            xml_injection = f"\n\n// Injected Toolbox XML\nwindow.MC_TOOLBOX_XML = {escaped_xml};\n"
            
            # Combine them
            final_payload = js_content + xml_injection

        elif script_name in block_data:
            final_payload = block_data[script_name]['js'] + "\n" + block_data[script_name]['py']
        else:
            abort(404, description="Script name not recognized.")
            
        return Response(final_payload, mimetype='application/javascript')
        
    except Exception as e:
        abort(500, description=f"Failed to compile scripts: {str(e)}")