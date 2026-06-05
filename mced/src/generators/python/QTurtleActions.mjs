export function defineQTurtleActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['qturtleactions_reset'] = function(block, generator) {
        const position = generator.valueToCode(block, 'position', pythonGenerator.ORDER_ATOMIC) || 'None';
const heading_q_str = generator.valueToCode(block, 'heading_q_str', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.reset(${position}, ${heading_q_str})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_move'] = function(block, generator) {
        const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
const distance = generator.valueToCode(block, 'distance', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.turtle_move(${direction}, ${distance})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_position'] = function(block, generator) {
        
        const code = `QTurtleActions.turtle_position()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_rotate'] = function(block, generator) {
        const axis = generator.valueToCode(block, 'axis', pythonGenerator.ORDER_ATOMIC) || 'None';
const steps = generator.valueToCode(block, 'steps', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.turtle_rotate(${axis}, ${steps})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_set_brush'] = function(block, generator) {
        const shape = generator.valueToCode(block, 'shape', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.turtle_set_brush(${shape})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_stamp'] = function(block, generator) {
        const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.turtle_stamp(${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_extrude'] = function(block, generator) {
        const length = generator.valueToCode(block, 'length', pythonGenerator.ORDER_ATOMIC) || 'None';
const direction = generator.valueToCode(block, 'direction', pythonGenerator.ORDER_ATOMIC) || 'None';
const block_type = generator.valueToCode(block, 'block_type', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.turtle_extrude(${length}, ${direction}, ${block_type})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_capture_brush'] = function(block, generator) {
        const shape = generator.valueToCode(block, 'shape', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `QTurtleActions.turtle_capture_brush(${shape})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_push'] = function(block, generator) {
        
        const code = `QTurtleActions.turtle_push()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['qturtleactions_turtle_pop'] = function(block, generator) {
        
        const code = `QTurtleActions.turtle_pop()\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}