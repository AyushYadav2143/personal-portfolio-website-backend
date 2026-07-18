import express from "express";

import { loadBrain } from "../ai/loader/brainLoader.js";
import { chunkBrain } from "../ai/chunker/chunkBrain.js";
import { getEmbedding } from "../ai/embeddings/embedder.js";
import { buildVectorStore } from "../ai/embeddings/vectorStore.js";
import { searchBrain } from "../ai/embeddings/search.js";
import { askLLM } from "../ai/llm/index.js";

const router = express.Router();

/* ==========================================================
                        Brain
========================================================== */

router.get("/brain", async (req, res) => {

    const docs = await loadBrain();

    res.json(docs);

});

/* ==========================================================
                        Chunks
========================================================== */

router.get("/chunks", async (req, res) => {

    const chunks = await chunkBrain();

    res.json(chunks);

});

/* ==========================================================
                        Embeddings
========================================================== */

router.get("/embed", async (req, res) => {

    const vector = await getEmbedding("I love backend development.");

    res.json({

        dimensions: vector.length,

        preview: vector.slice(0, 10)

    });

});

/* ==========================================================
                        Vector Store
========================================================== */

router.get("/index", async (req, res) => {

    const store = await buildVectorStore();

    res.json({

        indexed: store.length

    });

});

/* ==========================================================
                        Search
========================================================== */

router.get("/search", async (req, res) => {

    const query = req.query.q;

    if (!query) {

        return res.status(400).json({

            error: "Missing query parameter."

        });

    }

    const results = await searchBrain(query);

    res.json(results);

});

/* ==========================================================
                        Test AI
========================================================== */

router.get("/test-ai", async (req, res) => {

    try {

        const result = await askLLM(`

You are Ayush's AI assistant.

Context:
Ayush is a BTech Computer Science student.
He loves Java.
He has a Hackerrank Gold Star in Java.

Question:
Tell me about yourself.

`);

        res.json(result);

    }

    catch (err) {

        console.error(err);

        res.status(500).json({

            error: err.message

        });

    }

});

export default router;