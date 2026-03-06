playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2

execute if entity @e run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Sidebar Options:\n  ","color":"gray"}

execute unless entity @e[tag=sidebar_On] run tellraw @s [{"text":" "},{"text":" [ON]","color":"green","click_event":{"action":"run_command","command":"/trigger gz-a4 set 21"},"hover_event":{"action":"show_text","value":"Turn ON the Sidebar!"}}]
execute if entity @e[tag=sidebar_On] run tellraw @s [{"text":"  ▹","bold":true,"color":"green"},{"text":" ON","bold":false,"color":"white","hover_event":{"action":"show_text","value":"Turned §6ON§r!"}}]

execute if entity @e[tag=sidebar_On] run tellraw @s [{"text":" "},{"text":" [OFF]","color":"dark_red","click_event":{"action":"run_command","command":"/trigger gz-a4 set 22"},"hover_event":{"action":"show_text","value":"Turn OFF the Sidebar"}}]
execute unless entity @e[tag=sidebar_On] run tellraw @s [{"text":"  ▹","bold":true,"color":"#FF5B42"},{"text":" OFF","bold":false,"color":"white","hover_event":{"action":"show_text","value":"Turned §cOFF§!"}}]

execute if entity @e run tellraw @s [{"text":"\n "},{"text":"[Back]","color": "red","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Click to go back."}}]


execute if entity @e run tellraw @s {"text":""}