from mcshell.mcactions_base import MCActionsBase
from mcshell.constants import *
from blockapily import mced_block

class EventActions(MCActionsBase):
    """
    Consolidated class for all Event-driven blocks.
    """
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Clear All Events",
    )
    def clear_events(self):
        """
        Directly calls the player's clear_events method to flush the buffer.
        """
        self.mcplayer.clear_events()

    @mced_block(
        label="Wait for left block hit by a Player",
        player_name={'label':'Player name','shadow':'<shadow type="text"><field name="TEXT">SELF</field></shadow>'}
    )
    def wait_for_left_block_hit_by_player(self,player_name:str) -> Vec3:
        player_name = self.mcplayer.name if (not player_name or player_name == 'SELF') else player_name
        _player_entity_id = self.mcplayer.mj.world.getPlayerId(player_name)
        print(f'Waiting for a left block hit by {player_name} (id: {_player_entity_id})')
        while True:
            if self.mcplayer.cancel_event and self.mcplayer.cancel_event.isSet():
                raise PowerCancelledException

            _events = self.mcplayer.mj.events.pollLeftBlockHits()
            if _events:
                _event = _events[0]
                # We must check that our player did the strike!
                if not _event.entityId == _player_entity_id:
                    continue
                _v0 = _event.pos.clone()
                return _event.pos.clone()

    @mced_block(
        label="Wait for a Player death",
        player_name={'label':'Player name','shadow':'<shadow type="text"><field name="TEXT">ALL</field></shadow>'}
    )
    def wait_for_player_death(self,player_name:str) -> str:
        while True:
            if self.mcplayer.cancel_event and self.mcplayer.cancel_event.isSet():
                raise PowerCancelledException

            _events = self.mcplayer.mj.events.pollPlayerDeaths()
            if _events:
                _life_cycle_event = _events[0]
                print(_life_cycle_event)
                if player_name != 'ALL':
                    if not _life_cycle_event.name != player_name:
                        continue
                    return player_name
                else:
                    return _life_cycle_event.name



    # @mced_block(
    #     label="Wait for Chat from [player]",
    #     player_name={'label': 'Player', 'shadow': 'text'},
    # )
    # def wait_for_chat_by_name(self, player_name: str = "SELF") -> str:
    #     """
    #     Resolves the target player and waits for a chat message from them.
    #     """
    #     target = self._get_player_by_name(player_name)
    #     target_id = target.pc.getPlayerEntityId(target.name)
    #     return target.wait_for_chat_post(entity_id=target_id)
    #
    # @mced_block(
    #     label="Wait for Arrow Hit from [player]",
    #     player_name={'label': 'Player', 'shadow': 'text'},
    # )
    # def wait_for_projectile_by_name(self, player_name: str = "SELF") -> Vec3:
    #     """
    #     Resolves the target player and waits for a projectile hit event.
    #     """
    #     target = self._get_player_by_name(player_name)
    #     vec = target.wait_for_projectile_hit()
    #     return Vec3(vec.x, vec.y, vec.z)