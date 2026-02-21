export function defineWorldActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['worldactions_post_to_chat'] = function(block, generator) {
        const message = generator.valueToCode(block, 'message', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `.post_to_chat(${message})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['worldactions_set_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `.set_block(${position}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}