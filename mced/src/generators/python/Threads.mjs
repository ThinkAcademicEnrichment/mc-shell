/**
 * Python generator for the Thread block.
 * Generates a nested function (closure) inside the main execution context
 * and starts it as a daemon thread.
 */

export function defineThreadsGenerators(pythonGenerator) {
    pythonGenerator.forBlock['threading_thread'] = function(block) {
        // Sanitize the thread name to be a valid python identifier
        const threadNameInput = block.getFieldValue('THREAD_NAME');
        // Use block ID to guarantee uniqueness even if user reuses "task1"
        const safeThreadName = threadNameInput.replace(/\W/g, '_');
        const funcName = `thread_${safeThreadName}_${block.id.replace(/\W/g, '_')}`;

        // Get the inner code. If empty, use 'pass' to avoid syntax errors.
        // statementToCode adds correct indentation for the body relative to this block.
        let branch = pythonGenerator.statementToCode(block, 'STACK');
        if (!branch) {
            branch = pythonGenerator.INDENT + 'pass\n';
        }

        // We explicitly construct a local function definition.
        // This function will be defined INSIDE the run_program method scope (closure),
        // allowing it to capture 'self' automatically.
        // We assume 'threading' is imported in the file header.

        const code = `
def ${funcName}():
${branch}

threading.Thread(target=${funcName}, daemon=True).start()
`;
        return code;
    };
}