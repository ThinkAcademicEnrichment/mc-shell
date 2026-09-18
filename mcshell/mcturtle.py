import numpy as np
import math
from collections import deque
from mcshell.constants import Vec3,Matrix3

class DigitalSet:
    """
    A discrete set of integer coordinates (voxels) in 3D space.
    Supports set arithmetic, affine transformations, and morphology.
    """
    def __init__(self, voxels=None):
        if isinstance(voxels, DigitalSet):
            self.voxels = voxels.voxels.copy()
        elif voxels is not None:
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
        return DigitalSet(self.voxels.union(other.voxels.copy()))

    def intersection(self, other):
        return DigitalSet(self.voxels.intersection(other.voxels.copy()))

    def difference(self, other):
        return DigitalSet(self.voxels.difference(other.voxels.copy()))

    # --- Affine Transformations (Local) ---
    def translate(self, dx, dy, dz):
        new_voxels = { (x + int(dx), y + int(dy), z + int(dz)) for x, y, z in self.voxels.copy() }
        return DigitalSet(new_voxels)

    def rotate(self, axis: str, angle_degrees: float):
        """
        Rotates the DigitalSet around its centroid using Matrix3.

        Args:
            axis: 'x', 'y', or 'z'.
            angle_degrees: The rotation angle in degrees.

        Returns:
            A new DigitalSet containing the rotated and re-quantized voxels.
            Quantization is performed via nearest-integer rounding (round()).
        """
        if not self.voxels:
            return DigitalSet()

        # 1. Calculate Centroid (Center of Rotation)
        # We rotate around the center of the set so it doesn't fly away from the origin.
        sum_x = sum(v[0] for v in self.voxels)
        sum_y = sum(v[1] for v in self.voxels)
        sum_z = sum(v[2] for v in self.voxels)
        count = len(self.voxels)
        centroid = Vec3(sum_x / count, sum_y / count, sum_z / count)

        # 2. Create the Rotation Matrix
        # Mapping standard axis strings to Euler parameters
        matrix = Matrix3.identity()
        ax = axis.lower()
        if ax == 'x':
            matrix = Matrix3.from_euler_angles(pitch_degrees=angle_degrees)
        elif ax == 'y':
            matrix = Matrix3.from_euler_angles(yaw_degrees=angle_degrees)
        elif ax == 'z':
            matrix = Matrix3.from_euler_angles(roll_degrees=angle_degrees)
        else:
            # Fallback for identity if axis is unknown
            return self

        # 3. Transform and Re-quantize
        new_voxels = set()
        for v in self.voxels:
            # Convert tuple to Vec3
            pos = Vec3(v[0], v[1], v[2])

            # Use Matrix3 to rotate around the centroid
            rotated_vec = matrix.rotate_around_point(pos, centroid)

            # Round to nearest integer (nearest-neighbor) and add to new set
            new_voxels.add((
                int(round(rotated_vec.x)),
                int(round(rotated_vec.y)),
                int(round(rotated_vec.z))
            ))

        return DigitalSet(new_voxels)

    def shear(self, axis_primary, axis_secondary, factor):
        idx_p = {'x': 0, 'y': 1, 'z': 2}[axis_primary.lower()]
        idx_s = {'x': 0, 'y': 1, 'z': 2}[axis_secondary.lower()]

        new_voxels = set()
        for v in self.voxels.copy():
            coords = list(v)
            shift = math.floor(coords[idx_s] * factor)
            coords[idx_p] += shift
            new_voxels.add(tuple(coords))
        return DigitalSet(new_voxels)

    # --- Morphology ---
    def dilate(self, connectivity=6):
        offsets = self._get_connectivity_offsets(connectivity)
        new_voxels = set(self.voxels.copy())
        for x, y, z in self.voxels:
            for dx, dy, dz in offsets:
                new_voxels.add((x + dx, y + dy, z + dz))
        return DigitalSet(new_voxels)

    def erode(self, connectivity=6):
        offsets = self._get_connectivity_offsets(connectivity)
        new_voxels = set()
        for x, y, z in self.voxels.copy():
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
            for vx, vy, vz in self.voxels.copy():
                new_voxels.add((vx + px, vy + py, vz + pz))
        return DigitalSet(new_voxels)

    def scale_volume(self, volume_factor: int) -> 'DigitalSet':
        """
        Scales the volume of the pure geometry set by approximately the given integer 
        factor, using nearest-neighbor interpolation to prevent gaps.
        """
        if not hasattr(self, 'voxels') or not self.voxels or volume_factor <= 0:
            return DigitalSet()
        if volume_factor == 1:
            return DigitalSet(self.voxels.copy())

        import numpy as np
        import math

        # 1. The linear scale factor is the cube root of the volume multiplier
        k = volume_factor ** (1/3)

        # 2. Find the original bounding box
        coords = np.array(list(self.voxels))
        min_b = coords.min(axis=0)
        max_b = coords.max(axis=0)

        # 3. Calculate the target bounding box limits
        t_min = np.floor(min_b * k).astype(int)
        t_max = np.ceil((max_b + 1) * k).astype(int) - 1

        new_voxels = set()
        # 4. Inverse Mapping: Iterate over the target space and sample the original space
        for tx in range(t_min[0], t_max[0] + 1):
            for ty in range(t_min[1], t_max[1] + 1):
                for tz in range(t_min[2], t_max[2] + 1):
                    # Map the target coordinate backward to the original space
                    ox = int(math.floor(tx / k))
                    oy = int(math.floor(ty / k))
                    oz = int(math.floor(tz / k))

                    if (ox, oy, oz) in self.voxels:
                        new_voxels.add((tx, ty, tz))

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

    def set_scale_factor(self, factor):
        self.scale_factor = float(factor)

    def set_scale(self,scale):
        self.scale = int(scale)

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

    def set_brush(self, digital_set):
        """
        Smart Brush Override: If the incoming voxels appear to be world-space
        coordinates or localized world-axes, they are automatically projected 
        into the turtle's local frame (Right, Up, Forward).
        """
        if not digital_set or not hasattr(digital_set, 'voxels') or len(digital_set.voxels) == 0:
            self.brush = DigitalSet()
            return

        # 1. Did it come from a World Capture endpoint? (Has world_offset)
        # We must project the World axes (East, Up, South) into Turtle axes (Right, Up, Forward).
        if hasattr(digital_set, 'world_offset') and digital_set.world_offset is not None:
            self.brush = self._project_axes(digital_set)
            print(f"QTurtle: Setting brush to a local {digital_set.__class__.__name__} ({len(self.brush.voxels)} blocks). Axes projected to Turtle Frame.")
            return

        # 2. Heuristics for raw DigitalSets to see if they are absolute world coordinates
        voxels = list(digital_set.voxels)
        min_x, max_x = min(v[0] for v in voxels), max(v[0] for v in voxels)
        min_y, max_y = min(v[1] for v in voxels), max(v[1] for v in voxels)
        min_z, max_z = min(v[2] for v in voxels), max(v[2] for v in voxels)
        
        cx = (min_x + max_x) / 2.0
        cy = (min_y + max_y) / 2.0
        cz = (min_z + max_z) / 2.0
        
        dist_to_origin = (cx**2) + (cy**2) + (cz**2)
        dist_to_turtle = ((cx - self.pos[0])**2) + ((cy - self.pos[1])**2) + ((cz - self.pos[2])**2)
        
        contains_origin = (min_x <= 0 <= max_x) and (min_y <= 0 <= max_y) and (min_z <= 0 <= max_z)

        is_world_space = False
        # broken
        # if dist_to_origin < 1:
        #     is_world_space = False
        # elif dist_to_turtle < dist_to_origin:
        #     is_world_space = True
        # else:
        # is_world_space = not contains_origin

        if is_world_space:
            print(f"QTurtle: Auto-detecting world coordinates (Centroid at {int(cx)}, {int(cy)}, {int(cz)}). Localizing...")
            self.brush = self._capture_absolute_world(digital_set)
        else:
            self.brush = digital_set

    def _project_axes(self, digital_set):
        """Projects a localized World-Axis shape into Turtle-Axis space."""
        if getattr(digital_set, 'is_projected_to_turtle', False):
            return digital_set # Prevent double-projection if re-assigned

        r_sq = np.dot(self.right, self.right)
        u_sq = np.dot(self.up, self.up)
        f_sq = np.dot(self.forward, self.forward)
        
        if hasattr(digital_set, 'blocks_map'):
            new_map = {}
            for (wx, wy, wz), block in digital_set.blocks_map.items():
                rel = np.array([wx, wy, wz])
                # Project world offset onto turtle axes
                lx = np.dot(rel, self.right) / r_sq
                ly = np.dot(rel, self.up) / u_sq
                lz = np.dot(rel, self.forward) / f_sq
                new_map[(int(round(lx)), int(round(ly)), int(round(lz)))] = block
            
            # Dynamically instantiate the same class (MCStructure) to preserve types
            new_struct = digital_set.__class__(new_map)
            new_struct.world_offset = digital_set.world_offset
            new_struct.is_projected_to_turtle = True
            return new_struct
        else:
            local_voxels = []
            for wx, wy, wz in digital_set.voxels:
                rel = np.array([wx, wy, wz])
                lx = np.dot(rel, self.right) / r_sq
                ly = np.dot(rel, self.up) / u_sq
                lz = np.dot(rel, self.forward) / f_sq
                local_voxels.append((int(round(lx)), int(round(ly)), int(round(lz))))
            
            new_set = DigitalSet(local_voxels)
            new_set.world_offset = digital_set.world_offset
            new_set.is_projected_to_turtle = True
            return new_set

    def _capture_absolute_world(self, digital_set):
        """Subtracts turtle position AND projects axes for absolute world coordinates."""
        if getattr(digital_set, 'is_projected_to_turtle', False):
            return digital_set

        r_sq = np.dot(self.right, self.right)
        u_sq = np.dot(self.up, self.up)
        f_sq = np.dot(self.forward, self.forward)
        
        local_voxels = []
        for wx, wy, wz in digital_set.voxels:
            # Shift from absolute to relative, then project
            rel = np.array([wx, wy, wz]) - self.pos
            lx = np.dot(rel, self.right) / r_sq
            ly = np.dot(rel, self.up) / u_sq
            lz = np.dot(rel, self.forward) / f_sq
            local_voxels.append((int(round(lx)), int(round(ly)), int(round(lz))))
            
        new_set = DigitalSet(local_voxels)
        new_set.is_projected_to_turtle = True
        return new_set

    def _capture_brush(self, world_voxels):
        """
        Private Helper: Takes world coordinates (DigitalSet or MCStructure) and converts 
        them into the turtle's local coordinate system using pure integer arithmetic.
        """
        import math
        from mcshell.mcstructure import MCStructure  # Ensure safe import
        
        # 1. Snap the turtle's floating-point position to the integer grid
        px = int(math.floor(self.pos[0]))
        py = int(math.floor(self.pos[1]))
        pz = int(math.floor(self.pos[2]))
        
        # 2. Extract integer direction vectors
        rx, ry, rz = int(self.right[0]), int(self.right[1]), int(self.right[2])
        ux, uy, uz = int(self.up[0]), int(self.up[1]), int(self.up[2])
        fx, fy, fz = int(self.forward[0]), int(self.forward[1]), int(self.forward[2])
        
        is_structure = hasattr(world_voxels, 'blocks_map')
        
        if is_structure:
            local_block_map = {}
            for (wx, wy, wz), block_material in world_voxels.blocks_map.items():
                # Distance from turtle
                dx, dy, dz = wx - px, wy - py, wz - pz
                
                # Pure integer dot products
                lx = (dx * rx) + (dy * ry) + (dz * rz)
                ly = (dx * ux) + (dy * uy) + (dz * uz)
                lz = (dx * fx) + (dy * fy) + (dz * fz)
                
                local_block_map[(lx, ly, lz)] = block_material
                
            return MCStructure(local_block_map, local_origin=None)
            
        else:
            local_voxels = set()
            for wx, wy, wz in world_voxels.voxels:
                dx, dy, dz = wx - px, wy - py, wz - pz
                
                lx = (dx * rx) + (dy * ry) + (dz * rz)
                ly = (dx * ux) + (dy * uy) + (dz * uz)
                lz = (dx * fx) + (dy * fy) + (dz * fz)
                
                local_voxels.add((lx, ly, lz))
                
            return DigitalSet(local_voxels)

    # def stamp(self):
    #     if not self.brush: return DigitalSet()
        
    #     # 1. Identify the anchor point (world_offset) if this is a captured structure
    #     wo_x, wo_y, wo_z = 0, 0, 0
    #     if hasattr(self.brush, 'world_offset') and self.brush.world_offset is not None:
    #         wo = self.brush.world_offset
    #         # Handle both Vec3 objects and standard tuples/lists
    #         wo_x, wo_y, wo_z = (wo.x, wo.y, wo.z) if hasattr(wo, 'x') else (wo[0], wo[1], wo[2])

    #     world_voxels = []
    #     for bx, by, bz in self.brush:
    #         # 2. Shift the voxel so it is relative to the anchor point
    #         rel_x = bx - wo_x
    #         rel_y = by - wo_y
    #         rel_z = bz - wo_z
            
    #         # 3. Apply the turtle's rotation matrix to the relative coordinates
    #         offset = (rel_x * self.right) + (rel_y * self.up) + (rel_z * self.forward)
            
    #         # 4. Translate by the turtle's current position
    #         final_pos = self.pos + offset 
    #         world_voxels.append((int(final_pos[0]), int(final_pos[1]), int(final_pos[2])))
            
    #     return DigitalSet(world_voxels)

    def stamp(self):
        if not self.brush: return DigitalSet()
        world_voxels = []
        for bx, by, bz in self.brush:
            offset = (bx * self.right) + (by * self.up) + (bz * self.forward)
            final_pos = self.pos + offset 
            world_voxels.append((int(final_pos[0]), int(final_pos[1]), int(final_pos[2])))
        return DigitalSet(world_voxels)

    def place(self):
        """
        Similar to stamp, but preserves material data if the brush is an MCStructure.
        Returns a world-aligned MCStructure (or a default material MCStructure if just a DigitalSet).
        """
        if not self.brush:
            return None # Or return empty structure if defined

        import math
        # Check if the brush has material data (is it an MCStructure?)
        has_materials = hasattr(self.brush, 'blocks_map')
        
        world_block_map = {}
        
        for bx, by, bz in self.brush:
            # Apply turtle transformations (rotation/scale via right, up, forward vectors)
            offset = (bx * self.right) + (by * self.up) + (bz * self.forward)
            final_pos = self.pos + offset
            
            world_coord= (int(final_pos[0]), int(final_pos[1]), int(final_pos[2]))

            # Fetch material if available, otherwise default to a placeholder or let the action handle it
            material = self.brush.blocks_map.get((bx, by, bz), "STONE") if has_materials else "STONE"
            
            world_block_map[world_coord] = material

        return world_block_map

    def push_state(self):
        self.stack.append((self.pos.copy(), self.forward.copy(), self.up.copy(), self.right.copy(), self.scale))

    def pop_state(self):
        if self.stack: self.pos, self.forward, self.up, self.right, self.scale = self.stack.pop()

    def interpret_symbol(self, symbol, step_size):
        """
        Executes a single L-System symbol.
        Returns a DigitalSet of placed blocks (if drawing occurred), or None.
        """
        # Calculate Scaled Step Size (Minimum 1 block)
        scaled_step = max(1, int(step_size * self.scale))

        if symbol == 'F':
            extrusion_set = self.extrude(scaled_step)
            self.move(scaled_step)
            return extrusion_set
        elif symbol == 'f':
            self.move(scaled_step)
        elif symbol == 'd':
            return self.drop()
        elif symbol == '+':
            self.rotate_90('y', 1)
        elif symbol == '-':
            self.rotate_90('y', -1)
        elif symbol == '&':
            self.rotate_90('x', 1)
        elif symbol == '^':
            self.rotate_90('x', -1)
        elif symbol == '\\':
            self.rotate_90('z', 1)
        elif symbol == '/':
            self.rotate_90('z', -1)
        elif symbol == '|':
            self.rotate_90('y', 2)
        elif symbol == '[':
            self.push_state()
        elif symbol == ']':
            self.pop_state()
        elif symbol == '>': # "Bend Right"
             self.shear('z', 'x', 1)
        elif symbol == '<': # "Bend Left"
             self.shear('z', 'x', -1)
        elif symbol == '@': # Shrink and extrude
             self.scale *= self.scale_factor
             extrusion_set = self.extrude(scaled_step)
             self.move(scaled_step)
             return extrusion_set
        elif symbol == '!': # Grow and extrude
             if self.scale_factor > 0:
                 self.scale /= self.scale_factor
             extrusion_set = self.extrude(scaled_step)
             self.move(scaled_step)
             return extrusion_set
        elif symbol == '$': # Shrink and jump ahead
             self.scale *= self.scale_factor
             self.move(scaled_step)
        elif symbol == '#': # Grow and jump ahead
             if self.scale_factor > 0:
                 self.scale /= self.scale_factor
             self.move(scaled_step)




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
        return DigitalSet(world_voxels)

    def drop(self):
        # LSystemShape.get_lsystem_shape ensures that brush starts with (0,0,0) in it
        if not self.brush: return DigitalSet()
        world_voxels = []
        for bx, by, bz in self.brush:
            offset = (bx * self.right) + (by * self.up) + (bz * self.forward)
            final_pos = self.pos + offset
            world_voxels.append((int(final_pos[0]), int(final_pos[1]), int(final_pos[2])))
        return DigitalSet(world_voxels)

