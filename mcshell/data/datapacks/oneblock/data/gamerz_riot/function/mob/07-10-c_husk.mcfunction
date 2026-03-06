# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon camel_husk ~ ~ ~ {Passengers:[{id:"minecraft:husk",equipment:{mainhand:{id:"minecraft:golden_spear",count:1}}}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:camel_husk,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @s at @s run tag @e[type=minecraft:husk,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob