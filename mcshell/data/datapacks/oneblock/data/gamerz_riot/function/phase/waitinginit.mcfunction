execute as @s[scores={gz-a4-riot=47}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=47}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=47}] gz-a4-upgrade 200

execute as @s[scores={gz-a4-riot=332}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=332}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=332}] gz-a4-upgrade 400

execute as @s[scores={gz-a4-riot=863}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=863}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=863}] gz-a4-upgrade 600

execute as @s[scores={gz-a4-riot=1686}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=1686}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=1686}] gz-a4-upgrade 800

execute as @s[scores={gz-a4-riot=2552}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=2552}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=2552}] gz-a4-upgrade 1000

execute as @s[scores={gz-a4-riot=3310}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=3310}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=3310}] gz-a4-upgrade 1200

execute as @s[scores={gz-a4-riot=4172}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=4172}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=4172}] gz-a4-upgrade 1400

execute as @s[scores={gz-a4-riot=5129}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=5129}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=5129}] gz-a4-upgrade 1600

execute as @s[scores={gz-a4-riot=6450}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=6450}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=6450}] gz-a4-upgrade 1800

execute as @s[scores={gz-a4-riot=7762}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=7762}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=7762}] gz-a4-upgrade 2000

execute as @s[scores={gz-a4-riot=8611}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=8611}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=8611}] gz-a4-upgrade 2200

execute as @s[scores={gz-a4-riot=10122}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=10122}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=10122}] gz-a4-upgrade 2400

execute as @s[scores={gz-a4-riot=11722}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=11722}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=11722}] gz-a4-upgrade 2600

execute as @s[scores={gz-a4-riot=13152}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=13152}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=13152}] gz-a4-upgrade 2800

execute as @s[scores={gz-a4-riot=14618}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=14618}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=14618}] gz-a4-upgrade 3000

execute as @s[scores={gz-a4-riot=15635}] at @s run setblock ~ ~ ~ bedrock
tag @s[scores={gz-a4-riot=15635}] add gz-a4-waiting
scoreboard players set @s[scores={gz-a4-riot=15635}] gz-a4-upgrade 3200

execute as @s[tag=gz-a4-waiting] at @s run kill @e[tag=gz-a4-waitmsg]
execute as @s[tag=gz-a4-waiting] at @s run kill @e[tag=gz-a4-waitcounter]
execute as @s[tag=gz-a4-waiting] at @s run summon area_effect_cloud ~ ~1 ~ {custom_particle:{type:"ash"},PersistenceRequired:1b,Radius:0f,NoGravity:1b,Duration:10000,CustomNameVisible:1b,CustomName:"Upgrading in",Tags:["gz-a4-waitmsg"]}
execute as @s[tag=gz-a4-waiting] at @s run summon area_effect_cloud ~ ~0.6 ~ {custom_particle:{type:"portal"},PersistenceRequired:1b,Radius:0.4f,NoGravity:1b,Duration:10000,CustomNameVisible:1b,Tags:["gz-a4-waitcounter"]}