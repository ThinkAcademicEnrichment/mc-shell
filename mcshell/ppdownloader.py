import requests
import os
import platform
import tarfile
import zipfile
import io
import shutil
from pathlib import Path
from typing import Optional

from mcshell.constants import *

class PaperDownloader:
    """Handles downloading Paper server JARs and the required JRE from official APIs."""
    # API v3 Change: The API domain is now fill.papermc.io and the path is upgraded to v3
    API_URL = "https://fill.papermc.io/v3/projects/paper"


    def __init__(self, download_dir: Path):
        self.download_dir = download_dir
        self.download_dir.mkdir(parents=True, exist_ok=True)

    def ensure_jre(self, version: str = "25") -> bool:
        """Ensures a local JRE is present in the specified jre directory."""
        if MC_JRE_PATH.exists():
            return True

        print(f"JRE not found at {MC_JRE_PATH}. Downloading JRE {version}...")

        url = self._get_jre_download_url(version)
        if not url:
            print(f"Error: Could not determine JRE URL for {platform.system()} {platform.machine()}.")
            return False

        try:
            temp_archive = self.download_dir / "jre_archive.tmp"
            with requests.get(url, stream=True, timeout=60) as r:
                r.raise_for_status()
                with open(temp_archive, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        f.write(chunk)

            MC_JRE_DIR.mkdir(parents=True, exist_ok=True)
            temp_extract_path = MC_JRE_DIR / "tmp_extraction"
            temp_extract_path.mkdir(exist_ok=True)

            if url.endswith('.zip') or platform.system().lower() == 'windows':
                with zipfile.ZipFile(temp_archive, 'r') as zip_ref:
                    zip_ref.extractall(temp_extract_path)
            else:
                with tarfile.open(temp_archive, 'r:gz') as tar_ref:
                    tar_ref.extractall(temp_extract_path)

            inner_dir = next(temp_extract_path.iterdir())
            for item in inner_dir.iterdir():
                dest = MC_JRE_DIR / item.name
                if dest.exists():
                    if dest.is_dir(): shutil.rmtree(dest)
                    else: dest.unlink()
                shutil.move(str(item), str(MC_JRE_DIR))

            shutil.rmtree(temp_extract_path)
            temp_archive.unlink()

            if os.name != 'nt' and MC_JRE_PATH.exists():
                MC_JRE_PATH.chmod(MC_JRE_PATH.stat().st_mode | 0o111)

            return True
        except Exception as e:
            print(f"Error: JRE install failed: {e}")
            if MC_JRE_DIR.exists(): shutil.rmtree(MC_JRE_DIR)
            return False

    def _get_jre_download_url(self, version: str) -> Optional[str]:
        """Maps system platform and architecture to an Adoptium API download URL."""
        sys_os = platform.system().lower()
        if sys_os == 'darwin': sys_os = 'mac'
        arch = platform.machine().lower()
        if arch in ('x86_64', 'amd64'): arch = 'x64'
        elif arch in ('arm64', 'aarch64'): arch = 'aarch64'
        return f"https://api.adoptium.net/v3/binary/latest/{version}/ga/{sys_os}/{arch}/jre/hotspot/normal/eclipse"

    def get_jar_path(self, mc_version: str) -> Optional[Path]:
        """Returns local path to Paper JAR, downloading if missing."""
        build_info = self._get_latest_build_for_version(mc_version)
        if not build_info:
            return None

        # API v3 Change: 'application' key is now 'server:default'
        download_info = build_info.get('downloads', {}).get('server:default', {})
        
        jar_name = download_info.get('name')
        # API v3 Change: Download URL is now provided directly in the response
        download_url = download_info.get('url')

        if not jar_name or not download_url:
            print("Error: JAR filename or embedded download URL not found in API response.")
            return None

        jar_path = self.download_dir / jar_name
        if jar_path.exists():
            return jar_path

        # No need to manually construct the URL string anymore
        return self._download_jar(download_url, jar_path)

    def _get_latest_build_for_version(self, mc_version: str) -> Optional[dict]:
        """Fetches the latest build metadata for a given Minecraft version."""
        builds_url = f"{self.API_URL}/versions/{mc_version}/builds"
        
        headers = {
            "User-Agent": "MyPaperDownloader/1.0 (jeff@thinkae.org)"
        }
        
        try:
            response = requests.get(builds_url, headers=headers)
            response.raise_for_status()
            
            # API v3 Change: The endpoint returns a JSON array directly,
            # so response.json() is a Python list, not a dict.
            builds = response.json()
            
            # Ensure it is a list and not empty before grabbing the first build
            if isinstance(builds, list) and builds:
                return builds[0]
            return None
            
        except Exception as e:
            print(f"Error: Could not fetch build info for version {mc_version}: {e}")
            return None

    def install_plugins(self, plugin_urls: list[str], world_plugins_dir: Path) -> list[str]:
        """Downloads and installs a list of plugins."""
        if not plugin_urls: return []
        world_plugins_dir.mkdir(exist_ok=True)
        successful_installs = []
        for url in plugin_urls:
            # Strip query parameters if any exist before grabbing the filename chunk
            clean_url = url.split('?')[0]
            filename = clean_url.split('/')[-1]

            # API endpoints (like Geyser's /spigot) often don't have .jar in the URL.
            # We need to assign a proper name and ensure it gets processed as a JAR.
            if not filename.endswith(".jar") and not filename.endswith(".zip"):
                if "floodgate" in url.lower():
                    filename = "Floodgate.jar"
                elif "geyser" in url.lower():
                    filename = "Geyser-Spigot.jar"
                else:
                    filename += ".jar"

            dest = world_plugins_dir / filename

            if filename.endswith(".jar") and self._download_file(url, dest):
                successful_installs.append(filename)
            elif filename.endswith(".zip"):
                jar = self._download_and_extract_zip(url, world_plugins_dir)
                if jar: successful_installs.append(jar)
        return successful_installs

    def _download_jar(self, download_url: str, jar_path: Path) -> Optional[Path]:
        """Downloads the specified JAR file."""
        print(f"Downloading Paper JAR from: {download_url}")
        
        # API v3 Requirement: A descriptive User-Agent is required to prevent 
        # being blocked or rate-limited by Paper's download servers.
        headers = {
            "User-Agent": "MyPaperDownloader/1.0 (jeff@thinkae.org)" 
        }

        try:
            with requests.get(download_url, headers=headers, stream=True) as r:
                r.raise_for_status()
                with open(jar_path, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=8192):
                        f.write(chunk)
            return jar_path
        except Exception as e:
            print(f"Error: Failed to download JAR file. {e}")
            if jar_path.exists(): 
                jar_path.unlink()
            return None

    def _download_file(self, url: str, destination: Path) -> bool:
        try:
            with requests.get(url, stream=True, timeout=30) as r:
                r.raise_for_status()
                with open(destination, 'wb') as f:
                    for chunk in r.iter_content(chunk_size=8192): f.write(chunk)
            return True
        except: return False

    def _download_and_extract_zip(self, url: str, destination_dir: Path) -> Optional[str]:
        try:
            response = requests.get(url, timeout=30)
            response.raise_for_status()
            with zipfile.ZipFile(io.BytesIO(response.content)) as thezip:
                for member in thezip.namelist():
                    if member.endswith('.jar') and ('paper' in member.lower() or 'bukkit' in member.lower()):
                        thezip.extract(member, path=destination_dir)
                        ext_path = destination_dir / member
                        final_path = destination_dir / Path(member).name
                        if ext_path != final_path: shutil.move(str(ext_path), str(final_path))
                        return final_path.name
            return None
        except: return None