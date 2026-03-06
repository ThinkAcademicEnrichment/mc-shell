scoreboard players add @a gz-a4-kills 0
scoreboard players add @a gz-a4-deaths 0

function gamerz_riot:ab

##############################
# Make Oneblock Text Rainbow #
##############################
scoreboard objectives add gz-a4-rainbow dummy
scoreboard players add @e[tag=gz-a4-block] gz-a4-rainbow 1

execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=10}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§l§e§lONEBLOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=15}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§l§6§lO§e§lNEBLOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=20}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lO§6§lN§e§lEBLOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=25}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lON§6§lE§e§lBLOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=30}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONE§6§lB§e§lLOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=35}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEB§6§lL§e§lOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=40}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEBL§6§lO§e§lCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=45}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEBLO§6§lC§e§lK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=50}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEBLOC§6§lK§e§l§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=55}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEBLOCK§6§l§e§l§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=60}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEBLOCK§e§l§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=65}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§l§e§lONEBLOCK§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=70}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§lONEBLOCK§e§l§r   "}
execute if entity @e[tag=gz-a4-block,scores={gz-a4-rainbow=75}] run scoreboard objectives modify gz-a4-scoreboard displayname {"text":"§b§l§e§lONEBLOCK§r   "}

scoreboard players set @e[tag=gz-a4-block,scores={gz-a4-rainbow=80}] gz-a4-rainbow 0



#############
#  Players  #
#############
execute store result score Player gz-a4-playercount if entity @e[type=player]

execute if score Player gz-a4-playercount matches 1 run team modify player suffix " §a1"
execute if score Player gz-a4-playercount matches 2 run team modify player suffix " §a2"
execute if score Player gz-a4-playercount matches 3 run team modify player suffix " §a3"
execute if score Player gz-a4-playercount matches 4 run team modify player suffix " §a4"
execute if score Player gz-a4-playercount matches 5 run team modify player suffix " §a5"
execute if score Player gz-a4-playercount matches 6 run team modify player suffix " §a6"
execute if score Player gz-a4-playercount matches 7 run team modify player suffix " §a7"
execute if score Player gz-a4-playercount matches 8 run team modify player suffix " §a8"
execute if score Player gz-a4-playercount matches 9 run team modify player suffix " §a9"
execute if score Player gz-a4-playercount matches 10.. run team modify player suffix " §a10+"

##########
#  Mode  #
##########
scoreboard players set #Mode gz-a4-playercount 2

# execute if score Player gz-a4-playercount matches 1 run team modify status suffix " §6Singleplayer"
# execute if score Player gz-a4-playercount >= #Mode gz-a4-playercount run team modify status suffix " §6Multiplayer"

############
#  Phases  #
############
execute if entity @e[scores={gz-a4-riot=1..48},tag=gz-a4-block] run team modify phase suffix " §a00§r"
execute if entity @e[scores={gz-a4-riot=49..333},tag=gz-a4-block] run team modify phase suffix " §a01§r"
execute if entity @e[scores={gz-a4-riot=334..864},tag=gz-a4-block] run team modify phase suffix " §a02§r"
execute if entity @e[scores={gz-a4-riot=865..1687},tag=gz-a4-block] run team modify phase suffix " §a03§r"
execute if entity @e[scores={gz-a4-riot=1688..2553},tag=gz-a4-block] run team modify phase suffix " §a04§r"
execute if entity @e[scores={gz-a4-riot=2554..3311},tag=gz-a4-block] run team modify phase suffix " §a05§r"
execute if entity @e[scores={gz-a4-riot=3312..4173},tag=gz-a4-block] run team modify phase suffix " §a06§r"
execute if entity @e[scores={gz-a4-riot=4174..5130},tag=gz-a4-block] run team modify phase suffix " §a07§r"
execute if entity @e[scores={gz-a4-riot=5131..6451},tag=gz-a4-block] run team modify phase suffix " §a08§r"
execute if entity @e[scores={gz-a4-riot=6452..7763},tag=gz-a4-block] run team modify phase suffix " §a09§r"
execute if entity @e[scores={gz-a4-riot=7764..8612},tag=gz-a4-block] run team modify phase suffix " §a10§r"
execute if entity @e[scores={gz-a4-riot=8613..10123},tag=gz-a4-block] run team modify phase suffix " §a11§r"
execute if entity @e[scores={gz-a4-riot=10124..11723},tag=gz-a4-block] run team modify phase suffix " §a12§r"
execute if entity @e[scores={gz-a4-riot=11724..13153},tag=gz-a4-block] run team modify phase suffix " §a13§r"
execute if entity @e[scores={gz-a4-riot=13154..14619},tag=gz-a4-block] run team modify phase suffix " §a14§r"
execute if entity @e[scores={gz-a4-riot=14620..15636},tag=gz-a4-block] run team modify phase suffix " §a15§r"
execute if entity @e[scores={gz-a4-riot=15637..},tag=gz-a4-block] run team modify phase suffix " §a∞§r"

######################
#  Blocks Remaining  #
######################

# execute if entity @e[scores={leftToMine=0..99},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/0_to_99
# execute if entity @e[scores={leftToMine=100..199},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/100_to_199
# execute if entity @e[scores={leftToMine=200..299},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/200_to_299
# execute if entity @e[scores={leftToMine=300..399},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/300_to_399
# execute if entity @e[scores={leftToMine=400..499},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/400_to_499
# execute if entity @e[scores={leftToMine=500..599},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/500_to_599
# execute if entity @e[scores={leftToMine=600..699},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/600_to_699
# execute if entity @e[scores={leftToMine=700..799},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/700_to_799
# execute if entity @e[scores={leftToMine=800..899},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/800_to_899
# execute if entity @e[scores={leftToMine=900..999},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/900_to_999
# execute if entity @e[scores={leftToMine=1000..1099},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1000_to_1099
# execute if entity @e[scores={leftToMine=1100..1199},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1100_to_1199
# execute if entity @e[scores={leftToMine=1200..1299},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1200_to_1299
# execute if entity @e[scores={leftToMine=1300..1399},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1300_to_1399
# execute if entity @e[scores={leftToMine=1400..1499},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1400_to_1499
# execute if entity @e[scores={leftToMine=1500..1599},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1500_to_1599
# execute if entity @e[scores={leftToMine=1600..1699},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1600_to_1699
# execute if entity @e[scores={leftToMine=1700..1799},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1700_to_1799
# execute if entity @e[scores={leftToMine=1800..1899},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1800_to_1899
# execute if entity @e[scores={leftToMine=1900..1999},tag=gz-a4-block] run function gamerz_riot:fns/blocks-remaining/1900_to_1999

################
#  Progress %  #
################

execute if entity @e[scores={progressPercent=0..2},tag=gz-a4-block] run team modify status suffix "§6§f|||||||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=3..4},tag=gz-a4-block] run team modify status suffix "§6|§f||||||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=5..6},tag=gz-a4-block] run team modify status suffix "§6||§f|||||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=7..9},tag=gz-a4-block] run team modify status suffix "§6|||§f||||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=10..11},tag=gz-a4-block] run team modify status suffix "§6||||§f|||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=12..13},tag=gz-a4-block] run team modify status suffix "§6|||||§f||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=14..16},tag=gz-a4-block] run team modify status suffix "§6||||||§f|||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=17..18},tag=gz-a4-block] run team modify status suffix "§6|||||||§f||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=19..20},tag=gz-a4-block] run team modify status suffix "§6||||||||§f|||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=21..23},tag=gz-a4-block] run team modify status suffix "§6|||||||||§f||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=24..25},tag=gz-a4-block] run team modify status suffix "§6||||||||||§f|||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=26..27},tag=gz-a4-block] run team modify status suffix "§6|||||||||||§f||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=28..30},tag=gz-a4-block] run team modify status suffix "§6||||||||||||§f|||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=31..32},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||§f||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=33..34},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||§f|||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=35..37},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||§f||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=38..39},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||§f|||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=40..41},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||§f||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=42..44},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||§f|||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=45..46},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||§f||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=47..48},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||§f|||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=49..51},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||§f||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=52..53},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||§f|||||||||||||||||||||"
execute if entity @e[scores={progressPercent=54..55},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||§f||||||||||||||||||||"
execute if entity @e[scores={progressPercent=56..58},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||§f|||||||||||||||||||"
execute if entity @e[scores={progressPercent=59..60},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||§f||||||||||||||||||"
execute if entity @e[scores={progressPercent=61..62},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||§f|||||||||||||||||"
execute if entity @e[scores={progressPercent=63..65},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||§f||||||||||||||||"
execute if entity @e[scores={progressPercent=66..67},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||§f|||||||||||||||"
execute if entity @e[scores={progressPercent=68..69},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||§f||||||||||||||"
execute if entity @e[scores={progressPercent=70..72},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||§f|||||||||||||"
execute if entity @e[scores={progressPercent=73..74},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||§f||||||||||||"
execute if entity @e[scores={progressPercent=75..76},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||||§f|||||||||||"
execute if entity @e[scores={progressPercent=77..79},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||||§f||||||||||"
execute if entity @e[scores={progressPercent=80..81},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||||||§f|||||||||"
execute if entity @e[scores={progressPercent=82..83},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||||||§f||||||||"
execute if entity @e[scores={progressPercent=84..86},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||||||||§f|||||||"
execute if entity @e[scores={progressPercent=87..88},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||||||||§f||||||"
execute if entity @e[scores={progressPercent=89..90},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||||||||||§f|||||"
execute if entity @e[scores={progressPercent=91..93},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||||||||||§f||||"
execute if entity @e[scores={progressPercent=94..95},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||||||||||||§f|||"
execute if entity @e[scores={progressPercent=96..97},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||||||||||||§f||"
execute if entity @e[scores={progressPercent=98..99},tag=gz-a4-block] run team modify status suffix "§6||||||||||||||||||||||||||||||||||||||||||§f|"
execute if entity @e[scores={progressPercent=100},tag=gz-a4-block] run team modify status suffix "§6|||||||||||||||||||||||||||||||||||||||||||"
execute if entity @e[scores={progressPercent=100,gz-a4-riot=15637..},tag=gz-a4-block] run team modify status suffix "§d|||||||||||||||||||||||||||||||||||||||||||"




execute if entity @e[scores={progressPercent=0},tag=gz-a4-block] run team modify progress suffix " §a0%§r"
execute if entity @e[scores={progressPercent=1},tag=gz-a4-block] run team modify progress suffix " §a1%§r"
execute if entity @e[scores={progressPercent=2},tag=gz-a4-block] run team modify progress suffix " §a2%§r"
execute if entity @e[scores={progressPercent=3},tag=gz-a4-block] run team modify progress suffix " §a3%§r"
execute if entity @e[scores={progressPercent=4},tag=gz-a4-block] run team modify progress suffix " §a4%§r"
execute if entity @e[scores={progressPercent=5},tag=gz-a4-block] run team modify progress suffix " §a5%§r"
execute if entity @e[scores={progressPercent=6},tag=gz-a4-block] run team modify progress suffix " §a6%§r"
execute if entity @e[scores={progressPercent=7},tag=gz-a4-block] run team modify progress suffix " §a7%§r"
execute if entity @e[scores={progressPercent=8},tag=gz-a4-block] run team modify progress suffix " §a8%§r"
execute if entity @e[scores={progressPercent=9},tag=gz-a4-block] run team modify progress suffix " §a9%§r"
execute if entity @e[scores={progressPercent=10},tag=gz-a4-block] run team modify progress suffix " §a10%§r"
execute if entity @e[scores={progressPercent=11},tag=gz-a4-block] run team modify progress suffix " §a11%§r"
execute if entity @e[scores={progressPercent=12},tag=gz-a4-block] run team modify progress suffix " §a12%§r"
execute if entity @e[scores={progressPercent=13},tag=gz-a4-block] run team modify progress suffix " §a13%§r"
execute if entity @e[scores={progressPercent=14},tag=gz-a4-block] run team modify progress suffix " §a14%§r"
execute if entity @e[scores={progressPercent=15},tag=gz-a4-block] run team modify progress suffix " §a15%§r"
execute if entity @e[scores={progressPercent=16},tag=gz-a4-block] run team modify progress suffix " §a16%§r"
execute if entity @e[scores={progressPercent=17},tag=gz-a4-block] run team modify progress suffix " §a17%§r"
execute if entity @e[scores={progressPercent=18},tag=gz-a4-block] run team modify progress suffix " §a18%§r"
execute if entity @e[scores={progressPercent=19},tag=gz-a4-block] run team modify progress suffix " §a19%§r"
execute if entity @e[scores={progressPercent=20},tag=gz-a4-block] run team modify progress suffix " §a20%§r"
execute if entity @e[scores={progressPercent=21},tag=gz-a4-block] run team modify progress suffix " §a21%§r"
execute if entity @e[scores={progressPercent=22},tag=gz-a4-block] run team modify progress suffix " §a22%§r"
execute if entity @e[scores={progressPercent=23},tag=gz-a4-block] run team modify progress suffix " §a23%§r"
execute if entity @e[scores={progressPercent=24},tag=gz-a4-block] run team modify progress suffix " §a24%§r"
execute if entity @e[scores={progressPercent=25},tag=gz-a4-block] run team modify progress suffix " §a25%§r"
execute if entity @e[scores={progressPercent=26},tag=gz-a4-block] run team modify progress suffix " §a26%§r"
execute if entity @e[scores={progressPercent=27},tag=gz-a4-block] run team modify progress suffix " §a27%§r"
execute if entity @e[scores={progressPercent=28},tag=gz-a4-block] run team modify progress suffix " §a28%§r"
execute if entity @e[scores={progressPercent=29},tag=gz-a4-block] run team modify progress suffix " §a29%§r"
execute if entity @e[scores={progressPercent=30},tag=gz-a4-block] run team modify progress suffix " §a30%§r"
execute if entity @e[scores={progressPercent=31},tag=gz-a4-block] run team modify progress suffix " §a31%§r"
execute if entity @e[scores={progressPercent=32},tag=gz-a4-block] run team modify progress suffix " §a32%§r"
execute if entity @e[scores={progressPercent=33},tag=gz-a4-block] run team modify progress suffix " §a33%§r"
execute if entity @e[scores={progressPercent=34},tag=gz-a4-block] run team modify progress suffix " §a34%§r"
execute if entity @e[scores={progressPercent=35},tag=gz-a4-block] run team modify progress suffix " §a35%§r"
execute if entity @e[scores={progressPercent=36},tag=gz-a4-block] run team modify progress suffix " §a36%§r"
execute if entity @e[scores={progressPercent=37},tag=gz-a4-block] run team modify progress suffix " §a37%§r"
execute if entity @e[scores={progressPercent=38},tag=gz-a4-block] run team modify progress suffix " §a38%§r"
execute if entity @e[scores={progressPercent=39},tag=gz-a4-block] run team modify progress suffix " §a39%§r"
execute if entity @e[scores={progressPercent=40},tag=gz-a4-block] run team modify progress suffix " §a40%§r"
execute if entity @e[scores={progressPercent=41},tag=gz-a4-block] run team modify progress suffix " §a41%§r"
execute if entity @e[scores={progressPercent=42},tag=gz-a4-block] run team modify progress suffix " §a42%§r"
execute if entity @e[scores={progressPercent=43},tag=gz-a4-block] run team modify progress suffix " §a43%§r"
execute if entity @e[scores={progressPercent=44},tag=gz-a4-block] run team modify progress suffix " §a44%§r"
execute if entity @e[scores={progressPercent=45},tag=gz-a4-block] run team modify progress suffix " §a45%§r"
execute if entity @e[scores={progressPercent=46},tag=gz-a4-block] run team modify progress suffix " §a46%§r"
execute if entity @e[scores={progressPercent=47},tag=gz-a4-block] run team modify progress suffix " §a47%§r"
execute if entity @e[scores={progressPercent=48},tag=gz-a4-block] run team modify progress suffix " §a48%§r"
execute if entity @e[scores={progressPercent=49},tag=gz-a4-block] run team modify progress suffix " §a49%§r"
execute if entity @e[scores={progressPercent=50},tag=gz-a4-block] run team modify progress suffix " §a50%§r"
execute if entity @e[scores={progressPercent=51},tag=gz-a4-block] run team modify progress suffix " §a51%§r"
execute if entity @e[scores={progressPercent=52},tag=gz-a4-block] run team modify progress suffix " §a52%§r"
execute if entity @e[scores={progressPercent=53},tag=gz-a4-block] run team modify progress suffix " §a53%§r"
execute if entity @e[scores={progressPercent=54},tag=gz-a4-block] run team modify progress suffix " §a54%§r"
execute if entity @e[scores={progressPercent=55},tag=gz-a4-block] run team modify progress suffix " §a55%§r"
execute if entity @e[scores={progressPercent=56},tag=gz-a4-block] run team modify progress suffix " §a56%§r"
execute if entity @e[scores={progressPercent=57},tag=gz-a4-block] run team modify progress suffix " §a57%§r"
execute if entity @e[scores={progressPercent=58},tag=gz-a4-block] run team modify progress suffix " §a58%§r"
execute if entity @e[scores={progressPercent=59},tag=gz-a4-block] run team modify progress suffix " §a59%§r"
execute if entity @e[scores={progressPercent=60},tag=gz-a4-block] run team modify progress suffix " §a60%§r"
execute if entity @e[scores={progressPercent=61},tag=gz-a4-block] run team modify progress suffix " §a61%§r"
execute if entity @e[scores={progressPercent=62},tag=gz-a4-block] run team modify progress suffix " §a62%§r"
execute if entity @e[scores={progressPercent=63},tag=gz-a4-block] run team modify progress suffix " §a63%§r"
execute if entity @e[scores={progressPercent=64},tag=gz-a4-block] run team modify progress suffix " §a64%§r"
execute if entity @e[scores={progressPercent=65},tag=gz-a4-block] run team modify progress suffix " §a65%§r"
execute if entity @e[scores={progressPercent=66},tag=gz-a4-block] run team modify progress suffix " §a66%§r"
execute if entity @e[scores={progressPercent=67},tag=gz-a4-block] run team modify progress suffix " §a67%§r"
execute if entity @e[scores={progressPercent=68},tag=gz-a4-block] run team modify progress suffix " §a68%§r"
execute if entity @e[scores={progressPercent=69},tag=gz-a4-block] run team modify progress suffix " §a69%§r"
execute if entity @e[scores={progressPercent=70},tag=gz-a4-block] run team modify progress suffix " §a70%§r"
execute if entity @e[scores={progressPercent=71},tag=gz-a4-block] run team modify progress suffix " §a71%§r"
execute if entity @e[scores={progressPercent=72},tag=gz-a4-block] run team modify progress suffix " §a72%§r"
execute if entity @e[scores={progressPercent=73},tag=gz-a4-block] run team modify progress suffix " §a73%§r"
execute if entity @e[scores={progressPercent=74},tag=gz-a4-block] run team modify progress suffix " §a74%§r"
execute if entity @e[scores={progressPercent=75},tag=gz-a4-block] run team modify progress suffix " §a75%§r"
execute if entity @e[scores={progressPercent=76},tag=gz-a4-block] run team modify progress suffix " §a76%§r"
execute if entity @e[scores={progressPercent=77},tag=gz-a4-block] run team modify progress suffix " §a77%§r"
execute if entity @e[scores={progressPercent=78},tag=gz-a4-block] run team modify progress suffix " §a78%§r"
execute if entity @e[scores={progressPercent=79},tag=gz-a4-block] run team modify progress suffix " §a79%§r"
execute if entity @e[scores={progressPercent=80},tag=gz-a4-block] run team modify progress suffix " §a80%§r"
execute if entity @e[scores={progressPercent=81},tag=gz-a4-block] run team modify progress suffix " §a81%§r"
execute if entity @e[scores={progressPercent=82},tag=gz-a4-block] run team modify progress suffix " §a82%§r"
execute if entity @e[scores={progressPercent=83},tag=gz-a4-block] run team modify progress suffix " §a83%§r"
execute if entity @e[scores={progressPercent=84},tag=gz-a4-block] run team modify progress suffix " §a84%§r"
execute if entity @e[scores={progressPercent=85},tag=gz-a4-block] run team modify progress suffix " §a85%§r"
execute if entity @e[scores={progressPercent=86},tag=gz-a4-block] run team modify progress suffix " §a86%§r"
execute if entity @e[scores={progressPercent=87},tag=gz-a4-block] run team modify progress suffix " §a87%§r"
execute if entity @e[scores={progressPercent=88},tag=gz-a4-block] run team modify progress suffix " §a88%§r"
execute if entity @e[scores={progressPercent=89},tag=gz-a4-block] run team modify progress suffix " §a89%§r"
execute if entity @e[scores={progressPercent=90},tag=gz-a4-block] run team modify progress suffix " §a90%§r"
execute if entity @e[scores={progressPercent=91},tag=gz-a4-block] run team modify progress suffix " §a91%§r"
execute if entity @e[scores={progressPercent=92},tag=gz-a4-block] run team modify progress suffix " §a92%§r"
execute if entity @e[scores={progressPercent=93},tag=gz-a4-block] run team modify progress suffix " §a93%§r"
execute if entity @e[scores={progressPercent=94},tag=gz-a4-block] run team modify progress suffix " §a94%§r"
execute if entity @e[scores={progressPercent=95},tag=gz-a4-block] run team modify progress suffix " §a95%§r"
execute if entity @e[scores={progressPercent=96},tag=gz-a4-block] run team modify progress suffix " §a96%§r"
execute if entity @e[scores={progressPercent=97},tag=gz-a4-block] run team modify progress suffix " §a97%§r"
execute if entity @e[scores={progressPercent=98},tag=gz-a4-block] run team modify progress suffix " §a98%§r"
execute if entity @e[scores={progressPercent=99},tag=gz-a4-block] run team modify progress suffix " §a99%§r"
execute if entity @e[scores={progressPercent=100},tag=gz-a4-block] run team modify progress suffix " §a100%§r"
