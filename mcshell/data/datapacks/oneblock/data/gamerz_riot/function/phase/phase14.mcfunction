execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n You reached phase 14: Desolated Lands!","color":"gold"}
execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":" A barren land lies before you.","color":"yellow"}
execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/14
#execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 13154
#execute as @s[scores={gz-a4-riot=13154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] toBeMined 1465

execute as @s[scores={gz-a4-riot=13154..13167,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13168..13172,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13173..13174,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13175..13178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13179..13183,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13184..13187,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13188,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=13189..13190,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13191..13193,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=13194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-01-silverf
execute as @s[scores={gz-a4-riot=13194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13194..13195,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13196..13197,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=13198..13200,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13201,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=13201,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=13202..13203,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=13204..13208,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13209..13210,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13211..13215,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=13216..13219,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=13220..13225,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_gold_block replace barrier
execute as @s[scores={gz-a4-riot=13226..13228,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13229,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13229,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13229..13230,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13231..13233,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13234,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:musical",CustomName:{"text":"Musical Chest","color":"dark_aqua"}}
execute as @s[scores={gz-a4-riot=13234,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.note_block.pling master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=13235..13237,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ jack_o_lantern replace barrier
execute as @s[scores={gz-a4-riot=13238,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=13239..13242,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13243..13246,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dark_oak_log replace barrier
execute as @s[scores={gz-a4-riot=13247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=13248..13254,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=13255..13259,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13260,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-02-creeper
execute as @s[scores={gz-a4-riot=13260,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13260..13263,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13264..13266,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13267..13269,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13270..13275,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13276,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=13277..13279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=13280..13283,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13284..13290,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13291,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13291,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13291..13294,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dark_oak_log replace barrier
execute as @s[scores={gz-a4-riot=13295..13298,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13297,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=13299..13303,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13304..13305,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ jack_o_lantern replace barrier
execute as @s[scores={gz-a4-riot=13306..13310,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13311..13313,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=13314..13316,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13317,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-03-cave_sp
execute as @s[scores={gz-a4-riot=13317,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13317..13320,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=13321,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13322..13326,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=13327..13329,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13330..13331,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13332..13335,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13336,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=13337,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ birch_log replace barrier
execute as @s[scores={gz-a4-riot=13338,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13338,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=13339,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13340..13345,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13346..13349,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13350..13354,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=13355,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=13356..13359,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13360..13363,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=13364..13367,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13368,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=13368,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.respawn_anchor.charge master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=13369..13372,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13373..13375,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_gray_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-04-skeleto
execute as @s[scores={gz-a4-riot=13376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13376..13377,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=13378..13380,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13379,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=13381..13384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=13385,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=13386..13389,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=13390..13393,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_gold_block replace barrier
execute as @s[scores={gz-a4-riot=13394..13397,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13398..13400,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13401..13405,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13406,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13406,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13406..13411,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13412..13414,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=13415..13418,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13419..13420,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13421..13423,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13424,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=13425..13427,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13428..13431,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13432,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-05-creeper
execute as @s[scores={gz-a4-riot=13432,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13432..13434,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13435..13438,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13439..13442,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13443..13444,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13445..13447,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13448,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13448,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=13449..13451,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=13452..13453,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dark_oak_log replace barrier
execute as @s[scores={gz-a4-riot=13454,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=13455..13457,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13458..13460,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13462..13466,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_gray_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13467..13468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13469..13473,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13474..13476,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13477,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13478..13481,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13482..13486,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13487,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-06-evoker
execute as @s[scores={gz-a4-riot=13487,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13487..13490,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13491..13493,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13494..13495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=13496,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13496,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=13497..13498,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13499..13502,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13503,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13504..13506,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13507..13508,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=13509,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13510..13512,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13513,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13513,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13513..13514,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_gray_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13515..13519,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13520..13522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13523..13525,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13526..13528,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13529..13530,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13531,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13531,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=13532,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13533,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13534,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13535,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=13536..13539,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=13540,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/14-07-skeleto
execute as @s[scores={gz-a4-riot=13540,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13540..13543,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=13544..13545,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=13546,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=13547..13550,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13551..13554,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13555,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=13555,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=13556..13558,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=13559,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13560..13562,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=13563..13566,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13567,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=13567,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=13567..13570,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=13569,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=13571..13575,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13576..13579,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13580,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=13581..13585,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=13586..13590,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=13591,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier


execute as @s[scores={gz-a4-riot=13592,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/tricky_trial_title

execute as @s[scores={gz-a4-riot=13592..13603,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13604,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13604,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:{spawn_potentials:[{data:{entity:{id:"minecraft:cave_spider"}},weight:1}]},ominous_config:{loot_tables_to_eject:[{data:"minecraft:spawners/ominous/trial_chamber/key",weight:1}]}} replace barrier

execute as @s[scores={gz-a4-riot=13605..13621,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13622,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13623..13632,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13633,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_ominous_supplies",CustomName:{"color":"red","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=13633,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial_ominous"]}
execute as @s[scores={gz-a4-riot=13633,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=13634,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial_ominous]

execute as @s[scores={gz-a4-riot=13634..13645,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13646,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13646,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/silverfish/normal",ominous_config:"minecraft:trial_chamber/small_melee/silverfish/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=13647..13664,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13665,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13666..13681,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13682,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13682,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/cave_spider/normal",ominous_config:"minecraft:trial_chamber/small_melee/cave_spider/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=13683..13699,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13700,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13701..13726,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13727,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13727,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/husk/normal",ominous_config:"minecraft:trial_chamber/melee/husk/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=13728..13749,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13750,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13751..13769,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13770,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13770,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/silverfish/normal",ominous_config:"minecraft:trial_chamber/small_melee/silverfish/normal"} replace barrier

execute as @s[scores={gz-a4-riot=13771..13865,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13866,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13866,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=13867..13886,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13887,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13887,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/husk/normal",ominous_config:"minecraft:trial_chamber/melee/husk/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=13888..13910,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13911,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13912..13936,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13937,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13938..13956,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=13957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/silverfish/normal",ominous_config:"minecraft:trial_chamber/small_melee/silverfish/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=13958..13977,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13978,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13979..13984,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13985,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_ominous_supplies",CustomName:{"color":"red","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=13985,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial_ominous"]}
execute as @s[scores={gz-a4-riot=13985,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=13986,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial_ominous]

execute as @s[scores={gz-a4-riot=13986..13997,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=13998,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=13999..14021,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14022,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=14022,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=14023..14041,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14042,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=14043..14065,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=14066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/husk/normal",ominous_config:"minecraft:trial_chamber/melee/husk/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=14067..14089,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14090,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"gamerz_riot:heavy_core"}} replace barrier

execute as @s[scores={gz-a4-riot=14091..14121,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=14122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/cave_spider/normal",ominous_config:"minecraft:trial_chamber/small_melee/cave_spider/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=14123..14141,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14142,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=14143..14166,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14167,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=14167,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/husk/normal",ominous_config:"minecraft:trial_chamber/melee/husk/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=14168..14177,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=14179..14197,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14198,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=14199..14221,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14222,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1800 1
execute as @s[scores={gz-a4-riot=14222,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=14223..14241,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14242,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=14243..14268,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=14269,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier


execute as @s[scores={gz-a4-riot=14270..14274,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14275..14279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14280,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14281..14285,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14286..14290,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ black_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14291,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14292..14295,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=14296..14298,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14299..14301,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_deepslate replace barrier
execute as @s[scores={gz-a4-riot=14302..14304,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14305..14307,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14308..14312,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14313..14315,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14316..14318,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14319,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14319,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14319..14322,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14323..14325,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14325,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=14326..14328,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14329..14330,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_deepslate replace barrier
execute as @s[scores={gz-a4-riot=14331,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=14332..14336,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14337..14341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_gold_block replace barrier
execute as @s[scores={gz-a4-riot=14342..14345,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=14347..14349,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14350..14354,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_gray_terracotta replace barrier
execute as @s[scores={gz-a4-riot=14355..14357,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14358..14360,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14359,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=14361,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=14362..14365,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14366..14369,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14370..14372,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14373,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14373,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14373,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14374..14376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mossy_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14377..14379,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=14380..14384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=14385,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14385,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party
execute as @s[scores={gz-a4-riot=14385,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party14
execute as @s[scores={gz-a4-riot=14386..14388,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14389..14393,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=14394..14397,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14398,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=14398,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=14399..14400,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14400,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14400..14404,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14403,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=14405..14408,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14409..14411,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14412..14415,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14416..14418,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=14419..14421,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14422,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14423..14425,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=14426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=14427..14428,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14429..14432,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14433..14437,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bone_block replace barrier
execute as @s[scores={gz-a4-riot=14438..14442,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14443,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14444..14447,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14448..14451,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=14452..14453,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_deepslate replace barrier
execute as @s[scores={gz-a4-riot=14454,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14454,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14454..14456,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14457,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:rarechest",CustomName:{"text":"Rare Chest","color":"dark_purple"}}
execute as @s[scores={gz-a4-riot=14457,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:item.trident.thunder master @a[distance=..35] ~ ~ ~ 0.6 0.5 0.6
execute as @s[scores={gz-a4-riot=14458..14460,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14461..14463,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=14464..14467,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14469..14470,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14471..14473,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14474..14478,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14476,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=14479,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14480..14482,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14483,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14483,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14483..14486,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=14487..14491,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=14492..14494,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=14495..14498,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14499..14501,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_gold_block replace barrier
execute as @s[scores={gz-a4-riot=14502..14504,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_deepslate replace barrier
execute as @s[scores={gz-a4-riot=14505..14507,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14508..14511,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14512,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14512,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14512..14514,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14515..14517,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14518,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=14518,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=14519..14521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:14",CustomName:{"text":"Desolation Chest"}}
execute as @s[scores={gz-a4-riot=14523..14524,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14525..14526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14527..14530,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14531,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14532,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14533..14536,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14537..14538,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14539,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14539,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14539..14542,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14543,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14544..14547,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_deepslate replace barrier
execute as @s[scores={gz-a4-riot=14548..14550,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14551..14552,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mycelium replace barrier
execute as @s[scores={gz-a4-riot=14552,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=14553..14555,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14556..14557,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_deepslate_bricks replace barrier
execute as @s[scores={gz-a4-riot=14558..14559,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14560..14562,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14563,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cracked_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14564..14565,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_deepslate replace barrier
execute as @s[scores={gz-a4-riot=14566,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14566,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14566..14567,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14568..14571,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14572,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_stone_bricks replace barrier
execute as @s[scores={gz-a4-riot=14573..14575,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14576,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14577..14578,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14579..14583,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14584..14585,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14586..14589,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14590,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=14590,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=14591..14594,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=14595,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14595,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14595,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14596..14597,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=14598..14607,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14608,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/14
execute as @s[scores={gz-a4-riot=14608,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=14608..14617,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/14
execute as @s[scores={gz-a4-riot=14618,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ copper_chest[facing=east]{LootTable:"gamerz_riot:14-gift",CustomName:{"text":"Benevolent Gift",italic:false,"color":"dark_red"}}
execute as @s[scores={gz-a4-riot=14618,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.wandering_trader.yes master @a[distance=..35] ~ ~ ~ 1 0.9 1