from typing import List
from blockapily import mced_block
from mcshell.mcturtle import DigitalSet
from mcshell.mcactions_base import MCActionsBase
from mcshell.constants import Vec3
import numpy as np

class DigitalSetActions(MCActionsBase):
    """
    A stateless facade providing a block-friendly interface to DigitalSet operations.
    These methods map perfectly to Value blocks in Blockly (Data-Flow paradigm).
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    # -------------------------------------------------------------------------
    # Creation & Utilities
    # -------------------------------------------------------------------------

    @mced_block(
        label="Empty Set",
    )
    def empty_set(self) -> DigitalSet:
        """
        Creates a new, completely empty DigitalSet.
        """
        return DigitalSet()

    @mced_block(
        label="Add Voxel",
        target_set={'label': "Set"},
        x={'label': "x"},
        y={'label': "y"},
        z={'label': "z"}
    )
    def add_voxel(self, target_set: DigitalSet, x: int, y: int, z: int) -> DigitalSet:
        """
        Adds a single point to a set.
        Maintains immutability by cloning the set before adding the voxel.
        """
        new_set = DigitalSet(target_set)
        new_set.add((x, y, z))
        return new_set

    # -------------------------------------------------------------------------
    # Binary Operations (Standard CSG)
    # -------------------------------------------------------------------------

    @mced_block(
        label="Union",
        set_a={'label': "Set A"},
        set_b={'label': "Set B"}
    )
    def union(self, set_a: DigitalSet, set_b: DigitalSet) -> DigitalSet:
        """
        Combines two Digital Sets, returning a new set containing all points from both.
        """
        return set_a.union(set_b)

    @mced_block(
        label="Intersection",
        set_a={'label': "Set A"},
        set_b={'label': "Set B"}
    )
    def intersection(self, set_a: DigitalSet, set_b: DigitalSet) -> DigitalSet:
        """
        Returns a new Digital Set containing only points that exist in BOTH Set A and Set B.
        """
        return set_a.intersection(set_b)

    @mced_block(
        label="Difference",
        set_a={'label': "Set A"},
        set_b={'label': "Set B"}
    )
    def difference(self, set_a: DigitalSet, set_b: DigitalSet) -> DigitalSet:
        """
        Returns a new Digital Set containing points from Set A that are NOT in Set B.
        """
        return set_a.difference(set_b)

    @mced_block(
        label="Symmetric Difference",
        set_a={'label': "Set A"},
        set_b={'label': "Set B"}
    )
    def symmetric_difference(self, set_a: DigitalSet, set_b: DigitalSet) -> DigitalSet:
        """
        Returns a new Digital Set containing points in either Set A or Set B, but NOT both.
        """
        if hasattr(set_a, 'symmetric_difference'):
            return set_a.symmetric_difference(set_b)
        # Fallback implemented purely via other set operations if missing natively
        return set_a.union(set_b).difference(set_a.intersection(set_b))

    # -------------------------------------------------------------------------
    # N-ary Operations
    # -------------------------------------------------------------------------

    @mced_block(
        label="Union All",
        sets={'label': "Sets"}
    )
    def union_all(self, sets: List[DigitalSet]) -> DigitalSet:
        """
        Combines a list of Digital Sets into a single Set.
        Used for Blockly mutator blocks taking N inputs.
        """
        if not sets:
            return DigitalSet()

        result = sets[0]
        for s in sets[1:]:
            result = result.union(s)

        return result

    # -------------------------------------------------------------------------
    # Spatial Transformations
    # -------------------------------------------------------------------------

    @mced_block(
        label="Translate",
        target_set={'label': "Set"},
        dx={'label': "dx"},
        dy={'label': "dy"},
        dz={'label': "dz"}
    )
    def translate(self, target_set: DigitalSet, dx: int, dy: int, dz: int) -> DigitalSet:
        """
        Moves a Digital Set by a given (dx, dy, dz) offset.
        """
        return target_set.translate(dx, dy, dz)

    @mced_block(
        label='Shear',
        target_set={'label': "Set"},
        axis_primary={'label': 'Primary Axis'},
        axis_secondary={'label': 'Secondary Axis'},
        factor={'label': 'Factor'}
    )
    def shear(self, target_set: DigitalSet, axis_primary: 'Axis', axis_secondary: 'Axis', factor: float) -> DigitalSet:
        """
        Shear a Digital Set along given axes by a specific factor.
        """
        return target_set.shear(axis_primary, axis_secondary, factor)

    @mced_block(
        label="Scale",
        target_set={'label': "Set"},
        factor={'label': "Factor"}
    )
    def scale(self, target_set: DigitalSet, factor: float) -> DigitalSet:
        """
        Scales a Digital Set by multiplying voxel coordinates.
        """
        if hasattr(target_set, 'scale'):
            return target_set.scale(factor)
        return target_set # Fallback if missing

    @mced_block(
        label="Rotate",
        target_set={'label': "Set"},
        axis={'label': "Axis"},
        angle={'label': "Angle (deg)"}
    )
    def rotate(self, target_set: DigitalSet, axis: 'Axis', angle: float) -> DigitalSet:
        """
        Rotates a Digital Set around a specific axis.
        """
        if hasattr(target_set, 'rotate'):
            return target_set.rotate(axis, angle)
        return target_set

    # -------------------------------------------------------------------------
    # Morphological Operations
    # -------------------------------------------------------------------------

    @mced_block(
        label="Dilate",
        target_set={'label': "Set"}
    )
    def dilate(self, target_set: DigitalSet) -> DigitalSet:
        """
        Expands the Digital Set by adding a layer of voxels to its boundary.
        """
        return target_set.dilate()

    @mced_block(
        label="Erode",
        target_set={'label': "Set"}
    )
    def erode(self, target_set: DigitalSet) -> DigitalSet:
        """
        Shrinks the Digital Set by removing the outermost layer of voxels.
        """
        return target_set.erode()

    @mced_block(
        label="Shell",
        target_set={'label': "Set"}
    )
    def shell(self, target_set: DigitalSet) -> DigitalSet:
        """
        Returns the hollow boundary (shell) of the Digital Set.
        """
        return target_set.shell()

    @mced_block(
        label="Extrude",
        target_set={'label': "Set"},
        dx={'label': "dx"},
        dy={'label': "dy"},
        dz={'label': "dz"}
    )
    def extrude(self, target_set: DigitalSet, dx: int, dy: int, dz: int) -> DigitalSet:
        """
        Extrudes (sweeps) the Digital Set along a directional vector.
        """
        return target_set.extrude(dx, dy, dz)

    # -------------------------------------------------------------------------
    # Information & Logic
    # -------------------------------------------------------------------------

    @mced_block(
        label="Is Empty",
        target_set={'label': "Set"}
    )
    def is_empty(self, target_set: DigitalSet) -> bool:
        """
        Checks if a Digital Set contains zero points.
        """
        return len(target_set) == 0

    @mced_block(
        label="Voxel Count",
        target_set={'label': "Set"}
    )
    def voxel_count(self, target_set: DigitalSet) -> int:
        """
        Returns the total number of blocks/points in the Digital Set.
        """
        return len(target_set)

    @mced_block(
        label="Get Voxels",
        target_set={'label': "Set"}
    )
    def get_voxels(self, target_set: DigitalSet) -> list:
        """
        Returns the blocks/points in the Digital Set as a list of vectors.
        """
        return list(map(lambda x:Vec3(*x),target_set.voxels))

    @mced_block(
        label="Get Corners",
        target_set={'label': "Set"},
        normal={'label': "Normal",'shadow':'<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>',},
        epsilon={'label': 'Epsilon','shadow':'<shadow type="math_number"><field name="NUM">1.0</field></shadow>'}
    
    )
    def corners(self, target_set:DigitalSet, normal:Vec3=(0, 1, 0), epsilon:float=1.0) -> DigitalSet:
        """
        Finds the corner vertices for each 2D level curve slice of the DigitalSet.

        :param target_set: The DigitalSet representing the shape  
        :param normal: The unit normal vector defining the slice planes.
        :param epsilon: The distance tolerance for the Douglas-Peucker algorithm.
        :return: A new DigitalSet containing only the corner voxels.
        """
        if not target_set.voxels:
            return DigitalSet()
            
        normal_vec = np.array(normal.to_tuple(), dtype=float)
        voxel_array = np.array(list(target_set.voxels))
        
        # 1. Vectorized dot product to group all voxels into planar slices instantly
        levels = np.dot(voxel_array, normal_vec)
        
        # Rounding slightly prevents floating-point inaccuracies from splitting a single slice
        unique_levels = np.unique(np.round(levels, 5))
        
        corner_set = DigitalSet()

        for level in unique_levels:
            # Extract voxels for this specific slice
            mask = np.isclose(levels, level, atol=1e-5)
            slice_voxels = voxel_array[mask]
            
            # Convert back to a set of tuples for your boundary function
            slice_tuples = {tuple(v) for v in slice_voxels}
            
            # 2. Extract boundary paths (now returns a list of paths)
            ordered_boundaries = self._get_ordered_boundary(slice_tuples, normal)
            
            # 3. Simplify each island's boundary independently
            for ordered_boundary in ordered_boundaries:
                if not ordered_boundary or len(ordered_boundary) <= 2:
                    for v in (ordered_boundary or []):
                        corner_set.add(v)
                    continue

                boundary_arr = np.array(ordered_boundary)
                slice_corners = self._douglas_peucker_np(boundary_arr, epsilon)
                
                for corner in slice_corners:
                    corner_set.add(corner)

        return corner_set

    def _douglas_peucker_np(self, points, epsilon):
        """
        Recursively simplifies an ordered array of 3D points using NumPy.
        """
        if len(points) < 3:
            return points

        a = points[0]
        b = points[-1]
        
        # Calculate distances from all intermediate points to the line segment AB
        intermediate_points = points[1:-1]
        
        # Handle the edge case where the boundary is a closed loop (start and end are the same).
        # If A and B are the same, the distance is just the point-to-point distance to A.
        if np.allclose(a, b):
            distances = np.linalg.norm(intermediate_points - a, axis=1)
        else:
            # Vectorized cross-product for perpendicular point-to-line distance
            ap = intermediate_points - a
            ab = b - a
            cross_prod = np.cross(ap, ab)
            distances = np.linalg.norm(cross_prod, axis=1) / np.linalg.norm(ab)

        if len(distances) == 0:
            return np.vstack((a, b))

        # Find the point with the maximum distance
        max_idx = np.argmax(distances)
        dmax = distances[max_idx]
        
        # Adjust index by 1 because we sliced points[1:-1]
        actual_idx = max_idx + 1

        # If max distance is greater than tolerance, split and recurse
        if dmax > epsilon:
            rec_results1 = self._douglas_peucker_np(points[:actual_idx + 1], epsilon)
            rec_results2 = self._douglas_peucker_np(points[actual_idx:], epsilon)
            
            # Combine arrays and drop the duplicate middle point
            return np.vstack((rec_results1[:-1], rec_results2))
        else:
            # All intermediate points are within tolerance; discard them
            return np.vstack((a, b)) 


    def _get_ordered_boundary(self, slice_tuples, normal):
        """
        Extracts the outer boundaries of a 2D slice, handling multiple disconnected islands.
        
        :return: A list of paths. Each path is a list of (x, y, z) tuples.
        """
        if not slice_tuples:
            return []

        offsets = [(dx, dy, dz) for dx in (-1, 0, 1) for dy in (-1, 0, 1) for dz in (-1, 0, 1) if not (dx == 0 and dy == 0 and dz == 0)]

        # Identify all boundary voxels across all islands
        boundary_voxels = set()
        for x, y, z in slice_tuples:
            neighbor_count = sum(1 for dx, dy, dz in offsets if (x + dx, y + dy, z + dz) in slice_tuples)
            if neighbor_count < 8:
                boundary_voxels.add((x, y, z))

        if not boundary_voxels:
            return []

        all_paths = []
        unvisited = boundary_voxels.copy()

        # OUTER LOOP: Keep going until every boundary voxel is part of a path
        while unvisited:
            # Pick a deterministic starting point for the next new island
            current = min(unvisited)
            current_path = []

            # INNER LOOP: Trace the continuous perimeter of the current island
            while True:
                current_path.append(current)
                unvisited.remove(current)

                orthogonal_neighbors = []
                diagonal_neighbors = []
                
                for dx, dy, dz in offsets:
                    neighbor = (current[0] + dx, current[1] + dy, current[2] + dz)
                    if neighbor in unvisited:
                        dist_sq = dx*dx + dy*dy + dz*dz
                        if dist_sq == 1:
                            orthogonal_neighbors.append(neighbor)
                        elif dist_sq == 2:
                            diagonal_neighbors.append(neighbor)

                if orthogonal_neighbors:
                    current = min(orthogonal_neighbors)
                elif diagonal_neighbors:
                    current = min(diagonal_neighbors)
                else:
                    # Dead end, or loop finished. Break inner loop to start next island.
                    break 

            # Close the loop for this specific island
            if len(current_path) > 2:
                start = current_path[0]
                end = current_path[-1]
                dist_sq = (end[0]-start[0])**2 + (end[1]-start[1])**2 + (end[2]-start[2])**2
                if dist_sq <= 2:
                    current_path.append(start)

            all_paths.append(current_path)

        return all_paths