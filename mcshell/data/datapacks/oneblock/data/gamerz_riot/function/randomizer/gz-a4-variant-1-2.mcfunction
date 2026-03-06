function gamerz_riot:randomizer/gz-a4-variant-main
scoreboard players set @s gz-a4-temp 4
scoreboard players operation @s gz-a4-variant %= @s gz-a4-temp
scoreboard players set @s gz-a4-temp 1
scoreboard players operation @s gz-a4-variant += @s gz-a4-temp
scoreboard players set @s gz-a4-temp 0