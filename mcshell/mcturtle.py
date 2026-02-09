import numpy as np
import math
from collections import deque

class DigitalSet:
    """
    A discrete set of integer coordinates (voxels) in 3D space.
    Supports set arithmetic, affine transformations, and morphology.
    """
    def __init__(self, voxels=None):
        if isinstance(voxels, DigitalSet):
            self.voxels = voxels.voxels.copy()
        elif voxels:
            # Ensure all coordinates are standard Python ints to avoid numpy type issues
            self.voxels = { (int(v[0]), int(v[1]), int(v[2])) for v in voxels }
        else:
            self.voxels = set()

    def __iter__(self):
        return iter(sorted(list(self.voxels)))

    def __len__(self):
        return len(self.voxels)

    def add(self, voxel):
        self.voxels.add((int(voxel[0]), int(voxel[1]), int(voxel[2])))

    def to_list(self):
        return sorted(list(self.voxels))

    # --- Set Operations ---
    def union(self, other):
        return DigitalSet(self.voxels.union(other.voxels))

    def intersection(self, other):
        return DigitalSet(self.voxels.intersection(other.voxels))

    def difference(self, other):
        return DigitalSet(self.voxels.difference(other.voxels))

    # --- Affine Transformations (Local) ---
    def translate(self, dx, dy, dz):
        new_voxels = { (x + int(dx), y + int(dy), z + int(dz)) for x, y, z in self.voxels }
        return DigitalSet(new_voxels)

    def shear(self, axis_primary, axis_secondary, factor):
        idx_p = {'x': 0, 'y': 1, 'z': 2}[axis_primary.lower()]
        idx_s = {'x': 0, 'y': 1, 'z': 2}[axis_secondary.lower()]

        new_voxels = set()
        for v in self.voxels:
            coords = list(v)
            shift = math.floor(coords[idx_s] * factor)
            coords[idx_p] += shift
            new_voxels.add(tuple(coords))
        return DigitalSet(new_voxels)

    # --- Morphology ---
    def dilate(self, connectivity=6):
        offsets = self._get_connectivity_offsets(connectivity)
        new_voxels = set(self.voxels)
        for x, y, z in self.voxels:
            for dx, dy, dz in offsets:
                new_voxels.add((x + dx, y + dy, z + dz))
        return DigitalSet(new_voxels)

    def erode(self, connectivity=6):
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
        eroded = self
        for _ in range(thickness):
            eroded = eroded.erode()
        return self.difference(eroded)

    def extrude(self, vector):
        vx, vy, vz = vector
        path = generate_linear_path((0,0,0), (vx, vy, vz))
        new_voxels = set()
        for px, py, pz in path:
            for vx, vy, vz in self.voxels:
                new_voxels.add((vx + px, vy + py, vz + pz))
        return DigitalSet(new_voxels)

    def _get_connectivity_offsets(self, connectivity):
        if connectivity == 6:
            return [(1,0,0), (-1,0,0), (0,1,0), (0,-1,0), (0,0,1), (0,0,-1)]
        elif connectivity == 26:
            return [(x,y,z) for x in (-1,0,1) for y in (-1,0,1) for z in (-1,0,1) if not (x==0 and y==0 and z==0)]
        return []

# --- Generators ---

def generate_linear_path(p1, p2):
    x1, y1, z1 = map(int, p1)
    x2, y2, z2 = map(int, p2)
    points = []
    points.append((x1, y1, z1))

    dx, dy, dz = abs(x2 - x1), abs(y2 - y1), abs(z2 - z1)
    xs, ys, zs = (1 if x2 > x1 else -1), (1 if y2 > y1 else -1), (1 if z2 > z1 else -1)

    if dx >= dy and dx >= dz:
        p1_err, p2_err = 2 * dy - dx, 2 * dz - dx
        while x1 != x2:
            x1 += xs
            if p1_err >= 0: y1 += ys; p1_err -= 2 * dx
            if p2_err >= 0: z1 += zs; p2_err -= 2 * dx
            p1_err += 2 * dy; p2_err += 2 * dz
            points.append((x1, y1, z1))
    elif dy >= dx and dy >= dz:
        p1_err, p2_err = 2 * dx - dy, 2 * dz - dy
        while y1 != y2:
            y1 += ys
            if p1_err >= 0: x1 += xs; p1_err -= 2 * dy
            if p2_err >= 0: z1 += zs; p2_err -= 2 * dy
            p1_err += 2 * dx; p2_err += 2 * dz
            points.append((x1, y1, z1))
    else:
        p1_err, p2_err = 2 * dy - dz, 2 * dx - dz
        while z1 != z2:
            z1 += zs
            if p1_err >= 0: y1 += ys; p1_err -= 2 * dz
            if p2_err >= 0: x1 += xs; p2_err -= 2 * dz
            p1_err += 2 * dy; p2_err += 2 * dx
            points.append((x1, y1, z1))
    return DigitalSet(points)

def generate_metric_ball(center, radius, metric='euclidean'):
    cx, cy, cz = center
    r = int(radius)
    voxels = set()
    for x in range(cx - r, cx + r + 1):
        for y in range(cy - r, cy + r + 1):
            for z in range(cz - r, cz + r + 1):
                dx, dy, dz = abs(x-cx), abs(y-cy), abs(z-cz)
                dist = 0
                if metric == 'euclidean': dist = math.sqrt(dx*dx + dy*dy + dz*dz)
                elif metric == 'manhattan': dist = dx + dy + dz
                elif metric == 'chebyshev': dist = max(dx, dy, dz)
                if dist <= r: voxels.add((x, y, z))
    return DigitalSet(voxels)

def generate_digital_plane_coordinates(normal, point_on_plane, outer_rect_dims):
    coords = set()
    n = np.array(normal, dtype=float)
    if np.linalg.norm(n) == 0: return DigitalSet()
    n /= np.linalg.norm(n)

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
    corners = [point+half_w_vec+half_h_vec, point+half_w_vec-half_h_vec, point-half_w_vec+half_h_vec, point-half_w_vec-half_h_vec]
    padding = 2
    min_bounds = np.floor(np.min(corners, axis=0)).astype(int) - padding
    max_bounds = np.ceil(np.max(corners, axis=0)).astype(int) + padding
    boundary_u, boundary_v = width / 2.0 + 1e-9, height / 2.0 + 1e-9

    for x in range(min_bounds[0], max_bounds[0] + 1):
        for y in range(min_bounds[1], max_bounds[1] + 1):
            for z in range(min_bounds[2], max_bounds[2] + 1):
                voxel_center = np.array([x, y, z], dtype=float)
                dist = np.dot(voxel_center - point, n)
                threshold = (arithmetic_thickness / 2.0) + thickness_epsilon
                if -threshold <= dist < threshold:
                    closest = voxel_center - dist * n
                    vec = closest - point
                    proj_u, proj_v = np.dot(vec, u), np.dot(vec, v)
                    if abs(proj_u) <= boundary_u and abs(proj_v) <= boundary_v:
                        coords.add((x, y, z))
    return DigitalSet(coords)

class QTurtle:
    def __init__(self, start_pos=(0,0,0)):
        self.pos = np.array(start_pos, dtype=int)
        self.right   = np.array([1, 0, 0], dtype=int)
        self.up      = np.array([0, 1, 0], dtype=int)
        self.forward = np.array([0, 0, 1], dtype=int)
        self.scale = 1.0
        self.scale_factor = 0.666
        self.brush = DigitalSet()
        self.stack = []

    def set_scale_factor(self, factor):
        self.scale_factor = float(factor)

    def move(self, distance: int, direction='forward'):
        vec = np.array([0,0,0], dtype=int)
        d = direction.lower()
        if d == 'forward': vec = self.forward
        elif d == 'back':  vec = -self.forward
        elif d == 'up':    vec = self.up
        elif d == 'down':  vec = -self.up
        elif d == 'right': vec = self.right
        elif d == 'left':  vec = -self.right
        self.pos += vec * int(distance)

    def rotate_90(self, axis='y', steps=1):
        axis = axis.lower()
        def apply_rotation(vec, axis_char):
            x, y, z = vec
            if axis_char == 'x': return np.array([x, -z, y], dtype=int)
            elif axis_char == 'y': return np.array([z, y, -x], dtype=int)
            elif axis_char == 'z': return np.array([-y, x, z], dtype=int)
            return vec
        for _ in range(steps % 4):
            self.right   = apply_rotation(self.right, axis)
            self.up      = apply_rotation(self.up, axis)
            self.forward = apply_rotation(self.forward, axis)

    def shear(self, primary_axis, secondary_axis, factor: int):
        vec_map = {'x': self.right, 'y': self.up, 'z': self.forward}
        v_prim, v_sec = vec_map.get(primary_axis.lower()), vec_map.get(secondary_axis.lower())
        if v_prim is not None and v_sec is not None:
            result = v_prim + v_sec * int(factor)
            if primary_axis == 'x': self.right = result
            elif primary_axis == 'y': self.up = result
            elif primary_axis == 'z': self.forward = result

    def stamp(self):
        if not self.brush: return DigitalSet()
        world_voxels = []
        for bx, by, bz in self.brush:
            offset = (bx * self.right) + (by * self.up) + (bz * self.forward)
            final_pos = self.pos + offset
            world_voxels.append((int(final_pos[0]), int(final_pos[1]), int(final_pos[2])))
        return DigitalSet(world_voxels)

    def push_state(self):
        self.stack.append((self.pos.copy(), self.forward.copy(), self.up.copy(), self.right.copy(), self.scale))

    def pop_state(self):
        if self.stack: self.pos, self.forward, self.up, self.right, self.scale = self.stack.pop()

    def interpret_symbol(self, symbol, step_size):
        scaled_step = max(1, int(step_size * self.scale))
        if symbol == 'F': return self.extrude(scaled_step)
        elif symbol == 'f': self.move(scaled_step)
        elif symbol == '+': self.rotate_90('y', 1)
        elif symbol == '-': self.rotate_90('y', -1)
        elif symbol == '&': self.rotate_90('x', 1)
        elif symbol == '^': self.rotate_90('x', -1)
        elif symbol == '\\': self.rotate_90('z', 1)
        elif symbol == '/': self.rotate_90('z', -1)
        elif symbol == '|': self.rotate_90('y', 2)
        elif symbol == '[': self.push_state()
        elif symbol == ']': self.pop_state()
        elif symbol == '>': self.shear('z', 'x', 1)
        elif symbol == '<': self.shear('z', 'x', -1)
        elif symbol == '@': self.scale *= self.scale_factor; return self.extrude(scaled_step)
        elif symbol == '!':
            if self.scale_factor > 0: self.scale /= self.scale_factor
            return self.extrude(scaled_step)
        return None


    def reset(self, position, heading_q_str='N'):
        self.pos = np.array(position, dtype=int)
        global_forward = self._parse_global_q(heading_q_str)
        if not np.any(global_forward): global_forward = np.array([0, 0, -1])
        self.forward = global_forward
        ref_up = np.array([0, 1, 0])
        if np.array_equal(np.abs(global_forward), ref_up): ref_up = np.array([0, 0, -1])
        right_raw = np.cross(self.forward, ref_up)
        self.right = self._quantize_vector(right_raw) if np.any(right_raw) else np.array([1, 0, 0])
        self.up = self._quantize_vector(np.cross(self.right, self.forward))
        self.stack = []

    def capture_brush(self, world_voxels: DigitalSet):
        """
        Takes a DigitalSet of world coordinates and converts them into the
        turtle's local coordinate system. Use this when setting a brush
        from world blocks so that stamp() and extrude() work correctly.
        """
        local_voxels = []
        # Calculate Basis Matrix components for inversion
        # Local = Matrix^-1 * (World - Pos)
        # For orthogonal basis, inverse is Transpose / magnitude squared
        r_sq, u_sq, f_sq = np.dot(self.right, self.right), np.dot(self.up, self.up), np.dot(self.forward, self.forward)

        for wx, wy, wz in world_voxels:
            rel = np.array([wx, wy, wz]) - self.pos
            # Project onto basis vectors
            lx = np.dot(rel, self.right) / r_sq
            ly = np.dot(rel, self.up) / u_sq
            lz = np.dot(rel, self.forward) / f_sq
            local_voxels.append((int(round(lx)), int(round(ly)), int(round(lz))))

        self.set_brush(DigitalSet(local_voxels))

    def _quantize_vector(self, vec):
        if not np.any(vec): return vec
        gcd = np.gcd.reduce(np.abs(vec))
        return (vec / gcd).astype(int) if gcd > 1 else vec

    def _parse_global_q(self, q_str):
        q_str = q_str.upper()
        x, y, z = 0, 0, 0
        if 'N' in q_str: z -= 1
        if 'S' in q_str: z += 1
        if 'E' in q_str: x += 1
        if 'W' in q_str: x -= 1
        if 'U' in q_str: y += 1
        if 'D' in q_str: y -= 1
        return np.array([x, y, z], dtype=int)

    def _resolve_local_direction(self, local_q_str: str):
        d = local_q_str.upper()
        if d == 'FORWARD': return self.forward
        if d == 'BACK': return -self.forward
        if d == 'RIGHT': return self.right
        if d == 'LEFT': return -self.right
        if d == 'UP': return self.up
        if d == 'DOWN': return -self.up
        vec = np.array([0, 0, 0], dtype=int)
        if 'F' in d: vec += self.forward
        if 'B' in d: vec -= self.forward
        if 'R' in d: vec += self.right
        if 'L' in d: vec -= self.right
        if 'U' in d: vec += self.up
        if 'D' in d: vec -= self.up
        return vec

    def move(self, distance: int, direction: str = 'F'):
        move_vec = self._resolve_local_direction(direction)
        if np.any(move_vec): self.pos += move_vec * int(distance)

    def jump(self, distance: int, direction: str = 'F'):
        self.move(distance, direction)

    def extrude(self, distance: int, direction: str = 'F'):
        move_vec = self._resolve_local_direction(direction)
        if not np.any(move_vec): return DigitalSet()
        start_pos, total_displacement = self.pos.copy(), move_vec * int(distance)
        path = generate_linear_path((0, 0, 0), tuple(total_displacement))
        world_voxels = set()
        for px, py, pz in path:
            current_center = start_pos + np.array([px, py, pz])
            for bx, by, bz in self.brush:
                brush_offset = (bx * self.right) + (by * self.up) + (bz * self.forward)
                final_pos = current_center + brush_offset
                world_voxels.add((int(final_pos[0]), int(final_pos[1]), int(final_pos[2])))
        self.pos += total_displacement
        return DigitalSet(world_voxels)

    def set_brush(self, digital_set):
        """
        Smart Brush Override: If the incoming voxels appear to be world-space
        coordinates, they are automatically localized relative to the turtle's
        current position and orientation.
        """
        if not isinstance(digital_set, DigitalSet) or len(digital_set) == 0:
            self.brush = DigitalSet()
            return

        # Check if the set is already localized (centroid near origin)
        # or if it's world space (centroid near current position).
        # We calculate the inverse transformation to shift world -> local.
        local_voxels = []
        r_sq, u_sq, f_sq = np.dot(self.right, self.right), np.dot(self.up, self.up), np.dot(self.forward, self.forward)

        # Heuristic: If the first voxel is > 100 units from origin, it's likely world-space
        first_v = list(digital_set.voxels)[0]
        dist_sq = first_v[0]**2 + first_v[1]**2 + first_v[2]**2

        if dist_sq < 10000: # It's probably already a local brush (within 100 blocks of 0,0,0)
            self.brush = digital_set
            return

        # Perform the world -> local transformation
        for wx, wy, wz in digital_set:
            rel = np.array([wx, wy, wz]) - self.pos
            lx = np.dot(rel, self.right) / r_sq
            ly = np.dot(rel, self.up) / u_sq
            lz = np.dot(rel, self.forward) / f_sq
            local_voxels.append((int(round(lx)), int(round(ly)), int(round(lz))))

        self.brush = DigitalSet(local_voxels)
