import fs from "fs/promises";
import path from "path";

const CACHE_DIR = path.join(process.cwd(), "cache");

// ------------------------------------
// Ensure cache directory exists
// ------------------------------------
async function ensureCacheDirectory() {

    await fs.mkdir(CACHE_DIR, {
        recursive: true
    });

}

// ------------------------------------
// Save cache
// ------------------------------------
export async function saveCache(filename, data) {

    await ensureCacheDirectory();

    const filePath = path.join(CACHE_DIR, filename);

    await fs.writeFile(
        filePath,
        JSON.stringify(data, null, 2),
        "utf8"
    );

}

// ------------------------------------
// Load cache
// ------------------------------------
export async function loadCache(filename) {

    try {

        await ensureCacheDirectory();

        const filePath = path.join(CACHE_DIR, filename);

        const data = await fs.readFile(
            filePath,
            "utf8"
        );

        return JSON.parse(data);

    } catch (err) {

        if (err.code === "ENOENT") {

            return null;

        }

        throw err;

    }

}