from mcshell import MCToken
import re
import sys
import os
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
    """Returns the current server status, connection hub info, and privilege level."""

    is_appliance = os.environ.get('MCSHELL_APPLIANCE_MODE') == '1'
    shell = current_app.config.get('IPYTHON_SHELL')
    mc_name = current_app.config.get('MINECRAFT_PLAYER_NAME')
    default_lobby_name = current_app.config.get('DEFAULT_LOBBY_NAME')

    # If there is no active player context, the server is in Standby Mode
    if not shell or not mc_name:
        return jsonify({
            "status": "standby", 
            "appliance_mode": is_appliance,
            "player": default_lobby_name  # Send the default safely
        }) 

    # Security Check: Ensure the user actually holds the token.
    from mcshell.mcserver import GUI_AUTH_TOKEN
    auth_header = request.headers.get('Authorization')
    token = request.args.get('auth')
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]

    if token != GUI_AUTH_TOKEN:
        return jsonify({"status": "unauthorized", "appliance_mode": is_appliance})

    try:
        # Extract the active MCShell magic instance from IPython's registry
        mcshell_instance = shell.magics_manager.registry.get('MCShell')
        if mcshell_instance:
            is_host = bool(mcshell_instance.local_server.process and mcshell_instance.local_server.process.is_alive())
            is_admin = bool(mcshell_instance.connection.is_admin)

            # ALWAYS fetch hub_data so the frontend knows the local_ip and connection strings
            hub_data = mcshell_instance._get_connection_hub_data()

            # If they aren't the host, wipe the shareable join tokens
            if not is_host and hub_data:
                hub_data['lan_token'] = None
                hub_data['vpn_token'] = None

            return jsonify({
                "status": "active",
                "player": mc_name,
                "is_host": is_host,
                "is_admin": is_admin,
                "world_name": mcshell_instance.connection.world_name,
                "connection_hub": hub_data,  # Matches Alpine UI binding
                "appliance_mode": is_appliance,
            })

    except Exception as e:
        print(f"Error fetching connection hub data: {e}")

    return jsonify({
        "status": "active", 
        "player": mc_name, 
        "is_host": False, 
        "is_admin": False, 
        "connection_hub": None, 
        "appliance_mode": is_appliance 
    })

@ipython_bp.route("/session/player",methods=['POST'])
def set_active_player():
    data = request.get_json() 
    player_name = data.get('player_name','')
    if player_name:
        if current_app.config.get('MINECRAFT_PLAYER_NAME'):
            return jsonify({"error": "Application is already active. Cannot join a new world."}), 403
        current_app.config['DEFAULT_LOBBY_NAME'] = player_name
        # Update the active instance or namespace directly
        ip = current_app.config.get('IPYTHON_SHELL')
        if ip:
            # Inject directly into user namespace or target the magic extension
            # ip.user_ns["CURRENT_PLAYER"] = player_name
            # Or call a method on the magic instance directly:
            ip.magics_manager.registry['MCShell'].current_lobby_mc_name = player_name
    return {"status": "ok", "player": player_name}


@ipython_bp.route('/join_world', methods=['POST'])
def join_world():
    """Safely allows unauthenticated users to join a world from standby mode."""
    if current_app.config.get('MINECRAFT_PLAYER_NAME'):
        return jsonify({"error": "Application is already active. Cannot join a new world."}), 403

    data = request.get_json() or {}
    token = (data.get('token') or '').strip()
    minecraft_name = (data.get('minecraft_name') or '').strip()

    if not minecraft_name:
        return jsonify({"error": "Missing Minecraft username."}), 400
    if not token:
        return jsonify({"error": "Missing join token."}), 400

    if not re.match(r"^[a-zA-Z0-9_]{3,16}$", minecraft_name):
        return jsonify({"error": "Invalid Minecraft username format (3-16 alphanumeric characters)."}), 400

    # 1. Strictly validate the token structure before calling IPython
    try:
        MCToken.parse(token)
    except ValueError as e:
        return jsonify({"error": f"Invalid join token: {e}"}), 400

    shell = current_app.config.get('IPYTHON_SHELL')
    if shell:
        try:
            # Quote the token with shlex.quote to prevent flag injection
            import shlex
            safe_cmd = f"{shlex.quote(token)} --mc_name {shlex.quote(minecraft_name)}"
            # safe_cmd = f"{token} --mc_name {minecraft_name}"
            shell.run_line_magic('pp_join_world', safe_cmd)

            mcshell_instance = shell.magics_manager.registry.get('MCShell')
            
            # 2. Verify the magic actually established a connection!
            if not mcshell_instance or not getattr(mcshell_instance.connection, 'target_host', None):
                return jsonify({"error": "Failed to connect to the target Minecraft server. Is it online?"}), 502

            from mcshell.mcserver import GUI_AUTH_TOKEN
            target_port = mcshell_instance.server_data.get('app_port', 5001)

            return jsonify({"success": True, "gui_token": GUI_AUTH_TOKEN, "app_port": target_port})
        except Exception as e:
            return jsonify({"error": str(e)}), 500

    return jsonify({"error": "Internal server error."}), 500

