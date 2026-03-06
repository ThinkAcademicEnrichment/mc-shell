tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
tellraw @s {"text":" Help Menu","color":"gold"}

tellraw @s {"text":" Click on the buttons for more info:\n","color":"yellow"}

tellraw @s {"text":"   ","extra":[{"text":"[Chests]","color":"green","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Click for info\nabout chests!"}}]}

tellraw @s {"text":"\n ","extra":[{"text":"[Website]","color":"green","click_event":{"action":"open_url","url":"https://www.curseforge.com/minecraft/worlds/oneblock-reborn/"},"hover_event":{"action":"show_text","value":"Click to see the\nwebsite for OneBlock!"}},{"text":" "},{"text":"[Video Guide]","color":"green","click_event":{"action":"open_url","url":"https://www.youtube.com/watch?v=kmjZSxd0h1A"},"hover_event":{"action":"show_text","value":"Click to see\na video guide!"}}]}

tellraw @s {"text":" "}