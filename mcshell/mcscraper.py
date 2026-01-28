import urllib.request
from bs4 import BeautifulSoup

from mcshell.constants import *

import urllib.robotparser
import urllib.request
import pickle
import time
import yarl
from bs4 import BeautifulSoup
from pathlib import Path

# --- Configuration & Setup ---
# USER_AGENT = "MinecraftCommandDocBot/1.0"
USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
# Initialize robots.txt parser once
rp = urllib.robotparser.RobotFileParser()
rp.set_url("https://minecraft.fandom.com/robots.txt")
rp.read()

def fetch_html(url):
    """Fetches HTML with robots.txt compliance and local caching."""
    _pkl_path = MC_WEBPAGE_CACHE.joinpath(f"{url.name}.pkl")

    # 1. Local Cache Check (High Efficiency)
    if _pkl_path.exists():
        print(f'Loading from cache: {_pkl_path.name}')
        with _pkl_path.open('rb') as f:
            return pickle.load(f)

    # 2. Robots.txt Check
    url_str = str(url)
    if not rp.can_fetch(USER_AGENT, url_str):
        print(f'Skipping (Blocked by robots.txt): {url_str}')
        return None

    # 3. Etiquette: Crawl Delay
    # Use robots.txt value or default to 1 second
    delay = rp.crawl_delay(USER_AGENT) or 1
    time.sleep(delay)

    # 4. Retrieval with custom User-Agent
    print(f'Fetching: {url_str}')
    try:
        req = urllib.request.Request(url_str, headers={'User-Agent': USER_AGENT})
        with urllib.request.urlopen(req) as response:
            _data = response.read()

        with _pkl_path.open('wb') as f:
            pickle.dump(_data, f)
        return _data
    except Exception as e:
        print(f"Failed to fetch {url_str}: {e}")
        return None

def make_docs():
    # Fetch the main list page
    main_html = fetch_html(MC_DOC_URL)
    if not main_html:
        return {}

    _soup_data = BeautifulSoup(main_html, 'html.parser')
    _tables = _soup_data.find_all('table', attrs={'class': 'stikitable'})

    if not _tables:
        print("Could not find the commands table.")
        return {}

    _code_elements = _tables[0].select('code')
    _doc_dict = {}

    for _code_element in _code_elements:
        _cmd = _code_element.text.strip().lstrip('/') # Clean command name
        _parent = _code_element.find_parent()

        # Guard against index errors if the table structure shifts
        siblings = _parent.find_next_siblings()
        if not siblings: continue
        _doc_line = siblings[0].text.strip()

        try:
            anchor = _code_element.find_all('a')
            if not anchor: continue

            _doc_url_stub = yarl.URL(anchor[0].attrs['href'])
            # Ensure we are joining paths correctly with yarl
            _doc_url = MC_DOC_URL.joinpath(str(_doc_url_stub).lstrip('/'))
        except (IndexError, KeyError):
            continue

        # Recursive Fetch
        sub_html = fetch_html(_doc_url)
        if not sub_html:
            continue

        _doc_soup_data = BeautifulSoup(sub_html, 'html.parser')

        try:
            # More robust way to find the Syntax header
            _syntax_span = _doc_soup_data.find('span', id='Syntax') or \
                           _doc_soup_data.find('span', string='Syntax')

            if _syntax_span:
                _h2_parent = _syntax_span.find_parent('h2')
                _dl_block = _h2_parent.find_next_sibling('dl')
                _doc_code_elements = _dl_block.find_all('code')

                _doc_code_lines = [
                    code.text.strip() for code in _doc_code_elements
                    if code.text.strip().startswith(_cmd)
                ]
            else:
                _doc_code_lines = []
        except Exception:
            _doc_code_lines = []

        _doc_dict[_cmd] = (_doc_line, str(_doc_url), _doc_code_lines)

    # Save final results
    with MC_DOC_PATH.open('wb') as f:
        pickle.dump(_doc_dict, f)

    return _doc_dict

def make_materials():

    _soup_data = BeautifulSoup(fetch_html(MC_MATERIAL_URL), 'html.parser')

    material_names = []

    enum_summary_section = _soup_data.find('section', id='enum-constant-summary')
    if not enum_summary_section:
        print(f"Error: Could not find the section with id 'enum-constant-summary' on the page {MC_MATERIAL_URL}")
        return material_names

    code_tags_in_section = enum_summary_section.select('code')
    for code_tag in code_tags_in_section:
        link_tags_in_code = code_tag.find_all('a')
        for link_tag in link_tags_in_code:
            text = link_tag.string
            if text.upper() == text:
                if text.strip() not in material_names: # Avoid duplicates from broader search
                     material_names.append(text.strip())

    pickle.dump(material_names,MC_MATERIALS_PATH.open('wb'))

    return sorted(list(set(material_names))) # Return sorted unique names

def make_entity_id_map() -> Optional[dict[str, int]]:
    """
    Fetches and parses the implemented Bukkit EntityType.java file to create a mapping
    from the Bukkit enum name string to its legacy numerical ID.

    Args:
        url: The URL to the raw Java source file.

    Returns:
        A dictionary mapping entity names to IDs, or None on error.
    """

    java_code = fetch_html(MC_ENTITY_TYPE_URL)
    # This regex is designed to capture the enum constant name and its ID.
    # It looks for:
    # 1. ^\s*([A-Z_]+)      - Start of line, optional whitespace, then captures the uppercase enum NAME.
    # 2. \(.*?             - Matches the opening parenthesis and non-greedily everything after.
    # 3. ,\s*(-?\d+)\s* - Looks for a comma, whitespace, and then captures the integer ID.
    # 4. .*?\),?           - Matches the rest of the arguments until the closing parenthesis and optional comma.
    # This pattern is robust for constructor signatures like (name, class, id) and (name, class, id, bool).
    pattern = re.compile(r"^\s*([A-Z_]+)\(.*?,\s*(-?\d+).*?\),?$")

    entity_id_map = {}
    lines = java_code.splitlines()
    is_deprecated = False

    for line in lines:
        stripped_line = line.strip()

        # Check for @Deprecated annotation on the line preceding the enum constant
        if stripped_line == "@Deprecated":
            is_deprecated = True
            continue

        try:
            match = pattern.match(str(stripped_line,'utf-8'))
        except TypeError:
            match = pattern.match(str(stripped_line))

        if match and not is_deprecated:
            enum_name = match.group(1)
            entity_id = int(match.group(2))

            # The enum constant 'UNKNOWN' has ID -1 and is not a spawnable entity.
            if enum_name != 'UNKNOWN' and entity_id != -1:
                entity_id_map[enum_name] = entity_id
        else:
            pass
            # print(stripped_line)
        # Reset the deprecated flag after processing the line
        is_deprecated = False

    pickle.dump(entity_id_map, MC_ENTITY_ID_MAP_PATH.open('wb'))
    return entity_id_map
