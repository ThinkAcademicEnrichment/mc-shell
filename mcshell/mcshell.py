import click
class SpecialHelpOrderBase(click.Group):
    pass

class SpecialHelpOrder(SpecialHelpOrderBase):
    def __init__(self, *args, **kwargs):
        self.help_priorities = {}
        super(SpecialHelpOrder, self).__init__(*args, **kwargs)

    def get_help(self, ctx):
        self.list_commands = self.list_commands_for_help
        return super(SpecialHelpOrder, self).get_help(ctx)

    def list_commands_for_help(self, ctx):
        """reorder the list of commands when listing the help"""
        commands = super(SpecialHelpOrder, self).list_commands(ctx)
        return (c[1] for c in sorted(
            (self.help_priorities.get(command, 1), command)
            for command in commands))

    def command(self, *args, **kwargs):
        """Behaves the same as `click.Group.command()` except capture
        a priority for listing command names in help.
        """
        # if not priority is specified put it at the bottom
        help_priority = kwargs.pop('help_priority', 1000)
        help_priorities = self.help_priorities

        def decorator(f):
            cmd = super(SpecialHelpOrder, self).command(*args, **kwargs)(f)
            help_priorities[cmd.name] = help_priority
            return cmd

        return decorator


from traitlets.config import Config
# configure the ipython shell
def initialize_config():
    c = Config()
    c.TerminalIPythonApp.display_banner = False
    c.InteractiveShellApp.extensions = [
        'rich'
    ]
    c.InteractiveShellApp.exec_lines = [
        '%gui asyncio',
        '%load_ext autoreload',
        '%autoreload 2',
        # requires pickleshare
        "%store -r",
        'pdb',
    ]
    c.Application.log_level = 0
    return c

@click.group(cls=SpecialHelpOrder)
def cli():
    """
    mcshell: A Minecraft Server Interface
    """

@cli.command(
    help_priority=25,
    cls=click.Command,
    help="""
start an ipython session with mcshell magics
""")
def start():
    c = initialize_config()

    c.InteractiveShellApp.exec_lines += [
        'from mcshell import *',
    ]

    c.InteractiveShellApp.extensions += [
        'mcshell',
    ]

    import IPython
    IPython.start_ipython(config=c, argv=[])

@cli.command(
    help_priority=26,
    cls=click.Command,
    help="start the application in headless appliance mode"
)
@click.option('--port', default=5001, help='Port for the web server')
def appliance(port):
    import os
    import sys
    import subprocess
    import time

    session_name = "mcshell-appliance"
    python_exec = sys.executable
    script_path = sys.argv[0]

    # Capture the active virtual environment paths
    current_path = os.environ.get('PATH', '')
    venv = os.environ.get('VIRTUAL_ENV', '')

    # Build the strict environment injection string
    env_cmd = f"env MCSHELL_APPLIANCE_MODE=1 PATH=\"{current_path}\""
    if venv:
        env_cmd += f" VIRTUAL_ENV=\"{venv}\""

    print("Booting appliance mode...")

    # Start the actual application inside a detached tmux session,
    # forcing the execution context to match the parent virtual environment exactly.
    subprocess.run([
        "tmux", "new-session", "-d", "-s", session_name,
        f"{env_cmd} {python_exec} {script_path} start"
    ], check=True)

    # Enable native mouse scrolling in the tmux pane
    subprocess.run([
        "tmux", "set-option", "-t", session_name, "-g", "mouse", "on"
    ], check=True)

    print("IPython and Flask initialized in tmux.")
    
    time.sleep(2) 

    try:
        print("Starting ttyd web terminal broker on port 7681...")
        subprocess.run([
            "ttyd", "-W", "-p", "7681", "tmux", "attach", "-t", session_name
        ])
        
    except KeyboardInterrupt:
        print("\nShutting down appliance...")
        subprocess.run(["tmux", "kill-session", "-t", session_name])