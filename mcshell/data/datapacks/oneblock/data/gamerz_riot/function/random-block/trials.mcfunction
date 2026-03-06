function gamerz_riot:randomizer/gz-a4-randblock-trials
execute as @s[scores={gz-a4-randblock=1..110}] at @s run setblock ~ ~ ~ tuff_bricks
execute as @s[scores={gz-a4-randblock=111..190}] at @s run setblock ~ ~ ~ waxed_oxidized_copper
execute as @s[scores={gz-a4-randblock=191..240}] at @s run setblock ~ ~ ~ waxed_copper_block
execute as @s[scores={gz-a4-randblock=241..297}] at @s run setblock ~ ~ ~ chiseled_tuff_bricks
execute as @s[scores={gz-a4-randblock=298..323}] at @s run setblock ~ ~ ~ chiseled_tuff
execute as @s[scores={gz-a4-randblock=324..353}] at @s run setblock ~ ~ ~ waxed_oxidized_cut_copper
execute as @s[scores={gz-a4-randblock=354..378}] at @s run setblock ~ ~ ~ waxed_copper_grate
execute as @s[scores={gz-a4-randblock=379..393}] at @s run setblock ~ ~ ~ waxed_weathered_copper_bulb[lit=true]
execute as @s[scores={gz-a4-randblock=394..414}] at @s run setblock ~ ~ ~ polished_tuff
execute as @s[scores={gz-a4-randblock=415..423}] at @s run setblock ~ ~ ~ waxed_chiseled_copper
execute as @s[scores={gz-a4-randblock=424..437}] at @s run setblock ~ ~ ~ waxed_oxidized_copper_grate
execute as @s[scores={gz-a4-randblock=438..446}] at @s run setblock ~ ~ ~ decorated_pot{LootTable:"gamerz_riot:trial_pot"} replace