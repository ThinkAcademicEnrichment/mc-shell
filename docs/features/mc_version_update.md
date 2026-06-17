PaperMC API v3 & Minecraft 26.x Migration Summary

This document summarizes the code modifications required to migrate the PaperMC download helper script from the v2 API to the new Fill v3 API, enabling support for Minecraft 26.x versions.

## Overview of API v3 Changes
1. **Endpoint URL:** The base API URL changed from `api.papermc.io/v2/` to `fill.papermc.io/v3/`.
2. **Mandatory User-Agent:** The new API (and its `fill-data.papermc.io` download domain) strictly requires a custom `User-Agent` header to prevent rate-limiting and blocking.
3. **JSON Schema Adjustments:** * The `builds` endpoint now returns a JSON array directly instead of a dictionary containing a `builds` key.
   * The download identifier changed from `application` to `server:default`.
   * The download URL is now embedded directly in the API response, eliminating the need to construct it manually.

---

## Code Modifications

### 1. `get_jar_path` Helper
**Changes Made:**
* Removed manual download URL construction.
* Replaced the target download key from `application` to `server:default`.
* Extracted the embedded `url` directly from the v3 API response.


### 2. `_download_jar` Helper

**Changes Made:**

* Added a custom `User-Agent` header to the `requests.get` call to comply with the stricter anti-abuse measures on the new `fill-data.papermc.io` domain.


### 3. `_get_latest_build_for_version` Helper

**Changes Made:**

* Updated the `API_URL` to point to `fill.papermc.io/v3/...`.
* Added the custom `User-Agent` header to the API request.
* Modified the JSON parsing logic: The v3 endpoint returns a JSON list directly (`[ {...}, {...} ]`) rather than an object (`{ "builds": [...] }`). The `.get('builds', [])` logic was replaced with a direct type check.

---

## Environment Requirements

**Java Runtime Upgrade:** Minecraft versions starting from `26.1.x` are compiled with Java class file version `69.0`. Attempting to run them on Java 21 (class file version `65.0`) will result in an `UnsupportedClassVersionError`.

**Action Required:** Upgrade the server environment's Java Runtime Environment (JRE) or Java Development Kit (JDK) to **Java 25**.
"""
