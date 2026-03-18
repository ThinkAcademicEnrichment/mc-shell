import time
import threading
import sys
from pathlib import Path

# Ensure mcshell is in path
BASE_DIR = Path(__file__).parent.parent.resolve()
if str(BASE_DIR) not in sys.path:
    sys.path.append(str(BASE_DIR))

from mcshell.mcplayer import MCPlayer
from mcshell.mcactions import MCActions
from mcshell.Vec3 import Vec3

def setup_player(player_name="TestPlayer"):
    """Initialize a direct connection to the server for testing."""
    print(f"Connecting to McJuice as {player_name}...")
    try:
        player = MCPlayer(player_name, host="127.0.0.1", port=4721)
        actions = MCActions(player)
        return player, actions
    except ConnectionRefusedError:
        print("ERROR: Could not connect to Minecraft server on 127.0.0.1:4721")
        print("Make sure the server is running and McJuice is loaded!")
        sys.exit(1)

def stress_raw_throughput(actions: MCActions, num_blocks=5000):
    """
    Stress 1: Single-threaded Async Throughput.
    Measures the absolute maximum speed the pipeline can shove data over the socket.
    """
    print(f"\n--- TEST 1: Raw Throughput ({num_blocks} blocks) ---")
    start_pos = actions.get_pos()
    if not start_pos:
        print("Could not get player position. Skipping.")
        return

    start_time = time.perf_counter()

    # Build a massive line of glass blocks asynchronously
    for i in range(num_blocks):
        # We access the actual generated action methods inherited by MCActions
        actions.set_block(start_pos + Vec3(0, 10, i), "GLASS")

    end_time = time.perf_counter()
    duration = end_time - start_time
    ops_per_sec = num_blocks / duration

    print(f"Result: {num_blocks} blocks placed in {duration:.2f} seconds.")
    print(f"Speed:  {ops_per_sec:.0f} blocks/second")

def stress_async_concurrency(actions: MCActions, num_threads=5, blocks_per_thread=1000):
    """
    Stress 2: Multi-threaded Async Stress (The Interleaving Test)
    Spawns multiple threads spamming the socket simultaneously.
    If the server console shows "Unknown command" errors, socket interleaving has occurred.
    """
    print(f"\n--- TEST 2: Async Concurrency ({num_threads} threads, {blocks_per_thread} ops each) ---")
    start_pos = actions.get_pos()
    if not start_pos:
        print("Could not get player position. Skipping.")
        return

    def worker(thread_id, base_pos):
        for i in range(blocks_per_thread):
            actions.set_block(base_pos + Vec3(thread_id, 15, i), "STONE")

    threads = []
    start_time = time.perf_counter()

    for t_id in range(num_threads):
        t = threading.Thread(target=worker, args=(t_id, start_pos))
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    duration = time.perf_counter() - start_time
    total_blocks = num_threads * blocks_per_thread
    ops_per_sec = total_blocks / duration

    print(f"Result: {total_blocks} total operations across {num_threads} threads in {duration:.2f} seconds.")
    print(f"Speed:  {ops_per_sec:.0f} blocks/second")
    print("Check your Minecraft Server Console. If you see 'Unknown command' or parsing errors, the TCP socket interleaved!")


def stress_sync_concurrency(player: MCPlayer, num_threads=4, reads_per_thread=200):
    """
    Stress 3: Multi-threaded Sync Stress (The Response Stealing Test)
    Multiple threads reading different data types simultaneously.
    If Thread A accidentally reads Thread B's data, python will throw a ValueError.
    """
    print(f"\n--- TEST 3: Sync Concurrency ({num_threads} threads, {reads_per_thread} reads each) ---")
    print("If this test crashes with a ValueError or Exception, it means threads are stealing each other's responses.")

    errors = []

    def health_reader():
        for _ in range(reads_per_thread):
            try:
                # player.getHealth returns a float natively from our generated API
                res = player.mj.player.getHealth()
                if not isinstance(res, float):
                    errors.append(f"Health Reader expected float, got {type(res)}: {res}")
            except Exception as e:
                errors.append(f"Health Reader crashed: {e}")

    def pos_reader():
        for _ in range(reads_per_thread):
            try:
                # player.getPos returns a Vec3 object natively
                res = player.mj.player.getPos()
                if not isinstance(res, Vec3):
                    errors.append(f"Pos Reader expected Vec3, got {type(res)}: {res}")
            except Exception as e:
                errors.append(f"Pos Reader crashed: {e}")

    threads = []
    start_time = time.perf_counter()

    # Spawn alternating thread types
    for i in range(num_threads):
        target = health_reader if i % 2 == 0 else pos_reader
        t = threading.Thread(target=target)
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    duration = time.perf_counter() - start_time
    total_reads = num_threads * reads_per_thread
    ops_per_sec = total_reads / duration

    print(f"Result: {total_reads} synchronous reads in {duration:.2f} seconds.")
    print(f"Speed:  {ops_per_sec:.0f} reads/second")

    if errors:
        print(f"\n[!] TEST FAILED WITH {len(errors)} COLLISIONS:")
        for err in errors[:5]: # Print first 5 errors
            print(f"  - {err}")
        if len(errors) > 5:
            print("  - ... and more.")
    else:
        print("\n[+] SUCCESS: No collisions detected during sync reads! Your OS TCP stack handled it well.")

if __name__ == "__main__":
    # Replace "Steve" with the name of a player currently logged into your server
    PLAYER_NAME = input("Enter the name of a player currently on the server: ").strip()
    if not PLAYER_NAME:
        print("Player name is required.")
        sys.exit(1)

    mc_player, mc_actions = setup_player(PLAYER_NAME)

    # Run the gauntlet
    stress_raw_throughput(mc_actions)
    time.sleep(1) # Let server catch up

    stress_async_concurrency(mc_actions)
    time.sleep(1)

    stress_sync_concurrency(mc_player)

    print("\nTorture tests complete.")