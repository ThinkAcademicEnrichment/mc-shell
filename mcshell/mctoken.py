from dataclasses import dataclass
import ipaddress
import re
from typing import Optional
from urllib.parse import urlsplit, parse_qs, urlencode
from mcshell.constants import MC_SERVER_PORT, MC_RCON_PORT, MJ_PLUGIN_PORT

# Strict validation patterns
HOSTNAME_RE = re.compile(
    r"^(?=.{1,253}$)(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.(?!-)[A-Za-z0-9-]{1,63}(?<!-))*$"
)
MC_VERSION_RE = re.compile(r"^[0-9]+(\.[0-9]+){1,2}$")
XBOX_TAG_RE = re.compile(r"^[A-Za-z0-9_ -]{1,16}$")
TS_KEY_RE = re.compile(r"^[A-Za-z0-9_-]{10,128}$")


def _validate_host(host: str, label: str = "Host") -> str:
    if not host:
        raise ValueError(f"{label} cannot be empty.")
    try:
        ipaddress.ip_address(host)
        return host
    except ValueError:
        if HOSTNAME_RE.match(host):
            return host
    raise ValueError(f"Invalid {label.lower()} '{host}'. Must be a valid IPv4/IPv6 address or hostname.")


def _validate_port(port_val: int | str, label: str) -> int:
    try:
        port = int(port_val)
    except (ValueError, TypeError):
        raise ValueError(f"{label} port '{port_val}' must be an integer.")
    if not (1 <= port <= 65535):
        raise ValueError(f"{label} port {port} out of valid range (1-65535).")
    return port


@dataclass
class MCToken:
    target_host: str
    mc_port: int = MC_SERVER_PORT
    rcon_port: int = MC_RCON_PORT
    mj_port: int = MJ_PLUGIN_PORT
    mc_version: str = "26.1"
    rh_host: Optional[str] = None
    authkey: Optional[str] = None
    xbox_tag: Optional[str] = None

    def validate(self) -> "MCToken":
        self.target_host = _validate_host(self.target_host, "Target host")
        self.mc_port = _validate_port(self.mc_port, "MC")
        self.rcon_port = _validate_port(self.rcon_port, "RCON")
        self.mj_port = _validate_port(self.mj_port, "McJuice")

        if not MC_VERSION_RE.match(str(self.mc_version)):
            raise ValueError(f"Invalid Minecraft version '{self.mc_version}'.")

        if self.rh_host:
            self.rh_host = _validate_host(self.rh_host, "Relay host")

        if self.authkey and not TS_KEY_RE.match(self.authkey):
            raise ValueError("Invalid Tailscale authkey format.")

        if self.xbox_tag and not XBOX_TAG_RE.match(self.xbox_tag):
            raise ValueError(f"Invalid Xbox Gamertag '{self.xbox_tag}'.")

        return self

    def to_uri(self) -> str:
        """Generates a transparent, shareable mcshell:// URI token."""
        params = {
            "rcon": self.rcon_port,
            "mj": self.mj_port,
            "ver": self.mc_version,
        }
        if self.rh_host:
            params["rh"] = self.rh_host
        if self.authkey:
            params["ts"] = self.authkey
        if self.xbox_tag:
            params["xbox"] = self.xbox_tag
        return f"mcshell://{self.target_host}:{self.mc_port}?{urlencode(params)}"

    @classmethod
    def parse(cls, raw_token: str) -> "MCToken":
        if not raw_token or not isinstance(raw_token, str):
            raise ValueError("Connection token cannot be empty.")

        token = raw_token.strip()
        if any(c.isspace() for c in token):
            raise ValueError("Connection token must not contain spaces.")

        # 1. Parse mcshell:// URI format
        if token.startswith("mcshell://"):
            parsed = urlsplit(token)
            if not parsed.hostname:
                raise ValueError("URI token is missing a target hostname or IP.")
            q = {k: v[0] for k, v in parse_qs(parsed.query).items()}
            return cls(
                target_host=parsed.hostname,
                mc_port=parsed.port or MC_SERVER_PORT,
                rcon_port=q.get("rcon", MC_RCON_PORT),
                mj_port=q.get("mj", MJ_PLUGIN_PORT),
                mc_version=q.get("ver", "26.1"),
                rh_host=None if q.get("rh") in (None, "none", "") else q.get("rh"),
                authkey=q.get("ts"),
                xbox_tag=q.get("xbox"),
            ).validate()

        # 2. Parse Legacy Compact Format: host[,rh][@mc-rcon-mj-ver][^ts][~xbox]
        xbox_tag = None
        if "~" in token:
            token, xbox_tag = token.split("~", 1)

        authkey = None
        if "^" in token:
            token, authkey = token.split("^", 1)

        mc_port, rcon_port, mj_port, mc_version = (
            MC_SERVER_PORT,
            MC_RCON_PORT,
            MJ_PLUGIN_PORT,
            "26.1",
        )
        if "@" in token:
            ip_relay_part, ports_part = token.split("@", 1)
            parts = ports_part.split("-", 3)
            if len(parts) != 4:
                raise ValueError(
                    "Invalid '@ports' segment. Expected '@<mc_port>-<rcon_port>-<mj_port>-<version>'."
                )
            mc_port, rcon_port, mj_port, mc_version = parts
        else:
            ip_relay_part = token

        rh_host = None
        if "," in ip_relay_part:
            target_host, raw_rh = ip_relay_part.split(",", 1)
            rh_host = None if raw_rh in ("none", "") else raw_rh
        else:
            target_host = ip_relay_part

        return cls(
            target_host=target_host,
            mc_port=mc_port,
            rcon_port=rcon_port,
            mj_port=mj_port,
            mc_version=mc_version,
            rh_host=rh_host,
            authkey=authkey or None,
            xbox_tag=xbox_tag or None,
        ).validate()