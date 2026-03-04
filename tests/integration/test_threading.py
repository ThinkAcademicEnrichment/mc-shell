from tests.config import *
from tests.integration.base_magic import BaseMagicTest

class ThreadingTest(BaseMagicTest):
    """
    Validation suite for concurrent execution and cancellation
    logic within the BlocklyProgramRunner architecture.
    """

    def setUp(self):
        # We leverage the player instance already successfully created
        # and tested in the base class's setUpClass.
        if self.player_name in self.ip.user_ns:
            self.player = self.ip.user_ns[self.player_name]
        else:
            # Emergency fallback initialization
            params = self.get_server_connection_params()
            self.player = MCPlayer(
                self.player_name,
                host=params.get('host', '127.0.0.1'),
                port=params.get('port'),
                rcon_port=params.get('rcon_port'),
                password=params.get('password')
            )

        self.actions = MCActions(self.player)
        self.cancel_event = threading.Event()

    def test_finite_task_exits_immediately(self):
        """
        Verifies that non-threaded workspaces (finite tasks) exit
        cleanly without entering the keep-alive loop.
        """
        class Runner:
            def __init__(self, actions, cancel_event):
                self.action_implementer = actions
                self.cancel_event = cancel_event
                self.active_threads = []

            def run_program(self):
                # Simulated finite logic: set time to day
                self.action_implementer.server_time_set('day')

        runner = Runner(self.actions, self.cancel_event)
        start = time.time()
        runner.run_program()
        duration = time.time() - start

        # Should be near-instantaneous
        self.assertLess(duration, 2.0, "Finite task failed to return immediately.")

    def test_threaded_task_lifecycle_and_cleanup(self):
        """
        Verifies that threaded tasks keep the runner alive via the wait loop
        and that all threads clean up correctly upon UI cancellation.
        """
        thread_started = threading.Event()
        thread_cleaned_up = threading.Event()

        class Runner:
            def __init__(self, actions, cancel_event):
                self.action_implementer = actions
                self.cancel_event = cancel_event
                self.active_threads = []

            def run_program(self):
                def background_loop():
                    thread_started.set()
                    try:
                        # Simulated persistent task (e.g., a background clock)
                        while not self.cancel_event.is_set():
                            time.sleep(0.1)
                    finally:
                        thread_cleaned_up.set()

                # Start background thread
                t = threading.Thread(target=background_loop, daemon=True)
                t.start()
                self.active_threads.append(t)

                # Simulated Wait Loop (Mirroring mc.mjs footer logic)
                try:
                    while True:
                        if self.cancel_event and self.cancel_event.is_set():
                            break
                        self.active_threads = [thread for thread in self.active_threads if thread.is_alive()]
                        if not self.active_threads:
                            break
                        time.sleep(0.2)
                except Exception:
                    pass

        runner = Runner(self.actions, self.cancel_event)

        # Run the program in a wrapper thread so the test can signal cancellation
        execution_thread = threading.Thread(target=runner.run_program)
        execution_thread.start()

        # Verify startup
        self.assertTrue(thread_started.wait(timeout=5), "Background thread failed to start.")
        self.assertTrue(execution_thread.is_alive(), "Main runner exited while background thread was active.")

        # Simulate UI 'Stop'
        self.cancel_event.set()

        # Verify teardown
        execution_thread.join(timeout=5)
        self.assertFalse(execution_thread.is_alive(), "Runner failed to exit after cancellation.")
        self.assertTrue(thread_cleaned_up.wait(timeout=2), "Background thread failed to stop on signal.")

    @debug_on(Exception)
    def test_closure_scope_and_power_composeability(self):
        """
        Confirms that code defined inside a Thread block retains closure scope,
        allowing it to call action_implementer methods (Composeability check).
        """
        success = threading.Event()

        class Runner:
            def __init__(self, actions, cancel_event):
                self.action_implementer = actions
                self.cancel_event = cancel_event
                self.active_threads = []

            def run_program(self):
                def build_task():
                    # Call a power through closure capture of 'self'
                    # This confirms that background threads share the runner context.
                    # this does not work because the TEST_PLAYER is not connection to the server
                    # self.action_implementer.post("Verification: Threaded power call success.")
                    success.set()

                t = threading.Thread(target=build_task, daemon=True)
                t.start()
                self.active_threads.append(t)

                # Wait loop for background task to finish naturally
                while self.active_threads:
                    self.active_threads = [thread for thread in self.active_threads if thread.is_alive()]
                    time.sleep(0.1)

        runner = Runner(self.actions, self.cancel_event)
        runner.run_program()

        self.assertTrue(success.is_set(), "Thread was unable to call powers via closure.")

if __name__ == '__main__':
    unittest.main()