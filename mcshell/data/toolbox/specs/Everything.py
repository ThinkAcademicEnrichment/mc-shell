from mcshell.extensions import Utilities
from threading import Thread
from mcshell.shapes import QTurtleShapes
from mcshell.shapes import LSystemShapes
from mcshell.blockly import Pickers
from mcshell.blockly import Entities
from mcshell.mctoolbox import Separator
from mcshell.mctoolbox import *

from mcshell.blockly import *
from mcshell.actions import *
from mcshell.extensions import *
from mcshell.shapes import *
from mcshell.shadows import *


spec = Toolbox([
    # Category("Core", contents=[
    #     Variables,
    #     Logic,
    #     Loops,
    #     Math, 
    #     Text,
    #     Functions,
    #     Threads,
    # ]),
    Category("Python",contents=[
        Text,
        Math,
        Lists,
        SetActions,
        Logic,
        Loops,
        Separator(),
        Functions,
        Threads,
        Separator(),
        Variables,
    ]),
    Separator(),
    Category("MCShell",contents=[
        BedWarsActions,
        Separator(),
        DigitalGeometryActions,
        DigitalSetActions,
        Separator(),
        PlayerActions,
        WorldActions,
        ChatActions,
        EventActions,
        Separator(),
        QActions,
        QTurtleActions,
        SelectionActions,
        ServerActions,
        SetActions,
        Separator(),
        Blocks,
        Entities,
        Items,
        Pickers, 
        Separator(),
        Threads,
        VectorMath,
        Utilities,
        Separator(),
        LSystemShapes,
        QTurtleShapes,
    ])
    # SelectActions,
    # Category("Minecraft",contents=[
    #     PlayerActions,
    #     WorldActions,
    #     EventActions,
    # ]),
    # Category("McEd",contents=[
    #     QTurtleActions,
    # ])

    # Functions,
    # Separator(),       # Adds a visual line in the menu
    # Separator(),       # Adds a visual line in the menu
    # Threads,
    # VectorMath,
    # QActions,          # Includes the whole generated category automatically
    # Separator(),       # Adds a visual line in the menu
    # Category("My Custom Tools", colour="#FF0000", contents=[
    #     Pickers.MC_BLOCK_PICKER_MUSIC,
    #     ConfiguredBlock(
    #         QActions.get_height_at,
    #         inputs={"position": shadow_vec3(10, 64, 10)}
    #     )
    # ]),

])