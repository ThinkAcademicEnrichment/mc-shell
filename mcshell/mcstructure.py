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
    def __init__(self, blocks_map=None, local_origin='min_corner'):
        if blocks_map is None:
            blocks_map = {}
            
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

    # Note: Union handles material conflicts. If 'other' is also a Structure, 
    # its materials will overwrite overlapping spaces from 'self'.
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

    def rotate(self, axis: str, angle_degrees: float):
        if not self.blocks_map:
            return MCStructure()

        # Calculate Centroid
        sum_x = sum(v[0] for v in self.blocks_map.keys())
        sum_y = sum(v[1] for v in self.blocks_map.keys())
        sum_z = sum(v[2] for v in self.blocks_map.keys())
        count = len(self.blocks_map)
        centroid = Vec3(sum_x / count, sum_y / count, sum_z / count)

        # Create the Rotation Matrix
        matrix = Matrix3.identity()
        ax = axis.lower()
        if ax == 'x': matrix = Matrix3.from_euler_angles(pitch_degrees=angle_degrees)
        elif ax == 'y': matrix = Matrix3.from_euler_angles(yaw_degrees=angle_degrees)
        elif ax == 'z': matrix = Matrix3.from_euler_angles(roll_degrees=angle_degrees)

        new_map = {}
        for (x, y, z), block in self.blocks_map.items():
            pos = Vec3(x, y, z)
            rotated_vec = matrix.rotate_around_point(pos, centroid)
            new_key = (int(round(rotated_vec.x)), int(round(rotated_vec.y)), int(round(rotated_vec.z)))
            
            # In case of voxel collision during rounding, the last block evaluated wins
            new_map[new_key] = block

        return MCStructure(new_map)

    # -------------------------------------------------------------------------
    # 3. Generative Operations (Adding new voxels)
    # -------------------------------------------------------------------------

    def extrude(self, vector):
        """Sweeps the structure, dragging the materials along the vector."""
        vx, vy, vz = vector
        path = generate_linear_path((0,0,0), (vx, vy, vz))
        
        new_map = {}
        for px, py, pz in path.voxels:
            for (x, y, z), block in self.blocks_map.items():
                new_map[(x + px, y + py, z + pz)] = block 
                
        return MCStructure(new_map)

    def dilate(self, connectivity=6):
        """
        Grows the structure. Since we don't know what material the new outer 
        shell should be, we default it to a transparent placeholder.
        """
        pure_set = super().dilate(connectivity)
        new_map = {}
        for v in pure_set.voxels:
            # If the voxel was in the original structure, keep its material. 
            # Otherwise, assign the new dilated shell a placeholder.
            new_map[v] = self.blocks_map.get(v, "STRUCTURE_VOID")
            
        return MCStructure(new_map)