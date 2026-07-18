import express from "express";
import { getGithubCache } from "../services/githubService.js";

const router = express.Router();

router.get("/", async (req, res) => {

    try {

        const data = await getGithubCache();

        res.json(data);

    } catch (err) {

        console.error(err);

        res.status(500).json({

            error: "Unable to fetch GitHub data."

        });

    }

});

export default router;