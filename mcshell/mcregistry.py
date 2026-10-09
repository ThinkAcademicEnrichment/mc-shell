from mcshell.mcplatforms import BinaryTarget
from mcshell.constants import MC_DATA_DIR 

TAILSCALE_REGISTRY = {
    "linux-amd64": BinaryTarget(
        executable="tailscale", 
        sudo_args={"up", "down", "logout", "cert"}
    ),
    "wsl-amd64": BinaryTarget(
        executable="tailscale.exe"
    ),
    "windows-amd64": BinaryTarget(
        executable="tailscale"
    ),
    "darwin-arm64": BinaryTarget(
        executable="/Applications/Tailscale.app/Contents/MacOS/Tailscale",
        sudo_args={"up", "down", "logout", "cert"}
    ),
    "darwin-amd64": BinaryTarget(
        executable="/Applications/Tailscale.app/Contents/MacOS/Tailscale",
        sudo_args={"up", "down", "logout", "cert"}
    ),
}

# Examples

# 1. ALWAYS-SUDO TOOL (No subcommands or flags needed to determine sudo)
IPTABLES_REGISTRY = {
    "linux-amd64": BinaryTarget(executable="iptables", always_sudo=True),
    "wsl-amd64": BinaryTarget(executable="iptables.exe"),
}
# iptables = CrossPlatformBinary(IPTABLES_REGISTRY)
# iptables.execute("-L")  # Executes: sudo iptables -L


# 2. FLAG-BASED TOOL
SYSTEMCTL_REGISTRY = {
    "linux-amd64": BinaryTarget(
        executable="systemctl", 
        sudo_args={"--system", "restart", "stop", "start"}  # Mix of flags & words
    )
}
# systemctl = CrossPlatformBinary(SYSTEMCTL_REGISTRY)
# systemctl.execute("status")            # Executes: systemctl status (No sudo)
# systemctl.execute("restart", "nginx")  # Executes: sudo systemctl restart nginx


# 3. DYNAMIC PATH-BASED RULE (Using sudo_predicate)
# Needs sudo only when touching system directories like /etc/ or /var/
CAT_REGISTRY = {
    "linux-amd64": BinaryTarget(
        executable="cat",
        sudo_predicate=lambda args: any(a.startswith(("/etc", "/var", "/sys")) for a in args)
    )
}
# cat = CrossPlatformBinary(CAT_REGISTRY)
# cat.execute("/home/user/file.txt")  # Executes: cat /home/user/file.txt
# cat.execute("/etc/hosts")          # Executes: sudo cat /etc/hosts