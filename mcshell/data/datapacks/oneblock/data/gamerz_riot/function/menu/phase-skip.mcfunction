#playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2

execute if entity @e run tellraw @s [{"text": "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Skip to Phase","color": "gray"},{"text": "\n Changes the infinite block to a selected §6phase§r!\n","color": "white"}]

execute if entity @e[scores={gz-a4-riot=1..47}] run tellraw @s [{"text": "  "},{"text": "> Tutorial","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=1..47}] run tellraw @s [{"text": "  "},{"text": "[Tutorial]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 80"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=49..332}] run tellraw @s [{"text": "  "},{"text": "> Phase 1: The Forest","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=49..332}] run tellraw @s [{"text": "  "},{"text": "[Phase 1: The Forest]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 81"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=334..863}] run tellraw @s [{"text": "  "},{"text": "> Phase 2: The Underground","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=334..863}] run tellraw @s [{"text": "  "},{"text": "[Phase 2: The Underground]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 82"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=865..1686}] run tellraw @s [{"text": "  "},{"text": "> Phase 3: Tundra","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=865..1686}] run tellraw @s [{"text": "  "},{"text": "[Phase 3: Tundra]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 83"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=1688..2552}] run tellraw @s [{"text": "  "},{"text": "> Phase 4: Deepslate Caves","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=1688..2552}] run tellraw @s [{"text": "  "},{"text": "[Phase 4: Deepslate Caves]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 84"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=2554..3310}] run tellraw @s [{"text": "  "},{"text": "> Phase 5: Spiked Lush Park","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=2554..3310}] run tellraw @s [{"text": "  "},{"text": "[Phase 5: Spiked Lush Park]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 85"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=3312..4172}] run tellraw @s [{"text": "  "},{"text": "> Phase 6: Ocean Floor","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=3312..4172}] run tellraw @s [{"text": "  "},{"text": "[Phase 6: Ocean Floor]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 86"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=4174..5129}] run tellraw @s [{"text": "  "},{"text": "> Phase 7: Red Desert","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=4174..5129}] run tellraw @s [{"text": "  "},{"text": "[Phase 7: Red Desert]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 87"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=5131..6450}] run tellraw @s [{"text": "  "},{"text": "> Phase 8: Jungle Dungeon","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=5131..6450}] run tellraw @s [{"text": "  "},{"text": "[Phase 8: Jungle Dungeon]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 88"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=6452..7762}] run tellraw @s [{"text": "  "},{"text": "> Phase 9: Pale Swamp","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=6452..7762}] run tellraw @s [{"text": "  "},{"text": "[Phase 9: Pale Swamp]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 89"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=7764..8611}] run tellraw @s [{"text": "  "},{"text": "> Phase 10: The Nether","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=7764..8611}] run tellraw @s [{"text": "  "},{"text": "[Phase 10: The Nether]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 90"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=8613..10122}] run tellraw @s [{"text": "  "},{"text": "> Phase 11: Cherry Fields","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=8613..10122}] run tellraw @s [{"text": "  "},{"text": "[Phase 11: Cherry Fields]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 91"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=10124..11722}] run tellraw @s [{"text": "  "},{"text": "> Phase 12: Idyll","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=10124..11722}] run tellraw @s [{"text": "  "},{"text": "[Phase 12: Idyll]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 92"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=11724..13152}] run tellraw @s [{"text": "  "},{"text": "> Phase 13: The Deepdark","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=11724..13152}] run tellraw @s [{"text": "  "},{"text": "[Phase 13: The Deepdark]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 93"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=13154..14618}] run tellraw @s [{"text": "  "},{"text": "> Phase 14: Desolated Lands","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=13154..14618}] run tellraw @s [{"text": "  "},{"text": "[Phase 14: Desolated Lands]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 94"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]

execute if entity @e[scores={gz-a4-riot=14620..15635}] run tellraw @s [{"text": "  "},{"text": "> Phase 15: The End","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=14620..15635}] run tellraw @s [{"text": "  "},{"text": "[Phase 15: The End]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 95"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]


execute if entity @e[scores={gz-a4-riot=15637..}] run tellraw @s [{"text": "  "},{"text": "> The Afterphases","color": "white","italic": false,"hover_event":{"action":"show_text","value":"Current §6phase§r!"}}]
execute if entity @e unless entity @e[tag=gz-a4-block,scores={gz-a4-riot=15637..}] run tellraw @s [{"text": "  "},{"text": "[The Afterphases]","color": "gold","click_event":{"action":"run_command","command":"/trigger gz-a4 set 96"},"hover_event":{"action":"show_text","value":"Click to skip\nto this §6phase§r!"}}]
execute if entity @e run tellraw @s [{"text": "\n "},{"text": "[Back]","color": "red","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Click to go back."}},{"text": "\n"}]