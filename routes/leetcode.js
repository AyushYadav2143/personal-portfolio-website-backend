import express from "express";
import { getLeetcodeCache } from "../services/leetcodeService.js";

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const data = await getLeetcodeCache();

        res.json(data);

    } catch (err) {

        console.error(err);

        res.status(500).json({

            error: "Unable to fetch LeetCode data."

        });

    }

});

export default router;