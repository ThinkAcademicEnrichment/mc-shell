/**
 * Defines the 'Thread' block for concurrent execution.
 * Allows students to run a stack of blocks in a background thread.
 */
import { MCED } from "../lib/constants.mjs";

export function defineThreadsBlocks(Blockly) {
    Blockly.Blocks['threading_thread'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("run in background thread")
                .appendField(new Blockly.FieldTextInput("task1"), "THREAD_NAME");
            this.appendStatementInput("STACK")
                .setCheck(null)
                .appendField("do");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230); // Blue-ish color for control flow
            this.setTooltip("Runs the blocks inside this container in a parallel background thread. It can access all player powers.");
            this.setHelpUrl("");
        }
    };
}