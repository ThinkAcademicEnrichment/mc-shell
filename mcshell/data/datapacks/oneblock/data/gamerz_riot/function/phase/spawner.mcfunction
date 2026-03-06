scoreboard players set @e[tag=gz-a4-mined] gz-a4-cool 5
execute as @s[scores={gz-a4-riot=0..47}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase0
execute as @s[scores={gz-a4-riot=49..332}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase1
execute as @s[scores={gz-a4-riot=334..863}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase2
execute as @s[scores={gz-a4-riot=865..1686}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase3
execute as @s[scores={gz-a4-riot=1688..2552}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase4
execute as @s[scores={gz-a4-riot=2554..3310}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase5
execute as @s[scores={gz-a4-riot=3312..4172}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase6
execute as @s[scores={gz-a4-riot=4174..5129}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase7
execute as @s[scores={gz-a4-riot=5131..6450}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase8
execute as @s[scores={gz-a4-riot=6452..7762}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase9
execute as @s[scores={gz-a4-riot=7764..8611}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase10
execute as @s[scores={gz-a4-riot=8613..10122}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase11
execute as @s[scores={gz-a4-riot=10124..11722}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase12
execute as @s[scores={gz-a4-riot=11724..13152}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase13
execute as @s[scores={gz-a4-riot=13154..14618}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase14
execute as @s[scores={gz-a4-riot=14620..15635}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:phase/phase15

scoreboard players set @s[scores={gz-a4-riot=15637..,gz-a4-cool=1}] gz-a4-riot 15637
execute as @s[scores={gz-a4-riot=15637..,gz-a4-cool=1}] at @s run function gamerz_riot:phase/afterphases

execute as @s[scores={gz-a4-riot=15637..}] at @s unless entity @s[tag=gz-a4-afterphases] run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=15637..}] at @s unless entity @s[tag=gz-a4-afterphases] run tellraw @a {"text":"\n You reached the Afterphases!","color":"gold"}
execute as @s[scores={gz-a4-riot=15637..}] at @s unless entity @s[tag=gz-a4-afterphases] run tellraw @a {"text":" The infinite block threw off its shackles and pulsates with energy.","color":"yellow"}
execute as @s[scores={gz-a4-riot=15637..}] at @s unless entity @s[tag=gz-a4-afterphases] run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=15637,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/00
#execute as @s[scores={gz-a4-riot=15637..,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 15637

tag @s[scores={gz-a4-riot=15637..}] add gz-a4-afterphases
tag @s[scores={gz-a4-riot=..15636}] remove gz-a4-afterphases

scoreboard players set @s[scores={gz-a4-riot=15638..}] gz-a4-riot 15637