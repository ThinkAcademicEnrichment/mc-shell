/**
 * Python generator for the Thread block.
 */
export function defineThreadsGenerators(pythonGenerator) {
    pythonGenerator.forBlock['threading_thread'] = function(block) {
        pythonGenerator.hasThreads = true;

        const threadNameInput = block.getFieldValue('THREAD_NAME') || 'task';
        const safeThreadName = threadNameInput.replace(/\W/g, '_');
        const funcName = `thread_${safeThreadName}_${block.id.replace(/\W/g, '_')}`;

        let branch = pythonGenerator.statementToCode(block, 'STACK') || (pythonGenerator.INDENT + 'pass\n');

        if (pythonGenerator.isSchematic) {
            // Conceptually cleaner representation for users
            return `\ndef ${funcName}():\n${branch}\n# Run background task\nrun_in_background(${funcName})\n`;
        }

        // Full boilerplate for execution
        return `\ndef ${funcName}():\n${branch}\n_t = threading.Thread(target=${funcName}, daemon=True)\n_t.start()\nself.active_threads.append(_t)\n`;
    };
}