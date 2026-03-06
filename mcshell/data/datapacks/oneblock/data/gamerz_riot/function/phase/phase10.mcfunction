execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n You reached phase 10: The Nether!","color":"gold"}
execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":" A hell-like dimension invades and spreads chaos.","color":"yellow"}
execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/10
#execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 7764
#execute as @s[scores={gz-a4-riot=7764,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] toBeMined 848

execute as @s[scores={gz-a4-riot=7764..7770,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7771..7774,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=7775..7776,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=7777..7780,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=7781..7785,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7786..7789,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=7790..7791,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7792..7798,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7799..7806,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7807..7809,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7810..7811,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=7812..7813,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7814..7816,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7816,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-01-piglin
execute as @s[scores={gz-a4-riot=7816,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7817..7818,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7819,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7820,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=7821..7825,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=7826..7828,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7829..7833,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=7831,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=7834..7836,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=7837,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ ancient_debris replace barrier
execute as @s[scores={gz-a4-riot=7838..7843,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=7844..7847,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=7848,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=7848,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=7848,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7849,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=7850,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=7851,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=7852,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crying_obsidian replace barrier
execute as @s[scores={gz-a4-riot=7853..7859,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7860..7864,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=7865,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crying_obsidian replace barrier
execute as @s[scores={gz-a4-riot=7866..7867,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7868,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=7869..7871,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=7872..7875,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=7876..7877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-02-magma_c
execute as @s[scores={gz-a4-riot=7877,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7878..7879,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7880..7881,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7882..7883,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=7884..7891,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=7892..7899,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7900,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7901..7905,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=7905,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=7906,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7907..7909,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=7909,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=7909,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7910..7911,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7912..7915,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7916,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=7916,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=7917..7919,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7920,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crying_obsidian replace barrier
execute as @s[scores={gz-a4-riot=7921..7923,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=7924..7926,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=7927,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=7927,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=7928,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7929..7933,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=7934..7936,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=7937..7938,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7938,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-03-hoglin
execute as @s[scores={gz-a4-riot=7938,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7939,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7940..7943,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=7944..7946,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=7947,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dried_ghast replace barrier
execute as @s[scores={gz-a4-riot=7948,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7949..7951,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=7952..7957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=7958..7959,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=7960..7962,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=7961,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=7963..7970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=7970,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=7971..7973,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7974..7979,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=7980..7981,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=7982,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=7982,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.respawn_anchor.charge master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=7983..7990,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=7991..7994,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=7995..8000,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8000,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-04-blaze
execute as @s[scores={gz-a4-riot=8000,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8001..8005,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8006..8007,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8008,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8009..8012,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8013..8018,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8019..8021,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8022..8025,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8026..8028,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8029..8032,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8033,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8033,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8033..8036,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8037..8038,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8039..8040,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8041,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8042..8044,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8042,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8045,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8046,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8047,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8048,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8049..8054,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8055..8057,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8058..8060,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8061,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8062,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8062,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-05-strider
execute as @s[scores={gz-a4-riot=8062,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8063..8064,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8065,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8065,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8067..8068,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8069..8071,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8072..8074,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8075,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8076,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8077..8079,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8080..8082,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8083..8086,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8087..8089,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8090..8093,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8094,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8094,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8094,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8095..8098,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8098,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8099..8104,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8105,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8106..8113,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8114,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:musical",CustomName:{"text":"Musical Chest","color":"dark_aqua"}}
execute as @s[scores={gz-a4-riot=8114,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.note_block.pling master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=8115..8118,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8119..8122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8123,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8123,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-06-wither_
execute as @s[scores={gz-a4-riot=8123,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8124..8126,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8127..8128,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8129,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ ancient_debris replace barrier
execute as @s[scores={gz-a4-riot=8130..8131,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8132,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8133..8144,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8145..8146,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8147..8148,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8149..8155,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8155,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8155,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8156,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8157..8159,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=8160..8170,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8171..8173,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8174..8179,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8180,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8181..8185,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8185,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-07-ghast
execute as @s[scores={gz-a4-riot=8185,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8186..8193,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party
execute as @s[scores={gz-a4-riot=8194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party10
execute as @s[scores={gz-a4-riot=8195..8199,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8199,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8200..8201,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8202..8203,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8204..8208,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8209..8211,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8212,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dried_ghast replace barrier
execute as @s[scores={gz-a4-riot=8213..8216,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8217,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8217,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-04-blaze
execute as @s[scores={gz-a4-riot=8217,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8218..8220,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8221..8223,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8224,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8225..8229,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8230..8232,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8233..8234,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8235,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8236..8241,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8242..8245,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8246,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8248..8252,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ netherrack replace barrier
execute as @s[scores={gz-a4-riot=8253..8254,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8255..8266,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8267..8268,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8269,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8270..8272,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8273..8276,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8273,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=8277,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8278..8279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-05-strider
execute as @s[scores={gz-a4-riot=8279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8280,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8281..8282,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8283..8285,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8285,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=8286..8292,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8293..8298,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8299..8300,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8301..8302,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8303..8306,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8307..8309,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8310..8311,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8311,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8311,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8312,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8313..8319,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8320..8327,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8328,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8329,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8329,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8330,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8331..8332,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8333..8334,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8335,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8336..8339,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8340..8341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-06-wither_
execute as @s[scores={gz-a4-riot=8341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8342..8344,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8345..8347,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=8348..8353,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8354..8357,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8358..8359,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8360,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8361..8362,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8363,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8364..8366,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8367..8372,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8373,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8373,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8373,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8374,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8375..8377,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8378,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8379..8381,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_sand replace barrier
execute as @s[scores={gz-a4-riot=8382,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dried_ghast replace barrier
execute as @s[scores={gz-a4-riot=8383..8384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8385..8387,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8388..8391,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8392..8394,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8395,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8396..8399,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8400..8403,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8403,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-07-ghast
execute as @s[scores={gz-a4-riot=8403,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8404..8406,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8407..8410,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8411..8412,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8413..8415,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8416,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8416,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8417..8419,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8420..8422,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8423..8425,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8427..8430,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8431,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ soul_soil replace barrier
execute as @s[scores={gz-a4-riot=8432..8435,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8435,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-01-piglin
execute as @s[scores={gz-a4-riot=8435,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8436..8443,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8444,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=8444,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=8445..8446,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ glowstone replace barrier
execute as @s[scores={gz-a4-riot=8447..8449,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8450..8453,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8451,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=8454..8456,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8457..8460,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8461..8462,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8463..8464,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=8464,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-02-magma_c
execute as @s[scores={gz-a4-riot=8464,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8465..8473,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8474,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_wart_block replace barrier
execute as @s[scores={gz-a4-riot=8475..8477,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8478..8479,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8480,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8481..8482,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8483..8486,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8487..8493,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8494..8496,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8496,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-03-hoglin
execute as @s[scores={gz-a4-riot=8496,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8497..8500,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_quartz_ore replace barrier
execute as @s[scores={gz-a4-riot=8501..8503,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ blackstone replace barrier
execute as @s[scores={gz-a4-riot=8504,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ ancient_debris replace barrier
execute as @s[scores={gz-a4-riot=8505,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8506..8509,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8510,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8511,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8512,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8513..8516,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8517..8520,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8521..8524,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ crimson_nylium replace barrier
execute as @s[scores={gz-a4-riot=8521,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/crimson_tree
execute as @s[scores={gz-a4-riot=8525,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/10-04-blaze
execute as @s[scores={gz-a4-riot=8526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=8527,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magma_block replace barrier
execute as @s[scores={gz-a4-riot=8528..8530,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gilded_blackstone replace barrier
execute as @s[scores={gz-a4-riot=8531..8533,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8534..8535,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8536..8541,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8542..8545,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ basalt replace barrier
execute as @s[scores={gz-a4-riot=8546..8549,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8550..8553,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8554,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ obsidian replace barrier
execute as @s[scores={gz-a4-riot=8555,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8556..8557,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8558..8563,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8564,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8565..8570,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8571,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8572,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ warped_nylium replace barrier
execute as @s[scores={gz-a4-riot=8572,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/warped_tree
execute as @s[scores={gz-a4-riot=8573..8575,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8576,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:10",CustomName:{"text":"Nether Chest"}}
execute as @s[scores={gz-a4-riot=8577..8580,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8581..8583,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8584..8587,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ nether_bricks replace barrier
execute as @s[scores={gz-a4-riot=8588..8590,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ shroomlight replace barrier
execute as @s[scores={gz-a4-riot=8591..8600,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8601,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/10
execute as @s[scores={gz-a4-riot=8601..8610,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/10
execute as @s[scores={gz-a4-riot=8611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ copper_chest[facing=east]{LootTable:"gamerz_riot:10-gift",CustomName:{"text":"Benevolent Gift",italic:false,"color":"dark_red"}}
execute as @s[scores={gz-a4-riot=8611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.wandering_trader.yes master @a[distance=..35] ~ ~ ~ 1 0.9 1