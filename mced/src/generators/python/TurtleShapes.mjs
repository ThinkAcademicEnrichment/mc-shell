export function defineTurtleShapesGenerators(pythonGenerator) {

    pythonGenerator.forBlock['turtleshapes_get_metric_ball'] = function(block, generator) {
        const radius = generator.valueToCode(block, 'radius', pythonGenerator.ORDER_ATOMIC) || 'None';
const metric = generator.valueToCode(block, 'metric', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `TurtleShapes.get_metric_ball(${radius}, ${metric})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['turtleshapes_get_arithmetic_plane'] = function(block, generator) {
        const normal = generator.valueToCode(block, 'normal', pythonGenerator.ORDER_ATOMIC) || 'None';
const side_length = generator.valueToCode(block, 'side_length', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `TurtleShapes.get_arithmetic_plane(${normal}, ${side_length})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };

    pythonGenerator.forBlock['turtleshapes_get_line'] = function(block, generator) {
        const p1 = generator.valueToCode(block, 'p1', pythonGenerator.ORDER_ATOMIC) || 'None';
const p2 = generator.valueToCode(block, 'p2', pythonGenerator.ORDER_ATOMIC) || 'None';
        const code = `TurtleShapes.get_line(${p1}, ${p2})\n`;
        return block.outputConnection ? [code.trim(), pythonGenerator.ORDER_ATOMIC] : code;
    };
}