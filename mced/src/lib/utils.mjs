// src/lib/utils.mjs
import {MCED} from "../lib/constants.mjs"; //Importing here!

export function defineMineCraftBlocklyUtils(Blockly) {


    Blockly.FieldMinecraftColour = class extends Blockly.FieldDropdown {
        constructor(defaultValueId, opt_validator) {
            super(Blockly.FieldMinecraftColour.menuGenerator, opt_validator);

            let initialValue = defaultValueId;
            if (!MCED.Colours.find(c => c.id === initialValue)) {
                initialValue = MCED.Colours.length > 0 ? MCED.Colours[0].id : 'WHITE';
            }
            this.setValue(initialValue);
        }

        /**
         * Generates the menu options with SVG data URIs for swatches.
         * @return {!Array<!Array<Object|string>>} Array of menu options.
         * @protected
         */
        static menuGenerator() {
            return MCED.Colours.map(color => {
                const swatchSize = 16; // Size of the swatch image
                const svgText =
                    `<svg xmlns="http://www.w3.org/2000/svg" width="${swatchSize + 60}" height="${swatchSize}">` + // Adjusted width for text
                    `<rect x="0" y="0" width="${swatchSize}" height="${swatchSize}" fill="${color.hex}" stroke="#888" stroke-width="1" rx="2" ry="2"></rect>` +
                    `<text x="${swatchSize + 5}" y="${swatchSize / 2 + 4}" font-family="sans-serif" font-size="12px" fill="#000000" dominant-baseline="middle">${color.name}</text>` + // Added text element
                    `</svg>`;
                const dataUri = 'data:image/svg+xml;base64,' + btoa(svgText);

                const imageObject = {
                    src: dataUri,
                    width: swatchSize + 60, // Adjust width to accommodate text in the SVG
                    height: swatchSize,
                    alt: color.name
                };

                return [imageObject, color.id]; // [ImageObject, value]
            });
        }

        /**
         * Returns the text to be displayed in the field itself (when closed).
         * This will now display the *name* of the color, as the swatch is in the menu.
         * @return {string} The text to display.
         * @protected
         * @override
         */
        getText_() {
            const selected = MCED.Colours.find(c => c.id === this.getValue());
            return selected ? selected.name : (this.getValue() || '');
        }

        initView() {
            super.initView();
            // No need for custom swatch rendering *on the field itself* with this menu approach,
            // unless you explicitly want it there too. The field will just show the text.
        }

        setValue(newValue) {
            const oldValue = this.getValue();
            super.setValue(newValue);
            if (newValue !== null && newValue !== oldValue) {
                if (this.sourceBlock_ && this.sourceBlock_.rendered) {
                    this.forceRerender(); // Text in field changes, so rerender
                }
            }
        }

        static fromJson(options) {
            const defaultValue = options['colour_id'] || (MCED.Colours.length > 0 ? MCED.Colours[0].id : 'WHITE');
            return new Blockly.FieldMinecraftColour(defaultValue, null);
        }
    };

    Blockly.fieldRegistry.register('field_minecraft_colour', Blockly.FieldMinecraftColour);
}