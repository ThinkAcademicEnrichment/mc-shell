import json
import copy
from pathlib import Path
from typing import List, Any, Callable, Union, Dict, Optional

from mcshell.constants import MC_TOOLBOX_SHADOWS

class Toolbox:
    """The root container for the Blockly toolbox."""
    def __init__(self, items: List[Any]):
        self.items = items

class Category:
    """A toolbox category containing blocks, sub-categories, or separators."""
    def __init__(self, name: str, colour: str = "#000000", contents: Optional[List[Any]] = None):
        self.name = name
        self.colour = colour
        self.contents = contents or []

class Separator:
    """A visual separator in the toolbox menu."""
    pass

class ConfiguredBlock:
    """Wrapper to override default inputs or fields in a user specification."""
    def __init__(self, method, inputs=None, fields=None):
        self.method = method
        self.inputs = inputs or {}
        self.fields = fields or {}

class MCToolbox:
    def __init__(self, snippets_dir: str):
        self.snippets_dir = Path(snippets_dir)
        self.cache = {}

    def _load_snippet(self, class_name: str) -> dict:
        """Recursively searches for and caches the JSON snippet."""
        if class_name not in self.cache:
            # Search all subdirectories for the file
            matches = list(self.snippets_dir.rglob(f"{class_name}.json"))
            
            if not matches:
                raise FileNotFoundError(f"Could not locate {class_name}.json in snippets directory.")
            if len(matches) > 1:
                raise ValueError(f"Ambiguous snippet name: Multiple {class_name}.json files found.")
                
            with open(matches[0], 'r') as f:
                self.cache[class_name] = json.load(f)
                
        return self.cache[class_name]

    def build(self, spec) -> dict:
        """Recursively builds the toolbox dict from the Python user spec."""
        
        # 1. Root Toolbox (Explicit class check removes ambiguity with dicts)
        if spec.__class__.__name__ == 'Toolbox':
            return {
                "kind": "categoryToolbox",
                "contents": [self.build(item) for item in spec.items]
            }
            
        # 2. Raw JSON Dictionaries (e.g., Pickers attributes)
        elif isinstance(spec, dict):
            return spec
            
        # 3. Custom Category
        elif hasattr(spec, 'name') and hasattr(spec, 'contents'):
            return {
                "kind": "category",
                "name": spec.name,
                "colour": getattr(spec, 'colour', "#000000"),
                "contents": [self.build(item) for item in spec.contents]
            }

        # 4. Separator
        elif spec.__class__.__name__ == 'Separator':
            return {
                "kind": "sep"
            }

        # 5. Configured Block (Overrides)
        elif spec.__class__.__name__ == 'ConfiguredBlock':
            class_name, method_name = spec.method.__qualname__.split('.')
            target_type = f"{class_name.lower()}_{method_name}"
            category_json = self._load_snippet(class_name)
            
            base_block = None
            for block in category_json.get('contents', []):
                if block.get('type') == target_type:
                    import copy
                    base_block = copy.deepcopy(block)
                    break
                    
            if not base_block:
                raise ValueError(f"Block {target_type} not found.")

            if spec.inputs:
                base_block.setdefault("inputs", {}).update(spec.inputs)
            if spec.fields:
                base_block.setdefault("fields", {}).update(spec.fields)
                
            return base_block

        # 6. Whole Action Class (e.g., QActions)
        elif isinstance(spec, type): 
            return self._load_snippet(spec.__name__)

        # 7. Specific Method (e.g., QActions.get_height_at)
        elif callable(spec) and hasattr(spec, '__qualname__'):
            class_name, method_name = spec.__qualname__.split('.')
            target_type = f"{class_name.lower()}_{method_name}"
            category_json = self._load_snippet(class_name)
            
            for block in category_json.get('contents', []):
                if block.get('type') == target_type:
                    return block
                    
            raise ValueError(f"Block {target_type} not found.")

        # 8. Static Category by String Name (e.g., "Logic")
        elif isinstance(spec, str):
            return self._load_snippet(spec)

        else:
            raise ValueError(f"Unknown specification item: {spec}")

    def generate_shadow_helpers(self, shadow_map: dict, output_file: str = "shadows.py"):
        """Generates a Python file containing factory functions from the SHADOW_MAP."""
        lines = [
            '"""Auto-generated shadow block helpers."""',
            'from typing import Any, Dict',
            ''
        ]

        # Extract the JSON-specific dictionary from the master map
        json_shadows = shadow_map.get('json', {})

        for shadow_name, json_config in json_shadows.items():
            if not isinstance(json_config, dict):
                continue
                
            func_name = f"shadow_{shadow_name.lower()}"
            block_type = json_config.get("type")
            fields = json_config.get("fields", {})
            inputs = json_config.get("inputs", {})

            # 1. Handle blocks with simple fields (e.g., dropdowns, numbers, text)
            if fields and not inputs:
                field_name = list(fields.keys())[0]
                default_val = fields[field_name]
                
                # Ensure strings get quotes in the generated python default arguments
                default_repr = f"'{default_val}'" if isinstance(default_val, str) else default_val
                
                lines.extend([
                    f"def {func_name}(val={default_repr}) -> Dict[str, Any]:",
                    f'    """Generates a {block_type} shadow."""',
                    f'    return {{"shadow": {{"type": "{block_type}", "fields": {{"{field_name}": val}}}}}}',
                    ''
                ])

            # 2. Handle nested input structures (e.g., Vec3)
            elif inputs:
                input_keys = list(inputs.keys())
                args_str = ", ".join([f"{k.lower()}=0" for k in input_keys])
                
                lines.extend([
                    f"def {func_name}({args_str}) -> Dict[str, Any]:",
                    f'    """Generates a {block_type} shadow."""',
                    f'    return {{',
                    f'        "shadow": {{',
                    f'            "type": "{block_type}",',
                    f'            "inputs": {{'
                ])
                for k in input_keys:
                    lines.append(f'                "{k}": {{"shadow": {{"type": "math_number", "fields": {{"NUM": {k.lower()}}}}}}},')
                lines.extend(['            }', '        }', '    }', ''])
                
            # 3. Handle blocks with neither (e.g., Matrix3)
            else:
                lines.extend([
                    f"def {func_name}() -> Dict[str, Any]:",
                    f'    """Generates a {block_type} shadow."""',
                    f'    return {{"shadow": {{"type": "{block_type}"}}}}',
                    ''
                ])

        with open(output_file, 'w') as f:
            f.write("\n".join(lines))