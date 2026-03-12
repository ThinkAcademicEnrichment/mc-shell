import asyncio
import asyncssh
import socket
import logging
import base64
import json

logger = logging.getLogger(__name__)

class MCTunnelServer(asyncssh.SSHServer):
    """
    A strictly scoped SSH server that acts as a secure pneumatic tube.
    It denies all standard SSH features (like shell access) and only
    permits direct TCP/IP connections to explicitly allowed localhost ports.
    """
    def __init__(self, authorized_pub_key: str, allowed_ports: list[int]):
        self.authorized_pub_key = authorized_pub_key
        self.allowed_ports = allowed_ports

    def connection_made(self, conn: asyncssh.SSHServerConnection):
        sock = conn.get_extra_info('socket')
        if sock is not None:
            try:
                # Force instant transmission of small packets (Nagle's Algorithm disable)
                sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
                logger.debug("TCP_NODELAY enabled for incoming client.")
            except Exception as e:
                logger.warning(f"Could not optimize socket for latency: {e}")

        peer = conn.get_extra_info('peername')[0]
        logger.info(f"Secure tunnel connection initiated from {peer}")

    def public_key_auth_supported(self) -> bool:
        return True

    def validate_public_key(self, username: str, key: asyncssh.SSHKey) -> bool:
        return key.export_public_key('openssh').decode('utf-8') == self.authorized_pub_key

    def connection_requested(self, dest_host: str, dest_port: int, orig_host: str, orig_port: int) -> bool:
        """
        Security Gate for Local Port Forwarding (ssh -L).
        Only allow the client to open connections to the 3 explicit game ports ON localhost.
        """
        # Prevent the client from using the host as a proxy to attack the host's LAN
        if dest_host not in ('127.0.0.1', 'localhost'):
            logger.warning(f"Rejected attempt to route to non-local IP: {dest_host}")
            return False

        if dest_port in self.allowed_ports:
            logger.info(f"Client authorized to connect to internal port: {dest_port}")
            return True

        logger.warning(f"Rejected attempt to tunnel to unauthorized port: {dest_port}")
        return False

    def server_requested_tcp_forward_port(self, listen_host: str, listen_port: int) -> bool:
        """
        Security Gate for Remote Port Forwarding (ssh -R).
        We don't use this, so explicitly deny all requests to be safe.
        """
        return False

    def session_requested(self) -> bool:
        """
        Security Gate: Absolutely no shell/terminal access allowed.
        """
        return False

def _get_local_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"

async def start_host_gateway(bind_ip='0.0.0.0', bind_port=2222, mc_port=25565, rcon_port=25575, mj_port=4721) -> str:
    host_key = asyncssh.generate_private_key('ssh-ed25519')
    client_key = asyncssh.generate_private_key('ssh-ed25519')
    client_pub_str = client_key.export_public_key('openssh').decode('utf-8')

    # Ensure all three critical ports are allowed through the SSH gatekeeper
    allowed_ports = [mc_port, rcon_port, mj_port]

    await asyncssh.create_server(
        lambda: MCTunnelServer(client_pub_str, allowed_ports),
        bind_ip, bind_port,
        server_host_keys=[host_key],
        compression_algs=['none'],
        keepalive_interval=30
    )

    # Bake the host's target ports into the token manifest
    token_data = {
        "ip": _get_local_ip(),
        "port": bind_port,
        "key": client_key.export_private_key('openssh').decode('utf-8'),
        "ports": {
            "mc": mc_port,
            "rcon": rcon_port,
            "mj": mj_port
        }
    }

    join_token = base64.b64encode(json.dumps(token_data).encode('utf-8')).decode('utf-8')
    return join_token


async def connect_client_tunnel(join_token: str, local_mc_port=None, local_rcon_port=None, local_mj_port=None):
    token_data = json.loads(base64.b64decode(join_token).decode('utf-8'))
    client_key = asyncssh.import_private_key(token_data["key"])

    # Extract the host's required remote ports directly from the token
    remote_mc = token_data["ports"]["mc"]
    remote_rcon = token_data["ports"]["rcon"]
    remote_mj = token_data["ports"]["mj"]

    # Map to local ports if overrides weren't explicitly provided
    if local_mc_port is None: local_mc_port = remote_mc
    if local_rcon_port is None: local_rcon_port = remote_rcon
    if local_mj_port is None: local_mj_port = remote_mj

    logger.info(f"Connecting secure tunnel to {token_data['ip']}...")

    async with asyncssh.connect(
        host=token_data['ip'],
        port=token_data['port'],
        username='mcplayer',
        client_keys=[client_key],
        known_hosts=None,
        compression_algs=['none']
    ) as conn:

        sock = conn.get_extra_info('socket')
        if sock is not None:
            sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)

        # Forward all three required application ports simultaneously
        await conn.forward_local_port('', local_mc_port, '127.0.0.1', remote_mc)
        await conn.forward_local_port('', local_rcon_port, '127.0.0.1', remote_rcon)
        await conn.forward_local_port('', local_mj_port, '127.0.0.1', remote_mj)

        print(f"\n[TUNNEL] Secure link established! Local ports mapped -> MC:{local_mc_port}, RCON:{local_rcon_port}, API:{local_mj_port}")

        await conn.wait_closed()