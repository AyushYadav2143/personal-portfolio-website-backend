# AI Portfolio Website

## Overview

This AI-powered portfolio is one of my favorite and most ambitious projects because it combines full-stack development, artificial intelligence, and Retrieval-Augmented Generation (RAG) into a single application.

Unlike a traditional portfolio that only displays information, this website allows visitors to have a real conversation with an AI assistant that answers questions about me, my projects, my experience, my skills, and my career journey.

My goal was to create a portfolio that feels interactive, memorable, and demonstrates my technical abilities through the product itself.

---

## Why I Built It

I wanted my portfolio to stand out from traditional personal websites.

Most portfolios require visitors to read through multiple sections to learn about someone. Instead, I wanted recruiters to simply ask questions like:

- Tell me about yourself.
- What projects have you built?
- What technologies do you know?
- Why backend development?
- What are your future goals?

The AI assistant answers these questions naturally using information stored in my personal knowledge base.

This makes the experience much more engaging while also demonstrating my understanding of modern AI application development.

---

## My Role

I designed and developed the complete project independently.

My responsibilities included:

- Designing the system architecture
- Building the backend
- Creating the frontend
- Implementing Retrieval-Augmented Generation (RAG)
- Integrating Large Language Models
- Optimizing semantic search
- Building the AI assistant
- Deploying the application

This project allowed me to combine everything I had learned about web development and artificial intelligence.

---

## Technologies Used

Frontend

- React
- JavaScript
- HTML
- CSS
- Material UI

Backend

- Node.js
- Express.js

Artificial Intelligence

- Groq API
- Google Gemini API
- Ollama (Local LLM Support)
- Retrieval-Augmented Generation (RAG)
- Vector Embeddings
- Semantic Search

Database & Storage

- Markdown Knowledge Base
- In-memory Vector Store

Tools

- Git
- GitHub
- VS Code
- Postman
- Vercel

---

## How It Works

The chatbot does not rely only on the knowledge of a language model.

Instead, it follows a Retrieval-Augmented Generation (RAG) pipeline.

The process works like this:

1. The visitor asks a question.

2. The backend converts the question into an embedding.

3. Semantic search finds the most relevant information from my personal knowledge base.

4. Those results are combined into a carefully designed prompt.

5. The selected language model generates an answer using only the retrieved context.

This approach helps reduce hallucinations and keeps answers accurate and personalized.

---

## Features

Some of the key features include:

- AI-powered chatbot
- Semantic search
- Personal knowledge base
- Retrieval-Augmented Generation
- Multiple LLM providers
- Dynamic prompt generation
- Source attribution
- Responsive UI
- Full-stack architecture

---

## Biggest Challenges

One of the biggest challenges was designing the RAG pipeline.

I spent significant time experimenting with:

- Document chunking
- Embeddings
- Semantic search
- Prompt engineering
- Folder organization
- Knowledge base structure

Another challenge was making the chatbot answer naturally instead of simply copying information from the knowledge base.

I also worked on improving retrieval quality so that the most relevant information is always selected before generating a response.

---

## What I Learned

This project taught me much more than how to call an AI API.

I learned:

- How Retrieval-Augmented Generation works
- Prompt engineering
- Semantic search
- Vector embeddings
- Knowledge base design
- AI application architecture
- Backend optimization
- LLM integration
- Building production-ready AI applications

It also gave me a much deeper understanding of how modern AI assistants are built.

---

## Favorite Part

The most enjoyable part of this project was designing the AI assistant itself.

I found it fascinating to see how improvements in document organization, prompt design, and retrieval quality could dramatically improve the chatbot's responses.

Watching the assistant gradually become more accurate and conversational was one of the most rewarding parts of the project.

---

## Future Improvements

I plan to continue improving this portfolio by adding:

- Streaming responses
- Conversation memory
- Better retrieval and reranking
- Automatic fallback between LLM providers
- Voice interaction
- Project demonstrations
- Resume analysis
- Multilingual support
- Analytics dashboard

As I continue learning AI and backend development, I want this portfolio to evolve alongside my skills.

---

## Why This Project Matters

This project represents my growth as a software developer.

Instead of simply listing my skills on a webpage, I wanted to build something that demonstrates them.

The portfolio itself showcases my experience in backend development, artificial intelligence, full-stack development, API design, and modern software architecture.

I believe it reflects my approach to learning—understanding concepts deeply and applying them to build real-world products.
## Design Decisions

I initially built the chatbot using Google's Gemini API.

Although the responses were good, I observed high latency during testing on the free tier, with response times sometimes exceeding 20 seconds.

To improve user experience, I integrated Groq as an additional LLM provider. Groq significantly reduced response times while maintaining excellent answer quality.

To keep the system flexible, I designed the backend so that switching between Groq, Gemini, OpenAI, or Ollama only requires changing an environment variable, without modifying the application code.