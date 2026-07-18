import { getEmbedding } from "./embedder.js";
import { getVectorStore } from "./vectorStore.js";
import { cosineSimilarity } from "./similarity.js";
import { expandQuery } from "../retrieval/queryExpansion.js";

export async function searchBrain(query, topK = 5) {

    // Expand the user's query before embedding
    const expandedQuery = expandQuery(query);

    console.log("Expanded Query:");
    console.log(expandedQuery);

    const queryEmbedding = await getEmbedding(expandedQuery);

    // Get all indexed chunks
    const vectors = getVectorStore();

    console.log("Vector Store Size:", vectors.length);

    // Folder importance
    const folderBoost = {
        about: 0.12,
        projects: 0.10,
        experience: 0.08,
        achievements: 0.07,
        skills: 0.05,
        faq: 0.02
    };

    // Intent detection
    const q = query.toLowerCase();

    const isAbout =
        q.includes("yourself") ||
        q.includes("about") ||
        q.includes("who are you") ||
        q.includes("introduce");

    const isSkills =
        q.includes("skill") ||
        q.includes("technology") ||
        q.includes("tech stack");

    const isProjects =
        q.includes("project") ||
        q.includes("portfolio") ||
        q.includes("build");

    const isExperience =
        q.includes("experience") ||
        q.includes("leadership") ||
        q.includes("work");

    // Score every chunk
    const scored = vectors.map(doc => {

        let score = cosineSimilarity(queryEmbedding, doc.embedding);

        // Folder boost
        score += folderBoost[doc.folder] || 0;

        const title = doc.title.toLowerCase();

        // ---------------- About Intent ----------------

        if (isAbout) {

            if (title.includes("basic")) score += 0.25;

            if (title.includes("introduction")) score += 0.25;

            if (title.includes("about")) score += 0.25;

            if (title.includes("career")) score += 0.15;

            if (title.includes("education")) score += 0.12;

            if (title.includes("personality")) score += 0.08;

            if (title.includes("leadership")) score += 0.05;

            if (title.includes("fun")) score += 0.02;
        }

        // ---------------- Skills Intent ----------------

        if (isSkills) {

            if (title.includes("skill")) score += 0.25;

            if (title.includes("language")) score += 0.18;

            if (title.includes("backend")) score += 0.15;

            if (title.includes("frontend")) score += 0.15;
        }

        // ---------------- Projects Intent ----------------

        if (isProjects) {

            if (title.includes("project")) score += 0.25;

            if (title.includes("overview")) score += 0.18;

            if (title.includes("tech")) score += 0.15;

            if (title.includes("result")) score += 0.15;
        }

        // ---------------- Experience Intent ----------------

        if (isExperience) {

            if (title.includes("experience")) score += 0.25;

            if (title.includes("leadership")) score += 0.20;

            if (title.includes("community")) score += 0.15;
        }

        return {
            ...doc,
            score
        };
    });

    // Highest score first
    scored.sort((a, b) => b.score - a.score);

    // Remove duplicates and weak matches
    const seen = new Set();
    const filtered = [];

    for (const doc of scored) {

        if (!doc.content.trim()) continue;

        if (doc.score < 0.25) continue;

        const key = `${doc.folder}-${doc.title}`;

        if (seen.has(key)) continue;

        seen.add(key);

        filtered.push(doc);

        if (filtered.length === topK) break;
    }

    return filtered.map(({ embedding, ...doc }) => ({
        ...doc,
        score: Number(doc.score.toFixed(4))
    }));
}