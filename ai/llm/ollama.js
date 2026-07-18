export async function askOllama(prompt) {

    const response = await fetch(
        `${process.env.OLLAMA_URL || "http://localhost:11434"}/api/generate`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: process.env.OLLAMA_MODEL || "llama3.1",
                prompt,
                stream: false
            })
        }
    );

    const data = await response.json();

    return {
        text: data.response,
        provider: "ollama",
        model: process.env.OLLAMA_MODEL || "llama3.1"
    };
}