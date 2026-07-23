from mctools import RCONClient, AsyncRCONClient
from mctools.errors import RCONAuthenticationError

from pprint import pprint
from threading import Thread,Event
from typing import List,Optional,Dict,Any,Union

from pathlib import Path # this needs better consistency
import pathlib

import atexit
import socket
import time
import string
import random
import requests
import json
import uuid
import os
import shutil
import pickle
import shlex
import asyncio
import time
import re # Added for VPN IP Regex matching


import atexit
import stat
import tempfile
import getpass


import sys
import yaml
import re
import json
import os
import copy
import math
import time
import shlex
import random
import asyncio
import requests
import argparse
import shutil
import importlib
import subprocess
import yarl
import inspect
import zipfile
import io
import pickle
import time
import sys
import uuid
import threading
import random

from blockapily import BlocklyGenerator

import xml.etree.ElementTree as ET
import numpy as np

from ruamel.yaml import YAML 
from rich import print
from rich.pretty import pprint
from rich.prompt import Prompt

from mcshell.Matrix3 import Matrix3
from mcshell.Vec3 import Vec3


class PowerCancelledException(Exception):
    pass

try:
    from icecream import ic
    ic.configureOutput(includeContext=False)
except ImportError:  # Graceful fallback if IceCream isn't installed.
    ic = lambda *a: None if not a else (a[0] if len(a) == 1 else a)  # noqa

# helper function required by Blockly list getter
def lists_remove_random_item(l):
    random_item = random.choice(l)
    l.pop(l.index(random_item))
    return random_item

# the default version when using %pp_create_world
MC_VERSION = '26.1.2' 

# default server data; avoid common ports
MC_SERVER_HOST = 'localhost'
MC_RCON_PORT = 25576
MC_SERVER_PORT = 25566
MJ_PLUGIN_PORT = 4721
MC_APP_PORT = 5001

MC_SERVER_DATA = {
    'host':MC_SERVER_HOST,
    'port':MC_SERVER_PORT,
    'rcon_port':MC_RCON_PORT,
    'mj_port': MJ_PLUGIN_PORT,
    'app_port': MC_APP_PORT,
    'password': None,
    'mc_version': MC_VERSION,
    'rh_host': None,
}

MC_SHELL_DIR = pathlib.Path(__file__).parent

MC_DATA_DIR = pathlib.Path(__file__).parent.joinpath('data')
MC_PAPER_GLOBAL_TEMPLATE = MC_DATA_DIR / 'paper-global-template.yaml'

MC_WEBPAGE_CACHE = MC_DATA_DIR.joinpath('webpage-cache')
MC_DOC_URL = yarl.URL("https://minecraft.fandom.com/wiki/Commands")
MC_DOC_DIR = MC_DATA_DIR.joinpath('doc')
MC_DOC_PATH = MC_DOC_DIR.joinpath('command_docs.pkl')

MC_APP_DIR = MC_DATA_DIR.joinpath('app')
MC_APP_STATIC_DIR = MC_DATA_DIR.joinpath('static')
MC_APP_SRC_DIR = pathlib.Path(__file__).parent.parent.joinpath('mced/src')
MC_USER_DIR = pathlib.Path('~/.mc-shell').expanduser()
MC_POWER_LIBRARY_DIR = MC_USER_DIR.joinpath('powers')

MC_WORLDS_BASE_DIR = pathlib.Path('~').expanduser().joinpath('mc-worlds')
MC_CENTRAL_CONFIG_FILE = pathlib.Path("/etc/mc-shell/user_map.json")

MC_INTERNAL_DATAPACKS = MC_DATA_DIR / 'datapacks'
MC_DATAPACK_LIB_DIR = MC_WORLDS_BASE_DIR / 'datapacks-library'

MC_JUICE_SRC_DIR = pathlib.Path(__file__).parent.parent / 'mcjuice' / 'src'

MC_JRE_DIR = MC_WORLDS_BASE_DIR / 'jre'
# Determine the binary name based on the OS
JRE_BINARY = "java.exe" if os.name == "nt" else "bin/java"

MC_JRE_PATH = MC_JRE_DIR / JRE_BINARY

RE_NON_JSON_VALUE = r"(?<!\")\b(?:[0-9]+[a-zA-Z]+|[0-9]+(?:\.[0-9]+)?[a-zA-Z]+|true|false|null)\b(?!\")"
RE_NON_JSON_ARRAY = r"\[[BISL];\s*[^\]]+\]"

DATA_TYPES ={
    'SleepTimer': 's',
    'Base': 'd',
    'Invulnerable': 'b',
    'FallFlying': 'b',
    'AbsorptionAmount': 'f',
    'invulnerable': 'b',
    'mayfly': 'b',
    'instabuild': 'b',
    'walkSpeed': 'f',
    'mayBuild': 'b',
    'flying': 'b',
    'flySpeed': 'f',
    'FallDistance': 'f',
    'isBlastingFurnaceFilteringCraftable': 'b',
    'isSmokerGuiOpen': 'b',
    'isFilteringCraftable': 'b',
    'isFurnaceGuiOpen': 'b',
    'isGuiOpen': 'b',
    'isFurnaceFilteringCraftable': 'b',
    'isBlastingFurnaceGuiOpen': 'b',
    'isSmokerFilteringCraftable': 'b',
    'DeathTime': 's',
    'seenCredits': 'b',
    'Health': 'f',
    'foodSaturationLevel': 'f',
    'Air': 's',
    'OnGround': 'b',
    'XpP': 'f',
    'foodExhaustionLevel': 'f',
    'HurtTime': 's',
    'Slot': 'b',
    'Count': 'b',
    'Charged': 'b',
}

ARRAY_DATA_TYPES = {
    'UUID': 'I',
}

# use this to mask data paths
FORBIDDEN_DATA_PATHS = []

DATA_PATHS = [
    'Brain',
    'HurtByTimestamp',
    'SleepTimer',
    'Attributes',
    'Invulnerable',
    'FallFlying',
    'PortalCooldown',
    'AbsorptionAmount',
    'abilities',
    'FallDistance',
    'recipeBook',
    'DeathTime',
    'XpSeed',
    'XpTotal',
    'UUID',
    'playerGameType',
    'seenCredits',
    'Motion',
    'Health',
    'foodSaturationLevel',
    'Air',
    'OnGround',
    'Dimension',
    'Rotation',
    'XpLevel',
    'Score',
    'Pos',
    'previousPlayerGameType',
    'Fire',
    'XpP',
    'EnderItems',
    'DataVersion',
    'foodLevel',
    'foodExhaustionLevel',
    'HurtTime',
    'SelectedItemSlot',
    'Inventory',
    'foodTickTimer'
]

RECIPE_BOOK_DATA_PATHS = [
    'recipes',
    'toBeDisplayed',
    'isBlastingFurnaceFilteringCraftable',
    'isSmokerGuiOpen',
    'isFilteringCraftable',
    'isFurnaceGuiOpen',
    'isGuiOpen',
    'isFurnaceFilteringCraftable',
    'isBlastingFurnaceGuiOpen',
    'isSmokerFilteringCraftable'
]