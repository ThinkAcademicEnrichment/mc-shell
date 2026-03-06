playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2

execute if entity @e run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Settings\n  ","color":"gray"}
execute if entity @e run tellraw @s [{"text":"  "},{"text":"[Help Menu]","color":"gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 10"},"hover_event":{"action":"show_text","value":"Open the\nhelp menu!"}}]
execute if entity @e run tellraw @s [{"text":"  "},{"text":"[Skip to Phase]","color":"gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 12"},"hover_event":{"action":"show_text","value":"Skip to\nthis phase!"}}]

execute if entity @e run tellraw @s [{"text":"  "},{"text":"[Manage Sidebar]","color":"gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 3"},"hover_event":{"action":"show_text","value":"Toggle On-Off \nSidebar!"}}]
execute if entity @e run tellraw @s [{"text":"  "},{"text":"[Manage Actionbar]","color":"gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 4"},"hover_event":{"action":"show_text","value":"Toggle On-Off \nActionbar!"}}]


execute if entity @e run tellraw @s [{"text":"\n  "},{"text":"[About OneBlock]","color":"aqua","click_event":{"action":"run_command","command":"/trigger gz-a4 set 14"},"hover_event":{"action":"show_text","value":"Get info about\nOneBlock!"}}]

execute if entity @e run tellraw @s [{"text":"\n "},{"text":"[Back]","color": "red","click_event":{"action":"run_command","command":"/trigger gz-a4 set 1"},"hover_event":{"action":"show_text","value":"Click to go back."}}]

execute if entity @e run tellraw @s {"text":""}