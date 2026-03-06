execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run title @a title {"text":"Tricky Trials","color":"dark_red"}
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.about_to_spawn_item master @a[distance=..35] ~ ~ ~ 1 1 1
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.beacon.activate master @a[distance=..35] ~ ~ ~ 0.7 1 0.7
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run summon wind_charge ~ ~0.9 ~ {Motion:[0.0,-1.0,0.0]}
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run summon breeze_wind_charge ~ ~0.9 ~ {Motion:[0.0,-1.0,0.0]}
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a minecraft:darkness 4 1 true