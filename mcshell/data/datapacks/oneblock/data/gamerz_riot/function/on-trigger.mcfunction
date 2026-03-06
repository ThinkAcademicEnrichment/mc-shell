################
# Map Triggers #
################

execute as @s[scores={gz-a4=1}] at @s run function gamerz_riot:menu/start
execute as @s[scores={gz-a4=2}] at @s run function gamerz_riot:menu/main
execute as @s[scores={gz-a4=3}] at @s run function gamerz_riot:menu/scoreboard-toggle
execute as @s[scores={gz-a4=4}] at @s run function gamerz_riot:menu/actionbar-toggle
execute as @s[scores={gz-a4=10}] at @s run function gamerz_riot:menu/help
execute as @s[scores={gz-a4=12}] at @s run function gamerz_riot:menu/phase-skip-confirm
execute as @s[scores={gz-a4=14}] at @s run function gamerz_riot:menu/about
#execute as @e[scores={gz-a4=16}] run function gamerz_riot:menu/phase-skip
execute as @e[scores={gz-a4=18}] run scoreboard players set @s gz-a4-toggleAct 1
execute as @e[scores={gz-a4=19}] run scoreboard players set @s gz-a4-toggleAct 2
execute as @e[scores={gz-a4=21}] run scoreboard players set @e[tag=gz-a4-block] gz-a4-toggleScr 1
execute as @e[scores={gz-a4=22}] run scoreboard players set @e[tag=gz-a4-block] gz-a4-toggleScr 2
execute as @s[scores={gz-a4=60..75}] at @s run function gamerz_riot:menu/help-trigger
execute as @s[scores={gz-a4=80..96}] at @s run function gamerz_riot:menu/phase-skip-trigger

#-------------------------------------------------------------------------------------------------------------------------------#

### > Actionbar Sound < ###
execute as @s[scores={gz-a4=18}] run playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2
execute as @s[scores={gz-a4=18}] run scoreboard players set @e[tag=gz-a4-block] gz-a4-abDelay 0
execute as @s[scores={gz-a4=18},tag=!actionbar_On] at @s run function gamerz_riot:menu/start

execute as @s[scores={gz-a4=19}] run playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2
execute as @s[scores={gz-a4=19}] run title @s actionbar {"color":"gray","text":" "}
execute as @s[scores={gz-a4=19},tag=actionbar_On] at @s run function gamerz_riot:menu/start

### > Sidebar Sound < ###
execute as @s[scores={gz-a4=21}] run playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2
execute as @s[scores={gz-a4=21}] at @s run function gamerz_riot:menu/start
 # execute as @s[scores={gz-a4=21}] run title @a title {"color":"#CCE0FF","text":"\n §f▹§r [Sidebar Turned §6ON§r]\n"}

execute as @s[scores={gz-a4=22}] run playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2
execute as @s[scores={gz-a4=22}] at @s run function gamerz_riot:menu/start
 # execute as @s[scores={gz-a4=22}] run title @a title {"color":"#CCE0FF","text":"\n §f▹§r [Sidebar Turned §cOFF§r]\n"}

#-------------------------------------------------------------------------------------------------------------------------------#

############################
# Reset Trigger Scoreboard #
############################

scoreboard players enable @a[scores={gz-a4=1..}] gz-a4
scoreboard players set @a[scores={gz-a4=1..}] gz-a4 0