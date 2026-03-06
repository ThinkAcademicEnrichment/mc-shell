execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @s {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n You reached phase 12: Idyll!","color":"gold"}
execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":" A breeze of peace blows across the land.","color":"yellow"}
execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tellraw @a {"text":"\n ","italic": true,"extra":[{"text":"⮞ Click to open the settings.","color":"gray","click_event":{"action":"run_command","command":"/trigger gz-a4 set 2"},"hover_event":{"action":"show_text","value":"Opens the settings menu."}}]}
execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/biomes/12
#execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] gz-a4-phasemined 10124
#execute as @s[scores={gz-a4-riot=10124,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run scoreboard players set @e[tag=gz-a4-block] toBeMined 1599

execute as @s[scores={gz-a4-riot=10124..10131,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10132..10138,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10139..10141,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10142,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10143..10146,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10147..10149,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=10150..10154,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_blue_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10155..10159,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ sponge replace barrier
execute as @s[scores={gz-a4-riot=10160..10162,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10163,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-02-slime
execute as @s[scores={gz-a4-riot=10163,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10163..10166,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=10167,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=10168..10171,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mushroom_stem replace barrier
execute as @s[scores={gz-a4-riot=10172,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10173..10175,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ sponge replace barrier
execute as @s[scores={gz-a4-riot=10176..10178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10179,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10179,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=10180..10182,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=10183..10186,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10187..10193,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10194,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10194..10198,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=10199,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10200..10204,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mushroom_stem replace barrier
execute as @s[scores={gz-a4-riot=10205,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10206..10210,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mushroom_stem replace barrier
execute as @s[scores={gz-a4-riot=10211..10215,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=10216..10222,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10223,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-03-mule
execute as @s[scores={gz-a4-riot=10223,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10223..10225,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10226..10230,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10231..10235,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=10236,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=10237..10241,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10242..10243,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=10244,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=10245..10247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ beehive replace barrier
execute as @s[scores={gz-a4-riot=10248..10257,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10258,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10258,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10258..10266,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10267..10271,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ beehive replace barrier
execute as @s[scores={gz-a4-riot=10272..10275,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10276..10278,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mushroom_stem replace barrier
execute as @s[scores={gz-a4-riot=10279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=10279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/birch_tree
execute as @s[scores={gz-a4-riot=10280,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=10281..10283,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mushroom_stem replace barrier
execute as @s[scores={gz-a4-riot=10284,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-01-cat
execute as @s[scores={gz-a4-riot=10284,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10284,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_blue_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10285..10286,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=10287..10288,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_blue_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10289..10292,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=10293..10297,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10298..10299,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ sponge replace barrier
execute as @s[scores={gz-a4-riot=10300..10304,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=10305,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10306,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ beehive replace barrier
execute as @s[scores={gz-a4-riot=10307..10312,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10313,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10313,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10313..10315,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10316..10319,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10320..10321,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10322,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10322,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=10323..10326,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=10327..10328,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_copper_block replace barrier
execute as @s[scores={gz-a4-riot=10329..10335,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10336,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10337..10340,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-04-phantom
execute as @s[scores={gz-a4-riot=10341,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10341..10343,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=10344..10346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=10347,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=10348,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=10349..10352,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_gold_ore replace barrier
execute as @s[scores={gz-a4-riot=10353..10354,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10355..10358,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10359,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:superchest",CustomName:{"text":"Super Chest","color":"black"}}
execute as @s[scores={gz-a4-riot=10359,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.respawn_anchor.charge master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=10360..10362,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_blue_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10363..10367,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10368,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10369,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10369,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10369..10372,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10373..10376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10377..10379,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=10380,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=10380,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/birch_tree
execute as @s[scores={gz-a4-riot=10381..10384,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=10385..10389,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10390..10393,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=10394..10398,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ gold_ore replace barrier
execute as @s[scores={gz-a4-riot=10399,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-02-slime
execute as @s[scores={gz-a4-riot=10399,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10399..10400,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ mushroom_stem replace barrier
execute as @s[scores={gz-a4-riot=10401,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=10402,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10403..10404,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10405..10406,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10405,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=10407..10414,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10415..10417,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10418..10419,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10420,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10421..10425,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=10426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10427..10429,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10430..10432,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=10433..10434,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10435,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_blue_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10436,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=10436,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/birch_tree
execute as @s[scores={gz-a4-riot=10437,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ beehive replace barrier
execute as @s[scores={gz-a4-riot=10438..10440,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ light_blue_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10441,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=10442..10443,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=10444..10446,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=10447..10450,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10451..10452,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10453,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-05-zombie_
execute as @s[scores={gz-a4-riot=10453,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10453..10454,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10455..10456,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10457,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10458,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10459..10461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=10462..10464,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10465,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10465,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=10466..10468,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=10469,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10470,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10471..10473,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10474..10476,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10477..10481,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10482,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10482,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10482..10483,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10484..10485,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=10486..10488,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10489..10490,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10491..10492,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=10493..10494,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=10495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10495,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=10496..10499,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=10500..10501,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10502,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ iron_ore replace barrier
execute as @s[scores={gz-a4-riot=10503,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10504..10507,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10507,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party
execute as @s[scores={gz-a4-riot=10507,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run tag @s add gz-a4-party12
execute as @s[scores={gz-a4-riot=10508,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10509..10514,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10515,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=10516,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10517,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=10518..10519,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ lapis_ore replace barrier
execute as @s[scores={gz-a4-riot=10520,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-04-phantom
execute as @s[scores={gz-a4-riot=10520,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10520..10523,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_pillar replace barrier
execute as @s[scores={gz-a4-riot=10524,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ redstone_ore replace barrier
execute as @s[scores={gz-a4-riot=10525,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=10525,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=10526,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10527..10529,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10530,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10530,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=10531..10532,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_coal_ore replace barrier
execute as @s[scores={gz-a4-riot=10533..10546,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10547,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-01-cat
execute as @s[scores={gz-a4-riot=10547,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10547,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10548..10554,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10555..10557,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=10558..10559,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=10560..10563,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=10564..10566,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ budding_amethyst replace barrier
execute as @s[scores={gz-a4-riot=10567..10568,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10569,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=10570,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=10571,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10572..10576,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=10577,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-05-zombie_
execute as @s[scores={gz-a4-riot=10577,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10577..10581,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10582..10586,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10587,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=10587,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=10588..10592,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=10593,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10594,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10595..10598,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=10599..10605,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=10606,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=10606,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=10606..10610,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=10612..10614,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=10615..10618,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=10619..10622,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10623,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=10623,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/birch_tree
execute as @s[scores={gz-a4-riot=10624,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=10625,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier



execute as @s[scores={gz-a4-riot=10626,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:extra/tricky_trial_title


execute as @s[scores={gz-a4-riot=10626..10657,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10658,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10658,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/ranged/stray/normal",ominous_config:"minecraft:trial_chamber/ranged/stray/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=10659..10681,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10682,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=10683..10695,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10696,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_supplies",CustomName:{"color":"gold","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=10696,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial"]}
execute as @s[scores={gz-a4-riot=10696,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=10697,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial]

execute as @s[scores={gz-a4-riot=10697..10715,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10716,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10716,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/phantom/normal",ominous_config:"minecraft:trial_chamber/melee/phantom/normal"} replace barrier

execute as @s[scores={gz-a4-riot=10717..10734,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10735,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=10736..10751,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10752,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10752,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/slime/normal",ominous_config:"minecraft:trial_chamber/small_melee/slime/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=10753..10771,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10772,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=10773..10778,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10779,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ barrel[facing=up]{LootTable:"gamerz_riot:trial_ominous_supplies",CustomName:{"color":"red","italic":false,"text":"Supply Crate"}} replace barrier
execute as @s[scores={gz-a4-riot=10779,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run summon marker ~ ~ ~ {Tags:["trial_ominous"]}
execute as @s[scores={gz-a4-riot=10779,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.trial_spawner.detect_player master @a[distance=..35] ~ ~ ~ 5 2 1

execute as @s[scores={gz-a4-riot=10780,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run kill @e[type=marker,tag=trial_ominous]

execute as @s[scores={gz-a4-riot=10780..10787,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10787,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10787,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=10788..10810,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10811,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=10812..10839,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10840,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10840,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/phantom/normal",ominous_config:"minecraft:trial_chamber/melee/phantom/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=10841..10865,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10866,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10866,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=10867..10886,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10887,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10887,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/ranged/stray/normal",ominous_config:"minecraft:trial_chamber/ranged/stray/normal"} replace barrier

execute as @s[scores={gz-a4-riot=10888..10910,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10911,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"gamerz_riot:heavy_core"}} replace barrier

execute as @s[scores={gz-a4-riot=10912..10936,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10937,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=10938..10956,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=10957,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/melee/phantom/normal",ominous_config:"minecraft:trial_chamber/melee/phantom/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=10958..10977,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10978,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=10979..10997,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=10998,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=10999..11021,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=11022,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=11022,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/small_melee/slime/normal",ominous_config:"minecraft:trial_chamber/small_melee/slime/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=11023..11041,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=11042,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault replace barrier

execute as @s[scores={gz-a4-riot=11043..11065,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=11066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=11066,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/ranged/stray/normal",ominous_config:"minecraft:trial_chamber/ranged/stray/ominous"} replace barrier

execute as @s[scores={gz-a4-riot=11067..11089,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=11090,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier

execute as @s[scores={gz-a4-riot=11091..11121,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=11122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run effect give @a[distance=..16] trial_omen 1200 1
execute as @s[scores={gz-a4-riot=11122,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ trial_spawner[ominous=true]{normal_config:"minecraft:trial_chamber/breeze/normal",ominous_config:"minecraft:trial_chamber/breeze/ominous_2"} replace barrier

execute as @s[scores={gz-a4-riot=11123..11137,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/trials
execute as @s[scores={gz-a4-riot=11138,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ vault[ominous=true]{config:{key_item:{count:1,id:"minecraft:ominous_trial_key"},loot_table:"minecraft:chests/trial_chambers/reward_ominous"}} replace barrier



execute as @s[scores={gz-a4-riot=11139..11142,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11143..11145,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=11143,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-02-slime
execute as @s[scores={gz-a4-riot=11143,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11146..11148,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11149..11156,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11157..11158,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11159,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11160,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=11161,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11161,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11161,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11162..11165,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_copper_ore replace barrier
execute as @s[scores={gz-a4-riot=11166,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=11166,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=11167,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11168..11177,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11178,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11179..11183,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_copper_block replace barrier
execute as @s[scores={gz-a4-riot=11184,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11185..11189,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11190,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11190,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11190..11192,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11193..11197,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=11198,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=11199,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11200,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=11201..11204,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11205..11208,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11209..11211,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=11212..11216,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11217,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-04-phantom
execute as @s[scores={gz-a4-riot=11217,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11217,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11218..11223,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11224..11225,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=11225,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=11226..11228,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11229..11230,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=11231,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11232,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:musical",CustomName:{"text":"Musical Chest","color":"dark_aqua"}}
execute as @s[scores={gz-a4-riot=11232,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.note_block.pling master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=11233,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11234..11241,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11242..11247,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11248,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11248,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11248..11251,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11252..11256,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11257..11260,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=11261..11263,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=11264..11267,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate replace barrier
execute as @s[scores={gz-a4-riot=11268..11269,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=11270,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=11270,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=11271..11273,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=11274..11276,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11277..11278,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11279,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11280,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ coal_ore replace barrier
execute as @s[scores={gz-a4-riot=11281,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ red_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=11282..11286,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11287,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11287,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11287..11291,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ amethyst_block replace barrier
execute as @s[scores={gz-a4-riot=11292..11297,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11298..11302,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=11303,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11304,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11305..11308,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11309..11313,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11314..11315,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=11315,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/birch_tree
execute as @s[scores={gz-a4-riot=11316,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11316,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11316..11320,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11321,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=11322..11324,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11325..11327,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ tuff replace barrier
execute as @s[scores={gz-a4-riot=11328,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:rarechest",CustomName:{"text":"Rare Chest","color":"dark_purple"}}
execute as @s[scores={gz-a4-riot=11328,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:item.trident.thunder master @a[distance=..35] ~ ~ ~ 0.6 0.5 0.6
execute as @s[scores={gz-a4-riot=11329..11333,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_iron_ore replace barrier
execute as @s[scores={gz-a4-riot=11334,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11335,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=11336..11337,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=11338,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=11339,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=11339,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=11340,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11341..11344,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11345,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:mob/12-02-slime
execute as @s[scores={gz-a4-riot=11345,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11345..11346,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11347..11351,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ copper_ore replace barrier
execute as @s[scores={gz-a4-riot=11352..11354,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11355..11358,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11359..11366,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11367..11368,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11369,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11370,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11371,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11371,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11371,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11372..11376,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11377,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11378..11387,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11388,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11389..11392,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11393,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=11393,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/birch_tree
execute as @s[scores={gz-a4-riot=11394,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11395..11399,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11400,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11400,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11400..11402,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11403..11407,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ brown_mushroom_block replace barrier
execute as @s[scores={gz-a4-riot=11408,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ emerald_ore replace barrier
execute as @s[scores={gz-a4-riot=11409,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11410,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12",CustomName:{"text":"Idyll Chest"}}
execute as @s[scores={gz-a4-riot=11411..11414,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11415..11418,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11419..11421,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ calcite replace barrier
execute as @s[scores={gz-a4-riot=11422..11426,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11427,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11427,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11427,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_basalt replace barrier
execute as @s[scores={gz-a4-riot=11428..11433,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11434..11435,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=11435,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/red_mushhroom
execute as @s[scores={gz-a4-riot=11436..11438,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11439..11440,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11441,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ deepslate_diamond_ore replace barrier
execute as @s[scores={gz-a4-riot=11442,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ chest[facing=east]{LootTable:"gamerz_riot:12-variety",CustomName:{"text":"Variety Chest","color":"blue"}}
execute as @s[scores={gz-a4-riot=11442,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:block.ender_chest.open master @a[distance=..35] ~ ~ ~ 1 0.5 1
execute as @s[scores={gz-a4-riot=11443,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11444..11451,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11452..11457,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11458,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11458,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11458..11461,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ chiseled_quartz_block replace barrier
execute as @s[scores={gz-a4-riot=11462..11466,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11467..11470,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ raw_copper_block replace barrier
execute as @s[scores={gz-a4-riot=11471..11473,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11474..11477,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ dirt replace barrier
execute as @s[scores={gz-a4-riot=11478..11479,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11480,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ magenta_terracotta replace barrier
execute as @s[scores={gz-a4-riot=11481..11483,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11484,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11484,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11484,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11485,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11486..11487,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11488..11491,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11492,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ podzol replace barrier
execute as @s[scores={gz-a4-riot=11492,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:trees/brown_mushhroom
execute as @s[scores={gz-a4-riot=11493,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run fill ~ ~ ~ ~ ~ ~ smooth_quartz replace barrier
execute as @s[scores={gz-a4-riot=11494..11596,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11597..11601,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11602..11611,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11612,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-mob/12
execute as @s[scores={gz-a4-riot=11612,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:effects/mob-spawn
execute as @s[scores={gz-a4-riot=11612..11721,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run function gamerz_riot:random-block/12
execute as @s[scores={gz-a4-riot=11722,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run setblock ~ ~ ~ copper_chest[facing=east]{LootTable:"gamerz_riot:12-gift",CustomName:{"text":"Benevolent Gift",italic:false,"color":"dark_red"}}
execute as @s[scores={gz-a4-riot=11722,gz-a4-cool=1}] at @s align xz positioned ~0.5 ~ ~0.5 run playsound minecraft:entity.wandering_trader.yes master @a[distance=..35] ~ ~ ~ 1 0.9 1