from mctools.errors import RCONError,RCONAuthenticationError 
from mcshell.constants import *
try:
    from mcshell.mcjuice import MCJuiceClient
except ImportError:
    # we need to bootstrap the build process
    class MCJuiceClient:
        def __init__(self):
            raise NotImplementedError

from functools import lru_cache

class RCONConnectionError(RCONError): 
    pass

class RCONDataError(RCONError): 
    pass

class _DEBUG:
    data = False

class MCClientException(Exception):
    pass

class MCClient:
    def __init__(self, host=MC_SERVER_HOST, port=MC_SERVER_PORT, rcon_port=MC_RCON_PORT, mj_port=MJ_PLUGIN_PORT, app_port=MC_APP_PORT, password='', **kwargs):

        self.host = host
        self.port = port
        self.rcon_port = rcon_port
        self.app_port = app_port # Fixed: was previously hardcoded to MC_APP_PORT
        self.password = password
        self.mj_port  = mj_port

    @lru_cache(maxsize=1)
    def mj_client(self,player_name=None):
        player_name = '' if player_name is None else player_name
        return MCJuiceClient.create(address=self.host,port=self.mj_port,playerName=player_name)

    @property
    def server_args(self):
        """For helping create fellow players on the same server"""
        return dict(zip(('host','port','rcon_port','mj_port','password'), (self.host, self.port, self.rcon_port, self.mj_port, self.password)))


    def run(self, *args):
        """Executes a command via RCON using mctools to handle fragmentation."""

        full_command = " ".join(str(a) for a in args)
        rcon = RCONClient(self.host, port=self.rcon_port)

        try:
            if not self.password or not rcon.login(self.password):
                # Raise immediately instead of returning a magic string
                raise RCONAuthenticationError("Authentication failed. The password is wrong.")
            response = rcon.command(full_command)
            return self._strip_ansi(response)
        except ConnectionRefusedError as e:
            raise RCONConnectionError(f"Connection refused: {e}")
        finally:
            rcon.stop()

    def help(self, *args):
        # run() automatically handles password checks and raises errors if auth fails.
        return self.run('minecraft:help', *args)

    def data(self, operation, *args):
        _response = self.run('data', operation, *args)
        try:
            _response = _response[_response.index(':') + 1:]
            return json.loads(self._fix_json(_response.strip()))
        except Exception as e:
            # Wrap the raw error and response in a dedicated exception
            raise RCONDataError(f"Failed to parse JSON data: {e}\nRaw Response: {_response}")

    async def data_async(self, varname, namespace, operation, *args):
        """
        Async implementation using mctools.AsyncRCONClient to handle
        fragmented responses without blocking the event loop.
        """
        if not self.password:
            print('An admin password is required! Use %mc_login.')
            return

        full_command = ' '.join(['data', operation, *args])

        # AsyncRCONClient handles fragmentation reassembly automatically
        async with AsyncRCONClient(self.host, self.rcon_port) as client:
            if await client.login(self.password):
                _response = await client.command(full_command)

                try:
                    # Strip the prefix and parse NBT-to-JSON
                    _response = _response[_response.index(':') + 1:]
                    parsed_data = json.loads(self._fix_json(_response.strip()))
                    namespace.update({varname: parsed_data})
                except Exception as e:
                    if _DEBUG.data:
                        print(e)
                        print(_response)
                    # Fallback to raw response if parsing fails
                    namespace.update({varname: _response})
            else:
                print("Async RCON Authentication failed.")

    def _fix_nbt_values(self, _text):
        """Removes NBT suffixes and converts to appropriate Python types."""
        _text = re.sub(r"(\d+)b", r"False", _text)  # Bytes to booleans
        _text = re.sub(r"(\d+)s", r"\1", _text)  # Shorts to ints
        _text = re.sub(r"(\d+)l", r"\1", _text)  # Longs to ints
        _text = re.sub(r"(\d+(?:\.\d+)?)f", r"\1", _text)  # Floats to floats
        _text = re.sub(r"(\d+(?:\.\d+)?)d", r"\1", _text)  # Doubles to floats

        # Fix NBT arrays (e.g., [I; 1, 2, 3] to [1, 2, 3])
        _text = re.sub(r"\[[BISL];\s*([^\]]+)\]", r"[\1]", _text)
        return _text

    def _fix_json(self,json_string):
        _pattern = r"(?<!\")\b(\w+):\s*"
        _fixed_string = re.sub(_pattern, r'"\1":', json_string)
        _fixed_string = self._fix_nbt_values(_fixed_string)
        _fixed_string = re.sub(rf"\s*:({RE_NON_JSON_VALUE})", r':"\1"',_fixed_string)
        _fixed_string = _fixed_string.replace('False','false').replace('True','true').replace("\'","")
        _fixed_string = _fixed_string.replace('-false','false').replace('-true','true').replace("\'","")
        return _fixed_string

    def _strip_ansi(self, text):
        """Removes all ANSI escape sequences to provide clean text output."""
        if not text:
            return ""
        # Matches ESC[ followed by formatting codes and ending with a letter
        ansi_regex = re.compile(r'\x1b\[[0-9;]*[a-zA-Z]')
        return ansi_regex.sub('', text).strip()