from mcshell.mcplayer import MCPlayer
from mcshell.constants import *
import time
import numpy as np

# Import the Base Action Class
from mcshell.mcactions_base import MCActionsBase, Pickers, _GLOBAL_TURTLE

from mcshell.mcvoxel_original import (
    generate_digital_tetrahedron_coordinates,
    generate_digital_tube_coordinates,
    generate_digital_plane_coordinates,
    generate_digital_ball_coordinates,
    generate_digital_cube_coordinates,
    generate_digital_disc_coordinates,
    generate_digital_line_coordinates,
    generate_digital_sphere_coordinates
)

# Advanced Digital Geometry and Turtle
from mcshell.mcturtle import (
    DigitalTurtle,
    generate_metric_ball,
    generate_digital_plane_coordinates as generate_arithmetic_plane,
    generate_linear_path,
    DigitalSet
)

# L-System Logic
from mcshell.mclsystem import LSystem

# Pyncraft Direct Actions (Direct Wrappers for Pyncraft API)
from mcshell.pyncactions import PyncraftActions

# Event Actions (Wait blocks for Sword, Chat, Arrow)
from mcshell.mceventactions import EventActions

from blockapily import mced_block


class TurtleShapes(MCActionsBase):
    """
    Value Blocks: These generate DigitalSet objects but do not change the world state.
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Digital Shape: Sphere/Diamond/Cube",
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        metric={'label': 'Metric'},
        output_type="Digital_Set",
        tooltip="Creates a mathematical shape. Does not place blocks."
    )
    def get_metric_ball(self, radius: int, metric: str) -> DigitalSet:
        return generate_metric_ball((0, 0, 0), radius, metric)

    @mced_block(
        label="Digital Shape: Arithmetic Plane (Square)",
        normal={'label': 'Normal'},
        side_length={'label': 'Side Length',
                     'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        output_type="Digital_Set",
        tooltip="Creates a square digital plane using the arithmetic definition."
    )
    def get_arithmetic_plane(self, normal: 'Vec3', side_length: int) -> DigitalSet:
        return generate_arithmetic_plane(normal.to_tuple(), (0, 0, 0), (side_length, side_length))

    @mced_block(
        label="Digital Shape: Line",
        p1={'label': 'point_1'},
        p2={'label': 'point_2'},
        output_type='Digital_Set',
        tooltip="Create a digital line using arithmetic definition"
    )
    def get_line(self, p1: 'Vec3', p2: 'Vec3') -> DigitalSet:
        return generate_linear_path(p1.to_tuple(), p2.to_tuple())

class TurtleActions(MCActionsBase):
    """
    Statement Blocks: These control the Turtle state or modify the world.
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)
        self.turtle = _GLOBAL_TURTLE

    @mced_block(label="Turtle: Reset to", position={'label': 'Position'}, orientation={'label': 'Facing'})
    def turtle_reset(self, position: 'Vec3', orientation: str = 'N'):
        if position:
            x, y, z = position.x, position.y, position.z
        else:
            pos = self.mcplayer.position
            x, y, z = pos.x, pos.y, pos.z
        self.turtle.pos = np.array([int(x), int(y), int(z)], dtype=int)
        self.turtle.up = np.array([0, 1, 0], dtype=int)

        # Orientation logic mapping strings to vector basis
        orientation = orientation.upper()
        if orientation == 'N':
            self.turtle.forward = np.array([0, 0, -1], dtype=int)
            self.turtle.right = np.array([1, 0, 0], dtype=int)
        elif orientation == 'S':
            self.turtle.forward = np.array([0, 0, 1], dtype=int)
            self.turtle.right = np.array([-1, 0, 0], dtype=int)
        elif orientation == 'E':
            self.turtle.forward = np.array([1, 0, 0], dtype=int)
            self.turtle.right = np.array([0, 0, 1], dtype=int)
        elif orientation == 'W':
            self.turtle.forward = np.array([-1, 0, 0], dtype=int)
            self.turtle.right = np.array([0, 0, -1], dtype=int)
        self.turtle.stack = []

    @mced_block(label="Turtle: Move", direction={'label': 'Direction'}, distance={'label': 'Distance',
                                                                                  'shadow': '<shadow type="math_number"><field name="NUM">1</field></shadow>'})
    def turtle_move(self, direction: str, distance: int):
        self.turtle.move(distance, direction)

    @mced_block(label="Turtle: Rotate 90", axis={'label': 'Axis'}, steps={'label': 'Steps (90 deg)',
                                                                          'shadow': '<shadow type="math_number"><field name="NUM">1</field></shadow>'})
    def turtle_rotate(self, axis: str, steps: int):
        self.turtle.rotate_90(axis, steps)

    @mced_block(label="Turtle: Push State")
    def turtle_push(self):
        self.turtle.push_state()

    @mced_block(label="Turtle: Pop State")
    def turtle_pop(self):
        self.turtle.pop_state()

    @mced_block(label="Turtle: Set Brush", shape={'label': 'Shape', 'check': 'Digital_Set'})
    def turtle_set_brush(self, shape: DigitalSet):
        self.turtle.set_brush(shape)

    @mced_block(label="Turtle: Stamp Brush", block_type={'label': 'Material'})
    def turtle_stamp(self, block_type: str):
        shape = self.turtle.stamp()
        self._place_digital_set(shape, block_type)

class LSystemShapes(MCActionsBase):
    """
    Exposes L-System grammar logic for procedural generation as a DigitalSet.
    """

    def __init__(self, player):
        super().__init__(player, 0.01)
        self.local_turtle = DigitalTurtle()

    @mced_block(label="L-System: Define Rule", predecessor={'label': 'Symbol (char)', 'shadow': 'text'},
                successor={'label': 'Replacement', 'shadow': 'text'}, output_type="LSYSTEM_RULE")
    def define_rule(self, predecessor: str, successor: str):
        return (predecessor, successor)

    @mced_block(label="L-System: Generate Shape", axiom={'label': 'Axiom', 'shadow': 'text'},
                iterations={'label': 'Iterations',
                            'shadow': '<shadow type="math_number"><field name="NUM">3</field></shadow>'},
                step_length={'label': 'Step Length',
                             'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
                rules={'label': 'Rules (List)', 'check': 'Array'}, output_type="Digital_Set")
    def get_lsystem_shape(self, axiom: str, iterations: int, step_length: int, rules: list) -> DigitalSet:
        rule_dict = {r[0]: r[1] for r in rules if len(r) >= 2}
        lsys = LSystem(axiom, rule_dict)
        final_string = lsys.iterate(int(iterations))
        self.local_turtle.pos = np.array([0, 0, 0], dtype=int)
        self.local_turtle.brush = DigitalSet()
        self.local_turtle.brush.add((0, 0, 0))
        accumulated_shape = DigitalSet()
        for char in final_string:
            shape_segment = self.local_turtle.interpret_symbol(char, int(step_length))
            if shape_segment:
                accumulated_shape = accumulated_shape.union(shape_segment)
        return accumulated_shape

class DigitalGeometry(MCActionsBase):
    """
    Actions that involve creating geometric shapes.
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(label="Create Digital Cube", center={'label': 'Center'}, side_length={'label': 'Side Length',
                                                                                      'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
                block_type={'label': 'Block Type'})
    def create_digital_cube(self, center: 'Vec3', side_length: float, block_type: str):
        coords = generate_digital_cube_coordinates(center=center.to_tuple(), side_length=float(side_length))
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(label="Create Digital Line", point1={'label': 'Start Point'}, point2={'label': 'End Point'},
                block_type={'label': 'Block Type'})
    def create_digital_line(self, point1: 'Vec3', point2: 'Vec3', block_type: str):
        coords = generate_digital_line_coordinates(p1=point1.to_tuple(), p2=point2.to_tuple())
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Sphere",
        center={'label': 'Center'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_sphere(self, center: 'Vec3', radius: float, block_type: str):
        coords = generate_digital_sphere_coordinates(center=center.to_tuple(), radius=float(radius))
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Disc",
        center={'label': 'Center'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        normal={'label': 'Normal'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_disc(self, center: 'Vec3', radius: float, normal: 'Vec3', block_type: str):
        coords = generate_digital_disc_coordinates(center=center.to_tuple(), radius=float(radius),
                                                   normal=normal.to_tuple())
        self._place_blocks_from_coords(coords, block_type)

# deprecated; methods are in PyncraftActions
class WorldActions(MCActionsBase):
    """
    Basic world interaction blocks.
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(label="Set Block", position={'label': 'At Position'}, block_type={'label': 'Block Type'})
    def set_block(self, position: 'Vec3', block_type: str):
        self.mcplayer.pc.setBlock(int(position.x), int(position.y), int(position.z), block_type)

    @mced_block(label="Post to Chat", message={'label': 'Message',
                                               'shadow': '<shadow type="text"><field name="TEXT">Hello!</field></shadow>'})
    def post_to_chat(self, message: str):
        self.mcplayer.pc.postToChat(str(message))

class PlayerActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Get Player Direction",
        output_type="3DVector"
    )
    def get_direction(self):
        # if we return a value, we must specify output_type
        return self.mcplayer.direction

    # @mced_block(
    #     label="Get Player Position",
    #     output_type="3DVector"
    # )
    # def get_position(self):
    #     return self.mcplayer.position

    @mced_block(
        label="Get Position by Name",
        player_name={'label': 'Player Name', 'shadow': 'text'},
        output_type="3DVector",
        tooltip="Returns the current XYZ coordinates of a player on this server."
    )
    def get_position_by_name(self, player_name: str) -> Vec3:
        """
        Uses the high-level MCPlayer properties to resolve another player's position.
        """
        from mcshell.mcplayer import MCPlayer

        # 1. Self-reference check
        if not player_name or player_name.lower() == self.mcplayer.name.lower():
            return self.mcplayer.position

        try:
            # 2. Instantiate a contextual peer using server arguments from our own player.
            # We assume the user has fixed server_args to return {host, port, rcon_port, fj_port, password}.
            target = MCPlayer(player_name, **self.mcplayer.server_args)
            # 3. Access the 'position' property which encapsulates self.pc.player.getPos()
            return target.position
        except Exception as e:
            # Fallback to executor's position to maintain script stability
            return self.mcplayer.position

    @mced_block(
        label="Get Player Tile Position",
        output_type="3DVector"
    )
    def get_tile_position(self):
        return self.mcplayer.tile_position

    @mced_block(
        label="Get Tile Position by Name",
        player_name={'label': 'Player Name', 'shadow': 'text'},
        output_type="3DVector",
        tooltip="Returns the current XYZ coordinates of a player on this server."
    )
    def get_tile_position_by_name(self, player_name: str) -> Vec3:
        """
        Uses the high-level MCPlayer properties to resolve another player's position.
        """
        from mcshell.mcplayer import MCPlayer

        # 1. Self-reference check
        if not player_name or player_name.lower() == self.mcplayer.name.lower():
            return self.mcplayer.tile_position

        try:
            # 2. Instantiate a contextual peer using server arguments from our own player.
            # We assume the user has fixed server_args to return {host, port, rcon_port, fj_port, password}.
            target = MCPlayer(player_name, **self.mcplayer.server_args)
            # 3. Access the 'position' property which encapsulates self.pc.player.getPos()
            return target.tile_position
        except Exception as e:
            # Fallback to executor's position to maintain script stability
            return self.mcplayer.tile_position

    @mced_block(
        label="Wait for Sword Strike Position",
        output_type="3DVector"
    )
    def wait_for_sword_strike(self):
        return self.mcplayer.here

    @mced_block(
        label="Get Player Compass Direction",
        output_type="Compass"
    )
    def get_compass_direction(self):
        return self.mcplayer.compass_direction

    @mced_block(
        label="Get Compass Direction by Name",
        player_name={'label': 'Player Name', 'shadow': 'text'},
        output_type="Compass",
    )
    def get_compass_direction_by_name(self, player_name: str) -> Vec3:
        """
        Uses the high-level MCPlayer properties to resolve another player's compass direction.
        """
        from mcshell.mcplayer import MCPlayer

        # 1. Self-reference check
        if not player_name or player_name.lower() == self.mcplayer.name.lower():
            return self.mcplayer.compass_direction

        try:
            # 2. Instantiate a contextual peer using server arguments from our own player.
            # We assume the user has fixed server_args to return {host, port, rcon_port, fj_port, password}.
            target = MCPlayer(player_name, **self.mcplayer.server_args)
            # 3. Access the 'position' property which encapsulates self.pc.player.getPos()
            return target.compass_direction
        except Exception as e:
            # Fallback to executor's position to maintain script stability
            return self.mcplayer.compass_direction

    @mced_block(
        label="Set Player Compass Direction",
    )
    def set_compass_direction(self, dir: 'Compass'):
        self.mcplayer.set_compass_direction(dir)

    @mced_block(
        label="Set Player Position",
    )
    def set_position(self, pos: 'Vec3'):
        self.mcplayer.set_position(pos)

    @mced_block(
        label="Send Title",
        title={'label': 'Title Text', 'shadow': 'text'},
        subtitle={'label': 'Subtitle Text', 'shadow': 'text'},
        stay={'label': 'Time Onscreen','shadow':'text'},
    )
    def send_title(self,title:str,subtitle:str,stay:int=70):
        self.mcplayer.pc.player.sendTitle(title=title,subTitle=subtitle,stay=stay)

    @mced_block(
        label="Send Title by Name",
        player_name={'label': 'Player Name','shadow':'text'},
        title={'label': 'Title Text', 'shadow': 'text'},
        subtitle={'label': 'Subtitle Text', 'shadow': 'text'},
        stay={'label': 'Time Onscreen','shadow':'text'},
    )
    def send_title_by_name(self,player_name:str,title:str,subtitle:str,stay:int=70):
        target_player = self._get_player_by_name(player_name)
        target_player.pc.player.sendTitle(title=title,subTitle=subtitle,stay=stay)

class MCActions(LSystemShapes, PlayerActions, TurtleShapes, TurtleActions, DigitalGeometry,
                PyncraftActions, EventActions):
    """
    Unified API for Blockly combining all action groups.
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        # Initialize all parent classes properly
        MCActionsBase.__init__(self, mc_player_instance, delay_between_blocks)
        TurtleActions.__init__(self, mc_player_instance, delay_between_blocks)
        LSystemShapes.__init__(self, mc_player_instance)
        PyncraftActions.__init__(self, mc_player_instance, delay_between_blocks)
        EventActions.__init__(self, mc_player_instance, delay_between_blocks)