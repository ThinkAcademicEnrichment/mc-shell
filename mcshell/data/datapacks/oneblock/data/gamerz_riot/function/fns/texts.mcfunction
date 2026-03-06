kill @e[tag=gz-a4-tutorial]

execute as @s[scores={gz-a4-riot=1}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial1] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"§6Break§r the block below you!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial1"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}
execute as @s[scores={gz-a4-riot=1}] unless entity @e[tag=gz-a4-tutorial1-tped] as @a at @s run teleport @p ~ ~0.3 ~ facing entity @e[tag=gz-a4-tutorial1,limit=1]
execute as @s[scores={gz-a4-riot=1}] at @s unless entity @e[tag=gz-a4-tutorial1-tped] run execute as @a at @s run tp @p ~ ~ ~ ~ ~42
execute as @e[tag=gz-a4-tutorial1] at @s unless entity @s[tag=gz-a4-tutorial1-tped] run tag @s add gz-a4-tutorial1-tped

execute as @s[scores={gz-a4-riot=2}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial2] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"The block will §aregenerate§r!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial2"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=3}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial3] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"It is an §dinfinite block§r!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial3"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=4}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial4] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"It spawns §amore§r than dirt!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial4"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=5}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial5] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Blocks even §aimprove§r over time!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial5"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=6}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial6] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"§6Chests§r can also appear!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial6"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=7}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial7] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"§6Enlarge§r your platform!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial7"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=15}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial8] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"There are total §615§r phases!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial8"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}
execute as @s[scores={gz-a4-riot=15}] unless entity @e[tag=gz-a4-tutorial8-tped] as @a at @s run teleport @p ~ ~0.3 ~ facing entity @e[tag=gz-a4-tutorial8,limit=1]
execute as @s[scores={gz-a4-riot=15}] at @s unless entity @e[tag=gz-a4-tutorial8-tped] run execute as @a at @s run tp @p ~ ~ ~ ~ ~42
execute as @e[tag=gz-a4-tutorial8] at @s unless entity @s[tag=gz-a4-tutorial8-tped] run tag @s add gz-a4-tutorial8-tped

execute as @s[scores={gz-a4-riot=16}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial9] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Each phase has a §6different§r §aTheme §f& §aBiome§r!","CustomNameVisible":1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial9"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=17}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial10] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"The first phase is §aPlains§r!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial10"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=18}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial11] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Here, Suitable §6mobs§r and §6blocks§r spawn!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial11"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=19}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial12] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Later, §6rarer§r blocks spawn too!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial12"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=20}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial13] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"You can even enter other §6dimensions§r!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial13"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=21}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial14] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Like §4The Nether §fand §1The End§r!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial14"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=29}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial15] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"§aSave§r your items in chests!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial15"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=30}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial16] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"If you §cFall§r, you will §cLoose§r your items!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial16"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=33}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial17] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Blocks like §6gravel§r falls!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial17"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}
execute as @s[scores={gz-a4-riot=33}] unless entity @e[tag=gz-a4-tutorial17-tped] as @a at @s run teleport @p ~ ~0.3 ~ facing entity @e[tag=gz-a4-tutorial17,limit=1]
execute as @s[scores={gz-a4-riot=33}] at @s unless entity @e[tag=gz-a4-tutorial17-tped] run execute as @a at @s run tp @p ~ ~ ~ ~ ~42
execute as @e[tag=gz-a4-tutorial17] at @s unless entity @s[tag=gz-a4-tutorial17-tped] run tag @s add gz-a4-tutorial17-tped

execute as @s[scores={gz-a4-riot=35}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial18] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Place a block under the §dinfinite block§r!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial18"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=36}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial19] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"This item may §9help§r with that!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial19"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}

execute as @s[scores={gz-a4-riot=39}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial20] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"§aMini Tress§r will also appear!",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial20"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}


execute as @s[scores={gz-a4-riot=46}] at @s align xz positioned ~0.5 ~ ~0.5 unless entity @e[tag=gz-a4-tutorial21] run summon minecraft:armor_stand ~-0.85 ~0.35 ~ {CustomName:"Ready for an §aadventure§r?",CustomNameVisible:1b,Tags:["gz-a4-remove-on-skip","gz-a4-tutorial","gz-a4-tutorial21"],Invulnerable:1b,Invisible:1b,PersistenceRequired:1b,NoBasePlate:1b,NoGravity:1b,Small:1b,Marker:1b}
execute as @s[scores={gz-a4-riot=46}] unless entity @e[tag=gz-a4-tutorial21-tped] as @a at @s run teleport @p ~ ~0.3 ~ facing entity @e[tag=gz-a4-tutorial21,limit=1]
execute as @s[scores={gz-a4-riot=46}] at @s unless entity @e[tag=gz-a4-tutorial21-tped] run execute as @a at @s run tp @p ~ ~ ~ ~ ~42
execute as @e[tag=gz-a4-tutorial21] at @s unless entity @s[tag=gz-a4-tutorial21-tped] run tag @s add gz-a4-tutorial21-tped