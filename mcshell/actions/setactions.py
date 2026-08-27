from blockapily import mced_block
from mcshell.mcactions_base import MCActionsBase

class SetActions(MCActionsBase):
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
    def empty_set(self) -> set:
        """
        Creates a new, completely empty set.
        """
        return set()

    @mced_block(
        label="Add element",
        target_set={'label': "Set"},
        element={'label': "Element"},
    )
    def add_element(self, target_set: set, element) -> set:
        """
        Adds a single element to a set.
        Maintains immutability by cloning the set before adding the element.
        """
        new_set = set(target_set)
        new_set.add(element)
        return new_set

    # -------------------------------------------------------------------------
    # Information & Logic
    # -------------------------------------------------------------------------

    @mced_block(
        label="Is Empty",
        target_set={'label': "Set"}
    )
    def is_empty(self, target_set: set) -> bool:
        """
        Checks if a set contains zero points.
        """
        return len(target_set) == 0

    @mced_block(
        label="Element Count",
        target_set={'label': "Set"}
    )
    def element_count(self, target_set: set) -> int:
        """
        Returns the total number of blocks/points in the set.
        """
        return len(target_set)

    @mced_block(
        label="Get Elements",
        target_set={'label': "Set"}
    )
    def get_elements(self, target_set: set) -> list:
        """
        Returns the blocks/points in the set as a list of objects.
        """
        return list(target_set)