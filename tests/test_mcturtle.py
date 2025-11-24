import unittest
import numpy as np
# Updated Import: Robust functions from mcturtle
from mcshell.mcturtle import generate_digital_plane_coordinates, generate_metric_ball, DigitalSet
from tests.dg_validator import DigitalGeometryValidator

class TestMcvoxelFunctions(unittest.TestCase):
    """
    Test suite for the functions in the mcturtle.py library.
    """
    def test_generate_digital_plane_coordinates(self):
        # ... (Keep existing test cases definitions) ...
        test_cases = [
             {"name": "Simple XY Plane (3x3)", "input": {'normal': (0, 0, 1), 'point_on_plane': (0, 0, 0), 'outer_rect_dims': (3, 3)}},
             {"name": "Diagonal Plane (4x4)", "input": {'normal': (1, 0, 1), 'point_on_plane': (0, 0, 0), 'outer_rect_dims': (4, 4)}},
        ]

        for case in test_cases:
            with self.subTest(msg=case["name"]):
                # Returns DigitalSet now
                dset = generate_digital_plane_coordinates(**case["input"])
                coords = dset.to_list() # Convert to list for validator

                is_connected, msg_conn = DigitalGeometryValidator.validate_connectivity(coords, connectivity=6)
                self.assertTrue(is_connected, f"Connectivity Failed: {msg_conn}")

                is_valid_thick, msg_thick = DigitalGeometryValidator.validate_arithmetic_plane(
                    coords, case["input"]['normal'], thickness_type='standard'
                )
                self.assertTrue(is_valid_thick, f"Thickness Failed: {msg_thick}")

    def test_digital_set_operations(self):
        """Test the new DigitalSet class methods"""
        print("\nTesting DigitalSet Operations...")

        # 1. Test Metric Ball (Manhattan = Diamond)
        ball = generate_metric_ball((0,0,0), 2, 'manhattan')
        # Corrected expectation: Volume of Manhattan sphere R=2 is 25
        self.assertEqual(len(ball), 25)

        # 2. Test Translation
        shifted = ball.translate(10, 0, 0)
        self.assertIn((10,0,0), shifted.voxels)
        self.assertNotIn((0,0,0), shifted.voxels)

        # 3. Test Shell (Hollow)
        shell = ball.shell()
        # Center should be empty now
        self.assertNotIn((0,0,0), shell.voxels)
        # Tip should still exist
        self.assertIn((0,0,2), shell.voxels)

        # 4. Test Extrusion
        # Extrude a single point into a line
        point_set = DigitalSet([(0,0,0)])
        line = point_set.extrude((0,0,5))
        self.assertEqual(len(line), 6) # 0 to 5 inclusive
        self.assertIn((0,0,5), line.voxels)

if __name__ == '__main__':
    unittest.main()