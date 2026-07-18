import { searchBrain } from "../embeddings/search.js";
import { buildPrompt } from "../prompts/promptBuilder.js";
import { askLLM } from "../llm/index.js";

export async function chat(question) {

    console.time("Search");

    const chunks = await searchBrain(question, 5);

    console.timeEnd("Search");

    console.time("Prompt");

    const prompt = buildPrompt(question, chunks);

    console.timeEnd("Prompt");
    console.log("Prompt characters:", prompt.length);
    console.log("Prompt words:", prompt.split(/\s+/).length);

    console.time("Gemini");

    const result = await askLLM(prompt);

    console.timeEnd("Gemini");

    return {
        answer: result.text,
        provider: result.provider,
        model: result.model,
        sources: chunks.map(chunk => ({
            title: chunk.title,
            source: chunk.source,
            score: chunk.score
        }))
    };
}