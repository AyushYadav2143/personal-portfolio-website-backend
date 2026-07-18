import Groq from "groq-sdk";

const client = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function askGroq(prompt) {

    console.log("Using model:", process.env.GROQ_MODEL);

    const response = await client.chat.completions.create({

        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",

        messages: [
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.4
    });

    return {
        text: response.choices[0].message.content,
        provider: "groq",
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile"
    };
}