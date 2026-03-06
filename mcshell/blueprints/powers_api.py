import os
import json
from flask import Blueprint, request, jsonify, make_response, current_app, render_template_string, session, send_file

# from mcshell.constants import MC_CONTROL_LAYOUT_PATH

# 1. Create a Blueprint instance.
powers_bp = Blueprint('powers_api', __name__, url_prefix='/api')

@powers_bp.route('/powers', methods=['POST'])
def save_new_power():
    """Saves a new power or updates an existing one."""
    player_id = current_app.config.get('MINECRAFT_PLAYER_NAME')
    power_repo = current_app.config.get('POWER_REPO')

    if not player_id or not power_repo:
        return jsonify({"error": "Not authorized or repository not configured"}), 500

    power_data = request.get_json()
    if not power_data or not power_data.get("name"):
        return jsonify({"error": "Invalid power data"}), 400

    try:
        power_id = power_repo.save_power(power_data)
        trigger_data = {
            "library-changed": f"Power '{power_data.get('name')}' was saved.",
            "closeSaveModal": True
        }
        headers = {"HX-Trigger": json.dumps(trigger_data)}
        return "", 204, headers
    except Exception as e:
        print(f"Error saving power: {e}")
        return jsonify({"error": "Internal error"}), 500

@powers_bp.route('/powers', methods=['GET'])
def get_powers():
    """Returns powers either as JSON dict or as HTMX-ready HTML based on request args."""
    power_repo = current_app.config.get('POWER_REPO')
    player_id = current_app.config.get('MINECRAFT_PLAYER_NAME')
    
    if not player_id or not power_repo:
        return "<p>Error: Not authorized</p>", 401

    view_type = request.args.get('view', 'editor')

    if view_type == 'control':
        # Serve JSON payload for the Control Deck UI
        all_powers_list = power_repo.list_full_powers()
        powers_dict = {p['power_id']: p for p in all_powers_list if 'power_id' in p}
        print(f"Serving full power data dictionary for player '{player_id}' for control UI.")
        return jsonify(powers_dict)

    else:
        # Default to serving the detailed HTML list for the Editor Sidebar
        powers_summary_list = power_repo.list_powers()

        if not powers_summary_list:
            return "<p style='padding: 0 8px; color: #888;'>No powers found.</p>"

        # Group powers by category to support the Editor's sidebar template
        categories = {}
        for power in powers_summary_list:
            category = power.get('category', 'Uncategorized')
            if category not in categories:
                categories[category] = []
            categories[category].append(power)

        template_string = """
        {% for category, powers in categories.items()|sort %}
          <div class="power-category" x-data="{ open: true }">
            <h3 @click="open = !open">
              <span class="category-toggle" x-text="open ? '▼' : '▶'"></span>
              {{ category }} ({{ powers|length }})
            </h3>
            <ul class="power-item-list" x-show="open" x-transition>
              {% for power in powers %}
                <li class="power-item" x-data="{ open: false }" id="power-item-{{ power.power_id }}">
                  <div class="power-item-header" @click="open = !open">
                    <span class="power-toggle" x-text="open ? '▼' : '▶'"></span>
                    <span class="power-name">{{ power.name }}</span>
                  </div>
                  <div class="power-item-details" x-show="open" x-transition>
                    <p class="power-description">{{ power.description or 'No description.' }}</p>
                    <div class="power-item-actions">

                      <button class="btn-small"
                              hx-get="/api/power/{{ power.power_id }}?mode=replace"
                              hx-swap="none"
                              title="Clear workspace and load this power">
                          Load (Replace)
                      </button>

                      <button class="btn-small"
                              hx-get="/api/power/{{ power.power_id }}?mode=add"
                              hx-swap="none"
                              title="Add this power's blocks to the current workspace">
                          Add to Workspace
                      </button>

                      <button class="btn-small btn-danger"
                              @click="$dispatch('open-delete-confirm', {
                                  powerId: '{{ power.power_id }}',
                                  powerName: '{{ power.name | replace(\"'\", \"\\\\'\") }}'
                              })">
                          Delete
                      </button>
                    </div>
                  </div>
                </li>
              {% endfor %}
            </ul>
          </div>
        {% endfor %}
        """
        return render_template_string(template_string, categories=categories)

@powers_bp.route('/power/<power_id>', methods=['GET'])
def get_power_by_id(power_id):
    """Fetches a single power's details and triggers a load event in the frontend via HTMX."""
    power_repo = current_app.config.get('POWER_REPO')
    if not power_repo:
        return jsonify({"error": "Repository not configured"}), 500

    power_data = power_repo.get_full_power(power_id)
    if not power_data:
        return jsonify({"error": "Power not found"}), 404

    mode = request.args.get('mode', 'replace')
    
    # Send the full blockly data back as an HX-Trigger event parameter
    trigger_data = {
        "loadPower": {
            "powerData": power_data,
            "mode": mode
        }
    }
    headers = {"HX-Trigger": json.dumps(trigger_data)}
    return "", 200, headers


@powers_bp.route('/power/<power_id>', methods=['DELETE'])
def delete_power_by_id(power_id):
    """Deletes a specific power from the user's library."""
    player_id = current_app.config.get('MINECRAFT_PLAYER_NAME')
    power_repo = current_app.config.get('POWER_REPO')

    if not player_id or not power_repo:
        return jsonify({"error": "Not authorized or repository not configured"}), 500

    try:
        success = power_repo.delete_power(power_id)
        if success:
            trigger_data = {"library-changed": f"Power {power_id} was deleted."}
            headers = {"HX-Trigger": json.dumps(trigger_data)}
            return "", 200, headers
        else:
            return jsonify({"error": "Power not found"}), 404
    except Exception as e:
        print(f"Error deleting power {power_id}: {e}")
        return jsonify({"error": "An internal error occurred during deletion."}), 500

@powers_bp.route('/powers/categories', methods=['GET'])
def get_categories():
    repo = current_app.config.get('POWER_REPO') 
    if not repo:
        return jsonify(["Powers", "Workspaces"])
    return jsonify(repo.list_categories())