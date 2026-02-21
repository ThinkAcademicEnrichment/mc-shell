export function defineLSystemShapesGenerators(pythonGenerator) {

    pythonGenerator.forBlock['lsystemshapes_define_rule'] = function(block, generator) {
        const predecessor = generator.valueToCode(block, 'predecessor', pythonGenerator.ORDER_ATOMIC) || 'None';
const successor = generator.valueToCode(block, 'successor', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `LSystemShapes.define_rule(${predecessor}, ${successor})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['lsystemshapes_get_lsystem_shape'] = function(block, generator) {
        const axiom = generator.valueToCode(block, 'axiom', pythonGenerator.ORDER_ATOMIC) || 'None';
const iterations = generator.valueToCode(block, 'iterations', pythonGenerator.ORDER_ATOMIC) || 'None';
const step_length = generator.valueToCode(block, 'step_length', pythonGenerator.ORDER_ATOMIC) || 'None';
const rules = generator.valueToCode(block, 'rules', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `LSystemShapes.get_lsystem_shape(${axiom}, ${iterations}, ${step_length}, ${rules})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}