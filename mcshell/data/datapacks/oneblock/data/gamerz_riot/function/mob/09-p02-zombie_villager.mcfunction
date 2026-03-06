# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon minecraft:zombie_villager ~ ~1.6 ~ {equipment:{mainhand:{id:"minecraft:diamond_sword",count:1,components:{"minecraft:enchantments":{"minecraft:sharpness":2,"minecraft:fire_aspect":1}}},feet:{id:"minecraft:leather_boots",count:1,components:{"minecraft:dyed_color":328708}},legs:{id:"minecraft:leather_leggings",count:1,components:{"minecraft:dyed_color":4673362}},chest:{id:"minecraft:leather_chestplate",count:1,components:{"minecraft:dyed_color":10524976,"minecraft:enchantments":{"minecraft:unbreaking":1,"minecraft:thorns":1}}},head:{id:"minecraft:diamond_helmet",count:1}}}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:zombie_villager,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[tag=gz-a4-newmob,distance=..30] at @s if entity @e run data merge entity @s {CustomName:{"text":"Monster Guard","color": "dark_purple"},CustomNameVisible:1b}

# Party effects
scoreboard players set @e[tag=gz-a4-newmob] gz-a4-pm-life 9000
execute as @e[tag=gz-a4-newmob] at @s run function gamerz_riot:effects/party-mob-spawn

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob