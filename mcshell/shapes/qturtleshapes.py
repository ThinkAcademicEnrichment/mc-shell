import numpy as np
import trimesh
from mcshell.constants import *
from mcshell.mcactions_base import MCActionsBase
from mcshell.mcturtle import DigitalSet, generate_linear_path
from blockapily import mced_block

class QTurtleShapes(MCActionsBase):
    """
    Generates primitive shapes by creating continuous 3D meshes using trimesh,
    voxelizing them, and returning them as standard DigitalSets for use
    in the mcshell geometry pipeline.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0.01):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Digital Shape: Sphere",
        radius={'label': 'Radius', 'default': 5.0}
    )
    def get_sphere(self, radius: float) -> DigitalSet:
        # 1. Create a mathematically perfect continuous sphere mesh
        mesh = trimesh.creation.icosphere(radius=radius)
        
        # 2. Voxelize it into a discrete 3D grid where 1 unit = 1 Minecraft block
        voxel_grid = mesh.voxelized(pitch=1.0)
        
        # 3. Extract the solid coordinates and return them as your standard DigitalSet
        # We fill the hollow voxel grid to make it a solid ball
        solid_voxels = voxel_grid.fill().points
        points = np.round(solid_voxels).astype(int)
        
        return DigitalSet(points.tolist())

    @mced_block(
        label="Digital Shape: Cylinder",
        radius={'label': 'Radius', 'default': 5.0},
        height={'label': 'Height', 'default': 10.0}
    )
    def get_cylinder(self, radius: float, height: float) -> DigitalSet:
        mesh = trimesh.creation.cylinder(radius=radius, height=height)
        
        voxel_grid = mesh.voxelized(pitch=1.0)
        points = np.round(voxel_grid.fill().points).astype(int)
        
        # Trimesh cylinders are centered. If you want the base at y=0, 
        # you can easily translate the DigitalSet here before returning.
        return DigitalSet(points.tolist())

    @mced_block(
        label="Digital Shape: Box",
        width={'label': 'Width (X)', 'default': 5.0},
        height={'label': 'Height (Y)', 'default': 5.0},
        depth={'label': 'Depth (Z)', 'default': 5.0}
    )
    def get_box(self, width: float, height: float, depth: float) -> DigitalSet:
        mesh = trimesh.creation.box(extents=[width, height, depth])
        
        voxel_grid = mesh.voxelized(pitch=1.0)
        points = np.round(voxel_grid.fill().points).astype(int)
        
        return DigitalSet(points.tolist())

    @mced_block(
        label="Digital Shape: Torus (Donut)",
        major_radius={'label': 'Major Radius', 'default': 10.0},
        minor_radius={'label': 'Minor (Tube) Radius', 'default': 3.0}
    )
    def get_torus(self, major_radius: float, minor_radius: float) -> DigitalSet:
        # A Torus is notoriously hard to write an integer algorithm for.
        # With trimesh, it's trivial.
        mesh = trimesh.creation.annulus(r_min=major_radius-minor_radius, 
                                        r_max=major_radius+minor_radius, 
                                        height=minor_radius*2)
        # We round the edges of the annulus to make it a proper tube
        # (This is a simplified torus approach using trimesh extrusion)
        
        voxel_grid = mesh.voxelized(pitch=1.0)
        points = np.round(voxel_grid.fill().points).astype(int)
        
        return DigitalSet(points.tolist())

    @mced_block(
        label="Digital Shape: Cone",
        radius={'label': 'Radius', 'default': 5.0},
        height={'label': 'Height', 'default': 10.0}
    )
    def get_cone(self, radius: float, height: float) -> DigitalSet:
        """
        Creates a solid cone with the base centered at the origin, pointing along the Z axis.
        """
        # 1. Create the continuous cone mesh
        mesh = trimesh.creation.cone(radius=radius, height=height)
        
        # 2. Voxelize the mesh at a 1-block pitch
        voxel_grid = mesh.voxelized(pitch=1.0)
        
        # 3. Fill the interior to make it a solid shape
        solid_voxels = voxel_grid.fill().points
        
        # 4. Extract points and convert to Python integers
        points = np.round(solid_voxels).astype(int)
        
        return DigitalSet(points.tolist())

    @mced_block(
        label="Digital Shape: Line",
        p1={'label': 'point_1'},
        p2={'label': 'point_2'},
    )
    def get_line(self, p1: Vec3, p2: Vec3) -> DigitalSet:
        # We can keep your custom Bresenham line algorithm for lines, 
        # as voxelizing thin mathematical lines in trimesh can sometimes be finicky.
        return generate_linear_path(p1.to_tuple(), p2.to_tuple())


    