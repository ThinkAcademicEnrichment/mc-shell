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
    """
    Represents a player on the Minecraft server.
    Handles connection, state management, and direct interactions (events, positioning).
    """
    def __init__(self, name, host=MC_SERVER_HOST, port=MC_SERVER_PORT,rcon_port=MC_RCON_PORT, fj_port=FJ_PLUGIN_PORT, password=None,  cancel_event=None):
        super().__init__(host, port, rcon_port, fj_port,password)
        self.name = name
        self.state = {}
        # Threading event used to cancel long-running tasks (like waiting for a sword strike)
        self.cancel_event = cancel_event

    def get_data(self,data_path):
        """
        Retrieves NBT data for the player from the server.
        Args:
            data_path: The NBT path to query (e.g., 'Pos', 'Motion').
        """
        _args = ['get','entity',f'@p[name={self.name}]',data_path]
        return self.data(*_args)

    def build(self):
        """
        Synchronously builds the player's local state by fetching common NBT data.
        """
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
        """
        Asynchronously builds the player's local state.
        """
        asyncio.run(self.build_player_data_async())
        return self

    def set_direction(self,dir:Vec3):
        return self.pc.player.setDirection(*dir)

    @property
    def pc(self):
        """Returns the pyncraft Minecraft client instance for this player."""
        return self.py_client(self.name)

    @property
    def position(self):
        """Current player position as a Vec3."""
        return Vec3(*self.pc.player.getPos())

    @property
    def tile_position(self):
        """Current player block coordinates (integers) as a Vec3."""
        return Vec3(*self.pc.player.getTilePos())

    @property
    def direction(self):
        """Current player facing direction as a normalized Vec3."""
        # note the cast from pyncraft.vec3.Vec3 to mcshell.Vec3.Vec3
        return Vec3(*self.pc.player.getDirection())

    @property
    def here(self):
        """
        Blocks execution until the player strikes a block with a sword,
        then returns the coordinates of that block.
        """
        return Vec3(*self.get_sword_hit_position())

    @property
    def compass_direction(self):
        """Returns the cardinal direction (N, S, E, W, etc.) the player is facing."""
        return self._get_compass_direction(self.direction.to_tuple())

    def set_compass_direction(self,dir:str):
        """
        Sets the player's rotation to face a specific cardinal direction.
        Args:
            dir: String like 'N', 'NE', 'E', etc.
        """
        compass_vectors = {
            'N': np.array([0., 0., -1.]),
            'NE': np.array([0.7071, 0., -0.7071]),  # sqrt(2)/2
            'E': np.array([1., 0., 0.]),
            'SE': np.array([0.7071, 0., 0.7071]),
            'S': np.array([0., 0., 1.]),
            'SW': np.array([-0.7071, 0., 0.7071]),
            'W': np.array([-1., 0., 0.]),
            'NW': np.array([-0.7071, 0., -0.7071]),
        }
        _vec = compass_vectors.get(dir,[0., 0., -1])
        return self.pc.player.setDirection(*compass_vectors.get(dir,[0, 0, -1]))

    def set_position(self, pos:Vec3):
        return self.pc.player.setPos(*pos)

    # --- Event Polling Methods ---

    def clear_events(self):
        """
        Clears all queued events on the server for this client.
        Useful to call before starting a new 'Wait for...' block to avoid
        processing old clicks or chats.
        """
        self.pc.events.clearAll()

    def get_sword_hit_position(self):
        """
        Blocks until the player hits a block with a sword.
        Supported Swords: Diamond, Golden, Iron, Stone, Wooden.

        Returns:
            Vec3: The coordinates of the block that was hit.

        Raises:
            PowerCancelledException: If the script is stopped by the user.
        """
        print(f'Waiting for a sword strike from {self.name}...')
        while True:
            # check if the user has cancelled the script
            if self.cancel_event and self.cancel_event.isSet():
                raise PowerCancelledException

            # Poll for block hit events (Right click with sword)
            _hits = self.pc.events.pollBlockHits()
            if _hits:
                _hit = _hits[0]
                # We must check that our player (by ID) did the strike!
                # Note: self.pc.playerId is retrieved automatically by pyncraft
                if not _hit.entityId == self.pc.playerId:
                    continue

                # Clone the position to avoid reference issues
                return _hit.pos.clone()

            # Sleep briefly to avoid maxing out the CPU while waiting
            time.sleep(0.1)

    def wait_for_chat_post(self, entity_id=None):
        """
        Blocks until a chat message is received.

        Args:
            entity_id (int, optional): If provided, only returns messages from this entity ID.
                                       If None, returns the next message from anyone.

        Returns:
            str: The message content.
        """
        print(f'Waiting for chat post (Entity ID: {entity_id})...')
        while True:
            if self.cancel_event and self.cancel_event.isSet():
                raise PowerCancelledException

            # Poll for chat events
            posts = self.pc.events.pollChatPosts()
            if posts:
                for post in posts:
                    # If we care about WHO said it, check the ID.
                    if entity_id is None or post.entityId == entity_id:
                        return post.message

            time.sleep(0.1)

    def wait_for_projectile_hit(self):
        """
        Blocks until a projectile (like an arrow) hits something.

        Returns:
            Vec3: The position where the projectile landed.
        """
        print('Waiting for projectile hit...')
        while True:
            if self.cancel_event and self.cancel_event.isSet():
                raise PowerCancelledException

            # Poll for projectile events
            hits = self.pc.events.pollProjectileHits()
            if hits:
                # Return the position of the first hit detected
                return hits[0].pos

            time.sleep(0.1)

    def _get_compass_direction(self,direction_vector: tuple[float, float, float]) -> str:
        """
        Determines the closest 8-point compass direction from a 3D direction vector.

        This function ignores the Y (up/down) component and normalizes the X and Z
        components to find the closest cardinal or intercardinal direction.

        Args:
            direction_vector: A tuple, list, or Vec3-like object with x, y, and z components
                              representing the direction the player is facing.

        Returns:
            A string representing the compass direction (e.g., 'N', 'NE', 'E', etc.).
            Returns 'N' if the input vector is a zero vector in the XZ plane.
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

        # Find the compass direction with the highest dot product
        # The dot product of two unit vectors is the cosine of the angle between them.
        # The highest dot product (closest to 1.0) means the smallest angle.
        max_dot_product = -1
        closest_direction = 'N'

        for direction, compass_vec in compass_vectors.items():
            dot_product = np.dot(normalized_player_vector, compass_vec)
            if dot_product > max_dot_product:
                max_dot_product = dot_product
                closest_direction = direction

        return closest_direction