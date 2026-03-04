from mcshell.constants import Vec3

class Event:
    """Base class for all McJuice events."""
    def __init__(self, event_type, data_list):
        self.type = event_type
        self.raw_data = data_list

class BlockEvent(Event):
    """Encapsulates interaction, placement, or breaking of blocks."""
    def __init__(self, subtype, data):
        super().__init__("block", data)
        self.subtype = subtype  # RIGHT_HIT, LEFT_HIT, PLACE, BREAK
        self.pos = Vec3(int(data[0]), int(data[1]), int(data[2]))

        if subtype in ("RIGHT_HIT", "LEFT_HIT"):
            self.face = int(data[3])
            self.entityId = int(data[4])
            self.name = data[5]
        elif subtype == "PLACE":
            self.blockType = data[3]
            self.entityId = int(data[4])
            self.name = data[5]
        elif subtype == "BREAK":
            self.entityId = int(data[3])
            self.name = data[4]

    def __repr__(self):
        return f"BlockEvent({self.subtype}, {self.name}({self.entityId}), {self.pos})"

class ProjectileEvent(Event):
    """Encapsulates projectile hits on blocks, entities, or launch events."""
    def __init__(self, subtype, data):
        super().__init__("projectile", data)
        self.subtype = subtype # HIT_BLOCK, HIT_ENTITY, LAUNCH

        if subtype == "HIT_BLOCK":
            # Data from YAML: x,y,z,type
            self.pos = Vec3(int(data[0]), int(data[1]), int(data[2]))
            self.projectileType = data[3]
        elif subtype == "HIT_ENTITY":
            # Data from YAML: entityId,name,type,x,y,z
            self.targetId = int(data[0])
            self.targetName = data[1]
            self.projectileType = data[2]
            self.pos = Vec3(float(data[3]), float(data[4]), float(data[5]))
        elif subtype == "LAUNCH":
            # Data from YAML: shooterId,name,type
            self.shooterId = int(data[0])
            self.shooterName = data[1]
            self.projectileType = data[2]

    def __repr__(self):
        if self.subtype == "HIT_BLOCK":
            return f"ProjectileEvent(HIT_BLOCK, {self.projectileType}, {self.pos})"
        elif self.subtype == "HIT_ENTITY":
            return f"ProjectileEvent(HIT_ENTITY, {self.projectileType}, target:{self.targetName}({self.targetId}), {self.pos})"
        elif self.subtype == "LAUNCH":
            return f"ProjectileEvent(LAUNCH, {self.projectileType}, shooter:{self.shooterName}({self.shooterId}))"
        return f"ProjectileEvent({self.subtype}, {self.projectileType})"

class ChatEvent(Event):
    """Encapsulates chat posts or processed commands."""
    def __init__(self, data):
        super().__init__("chat", data)
        # Data from YAML: entityId,name,message
        self.entityId = int(data[0])
        self.name = data[1]
        self.message = data[2]

    def __repr__(self):
        return f"ChatEvent({self.name}({self.entityId}): {self.message})"

class LifeCycleEvent(Event):
    """Encapsulates player death and respawn events."""
    def __init__(self, subtype, data):
        super().__init__("lifecycle", data)
        self.subtype = subtype # DEATH, RESPAWN
        # Data from YAML: entityId,name,x,y,z
        self.entityId = int(data[0])
        self.name = data[1]
        self.pos = Vec3(float(data[2]), float(data[3]), float(data[4]))

    def __repr__(self):
        return f"LifeCycleEvent({self.subtype}, {self.name}({self.entityId}), {self.pos})"

class EventFactory:
    """Converts raw poll strings into Rich Python Objects based on event name."""

    @staticmethod
    def create(event_name, raw_line):
        if not raw_line:
            return None
        data = raw_line.split(",")

        # Mapping names from mcjuice_api.yaml to Python Classes
        if event_name == "rightBlockHit":
            return BlockEvent("RIGHT_HIT", data)
        elif event_name == "leftBlockHit":
            return BlockEvent("LEFT_HIT", data)
        elif event_name == "blockPlace":
            return BlockEvent("PLACE", data)
        elif event_name == "blockBreak":
            return BlockEvent("BREAK", data)
        elif event_name == "chat":
            return ChatEvent(data)
        elif event_name == "projectileHitBlock":
            return ProjectileEvent("HIT_BLOCK", data)
        elif event_name == "projectileHitEntity":
            return ProjectileEvent("HIT_ENTITY", data)
        elif event_name == "projectileLaunch":
            return ProjectileEvent("LAUNCH", data)
        elif event_name == "playerDeath":
            return LifeCycleEvent("DEATH", data)
        elif event_name == "playerRespawn":
            return LifeCycleEvent("RESPAWN", data)

        return Event(event_name, data)