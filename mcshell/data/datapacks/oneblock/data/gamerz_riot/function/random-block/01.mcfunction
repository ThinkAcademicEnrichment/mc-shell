function gamerz_riot:randomizer/gz-a4-randblock-1-5m
execute as @s[scores={gz-a4-randblock=1..100}] at @s run setblock ~ ~ ~ grass_block
execute as @s[scores={gz-a4-randblock=101..128}] at @s run setblock ~ ~ ~ clay
execute as @s[scores={gz-a4-randblock=129..150}] at @s run setblock ~ ~ ~ oak_log
execute as @s[scores={gz-a4-randblock=151..184}] at @s run setblock ~ ~ ~ birch_log
execute as @s[scores={gz-a4-randblock=185..195}] at @s run setblock ~ ~ ~ melon
execute as @s[scores={gz-a4-randblock=196..202}] at @s run setblock ~ ~ ~ pumpkin