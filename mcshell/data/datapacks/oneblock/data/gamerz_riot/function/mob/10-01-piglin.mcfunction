# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-2-2

# Spawn the mobs
execute as @s at @s run summon minecraft:piglin ~ ~1.6 ~ {CannotHunt:1b,equipment:{mainhand:{id:"minecraft:golden_sword",count:1},head:{id:"minecraft:golden_helmet",count:1}}}
execute as @s at @s run summon minecraft:piglin ~ ~1.6 ~ {CannotHunt:1b,equipment:{mainhand:{id:"minecraft:golden_sword",count:1},head:{id:"minecraft:golden_helmet",count:1}}}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:piglin,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob