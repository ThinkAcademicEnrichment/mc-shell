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
        self.subtype = subtype  # HIT, PLACE, BREAK
        self.pos = Vec3(int(data[0]), int(data[1]), int(data[2]))

        if subtype == "HIT":
            self.face = int(data[3])
            self.entityId = int(data[4])
        elif subtype == "PLACE":
            self.blockType = data[3]
            self.entityId = int(data[4])
        elif subtype == "BREAK":
            self.entityId = int(data[3])

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
            # Data from YAML: entityId,type,x,y,z
            self.targetId = int(data[0])
            self.projectileType = data[1]
            self.pos = Vec3(float(data[2]), float(data[3]), float(data[4]))
        elif subtype == "LAUNCH":
            # Data from YAML: shooterId,type
            self.shooterId = int(data[0])
            self.projectileType = data[1]

    def __repr__(self):
        if self.subtype == "HIT_BLOCK":
            return f"ProjectileEvent(HIT_BLOCK, {self.projectileType}, {self.pos})"
        elif self.subtype == "HIT_ENTITY":
            return f"ProjectileEvent(HIT_ENTITY, {self.projectileType}, target:{self.targetId}, {self.pos})"
        return f"ProjectileEvent({self.subtype}, {self.projectileType})"

class ChatEvent(Event):
    """Encapsulates chat posts or processed commands."""
    def __init__(self, data):
        super().__init__("chat", data)
        self.entityId = int(data[0])
        self.message = data[1]

class EventFactory:
    """Converts raw poll strings into Rich Python Objects based on event name."""

    @staticmethod
    def create(event_name, raw_line):
        if not raw_line:
            return None
        data = raw_line.split(",")

        # Mapping names from mcjuice_api.yaml to Python Classes
        if event_name == "blockHit":
            return BlockEvent("HIT", data)
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

        return Event(event_name, data)