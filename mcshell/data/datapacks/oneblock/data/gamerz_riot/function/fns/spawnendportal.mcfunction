execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~1 ~ ~1 ~1 ~ ~-1 minecraft:air destroy
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~-1 ~ ~1 ~-1 ~ ~-1 minecraft:air destroy
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~1 ~ ~ ~1 minecraft:air destroy
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~-1 ~ ~ ~-1 minecraft:air destroy

execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~2 ~-3 ~2 ~-2 ~-1 ~-2 minecraft:air destroy

execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~2 ~-3 ~2 ~-2 ~-3 ~-2 minecraft:obsidian

execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~1 ~-3 ~1 ~-1 ~-3 ~-1 minecraft:air

execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~2 ~-3 ~1 ~2 ~-3 ~-1 minecraft:end_portal_frame[facing=west]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~2 ~-3 ~ minecraft:end_portal_frame[facing=west]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~-2 ~-3 ~1 ~-2 ~-3 ~-1 minecraft:end_portal_frame[facing=east]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~-2 ~-3 ~ minecraft:end_portal_frame[facing=east]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~1 ~-3 ~2 ~-1 ~-3 ~2 minecraft:end_portal_frame[facing=north]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~-3 ~2 minecraft:end_portal_frame[facing=north]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~1 ~-3 ~-2 ~-1 ~-3 ~-2 minecraft:end_portal_frame[facing=south]
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~-3 ~-2 minecraft:end_portal_frame[facing=south]

execute as @e[tag=gz-a4-block] at @s run fill ~-2 ~-4 ~-2 ~2 ~-4 ~2 minecraft:end_stone_brick_slab[type=top]
execute as @e[tag=gz-a4-block] at @s run fill ~-1 ~-4 ~-1 ~1 ~-4 ~1 minecraft:purpur_slab[type=top]

execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run title @a title {"text":"The end is near...","color":"light_purple"}
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.ender_dragon.growl hostile @a ~ ~ ~ 1 0.5 1
execute as @e[tag=gz-a4-block] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a minecraft:blindness 6 1 true

scoreboard players set @s gz-a4-portalsfx 400