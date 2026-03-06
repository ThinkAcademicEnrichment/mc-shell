execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n You reached phase 11: Cherry Fields!","color":"gold"}
execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":" Amazing! Now I can feel Better..","color":"yellow"}
execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/11
#execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 8613
#execute as @s[scores={gz-a4-riot=8613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] toBeMined 1510

execute as @s[scores={gz-a4-riot=8613..8624,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=8625..8628,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8629..8631,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honey_block replace barrier
execute as @s[scores={gz-a4-riot=8632..8635,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=8636..8642,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=8643..8646,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_pyramid"} replace barrier
execute as @s[scores={gz-a4-riot=8647..8649,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8650..8654,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=8655..8659,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=8660..8662,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/trail_ruins_rare"} replace barrier
execute as @s[scores={gz-a4-riot=8663,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-01-bee
execute as @s[scores={gz-a4-riot=8663,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8663..8666,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=8667,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=8668..8671,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8672,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/ocean_ruin_warm"} replace barrier
execute as @s[scores={gz-a4-riot=8673..8675,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=8676..8679,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_pyramid"} replace barrier
execute as @s[scores={gz-a4-riot=8680..8682,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=8683..8686,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8686,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=8687..8693,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=8694,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=8694,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8694..8698,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_leaves replace barrier
execute as @s[scores={gz-a4-riot=8699,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=8700..8704,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8705,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=8706..8710,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8711..8715,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=8716..8722,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honeycomb_block replace barrier
execute as @s[scores={gz-a4-riot=8723,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-03-bee
execute as @s[scores={gz-a4-riot=8723,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8723..8725,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/ocean_ruin_cold"} replace barrier
execute as @s[scores={gz-a4-riot=8726..8730,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=8731..8843,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=8844..8846,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=8847,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=8848,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=8849..8851,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8852..8853,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=8854,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8854,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=8855..8858,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=8859,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=8859,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.respawn_anchor.charge master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=8860..8862,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=8863..8867,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honeycomb_block replace barrier
execute as @s[scores={gz-a4-riot=8868,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=8869,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:variants-mob/wolf/pale
execute as @s[scores={gz-a4-riot=8869,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8869..8872,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_well"} replace barrier
execute as @s[scores={gz-a4-riot=8873..8876,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=8877..8880,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=8881..8884,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=8885..8889,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=8890..8893,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=8894..8898,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8898,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=8898,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8899..8900,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8900,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=8901,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bee_nest replace barrier
execute as @s[scores={gz-a4-riot=8902,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8903..8904,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=8905..8914,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=8915..8917,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=8918..8919,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8920,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8921..8925,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=8926,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-01-bee
execute as @s[scores={gz-a4-riot=8926,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8926,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=8927..8929,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_leaves replace barrier
execute as @s[scores={gz-a4-riot=8930..8932,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honey_block replace barrier
execute as @s[scores={gz-a4-riot=8933..8934,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=8935..8936,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=8937,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=8938..8940,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=8941,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=8942..8943,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=8944..8946,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=8947..8950,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_pyramid"} replace barrier
execute as @s[scores={gz-a4-riot=8951..8952,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=8953,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-02-llama
execute as @s[scores={gz-a4-riot=8953,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8953..8954,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8955..8956,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/ocean_ruin_cold"} replace barrier
execute as @s[scores={gz-a4-riot=8957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8958,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=8959..8961,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honeycomb_block replace barrier
execute as @s[scores={gz-a4-riot=8962..8965,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8964,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=8966..8968,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=8969,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=8970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=8971..8973,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=8974..8976,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=8977..8981,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=8982,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=8982,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8982..8983,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=8984..8985,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=8986..8988,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=8989..8990,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=8991..8992,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=8993..8995,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=8996..8999,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9000..9001,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/trail_ruins_rare"} replace barrier
execute as @s[scores={gz-a4-riot=9002,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=9003,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=9003,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9004..9007,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9008,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=9008,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party
execute as @s[scores={gz-a4-riot=9008,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party11
execute as @s[scores={gz-a4-riot=9009..9014,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9015,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=9016,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9017,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=9018..9019,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=9020,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-04-sniffer
execute as @s[scores={gz-a4-riot=9020,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9020..9023,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_well"} replace barrier
execute as @s[scores={gz-a4-riot=9024,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=9025,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=9025,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=9026,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9027..9030,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=9031..9032,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9033..9046,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9047,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9047,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9047,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9048..9054,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9055..9057,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9055,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9058..9059,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9060..9063,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=9064..9066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=9067..9068,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9069,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9070,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9071,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honey_block replace barrier
execute as @s[scores={gz-a4-riot=9072..9076,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9077,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9077,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9077..9081,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_leaves replace barrier
execute as @s[scores={gz-a4-riot=9082..9087,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9088..9092,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9093,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9094,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9095..9098,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_well"} replace barrier
execute as @s[scores={gz-a4-riot=9099..9105,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9106,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-03-bee
execute as @s[scores={gz-a4-riot=9106,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9106..9110,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9111,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=9112..9114,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=9115..9118,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9116,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9119..9123,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_wood replace barrier
execute as @s[scores={gz-a4-riot=9124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9125,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9126..9127,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9128..9129,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=9130,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9131..9134,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9135,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9135,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9135..9136,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honeycomb_block replace barrier
execute as @s[scores={gz-a4-riot=9137..9141,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_wood replace barrier
execute as @s[scores={gz-a4-riot=9142..9144,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier



execute as @s[scores={gz-a4-riot=9145,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/trial_title


execute as @s[scores={gz-a4-riot=9145..9173,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9174,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/bee/normal",ominous_config:"minecraft:trial_chamber/small_melee/bee/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9175..9176,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9177,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_supplies",CustomName:{"color":"gold","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=9177,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial"]}
execute as @s[scores={gz-a4-riot=9177,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=9178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial]

execute as @s[scores={gz-a4-riot=9178..9181,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9182,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9183..9215,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9216,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/baby_zombie/normal",ominous_config:"minecraft:trial_chamber/small_melee/baby_zombie/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9217..9234,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9235,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9236..9251,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9252,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=9253..9271,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9272,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9273..9286,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9287,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/bee/normal",ominous_config:"minecraft:trial_chamber/small_melee/bee/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9288..9310,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9311,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9312..9339,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9340,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/cave_spider/normal",ominous_config:"minecraft:trial_chamber/small_melee/cave_spider/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9341..9365,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9366,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9367..9386,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9387,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/ranged/skeleton/normal",ominous_config:"minecraft:trial_chamber/ranged/skeleton/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9388..9410,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9411,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 900 1
execute as @s[scores={gz-a4-riot=9411,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=9412..9428,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9429,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_supplies",CustomName:{"color":"gold","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=9429,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial"]}
execute as @s[scores={gz-a4-riot=9429,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=9430,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial]

execute as @s[scores={gz-a4-riot=9430..9436,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9437,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9438..9456,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9457,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/baby_zombie/normal",ominous_config:"minecraft:trial_chamber/small_melee/baby_zombie/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9458..9477,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9478,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9479..9497,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9498,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9499..9521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/bee/normal",ominous_config:"minecraft:trial_chamber/small_melee/bee/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9523..9541,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9542,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9543..9565,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9566,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/ranged/skeleton/normal",ominous_config:"minecraft:trial_chamber/ranged/skeleton/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=9567..9589,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9590,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=9591..9621,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9622,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 900 1
execute as @s[scores={gz-a4-riot=9622,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=9623..9647,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=9648,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier



execute as @s[scores={gz-a4-riot=9649..9656,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9657..9658,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9659,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9660,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=9661,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9661,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9661,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9662..9666,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=9667,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9668..9677,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9678,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9679..9683,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_copper_block replace barrier
execute as @s[scores={gz-a4-riot=9684,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9684,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9685..9689,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9690,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-03-bee
execute as @s[scores={gz-a4-riot=9690,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9690..9692,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9693..9697,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9698,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9699,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9700,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=9701..9704,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9705..9708,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9709..9711,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=9712..9716,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9717,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:variants-mob/wolf/pale
execute as @s[scores={gz-a4-riot=9717,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9717,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9718..9725,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9726..9727,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9728,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9728,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9729..9730,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=9731,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:musical",CustomName:{"text":"Musical Chest","color":"dark_aqua"}}
execute as @s[scores={gz-a4-riot=9732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.note_block.pling master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=9733,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9734..9741,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9742..9747,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9748,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9748,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9748..9751,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9752..9756,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9757..9760,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=9761..9763,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=9764..9767,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=9768..9769,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9770..9773,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9771,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9774..9776,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9777..9778,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_leaves replace barrier
execute as @s[scores={gz-a4-riot=9779,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9780,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9781,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=9782..9786,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9787,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-01-bee
execute as @s[scores={gz-a4-riot=9787,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9787..9791,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=9792..9797,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9798..9802,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=9803,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=9804,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9805..9808,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9809..9815,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9816,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9816,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9816..9820,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9821,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=9822..9824,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9822,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9825..9827,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=9828,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:rarechest",CustomName:{"text":"Rare Chest","color":"dark_purple"}}
execute as @s[scores={gz-a4-riot=9828,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:item.trident.thunder master @a[distance=..35] ~ ~ ~ 0.6 0.5 0.6
execute as @s[scores={gz-a4-riot=9829..9833,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=9834,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=9835,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9836..9837,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9838..9839,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ honeycomb_block replace barrier
execute as @s[scores={gz-a4-riot=9840,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=9841..9844,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_leaves replace barrier
execute as @s[scores={gz-a4-riot=9845,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9845,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9845..9846,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9847..9851,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=9852..9854,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9855..9858,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9859..9866,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9867..9868,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_pyramid"} replace barrier
execute as @s[scores={gz-a4-riot=9869,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9870,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9871,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/11-02-llama
execute as @s[scores={gz-a4-riot=9871,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9871,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9872..9876,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9878..9887,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9888,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9889..9893,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bee_nest replace barrier
execute as @s[scores={gz-a4-riot=9894,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9895..9899,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9895,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9900,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9900,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9900..9902,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9903..9907,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ moss_block replace barrier
execute as @s[scores={gz-a4-riot=9908,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=9909,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9910,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=9911..9914,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9915..9918,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9919..9921,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=9922..9926,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9927,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:variants-mob/wolf/pale
execute as @s[scores={gz-a4-riot=9927,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9927,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=9928..9935,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9936..9938,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9939..9940,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=9941,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=9942,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:11-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=9942,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=9943,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9944..9949,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9950..9951,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9951,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9952..9957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9958,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9958,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9958..9961,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=9962..9966,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9967..9970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_copper_block replace barrier
execute as @s[scores={gz-a4-riot=9971..9973,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pink_terracotta replace barrier
execute as @s[scores={gz-a4-riot=9974..9977,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=9978..9979,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9980,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_mosaic replace barrier
execute as @s[scores={gz-a4-riot=9981..9983,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9983,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=9983,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=9984,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_bookshelf replace barrier
execute as @s[scores={gz-a4-riot=9985,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9986..9987,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ cherry_log replace barrier
execute as @s[scores={gz-a4-riot=9988..9990,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=9991..9992,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=9992,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/cherry_tree
execute as @s[scores={gz-a4-riot=9993,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ bamboo_block replace barrier
execute as @s[scores={gz-a4-riot=9994..10096,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=10097..10101,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=10102..10111,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=10112,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/11
execute as @s[scores={gz-a4-riot=10112,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10112..10121,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/11
execute as @s[scores={gz-a4-riot=10122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ copper_chest[facing=east]{LootTable:"gamerz_riot:11-gift",CustomName:{"text":"Benevolent Gift",italic:false,"color":"dark_red"}}
execute as @s[scores={gz-a4-riot=10122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.wandering_trader.yes master @a[distance=..35] ~ ~ ~ 1 0.9 1