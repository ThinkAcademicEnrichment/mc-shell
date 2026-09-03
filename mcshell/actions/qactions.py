from mcshell.constants import Vec3, threading, time
from blockapily import mced_block
from mcshell.mcactions_base import MCActionsBase
from mcshell.mcturtle import DigitalSet


class QActions(MCActionsBase):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    @mced_block(
        label="Set Player Q-Compass Direction",
        direction={'label':'Q-Compass Direction'}
    )
    def set_q_compass_direction(self, direction: 'QCompass'):
        self.mcplayer.set_q_compass_direction(direction)

    @mced_block(
        label="Get Player Q-Compass Direction",
    )
    def get_q_compass_direction(self) -> 'QCompass':
        return self.mcplayer.q_compass_direction

    @mced_block(label="Get Player Q-Direction")
    def get_q_direction(self) -> Vec3:
        """Returns the quantized direction the player is looking as a unit vector."""
        return self.mcplayer.q_direction

    @mced_block(
        label="Get Height",
        position={'label': 'At Position [(X,Y,Z)]'}
    )
    def get_height_at(self, position: Vec3) -> int:
        """
        Gets the Y coordinate of the highest block at the X,Z of the given position.
        """
        x, z = (int(position.x), int(position.z))
        height = self.mcplayer.mj.world.getHeight(x, z)
        return int(height)

    @mced_block(
        label="Get Q Direction",
        direction={'label':"Q-Compass Direction"}
    )
    def get_q_direction_from_q_compass_direction(self, direction: 'QCompass') -> Vec3:
        return self.mcplayer._get_q_direction_vector(direction)

    def _interactive_selection_corners(self):
        """
        Private helper that orchestrates the 2-click interactive marquee selection.
        Returns a tuple of (pos1, pos2) Vec3 objects, or (None, None) if cancelled.
        """
        target_name = self.mcplayer.name
        print(f"[Marquee] Starting selection for player: {target_name}")
        
        # 1. Wait for the FIRST click
        pos1 = self.wait_for_right_block_hit(target_name)
        if not pos1:
            print("[Marquee] Cancelled on first click.")
            return None, None

        print(f"[Marquee] First click registered at {pos1}")
        pos2 = None
        is_selecting = True

        # 2. Define the background render loop
        def render_marquee():
            print("[Marquee Thread] Thread started successfully.")
            frame_count = 0
            while is_selecting:
                try:
                    if self.mcplayer.cancel_event and self.mcplayer.cancel_event.is_set():
                        print("[Marquee Thread] Cancel event detected.")
                        break
                    
                    # Fetch the client tied specifically to the target player
                    client = self.mcplayer.mj_client(target_name)
                    
                    # Safe fallback to player position if looking at the sky
                    current_target = client.player.getTargetBlock()
                    if not current_target:
                         current_target = client.player.getPos()
                    
                    if frame_count % 5 == 0:
                        print(f"[Marquee Thread] Drawing to target block: {current_target}")
                    
                    # Call the player-namespaced drawMarquee method
                    success = client.player.drawMarquee(
                        int(pos1.x), int(pos1.y), int(pos1.z),
                        int(current_target.x), int(current_target.y), int(current_target.z)
                    )
                    
                    if not success and frame_count % 5 == 0:
                        print(f"[Marquee Thread WARNING] Bukkit returned False! Player '{target_name}' not found online.")

                except Exception as e:
                    print(f"[Marquee Thread CRITICAL ERROR] {e}")
                    break  # Exit the thread cleanly if something fails
                
                frame_count += 1
                time.sleep(0.2) # Update 5 times a second
            
            print("[Marquee Thread] Thread exiting.")

        # 3. Start the render thread
        render_thread = threading.Thread(target=render_marquee, daemon=True)
        render_thread.start()

        # 4. Wait for the SECOND click
        try:
            time.sleep(0.5) 
            pos2 = self.wait_for_right_block_hit(target_name)
            print(f"[Marquee] Second click registered at {pos2}")
        finally:
            # Stop the render thread regardless of success or cancellation
            is_selecting = False
            render_thread.join(timeout=1.0)

        if not pos2:
             print("[Marquee] Cancelled on second click.")
             return None, None
             
        return pos1, pos2

    @mced_block(
        label="Interactive Box Selection"
    )
    def interactive_box_selection(self) -> DigitalSet:
        """
        Waits for the player to select an area, then returns a pure DigitalSet volume.
        """
        pos1, pos2 = self._interactive_selection_corners()
        if not pos1 or not pos2:
            return DigitalSet()

        # Build and return the DigitalSet representing the bounding box
        x_min, x_max = int(min(pos1.x, pos2.x)), int(max(pos1.x, pos2.x))
        y_min, y_max = int(min(pos1.y, pos2.y)), int(max(pos1.y, pos2.y))
        z_min, z_max = int(min(pos1.z, pos2.z)), int(max(pos1.z, pos2.z))
        
        voxels = [
            (x, y, z)
            for x in range(x_min, x_max + 1)
            for y in range(y_min, y_max + 1)
            for z in range(z_min, z_max + 1)
        ]
        
        print(f"[Marquee] Selection complete! Returning pure set with {len(voxels)} voxels.")
        return DigitalSet(voxels)

    @mced_block(
        label="Interactive Structure Selection"
    )
    def interactive_structure_selection(self) -> 'MCStructure':
        """
        Waits for the player to select an area, then captures the blocks from the world
        and returns them as a fully textured MCStructure object.
        """
        pos1, pos2 = self._interactive_selection_corners()
        if not pos1 or not pos2:
            from mcshell.mcstructure import MCStructure
            return MCStructure() # Return an empty structure if cancelled

        print(f"[Marquee] Selection complete! Capturing MCStructure from world...")
        
        # We delegate the actual network call to the auto-generated World namespace method.
        # Thanks to the Registry Builder, this automatically parses the JSON and 
        # returns a fully instantiated MCStructure object!
        return self.mcplayer.mj.world.getMCStructure(
            int(pos1.x), int(pos1.y), int(pos1.z),
            int(pos2.x), int(pos2.y), int(pos2.z)
        )