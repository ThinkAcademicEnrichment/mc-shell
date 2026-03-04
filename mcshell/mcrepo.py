import json
import uuid
import sqlite3
import datetime
from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional

from mcshell.constants import MC_POWER_LIBRARY_DIR, MC_DATA_DIR

AUTHORING_PLAYER = "__system_author__"

class PowerRepository(ABC):
    """Abstract base class defining the interface for storing and retrieving powers."""
    @abstractmethod
    def save_power(self, power_data: Dict[str, Any]) -> str: pass
    @abstractmethod
    def list_powers(self) -> List[Dict[str, Any]]: pass
    @abstractmethod
    def list_full_powers(self) -> List[Dict[str, Any]]: pass
    @abstractmethod
    def get_full_power(self, power_id: str) -> Optional[Dict[str, Any]]: pass
    @abstractmethod
    def delete_power(self, power_id: str) -> bool: pass
    @abstractmethod
    def find_power_by_function_name(self, function_name: str) -> Optional[Dict[str, Any]]: pass

class SQLiteRepository(PowerRepository):
    def __init__(self, player_name: str):
        self.player_name = player_name
        self.db_path = MC_POWER_LIBRARY_DIR.joinpath(f"{self.player_name}.db")
        self._init_db()
        self._check_for_updates()

    def _get_connection(self):
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        return conn

    def _init_db(self):
        MC_POWER_LIBRARY_DIR.mkdir(exist_ok=True, parents=True)
        with self._get_connection() as conn:
            conn.execute("""
                CREATE TABLE IF NOT EXISTS powers (
                    power_id TEXT PRIMARY KEY,
                    name TEXT NOT NULL,
                    description TEXT,
                    category TEXT DEFAULT 'General',
                    function_name TEXT,
                    parameters TEXT,
                    dependencies TEXT,
                    blockly_json TEXT NOT NULL,
                    python_code TEXT,
                    schema_version TEXT DEFAULT '1.0',
                    engine_version TEXT,
                    author TEXT,
                    created_at TIMESTAMP,
                    updated_at TIMESTAMP
                )
            """)
            conn.execute("CREATE TABLE IF NOT EXISTS metadata (key TEXT PRIMARY KEY, value TEXT)")
            conn.commit()

    def rename_category(self, old_name: str, new_name: str) -> int:
        with self._get_connection() as conn:
            cursor = conn.execute("UPDATE powers SET category = ? WHERE category = ?", (new_name, old_name))
            count = cursor.rowcount
            cursor = conn.execute(
                "UPDATE powers SET category = ? || SUBSTR(category, ?) WHERE category LIKE ? ESCAPE '\\'",
                (new_name, len(old_name) + 1, f"{old_name}/%")
            )
            count += cursor.rowcount
            conn.commit()
            return count

    def list_categories(self) -> List[str]:
        with self._get_connection() as conn:
            cursor = conn.execute("SELECT DISTINCT category FROM powers ORDER BY category")
            return [row[0] for row in cursor.fetchall() if row[0]]

    def _get_meta(self, key: str, default: Any = None) -> Any:
        with self._get_connection() as conn:
            row = conn.execute("SELECT value FROM metadata WHERE key = ?", (key,)).fetchone()
            return row[0] if row else default

    def _set_meta(self, key: str, value: Any):
        with self._get_connection() as conn:
            conn.execute("INSERT OR REPLACE INTO metadata (key, value) VALUES (?, ?)", (key, str(value)))
            conn.commit()

    def _check_for_updates(self):
        stdlib_path = MC_DATA_DIR.joinpath('powers/stdlib.json')
        if not stdlib_path.exists(): return
        try:
            with stdlib_path.open('r') as f:
                data = json.load(f)
                new_v, curr_v = data.get('version', 0), int(self._get_meta('stdlib_version', 0))
                if new_v > curr_v:
                    for p in data.get('powers', []):
                        p['author'] = 'System'
                        self.save_power(p)
                    self._set_meta('stdlib_version', new_v)
        except Exception as e: print(f"Update failed: {e}")

    def save_power(self, power_data: Dict[str, Any]) -> str:
        power_id = power_data.get("power_id") or str(uuid.uuid4())
        now = datetime.datetime.now().isoformat()
        params, deps = json.dumps(power_data.get("parameters", [])), json.dumps(power_data.get("dependencies", []))
        bj = power_data.get("blockly_json", {})
        blockly_json = json.dumps(bj) if not isinstance(bj, str) else bj
        with self._get_connection() as conn:
            conn.execute("""
                INSERT INTO powers (power_id, name, description, category, function_name, parameters, dependencies, blockly_json, python_code, author, created_at, updated_at)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(power_id) DO UPDATE SET name=excluded.name, description=excluded.description, category=excluded.category, parameters=excluded.parameters, dependencies=excluded.dependencies, blockly_json=excluded.blockly_json, python_code=excluded.python_code, updated_at=excluded.updated_at
            """, (power_id, power_data.get("name"), power_data.get("description"), power_data.get("category", "General"), power_data.get("function_name"), params, deps, blockly_json, power_data.get("python_code"), power_data.get("author", self.player_name), power_data.get("created_at", now), now))
            conn.commit()
        return power_id

    def list_powers(self) -> List[Dict[str, Any]]:
        with self._get_connection() as conn:
            return [dict(row) for row in conn.execute("SELECT power_id, name, description, category FROM powers ORDER BY category, name").fetchall()]

    def list_full_powers(self) -> List[Dict[str, Any]]:
        with self._get_connection() as conn:
            rows = conn.execute("SELECT * FROM powers").fetchall()
            powers = []
            for r in rows:
                p = dict(r)
                p['parameters'], p['dependencies'], p['blockly_json'] = json.loads(p['parameters'] or '[]'), json.loads(p['dependencies'] or '[]'), json.loads(p['blockly_json'] or '{}')
                powers.append(p)
            return powers

    def get_full_power(self, power_id: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            row = conn.execute("SELECT * FROM powers WHERE power_id = ?", (power_id,)).fetchone()
            if not row: return None
            p = dict(row)
            p['parameters'], p['dependencies'], p['blockly_json'] = json.loads(p['parameters'] or '[]'), json.loads(p['dependencies'] or '[]'), json.loads(p['blockly_json'] or '{}')
            return p

    # --- ADDED: Crucial lookup method for mcserver.py execution ---
    def find_power_by_function_name(self, function_name: str) -> Optional[Dict[str, Any]]:
        with self._get_connection() as conn:
            row = conn.execute("SELECT * FROM powers WHERE function_name = ? OR power_id = ?", (function_name, function_name)).fetchone()
            if not row: return None
            p = dict(row)
            p['parameters'] = json.loads(p['parameters'] or '[]')
            p['dependencies'] = json.loads(p['dependencies'] or '[]')
            p['blockly_json'] = json.loads(p['blockly_json'] or '{}')
            return p

    def delete_power(self, power_id: str) -> bool:
        with self._get_connection() as conn:
            cursor = conn.execute("DELETE FROM powers WHERE power_id = ?", (power_id,))
            conn.commit()
            return cursor.rowcount > 0

# Keep the JsonFileRepository for backward compatibility or simple testing
class JsonFileRepository(PowerRepository):
    # (Existing implementation remains the same, but you might want
    # to update it later to handle the new fields if you keep it)
    def __init__(self, player_name: str):
        self.player_name = player_name
        MC_POWER_LIBRARY_DIR.mkdir(exist_ok=True, parents=True)

    def _get_player_data(self) -> Dict[str, Any]:
        player_file = MC_POWER_LIBRARY_DIR.joinpath(f"{self.player_name}.json")
        if not player_file.exists():
           player_file = MC_DATA_DIR.joinpath('powers/stdlib.json')
        with player_file.open('r') as f:
            return json.load(f)

    def _save_player_data(self, data: Dict[str, Any]):
        player_file_path = MC_POWER_LIBRARY_DIR.joinpath(f"{self.player_name}.json")
        with player_file_path.open('w') as f:
            json.dump(data, f, indent=4)

    def save_power(self, power_data: Dict[str, Any]) -> str:
        all_powers = self._get_player_data()
        power_id = power_data.get("power_id") or str(uuid.uuid4())
        power_data["power_id"] = power_id
        all_powers[power_id] = power_data
        self._save_player_data(all_powers)
        return power_id

    def list_powers(self) -> List[Dict[str, Any]]:
        all_powers = self._get_player_data()
        return [{"power_id": k, "name": v.get("name"), "description": v.get("description"), "category": v.get("category")} for k, v in all_powers.items()]

    def list_full_powers(self) -> List[Dict[str, Any]]:
        return list(self._get_player_data().values())

    def get_full_power(self, power_id: str) -> Optional[Dict[str, Any]]:
        return self._get_player_data().get(power_id)

    def delete_power(self, power_id: str) -> bool:
        all_powers = self._get_player_data()
        if power_id in all_powers:
            del all_powers[power_id]
            self._save_player_data(all_powers)
            return True
        return False