from mcshell.mcplayer import MCPlayer
from mcshell.constants import *
import time
import numpy as np
import pickle
from typing import Optional

# Import the Base Action Class
from mcshell.mcactions_base import MCActionsBase, Pickers, _GLOBAL_QTURTLE

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
    generate_metric_ball,
    generate_digital_plane_coordinates as generate_arithmetic_plane,
    generate_linear_path,
    DigitalSet,
    QTurtle,
)

# L-System Logic
from mcshell.mclsystem import LSystem

# Pyncraft Direct Actions (Direct Wrappers for Pyncraft API)
from mcshell.pyncactions import PyncraftActions

# Event Actions (Wait blocks for Sword, Chat, Arrow)
from mcshell.mceventactions import EventActions

# Server Actions (Time, Weather, Gamerules)
from mcshell.serveractions import ServerActions

from blockapily import mced_block

class TurtleShapes(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Digital Shape: Sphere/Diamond/Cube",
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        metric={'label': 'Metric'},
        output_type="Digital_Set"
    )
    def get_metric_ball(self, radius: int, metric: 'Metric') -> DigitalSet:
        return generate_metric_ball((0,0,0), radius, metric)

    @mced_block(
        label="Digital Shape: Arithmetic Plane (Square)",
        normal={'label': 'Normal'},
        side_length={'label': 'Side Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        output_type="Digital_Set"
    )
    def get_arithmetic_plane(self, normal: 'Vec3', side_length: int) -> DigitalSet:
        return generate_arithmetic_plane(normal.to_tuple(), (0,0,0), (side_length, side_length))

    @mced_block(
        label="Digital Shape: Arithmetic Plane (Square)",
        normal={'label': 'Normal'}, # Keeping it generic input for Vec3
        side_length={'label': 'Side Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        output_type="Digital_Set"
    )
    def get_arithmetic_plane(self, normal: 'Vec3', side_length: int) -> DigitalSet:
        return generate_arithmetic_plane(normal.to_tuple(), (0,0,0), (side_length, side_length))

    @mced_block(
        label="Digital Shape: Line",
        p1={'label': 'point_1'},
        p2={'label': 'point_2'},
        output_type='Digital_Set'
    )
    def get_line(self, p1: 'Vec3', p2: 'Vec3') -> DigitalSet:
        return generate_linear_path(p1.to_tuple(), p2.to_tuple())

class LSystemShapes(MCActionsBase):
    def __init__(self, player):
        super().__init__(player, 0.01)
        self.local_turtle = QTurtle()

    @mced_block(
        label="L-System: Define Rule",
        predecessor={'label': 'Symbol (char)', 'shadow': 'text'},
        successor={'label': 'Replacement', 'shadow': 'text'},
        output_type="LSYSTEM_RULE"
    )
    def define_rule(self, predecessor: str, successor: str):
        return (predecessor, successor)

    @mced_block(
        label="L-System: Generate Shape",
        axiom={'label': 'Axiom', 'shadow': 'text'},
        iterations={'label': 'Iterations', 'shadow': '<shadow type="math_number"><field name="NUM">3</field></shadow>'},
        step_length={'label': 'Step Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        rules={'label': 'Rules (List)', 'check': 'Array'},
        output_type="Digital_Set"
    )
    def get_lsystem_shape(self, axiom: str, iterations: int, step_length: int, rules: list) -> DigitalSet:
        rule_dict = {r[0]: r[1] for r in rules if len(r) >= 2}
        lsys = LSystem(axiom, rule_dict)
        final_string = lsys.iterate(int(iterations))
        self.local_turtle.pos = np.array([0,0,0], dtype=int)
        self.local_turtle.brush = DigitalSet()
        self.local_turtle.brush.add((0,0,0))
        accumulated_shape = DigitalSet()
        for char in final_string:
            shape_segment = self.local_turtle.interpret_symbol(char, int(step_length))
            if shape_segment:
                accumulated_shape = accumulated_shape.union(shape_segment)
        return accumulated_shape

class DigitalGeometry(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Create Digital Cube",
        center={'label': 'Center'},
        side_length={'label': 'Side Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_cube(self, center: 'Vec3', side_length: float, block_type: 'Block'):
        coords = generate_digital_cube_coordinates(center=center.to_tuple(), side_length=float(side_length))
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Line",
        point1={'label': 'Start Point'},
        point2={'label': 'End Point'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_line(self, point1: 'Vec3', point2: 'Vec3', block_type: 'Block'):
        coords = generate_digital_line_coordinates(p1=point1.to_tuple(), p2=point2.to_tuple())
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Sphere",
        center={'label': 'Center'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_sphere(self, center: 'Vec3', radius: float, block_type: 'Block'):
        coords = generate_digital_sphere_coordinates(center=center.to_tuple(), radius=float(radius))
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Disc",
        center={'label': 'Center'},
        radius={'label': 'Radius', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        normal={'label': 'Normal'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_disc(self, center: 'Vec3', radius: float, normal: 'Vec3', block_type: 'Block'):
        # coords = generate_digital_disc_coordinates(center=center.to_tuple(), radius=float(radius), normal=normal.to_tuple())
        coords = generate_digital_disc_coordinates(normal=normal.to_tuple(),center_point=center.to_tuple(),outer_radius=radius)
        self._place_blocks_from_coords(coords, block_type)

class WorldActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(label="Set Block", position={'label': 'At Position'}, block_type={'label': 'Block Type'})
    def set_block(self, position: 'Vec3', block_type: 'Block'):
        self.mcplayer.pc.setBlock(int(position.x), int(position.y), int(position.z), block_type)

    @mced_block(label="Post to Chat", message={'label': 'Message', 'shadow': '<shadow type="text"><field name="TEXT">Hello!</field></shadow>'})
    def post_to_chat(self, message: str):
        self.mcplayer.pc.postToChat(str(message))
    # for porting old powers; now in pyncraft actions
    @mced_block(
        label="Get Height",
        output_type="Number",
        position={'label': 'At Position (X,Z)'}
    )
    def get_height(self, position: 'Vec3') -> int:
        """
        Gets the Y coordinate of the highest block at the X,Z of the given position.
        """
        x, z = (int(position.x), int(position.z))
        height = self.mcplayer.pc.getHeight(x, z)
        return int(height)

class PlayerActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    # deprecated; just for porting old powers
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

    @mced_block(label="Get Player Position", output_type="3DVector")
    def get_position(self):
        """Returns the player's current Vec3 position."""
        return self.mcplayer.position

    @mced_block(label="Get Tile Position", output_type="3DVector")
    def get_tile_position(self):
        """Returns the integer block coordinates of the player."""
        return self.mcplayer.tile_position

    @mced_block(label="Get Direction", output_type="3DVector")
    def get_direction(self):
        """Returns the direction the player is looking as a unit vector."""
        return self.mcplayer.direction

    @mced_block(label="Get Q Direction", output_type="3DVector")
    def get_direction(self):
        """Returns the quantized direction the player is looking as a unit vector."""
        return self.mcplayer.q_direction

    @mced_block(
        label="Set Direction",
        direction={'label': 'Direction Vector'}
    )
    def set_direction(self, direction: 'Vec3'):
        """Sets the player's facing direction."""
        self.mcplayer.set_direction(direction)

    @mced_block(label="Wait for Sword Strike Position (Legacy)", output_type="3DVector")
    def wait_for_sword_strike(self):
        """Legacy block for single-player sword strike waiting."""
        return self.mcplayer.here

    @mced_block(
        label="Send Title",
        title={'label': 'Title Text', 'shadow': 'text'},
        subtitle={'label': 'Subtitle Text', 'shadow': 'text'},
        stay={'label': 'Time Onscreen'},
        player_name={'label': 'Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def send_title(self,title:str,subtitle:str,stay:int=70,player_name:str="SELF"):
        """Legacy Send Title Block - uses current player context."""
        self.mcplayer.pc.player.sendTitle(title=title,subTitle=subtitle,stay=stay)

    # Restored from uploaded mcactions.py
    @mced_block(
        label="Get Compass Direction for [player]",
        player_name={'label': 'Player', 'shadow': '<shadow type="text"><field name="TEXT">SELF</field></shadow>'},
        output_type="Compass",
    )
    def get_compass_direction_by_name(self, player_name: str = "SELF") -> str:
        """
        Uses the high-level MCPlayer properties to resolve another player's compass direction.
        """
        # 1. Self-reference check
        if not player_name or player_name.strip().upper() == "SELF" or player_name.lower() == self.mcplayer.name.lower():
            return self.mcplayer.compass_direction

        try:
            # 2. Instantiate a contextual peer using server arguments from our own player.
            target = MCPlayer(player_name, **self.mcplayer.server_args)
            return target.compass_direction
        except Exception as e:
            # Fallback to executor's position to maintain script stability
            return self.mcplayer.compass_direction

    @mced_block(
        label="Set Player Compass Direction",
        dir={'label': 'Direction'}
    )
    def set_compass_direction(self, dir: 'Compass'):
        self.mcplayer.set_compass_direction(dir)

    @mced_block(
        label="Get Player Compass Direction",
        output_type='Compass',
    )
    def get_compass_direction(self):
        return self.mcplayer.compass_direction

    @mced_block(
        label="Set Player Position",
        pos={'label': 'Position'}
    )
    def set_position(self, pos: 'Vec3'):
        self.mcplayer.set_position(pos)

    @mced_block(
        label="Get Player QCompass Direction",
        output_type='QCompass',
    )
    def get_q_compass_direction(self):
        return self.mcplayer.q_compass_direction

    @mced_block(
        label="Set Player Q Compass Direction",
        dir={'label': 'Q Direction'}
    )
    def set_compass_q_direction(self, dir: 'QCompass'):
        self.mcplayer.set_q_compass_direction(dir)

class QTurtleActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.001):
        super().__init__(mc_player_instance, delay_between_blocks)
        self.turtle = _GLOBAL_QTURTLE

    @mced_block(
        label="QTurtle: Reset to",
        position={'label': 'Position'},
        orientation={'label': 'Facing'}
    )
    def reset(self, position:'Vec3', heading_q_str:'QCompass'='N'):
        """
        Resets the turtle to a specific position and aligns its Forward vector
        with the specified Global Q-Direction (e.g., 'N', 'NE', 'SWU').

        It automatically recalculates the orthogonal(ish) Right and Up vectors
        to form a consistent basis frame.
        """
        if position:
            x, y, z = position.x, position.y, position.z
        else:
            pos = self.mcplayer.position
            x, y, z = pos.x, pos.y, pos.z
        self.turtle.pos = np.array([int(x), int(y), int(z)], dtype=int)

        # 1. Determine Forward Vector from Global Q-String
        global_forward = self.turtle._parse_global_q(heading_q_str)
        if not np.any(global_forward):
            global_forward = np.array([0, 0, -1]) # Default North (-Z)

        self.turtle.forward = global_forward

        # 2. Determine Up Vector
        # Standard reference Up is Global Y (0,1,0)
        ref_up = np.array([0, 1, 0])

        # If Forward is parallel to Reference Up (looking straight Up/Down)
        # we must choose a different reference for 'Local Up' (usually Global North or South)
        if np.array_equal(np.abs(global_forward), ref_up):
            # If looking Up/Down, align Local Up with Global North (-Z) to keep bearing
            ref_up = np.array([0, 0, -1])

        # 3. Calculate Right Vector (Cross Product)
        # Right = Forward x Up
        right_raw = np.cross(self.turtle.forward, ref_up)

        # If cross product is zero (shouldn't happen due to parallel check above, but for safety)
        if not np.any(right_raw):
             self.turtle.right = np.array([1, 0, 0])
        else:
             # Quantize/Normalize the result to stay on lattice
             # Simple sign extraction works for 90-degree components,
             # but for diagonals we need to preserve the non-zero integers.
             # Since we want integer steps, we keep the raw cross product if it's small,
             # or simplify it if it's a scaled version of a primitive direction.
             self.turtle.right = self.turtle._quantize_vector(right_raw)

        # 4. Recalculate Up Vector to ensure orthogonality
        # Up = Right x Forward
        up_raw = np.cross(self.turtle.right, self.turtle.forward)
        self.turtle.up = self.turtle._quantize_vector(up_raw)

        # Clear state stack
        self.turtle.stack = []

    @mced_block(
        label="QTurtle: Move",
        direction={'label': 'Direction' },
        distance={'label': 'Distance', 'shadow': '<shadow type="math_number"><field name="NUM">1</field></shadow>'}
    )
    def turtle_move(self, direction: 'QDirection', distance: int):
        self.turtle.move(distance, direction)

    @mced_block(
        label="QTurtle: Rotate 90",
        axis={'label': 'Axis'},
        steps={'label': 'Steps (90 deg)', 'shadow': '<shadow type="math_number"><field name="NUM">1</field></shadow>'}
    )
    def turtle_rotate(self, axis: 'Axis', steps: int):
        self.turtle.rotate_90(axis, steps)

    @mced_block(label="QTurtle: Push State")
    def turtle_push(self):
        self.turtle.push_state()

    @mced_block(label="QTurtle: Pop State")
    def turtle_pop(self):
        self.turtle.pop_state()

    @mced_block(label="QTurtle: Set Brush", shape={'label': 'Shape', 'check': 'Digital_Set'})
    def turtle_set_brush(self, shape: DigitalSet):
        self.turtle.set_brush(shape)

    @mced_block(label="QTurtle: Capture Brush", shape={'label': 'Shape', 'check': 'Digital_Set'})
    def turtle_capture_brush(self, shape: DigitalSet):
        self.turtle.capture_brush(shape)

    @mced_block(label="QTurtle: Stamp Brush", block_type={'label': 'Material'})
    def turtle_stamp(self, block_type: 'Block'):
        shape = self.turtle.stamp()
        self._place_digital_set(shape, block_type)

    @mced_block(
        label="QTurtle: Extrude Brush",
        length={'label': 'Length', 'shadow': '<shadow type="math_number"><field name="NUM">5</field></shadow>'},
        direction={'label': 'Direction'},
        block_type={'label': 'Material'}
    )
    def turtle_extrude(self, length: int, direction: 'QDirection', block_type: 'Block'):
        shape = self.turtle.extrude(length,direction)
        self._place_digital_set(shape, block_type)

    @mced_block(
        label="QTurtle: Position",
        output_type="3DVector"
    )
    def turtle_position(self):
        return Vec3(*self.turtle.pos)

class MCActions(LSystemShapes, PlayerActions, TurtleShapes, DigitalGeometry, WorldActions, PyncraftActions, EventActions, ServerActions, QTurtleActions):
    """
    Unified API for Blockly combining all action groups.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0.001):
        # Initialize all parent classes properly
        MCActionsBase.__init__(self, mc_player_instance, delay_between_blocks)
        QTurtleActions.__init__(self, mc_player_instance, delay_between_blocks)
        LSystemShapes.__init__(self, mc_player_instance)
        PyncraftActions.__init__(self, mc_player_instance, delay_between_blocks)
        EventActions.__init__(self, mc_player_instance, delay_between_blocks)
        ServerActions.__init__(self, mc_player_instance, delay_between_blocks)