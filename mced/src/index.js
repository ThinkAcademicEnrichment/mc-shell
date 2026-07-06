import Alpine from 'alpinejs';
import 'htmx.org';
import 'htmx-ext-json-enc';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-okaidia.css';
import Keyboard from 'simple-keyboard';
import 'simple-keyboard/build/css/index.css';

import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';

// --- THE CRITICAL FIX ---
// Expose the bundled modules to the global window object
// so the dynamically injected all.js script can see them.
window.Blockly = Blockly;
window.pythonGenerator = pythonGenerator;

// Safety net: ensure the Blocks registry is initialized
window.Blockly.Blocks = window.Blockly.Blocks || {};
import { initializeHtmxListeners } from './lib/htmx_listeners.js';
import { defineMineCraftConstants } from "./lib/constants.mjs";
import { defineMineCraftBlocklyUtils } from "./lib/utils.mjs";

import { registerAllBlocks } from "./blocks/registry.mjs";
import { registerAllGenerators } from "./generators/python/registry.mjs";

import * as PowerManager from './lib/power_manager.js';

/**
 * --- Application State ---
 */
let workspace;
let lastExecutedPowerId = null;
let currentKeyboardInput = null;
let keyboardInstance = null;

const AUTOSAVE_KEY = 'mcEdWorkspaceAutosave';
const BLANK_WORKSPACE_JSON = {
    "blocks": { "languageVersion": 0, "blocks": [] },
    "variables": []
};

window.Alpine = Alpine;

/**
 * --- Utilities ---
 */
function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function stripAnsi(str) {
    const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
    return str.replace(ansiRegex, '');
}

/**
 * --- Global Bridge (for HTML events) ---
 */

window.prepareAndOpenSaveModal = async () => {
    try {
        if (!workspace) return;

        const topBlocks = workspace.getTopBlocks(false);

        const funcDefBlock = topBlocks.find(b =>
            (b.type === 'procedures_defnoreturn' || b.type === 'procedures_defreturn') && !b.isCollapsed()
        ) || topBlocks.find(b =>
            b.type === 'procedures_defnoreturn' || b.type === 'procedures_defreturn'
        );

        let name = '';
        let description = '';
        let category = 'Workspaces';

        if (funcDefBlock) {
            name = funcDefBlock.getFieldValue('NAME');
            description = funcDefBlock.getCommentText() || '';

            const blockTypes = workspace.getAllBlocks(false).map(b => b.type);
            if (blockTypes.some(t => t.includes('DigitalGeometry'))) {
                category = 'Powers/Geometry';
            } else if (blockTypes.some(t => t.includes('PlayerActions'))) {
                category = 'Powers/Player';
            } else {
                category = 'Powers';
            }
        }

        const availableCategories = await PowerManager.getExistingCategories();

        const detail = { name, description, category, availableCategories };
        window.dispatchEvent(new CustomEvent('open-save-modal', { detail }));
    } catch (error) {
        console.error("Failed to prepare save modal:", error);
        window.dispatchEvent(new CustomEvent('open-save-modal', {
            detail: { name: '', description: '', category: 'Workspaces', availableCategories: [] }
        }));
    }
};

window.handleDeletePower = async (powerId) => {
    if (await PowerManager.deletePower(powerId)) {
        window.dispatchEvent(new CustomEvent('library-changed', { bubbles: true }));
    }
};

/**
 * --- Workspace Persistence ---
 */
function autosaveWorkspace() {
    if (!workspace) return;
    try {
        const json = Blockly.serialization.workspaces.save(workspace);
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(json));
    } catch (e) { console.error('Autosave failed:', e); }
}

function loadAutosavedWorkspace() {
    try {
        const saved = localStorage.getItem(AUTOSAVE_KEY);
        if (saved) {
            const json = JSON.parse(saved);
            if (json?.blocks) return json;
        }
    } catch (e) { console.error('Load failed:', e); }
    return null;
}

/**
 * --- UI & Input ---
 */
function setupKeyboard() {
    keyboardInstance = new Keyboard({
        onChange: input => {
            if (currentKeyboardInput) {
                currentKeyboardInput.value = input;
                currentKeyboardInput.dispatchEvent(new Event('input', { bubbles: true }));
            }
        },
        onKeyPress: button => {
            const layouts = { "{shift}": "shift", "{lock}": "shift", "{numpad}": "numpad", "{abc}": "default" };
            if (layouts[button]) {
                keyboardInstance.setOptions({ layoutName: layouts[button] });
            } else if (keyboardInstance.options.layoutName === "shift" && !button.includes("{")) {
                keyboardInstance.setOptions({ layoutName: "default" });
            }
        },
        layout: {
            'default': ['1 2 3 4 5 6 7 8 9 0 - {bksp}', 'q w e r t y u i o p [ ]', 'a s d f g h j k l ; \'', '{shift} z x c v b n m , . /', '{numpad} {space}'],
            'shift': ['! @ # $ % ^ & * ( ) _ {bksp}', 'Q W E R T Y U I O P { }', 'A S D F G H J K L : "', '{shift} Z X C V B n m < > ?', '{numpad} {space}'],
            'numpad': ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 . {bksp}']
        },
        display: { '{shift}': 'Shift', '{bksp}': '⌫', '{space}': 'Space', '{numpad}': '123', '{abc}': 'ABC' },
        preventMouseDownDefault: true
    });

    document.addEventListener('focusin', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            currentKeyboardInput = e.target;
            keyboardInstance.setInput(currentKeyboardInput.value);
        }
    });
}

// Helper to dynamically load a script and return a Promise
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

/**
 * --- Main Initialization ---
 */
async function init() {
    // 0. Retreive App Config
    // 1. Ask the server what environment we are in
    const response = await fetch('/config/version');
    const config = await response.json();
    console.log("Environment Config:", config);
    const version = config.version;

    // ---------------------------------------------------------
    // 1. Fetch and execute the dynamic Blockly block definitions
    // ---------------------------------------------------------
    console.log(`Loading block definitions for version ${version}...`);
    try {
        // We request 'all.js' to get blocks, items, entities, and actions in one hit
        await loadScript(`/config/${version}/all.js`);
        console.log("Block definitions loaded successfully.");
    } catch (error) {
        console.error("Critical error loading blocks. Blockly may not render correctly.", error);
    }

    // 2. Setup the Blockly Prompt
    Blockly.dialog.setPrompt((message, defaultValue, callback) => {
        window.isBlocklyPromptOpen = true;
        if (document.activeElement) document.activeElement.blur();
        window.dispatchEvent(new CustomEvent('blockly-prompt', {
            detail: { message, defaultValue, onComplete: (val) => {
                window.isBlocklyPromptOpen = false;
                callback(val);
                workspace.markFocused();
            }}
        }));
    });

    // 3. Inject Workspace using the bundled XML
    // Grab the injected XML, fallback to empty string if it failed
    const toolboxXml = window.MC_TOOLBOX_XML || '<xml></xml>';

    // const toolboxUrl = new URL('./toolbox.xml', import.meta.url);
    // const toolboxXml = await fetch(toolboxUrl).then(r => r.text()).catch(() => '<xml></xml>');

    workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolboxXml,
        trashcan: { position: { vertical: 'top', horizontal: 'right' } },
        grid: { spacing: 26, length: 3, colour: '#ccc', snap: true },
        zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 },
        move: { scrollbars: true, drag: true, wheel: false }
    });

    const flyout = workspace.getFlyout();
    const originalHide = flyout.hide;
    flyout.hide = function() { if (window.isBlocklyPromptOpen) originalHide.call(this); };

    workspace.addChangeListener((event) => {
        if (event.type === Blockly.Events.CLICK && !event.blockId) originalHide.call(flyout);
    });

    // 2. Load Content
    defineMineCraftBlocklyUtils(Blockly);
    defineMineCraftConstants(Blockly);
    registerAllBlocks(Blockly);
    registerAllGenerators(pythonGenerator);

    const initialJson = loadAutosavedWorkspace() || await fetch('./workspace.json').then(r => r.json()).catch(() => BLANK_WORKSPACE_JSON);
    Blockly.serialization.workspaces.load(initialJson, workspace);

    // 3. Orchestration
    setupKeyboard();
    initializeHtmxListeners();
    window.addEventListener('beforeunload', autosaveWorkspace);

    const debouncedAutosave = debounce(autosaveWorkspace, 1000);

    const debouncedCodeUpdate = debounce(() => {
        const display = document.getElementById('pythonCodeDisplay');
        if (display) {
            pythonGenerator.isSchematic = true;
            display.textContent = pythonGenerator.workspaceToCode(workspace);
            pythonGenerator.isSchematic = false;

            if (window.Prism) Prism.highlightElement(display);
        }
    });

    workspace.addChangeListener((e) => {
        if (!e.isUiEvent) { debouncedAutosave(); debouncedCodeUpdate(); }
    });

    workspace.addChangeListener((e) => {
        if (!e.isUiEvent) { debouncedAutosave(); debouncedCodeUpdate(); }

        if (e.type === Blockly.Events.BLOCK_CHANGE && e.element === 'collapsed') {
            setTimeout(() => {
                workspace.cleanUp();
            }, 50);
        }
    });

    // 4. Button Wiring (Delegating to PowerManager)
    document.getElementById('confirmSaveButton')?.addEventListener('click', async () => {
        const form = document.getElementById('savePowerForm');
        if (!form) return;

        const formData = Object.fromEntries(new FormData(form).entries());
        // NEW: Explicitly grab the checkbox, since unchecked boxes aren't serialized by FormData
        formData.admin_required = form.querySelector('#adminRequired').checked;

        try {
            if (await PowerManager.savePower(workspace, formData)) {
                window.dispatchEvent(new CustomEvent('library-changed'));
                alert(`Saved "${formData.name}" successfully!`);
            }
        } catch (e) { alert(e.message); }
    });

    document.getElementById('executePowerButton')?.addEventListener('click', async () => {
        const payload = PowerManager.buildDebugPayload(workspace);
        if (!payload) return;
        const out = await PowerManager.executeIPythonCommand('%mc_debug_and_define', JSON.stringify(payload));
        if (out) {
            const match = stripAnsi(out).match(/MCED_EXECUTION_ID:(\S+)/);
            if (match) lastExecutedPowerId = match[1];
        }
    });

    document.getElementById('cancelPowerButton')?.addEventListener('click', async () => {
        if (lastExecutedPowerId) {
            await PowerManager.executeIPythonCommand('%mc_cancel_power', lastExecutedPowerId);
            lastExecutedPowerId = null;
        }
    });

    document.getElementById('clearWorkspaceButton')?.addEventListener('click', () => {
        if (confirm("Clear workspace?")) {
            workspace.clear();
            localStorage.removeItem(AUTOSAVE_KEY);
        }
    });

    document.getElementById('leaveWorldButton')?.addEventListener('click', async () => {
        if (confirm("Are you sure you want to leave this world?")) {
            await PowerManager.executeIPythonCommand('%pp_leave_world', '');
            // Backend will emit the state_changed signal to handle the SPA logic
        }
    });

    // 5. Layout Resizing
    const triggerResize = debounce(() => { if (workspace) Blockly.svgResize(workspace); }, 100);
    window.addEventListener('resize', triggerResize);
    document.querySelector('.editor-layout')?.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'width') triggerResize();
    });

    const widgetDiv = Blockly.WidgetDiv.getDiv();
    new MutationObserver(() => {
        const input = widgetDiv.querySelector('input');
        if (input && keyboardInstance) {
            currentKeyboardInput = input;
            keyboardInstance.setInput(input.value);
        }
    }).observe(widgetDiv, { childList: true });

    // 6. External Load Event
    document.body.addEventListener('loadPower', (e) => {
        const { powerData, mode } = e.detail;
        if (mode === 'replace') {
            workspace.clear();
            Blockly.serialization.workspaces.load(powerData.blockly_json, workspace);
        } else {
            Blockly.Events.disable();
            try {
                // 1. Deep clone the JSON so we don't permanently mutate the source data
                const importData = JSON.parse(JSON.stringify(powerData.blockly_json));

                // Map to track which variable IDs got a new name (ID -> New Name)
                const renamedVars = {};

                // 2. Handle Variables & Detect Collisions
                if (importData.variables) {
                    importData.variables.forEach(v => {
                        // Check if a variable with this name already exists in the workspace
                        const existingVar = workspace.getVariable(v.name, v.type);

                        if (existingVar && existingVar.getId() !== v.id) {
                            // Collision detected! Find the lowest available integer suffix.
                            let count = 2; // Start at 2 (e.g., 'i' becomes 'i2')
                            let newName = `${v.name}${count}`;

                            // Keep incrementing until we find a name that is completely free
                            while (workspace.getVariable(newName, v.type)) {
                                count++;
                                newName = `${v.name}${count}`;
                            }

                            renamedVars[v.id] = newName;
                            v.name = newName; // Update the name in the JSON array
                        }

                        // Create the variable in the workspace immediately.
                        // This ensures that if the imported JSON has multiple variables
                        // colliding, the while-loop above will "see" this newly created one.
                        if (!workspace.getVariableById(v.id)) {
                            workspace.createVariable(v.name, v.type, v.id);
                        }
                    });
                }

                // 3. Patch the Procedure Definition Blocks
                // We must update the hardcoded strings in the procedure's extraState
                // so the visual block signature matches the newly renamed variables.
                if (importData.blocks?.blocks && Object.keys(renamedVars).length > 0) {

                    // Recursive function to walk the block tree
                    const patchBlocks = (blocksArray) => {
                        blocksArray.forEach(b => {
                            // Patch the procedure declaration
                            if (b.type.startsWith('procedures_def') && b.extraState?.params) {
                                b.extraState.params.forEach(param => {
                                    if (renamedVars[param.id]) {
                                        param.name = renamedVars[param.id]; // Apply the new name
                                    }
                                });
                            }

                            // Recursively check nested blocks (inputs or next statements)
                            if (b.inputs) {
                                Object.values(b.inputs).forEach(input => {
                                    if (input.block) patchBlocks([input.block]);
                                });
                            }
                            if (b.next?.block) {
                                patchBlocks([b.next.block]);
                            }
                        });
                    };

                    patchBlocks(importData.blocks.blocks);
                }

                // 4. Safely Append the Blocks
                if (importData.blocks?.blocks) {
                    importData.blocks.blocks.forEach(b => {
                        if (b.type.startsWith('procedures_call')) {
                            return;
                        }

                        if (b.type.startsWith('procedures_def')) {
                            b.collapsed = true;
                        }
                        Blockly.serialization.blocks.append(b, workspace);
                    });
                    workspace.cleanUp();
                }
            } finally {
                Blockly.Events.enable();
            }
        }
        autosaveWorkspace();
    });

    triggerResize();
    debouncedCodeUpdate();
}

document.addEventListener('DOMContentLoaded', () => {
    Alpine.start();
    init();
});