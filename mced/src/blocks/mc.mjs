import {MCED} from "../lib/constants.mjs"; //Importing here!

export function defineMineCraftBlocks(Blockly) {

    Blockly.Blocks['dummy_block'] = {
        init: function () {
            console.log("mc.mjs: Inside init() function of ...");
        }

    };

    // Blockly.Blocks['vector_3d_shadow'] = {
    //     init: function () {
    //         this.jsonInit({
    //             "type": "vector_3d_shadow",
    //             "message0": "Vector 3D Shadow %1 %2 %3",
    //             "args0": [
    //                 {
    //                     "type": "field_number",
    //                     "name": "X",
    //                     "value": 0
    //                 },
    //                 {
    //                     "type": "field_number",
    //                     "name": "Y",
    //                     "value": 0
    //                 },
    //                 {
    //                     "type": "field_number",
    //                     "name": "Z",
    //                     "value": 0
    //                 }
    //             ],
    //             "output": "Vector3D", // Or whatever type it outputs
    //             "colour": 230, // Example color
    //             "tooltip": "A shadow block for a 3D vector.",
    //             "helpUrl": ""
    //         });
    //     }
    // };

    // -- Colours Category ---:/

    Blockly.Blocks['minecraft_coloured_block_picker'] = {
      init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldMinecraftColour(MCED.Colours[0].id), "MINECRAFT_COLOUR_ID");
            // The second argument to FieldMinecraftColour (opt_validator) is optional.
            // MINECRAFT_COLOURS[0].id sets 'WHITE' as the default.
        this.setOutput(true, "MinecraftColour"); // This block outputs our custom colour type
        this.setColour("%{BKY_COLOUR_HUE}"); // Use Blockly's standard colour hue
        this.setTooltip("Select a Minecraft block colour.");
      }
    };

    // --- Position Category ---:/

    Blockly.Blocks['minecraft_matrix_3d_elements'] = {
        init: function () {
            this.appendDummyInput().appendField("Rotation Matrix (Elements)");
            this.appendValueInput("R00").setCheck("Number").setAlign('RIGHT').appendField("r00");
            this.appendValueInput("R01").setCheck("Number").setAlign('RIGHT').appendField("r01");
            this.appendValueInput("R02").setCheck("Number").setAlign('RIGHT').appendField("r02");
            this.appendValueInput("R10").setCheck("Number").setAlign('RIGHT').appendField("r10");
            this.appendValueInput("R11").setCheck("Number").setAlign('RIGHT').appendField("r11");
            this.appendValueInput("R12").setCheck("Number").setAlign('RIGHT').appendField("r12");
            this.appendValueInput("R20").setCheck("Number").setAlign('RIGHT').appendField("r20");
            this.appendValueInput("R21").setCheck("Number").setAlign('RIGHT').appendField("r21");
            this.appendValueInput("R22").setCheck("Number").setAlign('RIGHT').appendField("r22");
            this.setOutput(true, "3DMatrix");
            this.setColour(210); // A different color for matrices
            this.setTooltip("Define a 3x3 rotation matrix by its elements.");
            this.setInputsInline(false); // Easier to read for 9 inputs

            const matrix_elements = ["R00", "R01", "R02", "R10", "R11", "R12", "R20", "R21", "R22"];
            MCED.Defaults.values.minecraft_matrix_3d_elements = {};
            matrix_elements.forEach((el, index) => {
                let val = (index % 4 === 0) ? 1 : 0; // For identity matrix diagonal
                MCED.Defaults.values.minecraft_matrix_3d_elements[el] = {
                    shadow: `<shadow type="math_number"><field name="NUM">${val}</field></shadow>`
                };
            });

            MCED.BlocklyUtils.configureShadow(this, "R00");
            MCED.BlocklyUtils.configureShadow(this, "R01");
            MCED.BlocklyUtils.configureShadow(this, "R02");
            MCED.BlocklyUtils.configureShadow(this, "R10");
            MCED.BlocklyUtils.configureShadow(this, "R11");
            MCED.BlocklyUtils.configureShadow(this, "R12");
            MCED.BlocklyUtils.configureShadow(this, "R20");
            MCED.BlocklyUtils.configureShadow(this, "R21");
            MCED.BlocklyUtils.configureShadow(this, "R22");
        }
    };

    Blockly.Blocks['minecraft_matrix_3d_euler'] = {
        init: function () {
            this.appendDummyInput().appendField("Rotation Matrix (Euler Angles)");
            this.appendValueInput("YAW")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Yaw (Y, degrees)");
            this.appendValueInput("PITCH")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Pitch (X, degrees)");
            this.appendValueInput("ROLL")
                .setCheck("Number")
                .setAlign('RIGHT')
                .appendField("Roll (Z, degrees)");
            this.setOutput(true, "3DMatrix");
            this.setColour(210);
            this.setTooltip("Define a 3x3 rotation matrix from Euler angles (yaw, pitch, roll).");
            this.setInputsInline(false);

            MCED.Defaults.values.minecraft_matrix_3d_euler = { // For shadow on other blocks
                YAW: {shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>'},
                PITCH: {shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>'},
                ROLL: {shadow: '<shadow type="math_number"><field name="NUM">0</field></shadow>'}
            };

            MCED.BlocklyUtils.configureShadow(this, "YAW");
            MCED.BlocklyUtils.configureShadow(this, "PITCH");
            MCED.BlocklyUtils.configureShadow(this, "ROLL");
        }
    };

    Blockly.Blocks['minecraft_vector_3d'] = {
      init: function() {
        // We no longer need the isInFlyout check, as this design works well everywhere.
        this.appendValueInput("X")
            .setCheck("Number") // This input will only accept blocks that output a Number
            .setAlign('RIGHT')
            .appendField("Vec3 x");
        this.appendValueInput("Y")
            .setCheck("Number")
            .setAlign('RIGHT')
            .appendField("y");
        this.appendValueInput("Z")
            .setCheck("Number")
            .setAlign('RIGHT')
            .appendField("z");

        this.setOutput(true, "3DVector"); // The output type remains the same
        this.setColour(180); // Using the Vector Math color for consistency
        this.setTooltip("Creates a 3D vector from x, y, and z components. Accepts numbers or variables.");
        this.setInputsInline(true); // This keeps the x, y, z inputs on a single line
      }
    };
    Blockly.Blocks['minecraft_vector_delta'] = {
        init: function () {
            if (this.isInFlyout) {
                this.appendDummyInput()
                    .appendField('vector delta');
                this.setOutput(true, "3DVector");
                this.setColour(160);
            } else {
                this.appendDummyInput()
                    .appendField("x:")
                    .appendField(new Blockly.FieldNumber(1), "X") // Use FieldNumber
                    .appendField("y:")
                    .appendField(new Blockly.FieldNumber(0), "Y")
                    .appendField("z:")
                    .appendField(new Blockly.FieldNumber(0), "Z");
                this.setOutput(true, "3DVector");
                this.setColour(160);
            }
        }
    };

    Blockly.Blocks['minecraft_position_player'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("player position");
            this.setOutput(true, "3DVector");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_player_tile'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("player tile position");
            this.setOutput(true, "3DVector");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_here'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("here");
            this.setOutput(true, '3DVector');
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_get_direction'] = {
        init: function () {
            this.appendDummyInput()
                .appendField("player direction");
            this.setOutput(true, "3DVector");
            this.setColour(160);
        }
    };

    Blockly.Blocks['minecraft_position_get_compass_direction'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("player compass direction");
        this.setOutput(true, "String"); // This block returns a String (e.g., "N", "SW")
        this.setColour(160); // The "Position" category color
        this.setTooltip("Returns the cardinal or intercardinal direction the player is facing (N, NE, E, SE, S, SW, W, NW).");
      }
    };

    // --- Vector Math Category ---:/

    Blockly.Blocks['minecraft_vector_get_attribute'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("get component")
            .appendField(new Blockly.FieldDropdown([
                ["x", "X"],
                ["y", "Y"],
                ["z", "Z"]
            ]), "COMPONENT")
            .appendField("of");
        this.appendValueInput("VECTOR")
            .setCheck("3DVector");
        this.setOutput(true, "Number");
        this.setColour(180);
        this.setTooltip("Gets the x, y, or z component of a vector.");
        this.setInputsInline(true);
      }
    };

    // Block 1: For operations that take two VECTORS and return a VECTOR (Add, Subtract, Cross Product)
    Blockly.Blocks['minecraft_vector_binary_op'] = {
      init: function() {
        this.appendValueInput("A").setCheck("3DVector");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([
                ["+", "ADD"],
                ["-", "SUBTRACT"],
                ["× (cross product)", "CROSS"]
            ]), "OP");
        this.appendValueInput("B").setCheck("3DVector");
        this.setInputsInline(true);
        this.setOutput(true, "3DVector");
        this.setColour(180);
        this.setTooltip("Performs vector addition, subtraction, or cross product.");

          MCED.Defaults.values['minecraft_vector_binary_op'] = {
              A: {shadow: MCED.VECTOR_3D_SHADOW},
              B: {shadow: MCED.VECTOR_3D_SHADOW}
          };

          MCED.BlocklyUtils.configureShadow(this,"A");
          MCED.BlocklyUtils.configureShadow(this,"B");
      }
    };

    // Block 2: For operations that take a VECTOR and a NUMBER and return a VECTOR (Scalar Multiply)
    Blockly.Blocks['minecraft_vector_scalar_multiply'] = {
      init: function() {
        this.appendValueInput("A").setCheck("3DVector");
        this.appendDummyInput().appendField("×"); // Simple multiplication symbol
        this.appendValueInput("B").setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "3DVector");
        this.setColour(180);
        this.setTooltip("Multiplies a vector by a scalar number.");
          MCED.Defaults.values['minecraft_vector_scalar_multiply'] = {
              A: {shadow: MCED.VECTOR_3D_SHADOW},
              B: {shadow: '<shadow type="math_number"><field name="NUM">1</field></shadow>'}
          };

          MCED.BlocklyUtils.configureShadow(this,"A");
          MCED.BlocklyUtils.configureShadow(this,"B");
      }
    };

    // Block 3: For operations that take two VECTORS and return a NUMBER (Dot Product)
    Blockly.Blocks['minecraft_vector_dot_product'] = {
      init: function() {
        this.appendValueInput("A").setCheck("3DVector");
        this.appendDummyInput().appendField("• (dot product)");
        this.appendValueInput("B").setCheck("3DVector");
        this.setInputsInline(true);
        this.setOutput(true, "Number"); // Note the different output type
        this.setColour(210); // Use a different color to indicate it returns a Number
        this.setTooltip("Calculates the dot product of two vectors, returning a number.");
          MCED.Defaults.values['minecraft_vector_dot_product'] = {
              A: {shadow: MCED.VECTOR_3D_SHADOW},
              B: {shadow: MCED.VECTOR_3D_SHADOW}
          };

          MCED.BlocklyUtils.configureShadow(this,"A");
          MCED.BlocklyUtils.configureShadow(this,"B");
      }
    };

    // Block 4: For Matrix * Vector multiplication
    Blockly.Blocks['minecraft_matrix_vector_multiply'] = {
      init: function() {
        this.appendValueInput("B").setCheck("3DVector").appendField("Rotate vector");
        this.appendValueInput("A").setCheck("3DMatrix").appendField("by matrix");
        this.setInputsInline(true);
        this.setOutput(true, "3DVector");
        this.setColour(180);
        this.setTooltip("Rotates a vector by a transformation matrix.");
          MCED.Defaults.values['minecraft_matrix_vector_multiply'] = {
              A: {shadow: '<shadow type="minecraft_matrix_3d_euler"></shadow>'},
              B: {shadow: MCED.VECTOR_3D_SHADOW}
          };

          MCED.BlocklyUtils.configureShadow(this,"A");
          MCED.BlocklyUtils.configureShadow(this,"B");
      }
    };

    Blockly.Blocks['time_sleep'] = {
        init: function() {
            this.appendValueInput("SECONDS")
                .setCheck("Number")
                .appendField("wait for");
            this.appendDummyInput()
                .appendField("seconds");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(120); // A color often used for timing/flow control
            this.setTooltip("Pauses the program for a specified number of seconds.");
            this.setInputsInline(true);
        }
    };
}

