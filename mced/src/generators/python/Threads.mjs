/**
 * Python generator for the Thread block.
 * Generates a nested function definition and starts a threading.Thread.
 */
import { pythonGenerator } from 'blockly/python';

pythonGenerator.forBlock['threading_thread'] = function(block) {
  const threadName = block.getFieldValue('THREAD_NAME').replace(/\W/g, '_');
  const branch = pythonGenerator.statementToCode(block, 'STACK');

  // Create a unique function name to avoid collisions in the workspace
  const funcName = pythonGenerator.provideFunction_(
    `thread_${threadName}`,
    ['def ' + pythonGenerator.FUNCTION_NAME_PLACEHOLDER_ + '():',
     branch || '  pass']
  );

  // The generated code to spawn the thread.
  // We use daemon=True so the thread dies when the main program stops.
  // Since this is defined inside run_program(self), funcName has access to 'self'.
  const code = `threading.Thread(target=${funcName}, daemon=True).start()\n`;

  return code;
};