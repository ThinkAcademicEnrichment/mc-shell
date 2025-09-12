import { MCED } from "../../lib/constants.mjs";



export function defineWorldActionsGenerators(pythonGenerator) {

    pythonGenerator.forBlock['minecraft_action_create_explosion'] = function(block, generator) {
        const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || Vec3(0,0,0);
        const power = generator.valueToCode(block, 'POWER', generator.ORDER_ATOMIC) || null;
        return `self.action_implementer.create_explosion(position=${position}, power=${power})\n`;
    };

    pythonGenerator.forBlock['minecraft_action_get_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || Vec3(0,0,0);
        return `self.action_implementer.get_block(position=${position})\n`;
    };

    pythonGenerator.forBlock['minecraft_action_get_height'] = function(block, generator) {
        const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || Vec3(0,0,0);
        return `self.action_implementer.get_height(position=${position})\n`;
    };

    pythonGenerator.forBlock['minecraft_action_post_to_chat'] = function(block, generator) {
        const message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_ATOMIC) || null;
        return `self.action_implementer.post_to_chat(message=${message})\n`;
    };

    pythonGenerator.forBlock['minecraft_action_set_block'] = function(block, generator) {
        const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || Vec3(0,0,0);
        const block_type = generator.valueToCode(block, 'BLOCK_TYPE', generator.ORDER_ATOMIC) || null;
        return `self.action_implementer.set_block(position=${position}, block_type=${block_type})\n`;
    };

    pythonGenerator.forBlock['minecraft_action_spawn_entity'] = function(block, generator) {
        const position = generator.valueToCode(block, 'POSITION', generator.ORDER_ATOMIC) || Vec3(0,0,0);
        const entity = generator.valueToCode(block, 'ENTITY', generator.ORDER_ATOMIC) || null;
        return `self.action_implementer.spawn_entity(position=${position}, entity=${entity})\n`;
    };

}