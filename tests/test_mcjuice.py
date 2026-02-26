import socket

def test_mcjuice(command_string):
    host = 'localhost'
    port = 4721 # Your new McJuice port

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.connect((host, port))
        # Send command with a newline (as expected by BufferedReader.readLine())
        s.sendall(f"{command_string}\n".encode())
        # Receive the response
        data = s.recv(1024)
        print(f"Sent: {command_string} | Received: {data.decode().strip()}")

def main():
    # 1. Test the 'ping' command from the skeleton
    test_mcjuice("ping")

    # 2. Test a generated command (requires an entity ID)
    # Tip: Look at your Minecraft server console when you join to see your ID,
    # or use FruitJuice to get it. Let's assume it's 123.
    entity_id = 123
    test_mcjuice(f"player.getHealth,{entity_id}")

    # 3. Test a command with multiple arguments
    test_mcjuice(f"player.setHealth,{entity_id},10.0")