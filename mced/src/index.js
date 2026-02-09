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

/**
 * Updated for Step 3: Async metadata extraction.
 * Fetches predicted name/category AND available categories for the dropdown.
 */
window.prepareAndOpenSaveModal = async () => {
    try {
        // We await the metadata because it now fetches categories from the SQLite DB
        const detail = await PowerManager.getPowerMetadata(workspace);
        window.dispatchEvent(new CustomEvent('open-save-modal', { detail }));
    } catch (error) {
        console.error("Failed to prepare save modal:", error);
        // Fallback with empty defaults if the database query fails
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
            'shift': ['! @ # $ % ^ & * ( ) _ {bksp}', 'Q W E R T Y U I O P { }', 'A S D F G H J K L : "', '{shift} Z X C V B N M < > ?', '{numpad} {space}'],
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

/**
 * --- Main Initialization ---
 */
async function init() {
    // 1. Blockly Setup
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

    const toolboxUrl = new URL('./toolbox.xml', import.meta.url);
    const toolboxXml = await fetch(toolboxUrl).then(r => r.text()).catch(() => '<xml></xml>');

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
            display.textContent = pythonGenerator.workspaceToCode(workspace);
            if (window.Prism) Prism.highlightElement(display);
        }
    });

    workspace.addChangeListener((e) => {
        if (!e.isUiEvent) { debouncedAutosave(); debouncedCodeUpdate(); }
    });

    // 4. Button Wiring (Delegating to PowerManager)
    document.getElementById('confirmSaveButton')?.addEventListener('click', async () => {
        const form = document.getElementById('savePowerForm');
        if (!form) return;
        const formData = Object.fromEntries(new FormData(form).entries());
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
                if (powerData.blockly_json.blocks?.blocks) {
                    powerData.blockly_json.blocks.blocks.forEach(b => {
                        if (b.type.startsWith('procedures_def')) b.collapsed = true;
                        Blockly.serialization.blocks.append(b, workspace);
                    });
                    workspace.cleanUp();
                }
            } finally { Blockly.Events.enable(); }
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