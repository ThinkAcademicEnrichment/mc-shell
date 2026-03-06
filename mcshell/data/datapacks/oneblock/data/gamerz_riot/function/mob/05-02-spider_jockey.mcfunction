# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon minecraft:spider ~ ~1.6 ~ {attributes:[{id:"minecraft:scale",base:0.8}],Passengers:[{id:"minecraft:skeleton",equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:infinity":1}}},feet:{id:"minecraft:copper_boots",count:1},head:{id:"minecraft:leather_helmet",count:1,components:{"minecraft:dyed_color":2871105,"minecraft:enchantments":{"minecraft:projectile_protection":2}}}},attributes:[{id:"minecraft:scale",base:0.66}]}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:skeleton,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob