from mcshell.mctoolbox import Toolbox, Category, Separator, ConfiguredBlock
from shadows import shadow_vec3, shadow_qcompass
from mcshell.actions.qactions import QActions
from mcshell.actions.generated_actions import WorldActions
from mcshell.extensions import VectorMath,Threads
from mcshell.blockly import Lists

spec = Toolbox([
    Lists,
    Separator(),       # Adds a visual line in the menu
    Threads,
    VectorMath,
    QActions,          # Includes the whole generated category automatically
    Separator(),       # Adds a visual line in the menu
    Category("My Custom Tools", colour="#FF0000", contents=[
        WorldActions.drop_item,
        Separator(),   # Separators can also go inside categories!
        ConfiguredBlock(
            QActions.get_height_at,
            inputs={"position": shadow_vec3(10, 64, 10)}
        )
    ])
])