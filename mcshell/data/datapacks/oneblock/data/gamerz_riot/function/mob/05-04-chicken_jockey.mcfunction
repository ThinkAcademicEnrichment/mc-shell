# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon minecraft:chicken ~ ~1.6 ~ {IsChickenJockey:1b,Passengers:[{id:"minecraft:zombie",IsBaby:1b,equipment:{mainhand:{id:"minecraft:golden_spear",count:1,components:{"minecraft:enchantments":{"minecraft:sharpness":1}}},feet:{id:"minecraft:copper_boots",count:1},head:{id:"minecraft:leather_helmet",count:1,components:{"minecraft:dyed_color":2871105}}}}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:zombie,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob