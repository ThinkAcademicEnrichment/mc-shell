from mcshell import MC_MATERIALS_PATH
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

# Try to import Playwright
try:
    from playwright.sync_api import sync_playwright
    PLAYWRIGHT_AVAILABLE = True
except ImportError:
    PLAYWRIGHT_AVAILABLE = False
    print("Warning: Playwright is not installed. Browser fetching will fail.")


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


def make_materials():
    """
    Scrapes the Spigot Material Javadocs and categorizes them into
    Blocks, Items, and Entities using semantic markers and method descriptions.
    """

    # if it exists, it was probably already classified
    if MC_MATERIALS_PATH.exists():
        print(f"loading exising classified materials from {MC_MATERIALS_PATH.name}")
        with MC_MATERIALS_PATH.open('rb') as f:
            return pickle.load(f)

    html_content = fetch_with_browser(MC_MATERIAL_URL)

    if not html_content:
        return {}

    soup = BeautifulSoup(html_content, 'html.parser')
    materials_data = {}

    # Find the summary table for enum constants
    summary_table = soup.find("section", {"class": "summary"})
    if summary_table:
        summary_table = summary_table.find("div", {"class": "summary-table"})

    if not summary_table:
        print("Could not find Material summary table.")
        return {}

    # The table structure in modern Javadocs often alternates between name (col-first)
    # and description (col-last)
    rows = summary_table.find_all("div", recursive=False)

    current_name = None
    for row in rows:
        classes = row.get("class", [])

        if "col-first" in classes:
            current_name = row.text.strip()
            if current_name.startswith("LEGACY_"):
                current_name = None
                continue

        elif "col-last" in classes and current_name:
            description = row.text.strip().lower()
            # Semantic Classification Logic
            is_block = False
            is_item = True  # Default to Item
            is_entity = False

            # 1. Block Detection
            # If the description refers to being a block or block data
            if "block" in description or "legacy" not in description:
                # Heuristic: if it's not explicitly flagged as legacy and doesn't
                # contain specific non-block keywords, we treat it as a Block.
                is_block = True

            # 2. Entity Detection (Boats, Minecarts, Armor Stands)
            # These are Items that place Entities
            if any(term in current_name.lower() for term in ["boat", "minecart", "armor_stand"]):
                is_block = False
                is_item = True
                is_entity = True

            # 3. Non-Placeable Item detection
            # Certain items are strictly items even if they sounds like blocks or have descriptions
            if any(term in description for term in ["edible", "tool", "weapon", "armor", "food"]):
                is_block = False

            materials_data[current_name] = {
                "is_block": is_block,
                "is_item": is_item,
                "is_entity": is_entity,
                "description": description
            }
            current_name = None

    # Save structured data
    with MC_MATERIALS_PATH.open('wb') as f:
        pickle.dump(materials_data, f)

    print(f"Scraped and categorized {len(materials_data)} materials.")
    return materials_data

def anaylze_materials():
    with MC_MATERIALS_PATH.open('rb') as f:
        materials_data = pickle.load(f)

    pure_items, pure_blocks, block_and_items, rem = [],[],[],[]

    for material_name,material_data in materials_data.items():
        if material_data["is_block"] and material_data["is_item"]:
            block_and_items.append(material_name) 
        elif not material_data["is_block"] and material_data["is_item"]:
            pure_items.append(material_name) 
        elif material_data["is_block"] and not material_data["is_item"]:
            pure_blocks.append(material_name) 
        else:
            rem.append(material_name) 

    return block_and_items,pure_items,pure_blocks,rem

def classify_materials_with_bukkit(mcplayer_name):
    ...
    try:
        from mcshell.mcplayer import MCPlayer
        mc_player = MCPlayer(mcplayer_name) 
    except:
        print("Could not join the default local server; material classification not possible")
        return

    with MC_MATERIALS_PATH.open('rb') as f:
        materials_data = pickle.load(f)

    from mcshell.generated_actions import AdminActions
    bukkit_actions = AdminActions(mc_player)

    new_materials_data = {}
    print(f"Classifying materials by querying the server...")
    def mkbool(x):
        if x == 'true':
            return True
        return False
    for material_name,material_data in materials_data.items():
        res = bukkit_actions.all_material_properties(material_name)
        if res != 'null':
            new_materials_data[material_name] = dict(zip(('is_item','is_block','is_edible','is_fuel'),list(map(mkbool,res.split(',')))))

    # Save structured data
    with MC_MATERIALS_PATH.open('wb') as f:
        pickle.dump(new_materials_data, f)

    print(f"Categorized {len(new_materials_data)} materials.")

    return new_materials_data
        







def make_entity_id_map():
    """
    Scrapes the non-documented Bukkit EntityType.java file to create a mapping
    from the Bukkit enum name string to its legacy numerical ID.
    """
    url = "https://raw.githubusercontent.com/Bukkit/Bukkit/master/src/main/java/org/bukkit/entity/EntityType.java"
    java_code_html = fetch_with_browser(url)

    if not java_code_html:
        return {}

    # Capture enum constant name and its ID via regex
    pattern = re.compile(r"^\s*([A-Z_]+)\(.*?, \s*(-?\d+).*?\),?$")

    entity_id_map = {}
    lines = java_code_html.splitlines()
    is_deprecated = False

    for line in lines:
        stripped_line = line.strip()

        # Check for @Deprecated annotation
        if stripped_line == "@Deprecated":
            is_deprecated = True
            continue

        match = pattern.match(stripped_line)

        if match and not is_deprecated:
            enum_name = match.group(1)
            entity_id = int(match.group(2))

            if enum_name != 'UNKNOWN' and entity_id != -1:
                entity_id_map[enum_name] = entity_id

        # Reset the deprecated flag if we hit a non-empty line that isn't a match
        if stripped_line and not match and stripped_line != "@Deprecated":
            is_deprecated = False

    with MC_ENTITY_ID_MAP_PATH.open('wb') as f:
        pickle.dump(entity_id_map, f)
    return entity_id_map

def make_item_id_map(force_refresh=False):
    """
    Creates and caches a mapping from Spigot Material enum constants to
    properly namespaced Minecraft item references.

    Example: IRON_SWORD -> minecraft:iron_sword

    Args:
        force_refresh (bool): If True, re-scrapes the data even if a cache exists.

    Returns:
        dict: The mapping of Spigot Name -> minecraft:namespaced_id
    """
    if not MC_ITEM_ID_MAP_PATH.parent.exists():
        MC_ITEM_ID_MAP_PATH.parent.mkdir(parents=True)

    if MC_ITEM_ID_MAP_PATH.exists() and not force_refresh:
        with open(MC_ITEM_ID_MAP_PATH, "rb") as f:
            return pickle.load(f)

    html_content = fetch_with_browser(MC_MATERIAL_URL)

    if not html_content:
        return {}

    soup = BeautifulSoup(html_content, 'html.parser')
    item_id_map = {}

    # Find all enum constants
    # The structure typically has the constant name in a <code> or <a> tag inside a <th> or <td>
    constants = soup.find_all(["th", "td"], {"class": ["col-first", "col-summary-item-name"]})

    if not constants:
        # Generic fallback for different Javadoc templates
        constants = soup.find_all("code")

    for entry in constants:
        name = entry.get_text().strip()

        # Validation:
        # 1. Must be uppercase (standard enum style)
        # 2. Must not be a legacy material
        # 3. Must not be "AIR" (usually handled specifically or skipped)
        if name and name.isupper() and not name.startswith("LEGACY_") and name != "AIR":
            # Generate the Minecraft namespaced ID
            # Standard conversion: lowercase and replace underscores with nothing?
            # No, Minecraft IDs use underscores, but Spigot enums are 1:1 with namespaced IDs
            # e.g. IRON_SWORD -> iron_sword
            namespaced_id = f"minecraft:{name.lower()}"
            item_id_map[name] = namespaced_id

    # Add AIR manually if needed as it's often special
    item_id_map["AIR"] = "minecraft:air"

    # Cache the result
    with open(MC_ITEM_ID_MAP_PATH, "wb") as f:
        pickle.dump(item_id_map, f)

    print(f"Created item mapping with {len(item_id_map)} entries at {MC_ITEM_ID_MAP_PATH}")
    return item_id_map