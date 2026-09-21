"""Auto-generated shadow block helpers."""
from typing import Any, Dict

def shadow_block(val='STONE') -> Dict[str, Any]:
    """Generates a mc_block_picker_world shadow."""
    return {"shadow": {"type": "mc_block_picker_world", "fields": {"VALUE": val}}}

def shadow_item(val='APPLE') -> Dict[str, Any]:
    """Generates a mc_item_picker_food shadow."""
    return {"shadow": {"type": "mc_item_picker_food", "fields": {"VALUE": val}}}

def shadow_entity(val='PIG') -> Dict[str, Any]:
    """Generates a mc_entity_picker_passive_mobs shadow."""
    return {"shadow": {"type": "mc_entity_picker_passive_mobs", "fields": {"VALUE": val}}}

def shadow_int(val=1) -> Dict[str, Any]:
    """Generates a math_number shadow."""
    return {"shadow": {"type": "math_number", "fields": {"NUM": val}}}

def shadow_float(val=1.0) -> Dict[str, Any]:
    """Generates a math_number shadow."""
    return {"shadow": {"type": "math_number", "fields": {"NUM": val}}}

def shadow_bool(val='TRUE') -> Dict[str, Any]:
    """Generates a logic_boolean shadow."""
    return {"shadow": {"type": "logic_boolean", "fields": {"BOOL": val}}}

def shadow_math_number(val=1) -> Dict[str, Any]:
    """Generates a math_number shadow."""
    return {"shadow": {"type": "math_number", "fields": {"NUM": val}}}

def shadow_str(val='') -> Dict[str, Any]:
    """Generates a text shadow."""
    return {"shadow": {"type": "text", "fields": {"TEXT": val}}}

def shadow_text(val='') -> Dict[str, Any]:
    """Generates a text shadow."""
    return {"shadow": {"type": "text", "fields": {"TEXT": val}}}

def shadow_vec3(x=0, y=0, z=0) -> Dict[str, Any]:
    """Generates a minecraft_vector_3d shadow."""
    return {
        "shadow": {
            "type": "minecraft_vector_3d",
            "inputs": {
                "X": {"shadow": {"type": "math_number", "fields": {"NUM": x}}},
                "Y": {"shadow": {"type": "math_number", "fields": {"NUM": y}}},
                "Z": {"shadow": {"type": "math_number", "fields": {"NUM": z}}},
            }
        }
    }

def shadow_matrix3() -> Dict[str, Any]:
    """Generates a minecraft_matrix_3d_euler shadow."""
    return {"shadow": {"type": "minecraft_matrix_3d_euler"}}

def shadow_metric(val='euclidean') -> Dict[str, Any]:
    """Generates a picker_metric shadow."""
    return {"shadow": {"type": "picker_metric", "fields": {"VALUE": val}}}

def shadow_qheading(val='F') -> Dict[str, Any]:
    """Generates a picker_qheading shadow."""
    return {"shadow": {"type": "picker_qheading", "fields": {"VALUE": val}}}

def shadow_axis(val='y') -> Dict[str, Any]:
    """Generates a picker_axis shadow."""
    return {"shadow": {"type": "picker_axis", "fields": {"VALUE": val}}}

def shadow_qcompass(val='N') -> Dict[str, Any]:
    """Generates a picker_qcompass shadow."""
    return {"shadow": {"type": "picker_qcompass", "fields": {"VALUE": val}}}

def shadow_time(val='day') -> Dict[str, Any]:
    """Generates a picker_time shadow."""
    return {"shadow": {"type": "picker_time", "fields": {"VALUE": val}}}

def shadow_timetype(val='gametime') -> Dict[str, Any]:
    """Generates a picker_timetype shadow."""
    return {"shadow": {"type": "picker_timetype", "fields": {"VALUE": val}}}

def shadow_weather(val='clear') -> Dict[str, Any]:
    """Generates a picker_weather shadow."""
    return {"shadow": {"type": "picker_weather", "fields": {"VALUE": val}}}

def shadow_difficulty(val='normal') -> Dict[str, Any]:
    """Generates a picker_difficulty shadow."""
    return {"shadow": {"type": "picker_difficulty", "fields": {"VALUE": val}}}

def shadow_gamemode(val='creative') -> Dict[str, Any]:
    """Generates a picker_gamemode shadow."""
    return {"shadow": {"type": "picker_gamemode", "fields": {"VALUE": val}}}

def shadow_gamerule(val='advance_time') -> Dict[str, Any]:
    """Generates a picker_gamerule shadow."""
    return {"shadow": {"type": "picker_gamerule", "fields": {"VALUE": val}}}

def shadow_integergamerule(val='respawn_radius') -> Dict[str, Any]:
    """Generates a picker_integergamerule shadow."""
    return {"shadow": {"type": "picker_integergamerule", "fields": {"VALUE": val}}}

def shadow_locatetype(val='structure') -> Dict[str, Any]:
    """Generates a picker_locatetype shadow."""
    return {"shadow": {"type": "picker_locatetype", "fields": {"VALUE": val}}}

def shadow_structure(val='ancient_city') -> Dict[str, Any]:
    """Generates a picker_structure shadow."""
    return {"shadow": {"type": "picker_structure", "fields": {"VALUE": val}}}

def shadow_biome(val='badlands') -> Dict[str, Any]:
    """Generates a picker_biome shadow."""
    return {"shadow": {"type": "picker_biome", "fields": {"VALUE": val}}}

def shadow_poi(val='armorer') -> Dict[str, Any]:
    """Generates a picker_poi shadow."""
    return {"shadow": {"type": "picker_poi", "fields": {"VALUE": val}}}

def shadow_effect(val='speed') -> Dict[str, Any]:
    """Generates a picker_effect shadow."""
    return {"shadow": {"type": "picker_effect", "fields": {"VALUE": val}}}

def shadow_titleaction(val='reset') -> Dict[str, Any]:
    """Generates a picker_titleaction shadow."""
    return {"shadow": {"type": "picker_titleaction", "fields": {"VALUE": val}}}

def shadow_datapath(val='Pos') -> Dict[str, Any]:
    """Generates a picker_data_path shadow."""
    return {"shadow": {"type": "picker_data_path", "fields": {"VALUE": val}}}

def shadow_color(val='WHITE') -> Dict[str, Any]:
    """Generates a picker_color_types shadow."""
    return {"shadow": {"type": "picker_color_types", "fields": {"VALUE": val}}}

def shadow_rotationpoint(val='selection_point') -> Dict[str, Any]:
    """Generates a picker_rotation_point shadow."""
    return {"shadow": {"type": "picker_rotation_point", "fields": {"VALUE": val}}}

def shadow_tileposition() -> Dict[str, Any]:
    """Generates a playeractions_get_tile_pos shadow."""
    return {"shadow": {"type": "playeractions_get_tile_pos"}}

def shadow_compassdirection() -> Dict[str, Any]:
    """Generates a qactions_get_compass_direction shadow."""
    return {"shadow": {"type": "qactions_get_compass_direction"}}

def shadow_y_normal(x=0, y=0, z=0) -> Dict[str, Any]:
    """Generates a minecraft_vector_3d shadow."""
    return {
        "shadow": {
            "type": "minecraft_vector_3d",
            "inputs": {
                "X": {"shadow": {"type": "math_number", "fields": {"NUM": x}}},
                "Y": {"shadow": {"type": "math_number", "fields": {"NUM": y}}},
                "Z": {"shadow": {"type": "math_number", "fields": {"NUM": z}}},
            }
        }
    }
