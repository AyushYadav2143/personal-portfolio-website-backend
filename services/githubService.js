import axios from "axios";
import { saveCache, loadCache } from "./cacheService.js";

// ------------------------------------
// Fetch fresh data from GitHub
// ------------------------------------
export async function fetchGithubData() {

    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!username) {
        throw new Error("GITHUB_USERNAME is missing.");
    }

    if (!token) {
        throw new Error("GITHUB_TOKEN is missing.");
    }

    const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
    };

    console.log("Fetching GitHub data for:", username);

    try {

        // Fetch profile and repositories in parallel
        const [profileRes, reposRes] = await Promise.all([

            axios.get(
                `https://api.github.com/users/${username}`,
                { headers }
            ),

            axios.get(
                `https://api.github.com/users/${username}/repos?per_page=100`,
                { headers }
            )

        ]);

        const profile = profileRes.data;
        const repos = reposRes.data;

        // Calculate statistics
        const totalStars = repos.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
        );

        const totalForks = repos.reduce(
            (sum, repo) => sum + repo.forks_count,
            0
        );

        // Get 5 most recently updated repositories
        const recentRepos = [...repos]
            .sort(
                (a, b) =>
                    new Date(b.updated_at) -
                    new Date(a.updated_at)
            )
            .slice(0, 5);

        return {

            // Keep raw repositories for analytics
            rawRepositories: repos,

            profile: {

                username: profile.login,

                name: profile.name,

                avatar: profile.avatar_url,

                bio: profile.bio,

                followers: profile.followers,

                following: profile.following,

                publicRepos: profile.public_repos,

                company: profile.company,

                location: profile.location,

                blog: profile.blog

            },

            stats: {

                totalStars,

                totalForks,

                repositories: repos.length

            },

            recentRepositories: recentRepos.map(repo => ({

                name: repo.name,

                description: repo.description,

                language: repo.language,

                stars: repo.stargazers_count,

                forks: repo.forks_count,

                updatedAt: repo.updated_at,

                url: repo.html_url

            })),

            updatedAt: new Date().toISOString()

        };

    } catch (err) {

        console.error("GitHub API Error");

        if (err.response) {

            console.error("Status:", err.response.status);
            console.error(err.response.data);

        } else {

            console.error(err.message);

        }

        throw err;

    }

}

// ------------------------------------
// Update GitHub cache
// ------------------------------------
export async function updateGithubCache() {

    const githubData = await fetchGithubData();

    await saveCache("github.json", githubData);

    console.log("✅ GitHub cache updated.");

    return githubData;

}

// ------------------------------------
// Read GitHub cache
// ------------------------------------
export async function getGithubCache() {

    return await loadCache("github.json");

}