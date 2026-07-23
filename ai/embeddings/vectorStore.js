import { chunkBrain } from "../chunker/chunkBrain.js";
import { getEmbedding } from "./embedder.js";

let vectorStore = [];

export async function buildVectorStore() {

    console.log("Building Vector Store...");

    const chunks = await chunkBrain();

    vectorStore = [];

    for (const chunk of chunks) {

        const embedding = await getEmbedding(chunk.content);

        vectorStore.push({
            ...chunk,
            embedding
        });

        
    }

    console.log(`Finished indexing ${vectorStore.length} chunks.`);

    return vectorStore;
}

export function getVectorStore() {
    return vectorStore;
}