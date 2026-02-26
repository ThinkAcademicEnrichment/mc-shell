from mcshell.constants import Vec3

class Event:
    """Base class for all McJuice events."""
    def __init__(self, event_type, data_list):
        self.type = event_type
        self.raw_data = data_list

class BlockEvent(Event):
    def __init__(self, subtype, data):
        super().__init__("block", data)
        self.subtype = subtype # HIT, PLACE, BREAK
        self.pos = Vec3(int(data[0]), int(data[1]), int(data[2]))

        if subtype == "HIT":
            self.face = int(data[3])
            self.entityId = int(data[4])
        elif subtype == "PLACE":
            self.blockType = data[3]
            self.entityId = int(data[4])
        elif subtype == "BREAK":
            self.entityId = int(data[3])

class ChatEvent(Event):
    def __init__(self, data):
        super().__init__("chat", data)
        self.entityId = int(data[0])
        self.message = data[1]

class EventFactory:
    """Converts raw poll strings into Rich Python Objects."""

    @staticmethod
    def create(event_name, raw_line):
        if not raw_line: return None
        data = raw_line.split(",")

        if event_name == "blockHit":
            return BlockEvent("HIT", data)
        elif event_name == "blockPlace":
            return BlockEvent("PLACE", data)
        elif event_name == "blockBreak":
            return BlockEvent("BREAK", data)
        elif event_name == "chat":
            return ChatEvent(data)

        return Event(event_name, data)