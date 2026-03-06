# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-2

# Spawn the mobs
execute as @s at @s run summon minecraft:skeleton ~ ~1.6 ~ {equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:unbreaking":1}}},feet:{id:"minecraft:leather_boots",count:1,components:{"minecraft:dyed_color":16701501}},legs:{id:"minecraft:leather_leggings",count:1,components:{"minecraft:dyed_color":4673362}},chest:{id:"minecraft:leather_chestplate",count:1,components:{"minecraft:dyed_color":1908001,"minecraft:enchantments":{"minecraft:unbreaking":1}}},head:{id:"minecraft:copper_helmet",count:1}}}
execute as @s[scores={gz-a4-mobamount=2..}] at @s run summon minecraft:skeleton ~ ~1.6 ~ {equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:unbreaking":1}}},feet:{id:"minecraft:leather_boots",count:1,components:{"minecraft:dyed_color":16701501}},legs:{id:"minecraft:leather_leggings",count:1,components:{"minecraft:dyed_color":4673362}},chest:{id:"minecraft:leather_chestplate",count:1,components:{"minecraft:dyed_color":1908001,"minecraft:enchantments":{"minecraft:unbreaking":1}}},head:{id:"minecraft:copper_helmet",count:1}}}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:skeleton,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[tag=gz-a4-newmob,distance=..30] at @s if entity @e run data merge entity @s {CustomName:{"text":"Monster Guard","color": "dark_purple"},CustomNameVisible:1b}

# Party effects
scoreboard players set @e[tag=gz-a4-newmob] gz-a4-pm-life 9000
execute as @e[tag=gz-a4-newmob] at @s run function gamerz_riot:effects/party-mob-spawn

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob