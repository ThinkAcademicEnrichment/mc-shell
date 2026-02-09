import * as Blockly from 'blockly';
import { pythonGenerator } from 'blockly/python';
import { MCED } from "./constants.mjs";

/**
 * Sends a command to the Flask server's IPython endpoint.
 */
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

/**
 * Fetches all unique categories currently in the user's library.
 * Useful for populating the category dropdown in the save modal.
 */
export async function getExistingCategories() {
    try {
        const response = await fetch('/api/powers/categories');
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error("Failed to fetch categories:", error);
    }
    // Default categories if API fails or library is empty
    return ["Powers", "Workspaces", "Utilities", "Powers/Geometry", "Powers/Player"];
}

/**
 * Enhanced Metadata extraction:
 * Now attempts to predict a sub-category based on the blocks present.
 * This is async because it now fetches the list of existing categories for the UI.
 */
export async function getPowerMetadata(workspace) {
    let powerName = '';
    let powerDescription = '';
    let category = 'Workspaces';

    const topBlocks = workspace.getTopBlocks(false);

    // Check for function definition
    const funcDefBlock = topBlocks.find(b =>
        b.type === 'procedures_defnoreturn' || b.type === 'procedures_defreturn'
    );

    if (funcDefBlock) {
        powerName = funcDefBlock.getFieldValue('NAME');
        powerDescription = funcDefBlock.getCommentText() || '';

        // Simple heuristic for sub-categorization
        const blockTypes = workspace.getAllBlocks(false).map(b => b.type);
        if (blockTypes.some(t => t.includes('DigitalGeometry'))) {
            category = 'Powers/Geometry';
        } else if (blockTypes.some(t => t.includes('PlayerActions'))) {
            category = 'Powers/Player';
        } else {
            category = 'Powers';
        }
    }

    // Fetch existing categories to populate the dropdown
    const existingCategories = await getExistingCategories();

    return {
        name: powerName,
        description: powerDescription,
        category: category,
        availableCategories: existingCategories
    };
}

/**
 * Deletes a power from the repository.
 */
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

/**
 * Serializes the workspace and metadata into a Power Object for the backend.
 */
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
        const powerFunctionName = funcDefBlock.getFieldValue('NAME');
        const argNames = funcDefBlock.getVars();
        const funcNameForCode = pythonGenerator.nameDB_.getName(powerFunctionName, MCED.BlocklyNameTypes.PROCEDURE);
        const argsForDef = argNames.map(name => pythonGenerator.nameDB_.getName(name, MCED.BlocklyNameTypes.VARIABLE));

        let funcBody = pythonGenerator.statementToCode(funcDefBlock, 'STACK') || (pythonGenerator.INDENT + 'pass\n');
        if (funcDefBlock.type === 'procedures_defreturn') {
            const ret = pythonGenerator.valueToCode(funcDefBlock, 'RETURN', pythonGenerator.ORDER_NONE) || 'None';
            funcBody += pythonGenerator.INDENT + 'return ' + ret + '\n';
        }

        powerDataObject.function_name = powerFunctionName;
        powerDataObject.python_code = `def ${funcNameForCode}(self, ${argsForDef.join(', ')}):\n${funcBody}`;

        if (argNames.length > 0) {
            const callBlock = topBlocks.find(b =>
                (b.type === 'procedures_callnoreturn' || b.type === 'procedures_callreturn') &&
                b.getFieldValue('NAME') === powerFunctionName
            );

            if (!callBlock) throw new Error(`You must have a "call ${powerFunctionName}" block to define types.`);

            powerDataObject.parameters = argNames.map((name, i) => {
                const input = callBlock.getInput('ARG' + i);
                const check = input?.connection?.targetBlock()?.outputConnection?.getCheck();
                return { name, type: check ? check[0] : 'String', default: 0 };
            });
        }
    } else {
        powerDataObject.python_code = pythonGenerator.workspaceToCode(workspace);
        powerDataObject.function_name = null;
        powerDataObject.parameters = [];
    }

    const response = await fetch('/api/powers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(powerDataObject),
    });

    if (!response.ok) throw new Error(await response.text());
    return true;
}

/**
 * Determines if we are running a standalone script or a functional power definition.
 */
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