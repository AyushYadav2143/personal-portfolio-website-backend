import express from "express";
import { chat } from "../ai/agent/chatAgent.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                error: "Question is required."
            });
        }

        const result = await chat(question);

        res.json(result);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: err.message
        });

    }
});

export default router;