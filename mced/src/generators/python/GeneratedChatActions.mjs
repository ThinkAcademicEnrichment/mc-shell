export function defineGeneratedChatActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['generatedchatactions_post'] = function(block, generator) {
        const message = generator.valueToCode(block, 'message', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `GeneratedChatActions.post(${message})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}