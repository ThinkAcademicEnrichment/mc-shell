import asyncio
import asyncssh
import socket
import logging

try:
    import psutil
except ImportError:
    psutil = None

logger = logging.getLogger(__name__)

def get_vpn_ip() -> str | None:
    """
    Scans the host's network interfaces for a VPN IP address.
    Specifically targets Tailscale while avoiding ChromeOS Crostini subnet collisions.
    """
    if not psutil:
        logger.warning("psutil module missing. VPN detection disabled.")
        return None

    try:
        # Iterate over all active network interfaces
        for interface, addrs in psutil.net_if_addrs().items():
            for addr in addrs:
                # We only care about IPv4 addresses
                if addr.family == socket.AF_INET:
                    ip = addr.address
                    
                    # Target the Tailscale interface directly
                    if interface.startswith('tailscale'):
                        logger.info(f"Detected Tailscale interface '{interface}' with IP: {ip}")
                        return ip
                        
                    # Fallback for standard CGNAT, explicitly rejecting Crostini's eth0 subnet
                    elif ip.startswith('100.') and not ip.startswith('100.115.92.'):
                        logger.info(f"Detected VPN interface '{interface}' with IP: {ip}")
                        return ip
                        
    except Exception as e:
        logger.warning(f"Failed to scan network interfaces for VPN: {e}")

    return None

class MCTunnelServer(asyncssh.SSHServer):
    """
    A strictly scoped SSH server that acts as a secure pneumatic tube.
    It denies all standard SSH features (like shell access) and only
    permits direct TCP/IP connections to explicitly allowed localhost ports.
    """
    def __init__(self, authorized_pin: str, allowed_ports: list[int]):
        self.authorized_pin = authorized_pin
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

    def password_auth_supported(self) -> bool:
        return True

    def validate_password(self, username: str, password: str) -> bool:
        return password == self.authorized_pin

    def connection_requested(self, dest_host: str, dest_port: int, orig_host: str, orig_port: int) -> bool:
        """
        Security Gate for Local Port Forwarding (ssh -L).
        Only allow the client to open connections to the explicit game ports ON localhost.
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

async def start_host_gateway(pin: str, bind_ip='0.0.0.0', bind_port=0, mc_port=25565, rcon_port=25575, mj_port=4721):
    # Generate an ephemeral host key so the SSH server can handshake (required by protocol)
    host_key = asyncssh.generate_private_key('ssh-ed25519')

    # Ensure all three critical ports are allowed through the SSH gatekeeper
    allowed_ports = [mc_port, rcon_port, mj_port]

    server = await asyncssh.create_server(
        lambda: MCTunnelServer(pin, allowed_ports),
        bind_ip, bind_port,
        server_host_keys=[host_key],
        compression_algs=['none'],
        keepalive_interval=30
    )

    # Return the actual port the OS assigned (crucial when bind_port=0)
    actual_port = server.sockets[0].getsockname()[1]
    return actual_port

async def connect_client_tunnel(host: str, port: int, pin: str, remote_mc=25565, remote_rcon=25575, remote_mj=4721, local_mc_port=None, local_rcon_port=None, local_mj_port=None):
    # Map to local ports if overrides weren't explicitly provided
    if local_mc_port is None: local_mc_port = remote_mc
    if local_rcon_port is None: local_rcon_port = remote_rcon
    if local_mj_port is None: local_mj_port = remote_mj

    logger.info(f"Connecting secure tunnel to {host}:{port}...")

    async with asyncssh.connect(
        host=host,
        port=port,
        username='mcplayer',
        password=pin,
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