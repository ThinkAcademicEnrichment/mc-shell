
from mcshell.constants import *

from mcshell.actions.serveractions import ServerActions
from mcshell.actions.qturtleactions import QTurtleActions
from mcshell.actions.qactions import QActions 
from mcshell.actions.digitalgeometryactions import DigitalGeometryActions
from mcshell.actions.digitalsetactions import DigitalSetActions
from mcshell.shapes.lsystemshapes import LSystemShapes
from mcshell.shapes.qturtleshapes import QTurtleShapes

# FIX: Robustly import generated actions to prevent build-time crashes
try:
    from mcshell.actions.generated_actions import (
        PlayerActions,WorldActions,ChatActions,EventActions
    )
except ImportError:
    PlayerActions = None
    WorldActions = None
    ChatActions = None
    EventActions = None

class MCActions(
    WorldActions, PlayerActions,ChatActions,
    EventActions,ServerActions,QTurtleActions,QActions,DigitalGeometryActions,DigitalSetActions,
    QTurtleShapes,LSystemShapes):
    """
    Unified API for Blockly combining all action groups.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0.0001):
        # Initialize all parent classes properly
        PlayerActions.__init__(self, mc_player_instance, delay_between_blocks)
        WorldActions.__init__(self, mc_player_instance, delay_between_blocks)
        ChatActions.__init__(self, mc_player_instance, delay_between_blocks)
        EventActions.__init__(self, mc_player_instance, delay_between_blocks)
        ServerActions.__init__(self, mc_player_instance, delay_between_blocks)
        QTurtleActions.__init__(self, mc_player_instance, delay_between_blocks)
        QActions.__init__(self, mc_player_instance, delay_between_blocks)
        DigitalGeometryActions.__init__(self,mc_player_instance, delay_between_blocks)
        DigitalSetActions.__init__(self,mc_player_instance, delay_between_blocks)
        QTurtleShapes.__init__(self,mc_player_instance,delay_between_blocks)
        LSystemShapes.__init__(self, mc_player_instance,delay_between_blocks)

