execute if block ~ ~ ~ chest{CustomName:{"text":"Variety Chest","color":"blue"}} run particle minecraft:dust_color_transition{from_color:[0.000,0.000,0.000],scale:2,to_color:[0.027,0.055,0.451]} ~ ~0.4 ~ 0.4 0.4 0.4 0.001 1 force
execute if block ~ ~ ~ chest{CustomName:{"text":"Super Chest","color":"black"}} run particle minecraft:dust_color_transition{from_color:[0.812,1.000,0.302],scale:2,to_color:[0.039,0.078,0.631]} ~ ~0.4 ~ 0.2 0.3 0.2 0.01 2 force
execute if block ~ ~ ~ chest{CustomName:{"text":"Super Chest","color":"black"}} run particle minecraft:bubble_column_up ~ ~ ~ 0.4 0.4 0.4 0.001 1 force
execute if block ~ ~ ~ chest{CustomName:{"text":"Super Chest","color":"black"}} run particle minecraft:electric_spark ~ ~ ~ 0.3 0.4 0.3 0.001 3 force
execute if block ~ ~ ~ chest{CustomName:{"text":"Rare Chest","color":"dark_purple"}} run particle minecraft:dragon_breath ~ ~ ~ 0 0 0 0.02 8 force
execute if block ~ ~ ~ chest{CustomName:{"text":"Musical Chest","color":"dark_aqua"}} run particle minecraft:note ~ ~0.1 ~ 0.4 0.3 0.4 1 1 force
execute if block ~ ~ ~ copper_chest{CustomName:{"text":"Benevolent Gift","color":"dark_red"}} run particle minecraft:heart ~ ~ ~ 0.5 0.5 0.5 0.01 1 force
execute if block ~ ~ ~ powder_snow run particle minecraft:snowflake ~ ~0.92 ~ 0.2 0.4 0.2 0.00001 1 force
execute if block ~ ~ ~ budding_amethyst run particle minecraft:electric_spark ~ ~0.5 ~ 0.25 0.3 0.25 0.01 4 force

execute if entity @e[tag=trial] positioned 0 60 0 run particle minecraft:trial_omen ~ ~0.4 ~ 0.4 0.5 0.4 0.1 2 normal
execute if entity @e[tag=trial_ominous] positioned 0 60 0 run particle minecraft:raid_omen ~ ~0.4 ~ 0.4 0.5 0.4 0.1 2 normal
