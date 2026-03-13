import sys
import pdb
import functools
import traceback
import pathlib
import unittest
import threading
import time
import shutil
import os
from unittest.mock import patch
import IPython.testing.globalipapp

from mcshell.constants import MC_WORLDS_BASE_DIR, MC_SERVER_HOST, MC_RCON_PORT, MJ_PLUGIN_PORT
from mcshell.mcplayer import MCPlayer
from mcshell.mcactions import MCActions

try:
    from icecream import ic
    ic.configureOutput(includeContext=False)
except ImportError:  # Graceful fallback if IceCream isn't installed.
    ic = lambda *a: None if not a else (a[0] if len(a) == 1 else a)  # noqa

TESTS_DIR = pathlib.Path(__file__).absolute().parent

TEST_PLAYER_NAME = 'g33zba'

def debug_on(*exceptions):
    if not exceptions:
        exceptions = (AssertionError, )
    def decorator(f):
        @functools.wraps(f)
        def wrapper(*args, **kwargs):
            try:
                return f(*args, **kwargs)
            except exceptions:
                info = sys.exc_info()
                traceback.print_exception(*info)
                pdb.post_mortem(info[2])
        return wrapper
    return decorator
