from mcshell.constants import Vec3, threading, time, json
from blockapily import mced_block,mced_category
from mcshell.mcactions_base import MCActionsBase
from mcshell.mcturtle import DigitalSet
from mcshell.mcstructure import MCStructure

from mcshell.actions.generated_actions import SelectActions

@mced_category(name="Selection", colour="#534c8a")
class SelectionActions(SelectActions):
    def __init__(self, mc_player_instance, delay_between_blocks=0):
        super().__init__(mc_player_instance, delay_between_blocks)

    def _interactive_selection_corners(self, draw_method="drawMarquee"):
        """
        Private helper that orchestrates the 2-click interactive selection.
        draw_method dictates which Bukkit endpoint is used for the realtime particles.
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
                    
                    current_target = client.player.getTargetBlock()
                    if not current_target:
                         current_target = self.mcplayer.position
                    
                    if frame_count % 5 == 0:
                        print(f"[Marquee Thread] Drawing to target block: {current_target}")
                    
                    # Dynamically call the requested drawing method (drawMarquee or drawWandMarquee)
                    draw_func = getattr(client.select, draw_method)
                    success = draw_func(
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
            pos2 = self.wait_for_right_block_hit(self.mcplayer.name)
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
        pos1, pos2 = self._interactive_selection_corners(draw_method="drawMarquee")
        if not pos1 or not pos2:
            return DigitalSet()

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
    def interactive_structure_selection(self) -> MCStructure:
        """
        Waits for the player to select an area, then captures ALL blocks inside the box.
        """
        pos1, pos2 = self._interactive_selection_corners(draw_method="drawMarquee")
        if not pos1 or not pos2:
            # from mcshell.mcstructure import MCStructure
            return MCStructure() 

        print(f"[Marquee] Selection complete! Capturing MCStructure from world...")
        
        return self.mcplayer.mj.select.getStructure(
            int(pos1.x), int(pos1.y), int(pos1.z),
            int(pos2.x), int(pos2.y), int(pos2.z)
        ).with_local_origin(pos1)

    @mced_block(
        label="Interactive Contiguous Selection"
    )
    def interactive_contiguous_selection(self) -> 'MCStructure':
        """
        Waits for a single click on a structure. Performs a 3D flood-fill, 
        previews the selection shell to the user, and waits for a confirmation click.
        """
        target_name = self.mcplayer.name
        print(f"[Contiguous Selection] Waiting for {target_name} to click a structure...")
        
        # 1. Wait for a single block click
        start_pos = self.wait_for_right_block_hit(target_name)
        if not start_pos:
            from mcshell.mcstructure import MCStructure
            print("[Contiguous Selection] Cancelled.")
            return MCStructure()
            
        print(f"[Contiguous Selection] Target acquired at {start_pos}. Processing 3D flood fill...")
        
        # 2. Call the server-side BFS algorithm
        raw_structure = self.mcplayer.mj.select.getContiguousStructure(
            int(start_pos.x), int(start_pos.y), int(start_pos.z)
        )
        
        if not hasattr(raw_structure, 'voxels') or len(raw_structure.voxels) == 0:
            print("[Contiguous Selection] Failed to capture structure or structure is empty.")
            return raw_structure

        # 3. Anchor the structure to the block the player just clicked!
        captured_structure = raw_structure.with_local_origin(start_pos)

        # 4. Extract the shell and shift the localized coordinates BACK to absolute world coordinates
        shell_coords = list(captured_structure.shell(1).voxels)
        offset = getattr(captured_structure, 'world_offset', Vec3(0, 0, 0))
        
        world_coords = [
            [int(x + offset.x), int(y + offset.y), int(z + offset.z)] 
            for x, y, z in shell_coords
        ]
        
        # PERFORMANCE CAP: If the shell is massive, render a uniform subset of particles.
        # This prevents the client's FPS from dropping to zero on massive buildings.
        particle_cap = 1500
        step = max(1, len(world_coords) // particle_cap)
        sampled_coords = world_coords[::step]
        
        # CRITICAL FIX: Bypass the bridge's comma/space splitting entirely!
        # Encode as a custom string: "x_y_z|x_y_z|x_y_z"
        payload = "|".join([f"{x}_{y}_{z}" for x, y, z in sampled_coords])
        print(f"[Contiguous Selection] Found {len(captured_structure.voxels)} blocks. Highlighting shell ({len(sampled_coords)} particles)...")

        # 5. Start the Preview Render Thread
        is_confirming = True
        
        def render_highlight():
            client = self.mcplayer.mj_client(target_name)
            while is_confirming:
                if self.mcplayer.cancel_event and self.mcplayer.cancel_event.is_set():
                    break
                
                try:
                    # We send the custom encoded payload to the world API namespace
                    client.select.highlightStructure(payload)
                except Exception as e:
                    print(f"[Highlight Preview Error] {e}")
                
                time.sleep(0.5) 

        render_thread = threading.Thread(target=render_highlight, daemon=True)
        render_thread.start()

        # 6. Prompt for confirmation and wait for second click
        try:
            self.mcplayer.mj.player.sendTitle("Previewing Selection", "Right-click again to confirm!", 10)
            time.sleep(0.5) 
            
            confirm_pos = self.wait_for_right_block_hit(target_name)
            
            if confirm_pos:
                print("[Contiguous Selection] Confirmed! Returning captured structure.")
                self.mcplayer.mj.player.sendTitle("Selection Captured!", "", 10)
            else:
                print("[Contiguous Selection] Cancelled during confirmation.")
                from mcshell.mcstructure import MCStructure
                captured_structure = MCStructure() 

        finally:
            is_confirming = False
            render_thread.join(timeout=1.0)
        
        return captured_structure

    # @mced_block(
    #     label="Interactive Magic Wand Selection"
    # )
    # def interactive_magic_wand_selection(self) -> MCStructure:
    #     """
    #     Waits for the player to select a bounded area, then captures only the contiguous 
    #     non-air blocks starting from the first block clicked, confined to the bounding box.
    #     """
    #     # Call the helper, but tell it to use the bounded Wand particle trace!
    #     pos1, pos2 = self._interactive_selection_corners(draw_method="drawWandMarquee")
    #     if not pos1 or not pos2:
    #         from mcshell.mcstructure import MCStructure
    #         return MCStructure() 

    #     print(f"[Magic Wand] Selection complete! Capturing Bounded Wand MCStructure...")
        
    #     # Call the new Bukkit endpoint that performs the bounded server-side Flood Fill
    #     return self.mcplayer.mj.select.getWandMCStructure(
    #         int(pos1.x), int(pos1.y), int(pos1.z),
    #         int(pos2.x), int(pos2.y), int(pos2.z)
    #     ).with_local_origin(pos1)