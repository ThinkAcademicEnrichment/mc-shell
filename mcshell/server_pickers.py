class ServerPickers:
    """
    Static lists of options for Server Action blocks.
    These map the display label (User friendly) to the actual command argument.
    """

    Time = [
        ("Day (1000)", "day"),
        ("Noon (6000)", "noon"),
        ("Sunset (12000)", "sunset"),
        ("Night (13000)", "night"),
        ("Midnight (18000)", "midnight"),
        ("Sunrise (23000)", "sunrise")
    ]

    Weather = [
        ("Clear", "clear"),
        ("Rain", "rain"),
        ("Thunder", "thunder")
    ]

    Difficulty = [
        ("Peaceful", "peaceful"),
        ("Easy", "easy"),
        ("Normal", "normal"),
        ("Hard", "hard")
    ]

    Gamemode = [
        ("Survival", "survival"),
        ("Creative", "creative"),
        ("Adventure", "adventure"),
        ("Spectator", "spectator")
    ]

    # Common GameRules (Boolean only for now)
    GameRules = [
        ("Do Daylight Cycle", "doDaylightCycle"),
        ("Do Weather Cycle", "doWeatherCycle"),
        ("Do Mob Spawning", "doMobSpawning"),
        ("Do Mob Loot", "doMobLoot"),
        ("Do Tile Drops", "doTileDrops"),
        ("Keep Inventory", "keepInventory"),
        ("Mob Griefing", "mobGriefing"),
        ("Natural Regeneration", "naturalRegeneration"),
        ("Do Fire Tick", "doFireTick"),
        ("Command Block Output", "commandBlockOutput"),
        ("Show Death Messages", "showDeathMessages"),
        ("Log Admin Commands", "logAdminCommands"),
        ("Do Insomnia (Phantoms)", "doInsomnia"),
        ("Drowning Damage", "drowningDamage"),
        ("Fall Damage", "fallDamage"),
        ("Fire Damage", "fireDamage")
    ]