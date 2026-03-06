# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-2-3

# Spawn the mobs
execute as @s at @s run summon minecraft:zombie_horse ~ ~1.6 ~ {Tame:1b,equipment:{body:{id:"minecraft:iron_horse_armor",count:1}},Passengers:[{id:"minecraft:zombie",equipment:{mainhand:{id:"minecraft:copper_spear",count:1,components:{"minecraft:enchantments":{"minecraft:sharpness":1}}},feet:{id:"minecraft:copper_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}
execute as @s at @s run summon minecraft:zombie_horse ~ ~1.6 ~ {Tame:1b,equipment:{body:{id:"minecraft:iron_horse_armor",count:1}},Passengers:[{id:"minecraft:zombie",equipment:{mainhand:{id:"minecraft:copper_sword",count:1,components:{"minecraft:enchantments":{"minecraft:sharpness":1}}},feet:{id:"minecraft:copper_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}
execute as @s[scores={gz-a4-mobamount=3..}] at @s run summon minecraft:zombie_horse ~ ~1.6 ~ {Tame:1b,equipment:{body:{id:"minecraft:iron_horse_armor",count:1}},Passengers:[{id:"minecraft:zombie",equipment:{mainhand:{id:"minecraft:copper_spear",count:1,components:{"minecraft:enchantments":{"minecraft:sharpness":1}}},feet:{id:"minecraft:copper_boots",count:1,components:{"minecraft:enchantments":{"minecraft:feather_falling":2}}},head:{id:"minecraft:chainmail_helmet",count:1,components:{"minecraft:enchantments":{"minecraft:protection":2,"minecraft:unbreaking":1}}}}}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:zombie,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
execute as @e[tag=gz-a4-newmob,distance=..30,type=zombie] at @s if entity @e run data merge entity @s {CustomName:{"text":"Monster Guard","color": "dark_purple"},CustomNameVisible:1b}

# For Zombie Horse
execute as @s at @s run tag @e[type=minecraft:zombie_horse,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob1

# Party effects
scoreboard players set @e[tag=gz-a4-newmob] gz-a4-pm-life 9000
execute as @e[tag=gz-a4-newmob] at @s run function gamerz_riot:effects/party-mob-spawn
execute as @e[tag=gz-a4-newmob1] at @s run function gamerz_riot:effects/party-mob-spawn

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob

tag @e[tag=gz-a4-newmob1] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob1] remove gz-a4-newmob1