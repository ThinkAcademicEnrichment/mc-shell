import sys
from io import StringIO
from flask import Blueprint, jsonify, current_app, request
from IPython.utils.capture import capture_output
import re
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
    """Returns the current server status, connection hub info, and privilege level."""
    shell = current_app.config.get('IPYTHON_SHELL')
    mc_name = current_app.config.get('MINECRAFT_PLAYER_NAME')

    # If there is no active player context, the server is in Standby Mode
    if not shell or not mc_name:
        return jsonify({"status": "standby"})

    # Security Check: Ensure the user actually holds the token.
    from mcshell.mcserver import GUI_AUTH_TOKEN
    auth_header = request.headers.get('Authorization')
    token = request.args.get('auth')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]

    if token != GUI_AUTH_TOKEN:
        return jsonify({"status": "unauthorized"})

    try:
        # Extract the active MCShell magic instance from IPython's registry
        mcshell_instance = shell.magics_manager.registry.get('MCShell')
        if mcshell_instance:
            is_host = bool(mcshell_instance.active_paper_server and mcshell_instance.active_paper_server.is_alive())

            # --- NEW: Check if the user holds OP privileges ---
            is_admin = bool(mcshell_instance.server_data.get('password'))

            # ALWAYS fetch hub_data so the frontend knows the local_ip for the QR code
            hub_data = mcshell_instance._get_connection_hub_data()

            # If they aren't the host, wipe the join tokens so they can't be shared
            if not is_host and hub_data:
                hub_data['tokens'] = {}

            return jsonify({
                "status": "active",
                "player": mc_name,
                "is_host": is_host,
                "is_admin": is_admin,
                "hub": hub_data
            })
    except Exception as e:
        print(f"Error fetching connection hub data: {e}")

    return jsonify({"status": "active", "player": mc_name, "is_host": False, "is_admin": False, "hub": None})


@ipython_bp.route('/join_world', methods=['POST'])
def join_world():
    """Safely allows unauthenticated users to join a world from standby mode."""
    if current_app.config.get('MINECRAFT_PLAYER_NAME'):
        return jsonify({"error": "Application is already active. Cannot join a new world."}), 403

    data = request.get_json()
    token = data.get('token') if data else None
    minecraft_name = data.get('minecraft_name') if data else None

    # Validate presence of inputs
    if not minecraft_name:
        return jsonify({"error": "Missing Minecraft username."}), 400
    if not token:
        return jsonify({"error": "Missing join token."}), 400

    # Safety constraint: Validate Minecraft username format
    # Standard Minecraft usernames are 3-16 characters, alphanumeric and underscores.
    # This prevents shell injection into the IPython magic command parser.
    if not re.match(r"^[a-zA-Z0-9_]{3,16}$", minecraft_name):
        return jsonify({"error": "Invalid Minecraft username format."}), 400

    shell = current_app.config.get('IPYTHON_SHELL')
    if shell:
        try:
            # Append --guest flag and the newly validated --mc_name
            shell.run_line_magic('pp_join_world', f"{token} --guest --mc_name {minecraft_name}")

            # Fetch the GUI token to return to the newly authenticated web client
            from mcshell.mcserver import GUI_AUTH_TOKEN

            # Retrieve the final port the server bound to
            mcshell_instance = shell.magics_manager.registry.get('MCShell')
            target_port = mcshell_instance.server_data.get('app_port', 5001) if mcshell_instance else 5001

            return jsonify({"success": True, "gui_token": GUI_AUTH_TOKEN, "app_port": target_port})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Internal server error."}), 500