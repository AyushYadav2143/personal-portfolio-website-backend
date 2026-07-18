import express from "express";
import { syncAll } from "../services/syncService.js";

const router = express.Router();

router.post("/", async (req, res) => {

    try {

        const result = await syncAll();

        res.json({
            success: true,
            ...result
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            success: false,
            error: err.message
        });

    }

});

export default router;