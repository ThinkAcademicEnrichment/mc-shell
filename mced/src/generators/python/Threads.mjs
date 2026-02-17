/**
 * Python generator for the Thread block.
 */

export function defineThreadsGenerators(pythonGenerator) {
    pythonGenerator.forBlock['threading_thread'] = function(block) {
        // Flag that we are using threads in this workspace
        // This will be read by the main wrapper (mc.mjs) to decide if a wait loop is needed.
        pythonGenerator.hasThreads = true;

        const threadNameInput = block.getFieldValue('THREAD_NAME');
        const safeThreadName = threadNameInput.replace(/\W/g, '_');
        // Unique function name to prevent collisions
        const funcName = `thread_${safeThreadName}_${block.id.replace(/\W/g, '_')}`;

        let branch = pythonGenerator.statementToCode(block, 'STACK');
        if (!branch) {
            branch = pythonGenerator.INDENT + 'pass\n';
        }

        // 1. Define the function locally (closure capturing 'self')
        // 2. Create the thread object
        // 3. Start it
        // 4. Append to self.active_threads so we can join/monitor if needed
        const code = `
def ${funcName}():
${branch}

_t = threading.Thread(target=${funcName}, daemon=True)
_t.start()
self.active_threads.append(_t)
`;
        return code;
    };
}