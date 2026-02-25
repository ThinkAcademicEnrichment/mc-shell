from mcshell.mcclient import MCClient
from mcshell.constants import *
import time
import numpy as np
import re
import json
import asyncio

# Define a tolerance for floating-point comparisons near zero
DEFAULT_TOLERANCE = 1e-9

class MCPlayer(MCClient):
    def __init__(self, name, host=MC_SERVER_HOST, port=MC_SERVER_PORT,rcon_port=MC_RCON_PORT, fj_port=FJ_PLUGIN_PORT, app_port=MC_APP_PORT, password=None,  cancel_event=None):
        super().__init__(host, port, rcon_port, fj_port,app_port,password)
        self.name = name
        self.cancel_event = cancel_event

        self.state = {}

    def get_data(self,data_path):
        _args = ['get','entity',f'@p[name={self.name}]',data_path]
        return self.data(*_args)

    def build(self):
        for _data_path in DATA_PATHS:
            if _data_path in FORBIDDEN_DATA_PATHS:
                continue
            _data = self.get_data(_data_path)
            self.state[_data_path] = _data
        _recipe_book_data = {}
        for _data_path in RECIPE_BOOK_DATA_PATHS:
            if _data_path in FORBIDDEN_DATA_PATHS:
                continue
            _data = self.get_data(f"recipeBook.{_data_path}")
            _recipe_book_data[_data_path] = _data
        self.state['recipeBook'] = _recipe_book_data
        return self

    # broken due to truncated server responses
    async def get_data_async(self,data_path):
        _args = f"entity @p[name={self.name}] {data_path}".split()
        await self.data_async(data_path,self.state,'get',*_args)

    async def build_player_data_async(self):
        for _data_path in DATA_PATHS:
            if _data_path in FORBIDDEN_DATA_PATHS:
                continue
            await self.get_data_async(_data_path)
        for _data_path in RECIPE_BOOK_DATA_PATHS:
            if _data_path in FORBIDDEN_DATA_PATHS:
                continue
            _data = await self.get_data_async(f"recipeBook.{_data_path}")

    def build_async(self):
        asyncio.run(self.build_player_data_async())
        return self


    @property
    def pc(self):
        return self.py_client(self.name)

    @property
    def position(self):
        return Vec3(*self.pc.player.getPos())

    def set_position(self, pos:Vec3):
        return self.pc.player.setPos(*pos)

    @property
    def tile_position(self):
        return Vec3(*self.pc.player.getTilePos())

    def set_tile_position(self,pos:Vec3):
        self.pc.cmdplayer.setTilePos(*tuple(map(int,pos.to_tuple())))

    @property
    def direction(self):
        # note the cast from pyncraft.vec3.Vec3 to mcshell.Vec3.Vec3
        # this is an arbitrary direction vector
        return Vec3(*self.pc.player.getDirection())

    def set_direction(self,direction:Vec3):
        self.pc.player.setDirection(*direction)

    @property
    def q_direction(self):
        # this is a quantized direction vector
        return self._get_q_direction_vector(self.q_compass_direction)

    @property
    def set_q_direction(self,direction:Vec3):
        # this is a quantized direction vector
        self.pc.player.setDirection(*direction)

    @property
    def q_compass_direction(self):
        return self._get_q_compass_direction(self.direction.to_tuple())

    def set_q_compass_direction(self, dir: str):
        return self.pc.player.setDirection(*self._get_q_direction_vector(dir).to_tuple())

    # moved to eventactions.py
    # @property
    # def here(self):
    #     return Vec3(*self.get_sword_hit_position())

    # @property
    # def compass_direction(self):
    #     return self._get_compass_direction(self.direction.to_tuple())
    # def set_compass_direction(self,dir:str):
    #     return self.pc.player.setDirection(*self._get_direction_vector(dir).to_tuple())


    # --- New Methods for Event Actions ---

    def clear_events(self):
        """Clears all queued events on the server for this client."""
        self.pc.events.clearAll()

    def get_sword_hit_position(self):
        '''
            The following sword hits will all be detected:
            DIAMOND_SWORD,
            GOLDEN_SWORD,
            IRON_SWORD,
            STONE_SWORD,
            WOODEN_SWORD
        '''
        print('Waiting for a sword strike...')
        while True:

            if self.cancel_event and self.cancel_event.isSet():
                raise PowerCancelledException

            _hits = self.pc.events.pollBlockHits()
            if _hits:
                _hit = _hits[0]
                # We must check that our player did the strike!
                if not _hit.entityId == self.pc.playerId:
                    continue
                _v0 = _hit.pos.clone()

                return _hit.pos.clone()

            time.sleep(0.1)

    def wait_for_chat_post(self, entity_id=None):
        """
        Polls for chat posts. If entity_id is provided, filters for that player.
        Returns the message string.
        """
        print('Waiting for chat post...')
        while True:
            if self.cancel_event and self.cancel_event.isSet():
                raise PowerCancelledException

            posts = self.pc.events.pollChatPosts()
            if posts:
                for post in posts:
                    if entity_id is None or post.entityId == entity_id:
                        return post.message

            time.sleep(0.1)

    def wait_for_projectile_hit(self):
        """
        Polls for projectile hits.
        Returns the Vec3 position of the hit.
        """
        print('Waiting for projectile hit...')
        while True:
            if self.cancel_event and self.cancel_event.isSet():
                raise PowerCancelledException

            hits = self.pc.events.pollArrowHits()
            if hits:
                # Return the position of the first hit detected
                return hits[0].pos

            time.sleep(0.1)

    def _get_compass_direction(self,direction_vector: tuple[float, float, float]) -> str:
        """
        Determines the closest 8-point compass direction from a 3D direction vector.
        """
        # Define the 8 compass directions as normalized 2D vectors (x, z)
        # Note: In Minecraft, negative Z is North and positive X is East.
        compass_vectors = {
            'N':  np.array([0, -1]),
            'NE': np.array([0.7071, -0.7071]), # sqrt(2)/2
            'E':  np.array([1, 0]),
            'SE': np.array([0.7071, 0.7071]),
            'S':  np.array([0, 1]),
            'SW': np.array([-0.7071, 0.7071]),
            'W':  np.array([-1, 0]),
            'NW': np.array([-0.7071, -0.7071]),
        }

        # Extract x and z from the input vector
        try:
            x, _, z = direction_vector
        except (ValueError, TypeError):
            # Handle Vec3-like objects
            if hasattr(direction_vector, 'x') and hasattr(direction_vector, 'z'):
                x, z = direction_vector.x, direction_vector.z
            else:
                raise TypeError("Input must be a 3-component vector or have .x and .z attributes.")

        # Create a 2D vector for the horizontal direction
        player_xz_vector = np.array([x, z])

        # Normalize the player's direction vector to make it a unit vector
        norm = np.linalg.norm(player_xz_vector)
        if norm < 1e-9: # Handle case where player is looking straight up or down
            return 'N'  # Default to North if there's no horizontal component

        normalized_player_vector = player_xz_vector / norm

        max_dot_product = -1
        closest_direction = 'N'

        for direction, compass_vec in compass_vectors.items():
            dot_product = np.dot(normalized_player_vector, compass_vec)
            if dot_product > max_dot_product:
                max_dot_product = dot_product
                closest_direction = direction

        return closest_direction


    def _get_direction_vector(self, compass_direction: str) -> Vec3:
        """
        Maps a cardinal direction string to a 3D unit vector in the horizontal plane.

        This is the inverse operation of _get_compass_direction. It assumes the
        Minecraft coordinate system where North is (0, 0, -1) and East is (1, 0, 0).

        Args:
            compass_direction (str): One of 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'.

        Returns:
            Vec3: A unit vector representing the horizontal direction. Defaults to
                  North (0, 0, -1) if the input is not recognized.
        """
        # Define mapping of 8-point compass directions to (x, y, z)
        # Using the same constants and coordinate logic as _get_compass_direction
        # and set_compass_direction methods.
        sqrt2_2 = 0.7071

        direction_map = {
            'N':  Vec3(0.0, 0.0, -1.0),
            'NE': Vec3(sqrt2_2, 0.0, -sqrt2_2),
            'E':  Vec3(1.0, 0.0, 0.0),
            'SE': Vec3(sqrt2_2, 0.0, sqrt2_2),
            'S':  Vec3(0.0, 0.0, 1.0),
            'SW': Vec3(-sqrt2_2, 0.0, sqrt2_2),
            'W':  Vec3(-1.0, 0.0, 0.0),
            'NW': Vec3(-sqrt2_2, 0.0, -sqrt2_2),
        }

        # Normalize input to uppercase to handle 'ne' or 'N'
        key = compass_direction.upper() if isinstance(compass_direction, str) else 'N'

        # Return the mapped Vec3, defaulting to North if key is invalid
        return direction_map.get(key, Vec3(0.0, 0.0, -1.0))

    def _get_q_compass_direction(self, direction_vector) -> str:
        """
        Determines the closest 'q-direction' (26-point 3D direction) from a 3D vector.

        Args:
            direction_vector: A Vec3 or tuple (x, y, z) representing the 3D direction.

        Returns:
            str: A string representing the 3D direction (e.g., 'NEU', 'SW', 'D', 'S').
        """
        try:
            x, y, z = direction_vector
        except (ValueError, TypeError):
            x, y, z = direction_vector.x, direction_vector.y, direction_vector.z

        # Component naming maps
        # Note: Negative Z is North, Positive Z is South in MCPlayer context
        x_names = {1: 'E', -1: 'W', 0: ''}
        y_names = {1: 'U', -1: 'D', 0: ''}
        z_names = {1: 'S', -1: 'N', 0: ''}

        # Quantize components using a threshold (roughly sin(22.5 deg) or 0.5)
        # This determines if the component is significant enough to be part of the name
        def quantize(val):
            if val > 0.38: return 1
            if val < -0.38: return -1
            return 0

        qx, qy, qz = quantize(x), quantize(y), quantize(z)

        # Handle the center case (0,0,0) - default to North
        if qx == 0 and qy == 0 and qz == 0:
            return 'N'

        # Construct the string in a standard order: Horizontal(N/S then E/W) then Vertical
        # E.g., North + East + Up -> 'NEU'
        q_str = z_names[qz] + x_names[qx] + y_names[qy]

        return q_str

    def _get_q_direction_vector(self, q_compass_direction: str) -> Vec3:
        """
        Maps a 3D q-direction string to a normalized 3D unit vector.

        Args:
            q_compass_direction (str): A string like 'NEU', 'S', 'D', 'SED', etc.

        Returns:
            Vec3: A normalized unit vector representing that direction.
        """
        q_compass_direction = q_compass_direction.upper()
        x, y, z = 0.0, 0.0, 0.0

        # Mapping tokens to axes
        if 'E' in q_compass_direction: x += 1.0
        if 'W' in q_compass_direction: x -= 1.0
        if 'U' in q_compass_direction: y += 1.0
        if 'D' in q_compass_direction: y -= 1.0
        if 'S' in q_compass_direction: z += 1.0
        if 'N' in q_compass_direction: z -= 1.0

        # Calculate magnitude for normalization
        mag = (x**2 + y**2 + z**2)**0.5

        if mag == 0:
            return Vec3(0, 0, -1) # Default to North

        return Vec3(x/mag, y/mag, z/mag)