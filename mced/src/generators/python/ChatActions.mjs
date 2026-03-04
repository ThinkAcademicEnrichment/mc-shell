export function defineChatActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['chatactions_post'] = function(block, generator) {
        const message = generator.valueToCode(block, 'message', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `ChatActions.post(${message})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}