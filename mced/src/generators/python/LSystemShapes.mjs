
export function defineLSystemShapesGenerators(pythonGenerator) {
pythonGenerator.forBlock['l_system_shapes_define_rule'] = function(block, generator) {
    const predecessor = generator.valueToCode(block, 'PREDECESSOR', generator.ORDER_ATOMIC) || '';
    const successor = generator.valueToCode(block, 'SUCCESSOR', generator.ORDER_ATOMIC) || '';
    const code = `self.action_implementer.define_rule(predecessor=${predecessor}, successor=${successor})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
pythonGenerator.forBlock['l_system_shapes_get_lsystem_shape'] = function(block, generator) {
    const axiom = generator.valueToCode(block, 'AXIOM', generator.ORDER_ATOMIC) || '';
    const iterations = generator.valueToCode(block, 'ITERATIONS', generator.ORDER_ATOMIC) || 0;
    const step_length = generator.valueToCode(block, 'STEP_LENGTH', generator.ORDER_ATOMIC) || 0;
    const rules = generator.valueToCode(block, 'RULES', generator.ORDER_ATOMIC) || 'None';
    const code = `self.action_implementer.get_lsystem_shape(axiom=${axiom}, iterations=${iterations}, step_length=${step_length}, rules=${rules})`;
    return [code, generator.ORDER_FUNCTION_CALL];
};
}