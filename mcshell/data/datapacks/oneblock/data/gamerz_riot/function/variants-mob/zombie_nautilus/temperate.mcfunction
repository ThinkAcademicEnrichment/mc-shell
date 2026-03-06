# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon zombie_nautilus ~ ~1.6 ~ {variant:"minecraft:temperate"}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:zombie_nautilus,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[tag=gz-a4-newmob] run data merge entity @s {active_effects:[{id:"minecraft:resistance",amplifier:5,duration:500}]}
execute as @e[tag=gz-a4-newmob] run data merge entity @s {active_effects:[{id:"minecraft:fire_resistance",amplifier:0,duration:2000}]}

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob