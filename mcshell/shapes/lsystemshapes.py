from mcshell.constants import *
from mcshell.mclsystem import LSystem
from mcshell.mcactions_base import MCActionsBase
from mcshell.mcturtle import DigitalSet,QTurtle
from blockapily import mced_block

class LSystemShapes(MCActionsBase):
    def __init__(self, player, delay_between_blocks=0.01):
        super().__init__(player, delay_between_blocks)
        # self.local_turtle = QTurtle()

    @mced_block(
        label="L-System: Define Rule",
        predecessor={'label': 'Symbol (char)'},
        successor={'label': 'Replacement'},
    )
    def define_rule(self, predecessor: str, successor: str) -> 'LSYSTEM_RULE':
        return (predecessor, successor)

    @mced_block(
        label="L-System: Generate Shape",
        axiom={'label': 'Axiom'},
        iterations={'label': 'Iterations'},
        step_length={'label': 'Step Length'},
        rules={'label': 'Rules (List)'},
    )
    def get_lsystem_shape(self, axiom: str, iterations: int, step_length: int, rules: list) -> DigitalSet:
        rule_dict = {r[0]: r[1] for r in rules if len(r) >= 2}
        lsys = LSystem(axiom, rule_dict)
        final_string = lsys.iterate(int(iterations))
        local_turtle = QTurtle()
        local_turtle.pos = np.array([0,0,0], dtype=int)
        local_turtle.brush = DigitalSet()
        local_turtle.brush.add((0,0,0))
        accumulated_shape = DigitalSet()
        for char in final_string:
            shape_segment = local_turtle.interpret_symbol(char, int(step_length))
            if shape_segment:
                accumulated_shape = accumulated_shape.union(shape_segment)
        return accumulated_shape

