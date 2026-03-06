data merge entity @s {Duration:2000000000,Age:0}

particle minecraft:ash ~ ~1.2 ~ 0.2 0.3 0.2 0.01 1 force

function gamerz_riot:extra/chest_effects

execute if block ~ ~ ~ minecraft:air run tag @s add gz-a4-mined
execute if block ~ ~ ~ minecraft:fire run tag @s add gz-a4-mined
execute if block ~ ~ ~ minecraft:water run tag @s add gz-a4-mined

execute as @e[tag=gz-a4-mined] at @s run function gamerz_riot:phase/waitinginit
execute as @e[tag=gz-a4-waiting] at @s run function gamerz_riot:phase/waiting

execute as @s[tag=gz-a4-mined] at @s run fill ~ ~ ~ ~ ~ ~ minecraft:barrier replace minecraft:air
execute as @s[tag=gz-a4-mined] at @s run fill ~ ~ ~ ~ ~ ~ minecraft:barrier replace minecraft:fire
execute as @s[tag=gz-a4-mined] at @s run fill ~ ~ ~ ~ ~ ~ minecraft:barrier replace minecraft:water

tag @s[scores={gz-a4-riot=0}] add gz-a4-mined

scoreboard players add @s gz-a4-riot 0
execute as @s[tag=gz-a4-mined] at @s run function gamerz_riot:fns/progress

execute as @s[scores={gz-a4-riot=..1000}] at @s run weather clear 5000

# [Discontinued Feature] #execute as @s[scores={gz-a4-riot=6454..6752}] at @s run weather thunder

execute as @e[tag=gz-a4-mined] at @s unless entity @s[tag=gz-a4-waiting] run function gamerz_riot:phase/spawner
execute as @e[tag=gz-a4-block,scores={gz-a4-cool=1..}] at @s unless entity @s[tag=gz-a4-mined] unless entity @s[tag=gz-a4-waiting] run function gamerz_riot:phase/spawner
execute as @e[tag=gz-a4-block] run function gamerz_riot:phase/endportal

# TEXTS
execute as @e[tag=gz-a4-block] at @s run execute as @s[tag=gz-a4-mined] at @s unless entity @s[scores={gz-a4-upgrade=1..}] run function gamerz_riot:fns/texts
execute as @e[tag=gz-a4-block] at @s run execute as @s[scores={gz-a4-cool=1}] at @s unless entity @s[tag=gz-a4-mined] unless entity @s[scores={gz-a4-upgrade=1..}] run function gamerz_riot:fns/texts

# BLOCK BREAK EFFECT
execute as @e[tag=gz-a4-block,scores={gz-a4-cool=1}] at @s run particle minecraft:cloud ~ ~0.15 ~ 0.4 0.4 0.4 0.01 6 force
execute as @e[tag=gz-a4-block,scores={gz-a4-cool=1}] at @s run particle minecraft:poof ~ ~ ~ 0.4 0.4 0.4 0.01 4 force
execute as @e[tag=gz-a4-block,scores={gz-a4-cool=1}] at @s run playsound minecraft:block.bamboo_sapling.place master @a[distance=..35] ~ ~ ~ 0.5 1.2 1
execute as @e[tag=gz-a4-block,scores={gz-a4-cool=1}] at @s run playsound minecraft:block.wool.break master @a[distance=..35] ~ ~ ~ 0.5 0.1 1

# TP ITEM TO THE ONEBLOCK
execute as @e[type=item,distance=..2] run data merge entity @s {NoAI:true,Invulnerable:true,Age:-32768}
execute as @e[type=item,distance=..2] unless entity @s[tag=gz-a4-tped] at @s run tp @s 0.5 61.3 0.5
execute as @e[type=item,distance=..2] unless entity @s[tag=gz-a4-tped] at @s run data merge entity @s {PickupDelay:15,Motion:[0.0,0.0,0.0]}
tag @e[type=item,distance=..2] add gz-a4-tped

execute as @s[tag=gz-a4-mined] at @s run tp @e[type=item,distance=..2] 0.5 61.3 0.5
execute as @s[tag=gz-a4-mined] at @s run execute as @e[type=item,distance=..2] at @s run data merge entity @s {Motion:[0.0,0.0,0.0]}

execute as @s[tag=gz-a4-mined] at @s run execute as @a[x=0,dx=0,y=61,dy=0,z=0,dz=0] at @s run tp @s ~ ~0.3 ~

# VERSION WARNING
execute if block 0 60 0 minecraft:barrier run scoreboard players add @s gz-a4-warning 1

execute unless block 0 60 0 minecraft:barrier run scoreboard players set @s gz-a4-warning 0

execute if entity @s[scores={gz-a4-warning=50..}] run function gamerz_riot:extra/barrier-warning
execute as @s[scores={gz-a4-warning=50..}] at @s run setblock ~ ~ ~ minecraft:dirt
scoreboard players set @s[scores={gz-a4-warning=50..}] gz-a4-warning 0

scoreboard players add @e[tag=gz-a4-block] gz-a4-cool 0
scoreboard players remove @e[tag=gz-a4-block,scores={gz-a4-cool=1..}] gz-a4-cool 1

tag @e[tag=gz-a4-mined] remove gz-a4-mined