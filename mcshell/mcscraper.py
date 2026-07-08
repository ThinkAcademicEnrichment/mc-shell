import urllib.request
import urllib.robotparser
import pickle
import time
import re
import yarl
from bs4 import BeautifulSoup
from pathlib import Path
from typing import Optional

from mcshell.constants import *

# --- Configuration & Setup ---
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Initialize robots.txt parser once
rp = urllib.robotparser.RobotFileParser()
rp.set_url("https://minecraft.fandom.com/robots.txt")
rp.read()

# Try to import Playwright to scrape Minecraft Wiki if required
try:
    from playwright.sync_api import sync_playwright
    PLAYWRIGHT_AVAILABLE = True
except ImportError:
    PLAYWRIGHT_AVAILABLE = False
    print("Warning: Playwright is not installed. Browser fetching will fail.")

def fetch_minecraft_data(version: str, file_type: str = "blocks"):
    """
    Fetches version-specific JSON from the PrismarineJS minecraft-data repo.
    file_type options: 'blocks', 'items', 'entities'
    """

    import json
    # # 1. Load the raw JSON files downloaded from PrismarineJS (minecraft-data)
    mc_data_path = MC_DATA_DIR / 'materials' / version / f'{file_type}.json'
    if mc_data_path.exists():
        with mc_data_path.open('r') as f:
            return json.load(f)

    url = f"https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc/{version}/{file_type}.json"
    
    response = requests.get(url)

    if response.status_code == 200:
        mc_data_path.parent.mkdir(exist_ok=True)
        mc_data_path.touch()
        with mc_data_path.open('w') as f:
            json.dump(response.json(),f)
        return response.json()
    elif response.status_code == 404:
        mc_data_path = MC_DATA_DIR / 'materials' / 'default' / f'{file_type}.json'
        with mc_data_path.open('r') as f:
            return json.load(f)
    else:
        raise Exception(f"Failed to fetch data: HTTP status {response.status_code}")


def test_fetch_mcdata():
    # --- Quick Test ---
    try:
        target_version = "1.21.1"

        # lists of dicts 
        blocks_data = fetch_minecraft_data(target_version, "blocks")
        items_data = fetch_minecraft_data(target_version, "items")
        
        print(f"Successfully fetched {len(blocks_data)} blocks and {len(items_data)} items for Minecraft {target_version}!")
        return blocks_data,items_data 
    except Exception as e:
        print(f"Error: {e}")

def fetch_with_browser(url, robots_txt_check=False):
    """
    Fetches HTML using Playwright (headless browser) with robots.txt compliance
    and local caching.
    """
    # Ensure url is a yarl.URL object for consistent handling
    if not isinstance(url, (yarl.URL, Path)):
        url_obj = yarl.URL(str(url))
    else:
        url_obj = url

    _pkl_path = MC_WEBPAGE_CACHE.joinpath(f"{url_obj.name}.pkl")

    # 1. Local Cache Check
    if _pkl_path.exists():
        return pickle.load(_pkl_path.open('rb'))

    # 2. Robots.txt check
    if robots_txt_check and not rp.can_fetch(USER_AGENT, str(url)):
        print(f"Access denied by robots.txt: {url}")
        return None

    # 3. Fetch with Playwright
    if not PLAYWRIGHT_AVAILABLE:
        print("Playwright not available. Cannot fetch new content.")
        return None

    print(f"Fetching from web: {url}...")
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page(user_agent=USER_AGENT)
            page.goto(str(url), wait_until="networkidle")
            content = page.content()
            browser.close()

            # Save to cache
            _pkl_path.parent.mkdir(parents=True, exist_ok=True)
            with _pkl_path.open('wb') as f:
                pickle.dump(content, f)

            return content
    except Exception as e:
        print(f"Error during browser fetch: {e}")
        return None


def make_docs():
    """Scrapes Minecraft command documentation from the wiki."""
    url = "https://minecraft.fandom.com/wiki/Commands"
    html_content = fetch_with_browser(url, robots_txt_check=True)

    if not html_content:
        return {}

    soup = BeautifulSoup(html_content, 'html.parser')
    commands = {}

    # Logic to find the command summary table
    command_table = soup.find('table', {'class': 'wikitable'})
    if not command_table:
        return {}

    for row in command_table.find_all('tr')[1:]:  # Skip header
        cols = row.find_all('td')
        if len(cols) >= 2:
            cmd_link = cols[0].find('a')
            if cmd_link:
                cmd_name = cmd_link.text.strip()
                cmd_url = f"https://minecraft.fandom.com{cmd_link['href']}"
                description = cols[1].text.strip()

                # Try to fetch syntax from individual command page
                syntax_list = []
                cmd_html = fetch_with_browser(cmd_url)
                if cmd_html:
                    cmd_soup = BeautifulSoup(cmd_html, 'html.parser')
                    syntax_elements = cmd_soup.find_all('code')
                    for se in syntax_elements:
                        if '/' in se.text and cmd_name in se.text:
                            syntax_list.append(se.text.strip())

                commands[cmd_name] = (description, cmd_url, syntax_list)

    with MC_DOC_PATH.open('wb') as f:
        pickle.dump(commands, f)
    return commands


