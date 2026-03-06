execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n You reached phase 15: The End!","color":"gold"}
execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":" Ancient powers rise as the dark void collides with your world.","color":"yellow"}
execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/15
#execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 14620
#execute as @s[scores={gz-a4-riot=14620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] toBeMined 1016

execute as @s[scores={gz-a4-riot=14620..14639,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14640..14641,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=14642..14644,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14645..14656,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14657..14674,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14675..14692,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14693..14704,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14705,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-01-endermi
execute as @s[scores={gz-a4-riot=14705,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14705..14714,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14715..14718,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=14719..14722,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=14723..14731,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=14732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-02-enderma
execute as @s[scores={gz-a4-riot=14732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=14733..14744,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14745..14749,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14750..14751,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14752..14755,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=14756..14759,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=14760,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=14760,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14760,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=14761..14762,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14763..14766,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=14767..14774,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14775..14779,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14780..14781,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=14782..14794,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=14795,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-03-endermi
execute as @s[scores={gz-a4-riot=14795,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14795..14796,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=14797..14798,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14799..14802,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=14803..14815,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14816..14820,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=14821,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=14821,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14821..14836,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=14837..14841,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=14842..14848,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=14849,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=14849,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14849..14850,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14851,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=14852..14858,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=14859,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=14860..14865,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14866..14872,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14873..14876,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=14877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-04-shulker
execute as @s[scores={gz-a4-riot=14877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=14878,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14879,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14880..14886,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14887..14888,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purple_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14889..14891,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=14892..14897,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14898..14901,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14902..14912,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14913,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=14913,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14913..14917,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14918,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=14919..14924,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=14925..14934,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14935..14943,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14944,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=14944,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14944..14946,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=14947..14951,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=14952,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=14953..14957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=14958,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=14959..14961,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=14962..14963,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purple_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14964..14969,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-03-endermi
execute as @s[scores={gz-a4-riot=14970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14970..14971,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=14972..14976,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=14977,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=14978,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=14979..14983,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14984..14990,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=14991,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=14992..14995,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14996..14998,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=14999,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=14999,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14999..15003,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=15004..15008,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15009..15011,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=15012..15013,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purple_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15014..15025,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15026,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15026,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15026..15032,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15033,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=15034..15045,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15046..15054,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15055,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15055,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15055..15057,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15058..15062,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15063..15068,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15069..15078,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15079..15083,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=15084,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15084,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15084,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=15085..15089,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purple_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15090,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=15091..15094,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=15095..15099,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=15100..15104,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15105..15110,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15111,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-02-enderma
execute as @s[scores={gz-a4-riot=15111,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15111..15113,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=15114..15115,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=15116..15120,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15121,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=15122..15124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15125,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15126..15127,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15128..15136,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15137,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=15138,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-04-shulker
execute as @s[scores={gz-a4-riot=15138,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15138..15139,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=15140..15142,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15143..15145,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15146..15148,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15149..15153,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15154..15159,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15160..15163,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15164,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15164,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15164..15166,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15167..15169,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15170..15172,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15173..15179,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15180..15184,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15185..15190,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15191,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15191,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15191..15195,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15196,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=15197..15198,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15199..15201,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15202..15204,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15205,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=15206..15212,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15213..15214,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15215..15219,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15220,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15220,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15220,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=15221..15224,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15225,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=15226..15234,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15235..15238,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15239..15241,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15242..15246,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=15247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15247..15251,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15252,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15253,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:rarechest",CustomName:{"text":"Rare Chest","color":"dark_purple"}}
execute as @s[scores={gz-a4-riot=15253,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:item.trident.thunder master @a[distance=..35] ~ ~ ~ 0.6 0.5 0.6
execute as @s[scores={gz-a4-riot=15254..15262,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15263..15266,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purple_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15267..15271,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15272..15274,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15275,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15275,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15275..15279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15280,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=15281..15284,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=15285..15289,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purple_terracotta replace barrier
execute as @s[scores={gz-a4-riot=15290,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=15291..15293,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=15294..15297,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15298..15300,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15300,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party
execute as @s[scores={gz-a4-riot=15300,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party15
execute as @s[scores={gz-a4-riot=15301..15304,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15305..15308,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15309..15312,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15313..15317,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15318..15319,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15320,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15321..15323,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15324..15329,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15330,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15330,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15330..15333,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15334,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15335..15337,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15338,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=15339,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15340..15344,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=15345..15346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15347,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15348..15349,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15350,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15351,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15352..15355,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15356,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15357,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15357,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15357,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15358..15361,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15362..15365,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15366..15369,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15370..15374,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15375..15376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15377..15378,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=15379..15383,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15384..15390,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15391..15393,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15394..15397,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15398..15404,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15405,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15406..15409,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15410,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15410,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15410..15413,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=15414..15418,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=15419..15422,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15423,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15424,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ end_stone replace barrier
execute as @s[scores={gz-a4-riot=15425..15430,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15431,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=15432..15436,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15437,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-04-shulker
execute as @s[scores={gz-a4-riot=15437,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15437..15440,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15441..15444,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15445..15449,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15450..15455,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15456..15460,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15462..15464,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15465,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15465,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15465..15468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15469,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=15470..15472,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15473..15477,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15478..15481,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15482..15485,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15486..15488,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15489..15490,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15491..15494,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15495..15499,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15500..15503,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15504..15508,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15509..15511,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15512..15514,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15515..15516,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15517..15521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15522..15523,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15524,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15525..15527,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15528,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15529..15531,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15532..15533,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15534,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:15",CustomName:{"text":"End Chest"}}
execute as @s[scores={gz-a4-riot=15535..15538,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15539,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_pillar replace barrier
execute as @s[scores={gz-a4-riot=15540..15544,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15545..15549,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15550,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15550,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15550..15554,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15555,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15556..15558,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15559..15563,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15564..15568,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15569..15572,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15573..15577,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15578,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/15-03-endermi
execute as @s[scores={gz-a4-riot=15578,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15578,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15579..15582,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15583..15586,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15587..15589,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15590..15592,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15593..15596,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15597,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15598..15600,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15601..15602,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ purpur_block replace barrier
execute as @s[scores={gz-a4-riot=15603..15606,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15607,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15607,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15607..15609,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15610..15614,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15615..15624,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15625,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/15
execute as @s[scores={gz-a4-riot=15625,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=15625..15634,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/15
execute as @s[scores={gz-a4-riot=15635,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ copper_chest[facing=east]{LootTable:"gamerz_riot:15-gift",CustomName:{"text":"Benevolent Gift",italic:false,"color":"dark_red"}}
execute as @s[scores={gz-a4-riot=15635,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.wandering_trader.yes master @a[distance=..35] ~ ~ ~ 1 0.9 1