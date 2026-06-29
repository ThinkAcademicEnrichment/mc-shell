import { MCED } from "../lib/constants.mjs";

export function defineServerActionsBlocks(Blockly) {

    Blockly.Blocks['serveractions_server_time_query'] = {
        init: function() {
            this.appendDummyInput().appendField("Query the world time");
            this.appendValueInput('time_type').appendField('Time Type').setCheck('TimeType');
            this.setOutput(true, 'Number');
            this.setColour("#5C7457");
            this.setTooltip("Query the world time.");
        }
    };

    Blockly.Blocks['serveractions_server_time_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set the world time");
            this.appendValueInput('time_of_day').appendField('Time').setCheck('Time');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Set the world time.");
        }
    };

    Blockly.Blocks['serveractions_server_set_time'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Time to [time]");
            this.appendValueInput('time').appendField('Time').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the server time.");
        }
    };

    Blockly.Blocks['serveractions_server_weather_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Weather to [weather]");
            this.appendValueInput('weather').appendField('Weather').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the server weather (clear, rain, thunder).");
        }
    };

    Blockly.Blocks['serveractions_server_gamemode_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Gamemode to [gamemode] for [target]");
            this.appendValueInput('gamemode').appendField('Game Mode').setCheck('GameMode');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Changes a player's gamemode.");
        }
    };

    Blockly.Blocks['serveractions_server_gamerule_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Gamerule [rule] to True/False");
            this.appendValueInput('rule').appendField('Game Rule').setCheck('GameRule');
this.appendValueInput('value').appendField('Value').setCheck('Boolean');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Modifies a server game rule.");
        }
    };

    Blockly.Blocks['serveractions_server_gamerule_integer_set'] = {
        init: function() {
            this.appendDummyInput().appendField("Set Gamerule [rule] to [value]");
            this.appendValueInput('rule').appendField('Game Rule').setCheck('IntegerGameRule');
this.appendValueInput('value').appendField('Value').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Modifies a server game rule.");
        }
    };

    Blockly.Blocks['serveractions_server_locate_structure'] = {
        init: function() {
            this.appendDummyInput().appendField("Locate Structure [structure]");
            this.appendValueInput('structure').appendField('Structure').setCheck('Structure');
            this.setOutput(true, '3DVector');
            this.setColour("#5C7457");
            this.setTooltip("Locates a structure and returns its coordinates.");
        }
    };

    Blockly.Blocks['serveractions_server_execute_command'] = {
        init: function() {
            this.appendDummyInput().appendField("Execute Command");
            this.appendValueInput('command').appendField('Command').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Executes a custom command string.");
        }
    };

    Blockly.Blocks['serveractions_server_clear_inventory'] = {
        init: function() {
            this.appendDummyInput().appendField("Clear Inventory of [target]");
            this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Clears items from a player's inventory.");
        }
    };

    Blockly.Blocks['serveractions_server_give_block_item_projectile'] = {
        init: function() {
            this.appendDummyInput().appendField("Give [count] [block|item|entity] to [target]");
            this.appendValueInput('material').appendField('Block or Item or Entity').setCheck(['Block', 'Entity', 'Item']);
this.appendValueInput('count').appendField('Count').setCheck('Number');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Gives an item to a player.");
        }
    };

    Blockly.Blocks['serveractions_server_summon'] = {
        init: function() {
            this.appendDummyInput().appendField("Summon [entity] at [pos]");
            this.appendValueInput('entity').appendField('Entity').setCheck('Entity');
this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Summons an entity at a specific location.");
        }
    };

    Blockly.Blocks['serveractions_server_teleport'] = {
        init: function() {
            this.appendDummyInput().appendField("Teleport [target] to [pos]");
            this.appendValueInput('target').appendField('Target Player').setCheck('String');
this.appendValueInput('pos').appendField('Position').setCheck('3DVector');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Teleports a player or entity to a location.");
        }
    };

    Blockly.Blocks['serveractions_server_player_data_get_pos'] = {
        init: function() {
            this.appendDummyInput().appendField("Get a Player's position");
            this.appendValueInput('player_name').appendField('Player Name').setCheck('String');
            this.setOutput(true, '3DVector');
            this.setColour("#5C7457");
            this.setTooltip("");
        }
    };

    Blockly.Blocks['serveractions_server_apply_effect'] = {
        init: function() {
            this.appendDummyInput().appendField("Apply [effect] to [target] for [seconds]s (Level [amplifier])");
            this.appendValueInput('effect').appendField('Effect').setCheck('Effect');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
this.appendValueInput('seconds').appendField('Duration').setCheck('Number');
this.appendValueInput('amplifier').appendField('Level').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Applies a status effect to a target.");
        }
    };

    Blockly.Blocks['serveractions_server_show_title'] = {
        init: function() {
            this.appendDummyInput().appendField("Show Title [text] as [action] for [target]");
            this.appendValueInput('text').appendField('Message').setCheck('String');
this.appendValueInput('action').appendField('Title Action').setCheck('TitleAction');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Displays large text on the player's screen.");
        }
    };

    Blockly.Blocks['serveractions_server_damage'] = {
        init: function() {
            this.appendDummyInput().appendField("Damage [target] by [amount]");
            this.appendValueInput('target').appendField('Target Player').setCheck('String');
this.appendValueInput('amount').appendField('Amount').setCheck('Number');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Deals damage to a target.");
        }
    };

    Blockly.Blocks['serveractions_server_list'] = {
        init: function() {
            this.appendDummyInput().appendField("List Players on Server");
            
            this.setOutput(true, 'Array');
            this.setColour("#5C7457");
            this.setTooltip("List the players on the server. ");
        }
    };

    Blockly.Blocks['serveractions_server_spawnpoint'] = {
        init: function() {
            this.appendDummyInput().appendField("Set the spawnpoint for [target] at [position]");
            this.appendValueInput('position').appendField('Position').setCheck('3DVector');
this.appendValueInput('target').appendField('Target Player').setCheck('String');
            this.setPreviousStatement(true); this.setNextStatement(true);
            this.setColour("#5C7457");
            this.setTooltip("Sets the spawn point for a player.");
        }
    };
}