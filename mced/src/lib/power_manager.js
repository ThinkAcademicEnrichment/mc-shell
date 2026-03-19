import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';
import { MCED } from "./constants.mjs";

// --- SUBSTAGE 2A: Authentication Helper ---
// Safely retrieves the token and merges it with any existing headers
function getAuthHeaders(extraHeaders = {}) {
    const token = sessionStorage.getItem('GUI_AUTH_TOKEN');
    const headers = { ...extraHeaders };
    if (token) {
        headers['Authorization'] = 'Bearer ' + token;
    }
    return headers;
}

export async function executeIPythonCommand(command, commandArguments) {
    try {
        const response = await fetch('/api/ipython_magic', {
            method: 'POST',
            headers: getAuthHeaders({ 'Content-Type': 'application/json' }),
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

export async function getExistingCategories() {
    try {
        const response = await fetch('/api/powers/categories', {
            headers: getAuthHeaders()
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }
    return ["Powers", "Workspaces", "Utilities", "Powers/Geometry", "Powers/Player"];
}

export async function getPowerMetadata(workspace) {
    let powerName = '';
    let powerDescription = '';
    let category = 'Workspaces';

    const topBlocks = workspace.getTopBlocks(false);
    const funcDefBlock = topBlocks.find(b =>
        b.type === 'procedures_defnoreturn' || b.type === 'procedures_defreturn'
    );

    if (funcDefBlock) {
        powerName = funcDefBlock.getFieldValue('NAME');
        powerDescription = funcDefBlock.commentModel.text;

        const catBlock = topBlocks.find(b => b.type === 'power_category');
        if (catBlock) {
            category = catBlock.getFieldValue('CATEGORY');
        } else {
            category = "Powers";
        }
    }

    let powerDataObject = {
        power_id: '',
        name: powerName,
        description: powerDescription,
        category: category,
        python_code: '',
        xml_data: Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace)),
        function_name: null,
        parameters: [],
    };

    if (funcDefBlock) {
        const generatedCode = pythonGenerator.workspaceToCode(workspace);
        powerDataObject.function_name = powerName;
        const varModels = funcDefBlock.getVarModels();
        if (varModels && varModels.length > 0) {
            powerDataObject.parameters = varModels.map(vm => ({ name: vm.name, type: 'Any' }));
        }

        powerDataObject.python_code = generatedCode;
        const funcDefCode = pythonGenerator.blockToCode(funcDefBlock);

        if (funcDefCode) {
            const defIndex = powerDataObject.python_code.indexOf(funcDefCode);
            const insertPos = defIndex + funcDefCode.length;

            const headerLogic = `\n    try:\n`;
            const footerLogic = `\n    except PowerCancelledException:\n        pass\n`;

            const splitPos = powerDataObject.python_code.lastIndexOf('\n', insertPos - 1) + 1;

            const part1 = powerDataObject.python_code.slice(0, insertPos);
            const part2 = powerDataObject.python_code.slice(insertPos, splitPos);
            const part3 = powerDataObject.python_code.slice(splitPos);

            powerDataObject.python_code = part1 + headerLogic + part2 + footerLogic + part3;
        }

    } else {
        powerDataObject.python_code = pythonGenerator.workspaceToCode(workspace);
        powerDataObject.function_name = null;
        powerDataObject.parameters = [];
    }

    const token = sessionStorage.getItem('GUI_AUTH_TOKEN');
    console.log(token);
    const headers = { 'Content-Type': 'application/json' };
    if (token) {
        headers['Authorization'] = 'Bearer ' + token;
    }

    const response = await fetch('/api/powers', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(powerDataObject),
    });

    if (!response.ok) throw new Error(await response.text());
    return true;
}

export async function deletePower(powerId) {
    if (!powerId) return false;
    try {
        const response = await fetch(`/api/power/${powerId}`, { method: 'DELETE' });
        return response.ok;
    } catch (error) {
        console.error('Network error while deleting power:', error);
        return false;
    }
}

export async function savePower(workspace, formData) {
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
        dependencies: [],
        parameters: []
    };

    if (funcDefBlock) {
        pythonGenerator.init(workspace);
        const fullCode = pythonGenerator.workspaceToCode(workspace);
        const lines = fullCode.split('\n');

        let inInit = false;
        let extractedLines = [];
        let collectedImports = new Set();

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];

            // Harvest any required library imports Blockly generated
            if (line.startsWith('import ') || line.startsWith('from ')) {
                // FIXED: Wildcard imports (import *) are illegal inside Python functions.
                // The mcserver.py execution wrapper already provides these globally anyway!
                if (!line.includes('import *')) {
                    collectedImports.add(line.trim());
                }
                continue;
            }

            if (line.startsWith('    def __init__')) { inInit = true; continue; }
            if (inInit) {
                if (line.startsWith('        ') || line.trim() === '') continue;
                else inInit = false;
            }
            if (!inInit) {
                if (line.startsWith('    def run_program')) break;
                if (line.startsWith('    def ') || extractedLines.length > 0) extractedLines.push(line);
            }
        }

        powerDataObject.python_code = extractedLines.map(line => {
            return line.startsWith('    ') ? line.substring(4) : line;
        }).join('\n').trimEnd() + '\n';

        powerDataObject.function_name = funcDefBlock.getFieldValue('NAME');

        const argNames = funcDefBlock.getVars();
        if (argNames.length > 0) {
            const callBlock = topBlocks.find(b =>
                (b.type === 'procedures_callnoreturn' || b.type === 'procedures_callreturn') &&
                b.getFieldValue('NAME') === powerDataObject.function_name
            );

            if (!callBlock) throw new Error(`You must have a "call ${powerDataObject.function_name}" block to define types.`);

            powerDataObject.parameters = argNames.map((name, i) => {
                const input = callBlock.getInput('ARG' + i);
                const targetBlock = input?.connection?.targetBlock();
                const check = targetBlock?.outputConnection?.getCheck();

                let defaultValue = null;
                let pickerSource = null;

                if (targetBlock) {
                    if (targetBlock.type.match(/^mc_(block|item|entity)_picker_/)) {
                        pickerSource = targetBlock.type;
                    }

                    let codeTuple = pythonGenerator.blockToCode(targetBlock);
                    let pyCode = Array.isArray(codeTuple) ? codeTuple[0] : codeTuple;

                    if (pyCode !== undefined && pyCode !== null) {
                        pyCode = pyCode.trim();
                        if ((pyCode.startsWith("'") && pyCode.endsWith("'")) || (pyCode.startsWith('"') && pyCode.endsWith('"'))) {
                            defaultValue = pyCode.slice(1, -1);
                        } else if (!isNaN(Number(pyCode))) {
                            defaultValue = Number(pyCode);
                        } else if (pyCode === 'True') {
                            defaultValue = true;
                        } else if (pyCode === 'False') {
                            defaultValue = false;
                        } else if (pyCode.startsWith('Vec3(')) {
                            const vecMatch = pyCode.match(/Vec3\(([^,]+),\s*([^,]+),\s*([^)]+)\)/);
                            if (vecMatch && !isNaN(Number(vecMatch[1])) && !isNaN(Number(vecMatch[2])) && !isNaN(Number(vecMatch[3]))) {
                                defaultValue = { x: Number(vecMatch[1]), y: Number(vecMatch[2]), z: Number(vecMatch[3]) };
                            }
                        }
                    }
                }

                return { name, type: check ? check[0] : 'String', default: defaultValue, picker_source: pickerSource };
            });
        }

        // --- 3. Advanced Python String Surgery ---
        const sigRegex = new RegExp(`^([ \\t]*)def ${powerDataObject.function_name}\\(.*?\\):`, 'm');
        const match = powerDataObject.python_code.match(sigRegex);

        if (match) {
            const baseIndent = match[1] || "";
            const innerIndent = baseIndent + "    ";

            // A. Build the Header Injection (Imports, Type casting & Thread Init)
            let headerLogic = `\n${innerIndent}import time\n`;

            // INJECT HARVESTED IMPORTS (Safely bypassing duplicates)
            collectedImports.forEach(imp => {
                if (imp !== 'import time') {
                    headerLogic += `${innerIndent}${imp}\n`;
                }
            });

            headerLogic += `${innerIndent}if not hasattr(self, 'active_threads'):\n`;
            headerLogic += `${innerIndent}    self.active_threads = []\n`;

            powerDataObject.parameters.forEach(p => {
                if (p.type === '3DVector') {
                    headerLogic += `${innerIndent}if isinstance(${p.name}, dict) and 'x' in ${p.name}:\n`;
                    headerLogic += `${innerIndent}    from mcshell.Vec3 import Vec3\n`;
                    headerLogic += `${innerIndent}    ${p.name} = Vec3(float(${p.name}['x']), float(${p.name}['y']), float(${p.name}['z']))\n`;
                }
            });

            // B. Build the Footer Injection (The Wait Loop)
            let footerLogic = `\n${innerIndent}# --- Auto-Injected Thread Wait Loop ---\n`;
            footerLogic += `${innerIndent}while hasattr(self, 'active_threads') and any(t.is_alive() for t in getattr(self, 'active_threads', [])):\n`;
            footerLogic += `${innerIndent}    if getattr(self, 'cancel_event', None) and self.cancel_event.is_set(): break\n`;
            footerLogic += `${innerIndent}    time.sleep(0.1)\n\n`;

            // C. Locate the exact bounds of the main function
            const insertPos = powerDataObject.python_code.indexOf(match[0]) + match[0].length;

            const nextDefRegex = new RegExp(`^${baseIndent}def `, 'm');
            const contentAfterSig = powerDataObject.python_code.slice(insertPos);
            const nextDefMatch = contentAfterSig.match(nextDefRegex);

            let splitPos = powerDataObject.python_code.length;
            if (nextDefMatch) {
                splitPos = insertPos + nextDefMatch.index;
            }

            // D. Sandwich the injections into the code
            const part1 = powerDataObject.python_code.slice(0, insertPos);
            const part2 = powerDataObject.python_code.slice(insertPos, splitPos);
            const part3 = powerDataObject.python_code.slice(splitPos);

            powerDataObject.python_code = part1 + headerLogic + part2 + footerLogic + part3;
        }

    } else {
        powerDataObject.python_code = pythonGenerator.workspaceToCode(workspace);
        powerDataObject.function_name = null;
        powerDataObject.parameters = [];
    }

    const response = await fetch('/api/powers', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(powerDataObject),
    });

    if (!response.ok) throw new Error(await response.text());
    return true;
}

export function buildDebugPayload(workspace) {
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