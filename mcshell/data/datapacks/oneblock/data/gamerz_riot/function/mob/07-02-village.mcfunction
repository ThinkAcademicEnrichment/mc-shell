# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon minecraft:villager ~ ~1.6 ~

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:villager,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[type=minecraft:villager,tag=gz-a4-newmob,distance=..2] at @s if entity @e run data merge entity @s {CanPickUpLoot:1b}
execute as @e[tag=gz-a4-newmob] at @s run function gamerz_riot:extra/villager-set-name

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob