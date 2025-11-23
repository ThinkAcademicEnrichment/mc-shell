import numpy as np
import math
from collections import deque

class DigitalSet:
    """
    A discrete set of integer coordinates (voxels) in 3D space.
    Supports set arithmetic, affine transformations, and morphology.
    """
    def __init__(self, voxels=None):
        # Store as a set of tuples for O(1) lookup and uniqueness
        if isinstance(voxels, DigitalSet):
            self.voxels = voxels.voxels.copy()
        else:
            self.voxels = set(tuple(v) for v in voxels) if voxels else set()

    def __iter__(self):
        return iter(sorted(list(self.voxels)))

    def __len__(self):
        return len(self.voxels)

    def add(self, voxel):
        self.voxels.add(tuple(voxel))

    def to_list(self):
        return sorted(list(self.voxels))

    # --- Set Operations ---
    def union(self, other):
        return DigitalSet(self.voxels.union(other.voxels))

    def intersection(self, other):
        return DigitalSet(self.voxels.intersection(other.voxels))

    def difference(self, other):
        return DigitalSet(self.voxels.difference(other.voxels))

    # --- Affine Transformations ---
    def translate(self, dx, dy, dz):
        """
        Returns a new DigitalSet shifted by (dx, dy, dz).
        """
        new_voxels = { (x + int(dx), y + int(dy), z + int(dz)) for x, y, z in self.voxels }
        return DigitalSet(new_voxels)

    def shear(self, axis_primary, axis_secondary, factor):
        """
        Shears the set.
        Example: axis_primary='x', axis_secondary='y', factor=0.5
        New X = Old X + floor(0.5 * Old Y)
        This transformation is bijective (information preserving).
        """
        idx_p = {'x': 0, 'y': 1, 'z': 2}[axis_primary]
        idx_s = {'x': 0, 'y': 1, 'z': 2}[axis_secondary]

        new_voxels = set()
        for v in self.voxels:
            coords = list(v)
            shift = math.floor(coords[idx_s] * factor)
            coords[idx_p] += shift
            new_voxels.add(tuple(coords))

        return DigitalSet(new_voxels)

    # --- Morphology ---
    def dilate(self, connectivity=6):
        """
        Expands the set by adding neighbors.
        Equivalent to Union(Set, Neighbors(Set)).
        """
        offsets = self._get_connectivity_offsets(connectivity)
        new_voxels = set(self.voxels)
        for x, y, z in self.voxels:
            for dx, dy, dz in offsets:
                new_voxels.add((x + dx, y + dy, z + dz))
        return DigitalSet(new_voxels)

    def erode(self, connectivity=6):
        """
        Shrinks the set by removing voxels that touch the "outside".
        """
        offsets = self._get_connectivity_offsets(connectivity)
        new_voxels = set()
        for x, y, z in self.voxels:
            is_interior = True
            for dx, dy, dz in offsets:
                if (x + dx, y + dy, z + dz) not in self.voxels:
                    is_interior = False
                    break
            if is_interior:
                new_voxels.add((x, y, z))
        return DigitalSet(new_voxels)

    def shell(self, thickness=1):
        """
        Returns the hollow shell of the object.
        Shell = Set - Erode(Set)
        """
        eroded = self
        for _ in range(thickness):
            eroded = eroded.erode()
        return self.difference(eroded)

    # --- Complex Generation ---
    def extrude(self, vector):
        """
        Sweeps the current set along the given vector (vx, vy, vz).
        Returns a new DigitalSet representing the volume.
        Technically: The Minkowski Sum of self and Line(0, vector).
        """
        vx, vy, vz = vector
        path = generate_linear_path((0,0,0), (vx, vy, vz))

        new_voxels = set()
        for px, py, pz in path:
            # Translate the entire base set to this point on the path
            for vx, vy, vz in self.voxels:
                new_voxels.add((vx + px, vy + py, vz + pz))

        return DigitalSet(new_voxels)

    def _get_connectivity_offsets(self, connectivity):
        if connectivity == 6:
            return [(1,0,0), (-1,0,0), (0,1,0), (0,-1,0), (0,0,1), (0,0,-1)]
        elif connectivity == 26:
            return [(x,y,z) for x in (-1,0,1) for y in (-1,0,1) for z in (-1,0,1) if not (x==0 and y==0 and z==0)]
        return []


# --- Primitive Generators ---

def generate_linear_path(p1, p2):
    """
    3D Bresenham Algorithm. Generates a 26-connected line between p1 and p2.
    Returns a list of coordinates.
    """
    x1, y1, z1 = map(int, p1)
    x2, y2, z2 = map(int, p2)

    points = []
    dx = abs(x2 - x1)
    dy = abs(y2 - y1)
    dz = abs(z2 - z1)

    xs = 1 if x2 > x1 else -1
    ys = 1 if y2 > y1 else -1
    zs = 1 if z2 > z1 else -1

    # Driving axis is X
    if dx >= dy and dx >= dz:
        p1 = 2 * dy - dx
        p2 = 2 * dz - dx
        while x1 != x2:
            points.append((x1, y1, z1))
            x1 += xs
            if p1 >= 0:
                y1 += ys
                p1 -= 2 * dx
            if p2 >= 0:
                z1 += zs
                p2 -= 2 * dx
            p1 += 2 * dy
            p2 += 2 * dz
    # Driving axis is Y
    elif dy >= dx and dy >= dz:
        p1 = 2 * dx - dy
        p2 = 2 * dz - dy
        while y1 != y2:
            points.append((x1, y1, z1))
            y1 += ys
            if p1 >= 0:
                x1 += xs
                p1 -= 2 * dy
            if p2 >= 0:
                z1 += zs
                p2 -= 2 * dy
            p1 += 2 * dx
            p2 += 2 * dz
    # Driving axis is Z
    else:
        p1 = 2 * dy - dz
        p2 = 2 * dx - dz
        while z1 != z2:
            points.append((x1, y1, z1))
            z1 += zs
            if p1 >= 0:
                y1 += ys
                p1 -= 2 * dz
            if p2 >= 0:
                x1 += xs
                p2 -= 2 * dz
            p1 += 2 * dy
            p2 += 2 * dx

    points.append((x1, y1, z1))
    return points

def generate_metric_ball(center, radius, metric='euclidean'):
    """
    Generates a DigitalSet based on a distance metric.
    metrics: 'euclidean' (Sphere), 'manhattan' (Octahedron), 'chebyshev' (Cube)
    """
    cx, cy, cz = center
    r = int(radius)
    voxels = set()

    # Bounding box optimization
    for x in range(cx - r, cx + r + 1):
        for y in range(cy - r, cy + r + 1):
            for z in range(cz - r, cz + r + 1):
                dx, dy, dz = abs(x-cx), abs(y-cy), abs(z-cz)

                dist = 0
                if metric == 'euclidean':
                    dist = math.sqrt(dx*dx + dy*dy + dz*dz)
                elif metric == 'manhattan':
                    dist = dx + dy + dz
                elif metric == 'chebyshev':
                    dist = max(dx, dy, dz)

                if dist <= r:
                    voxels.add((x, y, z))

    return DigitalSet(voxels)

def generate_digital_plane_coordinates(normal, point_on_plane, outer_rect_dims):
    """
    Generates a Standard Digital Plane (6-connected) using the Arithmetic Definition.
    Returns a DigitalSet.
    """
    # (This assumes the finalized arithmetic logic from the previous step)
    coords = set()
    n = np.array(normal, dtype=float)
    norm_len = np.linalg.norm(n)
    if norm_len == 0: return DigitalSet()
    n /= norm_len

    arithmetic_thickness = np.sum(np.abs(n))
    thickness_epsilon = 1e-9

    point = np.array(point_on_plane, dtype=float)
    width, height = outer_rect_dims

    if np.allclose(n, [0, 1, 0]) or np.allclose(n, [0, -1, 0]):
        u = np.array([1, 0, 0]); v = np.array([0, 0, 1])
    else:
        u = np.cross(n, [0, 1, 0])
        if np.linalg.norm(u) < 1e-6: u = np.cross(n, [0, 0, 1])
        u /= np.linalg.norm(u); v = np.cross(n, u); v /= np.linalg.norm(v)

    half_w_vec = u * (width / 2.0); half_h_vec = v * (height / 2.0)
    corners = [point + half_w_vec + half_h_vec, point + half_w_vec - half_h_vec,
               point - half_w_vec + half_h_vec, point - half_w_vec - half_h_vec]

    padding = 2
    min_bounds = np.floor(np.min(corners, axis=0)).astype(int) - padding
    max_bounds = np.ceil(np.max(corners, axis=0)).astype(int) + padding
    boundary_u = width / 2.0 + 1e-9
    boundary_v = height / 2.0 + 1e-9

    for x in range(min_bounds[0], max_bounds[0] + 1):
        for y in range(min_bounds[1], max_bounds[1] + 1):
            for z in range(min_bounds[2], max_bounds[2] + 1):
                voxel_center = np.array([x, y, z], dtype=float)
                dist = np.dot(voxel_center - point, n)
                threshold = (arithmetic_thickness / 2.0) + thickness_epsilon

                if -threshold <= dist < threshold:
                    closest_point_on_plane = voxel_center - dist * n
                    vec_from_center = closest_point_on_plane - point
                    proj_u = np.dot(vec_from_center, u)
                    proj_v = np.dot(vec_from_center, v)
                    if abs(proj_u) <= boundary_u and abs(proj_v) <= boundary_v:
                        coords.add((x, y, z))

    return DigitalSet(coords)