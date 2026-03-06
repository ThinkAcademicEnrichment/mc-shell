import socket
import select

class RequestError(Exception):
    """Raised when the Java plugin returns a 'Fail' response."""
    pass

class MCJuiceConnection:
    """Robust, fast TCP connection to the McJuice Java Plugin."""

    def __init__(self, address: str, port: int):
        self.socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        # TCP_NODELAY disables Nagle's algorithm. For an RPC API like this,
        # it massively speeds up transmission of small command strings.
        self.socket.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)

        self.socket.connect((address, port))
        self.socket.settimeout(10.0)  # Prevent infinite hangs

        # Using a file wrapper allows for safe, buffered line-reading
        # (much safer than raw s.recv(1024))
        self._file = self.socket.makefile("r", encoding="utf-8")

    def drain(self):
        """Drains the socket using non-blocking IO to bypass OS select limits."""
        self.socket.setblocking(False)
        try:
            while True:
                data = self.socket.recv(4096)
                if not data:
                    break
        except (BlockingIOError, InterruptedError):
            # BlockingIOError means the socket is empty. We are successfully drained!
            pass
        except OSError:
            # Socket might be closed, which is fine
            pass
        finally:
            self.socket.setblocking(True)

    def send(self, command: str, *args):
        """Sends a command formatted as a CSV string."""
        self.drain()

        # Convert all arguments to strings and join them with commas
        payload_parts = [command] + [str(a) for a in args]
        payload = ",".join(payload_parts) + "\n"

        # Send as UTF-8 bytes
        self.socket.sendall(payload.encode('utf-8'))

    def receive(self) -> str:
        """Receives a single line response and checks for errors."""
        line = self._file.readline().rstrip('\n')

        # Intercept Java errors and turn them into loud Python exceptions
        if line.startswith("Fail,"):
            raise RequestError(f"McJuice Plugin Error: {line[5:]}")

        return line

    def sendReceive(self, command: str, *args) -> str:
        """Sends a command and blocks for the response."""
        self.send(command, *args)
        return self.receive()