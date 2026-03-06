# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon chicken ~ ~1.6 ~ {IsChickenJockey:1b,Passengers:[{id:"minecraft:zombie",LeftHanded:1b,IsBaby:1b,equipment:{mainhand:{id:"minecraft:golden_shovel",count:1,components:{"minecraft:enchantments":{"minecraft:unbreaking":1}}},feet:{id:"minecraft:leather_boots",count:1,components:{"minecraft:dyed_color":0}},legs:{id:"minecraft:leather_leggings",count:1,components:{"minecraft:dyed_color":16777024}},chest:{id:"minecraft:leather_chestplate",count:1,components:{"minecraft:enchantments":{"minecraft:projectile_protection":1},"minecraft:dyed_color":2334755}},head:{id:"minecraft:copper_helmet",count:1}}}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:zombie,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[tag=gz-a4-newmob,distance=..30] at @s if entity @e run data merge entity @s {CustomName:{"text":"Monster Guard","color": "dark_purple"},CustomNameVisible:1b}

# For Chicken
execute as @s at @s run tag @e[type=minecraft:chicken,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob1

# Party effects
scoreboard players set @e[tag=gz-a4-newmob] gz-a4-pm-life 9000
execute as @e[tag=gz-a4-newmob] at @s run function gamerz_riot:effects/party-mob-spawn
execute as @e[tag=gz-a4-newmob1] at @s run function gamerz_riot:effects/party-mob-spawn

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob

tag @e[tag=gz-a4-newmob1] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob1] remove gz-a4-newmob1