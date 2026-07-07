import unittest
import copy
from mcshell.actions.digitalsetactions import DigitalSetActions
from mcshell.mcturtle import DigitalSet

class TestDigitalSetActionsImmutability(unittest.TestCase):
    def setUp(self):
        """
        Runs before every test. We set up our action facade and the
        source DigitalSets we'll use for the operations.
        """
        self.actions = DigitalSetActions(None)

        self.set_a = DigitalSet()
        self.set_b = DigitalSet()

        # Note: If your DigitalSet requires actual coordinate data to test properly,
        # you would populate them here. For example:
        self.set_a.add((0, 0, 0))
        self.set_b.add((1, 1, 1))

        # We take a deepcopy of the original sets. This serves as our "ground truth"
        # to ensure that the methods didn't secretly mutate the original references.
        self.original_a_state = copy.deepcopy(self.set_a)
        self.original_b_state = copy.deepcopy(self.set_b)

    def assert_unmutated(self):
        """
        Helper method to assert that the inputs have not changed their internal state.
        This compares the internal __dict__ of the objects. If your DigitalSet has a
        custom __eq__ method, you can just do self.assertEqual(self.set_a, self.original_a_state)
        """
        self.assertEqual(self.set_a.__dict__, self.original_a_state.__dict__,
                         "set_a was mutated in place!")
        self.assertEqual(self.set_b.__dict__, self.original_b_state.__dict__,
                         "set_b was mutated in place!")

    def test_union_immutability(self):
        """Test that union returns a new set and leaves inputs alone."""
        result = self.actions.union(self.set_a, self.set_b)

        # 1. Verify object identity (it must be a new instance)
        self.assertIsNot(result, self.set_a, "Union returned set_a instead of a new set")
        self.assertIsNot(result, self.set_b, "Union returned set_b instead of a new set")

        # 2. Verify state preservation (originals are untouched)
        self.assert_unmutated()

    def test_translate_immutability(self):
        """Test that translate returns a newly offset set and leaves the original alone."""
        result = self.actions.translate(self.set_a, 10, 5, -3)

        self.assertIsNot(result, self.set_a, "Translate returned the original set_a")
        self.assert_unmutated()

    def test_difference_immutability(self):
        """Test that difference behaves purely."""
        result = self.actions.difference(self.set_a, self.set_b)

        self.assertIsNot(result, self.set_a)
        self.assert_unmutated()

    def test_union_all_immutability(self):
        """Test the N-ary union_all operation for pure functional behavior."""
        set_c = DigitalSet()
        original_c_state = copy.deepcopy(set_c)

        input_list = [self.set_a, self.set_b, set_c]
        result = self.actions.union_all(input_list)

        # Ensure the result is none of the input list items
        for s in input_list:
            self.assertIsNot(result, s)

        self.assert_unmutated()
        self.assertEqual(set_c.__dict__, original_c_state.__dict__, "set_c was mutated in union_all!")

if __name__ == '__main__':
    unittest.main()