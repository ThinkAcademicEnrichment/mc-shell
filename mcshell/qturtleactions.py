from mcshell.mcactions_base import MCActionsBase, QTurtle
from blockapily import mced_block
from mcshell.constants import *
from mcshell.mcturtle import DigitalSet

class QTurtleActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0.001):
        super().__init__(mc_player_instance, delay_between_blocks)
        self.turtle = QTurtle() 

    @mced_block(
        label="QTurtle: Reset to",
        position={'label': 'Position'},
        heading_q_str={'label': 'Facing'}
    )
    def reset(self, position:Vec3, heading_q_str:'QCompass'):
        """
        Resets the turtle to a specific position and aligns its Forward vector
        with the specified Global Q-Direction (e.g., 'N', 'NE', 'SWU').

        It automatically recalculates the orthogonal(ish) Right and Up vectors
        to form a consistent basis frame.
        """
        if position:
            x, y, z = position.x, position.y, position.z
        else:
            pos = self.mcplayer.position
            x, y, z = pos.x, pos.y, pos.z
        self.turtle.pos = np.array([int(x), int(y), int(z)], dtype=int)

        # 1. Determine Forward Vector from Global Q-String
        global_forward = self.turtle._parse_global_q(heading_q_str)
        if not np.any(global_forward):
            global_forward = np.array([0, 0, -1]) # Default North (-Z)

        self.turtle.forward = global_forward

        # 2. Determine Up Vector
        # Standard reference Up is Global Y (0,1,0)
        ref_up = np.array([0, 1, 0])

        # If Forward is parallel to Reference Up (looking straight Up/Down)
        # we must choose a different reference for 'Local Up' (usually Global North or South)
        if np.array_equal(np.abs(global_forward), ref_up):
            # If looking Up/Down, align Local Up with Global North (-Z) to keep bearing
            ref_up = np.array([0, 0, -1])

        # 3. Calculate Right Vector (Cross Product)
        # Right = Forward x Up
        right_raw = np.cross(self.turtle.forward, ref_up)

        # If cross product is zero (shouldn't happen due to parallel check above, but for safety)
        if not np.any(right_raw):
             self.turtle.right = np.array([1, 0, 0])
        else:
             # Quantize/Normalize the result to stay on lattice
             # Simple sign extraction works for 90-degree components,
             # but for diagonals we need to preserve the non-zero integers.
             # Since we want integer steps, we keep the raw cross product if it's small,
             # or simplify it if it's a scaled version of a primitive direction.
             self.turtle.right = self.turtle._quantize_vector(right_raw)

        # 4. Recalculate Up Vector to ensure orthogonality
        # Up = Right x Forward
        up_raw = np.cross(self.turtle.right, self.turtle.forward)
        self.turtle.up = self.turtle._quantize_vector(up_raw)

        # Clear state stack
        self.turtle.stack = []

    @mced_block(
        label="QTurtle: Move",
        direction={'label': 'Direction' },
        distance={'label': 'Distance'}
    )
    def turtle_move(self, direction: 'QHeading', distance: int):
        self.turtle.move(distance, direction)

    @mced_block(
        label="QTurtle: Get Position",
    )
    def turtle_position(self) -> Vec3:
        return Vec3(*self.turtle.pos)

    @mced_block(
        label="QTurtle: Rotate 90",
        axis={'label': 'Axis'},
        steps={'label': 'Steps (90 deg)'}
    )
    def turtle_rotate(self, axis: 'Axis', steps: int):
        self.turtle.rotate_90(axis, steps)

    @mced_block(label="QTurtle: Set Brush", shape={'label': 'Shape'})
    def turtle_set_brush(self, shape: DigitalSet):
        self.turtle.set_brush(shape)

    @mced_block(label="QTurtle: Stamp Brush", block_type={'label': 'Material'})
    def turtle_stamp(self, block_type: 'Block'):
        shape = self.turtle.stamp()
        self._place_digital_set(shape, block_type)

    @mced_block(
        label="QTurtle: Extrude Brush",
        length={'label': 'Length'},
        direction={'label': 'Q-Heading'},
        block_type={'label': 'Material'}
    )
    def turtle_extrude(self, length: int, direction: 'QHeading', block_type: 'Block'):
        shape = self.turtle.extrude(length,direction)
        self._place_digital_set(shape, block_type)

    @mced_block(label="QTurtle: Capture Brush", shape={'label': 'Shape'})
    def turtle_capture_brush(self, shape: DigitalSet):
        self.turtle.capture_brush(shape)

    @mced_block(label="QTurtle: Push State")
    def turtle_push(self):
        self.turtle.push_state()

    @mced_block(label="QTurtle: Pop State")
    def turtle_pop(self):
        self.turtle.pop_state()

