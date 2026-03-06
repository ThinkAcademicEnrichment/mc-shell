scoreboard objectives remove gz-a4-scoreboard

scoreboard objectives add gz-a4-scoreboard dummy {"text":"§b§l§e§lONEBLOCK§r   "}
scoreboard objectives setdisplay sidebar gz-a4-scoreboard

# scoreboard players set -------------- gz-a4-scoreboard 9

scoreboard players set §e1.2.4§r gz-a4-scoreboard 7
team add version
team join version §e1.2.4§r
team modify version prefix "§fVersion:§r "

scoreboard players set §b@§6Gamerz_Riot§r gz-a4-scoreboard 6
team add author
team join author §b@§6Gamerz_Riot§r
team modify author prefix "§fBy§b:§r "

scoreboard players set §r gz-a4-scoreboard 5

scoreboard players set §l§d§r§7Players§b: gz-a4-scoreboard 4
team add player
team join player §l§d§r§7Players§b:
team modify player prefix " "

scoreboard players set §l§d§r§7Phase§r: gz-a4-scoreboard 3
team add phase
team join phase §l§d§r§7Phase§r:
team modify phase prefix " "

# scoreboard players set §l§d♢ gz-a4-scoreboard 3
# team add remaining
# team join remaining §l§d♢

scoreboard players set §l§dProgress§r: gz-a4-scoreboard 2
team add progress
team join progress §l§dProgress§r:
team modify progress prefix " "

scoreboard players set §k gz-a4-scoreboard 1

scoreboard players set §l§d gz-a4-scoreboard 0
team add status
team join status §l§d


# scoreboard players set §s§r-------------- gz-a4-scoreboard 0