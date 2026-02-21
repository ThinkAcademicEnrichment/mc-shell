from mcshell.mcactions_base import MCActionsBase
from blockapily import mced_block
from mcshell.constants import *

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

class DigitalGeometryActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Create Digital Cube",
        center={'label': 'Center'},
        side_length={'label': 'Side Length'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_cube(self, center: Vec3, side_length: float, block_type: 'Block'):
        coords = generate_digital_cube_coordinates(center=center.to_tuple(), side_length=float(side_length))
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Line",
        point1={'label': 'Start Point'},
        point2={'label': 'End Point'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_line(self, point1: Vec3, point2: Vec3, block_type: 'Block'):
        coords = generate_digital_line_coordinates(p1=point1.to_tuple(), p2=point2.to_tuple())
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Sphere",
        center={'label': 'Center'},
        radius={'label': 'Radius'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_sphere(self, center: Vec3, radius: float, block_type: 'Block'):
        coords = generate_digital_sphere_coordinates(center=center.to_tuple(), radius=float(radius))
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Disc",
        center={'label': 'Center'},
        radius={'label': 'Radius'},
        normal={'label': 'Normal'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_disc(self, center: Vec3, radius: float, normal: Vec3, block_type: 'Block'):
        # coords = generate_digital_disc_coordinates(center=center.to_tuple(), radius=float(radius), normal=normal.to_tuple())
        coords = generate_digital_disc_coordinates(normal=normal.to_tuple(),center_point=center.to_tuple(),outer_radius=radius)
        self._place_blocks_from_coords(coords, block_type)
