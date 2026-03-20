import sys
from io import StringIO
from flask import Blueprint, jsonify, current_app, request
from IPython.utils.capture import capture_output
ipython_bp = Blueprint('ipython_api',__name__,url_prefix='/api')

@ipython_bp.route('/ipython_magic', methods=['POST'])
def execute_ipython_magic():
    """Receives a magic command and its arguments to be executed in the shell."""
    data = request.get_json()
    command = data.get('command')
    arguments = data.get('arguments', '') # Arguments are the rest of the line

    if not command:
        return jsonify({"error": "No command provided"}), 400

    # Retrieve the shell instance we stored in the config
    shell = current_app.config.get('IPYTHON_SHELL')
    if not shell:
        return jsonify({"error": "IPython shell not available in server."}), 500

    try:
        # Use run_line_magic to execute the command
        # Use IPython's own capture_output context manager.
        # It reliably captures all output generated within the 'with' block.
        with capture_output() as captured:
            try:
                magic_name = command.lstrip('%')
                shell.run_line_magic(magic_name, arguments)
            except Exception as e:
                # Also capture any exceptions that occur during execution
                print(f"\n--- ERROR DURING MAGIC EXECUTION ---\n{e}")

        # The captured stdout and stderr are available on the object
        output = captured.stdout

        # You can still write to the original console if you want
        sys.stdout.write(output)

        return jsonify({"success": True, "output": output})
    except Exception as e:
        # If the magic itself throws an error, capture it
        print(f"Error executing magic command '{command}': {e}")
        return jsonify({"error": str(e)}), 500

@ipython_bp.route('/lobby_data', methods=['GET'])
def get_lobby_data():
    """Returns the current server status and connection hub info for the Share UI."""
    shell = current_app.config.get('IPYTHON_SHELL')
    mc_name = current_app.config.get('MINECRAFT_PLAYER_NAME')

    # If there is no active player context, the server is in Standby Mode
    if not shell or not mc_name:
        return jsonify({"status": "standby"})

    try:
        # Extract the active MCShell magic instance from IPython's registry
        mcshell_instance = shell.magics_manager.registry.get('MCShell')
        if mcshell_instance:
            is_host = bool(mcshell_instance.active_paper_server and mcshell_instance.active_paper_server.is_alive())

            # ALWAYS fetch hub_data so the frontend knows the local_ip for the QR code
            hub_data = mcshell_instance._get_connection_hub_data()

            # If they aren't the host, wipe the join tokens so they can't be shared
            if not is_host and hub_data:
                hub_data['tokens'] = {}

            return jsonify({
                "status": "active",
                "player": mc_name,
                "is_host": is_host,
                "hub": hub_data
            })
    except Exception as e:
        print(f"Error fetching connection hub data: {e}")

    return jsonify({"status": "active", "player": mc_name, "is_host": False, "hub": None})

@ipython_bp.route('/join_world', methods=['POST'])
def join_world():
    """Safely allows unauthenticated users to join a world from standby mode."""
    if current_app.config.get('MINECRAFT_PLAYER_NAME'):
        return jsonify({"error": "Application is already active. Cannot join a new world."}), 403

    data = request.get_json()
    token = data.get('token') if data else None

    if not token:
        return jsonify({"error": "Missing join token."}), 400

    shell = current_app.config.get('IPYTHON_SHELL')
    if shell:
        try:
            # Append --guest flag to safely bypass interactive prompts
            shell.run_line_magic('mc_start_app', f"{token} --guest")

            # Fetch the GUI token to return to the newly authenticated web client
            from mcshell.mcserver import GUI_AUTH_TOKEN
            return jsonify({"success": True, "gui_token": GUI_AUTH_TOKEN})
        except Exception as e:
            return jsonify({"error": str(e)}), 500