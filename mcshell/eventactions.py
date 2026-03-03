import queue
from mcshell.mcactions_base import MCActionsBase
from mcshell.constants import *
from blockapily import mced_block

class EventActions(MCActionsBase):
    """
    Consolidated class for all Event-driven blocks.
    Utilizes local queues for zero-latency, 0% CPU background execution.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Clear All Events",
    )
    def clear_events(self):
        """
        No longer required with Push architecture, kept for backwards compatibility.
        """
        pass

    @mced_block(
        label="Wait for left block hit by a Player",
        player_name={'label':'Player name','shadow':'<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def wait_for_left_block_hit_by_player(self, player_name: str) -> Vec3:
        target_name = self.mcplayer.name if (not player_name or player_name == 'SELF') else player_name

        q = queue.Queue()
        self.mcplayer.mj.events.subscribe_local('leftBlockHit', q)

        try:
            print(f'Waiting for a left block hit by {target_name}...')
            while True:
                # Check UI cancellation safely
                if self.mcplayer.cancel_event and self.mcplayer.cancel_event.is_set():
                    raise PowerCancelledException

                try:
                    # Block execution until the Java server pushes an event.
                    # 0.1 timeout gives us a window to check the cancel_event repeatedly.
                    event = q.get(timeout=0.1)

                    if event.name == target_name:
                        return event.pos.clone()
                except queue.Empty:
                    continue
        finally:
            self.mcplayer.mj.events.unsubscribe_local('leftBlockHit', q)

    @mced_block(
        label="Wait for a Player death",
        player_name={'label':'Player name','shadow':'<shadow type="text"><field name="TEXT">ALL</field></shadow>'}
    )
    def wait_for_player_death(self, player_name: str) -> str:
        q = queue.Queue()
        self.mcplayer.mj.events.subscribe_local('playerDeath', q)

        try:
            while True:
                if self.mcplayer.cancel_event and self.mcplayer.cancel_event.is_set():
                    raise PowerCancelledException

                try:
                    event = q.get(timeout=0.1)

                    if player_name == 'ALL' or event.name == player_name:
                        return event.name
                except queue.Empty:
                    continue
        finally:
            self.mcplayer.mj.events.unsubscribe_local('playerDeath', q)