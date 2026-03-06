# Get number of mobs to spawn
function gamerz_riot:randomizer/gz-a4-mobamount-3-4

# Spawn the mobs
execute as @s at @s run summon minecraft:bee ~ ~1.6 ~
execute as @s at @s run summon minecraft:bee ~ ~1.6 ~
execute as @s at @s run summon minecraft:bee ~ ~1.6 ~
execute as @s[scores={gz-a4-mobamount=4..}] at @s run summon minecraft:bee ~ ~1.6 ~

# Add new mob tag, and any subsequent NBT changes
execute as @s at @s run tag @e[type=minecraft:bee,distance=..2,tag=!gz-a4-oldmob] add gz-a4-newmob
#execute as @e[tag=gz-a4-newmob] run data merge entity @s {"AngerTime":1200}
execute as @e[tag=gz-a4-newmob] store result score @s gz-anger_time run time query gametime
execute as @e[tag=gz-a4-newmob] run scoreboard players add @s gz-anger_time 1200
execute as @e[tag=gz-a4-newmob] store result entity @s anger_end_time int 1 run scoreboard players get @s gz-anger_time

# Add oldmob tag and remove newmob tag
tag @e[tag=gz-a4-newmob] add gz-a4-oldmob
tag @e[tag=gz-a4-newmob] remove gz-a4-newmob