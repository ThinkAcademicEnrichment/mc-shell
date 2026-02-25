from typing import List
from blockapily import mced_block  # Assuming this is your standard blockapily import
from mcshell.mcturtle import DigitalSet
from mcshell.mcactions_base import MCActionsBase

class DigitalSetActions(MCActionsBase):
    """
    A stateless facade providing a block-friendly interface to DigitalSet operations.
    These methods map perfectly to Value blocks in Blockly (Data-Flow paradigm).
    """

    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

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
        Generates a symmetric 2-input block.
        """
        # Under the hood, we delegate to the OO method of Set A
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
        Note: Unlike union and intersection, difference is order-dependent.
        """
        return set_a.difference(set_b)

    # @mced_block(
    #     label="Symmetric Difference",
    #     set_a={'label': "Set A"},
    #     set_b={'label': "Set B"}
    # )
    # def symmetric_difference(self, set_a: DigitalSet, set_b: DigitalSet) -> DigitalSet:
    #     """
    #     Returns a new Digital Set containing points in either Set A or Set B, but NOT both.
    #     """
    #     return set_a.symmetric_difference(set_b)

    # -------------------------------------------------------------------------
    # N-ary Operations (For Blockly Mutator Blocks)
    # -------------------------------------------------------------------------

    @mced_block(
        label="Union All",
        sets={'label': "Sets"}
    )
    def union_all(self, sets: List[DigitalSet]) -> DigitalSet:
        """
        Combines a list of Digital Sets into a single Set.
        This is perfect for a Blockly block equipped with a mutator (+/- buttons)
        to accept an arbitrary number of inputs.
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
        dx={'label': "dx", 'default': 0},
        dy={'label': "dy", 'default': 0},
        dz={'label': "dz", 'default': 0}
    )
    def translate(self, target_set: DigitalSet, dx: int, dy: int, dz: int) -> DigitalSet:
        """
        Moves a Digital Set by a given (dx, dy, dz) offset and returns the new Set.
        Treats the input set as immutable and returns a newly transformed set.
        """
        # Assuming DigitalSet has a `translate` or `shifted` method returning a new set.
        # If it manipulates in-place, you'd clone it first:
        # new_set = target_set.clone()
        # new_set.translate_in_place(dx, dy, dz)
        # return new_set
        return target_set.translate(dx, dy, dz)

    @mced_block(
        label='Shear',
        target_set={'label':"Set"},
        axis_primary={'label': 'Primary Axis'},
        axis_secondary={'label': 'Secondary Axis'},
        factor={'label':'Factor'}
    )
    def shear(self,target_set:DigitalSet,axis_primary:'Axis', axis_secondary:'Axis', factor:float) -> DigitalSet:
        return target_set.shear(axis_primary,axis_secondary,factor)

    @mced_block(
        label="Is Empty",
        target_set={'label': "Set"}
    )
    def is_empty(self, target_set: DigitalSet) -> bool:
        """
        Checks if a Digital Set contains zero points.
        Returns a Boolean value, useful in Blockly logic statements.
        """
        return len(target_set) == 0