scoreboard objectives add gz-a4-abDelay dummy
scoreboard players add @e[tag=gz-a4-block] gz-a4-abDelay 1

execute as @e[tag=gz-a4-block,scores={gz-a4-abDelay=5}] run tag @a add ab-enable
execute as @e[tag=actionbar_On,tag=ab-enable,scores={gz-a4-deaths=..100}] at @s run title @s actionbar [{"score":{"name":"@s","objective":"gz-a4-health"},"shadow_color":15458780,"color":"gray"},{"text":"❤ Health","shadow_color":15458780,"color":"red"},{"text":"    "},{"score":{"name":"@s","objective":"gz-a4-deaths"},"shadow_color":15458780,"color":"gray"},{"text":"☠ Deaths","shadow_color":15458780,"color":"red"}]

scoreboard players set @e[scores={gz-a4-deaths=101..}] gz-a4-deaths 101
execute as @e[tag=actionbar_On,tag=ab-enable,scores={gz-a4-deaths=101}] at @s run title @s actionbar [{"score":{"name":"@s","objective":"gz-a4-health"},"shadow_color":15458780,"color":"gray"},{"text":"❤ Health","shadow_color":15458780,"color":"red"},{"text":"    "},{"text": "100+","shadow_color":15458780,"color":"gray"},{"text":"☠ Deaths","shadow_color":15458780,"color":"red"}]

scoreboard players set @e[tag=gz-a4-block,scores={gz-a4-abDelay=40..}] gz-a4-abDelay 0
tag @a remove ab-enable




# scoreboard players set @e[scores={gz-a4-kills=100001..}] gz-a4-kills 100001
# execute as @a[scores={gz-a4-kills=100001,gz-a4-deaths=..100}] run title @s actionbar [{"score":{"name":"@s","objective":"gz-a4-health"},"color":"gray"},{"text":"❤ Health","color":"red"},{"text":"    "},{"text":"100000+","color":"gray"},{"text":"🗡 Kills","color":"dark_green"},{"text":"    "},{"score":{"name":"@s","objective":"gz-a4-deaths"},"color":"gray"},{"text":"☠ Deaths","color":"red"}]

# scoreboard players set @e[scores={gz-a4-deaths=101..}] gz-a4-deaths 101
# execute as @a[scores={gz-a4-kills=..100000,gz-a4-deaths=101}] run title @s actionbar [{"score":{"name":"@s","objective":"gz-a4-health"},"color":"gray"},{"text":"❤ Health","color":"red"},{"text":"    "},{"score":{"name":"@s","objective":"gz-a4-kills"},"color":"gray"},{"text":"🗡 Kills","color":"dark_green"},{"text":"    "},{"text": "100+","color":"gray"},{"text":"☠ Deaths","color":"red"}]

# execute as @e[tag=actionbar_On,scores={gz-a4-deaths=101}] at @s run title @s actionbar [{"score":{"name":"@s","objective":"gz-a4-health"},"color":"gray"},{"text":"❤ Health","color":"red"},{"text":"    "},{"text":"    "},{"text": "100+","color":"gray"},{"text":"☠ Deaths","color":"red"}]
