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

        // Add an extra level of indentation to the inner blocks for the try/except scope
        const tryBranch = branch.split('\n')
            .map(line => line ? pythonGenerator.INDENT + line : line)
            .join('\n');

        // Full boilerplate for execution with PowerCancelledException handling
        return `\ndef ${funcName}():\n` +
               `${pythonGenerator.INDENT}try:\n` +
               `${tryBranch}` +
               `${pythonGenerator.INDENT}except PowerCancelledException:\n` +
               `${pythonGenerator.INDENT}${pythonGenerator.INDENT}pass\n` +
               `_t = threading.Thread(target=${funcName}, daemon=True)\n` +
               `_t.start()\n` +
               `self.active_threads.append(_t)\n`;
    };
}