from dataclasses import dataclass, field
from typing import List, Set, Callable, Optional
import platform
import shutil
import subprocess

def get_current_platform() -> str:
    """
    Detects the current operating system and isolates WSL as a distinct platform.
    
    Returns:
        str: Typically 'linux', 'wsl', 'windows', or 'darwin'
    """
    sys_os = platform.system().lower()
    
    # WSL identifies its system as 'linux', so we must inspect the kernel release string
    if sys_os == 'linux':
        release = platform.release().lower()
        if 'microsoft' in release or 'wsl' in release:
            return 'wsl'
            
    return sys_os

def get_current_arch() -> str:
    """
    Detects the current hardware architecture and normalizes it to Go standard names.
    """
    machine = platform.machine().lower()
    
    # x86_64 is standard for 64-bit Intel/AMD on Linux and macOS
    # AMD64 is standard on Windows
    if machine in ['x86_64', 'amd64']:
        return 'amd64'
        
    # arm64 is standard on macOS Apple Silicon
    # aarch64 is standard on Linux ARM
    elif machine in ['arm64', 'aarch64']:
        return 'arm64'
        
    return machine

@dataclass
class BinaryTarget:
    executable: str
    
    # Strategy 1: The tool ALWAYS requires root (e.g., iptables, tcpdump)
    always_sudo: bool = False
    
    # Strategy 2: Root is triggered if ANY passed argument/flag matches this set
    # Matches subcommands ("up"), short flags ("-9"), or long flags ("--system")
    sudo_args: Set[str] = field(default_factory=set)
    
    # Strategy 3: Dynamic rule evaluation function for complex edge cases
    # Example: lambda args: any(arg.startswith("/etc/") for arg in args)
    sudo_predicate: Optional[Callable[[List[str]], bool]] = None


class CrossPlatformBinary:
    def __init__(self, registry: dict, fallback: str = 'linux-amd64'):
        self.registry = registry
        
        # Grab both OS and Architecture
        os_name = get_current_platform()
        arch_name = get_current_arch()

        self.platform = os_name
        self.arch = arch_name 

        # Build the composite key (e.g., 'darwin-arm64')
        self.platform_key = f"{os_name}-{arch_name}"
        
        # Look it up in the registry
        self.target = self.registry.get(self.platform_key, self.registry.get(fallback))
        
        if not self.target:
            raise RuntimeError(f"No binary configuration found for {self.platform_key}")
            
    def build_cmd(self, *args, force_sudo: bool = False) -> List[str]:
        cmd = []
        str_args = [str(a) for a in args]
        
        # Evaluate all privilege triggers
        is_sudo_arg = any(arg in self.target.sudo_args for arg in str_args)
        is_sudo_pred = self.target.sudo_predicate(str_args) if self.target.sudo_predicate else False
        
        needs_sudo = (
            force_sudo or 
            self.target.always_sudo or 
            is_sudo_arg or 
            is_sudo_pred
        )
        
        if needs_sudo and self.platform not in ['windows', 'wsl']:
            cmd.append("sudo")
            
        executable_path = shutil.which(self.target.executable) or self.target.executable
        cmd.append(executable_path)
        cmd.extend(str_args)
        
        return cmd

    def execute(self, *args, force_sudo: bool = False, **kwargs) -> subprocess.CompletedProcess:
        cmd = self.build_cmd(*args, force_sudo=force_sudo)
        return subprocess.run(cmd, **kwargs)