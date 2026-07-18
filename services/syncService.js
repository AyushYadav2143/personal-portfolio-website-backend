import { updateGithubCache } from "./githubService.js";
import { updateLeetcodeCache } from "./leetcodeService.js";

export async function syncAll() {

    console.log("🔄 Starting GitHub & LeetCode sync...");

    const [github, leetcode] = await Promise.all([
        updateGithubCache(),
        updateLeetcodeCache()
    ]);

    console.log("✅ GitHub sync complete.");
    console.log("✅ LeetCode sync complete.");

    return {
        github,
        leetcode,
        syncedAt: new Date().toISOString()
    };

}