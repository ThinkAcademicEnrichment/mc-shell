import threading
import queue
import socket
from mcshell.mcjuiceconn import MCJuiceConnection
from mcshell.Vec3 import Vec3

class MCJuiceClient:
    def __init__(self, conn, event_conn, entity_id=None):
        self.conn = conn
        self.event_conn = event_conn
        self.entity_id = entity_id
        self.event_queues = {} # event_name -> list of queues

        # --- PUSH ARCHITECTURE: Dedicated Event Router ---
        self.event_conn.socket.settimeout(None)
        self.event_conn.send('events.subscribe')
        self.reader_thread = threading.Thread(target=self._event_reader_loop, daemon=True)
        self.reader_thread.start()
        self.player = PlayerNamespace(self.conn, self.entity_id)
        self.world = WorldNamespace(self.conn, self.entity_id)
        self.chat = ChatNamespace(self.conn, self.entity_id)
        self.admin = AdminNamespace(self.conn, self.entity_id)
        self.events = EventsNamespace(self)

    def _event_reader_loop(self):
        from mcshell.event import EventFactory
        while True:
            try:
                line = self.event_conn.receive()
                if not line: break
                if line == 'OK': continue
                
                parts = line.split(',', 1)
                if len(parts) < 2: continue
                event_name, raw_data = parts[0], parts[1]
                
                event_obj = EventFactory.create(event_name, raw_data)
                if not event_obj: continue
                
                if event_name in self.event_queues:
                    for q in self.event_queues[event_name]:
                        q.put(event_obj)
            except (socket.timeout, TimeoutError):
                continue
            except Exception as e:
                break

    @staticmethod
    def create(address='localhost', port=4721, playerName=''):
        conn = MCJuiceConnection(address, port)
        event_conn = MCJuiceConnection(address, port)
        eid = None
        if playerName:
            eid = int(conn.sendReceive('world.getPlayerId', playerName))
        return MCJuiceClient(conn, event_conn, eid)

class PlayerNamespace:
    def __init__(self, conn, entity_id): self.conn = conn; self.entity_id = entity_id
    def getPos(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getPos', eid)
        return Vec3(*list(map(float, res.split(','))))
    def setPos(self, x, y, z, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setPos', eid, x, y, z)
        return 'OK'
    def getTilePos(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getTilePos', eid)
        return Vec3(*list(map(int, res.split(','))))
    def setTilePos(self, x, y, z, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setTilePos', eid, x, y, z)
        return 'OK'
    def getDirection(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getDirection', eid)
        return Vec3(*list(map(float, res.split(','))))
    def setDirection(self, x, y, z, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setDirection', eid, x, y, z)
        return 'OK'
    def getRotation(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getRotation', eid)
        return float(res)
    def setRotation(self, yaw, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setRotation', eid, yaw)
        return 'OK'
    def getPitch(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getPitch', eid)
        return float(res)
    def setPitch(self, pitch, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setPitch', eid, pitch)
        return 'OK'
    def getHealth(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getHealth', eid)
        return float(res)
    def setHealth(self, health, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setHealth', eid, health)
        return 'OK'
    def getFoodLevel(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getFoodLevel', eid)
        return int(res)
    def setFoodLevel(self, level, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.setFoodLevel', eid, level)
        return 'OK'
    def getDeaths(self, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        res = self.conn.sendReceive('player.getDeaths', eid)
        return int(res)
    def sendTitle(self, title, subtitle, stay, entity_id=None):
        eid = entity_id if entity_id is not None else self.entity_id
        if eid is None: raise ValueError('No entity_id')
        self.conn.send('player.sendTitle', eid, title, subtitle, stay)
        return 'OK'

class WorldNamespace:
    def __init__(self, conn, entity_id): self.conn = conn; self.entity_id = entity_id
    def getBlock(self, x, y, z):
        res = self.conn.sendReceive('world.getBlock', x, y, z)
        return res
    def setBlock(self, x, y, z, block):
        self.conn.send('world.setBlock', x, y, z, block)
        return 'OK'
    def getBlocks(self, x1, y1, z1, x2, y2, z2):
        res = self.conn.sendReceive('world.getBlocks', x1, y1, z1, x2, y2, z2)
        return res.split(',')
    def setBlocks(self, x1, y1, z1, x2, y2, z2, block):
        self.conn.send('world.setBlocks', x1, y1, z1, x2, y2, z2, block)
        return 'OK'
    def getHeight(self, x, z):
        res = self.conn.sendReceive('world.getHeight', x, z)
        return int(res)
    def getPlayerId(self, name):
        res = self.conn.sendReceive('world.getPlayerId', name)
        return int(res)
    def spawnEntity(self, x, y, z, type):
        res = self.conn.sendReceive('world.spawnEntity', x, y, z, type)
        return int(res)
    def removeEntity(self, id):
        self.conn.send('world.removeEntity', id)
        return 'OK'
    def getEntitiesInRadius(self, x, y, z, r):
        res = self.conn.sendReceive('world.getEntitiesInRadius', x, y, z, r)
        return res.split(',')
    def createExplosion(self, x, y, z, power):
        self.conn.send('world.createExplosion', x, y, z, power)
        return 'OK'
    def setSign(self, x, y, z, sign_type, direction, l1, l2, l3, l4):
        self.conn.send('world.setSign', x, y, z, sign_type, direction, l1, l2, l3, l4)
        return 'OK'
    def dropItem(self, x, y, z, item, amount):
        self.conn.send('world.dropItem', x, y, z, item, amount)
        return 'OK'
    def dropRandomLoot(self, x, y, z):
        self.conn.send('world.dropRandomLoot', x, y, z)
        return 'OK'
    def setContainerItem(self, x, y, z, slot, item, amount):
        self.conn.send('world.setContainerItem', x, y, z, slot, item, amount)
        return 'OK'
    def getEntityName(self, id):
        res = self.conn.sendReceive('world.getEntityName', id)
        return res

class ChatNamespace:
    def __init__(self, conn, entity_id): self.conn = conn; self.entity_id = entity_id
    def post(self, message):
        self.conn.send('chat.post', message)
        return 'OK'

class AdminNamespace:
    def __init__(self, conn, entity_id): self.conn = conn; self.entity_id = entity_id
    def isMaterialItem(self, material):
        res = self.conn.sendReceive('admin.isMaterialItem', material)
        return res
    def isMaterialBlock(self, material):
        res = self.conn.sendReceive('admin.isMaterialBlock', material)
        return res
    def isMaterialEdible(self, material):
        res = self.conn.sendReceive('admin.isMaterialEdible', material)
        return res
    def isMaterialFuel(self, material):
        res = self.conn.sendReceive('admin.isMaterialFuel', material)
        return res
    def allMaterialProperties(self, material):
        res = self.conn.sendReceive('admin.allMaterialProperties', material)
        return res

class EventsNamespace:
    def __init__(self, client):
        self.client = client

    def subscribe_local(self, event_name: str, target_queue: 'queue.Queue'):
        if event_name not in self.client.event_queues:
            self.client.event_queues[event_name] = []
        self.client.event_queues[event_name].append(target_queue)

    def unsubscribe_local(self, event_name: str, target_queue: 'queue.Queue'):
        if event_name in self.client.event_queues:
            try:
                self.client.event_queues[event_name].remove(target_queue)
            except ValueError:
                pass