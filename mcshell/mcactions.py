from blockapily import mced_block

from mcshell.constants import *

from mcshell.mcactions_base import MCActionsBase

# from mcshell.eventactions import EventActions
from mcshell.serveractions import ServerActions
from mcshell.qturtleactions import QTurtleActions
from mcshell.digitalgeometryactions import DigitalGeometryActions
from mcshell.digitalsetactions import DigitalSetActions
from mcshell.mclsystem import LSystem

# FIX: Robustly import generated actions to prevent build-time crashes
try:
    from mcshell.generated_actions import (
        PlayerActions, ChatActions, WorldActions, EventActions
    )
except ImportError:
    PlayerActions = None
    ChatActions = None
    WorldActions = None
    EventActions = None

# Advanced Digital Geometry and Turtle
from mcshell.mcturtle import (
    generate_metric_ball,
    generate_digital_plane_coordinates as generate_arithmetic_plane,
    generate_linear_path,
    DigitalSet,
    QTurtle,
)



class TurtleShapes(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Digital Shape: Sphere/Diamond/Cube",
        radius={'label': 'Radius'},
        metric={'label': 'Metric'},
    )
    def get_metric_ball(self, radius: int, metric: 'Metric') -> DigitalSet:
        return generate_metric_ball((0,0,0), radius, metric)

    @mced_block(
        label="Digital Shape: Arithmetic Plane (Square)",
        normal={'label': 'Normal'},
        side_length={'label': 'Side Length'},
    )
    def get_arithmetic_plane(self, normal: Vec3, side_length: int) -> DigitalSet:
        return generate_arithmetic_plane(normal.to_tuple(), (0,0,0), (side_length, side_length))

    @mced_block(
        label="Digital Shape: Arithmetic Plane (Square)",
        normal={'label': 'Normal'}, # Keeping it generic input for Vec3
        side_length={'label': 'Side Length'},
    )
    def get_arithmetic_plane(self, normal: Vec3, side_length: int) -> DigitalSet:
        return generate_arithmetic_plane(normal.to_tuple(), (0,0,0), (side_length, side_length))

    @mced_block(
        label="Digital Shape: Line",
        p1={'label': 'point_1'},
        p2={'label': 'point_2'},
    )
    def get_line(self, p1: Vec3, p2: Vec3) -> DigitalSet:
        return generate_linear_path(p1.to_tuple(), p2.to_tuple())

class LSystemShapes(MCActionsBase):
    def __init__(self, player, delay_between_blocks=0.01):
        super().__init__(player, delay_between_blocks)
        self.local_turtle = QTurtle()

    @mced_block(
        label="L-System: Define Rule",
        predecessor={'label': 'Symbol (char)'},
        successor={'label': 'Replacement'},
    )
    def define_rule(self, predecessor: str, successor: str) -> 'LSYSTEM_RULE':
        return (predecessor, successor)

    @mced_block(
        label="L-System: Generate Shape",
        axiom={'label': 'Axiom'},
        iterations={'label': 'Iterations'},
        step_length={'label': 'Step Length'},
        rules={'label': 'Rules (List)'},
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

class MCActions(
    PlayerActions, WorldActions,ChatActions,
    EventActions,ServerActions,QTurtleActions,DigitalGeometryActions,DigitalSetActions,
    TurtleShapes,LSystemShapes):
    """
    Unified API for Blockly combining all action groups.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0.0001):
        # Initialize all parent classes properly
        PlayerActions.__init__(self, mc_player_instance, delay_between_blocks)
        WorldActions.__init__(self, mc_player_instance, delay_between_blocks)
        ChatActions.__init__(self, mc_player_instance, delay_between_blocks)
        EventActions.__init__(self, mc_player_instance, delay_between_blocks)
        ServerActions.__init__(self, mc_player_instance, delay_between_blocks)
        QTurtleActions.__init__(self, mc_player_instance, delay_between_blocks)
        DigitalGeometryActions.__init__(self,mc_player_instance, delay_between_blocks)
        DigitalSetActions.__init__(self,mc_player_instance, delay_between_blocks)
        TurtleShapes.__init__(self,mc_player_instance,delay_between_blocks)
        LSystemShapes.__init__(self, mc_player_instance,delay_between_blocks)

