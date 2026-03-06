execute positioned 0.5 60.0 0.5 unless entity @e[tag=gz-a4-block,distance=..1] run function gamerz_riot:fns/create

scoreboard players add @a gz-a4xLoaded 1
scoreboard players set @a[scores={gz-a4xLoaded=2..}] gz-a4xLoaded 2
execute as @a[scores={gz-a4xLoaded=1}] at @s run function gamerz_riot:fns/on-load


scoreboard players add @a gz-a4xOnline 1
scoreboard players set @a[scores={gz-a4xOnline=2..}] gz-a4xOnline 2
execute as @a[scores={gz-a4xOnline=1}] at @s run function gamerz_riot:fns/on-join

execute as @a[scores={gz-a4=1..}] at @s run function gamerz_riot:on-trigger

execute as @e[tag=gz-a4-block] at @s run function gamerz_riot:fns/eventloop
#execute as @e[tag=gz-a4-block] run data merge entity @s {Duration:2000000000,Age:0}

# MONSTER PARTIES
scoreboard players add @e[tag=gz-a4-party] gz-a4-partytime 0
scoreboard players remove @e[scores={gz-a4-partytime=1..}] gz-a4-partytime 1

execute as @e[tag=gz-a4-party] at @s run function gamerz_riot:monster-party/manager

scoreboard players remove @e[scores={gz-a4-pm-life=1..}] gz-a4-pm-life 1
execute as @e[scores={gz-a4-pm-life=1}] at @s run function gamerz_riot:effects/party-mob-despawn

# RECOVERY KIT
tag @a[scores={gz-a4-countdeath=1..,gz-a4-death=..5}] add gz-a4-isdead

tag @e[type=player,tag=gz-a4-isdead] remove gz-a4-isdead

execute as @a[scores={gz-a4-countdeath=1..,gz-a4-death=..5}] at @s unless entity @s[tag=gz-a4-isdead] run function gamerz_riot:fns/recovery-kit/get

execute as @a[scores={gz-a4-countdeath=1..}] at @s run effect give @p minecraft:resistance 7 4 true

execute as @a[scores={gz-a4-countdeath=1..}] at @s unless entity @s[tag=gz-a4-isdead] run scoreboard players set @s gz-a4-countdeath 0

# SIDEBAR
scoreboard players add @e[tag=gz-a4-block] gz-a4xSbstart 1
execute as @e[scores={gz-a4xSbstart=1}] at @s run function gamerz_riot:sb
execute as @e[scores={gz-a4xSbstart=1}] run tag @s add sidebar_On
scoreboard players set @e[scores={gz-a4xSbstart=2..}] gz-a4xSbstart 2

function gamerz_riot:extra/scoreboard

function gamerz_riot:fns/toggle-features

# PICKAXE BOOST
execute if block 0 60 0 vault run tag @a[tag=!gz-a4-boost] add gz-a4-boost
execute if block 0 60 0 trial_spawner run tag @a[tag=!gz-a4-boost] add gz-a4-boost


execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand diamond_pickaxe run item modify entity @s weapon.mainhand gamerz_riot:diamond_pickaxe_boost
execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand netherite_pickaxe run item modify entity @s weapon.mainhand gamerz_riot:netherite_pickaxe_boost

# RESTORES NBT OF TOOLS
execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand diamond_axe run item modify entity @s weapon.mainhand gamerz_riot:diamond_axe_default
execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand netherite_axe run item modify entity @s weapon.mainhand gamerz_riot:netherite_axe_default

execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand diamond_hoe run item modify entity @s weapon.mainhand gamerz_riot:diamond_hoe_default
execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand netherite_hoe run item modify entity @s weapon.mainhand gamerz_riot:netherite_hoe_default

execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand diamond_shovel run item modify entity @s weapon.mainhand gamerz_riot:diamond_shovel_default
execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand netherite_shovel run item modify entity @s weapon.mainhand gamerz_riot:netherite_shovel_default

execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand diamond_sword run item modify entity @s weapon.mainhand gamerz_riot:diamond_sword_default
execute as @a at @s if entity @s[tag=gz-a4-boost] if items entity @s weapon.mainhand netherite_sword run item modify entity @s weapon.mainhand gamerz_riot:netherite_sword_default

# BLOCKS REMAINING
function gamerz_riot:fns/blocks-remaining

# VILLAGER BREEDING FIX
execute as @a[scores={gz-a4xOnline=1}] run execute as @e[type=minecraft:villager,tag=gz-a4-oldmob] at @s if entity @e run data merge entity @s {CanPickUpLoot:1b}


# BLOCK RESET FIX [Backward Compatibility]

 # Find the highest 'gz-a4-riot' score among all entities with the tag 'gz-a4-block'
 # Set the temporary score holder to 0 first
 scoreboard players set #highest_riot temp_riot 0

 # Now, iterate through all relevant entities and find the highest score
 execute as @e[type=area_effect_cloud,tag=gz-a4-block] run scoreboard players operation #highest_riot temp_riot > @s gz-a4-riot

 # Give the 'winner' tag to any entity with the highest score
 execute as @e[type=area_effect_cloud,tag=gz-a4-block] if score @s gz-a4-riot = #highest_riot temp_riot run tag @s add winner

 # Kill all entities with the 'gz-a4-block' tag that do NOT have the 'winner' tag
 kill @e[type=area_effect_cloud,tag=gz-a4-block,tag=!winner]
 
 # Remove the 'winner' tag from the surviving entity
 tag @e[type=area_effect_cloud,tag=winner] remove winner

 # Kills starting armor stand
 execute if entity @e[tag=gz-a4-tutorial1] if entity @e[tag=gz-a4-block,scores={gz-a4-riot=2..}] run kill @e[tag=gz-a4-tutorial1]
