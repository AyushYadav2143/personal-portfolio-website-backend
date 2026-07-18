import OpenAI from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function askOpenAI(prompt) {

    const response = await client.chat.completions.create({

        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",

        messages: [
            {
                role: "system",
                content: "You are Ayush's AI."
            },
            {
                role: "user",
                content: prompt
            }
        ],

        temperature: 0.4

    });

    return response.choices[0].message.content;
}