playsound minecraft:ui.button.click master @s ~ ~ ~ 0.2 0.7 0.2

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


tellraw @a {"text":"Respawned the end portal.","color":"light_purple"}

scoreboard players set @e[tag=gz-a4-block] gz-a4-portalsfx 200
execute as @e[tag=gz-a4-block] at @s positioned ~-4 ~-3 ~-4 run kill @e[type=item,nbt={Item:{id:"minecraft:obsidian"}},dx=7,dy=2,dz=7]