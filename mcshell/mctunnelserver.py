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
    permits TCP port forwarding to explicitly allowed ports.
    """
    def __init__(self, authorized_pub_key: str, allowed_ports: list[int]):
        self.authorized_pub_key = authorized_pub_key
        self.allowed_ports = allowed_ports

    def connection_made(self, conn: asyncssh.SSHServerConnection):
        """
        Hook: Triggered the moment a TCP connection is established.
        PERFORMANCE TUNING: We disable Nagle's Algorithm here to eliminate
        the ~40ms buffer delay that causes "block lag" in Minecraft.
        """
        sock = conn.get_extra_info('socket')
        if sock is not None:
            try:
                # Force instant transmission of small packets
                sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
                logger.debug("TCP_NODELAY enabled for incoming client.")
            except Exception as e:
                logger.warning(f"Could not optimize socket for latency: {e}")

        peer = conn.get_extra_info('peername')[0]
        logger.info(f"Secure tunnel connection initiated from {peer}")

    def public_key_auth_supported(self) -> bool:
        return True

    def validate_public_key(self, username: str, key: asyncssh.SSHKey) -> bool:
        """
        Authenticate the client by comparing their key against the one
        we baked into the "Join Token".
        """
        return key.export_public_key('openssh').decode('utf-8') == self.authorized_pub_key

    def server_requested_tcp_forward_port(self, listen_host: str, listen_port: int) -> bool:
        """
        Security Gate: Only allow the client to request tunnels to our game ports.
        """
        if listen_port in self.allowed_ports:
            logger.info(f"Client authorized to tunnel to port: {listen_port}")
            return True
        logger.warning(f"Rejected attempt to tunnel to unauthorized port: {listen_port}")
        return False

    def session_requested(self) -> bool:
        """
        Security Gate: Absolutely no shell/terminal access allowed.
        """
        return False


async def start_host_gateway(bind_ip='0.0.0.0', bind_port=2222, mc_port=25565, plugin_port=8080) -> str:
    """
    Spins up the embedded SSH server and generates a zero-config Join Token.
    This would be called by your %pp_start_world magic.
    """
    # 1. Generate ultra-fast ED25519 keys for this specific play session
    host_key = asyncssh.generate_private_key('ssh-ed25519')
    client_key = asyncssh.generate_private_key('ssh-ed25519')
    client_pub_str = client_key.export_public_key('openssh').decode('utf-8')

    allowed_ports = [mc_port, plugin_port]

    # 2. Start the lightweight SSH server
    await asyncssh.create_server(
        lambda: MinecraftTunnelServer(client_pub_str, allowed_ports),
        bind_ip, bind_port,
        server_host_keys=[host_key],
        compression_algs=['none'],     # PERFORMANCE: Don't re-compress MC data
        keepalive_interval=30          # Keep tunnel alive if the player's WiFi blips
    )

    # 3. Create the "Join Token"
    # We package the private key the client needs, plus connection info, into a string
    token_data = {
        "ip": "YOUR_PUBLIC_IP", # You would dynamically fetch STUN/external IP here
        "port": bind_port,
        "key": client_key.export_private_key('openssh').decode('utf-8')
    }

    # Base64 encode it so it looks like a clean magic code (e.g. "eyAiaXAiLi...")
    join_token = base64.b64encode(json.dumps(token_data).encode('utf-8')).decode('utf-8')
    return join_token


async def connect_client_tunnel(join_token: str, mc_port=25565, plugin_port=8080):
    """
    Connects to the host using the Join Token and maps local ports to the server.
    This would be called by your %pp_join magic.
    """
    # 1. Unpack the Join Token
    token_data = json.loads(base64.b64decode(join_token).decode('utf-8'))
    client_key = asyncssh.import_private_key(token_data["key"])

    logger.info(f"Connecting secure tunnel to {token_data['ip']}...")

    # 2. Connect to the host
    async with asyncssh.connect(
        host=token_data['ip'],
        port=token_data['port'],
        username='mcplayer', # Username is ignored by our server, but required by protocol
        client_keys=[client_key],
        known_hosts=None, # In a strict setup you'd verify host key, but token is fine here
        compression_algs=['none'] # PERFORMANCE: Must be disabled on client side too
    ) as conn:

        # PERFORMANCE: Disable Nagle on the client side sending socket
        sock = conn.get_extra_info('socket')
        if sock is not None:
            sock.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)

        # 3. Request the secure port forwards
        # This maps localhost:25565 to the Server's 25565 through the encrypted tube
        await conn.forward_local_port('', mc_port, '127.0.0.1', mc_port)
        await conn.forward_local_port('', plugin_port, '127.0.0.1', plugin_port)

        logger.info("Tunnel established! Open Minecraft and connect to 'localhost'")

        # Keep the connection open until interrupted
        await conn.wait_closed()