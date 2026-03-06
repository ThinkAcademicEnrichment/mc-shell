execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run title @a title {"text":"Tiny Trials","color":"green"}
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.beacon.power_select master @a[distance=..35] ~ ~ ~ 1 1 1
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run summon wind_charge ~ ~0.9 ~ {Motion:[0.0,-1.0,0.0]}
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a minecraft:darkness 2 1 true