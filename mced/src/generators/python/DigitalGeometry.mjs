import { MCED } from "../../lib/constants.mjs";



export function defineDigitalGeometryGenerators(pythonGenerator) {

    pythonGenerator.forBlock['minecraft_action_create_digital_cube'] = function(block, generator) {
        const center = generator.valueToCode(block, 'CENTER', generator.ORDER_ATOMIC) || Vec3(0,0,0);
        const side_length = generator.valueToCode(block, 'SIDE_LENGTH', generator.ORDER_ATOMIC) || null;
        const rotation_matrix3 = generator.valueToCode(block, 'ROTATION_MATRIX3', generator.ORDER_ATOMIC) || Matrix3.identity();
        const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || null;
        const wall_thickness = generator.valueToCode(block, 'WALL_THICKNESS', generator.ORDER_ATOMIC) || 0.0;
        return `self.action_implementer.create_digital_cube(center=${center}, side_length=${side_length}, rotation_matrix3=${rotation_matrix3}, block_type=${block_type}, wall_thickness=${wall_thickness})\n`;
    };
}