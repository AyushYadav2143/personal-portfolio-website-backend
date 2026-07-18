import express from "express";

import githubRoutes from "./github.js";
import leetcodeRoutes from "./leetcode.js";
import chatRoutes from "./chat.js";
import syncRoutes from "./sync.js";
import debugRoutes from "./debug.js";

const router = express.Router();

router.use("/github", githubRoutes);

router.use("/leetcode", leetcodeRoutes);

router.use("/chat", chatRoutes);

router.use("/sync", syncRoutes);

router.use("/debug", debugRoutes);

export default router;