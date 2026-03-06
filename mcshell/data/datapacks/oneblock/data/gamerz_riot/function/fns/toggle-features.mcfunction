## Toogle SIDEBAR ##
execute as @e[tag=gz-a4-block,scores={gz-a4-toggleScr=1}] run scoreboard objectives add gz-a4xSbOn dummy
execute as @e[tag=gz-a4-block,scores={gz-a4-toggleScr=2}] run scoreboard objectives add gz-a4xSbOff dummy

scoreboard players add @e[tag=gz-a4-block,scores={gz-a4-toggleScr=1}] gz-a4xSbOn 1
execute as @e[scores={gz-a4xSbOn=1}] run function gamerz_riot:sb
execute as @e[scores={gz-a4xSbOn=1}] run tag @s add sidebar_On
execute as @e[scores={gz-a4xSbOn=2..}] run scoreboard players set @e[tag=gz-a4-block] gz-a4xSbOn 2

scoreboard players add @e[tag=gz-a4-block,scores={gz-a4-toggleScr=2}] gz-a4xSbOff 1
execute as @e[scores={gz-a4xSbOff=1}] run scoreboard objectives remove gz-a4-scoreboard
execute as @e[scores={gz-a4xSbOff=1}] run tag @s remove sidebar_On
execute as @e[scores={gz-a4xSbOff=2..}] run scoreboard players set @e[tag=gz-a4-block] gz-a4xSbOff 2


execute as @e[scores={gz-a4-toggleScr=2}] run scoreboard objectives remove gz-a4xSbOn
execute as @e[scores={gz-a4-toggleScr=1}] run scoreboard objectives remove gz-a4xSbOff


## Toogle ACTIONBAR ##
execute as @e[scores={gz-a4-toggleAct=1}] run scoreboard objectives add gz-a4xAbOn dummy
execute as @e[scores={gz-a4-toggleAct=2}] run scoreboard objectives add gz-a4xAbOff dummy

scoreboard players add @e[scores={gz-a4-toggleAct=1}] gz-a4xAbOn 1
execute as @e[scores={gz-a4xAbOn=1}] run tag @s add actionbar_On
execute as @e[scores={gz-a4xAbOn=2..}] run scoreboard players set @s gz-a4xAbOn 2

scoreboard players add @e[scores={gz-a4-toggleAct=2}] gz-a4xAbOff 1
execute as @e[scores={gz-a4xAbOff=1}] run tag @s remove actionbar_On
execute as @e[scores={gz-a4xAbOff=2..}] run scoreboard players set @s gz-a4xAbOff 2


execute as @e[scores={gz-a4-toggleAct=2}] run scoreboard objectives remove gz-a4xAbOn
execute as @e[scores={gz-a4-toggleAct=1}] run scoreboard objectives remove gz-a4xAbOff