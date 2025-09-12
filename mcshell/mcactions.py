import ast
from mcshell.mcplayer import MCPlayer
from mcshell.constants import *

from mcshell.mcvoxel import (
    generate_digital_tetrahedron_coordinates,
    generate_digital_tube_coordinates,
    generate_digital_plane_coordinates,
    generate_digital_ball_coordinates,
    generate_digital_cube_coordinates,
    generate_digital_disc_coordinates,
    generate_digital_line_coordinates,
    generate_digital_sphere_coordinates)

def mced_block(label, **kwargs):
    """
    A decorator to mark a method for Blockly block generation and attach metadata.
    """
    def decorator(func):
        # Attach the metadata to a custom attribute on the function object itself.
        # Note: The attribute is named _mced_block_meta, not _data.
        func._mced_block_meta = {'label': label, 'params': kwargs}
        return func
    return decorator

class MCActionBase:
    def __init__(self, mc_player_instance:MCPlayer,delay_between_blocks:float): # Added mc_version parameter
        """
        Initializes the action base.

        Args:
            mc_player_instance: An instance of a player connection class (e.g., MCPlayer).
            mc_version (str): The Minecraft version to load data for. This should match
                              the version of the server you are connecting to.
        """
        self.mcplayer = mc_player_instance

        # Initialize mapping dictionaries
        self.bukkit_to_entity_id_map = {}
        self._initialize_entity_id_map()

        # allow a delay for between visuals
        self.delay_between_blocks = delay_between_blocks

    def _place_blocks_from_coords(self, coords_list, block_type_from_blockly,
                                  placement_offset_vec3=None):
        """
        Helper method to take a list of coordinates and a Blockly block type,
        parse the block type, and set the blocks.
        """
        if not coords_list:
            print("No coordinates generated, nothing to place.")
            return

        # we use Bukkit IDs which are output in mc-ed
        minecraft_block_id = block_type_from_blockly

        # print(f"Attempting to place {len(coords_list)} blocks of type '{minecraft_block_id}'")

        offset_x, offset_y, offset_z = (0,0,0)
        if placement_offset_vec3: # If a Vec3 object is given for overall placement
            offset_x, offset_y, offset_z = int(placement_offset_vec3.x), int(placement_offset_vec3.y), int(placement_offset_vec3.z)

        for x, y, z in coords_list:

            final_x = x + offset_x
            final_y = y + offset_y
            final_z = z + offset_z
            self.mcplayer.pc.setBlock(int(final_x), int(final_y), int(final_z), minecraft_block_id)

            # Pause execution for a fraction of a second
            if self.delay_between_blocks > 0:
                time.sleep(self.delay_between_blocks)

        # print(f"Placed {len(coords_list)} blocks.")


    def _initialize_entity_id_map(self):
        with MC_ENTITY_ID_MAP_PATH.open('rb') as f:
            self.bukkit_to_entity_id_map = pickle.load(f)

    def _get_entity_id_from_bukkit_name(self, bukkit_enum_string: str) -> Optional[int]:
        """
        Converts a Bukkit enum string (e.g., 'WITHER_SKELETON') to its Minecraft numeric ID.

        Args:
            bukkit_enum_string: The uppercase, underscore-separated entity name.

        Returns:
            The integer ID of the entity, or None if not found.
        """
        # Use .get() for a safe lookup that returns None if the key doesn't exist
        return self.bukkit_to_entity_id_map.get(bukkit_enum_string)

class DigitalGeometry(MCActionBase):
    """
    Actions that involve creating geometric shapes.
    """
    def __init__(self, mc_player_instance,delay_between_blocks=0.01):
        super().__init__(mc_player_instance,delay_between_blocks) # Call parent constructor
        self.default_material_id = 1 # Example: material ID for stone in voxelmap
                                 # Or map block_type to material_id

    @mced_block(
        label="Create Digital Cube",
        center={'label': 'Center', 'shadow': 'VECTOR_3D_SHADOW'},
        side_length={'label': 'Side Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        rotation_matrix={'label': 'Rotation Matrix', 'shadow': '<shadow type="minecraft_matrix_3d_euler"></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'},
        wall_thickness={'label': 'Wall Thickness (0=solid)', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'}
    )
    def create_digital_cube(self,
                          center: 'Vec3',
                          side_length: float,
                          rotation_matrix: 'Matrix3',
                          block_type: 'Block',
                          wall_thickness: float = 0.0):
        """
        Blockly action to create a digital cube.
        """
        coords = generate_digital_cube_coordinates(
            center=center.to_tuple(),
            side_length=float(side_length),
            rotation_matrix=rotation_matrix.to_numpy(),
            wall_thickness=float(wall_thickness)
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Line",
        point1={'label': 'Start Point', 'shadow': 'VECTOR_3D_SHADOW'},
        point2={'label': 'End Point', 'shadow': 'VECTOR_3D_SHADOW'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'}
    )
    def create_digital_line(self, point1: 'Vec3', point2: 'Vec3', block_type: 'Block'):
        coords = generate_digital_line_coordinates(
            p1=point1.to_tuple(),
            p2=point2.to_tuple()
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Plane",
        center={'label': 'Center', 'shadow': 'VECTOR_3D_SHADOW'},
        normal={'label': 'Normal', 'shadow': 'VECTOR_3D_SHADOW_Y_UP'},
        side_length={'label': 'Side Length', 'shadow': '<shadow type="math_number"><field name="NUM">10</field></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'}
    )
    def create_digital_plane(self, center: 'Vec3', normal: 'Vec3', side_length: float, block_type: 'Block'):
        coords = generate_digital_plane_coordinates(
            point_on_plane=center.to_tuple(),
            normal=normal.to_tuple(),
            outer_rect_dims=(side_length,side_length)
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Disc",
        center={'label': 'Center', 'shadow': 'VECTOR_3D_SHADOW'},
        normal={'label': 'Normal', 'shadow': 'VECTOR_3D_SHADOW_Y_UP'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'}
    )
    def create_digital_disc(self, center: 'Vec3', normal: 'Vec3', radius: float, block_type: 'Block'):
        coords = generate_digital_disc_coordinates(
            center_point=center.to_tuple(),
            normal=normal.to_tuple(),
            outer_radius=radius
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Sphere",
        center={'label': 'Center', 'shadow': 'VECTOR_3D_SHADOW'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'},
        is_hollow={'label': 'Hollow', 'shadow': '<shadow type="logic_boolean"><field name="BOOL">FALSE</field></shadow>'}
    )
    def create_digital_sphere(self, center: 'Vec3', radius: int, block_type: 'Block', is_hollow: bool):
        coords = generate_digital_sphere_coordinates(
            center=center.to_tuple(),
            radius=int(radius),
            is_solid=not is_hollow
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Ball",
        center={'label': 'Center', 'shadow': 'VECTOR_3D_SHADOW'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'}
    )
    def create_digital_ball(self, center: 'Vec3', radius: int, block_type: 'Block'):
        coords = generate_digital_ball_coordinates(
            center=center.to_tuple(),
            radius=int(radius)
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Tube",
        start={'label': 'Start', 'shadow': 'VECTOR_3D_SHADOW'},
        end={'label': 'End', 'shadow': 'VECTOR_3D_SHADOW'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">3</field></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'},
        is_hollow={'label': 'Hollow', 'shadow': '<shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow>'}
    )
    def create_digital_tube(self, start: 'Vec3', end: 'Vec3', radius: float, block_type: 'Block', is_hollow: bool):
        if is_hollow:
            inner_thickness = 1.0
        else:
            inner_thickness = 0.0

        coords = generate_digital_tube_coordinates(
            p1=start.to_tuple(),
            p2=end.to_tuple(),
            outer_thickness=radius,
            inner_thickness=inner_thickness,
        )
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Tetrahedron",
        p1={'label': 'Point 1', 'shadow': 'VECTOR_3D_SHADOW'},
        p2={'label': 'Point 2', 'shadow': 'VECTOR_3D_SHADOW'},
        p3={'label': 'Point 3', 'shadow': 'VECTOR_3D_SHADOW'},
        p4={'label': 'Point 4', 'shadow': 'VECTOR_3D_SHADOW'},
        inner_offset_factor={'label': 'Inner Offset Factor','shadow':'<shadow type="math_number"><field name="NUM">3</field></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'}
    )
    def create_digital_tetrahedron(self, p1:'Vec3',p2:'Vec3',p3:'Vec3',p4:'Vec3',inner_offset_factor:float,block_type: 'Block'):
        coords = generate_digital_tetrahedron_coordinates(
            vertices=[p1.to_tuple(),p2.to_tuple(),p3.to_tuple(),p4.to_tuple()],
            inner_offset_factor=inner_offset_factor,
        )
        self._place_blocks_from_coords(coords, block_type)

class WorldActions(MCActionBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)
        self.default_material_id = 1

    @mced_block(
        label="Spawn Entity",
        entity={'label': 'Entity Type', 'shadow': 'ENTITY_TYPE_SHADOW'},
        position={'label': 'At Position', 'shadow': 'VECTOR_3D_SHADOW'}
    )
    def spawn_entity(self, position: 'Vec3', entity: 'Entity'):
        """
        Blockly action to spawn a Minecraft entity.
        """
        entity_id_int = self._get_entity_id_from_bukkit_name(entity)
        if entity_id_int is None:
            print(f"Warning: Could not find a numerical ID for entity type '{entity}'. Cannot spawn.")
            return
        self.mcplayer.pc.spawnEntity(position.x, position.y + 1, position.z, entity_id_int)

    @mced_block(
        label="Set Block",
        position={'label': 'At Position', 'shadow': 'VECTOR_3D_SHADOW'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'}
    )
    def set_block(self, position: 'Vec3', block_type: 'Block'):
        """
        Blockly action to set a single block in the Minecraft world.
        """
        x, y, z = (int(position.x), int(position.y), int(position.z))
        self.mcplayer.pc.setBlock(x, y, z, block_type)

    @mced_block(
        label="Get Block",
        position={'label': 'At Position', 'shadow': 'VECTOR_3D_SHADOW'}
    )
    def get_block(self, position: 'Vec3') -> 'Block':
        """
        Gets the block type at a specific location.
        """
        x, y, z = (int(position.x), int(position.y), int(position.z))
        block_type = self.mcplayer.pc.getBlock(x, y, z)
        return block_type if block_type else 'AIR'

    @mced_block(
        label="Get Height",
        position={'label': 'At Position (X,Z)', 'shadow': 'VECTOR_3D_SHADOW'}
    )
    def get_height(self, position: 'Vec3') -> int:
        """
        Gets the Y coordinate of the highest block at the X,Z of the given position.
        """
        x, z = (int(position.x), int(position.z))
        height = self.mcplayer.pc.getHeight(x, z)
        return height

    @mced_block(
        label="Post to Chat",
        message={'label': 'Message', 'shadow': '<shadow type="text"><field name="TEXT">Hello, World!</field></shadow>'}
    )
    def post_to_chat(self, message: str):
        """
        Posts a message to the in-game chat.
        """
        self.mcplayer.pc.postToChat(str(message))

    @mced_block(
        label="Create Explosion",
        position={'label': 'At Position', 'shadow': 'VECTOR_3D_SHADOW'},
        power={'label': 'Power', 'shadow': '<shadow type="math_number"><field name="NUM">4</field></shadow>'}
    )
    def create_explosion(self, position: 'Vec3', power: float):
        """
        Creates an explosion at a specific location.
        """
        x, y, z = (float(position.x), float(position.y), float(position.z))
        self.mcplayer.pc.createExplosion(x, y, z, float(power))

class WorldActionsOld(MCActionBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)  # Call parent constructor
        self.default_material_id = 1  # Example: material ID for stone in voxelmap

    def spawn_entity(self, position_vec3, entity_type):
        """
        Blockly action to spawn a Minecraft entity. It now uses the helper method
        to convert the Blockly entity ID string to a numerical ID.

        Args:
            position_vec3 (Vec3): A Vec3 instance for the spawn location.
            entity_type (str): The Blockly-generated Bukkit enum string (e.g., 'PIG', 'ZOMBIE').
        """
        # Convert the Bukkit enum string to its required integer ID
        entity_id_int = self._get_entity_id_from_bukkit_name(entity_type)

        if entity_id_int is None:
            print(f"Warning: Could not find a numerical ID for entity type '{entity_type}'. Cannot spawn.")
            return

        # print(f"ACTION: Spawning entity '{entity_type}' (ID: {entity_id_int}) at position {position_vec3}")

        # Now call pyncraft with the correct integer ID 1 unit above the requested position for safety
        self.mcplayer.pc.spawnEntity(position_vec3.x, position_vec3.y + 1, position_vec3.z, entity_id_int)

    def set_block(self, position_vec3, block_type):
        """
        Blockly action to set a single block in the Minecraft world.

        Args:
            position_vec3 (Vec3): A Vec3 instance for the block's location.
            block_type (str): The Blockly-generated ID for the block (e.g., 'STONE', 'OAK_FENCE').
        """
        # The position is already a Vec3 object.
        # The block_type is a string ID that needs to be parsed into a Minecraft ID.
        # parsed_block_type_id = self._parse_block_type(block_type)
        parsed_block_type_id = block_type

        # Access coordinates directly from the Vec3 object
        x, y, z = (int(position_vec3.x), int(position_vec3.y), int(position_vec3.z))

        # print(f"ACTION: Setting block at ({x},{y},{z}) to {parsed_block_type_id} "
        #       f"for player {getattr(self.mcplayer, 'name', 'N/A')}")

        # This is where you would call the actual pyncraft or Minecraft API method
        self.mcplayer.pc.setBlock(x, y, z, parsed_block_type_id)

    def get_block(self, position_vec3):
        """
        Gets the block type at a specific location.
        """
        x, y, z = (int(position_vec3.x), int(position_vec3.y), int(position_vec3.z))

        # print(f"ACTION: Getting block at ({x},{y},{z})")

        # pyncraft's getBlock() returns the numerical ID of the block.
        block_type = self.mcplayer.pc.getBlock(x, y, z)

        if block_type:
            return block_type
        else:
            return 'AIR' # A safe default if the ID is unknown

    def get_height(self, position_vec3):
        """
        Gets the Y coordinate of the highest block at the X,Z of the given position.
        """
        # We only need the x and z components for this API call.
        x = int(position_vec3.x)
        z = int(position_vec3.z)

        # print(f"ACTION: Getting height at (x={x}, z={z})")

        # Call the pyncraft method using the corrected API path
        height = self.mcplayer.pc.getHeight(x, z)

        return height

    def post_to_chat(self, message):
        """
        Posts a message to the in-game chat.
        The message argument is already a string from the generator.
        """
        # The pyncraft API expects a string, which is what we have.
        # No casting is needed unless you want to explicitly convert other types.
        message_str = str(message)

        # print(f"ACTION: Posting to chat: \"{message_str}\"")

        # Call the pyncraft method using the corrected API path
        self.mcplayer.pc.postToChat(message_str)


    def create_explosion(self, position_vec3, power):
        """
        Creates an explosion at a specific location.

        Args:
            position_vec3 (Vec3): The location for the center of the explosion.
            power (int or float): The strength of the explosion (TNT is 4).
        """
        # Extract coordinates and cast types
        x = float(position_vec3.x)
        y = float(position_vec3.y)
        z = float(position_vec3.z)
        power_float = float(power)

        # print(f"ACTION: Creating explosion at ({x},{y},{z}) with power {power_float}")

        # Call the pyncraft method using the corrected API path
        self.mcplayer.pc.createExplosion(x, y, z, power_float)

class DigitalGeometryOrig(MCActionBase): # Inherits from MCActionBase
    def __init__(self, mc_player_instance,delay_between_blocks=0.01):
        super().__init__(mc_player_instance,delay_between_blocks) # Call parent constructor
        self.default_material_id = 1 # Example: material ID for stone in voxelmap
                                     # Or map block_type to material_id

    # --- Methods matching Blockly generated calls ---

    def create_digital_ball(self, center_vec3, radius, block_type, inner_radius=0.0):
        """
        Blockly action to create a digital ball.
        center_vec3: A Vec3 instance.
        radius: float
        block_type: string (Blockly ID like 'STONE' or dict for colored glass)
        inner_radius: float (for hollow ball)
        """
        # print(f"MCActions: create_digital_ball request at {center_vec3} with radius {radius}, inner {inner_radius}")
        coords = generate_digital_ball_coordinates(
            center=center_vec3.to_tuple(),
            radius=float(radius),
            inner_radius=float(inner_radius)
        )
        self._place_blocks_from_coords(coords, block_type) # No additional offset needed if center is world coord

    def create_digital_tube(self, point1_vec3, point2_vec3, outer_thickness, block_type, inner_thickness=0.0):
        """
        Blockly action to create a digital tube.
        point1_vec3, point2_vec3: Vec3 instances for start and end points.
        outer_thickness: float
        block_type: string (Blockly ID)
        inner_thickness: float (for hollow tube)
        """
        # print(f"MCActions: create_digital_tube request from {point1_vec3} to {point2_vec3}, thickness {outer_thickness}, inner {inner_thickness}")
        coords = generate_digital_tube_coordinates(
            p1=point1_vec3.to_tuple(),
            p2=point2_vec3.to_tuple(),
            outer_thickness=float(outer_thickness),
            inner_thickness=float(inner_thickness)

        )
        self._place_blocks_from_coords(coords, block_type)

    def create_digital_line(self, point1_vec3, point2_vec3, block_type):
        """
        Blockly action to create a 1-voxel thick digital line.
        point1_vec3, point2_vec3: Vec3 instances.
        block_type: string (Blockly ID like 'STONE')
        """
        # print(f"MCActions: create_digital_line request from {point1_vec3} to {point2_vec3}")

        # Convert Vec3 inputs to integer tuples for the geometry function
        p1_tuple = (int(round(point1_vec3.x)), int(round(point1_vec3.y)), int(round(point1_vec3.z)))
        p2_tuple = (int(round(point2_vec3.x)), int(round(point2_vec3.y)), int(round(point2_vec3.z)))

        # Call the low-level coordinate generation function
        coords = generate_digital_line_coordinates(
            p1=p1_tuple,
            p2=p2_tuple
        )

        # Use the existing helper to place the blocks
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Cube",
        # Provide metadata for each parameter that will become a block input
        center={'label': 'Center', 'shadow': 'VECTOR_3D_SHADOW'},
        side_length={'label': 'Side Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        rotation_matrix3={'label': 'Rotation Matrix', 'shadow': '<shadow type="minecraft_matrix_3d_euler"></shadow>'},
        block_type={'label': 'Block Type', 'shadow': 'BLOCK_TYPE_SHADOW'},
        wall_thickness={'label': 'Wall Thickness (0=solid)', 'shadow': '<shadow type="math_number"><field name="NUM">0</field></shadow>'}
    )
    def create_digital_cube(self, center: 'Vec3', side_length:float, rotation_matrix3: 'Matrix3', block_type: 'Block', wall_thickness:float=0.0):
        """
        Blockly action to create a digital cube.
        center_vec3: Vec3 instance.
        side_length: float
        rotation_matrix3: Matrix3 instance.
        block_type: string (Blockly ID)
        wall_thickness: float (0 for solid)
        """
        # print(f"MCActions: create_digital_cube request at {center_vec3}, side {side_length}, factor {inner_offset_factor}")
        coords = generate_digital_cube_coordinates(
            center=center.to_tuple(), # Your func expects tuple
            side_length=float(side_length),
            rotation_matrix=rotation_matrix3.to_numpy(), # Your func expects np.ndarray
            wall_thickness=float(wall_thickness)
        )
        self._place_blocks_from_coords(coords, block_type)

    def create_digital_tetrahedron(self, vertices_list_of_vec3, block_type, inner_offset_factor=0.0):
        """
        Blockly action to create a digital tetrahedron.
        vertices_list_of_vec3: A list of 4 Vec3 instances.
        block_type: string (Blockly ID)
        inner_offset_factor: float
        """
        if not isinstance(vertices_list_of_vec3, list) or len(vertices_list_of_vec3) != 4:
            print("Error: create_digital_tetrahedron expects a list of 4 Vec3 vertices.")
            return

        # Convert list of Vec3 objects to list of tuples for your geometry function
        vertex_tuples = [v.to_tuple() for v in vertices_list_of_vec3]

        # print(f"MCActions: create_digital_tetrahedron request with {len(vertex_tuples)} vertices, factor {inner_offset_factor}")
        coords = generate_digital_tetrahedron_coordinates(
            vertices=vertex_tuples,
            inner_offset_factor=float(inner_offset_factor)
        )
        self._place_blocks_from_coords(coords, block_type)

    def create_digital_plane(self, normal_vec3, point_on_plane_vec3, block_type,
                               outer_width, outer_length, plane_thickness=1.0):
        """
        Blockly action to create a rectangular digital plane.
        """
        try:
            # Cast the incoming string values to numbers immediately.
            w = float(outer_width)
            l = float(outer_length)

            # Combine them into the tuple that the low-level function expects.
            outer_rect_dims_tuple = (w, l)

            normal_tuple = (normal_vec3.x, normal_vec3.y, normal_vec3.z)
            point_tuple = (point_on_plane_vec3.x, point_on_plane_vec3.y, point_on_plane_vec3.z)

            coords = generate_digital_plane_coordinates(
                normal=normal_tuple,
                point_on_plane=point_tuple,
                outer_rect_dims=outer_rect_dims_tuple,
                plane_thickness=float(plane_thickness)
            )
            self._place_blocks_from_coords(coords, block_type)
        except (ValueError, TypeError) as e:
            print(f"Error: Invalid parameter type for create_digital_plane. Width, Length, and Thickness must be numbers. Error: {e}")

    def create_digital_disc(self, normal_vec3, center_point_vec3, outer_radius,
                              block_type, disc_thickness=1.0, inner_radius=0.0):
        # print(f"MCActions: create_digital_disc request with normal {normal_vec3}, center {center_point_vec3}")

        normal_tuple = (normal_vec3.x, normal_vec3.y, normal_vec3.z)
        center_point_tuple = (center_point_vec3.x, center_point_vec3.y, center_point_vec3.z)

        coords = generate_digital_disc_coordinates( # Call your new function
            normal=normal_tuple,
            center_point=center_point_tuple,
            outer_radius=float(outer_radius),
            disc_thickness=float(disc_thickness),
            inner_radius=float(inner_radius)
        )
        self._place_blocks_from_coords(coords, block_type)

class MCActions(DigitalGeometry,WorldActions):
    '''Group All APIs for Blockly in a single class'''