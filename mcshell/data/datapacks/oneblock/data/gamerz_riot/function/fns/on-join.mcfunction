worldborder set 59999968

scoreboard players enable @s gz-a4

execute as @s[scores={gz-a4xOnline=1}] at @s run tellraw @s {"text":"\n","extra":[{"text":"Loaded: ","color":"green"},{"text":"OneBlock 1.2.4","color":"gold"},{"text":" by ","color":"white"},{"text":"§b@§9Gamerz_Riot§r","click_event":{"action":"open_url","url":"https://www.youtube.com/@Gamerz_Riot"},"hover_event":{"action":"show_text","value":"Click to visit my\n§cYouTube channel§r!"}}]}
execute as @s[scores={gz-a4xOnline=1}] at @s run tellraw @s {"text":" ","italic":true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}

execute if entity @e[tag=gz-a4-block,scores={gz-a4-allmined=10..}] as @s[scores={gz-a4xOnline=1,gz-a4-playermined=1..}] at @s run tellraw @s [{"text":"\nYou mined ","color":"yellow"},{"score":{"name":"@s","objective":"gz-a4-playermined"},"bold":true,"color":"gold"},{"text":" of ","color":"yellow"},{"score":{"name":"@e[tag=gz-a4-block,limit=1]","objective":"gz-a4-allmined"},"bold":true,"color":"gold"},{"text":" total blocks!","color":"yellow"}]

execute unless entity @s[tag=gz-a4xIsOn] run tag @s add gz-a4xIsOn