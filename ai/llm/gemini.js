import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export async function askGemini(prompt) {

    console.log("Using model:", process.env.GEMINI_MODEL);

    const start = Date.now();

    const response = await ai.models.generateContent({
        model: process.env.GEMINI_MODEL,
        contents: prompt
    });

    console.log("Google API took:", Date.now() - start, "ms");

    return {
        text: response.text,
        provider: "gemini",
        model: process.env.GEMINI_MODEL
    };
}