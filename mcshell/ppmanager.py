from mcshell import MC_WORLDS_BASE_DIR
import subprocess
import pexpect
import threading
import json
import time
import sys
import yaml
import shutil  # Added for cross-platform file sync
from pathlib import Path
from typing import Optional

import platform

from mcshell.constants import *
from mcshell.ppdownloader import PaperDownloader

class PaperServerManager:
    """Manages the lifecycle of a single Paper server subprocess using a local JRE."""

    def __init__(self, world_name: str, world_directory: Path):
        self.world_name = world_name
        self.world_directory = world_directory
        self.process: Optional[pexpect.spawn] = None
        self.thread: Optional[threading.Thread] = None
        
        # New synchronization attributes
        self.sync_thread: Optional[threading.Thread] = None
        self.sync_stop_event: Optional[threading.Event] = None

        # Load the world manifest to determine the JAR path
        manifest_path = self.world_directory / 'world_manifest.json'
        with manifest_path.open('rb') as f:
            self.world_manifest = json.load(f)

        self.jar_path = self.world_directory.parent / self.world_manifest.get('server_jar_path')
    def update_jar_path(self):
        downloader = PaperDownloader(MC_WORLDS_BASE_DIR / 'server-jars')
        paper_version = self.world_manifest["paper_version"]
        server_jar_path = self.world_manifest["server_jar_path"]
        new_server_jar_path = str(Path(downloader.get_jar_path(paper_version)).relative_to(MC_WORLDS_BASE_DIR))
        if new_server_jar_path != server_jar_path:
            print(f"\nUpdating PaperMC from {server_jar_path.name} to {new_server_jar_path.name}")
            self.world_manifest["server_jar_path"] = new_server_jar_path
            manifest_path = self.world_directory / 'world_manifest.json'
            with manifest_path.open('wb') as f:
                self.world_manifest = json.dump(self.world_manifest,f)

    def apply_manifest_settings(self,**kwargs):
        """
        Applies settings from world_manifest.json to server.properties
        and paper-global.yml.
        Allow passing arbitrary key value pairs for server.properties file
        """
        print(f"--- Applying settings from manifest to world: {self.world_name} ---")

        try:
            mcjuice_host = kwargs.pop("mcjuice-host", None)
            mcjuice_port = kwargs.pop("mcjuice-port", None)
            if mcjuice_host:
                mcjuice_dir = self.world_directory / "plugins" / "McJuice"
                mcjuice_dir.mkdir(parents=True, exist_ok=True)
                plugin_config_path = mcjuice_dir / "config.yml"

                config_data = {}
                if plugin_config_path.exists():
                    with plugin_config_path.open('r') as f:
                        config_data = yaml.safe_load(f) or {}

                config_data['host'] = mcjuice_host
                if mcjuice_port:
                    config_data['port'] = int(mcjuice_port)

                with plugin_config_path.open('w') as f:
                    yaml.safe_dump(config_data, f, default_flow_style=False)

                print(f"Secured McJuice API binding to {mcjuice_host}")

            # Update server.properties
            settings_to_apply = {**self.world_manifest.get("server_properties", {}),**kwargs}

            properties_path = self.world_directory / "server.properties"

            properties = {}
            if properties_path.exists():
                with open(properties_path, 'r') as f:
                    for line in f:
                        if '=' in line and not line.startswith('#'):
                            key, value = line.strip().split('=', 1)
                            properties[key] = value

            for key, value in settings_to_apply.items():
                if isinstance(value,dict):
                    value = json.dumps(value, separators=(',', ':'))
                properties[key] = str(value)

            with open(properties_path, 'w') as f:
                f.write("# Minecraft server properties (managed by mc-shell)\n")
                for key, value in properties.items():
                    f.write(f"{key}={value}\n")

            # Update Paper global settings
            paper_settings = self.world_manifest.get('paper', {})
            if paper_settings:
                paper_config_path = self.world_directory / 'config' / 'paper-global.yml'
                if not paper_config_path.exists():
                    paper_config_path.parent.mkdir(parents=True, exist_ok=True)
                    with open(paper_config_path, 'w') as f:
                        f.write(MC_PAPER_GLOBAL_TEMPLATE.read_text())

                with open(paper_config_path, 'r') as f:
                    paper_config = yaml.safe_load(f) or {}

                def merge_dicts(source, destination):
                    for key, value in source.items():
                        if isinstance(value, dict) and key in destination and isinstance(destination[key], dict):
                            merge_dicts(value, destination[key])
                        else:
                            destination[key] = value
                    return destination

                updated_config = merge_dicts(paper_settings, paper_config)
                with open(paper_config_path, 'w') as f:
                    yaml.dump(updated_config, f, default_flow_style=False, sort_keys=False)

            print("--- Manifest settings applied successfully. ---")

        except Exception as e:
            print(f"Error applying settings: {e}")

    def _execute_server(self):
        """
        The main execution function. Starts the Paper server using the local JRE
        and logs its output in real-time.
        """
        command = [
            str(MC_JRE_PATH),
            '-Xms2G', '-Xmx2G',
            '-jar', str(self.jar_path),
            'nogui'
        ]

        # Add state tracking for your prompt logic
        self.server_ready = False
        self.suspend_logs = False 

        print(f"Starting Paper server for world '{self.world_name}'...")
        try:
            self.process = pexpect.spawn(
                ' '.join(command),
                cwd=str(self.world_directory),
                encoding='utf-8'
            )

            while self.process.isalive():
                try:
                    index = self.process.expect(['\r\n', pexpect.TIMEOUT, pexpect.EOF], timeout=0.1)
                    if index == 0:
                        line = self.process.before
                        
                        # Filter noisy logs
                        # TODO: formalize this
                        #if "Thread RCON Client" in line or "Geyser-Spigot" in line or "McJuice" in line or "floodgate" in line:
                        #    continue
                        if "Thread RCON Client" in line:
                           continue


                        # 1. Detect the exact moment startup finishes
                        if not self.ready_event.is_set() and 'Done (' in line:
                            self.ready_event.set() 
                            # The event is now set! The start() method will instantly resume.

                        # 2. Only write to stdout if we haven't suspended logs for a prompt
                        if line and not self.suspend_logs:
                            sys.stdout.write(f"[{self.world_name}] {line}\n")
                            sys.stdout.flush()                           

                except pexpect.exceptions.TIMEOUT:
                    continue
                except pexpect.exceptions.EOF:
                    break

        except Exception as e:
            print(f"An error occurred while launching the Paper server: {e}")
        finally:
            print(f"\nPaper server process for world '{self.world_name}' has terminated.")
            if self.process and self.process.isalive():
                self.process.close(force=True)
            self.process = None

    def _sync_world_data(self):
        """Cross-platform synchronization of the entire world from RAM to persistent disk."""
        volatile_dir = self.world_directory / "world"
        persistent_dir = self.world_directory / "world_persistent"
        
        if volatile_dir.exists():
            try:
                shutil.copytree(volatile_dir, persistent_dir, dirs_exist_ok=True)
            except Exception as e:
                print(f"[{self.world_name}] Error syncing world data: {e}")


    def _sync_worker(self, interval_seconds: int = 300):
        """Background loop to periodically sync RAM disk data to persistent storage."""
        print(f"[{self.world_name}] World data sync worker initialized (Interval: {interval_seconds}s).")
        while not self.sync_stop_event.is_set():
            # Wait blocks until the event is set or the timeout is reached.
            # It returns True if the flag was set (meaning we should stop).
            if self.sync_stop_event.wait(interval_seconds):
                break
            self._sync_world_data()

    def _provision_ramdisk(self, buffer_mb: int = 512):
        """Provisions a cross-platform RAM disk for the entire world and seeds it."""
        import os
        
        volatile_dir = self.world_directory / "world"
        persistent_dir = self.world_directory / "world_persistent"
        
        volatile_dir.mkdir(parents=True, exist_ok=True)
        persistent_dir.mkdir(parents=True, exist_ok=True)

        # 1. ROBUSTNESS: Ensure we aren't writing into a zombie mount from a previous crash
        if os.path.ismount(str(volatile_dir)):
            print(f"[{self.world_name}] Stale RAM disk detected. Unmounting before provisioning...")
            self._destroy_ramdisk()
        
        current_size_mb = self._get_dir_size_mb(persistent_dir)
        size_mb = max(current_size_mb + buffer_mb, 256)
        
        os_system = platform.system()
        try:
            if os_system == "Linux":
                # Get the current user's UID and GID so 'root' doesn't own the mount
                uid = os.getuid()
                gid = os.getgid()
                
                subprocess.run(
                    [
                        "sudo", "mount", "-t", "tmpfs", 
                        f"-osize={size_mb}m,uid={uid},gid={gid}", 
                        "tmpfs", str(volatile_dir)
                    ],
                    check=True
                )
            elif os_system == "Darwin":
                sectors = size_mb * 2048
                ramdisk_dev = subprocess.check_output(
                    ["hdiutil", "attach", "-nomount", f"ram://{sectors}"]
                ).decode().strip()
                subprocess.run(["newfs_hfs", "-v", "McRAM", ramdisk_dev], check=True, capture_output=True)
                # macOS automatically maps ownership to the mounting user
                subprocess.run(["mount", "-t", "hfs", ramdisk_dev, str(volatile_dir)], check=True)
            else:
                print(f"[{self.world_name}] RAM disk not natively supported for {os_system}. Defaulting to standard disk I/O.")
                return 
                
            print(f"[{self.world_name}] RAM disk provisioned successfully at {size_mb}MB.")
            
            if any(persistent_dir.iterdir()):
                shutil.copytree(persistent_dir, volatile_dir, dirs_exist_ok=True)
                print(f"[{self.world_name}] Seeded RAM disk with persistent world data.")
                
        except subprocess.CalledProcessError as e:
            print(f"[{self.world_name}] Warning: Failed to provision RAM disk: {e}. Falling back to standard I/O.")
        except PermissionError as e:
            print(f"[{self.world_name}] Warning: Permission denied seeding RAM disk: {e}. Falling back to standard I/O.")


    def _destroy_ramdisk(self):
        """Unmounts and frees the cross-platform RAM disk safely."""
        import os
        
        volatile_dir = self.world_directory / "world"
        
        # Only attempt to unmount if the OS actually sees it as a mount point
        if not os.path.ismount(str(volatile_dir)):
            return

        os_system = platform.system()
        try:
            if os_system == "Linux":
                # Using 'umount -l' (lazy unmount) safely detaches it even if a stray process is reading a file
                subprocess.run(
                    ["sudo", "umount", "-l", str(volatile_dir)], 
                    check=True, 
                    capture_output=True
                )
                print(f"[{self.world_name}] RAM disk unmounted successfully.")
            elif os_system == "Darwin":
                subprocess.run(
                    ["hdiutil", "detach", str(volatile_dir), "-force"], 
                    check=True, 
                    capture_output=True
                )
                print(f"[{self.world_name}] RAM disk unmounted and destroyed successfully.")
        except subprocess.CalledProcessError as e:
            error_msg = e.stderr.decode().strip() if e.stderr else e.output.decode().strip()
            print(f"[{self.world_name}] Warning: Failed to cleanly destroy RAM disk: {error_msg}")

    def _get_dir_size_mb(self, path: Path) -> int:
        """Calculates the total size of a directory in Megabytes."""
        if not path.exists():
            return 0
        total_bytes = sum(f.stat().st_size for f in path.rglob('*') if f.is_file())
        return total_bytes // (1024 * 1024)


    def start(self,**kwargs):
        """
        Ensures the environment is ready and starts the server in a background thread.
        Handles JRE acquisition and first-time configuration automatically.
        """
        downloader = PaperDownloader(MC_WORLDS_BASE_DIR / 'server-jars')
        if not downloader.ensure_jre():
            print("Abort: Managed JRE 21 could not be initialized.")
            return

        if not (self.world_directory / "server.properties").exists():
            print("First-time setup: Initializing server to generate configuration files...")
            try:
                subprocess.run(
                    [str(MC_JRE_PATH), "-jar", str(self.jar_path), "--initSettings"],
                    cwd=self.world_directory,
                    check=True,
                    capture_output=True
                )
            except subprocess.CalledProcessError as e:
                # if this is a JRE version error, we just need to wipe it and force a reinstall/update
                print(f"Error during initialization: {e.stderr.decode()}")
                return

        self.apply_manifest_settings(**kwargs)
        
        # --- NEW: Provision the RAM disk and seed data before starting the server ---
        # Note: If the world folder hasn't been generated yet (first run), this will safely 
        # create the empty directories, mount the tmpfs, and let the server populate it.
        self._provision_ramdisk(buffer_mb=512)

        self.ready_event = threading.Event()

        self.thread = threading.Thread(target=self._execute_server, daemon=True)
        self.thread.start()

        print("Waiting for server to initialize...")
        
        started_successfully = self.ready_event.wait(timeout=90.0)

        if not started_successfully or not self.is_alive():
            print(f"Error: Server for '{self.world_name}' failed to start or timed out. Check logs.")
        else:
            print(f"Server for '{self.world_name}' is fully online and ready for prompts!")
            
            # --- Start the background sync worker once the server is fully ready ---
            self.sync_stop_event = threading.Event()
            self.sync_thread = threading.Thread(
                target=self._sync_worker, 
                args=(300,), 
                daemon=True
            )
            self.sync_thread.start()

    def stop(self):
        """Stops the running Paper server gracefully, syncs data, and destroys the RAM disk."""
        if not self.is_alive():
            print(f"Server for '{self.world_name}' is not running.")
            return

        print(f"Sending 'stop' command to Paper server for '{self.world_name}'...")
        
        # --- Signal the sync thread to break its loop ---
        if self.sync_stop_event:
            self.sync_stop_event.set()

        try:
            self.process.sendline('stop')
            self.thread.join(timeout=30)
        except Exception as e:
            print(f"Graceful shutdown failed: {e}. Forcing termination.")
            if self.process:
                self.process.terminate(force=True)
                
        # --- Perform one final, guaranteed sync before terminating ---
        if self.sync_thread and self.sync_thread.is_alive():
            print(f"[{self.world_name}] Performing final world data sync to persistent storage...")
            self._sync_world_data()
            self.sync_thread.join(timeout=10)

        # --- NEW: Destroy the RAM disk now that the sync is complete ---
        self._destroy_ramdisk()

    def is_alive(self) -> bool:
        """Checks if the server process is currently running."""
        return self.process is not None and self.process.isalive()

    