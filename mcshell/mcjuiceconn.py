import socket
import select
import threading

class MCJuiceConnection:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        # Keep TCP_NODELAY for maximum throughput
        self.socket.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
        self.socket.connect((self.host, self.port))

        # --- ADDED: A lock strictly for synchronous reads ---
        self.sync_lock = threading.Lock()

    def send(self, command, *args):
        """
        Fire and forget.
        NO LOCKS. Maximum speed. Python's socket.sendall is atomic for
        small strings, so they won't interleave at the OS level.
        """
        payload = f"{command},{','.join(map(str, args))}\n"
        self.socket.sendall(payload.encode('utf-8'))

    def receive(self):
        """Reads a single line from the socket."""
        buffer = ""
        while True:
            data = self.socket.recv(1024).decode('utf-8')
            if not data:
                return None
            buffer += data
            if '\n' in buffer:
                line, buffer = buffer.split('\n', 1)
                return line.strip()

    def drain(self):
        """Non-blocking drain to clear old garbage data."""
        while True:
            readable, _, _ = select.select([self.socket], [], [], 0.0)
            if not readable:
                break
            try:
                self.socket.recv(1500, socket.MSG_DONTWAIT)
            except BlockingIOError:
                break

    def sendReceive(self, command, *args):
        """
        Synchronous data fetch.
        LOCKED. This guarantees that if Thread A asks for Position,
        Thread B cannot ask for Health until Thread A gets its response.
        """
        with self.sync_lock:
            self.drain()
            self.send(command, *args)
            return self.receive()

    def close(self):
        self.socket.close()