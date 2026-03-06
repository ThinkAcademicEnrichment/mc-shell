# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-2-4

# Spawn the mobs
execute as @s at @s run summon minecraft:skeleton_horse ~ ~1.6 ~ {Tame:1b,Passengers:[{id:"minecraft:skeleton",equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:power":1}}},feet:{id:"minecraft:golden_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}
execute as @s at @s run summon minecraft:skeleton_horse ~ ~1.6 ~ {Tame:1b,Passengers:[{id:"minecraft:skeleton",equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:power":1}}},feet:{id:"minecraft:golden_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}
execute as @s[scores={gz-a4-mobamount=3..}] at @s run summon minecraft:skeleton_horse ~ ~1.6 ~ {Tame:1b,Passengers:[{id:"minecraft:skeleton",equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:power":1}}},feet:{id:"minecraft:golden_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}
execute as @s[scores={gz-a4-mobamount=4..}] at @s run summon minecraft:skeleton_horse ~ ~1.6 ~ {Tame:1b,Passengers:[{id:"minecraft:skeleton",equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"minecraft:power":1}}},feet:{id:"minecraft:golden_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:skeleton,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob

# For Skeleton Horse
execute as @s at @s run tag @e[type=minecraft:skeleton_horse,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob1

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob

tag @e[tag=gz-a4-newmob1] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob1] remove gz-a4-newmob1