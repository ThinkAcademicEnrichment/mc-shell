# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-1-1

# Spawn the mobs
execute as @s at @s run summon camel_husk ~ ~ ~ {Passengers:[{id:"minecraft:husk",equipment:{mainhand:{id:"minecraft:golden_spear",count:1}}},{id:"minecraft:parched",equipment:{mainhand:{id:"minecraft:bow",count:1,components:{"minecraft:enchantments":{"punch":1}}}}}]}

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:camel_husk,distance=..2,tag=!gz-a4-oldmob2] add gz-a4-newmob2
execute as @s at @s run tag @e[type=minecraft:husk,distance=..2,tag=!gz-a4-oldmob1] add gz-a4-newmob1
execute as @s at @s run tag @e[type=minecraft:parched,distance=..2,tag=!gz-a4-oldmob1] add gz-a4-newmob1
execute as @e[tag=gz-a4-newmob1,distance=..30] at @s if entity @e run data merge entity @s {CustomName:{"text":"Monster Guard","color": "dark_purple"},CustomNameVisible:1b}

# Party effects
scoreboard players set @e[tag=gz-a4-newmob1] gz-a4-pm-life 9000
scoreboard players set @e[tag=gz-a4-newmob2] gz-a4-pm-life 9000
execute as @e[tag=gz-a4-newmob1] at @s run function gamerz_riot:effects/party-mob-spawn
execute as @e[tag=gz-a4-newmob2] at @s run function gamerz_riot:effects/party-mob-spawn

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob1] add gz-a4-oldmob1
tag @e[tag=gz-a4-newmob1] remove gz-a4-newmob1

tag @e[tag=gz-a4-newmob2] add gz-a4-oldmob2
tag @e[tag=gz-a4-newmob2] remove gz-a4-newmob2