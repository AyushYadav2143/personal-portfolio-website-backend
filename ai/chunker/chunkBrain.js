import { loadBrain } from "../loader/brainLoader.js";
import { semanticChunk } from "./semanticChunkers.js";

export async function chunkBrain() {
    const docs = await loadBrain();

    let allChunks = [];

    for (const doc of docs) {
        const chunks = semanticChunk(doc);
        allChunks.push(...chunks);
    }

    return allChunks;
}