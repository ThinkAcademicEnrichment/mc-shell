import numpy as np
import math
from mcshell.Vec3 import Vec3

class Matrix3:
    def __init__(self, elements=None):
        """
        Initializes a 3x3 matrix for 3D transformations.
        """
        if elements is not None:
            self.matrix = np.array(elements, dtype=np.float64)
            if self.matrix.shape != (3, 3):
                raise ValueError("Matrix3 elements must be a 3x3 array.")
        else:
            self.matrix = np.identity(3, dtype=np.float64)

    def __repr__(self):
        return f"Matrix3(\n{self.matrix}\n)"

    def __matmul__(self, other):
        """
        Matrix multiplication.
        If 'other' is a Vec3, it returns a transformed Vec3.
        """
        if isinstance(other, Vec3):
            # Matrix @ Vector
            vec_np = np.array([other.x, other.y, other.z])
            result_np = self.matrix @ vec_np
            return Vec3(result_np[0], result_np[1], result_np[2])
        if isinstance(other, Matrix3):
            # Matrix @ Matrix
            return Matrix3(self.matrix @ other.matrix)
        return NotImplemented

    @staticmethod
    def from_euler_angles(yaw_degrees=0, pitch_degrees=0, roll_degrees=0):
        """
        Creates a rotation matrix using Minecraft/Game conventions:
        - Yaw:   Rotation around Y (Up) axis.
        - Pitch: Rotation around X (Right) axis.
        - Roll:  Rotation around Z (Forward) axis.

        Order of operations: Yaw -> Pitch -> Roll (R = Ry @ Rx @ Rz)
        """
        y = math.radians(yaw_degrees)
        p = math.radians(pitch_degrees)
        r = math.radians(roll_degrees)

        # Yaw (Around Y)
        Ry = np.array([
            [math.cos(y), 0, math.sin(y)],
            [0, 1, 0],
            [-math.sin(y), 0, math.cos(y)]
        ])

        # Pitch (Around X)
        Rx = np.array([
            [1, 0, 0],
            [0, math.cos(p), -math.sin(p)],
            [0, math.sin(p), math.cos(p)]
        ])

        # Roll (Around Z)
        Rz = np.array([
            [math.cos(r), -math.sin(r), 0],
            [math.sin(r), math.cos(r), 0],
            [0, 0, 1]
        ])

        # Combined rotation: Ry @ Rx @ Rz
        return Matrix3(Ry @ Rx @ Rz)

    @staticmethod
    def identity():
        return Matrix3(np.identity(3))

    def rotate_around_point(self, vector: Vec3, pivot: Vec3) -> Vec3:
        """
        Rotates a vector around an arbitrary pivot point instead of the origin.
        """
        # 1. Move the vector so the pivot is at (0,0,0)
        local_offset = vector - pivot
        # 2. Rotate the local offset
        rotated_offset = self @ local_offset
        # 3. Move it back to world space
        return pivot + rotated_offset