export async function askLLM(prompt) {

    const provider = process.env.LLM_PROVIDER || "gemini";

    switch (provider) {

        case "gemini": {
            const { askGemini } = await import("./gemini.js");
            return askGemini(prompt);
        }

        case "groq": {
            const { askGroq } = await import("./groq.js");
            return askGroq(prompt);
        }

        case "ollama": {
            const { askOllama } = await import("./ollama.js");
            return askOllama(prompt);
        }

        case "openai": {
            const { askOpenAI } = await import("./openai.js");
            return askOpenAI(prompt);
        }

        default:
            throw new Error(`Unsupported provider: ${provider}`);
    }
}