# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s positioned ~ ~1.6 ~ summon wandering_trader as @e[limit=2] summon trader_llama positioned ~ ~1.6 ~ store success entity @s Tame byte 1 run data modify entity @s leash.UUID set from entity @n[type=wandering_trader] UUID

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:wandering_trader,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[tag=gz-a4-newmob] at @s run function gamerz_riot:extra/villager-set-name

# For Llama
execute as @s at @s run tag @e[type=minecraft:trader_llama,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob1

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob

tag @e[tag=gz-a4-newmob1] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob1] remove gz-a4-newmob1