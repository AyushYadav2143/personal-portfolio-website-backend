import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import compression from "compression";

import apiRoutes from "./routes/index.js";

import { buildVectorStore } from "./ai/embeddings/vectorStore.js";
import { startScheduler } from "./services/schedulerService.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ==========================================================
                        Middleware
========================================================== */

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());

/* ==========================================================
                        API Routes
========================================================== */

app.use("/api/v1", apiRoutes);

/* ==========================================================
                      Health Check
========================================================== */

app.get("/", (req, res) => {
    res.json({
        success: true,
        name: "Ayush Portfolio Backend",
        version: "1.0.0",
        status: "running",
        docs: "/api/v1",
        uptime: Math.floor(process.uptime())
    });
});

/* ==========================================================
                    Error Middleware
========================================================== */

app.use(notFound);
app.use(errorHandler);

/* ==========================================================
                     Start Server
========================================================== */

async function startServer() {
    try {
        console.log("🧠 Building vector store...");

        await buildVectorStore();

        console.log("✅ Vector store ready.");

        startScheduler();

        console.log("🕒 Scheduler started.");

        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });

    } catch (err) {
        console.error("❌ Failed to start server");
        console.error(err);
        process.exit(1);
    }
}

startServer();