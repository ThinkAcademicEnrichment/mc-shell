from typing import List
from blockapily import mced_block
from mcshell.mcturtle import DigitalSet
from mcshell.mcactions_base import MCActionsBase
from mcshell.constants import Vec3

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