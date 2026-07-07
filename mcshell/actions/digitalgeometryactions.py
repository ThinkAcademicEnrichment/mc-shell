from mcshell.mcactions_base import MCActionsBase
from blockapily import mced_block
from mcshell.constants import *

from mcshell.mcvoxel import (
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
        block_type={'label': 'Block Type'},
        rotation_matrix={'label': 'Rotation Matrix'}
    )
    def create_digital_cube(self, center: Vec3, side_length: float, block_type: 'Block',rotation_matrix: 'Matrix3'):
        coords = generate_digital_cube_coordinates(center=center.to_tuple(), side_length=float(side_length),rotation_matrix=rotation_matrix.matrix)
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


    @mced_block(
        label="Create Digital Tube",
        p1={'label': 'Start Point'},
        p2={'label': 'End Point'},
        outer_thickness={'label': 'Outer Thickness (Radius)'},
        inner_thickness={'label': 'Inner Thickness (Radius)'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_tube(self, p1: Vec3, p2: Vec3, outer_thickness: float, inner_thickness: float, block_type: 'Block'):
        coords = generate_digital_tube_coordinates(p1=p1.to_tuple(), p2=p2.to_tuple(), outer_thickness=float(outer_thickness), inner_thickness=float(inner_thickness))
        self._place_blocks_from_coords(coords, block_type)

    # TODO: Width and Height are not respected
    @mced_block(
        label="Create Digital Plane",
        normal={'label': 'Normal'},
        point_on_plane={'label': 'Point on Plane'},
        width={'label': 'Width'},
        height={'label': 'Height'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_plane(self, normal: Vec3, point_on_plane: Vec3, width: float, height: float, block_type: 'Block'):
        outer_rect_dims = (float(width), float(height))
        coords = generate_digital_plane_coordinates(normal=normal.to_tuple(), point_on_plane=point_on_plane.to_tuple(), outer_rect_dims=outer_rect_dims)
        self._place_blocks_from_coords(coords, block_type)

    @mced_block(
        label="Create Digital Ball",
        center={'label': 'Center'},
        radius={'label': 'Outer Radius'},
        inner_radius={'label': 'Inner Radius'},
        block_type={'label': 'Block Type'}
    )
    def create_digital_ball(self, center: Vec3, radius: float, inner_radius: float, block_type: 'Block'):
        coords = generate_digital_ball_coordinates(center=center.to_tuple(), radius=float(radius), inner_radius=float(inner_radius))
        self._place_blocks_from_coords(coords, block_type)

    # TODO: broken 
    # @mced_block(
    #     label="Create Digital Tetrahedron",
    #     v1={'label': 'Vertex 1'},
    #     v2={'label': 'Vertex 2'},
    #     v3={'label': 'Vertex 3'},
    #     v4={'label': 'Vertex 4'},
    #     inner_offset_factor={'label': 'Inner Offset Factor'},
    #     block_type={'label': 'Block Type'}
    # )
    # def create_digital_tetrahedron(self, v1: Vec3, v2: Vec3, v3: Vec3, v4: Vec3, inner_offset_factor: float, block_type: 'Block'):
    #     vertices = [v1.to_tuple(), v2.to_tuple(), v3.to_tuple(), v4.to_tuple()]
    #     coords = generate_digital_tetrahedron_coordinates(vertices=vertices, inner_offset_factor=float(inner_offset_factor))
    #     self._place_blocks_from_coords(coords, block_type)

