execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n You reached phase 9: Pale Swamp!","color":"gold"}
execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":" Dark waters and ghostly air fill this colorless haunted swamp.","color":"yellow"}
execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/09
#execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 6452
#execute as @s[scores={gz-a4-riot=6452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] toBeMined 1311

execute as @s[scores={gz-a4-riot=6452..6455,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6456..6459,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6460..6461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6462..6464,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6465..6466,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6467..6468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=6469..6476,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=6477..6479,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=6480..6481,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=6482,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6483..6486,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=6487..6494,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=6496..6499,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=6500..6504,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=6502,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=6505..6508,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6509,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6510..6512,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6513..6514,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/trail_ruins_rare"} replace barrier
execute as @s[scores={gz-a4-riot=6515..6518,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6519..6521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=6522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:variants/frog
execute as @s[scores={gz-a4-riot=6522,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6522..6524,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6525..6526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=6527..6528,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=6529..6531,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6532..6534,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6533,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=6535..6537,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6538..6540,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6541..6542,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=6543..6546,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6547..6551,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6552,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=6552,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6552..6555,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6556..6560,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=6561..6563,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=6564..6566,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=6567..6568,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6569..6572,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6573..6574,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6575..6580,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=6581,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:variants/frog
execute as @s[scores={gz-a4-riot=6581,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6581..6585,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6586,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6587,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=6588..6593,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=6593,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=6594..6597,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6598..6602,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=6603..6604,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6605,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6606..6610,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=6611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=6611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6612,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6613,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6614..6615,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ andesite replace barrier
execute as @s[scores={gz-a4-riot=6616..6620,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=6621..6624,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_well"} replace barrier
execute as @s[scores={gz-a4-riot=6625..6627,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6628,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6629..6630,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=6629,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=6631..6635,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6636,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6637,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/09-01-tadpole
execute as @s[scores={gz-a4-riot=6637,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6637..6640,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=6641..6643,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6644..6646,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6647..6648,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=6649..6653,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6654..6656,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=6657..6658,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6659..6662,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6663,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=6663,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6663..6664,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=6665..6669,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=6670..6673,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6674..6678,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=6679,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=6680..6684,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6685..6688,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6689,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=6690,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6691,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/01-03-sheep
execute as @s[scores={gz-a4-riot=6691,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6691..6692,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=6693,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=6693,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=6694,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6695,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=6696..6703,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=6704,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=6704,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=6705..6709,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=6710..6713,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6714,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6715..6716,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=6717..6721,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ andesite replace barrier
execute as @s[scores={gz-a4-riot=6722,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=6722,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6722..6723,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=6724..6726,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6727..6732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=6733..6734,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=6734,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=6735..6737,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6738..6741,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=6742,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=6743..6747,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=6748,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/09-02-slime
execute as @s[scores={gz-a4-riot=6748,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6748..6751,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6752,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6753..6757,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=6758..6759,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6760..6761,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=6762..6766,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6767..6770,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6771..6774,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6775,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=6775,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6775..6779,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=6780..6782,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_pyramid"} replace barrier
execute as @s[scores={gz-a4-riot=6783..6784,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/trail_ruins_rare"} replace barrier
execute as @s[scores={gz-a4-riot=6785,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=6786..6792,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=6793..6796,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=6797..6798,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6799..6801,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=6802,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/09-03-zombie_villager
execute as @s[scores={gz-a4-riot=6802,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6802..6803,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=6803,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=6804..6805,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=6806..6810,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=6811..6812,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=6813..6817,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6818..6819,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=6820..6822,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=6823..6825,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=6826,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_iron_block replace barrier
execute as @s[scores={gz-a4-riot=6827..6828,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=6827,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=6829,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=6829,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6829,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=6830..6833,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6834,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=6835..6839,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6840,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=6841..6842,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=6843..6845,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=6846..6848,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=6849,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=6849,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=6850..6852,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/trail_ruins_common"} replace barrier
execute as @s[scores={gz-a4-riot=6853..6855,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=6856,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/09-04-bogged
execute as @s[scores={gz-a4-riot=6856,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=6856,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=6857..6860,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=6861,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=6862..6865,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier



execute as @s[scores={gz-a4-riot=6866,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/trial_title


execute as @s[scores={gz-a4-riot=6866..6883,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6884,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/ranged/poison_skeleton/normal",ominous_config:"minecraft:trial_chamber/ranged/poison_skeleton/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=6885..6886,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=5687,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_supplies",CustomName:{"color":"gold","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=5687,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial"]}
execute as @s[scores={gz-a4-riot=5687,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=5688,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial]

execute as @s[scores={gz-a4-riot=6888..6891,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6892,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=6893..6915,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6916,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/melee/zombie_villager/normal",ominous_config:"minecraft:trial_chamber/melee/zombie_villager/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=6917..6934,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6935,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=6936..6951,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6952,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/melee/spider/normal",ominous_config:"minecraft:trial_chamber/melee/spider/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=6953..6971,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6972,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=6973..6987,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=6987,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/slime/normal",ominous_config:"minecraft:trial_chamber/small_melee/slime/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=6988..7010,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7011,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7012..7039,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7040,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/slime/normal",ominous_config:"minecraft:trial_chamber/small_melee/slime/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=7041..7065,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/ranged/poison_skeleton/normal",ominous_config:"minecraft:trial_chamber/ranged/poison_skeleton/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=7067..7086,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7087,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/small_melee/slime/normal",ominous_config:"minecraft:trial_chamber/small_melee/slime/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=7088..7110,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7111,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 900 1
execute as @s[scores={gz-a4-riot=7111,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=7112..7128,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7129,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_supplies",CustomName:{"color":"gold","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=7129,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial"]}
execute as @s[scores={gz-a4-riot=7129,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=7130,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial]

execute as @s[scores={gz-a4-riot=7130..7136,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7137,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7138..7156,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7157,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/melee/zombie_villager/normal",ominous_config:"minecraft:trial_chamber/melee/zombie_villager/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=7158..7177,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7179..7197,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7198,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7199..7221,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7222,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/melee/spider/normal",ominous_config:"minecraft:trial_chamber/melee/spider/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=7223..7241,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7242,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7243..7265,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7266,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner{normal_config:"minecraft:trial_chamber/ranged/poison_skeleton/normal",ominous_config:"minecraft:trial_chamber/ranged/poison_skeleton/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=7267..7289,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7290,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7291..7321,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7322,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 900 1
execute as @s[scores={gz-a4-riot=7322,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/ranged/poison_skeleton/normal",ominous_config:"minecraft:trial_chamber/ranged/poison_skeleton/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=7323..7341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7342,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=7343..7366,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=7367,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier



execute as @s[scores={gz-a4-riot=7368,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=7369,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=7370,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=7371,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=7372,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=7373..7374,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=7374,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=7375,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=7376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=7376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.respawn_anchor.charge master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=7377..7381,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7378,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=7382..7385,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7386,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7386,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7386,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7387..7391,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7392..7395,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=7396..7399,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7400..7402,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7403,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=7404..7405,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7406..7407,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=7408..7410,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=7411,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=7412,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7412,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7412..7416,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7417..7419,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=7420,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=7421..7425,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=7426..7428,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7429..7434,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7435..7438,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=7439,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/01-03-sheep
execute as @s[scores={gz-a4-riot=7439,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7439..7440,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=7440,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=7441..7444,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7445,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=7446,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7447,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=7448,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=7449..7451,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_sand{LootTable:"minecraft:archaeology/desert_pyramid"} replace barrier
execute as @s[scores={gz-a4-riot=7452..7455,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7456,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7457..7459,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7460..7462,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7463..7467,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=7468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7469..7471,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7472,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=7472,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=7473,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=7474..7476,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7477..7479,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=7480,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=7481,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7482..7486,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7487..7490,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=7491,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=7492..7494,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=7495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/09-04-bogged
execute as @s[scores={gz-a4-riot=7495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7495..7497,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7498,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=7499,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7500,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7501..7505,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=7506,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:musical",CustomName:{"text":"Musical Chest","color":"dark_aqua"}}
execute as @s[scores={gz-a4-riot=7506,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.note_block.pling master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=7507..7511,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7509,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=7512..7516,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=7517,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7518,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=7518,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party
execute as @s[scores={gz-a4-riot=7518,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party9
execute as @s[scores={gz-a4-riot=7519..7520,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/ocean_ruin_warm"} replace barrier
execute as @s[scores={gz-a4-riot=7521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=7521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/dark_oak_tree
execute as @s[scores={gz-a4-riot=7522..7526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7527..7528,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7529,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7529,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7529..7533,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ stone replace barrier
execute as @s[scores={gz-a4-riot=7534..7536,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7537..7539,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=7540..7544,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7545,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=7546..7548,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7549..7550,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7551..7553,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7554..7558,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=7559,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7559,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7559,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=7560..7561,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7562..7567,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7568,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=7569..7571,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=7572..7575,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=7576..7577,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=7578..7582,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7583,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7583,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=7584,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7585..7588,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=7589,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/09-03-zombie_villager
execute as @s[scores={gz-a4-riot=7589,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7589..7593,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mangrove_log replace barrier
execute as @s[scores={gz-a4-riot=7594..7596,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7597..7598,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7599..7602,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7603..7604,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7605..7606,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=7605,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=7607,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=7608,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7609..7610,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=7611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7612..7616,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=7617,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:variants/frog
execute as @s[scores={gz-a4-riot=7617,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7617..7621,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7622..7624,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7625..7628,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7629..7632,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7633..7635,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7636,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=7637..7639,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7640..7641,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7642..7651,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7652,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7652,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7652..7661,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7662..7667,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7668,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09",CustomName:{"text":"Cursed Chest"}}
execute as @s[scores={gz-a4-riot=7669..7671,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=7672..7675,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/trail_ruins_common"} replace barrier
execute as @s[scores={gz-a4-riot=7676..7677,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=7678..7681,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7682,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:09-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=7682,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=7683,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_moss_block replace barrier
execute as @s[scores={gz-a4-riot=7684,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=7685..7688,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ grass_block replace barrier
execute as @s[scores={gz-a4-riot=7686,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/mangrove_tree
execute as @s[scores={gz-a4-riot=7689,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7689,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7689..7693,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=7694..7696,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7697..7698,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ muddy_mangrove_roots replace barrier
execute as @s[scores={gz-a4-riot=7699..7702,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7703..7705,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7706,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=7707..7708,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=7709..7710,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ suspicious_gravel{LootTable:"minecraft:archaeology/ocean_ruin_cold"} replace barrier
execute as @s[scores={gz-a4-riot=7711,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7712..7716,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ packed_mud replace barrier
execute as @s[scores={gz-a4-riot=7717,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7717,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7717..7718,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ creaking_heart[creaking_heart_state=awake] replace barrier
execute as @s[scores={gz-a4-riot=7719..7721,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ clay replace barrier
execute as @s[scores={gz-a4-riot=7722..7724,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7725..7727,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7728,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7728,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/pale_oak_tree
execute as @s[scores={gz-a4-riot=7729..7732,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ pale_oak_log replace barrier
execute as @s[scores={gz-a4-riot=7733..7735,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7736,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mud replace barrier
execute as @s[scores={gz-a4-riot=7737..7741,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7742..7751,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7752,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/09
execute as @s[scores={gz-a4-riot=7752,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7752..7761,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/09
execute as @s[scores={gz-a4-riot=7762,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ copper_chest[facing=east]{LootTable:"gamerz_riot:09-gift",CustomName:{"text":"Benevolent Gift",italic:false,"color":"dark_red"}}
execute as @s[scores={gz-a4-riot=7762,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.wandering_trader.yes master @a[distance=..35] ~ ~ ~ 1 0.9 1