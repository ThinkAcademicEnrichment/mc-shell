export let MCED;

export function defineMineCraftConstants(Blockly) {

    MCED = {

        BlocklyUtils: {
            configureShadow: function (block, inputName) {
                let shadowValue = MCED.Defaults.values[block.type]?.[inputName]?.shadow;
                if (shadowValue) {
                    block.getInput(inputName).connection.setShadowDom(Blockly.utils.xml.textToDom(shadowValue));
                }
            },
        },

        // reusable shadows
        VECTOR_3D_SHADOW: `
            <shadow type="minecraft_vector_3d">
                <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                <value name="Y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
            </shadow>`,

        VECTOR_3D_SHADOW_Y_UP: `
            <shadow type="minecraft_vector_3d">
                <value name="X"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                <value name="Y"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                <value name="Z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
            </shadow>`,

        BLOCK_TYPE_SHADOW: `
            <shadow type="minecraft_picker_world">
                <field name="MATERIAL_ID">STONE</field>
            </shadow>`,

        ENTITY_TYPE_SHADOW: `
            <shadow type="minecraft_entity_picker_passive_mobs">
                <field name="ENTITY_ID">PIG</field>
            </shadow>`,

        BlocklyNameTypes: {
            PROCEDURE: Blockly.Names.NameType.PROCEDURE,
            VARIABLE: Blockly.Names.NameType.VARIABLE
        },


        // constructed inside block defnitions
        Defaults: {values: {}},

        Colours: [
            {name: "White", hex: "#FFFFFF", id: "WHITE"},
            {name: "Orange", hex: "#D87F33", id: "ORANGE"},
            {name: "Magenta", hex: "#B24CD8", id: "MAGENTA"},
            {name: "Light Blue", hex: "#6699D8", id: "LIGHT_BLUE"},
            {name: "Yellow", hex: "#E5E533", id: "YELLOW"},
            {name: "Lime", hex: "#7FCC19", id: "LIME"},
            {name: "Pink", hex: "#F27FA5", id: "PINK"},
            {name: "Gray", hex: "#4C4C4C", id: "GRAY"},
            {name: "Light Gray", hex: "#999999", id: "LIGHT_GRAY"},
            {name: "Cyan", hex: "#4C7F99", id: "CYAN"}, // Existing Cyan
            {name: "Azure", hex: "#007FFF", id: "AZURE"}, // Added Azure - a bright, sky blue
            // Note: Minecraft's "Cyan" is often more teal/aqua. If the existing "Cyan"
            // is meant to be the Minecraft block, you might want a different hex for a true "Cyan" if needed,
            // or rename the existing one to "Aqua" or "Teal" if that's more accurate to the game.
            // I'm keeping the existing "Cyan" and adding a distinct "Azure".
            {name: "Purple", hex: "#7F3FB2", id: "PURPLE"},
            {name: "Blue", hex: "#334CB2", id: "BLUE"},
            {name: "Brown", hex: "#664C33", id: "BROWN"},
            {name: "Green", hex: "#667F33", id: "GREEN"},
            {name: "Red", hex: "#993333", id: "RED"},
            {name: "Black", hex: "#191919", id: "BLACK"},
            {name: "Tinted", hex: "#2A232B", id: "TINTED_GLASS_BLOCK"}
        ]
    };
}