import unittest
import numpy as np
from mcshell.mcvoxel import generate_digital_plane_coordinates
from tests.dg_validator import DigitalGeometryValidator

# Optional: For visualization.
try:
    from voxelmap import VoxelMap
except ImportError:
    VoxelMap = None

def visualize_voxels(coords, title="Voxel Output"):
    if VoxelMap is None:
        # print("\n'voxelmap' library not found. Skipping visualization.")
        return
    if not coords:
        print(f"\n{title}: No coordinates to visualize.")
        return
    vm = VoxelMap()
    for x, y, z in coords:
        vm.add_voxel((x, y, z))
    print(f"\nDisplaying visualization for: {title}")
    vm.show()


class TestMcvoxelFunctions(unittest.TestCase):
    """
    Test suite for the functions in the mcvoxel.py library.
    """
    def test_generate_digital_plane_coordinates(self):
        """
        Tests the generate_digital_plane_coordinates function using Digital Geometry validation.
        """

        # Define test cases
        test_cases = [
            {
                "name": "Simple XY Plane (3x3)",
                "input": {'normal': (0, 0, 1), 'point_on_plane': (0, 0, 0), 'outer_rect_dims': (3, 3)}
            },
            {
                "name": "Offset XZ Plane (2x2)",
                "input": {'normal': (0, 1, 0), 'point_on_plane': (5.5, 10, 5.5), 'outer_rect_dims': (2, 2)}
            },
            {
                "name": "Diagonal Plane (4x4)",
                "input": {'normal': (1, 0, 1), 'point_on_plane': (0, 0, 0), 'outer_rect_dims': (4, 4)}
            },
            {
                "name": "Complex Diagonal",
                "input": {'normal': (1, 1, 1), 'point_on_plane': (0, 0, 0), 'outer_rect_dims': (5, 5)}
            }
        ]

        for case in test_cases:
            with self.subTest(msg=case["name"]):
                print(f"\nTesting: {case['name']}")
                coords = generate_digital_plane_coordinates(**case["input"])

                # 1. Validate Connectivity (Standard Plane should be 6-connected)
                is_connected, msg_conn = DigitalGeometryValidator.validate_connectivity(coords, connectivity=6)
                self.assertTrue(is_connected, f"Connectivity Failed: {msg_conn}")
                print(f"  [PASS] Connectivity: {msg_conn}")

                # 2. Validate Arithmetic Thickness
                # Note: We skip thickness validation for very small planes (e.g. 2x2)
                # as they might be too small to exhibit full thickness properties,
                # but the inequality should still hold (it just won't span the full width).
                # The validator checks <= limit, so it is safe.
                is_valid_thick, msg_thick = DigitalGeometryValidator.validate_arithmetic_plane(
                    coords,
                    case["input"]['normal'],
                    thickness_type='standard'
                )
                self.assertTrue(is_valid_thick, f"Thickness Failed: {msg_thick}")
                print(f"  [PASS] Thickness: {msg_thick}")

                # Visualization (optional, enabled if library present)
                # visualize_voxels(coords, case["name"])

    def test_random_planes(self):
        """
        Property-based testing with random normals.
        """
        print("\nRunning Random Property Tests...")
        for i in range(5):
            # Generate random normal and dimensions
            normal = tuple(np.random.uniform(-1, 1, 3))
            dims = (np.random.randint(3, 8), np.random.randint(3, 8))

            coords = generate_digital_plane_coordinates(
                normal=normal,
                point_on_plane=(0,0,0),
                outer_rect_dims=dims
            )

            is_connected, _ = DigitalGeometryValidator.validate_connectivity(coords, 6)
            is_thick_valid, msg_thick = DigitalGeometryValidator.validate_arithmetic_plane(coords, normal)

            # We assert the properties.
            # Note: If the generation algorithm is flawed, these assertions will fail,
            # giving us a mathematical reason why.
            self.assertTrue(is_connected, f"Random plane {i} disconnected. Normal: {normal}")
            self.assertTrue(is_thick_valid, f"Random plane {i} thickness invalid. {msg_thick}")

if __name__ == '__main__':
    unittest.main()