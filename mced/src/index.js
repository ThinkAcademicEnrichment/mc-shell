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

import { initializeHtmxListeners } from './lib/htmx_listeners.js';
import { defineMineCraftConstants, MCED } from "./lib/constants.mjs";
import { defineMineCraftBlocklyUtils } from "./lib/utils.mjs";
import { registerAllBlocks } from "./blocks/registry.mjs";
import { registerAllGenerators } from "./generators/python/registry.mjs";

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

// Make Alpine globally available for HTML x-data attributes
window.Alpine = Alpine;

/**
 * --- Utility Functions ---
 */

/**
 * Standard debounce to limit execution frequency of heavy operations.
 */
function debounce(func, timeout = 500) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

/**
 * Escapes regex special characters.
 */
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Cleans ANSI escape codes from terminal output strings.
 */
function stripAnsi(str) {
    const ansiRegex = /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g;
    return str.replace(ansiRegex, '');
}

/**
 * --- Library & Saving Operations ---
 */

/**
 * Prepares the Save Modal by inspecting the workspace for function definitions.
 * Attached to window for access from the Sidebar UI.
 */
window.prepareAndOpenSaveModal = function() {
    let powerName = '';
    let powerDescription = '';
    let category = 'Workspaces';

    const topBlocks = workspace.getTopBlocks(false);
    const funcDefBlock = topBlocks.find(b =>
        b.type === 'procedures_defnoreturn' || b.type === 'procedures_defreturn'
    );

    if (funcDefBlock) {
        powerName = funcDefBlock.getFieldValue('NAME');
        powerDescription = funcDefBlock.getCommentText() || '';
        category = 'Powers';
    }

    window.dispatchEvent(new CustomEvent('open-save-modal', {
        detail: { name: powerName, description: powerDescription, category: category }
    }));
};

/**
 * Deletes a power from the library and triggers a UI refresh.
 */
window.handleDeletePower = async function(powerId) {
    if (!powerId) return;
    try {
        const response = await fetch(`/api/power/${powerId}`, { method: 'DELETE' });
        if (response.ok) {
            window.dispatchEvent(new CustomEvent('library-changed', { bubbles: true }));
        } else {
            console.error('Failed to delete power:', response.status);
        }
    } catch (error) {
        console.error('Network error while deleting power:', error);
    }
};

/**
 * Core logic for saving a power. Handles both functional "Powers" (with parameters)
 * and generic "Workspaces" (full scripts).
 */
async function handleSavePower() {
    const form = document.getElementById('savePowerForm');
    if (!form) return;

    const formData = Object.fromEntries(new FormData(form).entries());
    if (!formData.name) {
        alert("Please enter a name for your power.");
        return;
    }

    const blocklyJson = Blockly.serialization.workspaces.save(workspace);
    const topBlocks = workspace.getTopBlocks(true);
    const funcDefBlock = topBlocks.find(b =>
        b.type === 'procedures_defnoreturn' || b.type === 'procedures_defreturn'
    );

    let powerDataObject = {
        name: formData.name,
        description: formData.description,
        category: formData.category || "Workspaces",
        power_id: formData.power_id || null,
        blockly_json: blocklyJson,
        dependencies: []
    };

    if (funcDefBlock) {
        // FUNCTIONAL MODE: Extract specific function data
        const powerFunctionName = funcDefBlock.getFieldValue('NAME');
        const argNames = funcDefBlock.getVars();

        // Generate pure function code
        const funcNameForCode = pythonGenerator.nameDB_.getName(powerFunctionName, MCED.BlocklyNameTypes.PROCEDURE);
        const argsForDef = argNames.map(name => pythonGenerator.nameDB_.getName(name, MCED.BlocklyNameTypes.VARIABLE));
        let funcBody = pythonGenerator.statementToCode(funcDefBlock, 'STACK') || (pythonGenerator.INDENT + 'pass\n');

        if (funcDefBlock.type === 'procedures_defreturn') {
            const ret = pythonGenerator.valueToCode(funcDefBlock, 'RETURN', pythonGenerator.ORDER_NONE) || 'None';
            funcBody += pythonGenerator.INDENT + 'return ' + ret + '\n';
        }

        powerDataObject.function_name = powerFunctionName;
        powerDataObject.python_code = `def ${funcNameForCode}(self, ${argsForDef.join(', ')}):\n${funcBody}`;

        // Introspect call block for parameter types
        if (argNames.length > 0) {
            const callBlock = topBlocks.find(b =>
                (b.type === 'procedures_callnoreturn' || b.type === 'procedures_callreturn') &&
                b.getFieldValue('NAME') === powerFunctionName
            );

            if (!callBlock) {
                alert(`Error: You must have a "call ${powerFunctionName}" block to define parameter types.`);
                return;
            }

            powerDataObject.parameters = argNames.map((name, i) => {
                const input = callBlock.getInput('ARG' + i);
                const check = input?.connection?.targetBlock()?.outputConnection?.getCheck();
                return { name, type: check ? check[0] : 'String', default: 0 };
            });
        }
    } else {
        // SCRIPT MODE: Save entire workspace code
        powerDataObject.python_code = pythonGenerator.workspaceToCode(workspace);
        powerDataObject.function_name = null;
        powerDataObject.parameters = [];
    }

    try {
        const response = await fetch('/api/powers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(powerDataObject),
        });
        if (response.ok) {
            window.dispatchEvent(new CustomEvent('library-changed'));
            alert(`Saved "${formData.name}" successfully!`);
        }
    } catch (error) {
        console.error('Save error:', error);
    }
}

/**
 * --- Workspace Persistence ---
 */

function autosaveWorkspace() {
    if (!workspace) return;
    try {
        const json = Blockly.serialization.workspaces.save(workspace);
        localStorage.setItem(AUTOSAVE_KEY, JSON.stringify(json));
    } catch (e) {
        console.error('Autosave failed:', e);
    }
}

function loadAutosavedWorkspace() {
    try {
        const saved = localStorage.getItem(AUTOSAVE_KEY);
        if (saved) {
            const json = JSON.parse(saved);
            if (json && json.blocks) return json;
        }
    } catch (e) {
        console.error('Load autosave failed:', e);
    }
    return null;
}

/**
 * --- Execution & IPython Integration ---
 */

async function executeIPythonCommand(command, commandArguments) {
    try {
        const response = await fetch('/api/ipython_magic', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ command, arguments: commandArguments })
        });
        const data = await response.json();
        if (data.error) throw new Error(data.error);
        return data.output;
    } catch (error) {
        console.error("IPython API Error:", error);
        return null;
    }
}

function buildDebugPayload(workspace) {
    const topBlocks = workspace.getTopBlocks(false);
    if (topBlocks.length === 0) return null;

    const definitionTypes = ['procedures_defnoreturn', 'procedures_defreturn'];
    const scriptBlocks = topBlocks.filter(b => !definitionTypes.includes(b.type) && b.isEnabled());
    const definitionBlocks = topBlocks.filter(b => definitionTypes.includes(b.type) && b.isEnabled());

    if (scriptBlocks.length > 0) {
        return { type: 'script', code: pythonGenerator.workspaceToCode(workspace) };
    } else if (definitionBlocks.length > 0) {
        return {
            type: 'functional',
            code: pythonGenerator.workspaceToCode(workspace),
            function_name: definitionBlocks[0].getFieldValue('NAME')
        };
    }
    return null;
}

/**
 * --- UI & Event Listeners ---
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
            if (button === "{shift}" || button === "{lock}") {
                const nextLayout = keyboardInstance.options.layoutName === "default" ? "shift" : "default";
                keyboardInstance.setOptions({ layoutName: nextLayout });
            } else if (button === "{numpad}") {
                keyboardInstance.setOptions({ layoutName: "numpad" });
            } else if (button === "{abc}") {
                keyboardInstance.setOptions({ layoutName: "default" });
            } else if (keyboardInstance.options.layoutName === "shift" && !button.includes("{")) {
                keyboardInstance.setOptions({ layoutName: "default" });
            }
        },
        layout: {
            'default': ['1 2 3 4 5 6 7 8 9 0 - {bksp}', 'q w e r t y u i o p [ ]', 'a s d f g h j k l ; \'', '{shift} z x c v b n m , . /', '{numpad} {space}'],
            'shift': ['! @ # $ % ^ & * ( ) _ {bksp}', 'Q W E R T Y U I O P { }', 'A S D F G H J K L : "', '{shift} Z X C V B N M < > ?', '{numpad} {space}'],
            'numpad': ['1 2 3', '4 5 6', '7 8 9', '{abc} 0 . {bksp}']
        },
        display: { '{shift}': 'Shift', '{bksp}': '⌫', '{space}': 'Space', '{numpad}': '123', '{abc}': 'ABC' },
        preventMouseDownDefault: true
    });

    // Global listener to track focus for the keyboard
    document.addEventListener('focusin', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
            currentKeyboardInput = e.target;
            keyboardInstance.setInput(currentKeyboardInput.value);
        }
    });
}

/**
 * --- Initialization ---
 */

async function init() {
    // 1. Initialize Custom Dialogs
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

    // 2. Load Toolbox
    const toolboxUrl = new URL('./toolbox.xml', import.meta.url);
    const toolboxXml = await fetch(toolboxUrl).then(r => r.text()).catch(() => '<xml></xml>');

    // 3. Inject Blockly
    workspace = Blockly.inject('blocklyDiv', {
        toolbox: toolboxXml,
        trashcan: { position: { vertical: 'top', horizontal: 'right' } },
        grid: { spacing: 26, length: 3, colour: '#ccc', snap: true },
        zoom: { controls: true, wheel: true, startScale: 1.0, maxScale: 3, minScale: 0.3, scaleSpeed: 1.2 },
        move: { scrollbars: true, drag: true, wheel: false }
    });

    // Flyout Configuration (Keep open for dragging)
    const flyout = workspace.getFlyout();
    const originalHide = flyout.hide;
    flyout.hide = function() {
        if (window.isBlocklyPromptOpen) originalHide.call(this);
    };

    // Close flyout when clicking the workspace background (not a block)
    workspace.addChangeListener((event) => {
        if (event.type === Blockly.Events.CLICK && !event.blockId) {
            originalHide.call(flyout);
        }
    });

    // 4. Register Registries
    defineMineCraftBlocklyUtils(Blockly);
    defineMineCraftConstants(Blockly);
    registerAllBlocks(Blockly);
    registerAllGenerators(pythonGenerator);

    // 5. Initial Load
    const initialJson = loadAutosavedWorkspace() || await fetch('./workspace.json').then(r => r.json()).catch(() => BLANK_WORKSPACE_JSON);
    Blockly.serialization.workspaces.load(initialJson, workspace);

    // 6. Setup Listeners
    setupKeyboard();
    initializeHtmxListeners();
    window.addEventListener('beforeunload', autosaveWorkspace);

    const debouncedAutosave = debounce(autosaveWorkspace, 1000);
    const debouncedCodeUpdate = debounce(() => {
        const code = pythonGenerator.workspaceToCode(workspace);
        const display = document.getElementById('pythonCodeDisplay');
        if (display) {
            display.textContent = code;
            if (window.Prism) Prism.highlightElement(display);
        }
    });

    workspace.addChangeListener((e) => {
        if (e.isUiEvent) return;
        debouncedAutosave();
        debouncedCodeUpdate();
    });

    // 7. Button Wiring
    document.getElementById('confirmSaveButton')?.addEventListener('click', handleSavePower);
    document.getElementById('clearWorkspaceButton')?.addEventListener('click', () => {
        if (confirm("Clear workspace?")) {
            workspace.clear();
            localStorage.removeItem(AUTOSAVE_KEY);
        }
    });

    document.getElementById('executePowerButton')?.addEventListener('click', async () => {
        const payload = buildDebugPayload(workspace);
        if (!payload) return;
        const output = await executeIPythonCommand('%mc_debug_and_define', JSON.stringify(payload));
        if (output) {
            const idMatch = stripAnsi(output).match(/MCED_EXECUTION_ID:(\S+)/);
            if (idMatch) lastExecutedPowerId = idMatch[1];
        }
    });

    document.getElementById('cancelPowerButton')?.addEventListener('click', async () => {
        if (lastExecutedPowerId) {
            await executeIPythonCommand('%mc_cancel_power', lastExecutedPowerId);
            lastExecutedPowerId = null;
        }
    });

    // 8. Handle Side-Panel Resizing
    const triggerResize = debounce(() => { if (workspace) Blockly.svgResize(workspace); }, 100);
    window.addEventListener('resize', triggerResize);
    document.querySelector('.editor-layout')?.addEventListener('transitionend', (e) => {
        if (e.propertyName === 'width') triggerResize();
    });

    // 9. Blockly Input Keyboard Sync
    const widgetDiv = Blockly.WidgetDiv.getDiv();
    new MutationObserver(() => {
        const input = widgetDiv.querySelector('input');
        if (input && keyboardInstance) {
            currentKeyboardInput = input;
            keyboardInstance.setInput(input.value);
        }
    }).observe(widgetDiv, { childList: true });

    // 10. External Load Event
    document.body.addEventListener('loadPower', (e) => {
        const { powerData, mode } = e.detail;
        if (mode === 'replace') {
            workspace.clear();
            Blockly.serialization.workspaces.load(powerData.blockly_json, workspace);
        } else {
            // Append Mode Logic...
            Blockly.Events.disable();
            try {
                if (powerData.blockly_json.blocks?.blocks) {
                    powerData.blockly_json.blocks.blocks.forEach(b => {
                        if (b.type.startsWith('procedures_def')) b.collapsed = true;
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

    // Final Polish
    triggerResize();
    debouncedCodeUpdate();
}

document.addEventListener('DOMContentLoaded', () => {
    Alpine.start();
    init();
});