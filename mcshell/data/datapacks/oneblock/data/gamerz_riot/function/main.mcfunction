forceload remove -1 -1 1 1
forceload add -1 -1 1 1

#gamerule sendCommandFeedback false
#gamerule commandBlockOutput true
#gamerule logAdminCommands false
gamerule send_command_feedback false
gamerule command_block_output false
gamerule log_admin_commands false

scoreboard objectives add gz-a4-riot dummy

scoreboard objectives add gz-a4-cool dummy

scoreboard objectives add gz-a4-randblock dummy

scoreboard objectives add gz-a4-randafter dummy

scoreboard objectives add gz-a4-mobtype dummy
scoreboard objectives add gz-a4-mobamount dummy
scoreboard objectives add gz-anger_time dummy

scoreboard objectives add gz-a4-partytime dummy

scoreboard objectives add gz-a4-partyrand dummy

scoreboard objectives add gz-a4-pm-life dummy

team add gz-a4-party
team modify gz-a4-party collisionRule never
team modify gz-a4-party friendlyFire false
team modify gz-a4-party seeFriendlyInvisibles true

scoreboard objectives add gz-a4-temp dummy

scoreboard objectives add gz-a4-allmined dummy
#scoreboard objectives add gz-a4-phasemined dummy
scoreboard objectives add gz-a4-playermined dummy {"text": "Blocks"}
scoreboard objectives setdisplay list gz-a4-playermined
scoreboard objectives setdisplay below_name gz-a4-playermined

scoreboard objectives add gz-a4-death deathCount
scoreboard objectives add gz-a4-countdeath deathCount

scoreboard objectives add gz-a4-upgrade dummy

scoreboard objectives add gz-a4-second dummy

scoreboard objectives add gz-a4-portalsfx dummy

scoreboard objectives add gz-a4-vilname dummy

scoreboard objectives add gz-a4-warning dummy

scoreboard objectives add gz-a4 trigger

scoreboard objectives remove gz-a4xOnline
scoreboard objectives add gz-a4xOnline dummy

scoreboard objectives add gz-a4xLoaded dummy

scoreboard objectives remove gz-a4xSbstart
scoreboard objectives add gz-a4xSbstart dummy


scoreboard objectives add gz-a4-variant dummy

# Scoreboard

scoreboard objectives add gz-a4-toggleScr dummy

scoreboard objectives add gz-a4-playercount dummy

scoreboard objectives add gz-a4-health health
scoreboard objectives add gz-a4-kills playerKillCount
scoreboard objectives add gz-a4-deaths deathCount

scoreboard objectives add gz-a4-toggleAct dummy


scoreboard objectives remove gz-a4xSbOff
scoreboard objectives add gz-a4xSbOff dummy

scoreboard objectives remove gz-a4xSbOn
scoreboard objectives add gz-a4xSbOn dummy

# Remaining Blocks
scoreboard objectives add leftToMine dummy
scoreboard objectives add phaseblocks dummy

# % Calculation
scoreboard objectives add progressPercent dummy
scoreboard objectives add const dummy
scoreboard players set const.hundred const -100

scoreboard objectives add toBeMined dummy

# Block Reset Fix
scoreboard objectives add temp_riot dummy
scoreboard objectives add highest_riot dummy