import numpy as np
from collections import deque

class DigitalGeometryValidator:
    """
    Validates voxel sets against theorems of Digital Geometry.
    """

    @staticmethod
    def validate_arithmetic_plane(voxels, normal, thickness_type='standard'):
        """
        Validates that every voxel in the set satisfies the arithmetic definition
        of a digital plane relative to the given normal.

        For a normal N=(a,b,c), the thickness (w) in Euclidean space is:
        Standard (6-connected) w = (|a|+|b|+|c|) / ||N||
        Naive (26-connected)   w = max(|a|,|b|,|c|) / ||N||
        """
        if not voxels:
            return False, "Voxel set is empty"

        # Convert normal to numpy array and normalize
        N = np.array(normal, dtype=float)
        norm_len = np.linalg.norm(N)
        if norm_len == 0:
            return False, "Zero vector normal"

        unit_N = N / norm_len

        # Project all voxels onto the normal vector
        # Projection p = V . unit_N
        projections = [np.dot(np.array(v), unit_N) for v in voxels]

        min_proj = min(projections)
        max_proj = max(projections)
        actual_thickness = max_proj - min_proj

        # Calculate Theoretical Thickness limit
        # The validator assumes the generated plane should not exceed the
        # theoretical thickness of a digital plane with this normal.
        if thickness_type == 'standard':
            # Sum of absolute components of the unit normal
            theoretical_thickness = np.sum(np.abs(unit_N))
        elif thickness_type == 'naive':
            # Max absolute component of the unit normal
            theoretical_thickness = np.max(np.abs(unit_N))
        else:
            return False, "Unknown thickness type"

        # Allow a small epsilon for floating point arithmetic
        # We check if the actual thickness is within the theoretical limit.
        # Note: A discrete plane might be slightly thinner than the limit depending
        # on integer sampling, but it must not be significantly thicker.
        epsilon = 1e-9

        if actual_thickness > theoretical_thickness + epsilon:
            return False, f"Plane is too thick. Actual: {actual_thickness:.4f}, Limit: {theoretical_thickness:.4f}"

        return True, f"Arithmetic property satisfied (Thick: {actual_thickness:.3f} <= {theoretical_thickness:.3f})"

    @staticmethod
    def validate_connectivity(voxels, connectivity=6):
        """
        Validates that the set of voxels is fully connected (single component).
        connectivity: 6 (faces), 18 (edges), or 26 (vertices)
        """
        if not voxels:
            return False, "Empty voxel set"

        # Convert list to set for O(1) lookup
        voxel_set = set(tuple(v) for v in voxels)
        start_node = next(iter(voxel_set))

        queue = deque([start_node])
        visited = {start_node}

        # Neighbor offsets
        if connectivity == 6:
            offsets = [
                (1,0,0), (-1,0,0), (0,1,0), (0,-1,0), (0,0,1), (0,0,-1)
            ]
        elif connectivity == 26:
            offsets = [
                (dx, dy, dz)
                for dx in (-1,0,1) for dy in (-1,0,1) for dz in (-1,0,1)
                if not (dx==0 and dy==0 and dz==0)
            ]
        else:
            raise ValueError("Only 6 or 26 connectivity supported")

        while queue:
            curr = queue.popleft()
            cx, cy, cz = curr

            for dx, dy, dz in offsets:
                neighbor = (cx + dx, cy + dy, cz + dz)
                if neighbor in voxel_set and neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)

        if len(visited) != len(voxel_set):
            return False, f"Disconnected components found. Visited {len(visited)} of {len(voxel_set)} voxels."

        return True, "Set is fully connected"