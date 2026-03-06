summon minecraft:area_effect_cloud ~ ~ ~ {Tags:["gz-a4-rand"],Duration:1}
summon minecraft:area_effect_cloud ~ ~ ~ {Tags:["gz-a4-rand"],Duration:1}
scoreboard players add @e[tag=gz-a4-rand,distance=..1,sort=random,limit=1] gz-a4-variant 1
scoreboard players add @e[tag=gz-a4-rand,distance=..1,sort=random,limit=1] gz-a4-variant 2
scoreboard players add @e[tag=gz-a4-rand,distance=..1,sort=random,limit=1] gz-a4-variant 4
scoreboard players add @e[tag=gz-a4-rand,distance=..1,sort=random,limit=1] gz-a4-variant 8
scoreboard players operation @s gz-a4-variant = @e[tag=gz-a4-rand,distance=..1,sort=random,limit=1] gz-a4-variant
kill @e[tag=gz-a4-rand]