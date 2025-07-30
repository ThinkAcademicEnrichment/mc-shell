export let MCED;

export function defineMineCraftConstants(Blockly) {

    MCED = {

        BlocklyNameTypes : {
            PROCEDURE: Blockly.Names.NameType.PROCEDURE,
            VARIABLE: Blockly.Names.NameType.VARIABLE
        },

        BlocklyUtils: {
            configureShadow: function (block, inputName) {
                let shadowValue = MCED.Defaults.values[block.type]?.[inputName]?.shadow;
                if (shadowValue) {
                    block.getInput(inputName).connection.setShadowDom(Blockly.utils.xml.textToDom(shadowValue));
                }
            },
        },

        Defaults: {values: {}},

        Colours:[
            { name: "White", hex: "#FFFFFF", id: "WHITE" },
            { name: "Orange", hex: "#D87F33", id: "ORANGE" },
            { name: "Magenta", hex: "#B24CD8", id: "MAGENTA" },
            { name: "Light Blue", hex: "#6699D8", id: "LIGHT_BLUE" },
            { name: "Yellow", hex: "#E5E533", id: "YELLOW" },
            { name: "Lime", hex: "#7FCC19", id: "LIME" },
            { name: "Pink", hex: "#F27FA5", id: "PINK" },
            { name: "Gray", hex: "#4C4C4C", id: "GRAY" },
            { name: "Light Gray", hex: "#999999", id: "LIGHT_GRAY" },
            { name: "Cyan", hex: "#4C7F99", id: "CYAN" }, // Existing Cyan
            { name: "Azure", hex: "#007FFF", id: "AZURE" }, // Added Azure - a bright, sky blue
            // Note: Minecraft's "Cyan" is often more teal/aqua. If the existing "Cyan"
            // is meant to be the Minecraft block, you might want a different hex for a true "Cyan" if needed,
            // or rename the existing one to "Aqua" or "Teal" if that's more accurate to the game.
            // I'm keeping the existing "Cyan" and adding a distinct "Azure".
            { name: "Purple", hex: "#7F3FB2", id: "PURPLE" },
            { name: "Blue", hex: "#334CB2", id: "BLUE" },
            { name: "Brown", hex: "#664C33", id: "BROWN" },
            { name: "Green", hex: "#667F33", id: "GREEN" },
            { name: "Red", hex: "#993333", id: "RED" },
            { name: "Black", hex: "#191919", id: "BLACK" },
            { name: "Tinted", hex: "#2A232B", id: "TINTED_GLASS_BLOCK" }
        ]
    };

    // reusable shadows
    const VECTOR_3D_SHADOW = `
        <shadow type="minecraft_vector_3d">
            <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
            <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
            <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        </shadow>`;

    const VECTOR_3D_SHADOW_Y_UP = `
        <shadow type="minecraft_vector_3d">
            <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
            <value name="Y"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        </shadow>`;

    const BLOCK_TYPE_SHADOW = `
        <shadow type="minecraft_picker_world">
            <field name="MATERIAL_ID">STONE</field>
        </shadow>`;


    MCED.Defaults.values.minecraft_matrix_3d_euler = { // For shadow on other blocks
        YAW:   { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' },
        PITCH: { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' },
        ROLL:  { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' }
    };

    const matrix_elements = ["R00","R01","R02","R10","R11","R12","R20","R21","R22"];
    MCED.Defaults.values.minecraft_matrix_3d_elements = {};
    matrix_elements.forEach((el, index) => {
        let val = (index % 4 === 0) ? 1 : 0; // For identity matrix diagonal
        MCED.Defaults.values.minecraft_matrix_3d_elements[el] = {
            shadow: `<shadow type="math_number"><field name="NUM">${val}</field></shadow>`
        };
    });

    MCED.Defaults.values['minecraft_vector_binary_op'] = {
        A: { shadow: VECTOR_3D_SHADOW },
        B: { shadow: VECTOR_3D_SHADOW }
    };

    MCED.Defaults.values['minecraft_vector_scalar_multiply'] = {
        A: { shadow: VECTOR_3D_SHADOW },
        B: { shadow: '<shadow type="math_number"><field name="NUM">1</field></shadow>' }
    };

    MCED.Defaults.values['minecraft_vector_dot_product'] = {
        A: { shadow: VECTOR_3D_SHADOW },
        B: { shadow: VECTOR_3D_SHADOW }
    };

    MCED.Defaults.values['minecraft_matrix_vector_multiply'] = {
        A: { shadow: '<shadow type="minecraft_matrix_3d_euler"></shadow>' },
        B: { shadow: VECTOR_3D_SHADOW }
    };

    // --- Digital Geometry Actions ---

    MCED.Defaults.values['minecraft_action_create_digital_line'] = {
        POINT1:     { shadow: VECTOR_3D_SHADOW },
        POINT2:     { shadow: VECTOR_3D_SHADOW },
        BLOCK_TYPE: { shadow: BLOCK_TYPE_SHADOW }
    };

    MCED.Defaults.values['minecraft_action_create_digital_plane'] = {
        NORMAL:          { shadow: VECTOR_3D_SHADOW_Y_UP },
        POINT_ON_PLANE:  { shadow: VECTOR_3D_SHADOW },
        BLOCK_TYPE:      { shadow: BLOCK_TYPE_SHADOW },
        OUTER_WIDTH:     { shadow: '<shadow type="math_number"><field name="NUM">10</field></shadow>' },
        OUTER_LENGTH:    { shadow: '<shadow type="math_number"><field name="NUM">10</field></shadow>' },
        PLANE_THICKNESS: { shadow: '<shadow type="math_number"><field name="NUM">1</field></shadow>' }
    };

    MCED.Defaults.values['minecraft_action_create_digital_ball'] = {
        CENTER:         { shadow: VECTOR_3D_SHADOW },
        RADIUS:         { shadow: '<shadow type="math_number"><field name="NUM">10</field></shadow>' },
        INNER_RADIUS:   { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' },
        BLOCK_TYPE:     { shadow: BLOCK_TYPE_SHADOW }
    };

    MCED.Defaults.values['minecraft_action_create_digital_tube'] = {
        POINT1:          { shadow: VECTOR_3D_SHADOW },
        POINT2:          { shadow: `<shadow type="minecraft_vector_3d"><value name="Y"><shadow type="math_number"><field name="NUM">10</field></shadow></value></shadow>` },
        OUTER_THICKNESS: { shadow: '<shadow type="math_number"><field name="NUM">3</field></shadow>' },
        INNER_THICKNESS: { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' },
        BLOCK_TYPE:      { shadow: BLOCK_TYPE_SHADOW }
    };

    MCED.Defaults.values['minecraft_action_create_digital_cube'] = {
        CENTER:              { shadow: VECTOR_3D_SHADOW },
        SIDE_LENGTH:         { shadow: '<shadow type="math_number"><field name="NUM">5</field></shadow>' },
        ROTATION_MATRIX:     { shadow: '<shadow type="minecraft_matrix_3d_euler"></shadow>' },
        BLOCK_TYPE:          { shadow: BLOCK_TYPE_SHADOW },
        INNER_OFFSET_FACTOR: { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' }
    };

    MCED.Defaults.values['minecraft_action_create_digital_disc'] = {
        NORMAL:         { shadow: VECTOR_3D_SHADOW_Y_UP },
        CENTER_POINT:   { shadow: VECTOR_3D_SHADOW },
        OUTER_RADIUS:   { shadow: '<shadow type="math_number"><field name="NUM">10</field></shadow>' },
        BLOCK_TYPE:     { shadow: BLOCK_TYPE_SHADOW },
        DISC_THICKNESS: { shadow: '<shadow type="math_number"><field name="NUM">1</field></shadow>' },
        INNER_RADIUS:   { shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>' }
    };


    MCED.Defaults.values['minecraft_action_set_block'] = {
        BLOCK_TYPE: { shadow: BLOCK_TYPE_SHADOW },
        POSITION:   { shadow: VECTOR_3D_SHADOW }
    };

    MCED.Defaults.values['minecraft_action_get_block'] = {
        POSITION:   { shadow: VECTOR_3D_SHADOW }
    };

    MCED.Defaults.values['minecraft_action_get_height'] = {
        POSITION:   { shadow: VECTOR_3D_SHADOW }
    };

    MCED.Defaults.values['minecraft_action_post_to_chat'] = {
        MESSAGE: { shadow: '<shadow type="text"><field name="TEXT">Hello, Minecraft!</field></shadow>' }
    };

    MCED.Defaults.values['minecraft_action_set_sign'] = {
        POSITION: { shadow: VECTOR_3D_SHADOW },
        LINE1:    { shadow: '<shadow type="text"><field name="TEXT"></field></shadow>' },
        LINE2:    { shadow: '<shadow type="text"><field name="TEXT">Hello!</field></shadow>' },
        LINE3:    { shadow: '<shadow type="text"><field name="TEXT"></field></shadow>' },
        LINE4:    { shadow: '<shadow type="text"><field name="TEXT"></field></shadow>' }
    };

    MCED.Defaults.values['minecraft_action_create_explosion'] = {
        POSITION: { shadow: VECTOR_3D_SHADOW },
        POWER:    { shadow: '<shadow type="math_number"><field name="NUM">4</field></shadow>' }
    };

    MCED.Defaults.values['minecraft_action_spawn_entity'] = {
        ENTITY_TYPE: {
            shadow: '<shadow type="minecraft_picker_entity_passive_mobs"><field name="ENTITY_ID">PIG</field></shadow>'
        },
        POSITION: {
            shadow: '<shadow type="minecraft_vector_3d"><value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value></shadow>'
        }
    };
}