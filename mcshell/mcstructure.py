import numpy as np
import math
from mcshell.mcturtle import DigitalSet, generate_linear_path
from mcshell.Vec3 import Vec3
from mcshell.Matrix3 import Matrix3

class MCStructure(DigitalSet):
    """
    A spatial structure containing Minecraft block data.
    
    Subclasses DigitalSet to automatically inherit all boolean (CSG) 
    and morphological geometry operations, preserving block materials.
    """
    def __init__(self, blocks_map=None, local_origin=None):
        if blocks_map is None:
            blocks_map = {}
            
        # Default offset is 0,0,0 unless a local_origin shift occurs
        self.world_offset = Vec3(0, 0, 0)
        
        if local_origin and blocks_map:
            coords = np.array(list(blocks_map.keys()))
            
            if local_origin == 'centroid':
                # Round mean to nearest integer to stay on voxel grid
                center = np.round(coords.mean(axis=0)).astype(int)
            elif local_origin == 'min_corner':
                # Bottom-front-left corner. Great for structures sitting on the ground.
                center = coords.min(axis=0)
            else:
                center = np.array(local_origin, dtype=int)
                
            # Save the offset so we know where this structure came from in the world!
            self.world_offset = Vec3(int(center[0]), int(center[1]), int(center[2]))
                
            # Shift all coordinates so the chosen center becomes (0,0,0)
            self.blocks_map = {
                (int(x - center[0]), int(y - center[1]), int(z - center[2])): block
                for (x, y, z), block in blocks_map.items()
            }
        else:
            self.blocks_map = blocks_map
            
        # Initialize the parent DigitalSet using the localized keys
        super().__init__(list(self.blocks_map.keys()))

    def __repr__(self):
        return f"<MCStructure with {len(self.blocks_map)} blocks>"
        
    def get_block_at(self, x, y, z):
        """Safely retrieve a block at a specific local coordinate."""
        return self.blocks_map.get((int(x), int(y), int(z)), "AIR")

    # -------------------------------------------------------------------------
    # 1. Filtering Operations (Leverages super() for math, restores materials)
    # -------------------------------------------------------------------------

    def intersection(self, other):
        pure_set = super().intersection(other)
        # Keep materials only for the voxels that survived the intersection
        survivors = {v: self.blocks_map[v] for v in pure_set.voxels if v in self.blocks_map}
        return MCStructure(survivors)

    def difference(self, other):
        pure_set = super().difference(other)
        survivors = {v: self.blocks_map[v] for v in pure_set.voxels if v in self.blocks_map}
        return MCStructure(survivors)

    def erode(self, connectivity=6):
        pure_set = super().erode(connectivity)
        survivors = {v: self.blocks_map[v] for v in pure_set.voxels if v in self.blocks_map}
        return MCStructure(survivors)

    def shell(self, thickness=1):
        pure_set = super().shell(thickness)
        survivors = {v: self.blocks_map[v] for v in pure_set.voxels if v in self.blocks_map}
        return MCStructure(survivors)

    def union(self, other):
        new_map = self.blocks_map.copy()
        if hasattr(other, 'blocks_map'):
            new_map.update(other.blocks_map)
        else:
            # Unioning with a pure geometry set defaults the new geometry to a void
            for v in other.voxels:
                if v not in new_map:
                    new_map[v] = "STRUCTURE_VOID"
        return MCStructure(new_map)

    # -------------------------------------------------------------------------
    # 2. Transformation Operations (Must be rewritten to carry materials)
    # -------------------------------------------------------------------------

    def translate(self, dx, dy, dz):
        new_map = {
            (int(x + dx), int(y + dy), int(z + dz)): block
            for (x, y, z), block in self.blocks_map.items()
        }
        return MCStructure(new_map)

    def shear(self, axis_primary, axis_secondary, factor):
        idx_p = {'x': 0, 'y': 1, 'z': 2}[axis_primary.lower()]
        idx_s = {'x': 0, 'y': 1, 'z': 2}[axis_secondary.lower()]

        new_map = {}
        for (x, y, z), block in self.blocks_map.items():
            coords = [x, y, z]
            shift = math.floor(coords[idx_s] * factor)
            coords[idx_p] += shift
            new_map[tuple(coords)] = block
            
        return MCStructure(new_map)

    def rotate(self, axis: str, angle_degrees: float, rotation_point: Vec3 = None ):
        if not self.blocks_map:
            return MCStructure()

        sum_x = sum(v[0] for v in self.blocks_map.keys())
        sum_y = sum(v[1] for v in self.blocks_map.keys())
        sum_z = sum(v[2] for v in self.blocks_map.keys())
        count = len(self.blocks_map)
        if rotation_point is None:
            # rotate about the centroid
            rotation_point = Vec3(sum_x / count, sum_y / count, sum_z / count)

        matrix = Matrix3.identity()
        ax = axis.lower()
        if ax == 'x': matrix = Matrix3.from_euler_angles(pitch_degrees=angle_degrees)
        elif ax == 'y': matrix = Matrix3.from_euler_angles(yaw_degrees=angle_degrees)
        elif ax == 'z': matrix = Matrix3.from_euler_angles(roll_degrees=angle_degrees)

        new_map = {}
        for (x, y, z), block in self.blocks_map.items():
            pos = Vec3(x, y, z)
            rotated_vec = matrix.rotate_around_point(pos, rotation_point)
            new_key = (int(round(rotated_vec.x)), int(round(rotated_vec.y)), int(round(rotated_vec.z)))
            
            # In case of voxel collision during rounding, the last block evaluated wins
            new_map[new_key] = block

        return MCStructure(new_map)

    def scale_volume(self, volume_factor: int) -> 'MCStructure':
        """
        Scales the structure so its total volume is approximately multiplied
        by the volume_factor, using nearest-neighbor interpolation to preserve 
        materials without gaps.
        """
        if not self.blocks_map or volume_factor <= 0:
            return MCStructure()
        if volume_factor == 1:
            return MCStructure(self.blocks_map.copy())

        # 1. The linear scale factor is the cube root of the volume multiplier
        k = volume_factor ** (1/3)

        # 2. Find the original bounding box
        coords = np.array(list(self.blocks_map.keys()))
        min_b = coords.min(axis=0)
        max_b = coords.max(axis=0)

        # 3. Calculate the target bounding box limits
        t_min = np.floor(min_b * k).astype(int)
        t_max = np.ceil((max_b + 1) * k).astype(int) - 1

        new_map = {}
        # 4. Inverse Mapping: Iterate over the new target space and sample the original space
        for tx in range(t_min[0], t_max[0] + 1):
            for ty in range(t_min[1], t_max[1] + 1):
                for tz in range(t_min[2], t_max[2] + 1):
                    # Map the target coordinate backward to the original space
                    ox = int(math.floor(tx / k))
                    oy = int(math.floor(ty / k))
                    oz = int(math.floor(tz / k))

                    original_key = (ox, oy, oz)
                    if original_key in self.blocks_map:
                        new_map[(tx, ty, tz)] = self.blocks_map[original_key]

        structure = MCStructure(new_map)
        # Preserve the absolute world offset in case we need to anchor it again
        structure.world_offset = self.world_offset
        return structure

    def with_local_origin(self, new_world_origin: Vec3) -> 'MCStructure':
        """
        Shifts the local coordinate system so that the specified absolute 
        world coordinate becomes the new local (0,0,0) anchor point.
        """
        if not self.blocks_map:
            return MCStructure()
            
        new_offset = Vec3(int(new_world_origin.x), int(new_world_origin.y), int(new_world_origin.z))
        
        # Calculate how far we need to shift the internal local coordinates
        # to line up with the new origin anchor
        shift_x = self.world_offset.x - new_offset.x
        shift_y = self.world_offset.y - new_offset.y
        shift_z = self.world_offset.z - new_offset.z
        
        new_blocks_map = {
            (int(x + shift_x), int(y + shift_y), int(z + shift_z)): block
            for (x, y, z), block in self.blocks_map.items()
        }
        
        # Create the new structure, bypass auto-localization, and assign the new offset
        new_structure = MCStructure(new_blocks_map, local_origin=None)
        new_structure.world_offset = new_offset
        return new_structure

    # -------------------------------------------------------------------------
    # 3. Generative Operations (Adding new voxels)
    # -------------------------------------------------------------------------

    def extrude(self, vector):
        vx, vy, vz = vector
        path = generate_linear_path((0,0,0), (vx, vy, vz))
        
        new_map = {}
        for px, py, pz in path.voxels:
            for (x, y, z), block in self.blocks_map.items():
                new_map[(x + px, y + py, z + pz)] = block 
                
        return MCStructure(new_map)

    def dilate(self, connectivity=6):
        pure_set = super().dilate(connectivity)
        new_map = {}
        for v in pure_set.voxels:
            new_map[v] = self.blocks_map.get(v, "STRUCTURE_VOID")
        return MCStructure(new_map)