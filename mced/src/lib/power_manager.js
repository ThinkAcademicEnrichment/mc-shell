import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';
import { MCED } from "./constants.mjs";

export async function executeIPythonCommand(command, commandArguments) {
    try {
        const response = await fetch('/api/ipython_magic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
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
        const response = await fetch('/api/powers/categories');
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
        powerDescription = funcDefBlock.getCommentText() || '';

        const blockTypes = workspace.getAllBlocks(false).map(b => b.type);
        if (blockTypes.some(t => t.includes('DigitalGeometry'))) {
            category = 'Powers/Geometry';
        } else if (blockTypes.some(t => t.includes('PlayerActions'))) {
            category = 'Powers/Player';
        } else {
            category = 'Powers';
        }
    }

    const existingCategories = await getExistingCategories();

    return {
        name: powerName, description: powerDescription,
        category: category, availableCategories: existingCategories
    };
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
        dependencies: []
    };

    if (funcDefBlock) {
        pythonGenerator.init(workspace);
        const fullCode = pythonGenerator.workspaceToCode(workspace);
        const lines = fullCode.split('\n');
        let inInit = false;
        let extractedLines = [];

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
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
                    // 1. Detect if a specific category picker was attached
                    if (targetBlock.type.match(/^mc_(block|item|entity)_picker_/)) {
                        pickerSource = targetBlock.type;
                    }

                    // 2. Evaluate the block to get its explicit literal value
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
                            // Extract static vector coordinates
                            const vecMatch = pyCode.match(/Vec3\(([^,]+),\s*([^,]+),\s*([^)]+)\)/);
                            if (vecMatch && !isNaN(Number(vecMatch[1])) && !isNaN(Number(vecMatch[2])) && !isNaN(Number(vecMatch[3]))) {
                                defaultValue = { x: Number(vecMatch[1]), y: Number(vecMatch[2]), z: Number(vecMatch[3]) };
                            }
                        }
                    }
                }

                return { name, type: check ? check[0] : 'String', default: defaultValue, picker_source: pickerSource };
            });

            // 3. Inject invisible Python Vector Type-Caster
            // This allows the UI to send a simple JSON dict {x, y, z} and have it automatically
            // convert to a Python Vec3 object at runtime!
            let castingLogic = "";
            powerDataObject.parameters.forEach(p => {
                if (p.type === '3DVector') {
                    castingLogic += `    if isinstance(${p.name}, dict) and 'x' in ${p.name}:\n`;
                    castingLogic += `        from mcshell.Vec3 import Vec3\n`;
                    castingLogic += `        ${p.name} = Vec3(float(${p.name}['x']), float(${p.name}['y']), float(${p.name}['z']))\n`;
                }
            });

            if (castingLogic !== "") {
                const sigRegex = new RegExp(`^def ${powerDataObject.function_name}\\(self.*?\\):`, 'm');
                const match = powerDataObject.python_code.match(sigRegex);
                if (match) {
                    const insertPos = powerDataObject.python_code.indexOf(match[0]) + match[0].length;
                    powerDataObject.python_code = powerDataObject.python_code.slice(0, insertPos) + '\n' + castingLogic + powerDataObject.python_code.slice(insertPos);
                }
            }
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