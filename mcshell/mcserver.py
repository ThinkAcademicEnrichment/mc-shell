import logging
import textwrap
import threading
import time
import uuid
from threading import Thread, Event

from flask import Flask, current_app,request, jsonify, send_from_directory
from flask_socketio import SocketIO


from mcshell.mcactions import MCActions
from mcshell.mcplayer import MCPlayer, PowerCancelledException
from mcshell.constants import *
from mcshell.mcrepo import JsonFileRepository

from mcshell.blueprints.powers_api import powers_bp
from mcshell.blueprints.ipython_api import ipython_bp
from mcshell.blueprints.control_api import control_bp

class ServerShutdownException(Exception):
    """Custom exception to signal a clean server shutdown."""
    pass

# -- Server Control ---
app_server_thread = None

# --- Server Setup ---
app = Flask(__name__, static_folder=str(MC_APP_DIR)) # Serve files from Parcel's build output
app.secret_key = str(uuid.uuid4())

# --- Register Endpoints
app.register_blueprint(powers_bp)
app.register_blueprint(control_bp)
app.register_blueprint(ipython_bp)


# --- Suppress Flask's Default Console Logging ---
flask_logger = logging.getLogger('werkzeug')
flask_logger.setLevel(logging.DEBUG)

socketio = SocketIO(
    app, cors_allowed_origins="*", async_handlers=True, async_mode='threading',engineio_logger=flask_logger,logger=flask_logger)

# --- State Management for Running Powers ---
RUNNING_POWERS = {}

# --- Server Control ---
def start_app_server(server_data,mc_name,ipy_shell,power_repo):
    """Starts the main Flask-SocketIO application server in a separate thread."""
    app.config['MCSHELL_SERVER_DATA'] = server_data
    app.config['MINECRAFT_PLAYER_NAME'] = mc_name
    app.config['IPYTHON_SHELL'] = ipy_shell
    app.config['POWER_REPO'] = power_repo

    def _start_flask_server():
        import errno
        import socket

        logging.getLogger('werkzeug').setLevel(logging.ERROR)

        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', server_data['app_port'])) == 0:
                return

        try:
            socketio.run(app, host='0.0.0.0', port=server_data['app_port'], debug=False, use_reloader=False, allow_unsafe_werkzeug=True)
        except OSError as e:
            if getattr(e, 'errno', None) == errno.EADDRINUSE or 'Address already in use' in str(e):
                pass
            else:
                raise
        except SystemExit as e:
            if getattr(e, 'code', None) == 1:
                pass
            else:
                raise

    global app_server_thread
    app_server_thread = Thread(
        target=_start_flask_server,
        daemon=True
    )
    app_server_thread.start()

    return app_server_thread
    # time.sleep(1)
    # if app_server_thread.is_alive():
    #     print(f"Flask-SocketIO application server started in thread: {app_server_thread.ident}")
    #     print(f"mc-ed application server started for player '{mc_name}'.")
    # else:
    #     print("Error: Application server thread failed to start.")


def stop_app_server():
    """Gracefully stops the Flask-SocketIO application server by emitting a socket.io event."""
    global app_server_thread
    if not app_server_thread or not app_server_thread.is_alive():
        print("There is no application server running.")
        app_server_thread = None
        return

    import socketio as socketio_client
    sio = socketio_client.Client()
    try:
        print("CLient connecting to server to send shutdown event...")
        sio.connect(f"http://127.0.0.1:{app.config['MCSHELL_SERVER_DATA']['app_port']}")
    except Exception as e:
        print(f"Could not connect to server to send shutdown event: {e}")
        print("The server might already be down or unresponsive.")
        return

    sio.emit('shutdown_request')
    app_server_thread = None


# --- Socket.io Handlers ---
@socketio.on('connect')
def handle_connect():
    print(f"CLIENT CONNECTED: A new client has connected. SID: {request.sid}")

@socketio.on('disconnect')
def handle_disconnect():
    print(f"CLIENT DISCONNECTED: A client has disconnected. SID: {request.sid}")

@socketio.on('cancel_power')
def handle_cancel_power_event(data):
    execution_id = data.get('execution_id')
    print(f"Received cancel request for execution ID: {execution_id}")
    power_to_cancel = RUNNING_POWERS.get(execution_id)
    if power_to_cancel and execution_id in RUNNING_POWERS:
        print(f"Cancellation request received for execution ID: {execution_id}")
        power_to_cancel['cancel_event'].set()
        return {'status': 'cancellation_requested', 'execution_id': execution_id}
    else:
        print(f"Received cancel request for unknown execution ID: {execution_id}")
        return {'status': 'error', 'message': 'Unknown execution ID'}

@socketio.on('shutdown_request')
def handle_shutdown_request():
    print("Shutdown request received via Socket.IO. Stopping server.")
    try:
        with app.app_context():
            socketio.stop()
    except RuntimeError:
        pass

# --- Helpers ---
def get_code_with_dependencies(power_repo, power_id_or_name, processed_names=None) -> dict:
    if processed_names is None:
        processed_names = set()

    power_data = power_repo.find_power_by_function_name(power_id_or_name)

    if not power_data:
        return {}

    func_name = power_data.get("function_name")
    if not func_name or func_name in processed_names:
        return {}

    processed_names.add(func_name)

    all_method_definitions = {
        func_name: power_data.get("python_code")
    }

    for dep_name in power_data.get("dependencies", []):
        dep_methods = get_code_with_dependencies(power_repo, dep_name, processed_names)
        all_method_definitions.update(dep_methods)

    return all_method_definitions

def execute_power_in_thread(power_id, kwargs, execution_id=None):
    """
    This is the new, shared worker function. It runs in a background thread.
    """
    tracking_id = execution_id or power_id

    socketio.emit('power_status', {
        'id': power_id,
        'execution_id': execution_id,
        'status': 'dispatched'
    })

    cancel_event = threading.Event()
    RUNNING_POWERS[tracking_id] = {'cancel_event': cancel_event, 'power_id': power_id}

    # Initialize at top-level so it is always available in the finally block
    mc_player = None

    try:
        player_name = app.config.get('MINECRAFT_PLAYER_NAME')
        server_data = app.config.get('MCSHELL_SERVER_DATA')
        power_repo = app.config.get('POWER_REPO')

        with app.app_context():
            mc_player = MCPlayer(player_name, **server_data, cancel_event=cancel_event)
            action_implementer = MCActions(mc_player)

            execution_scope = {}

            # Retrieve Code
            main_power_data = power_repo.get_full_power(power_id)
            if not main_power_data:
                raise ValueError("Power not found.")

            main_function_name = main_power_data.get("function_name")
            all_methods_dict = get_code_with_dependencies(power_repo, main_function_name)
            all_methods_code = "\n\n".join(all_methods_dict.values())

            run_program_args = ", ".join([f"{key}={repr(value)}" for key, value in kwargs.items()])
            run_program_body = f"self.{main_function_name}({run_program_args})"

            python_code = f"""
import numpy as np
import math
from mcshell.constants import *

class BlocklyProgramRunner:
    def __init__(self, action_implementer_instance,cancel_event=None,runtime_params={{}}):
        self.action_implementer = action_implementer_instance
        self.cancel_event = cancel_event
        self.runtime_params = runtime_params

    # --- Injected Method Definitions ---
{textwrap.indent(all_methods_code, '    ')}

    # --- Dynamically Generated Main Execution ---
    def run_program(self):
        if self.cancel_event and self.cancel_event.is_set(): return
{textwrap.indent(run_program_body, '        ')}
"""

            exec(python_code, execution_scope)

            BlocklyProgramRunner = execution_scope.get('BlocklyProgramRunner')
            if not BlocklyProgramRunner:
                raise RuntimeError("BlocklyProgramRunner class not found in generated code.")

            runner = BlocklyProgramRunner(action_implementer, cancel_event=cancel_event, runtime_params=kwargs)

            try:
                runner.run_program()
            except PowerCancelledException:
                pass

            if cancel_event.is_set():
                print(f"THREAD {execution_id}: Emitting 'cancelled' status...")
                socketio.emit('power_status', {
                    'id': power_id,
                    'execution_id': execution_id,
                    'status': 'cancelled',
                    'message': 'Cancelled by user.'
                })
                return

        print(f"THREAD {execution_id}: Emitting 'finished' status...")
        socketio.emit('power_status', {
            'id': power_id,
            'execution_id': execution_id,
            'status': 'finished',
            'message': 'Completed successfully.'
        })
    except Exception as e:
        print(f"Thread {execution_id}: Error during execution: {e}")
        import traceback
        traceback.print_exc()
        socketio.emit('power_status', {
            'id': power_id,
            'execution_id': execution_id,
            'status': 'error',
            'message': str(e)
        })
    finally:
        if tracking_id in RUNNING_POWERS:
            del RUNNING_POWERS[tracking_id]

        # --- FIX: TEARDOWN SOCKET CONNECTIONS ---
        # Explicitly tear down the MCJuice connections so zombie daemon threads
        # don't exhaust the OS File Descriptor limits over multiple executions.
        if mc_player:
            try:
                # The lru_cache will return the active client for this specific MCPlayer instance
                client = mc_player.mj_client(mc_player.name)

                # Close the socket connections.
                if hasattr(client, 'conn') and hasattr(client.conn, 'socket'):
                    client.conn.socket.close()
                if hasattr(client, 'event_conn') and hasattr(client.event_conn, 'socket'):
                    client.event_conn.socket.close()

            except Exception as cleanup_err:
                print(f"Warning during socket cleanup: {cleanup_err}")

# --- Endpoints ---
@app.route('/api/execute_power', methods=['POST'])
def execute_power_endpoint():
    data = request.get_json() if request.is_json else request.form
    power_id = data.get('power_id')
    execution_id = data.get('execution_id')

    kwargs = {k: v for k, v in data.items() if k not in ['power_id', 'execution_id']}

    thread = threading.Thread(
        target=execute_power_in_thread,
        args=(power_id, kwargs, execution_id)
    )
    thread.start()

    return jsonify({"status": "dispatched", "execution_id": execution_id})

@app.route('/api/taxonomy')
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

@app.route('/api/receive_invite', methods=['POST'])
def receive_invite():
    try:
        data = request.get_json()
        sender = data.get('sender_name', 'Another player')
        world = data.get('world_name', 'their world')
        host = data.get('host')
        port = data.get('port')
        password = data.get('password')
        fj_port = data.get('fj_port')

        print("\n\n--- You have received a Minecraft world invitation! ---")
        print(f"From: {sender}")
        print(f"World: {world}")
        print("\nTo join their world, run the %mc_login command and input the following data:")
        print(f"Server Address: {host} ")
        print(f"Plugin Port: {fj_port} ")
        if password and port:
            print("\nTo join as an operator (admin), use:")
            print("\nIf you want to get server operator status, use the following data:")
            print(f"Server Port: {port}")
            print(f"Server Password: {password}")

        print("------------------------------------------------------\n")

        return jsonify({"success": True, "message": "Invitation displayed."})

    except Exception as e:
        print(f"Error processing invitation: {e}")
        return jsonify({"error": "Invalid invitation format."}), 400

# --- Control Panel ---
@app.route('/control')
def serve_control():
    return send_from_directory(app.static_folder, 'control.html')

# --- Static File Serving ---
@app.route('/')
def serve_index():
    return send_from_directory(current_app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(current_app.static_folder, path)