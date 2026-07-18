import { executeGraphQL } from "../providers/leetcode/graphql.js";
import { USER_PROFILE_QUERY } from "../providers/leetcode/queries.js";
import { saveCache, loadCache } from "./cacheService.js";

// ------------------------------------
// Fetch fresh LeetCode data
// ------------------------------------
export async function fetchLeetcodeData() {

    const username = process.env.LEETCODE_USERNAME;

    console.log("Fetching LeetCode data for:", username);

    const data = await executeGraphQL(

        USER_PROFILE_QUERY,

        {
            username
        }

    );

    const user = data.matchedUser;

    if (!user) {

        throw new Error("LeetCode user not found.");

    }

    const solvedStats = user.submitStats.acSubmissionNum;

    const easy = solvedStats.find(
        s => s.difficulty === "Easy"
    )?.count || 0;

    const medium = solvedStats.find(
        s => s.difficulty === "Medium"
    )?.count || 0;

    const hard = solvedStats.find(
        s => s.difficulty === "Hard"
    )?.count || 0;

    const total = solvedStats.find(
        s => s.difficulty === "All"
    )?.count || 0;

    return {

        profile: {

            username: user.username,

            realName: user.profile.realName,

            avatar: user.profile.userAvatar,

            ranking: user.profile.ranking,

            reputation: user.profile.reputation,

            school: user.profile.school,

            country: user.profile.countryName,

            company: user.profile.company,

            jobTitle: user.profile.jobTitle,

            skillTags: user.profile.skillTags,

            about: user.profile.aboutMe

        },

        stats: {

            totalSolved: total,

            easySolved: easy,

            mediumSolved: medium,

            hardSolved: hard

        },

        updatedAt: new Date().toISOString()

    };

}

// ------------------------------------
// Update cache
// ------------------------------------
export async function updateLeetcodeCache() {

    const data = await fetchLeetcodeData();

    await saveCache("leetcode.json", data);

    console.log("✅ LeetCode cache updated.");

    return data;

}

// ------------------------------------
// Read cache
// ------------------------------------
export async function getLeetcodeCache() {

    return await loadCache("leetcode.json");

}
// ------------------------------------
// Update LeetCode cache
// ------------------------------------
