kill @e[tag=gz-a4-block]
setblock ~ ~ ~ minecraft:grass_block
summon minecraft:area_effect_cloud ~ ~0.005 ~ {custom_particle:{type:"ash"},Radius:0.43f,PersistenceRequired:1b,NoGravity:1b,Duration:2000000000,Tags:["gz-a4-block"]}