from mcshell.constants import *
from mcshell.mcactions_base import MCActionsBase

from mcshell.mcturtle import (
    generate_metric_ball,
    generate_digital_plane_coordinates as generate_arithmetic_plane,
    generate_linear_path,
    DigitalSet,
)

from blockapily import mced_block

class QTurtleShapes(MCActionsBase):
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

