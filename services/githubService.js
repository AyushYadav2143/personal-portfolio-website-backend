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

        // ------------------------------------
        // Fetch profile (REST)
        // ------------------------------------

        const profilePromise = axios.get(
            `https://api.github.com/users/${username}`,
            { headers }
        );

        // ------------------------------------
        // Fetch all repositories (REST)
        // Used for stats
        // ------------------------------------

        const reposPromise = axios.get(
            `https://api.github.com/users/${username}/repos?per_page=100`,
            { headers }
        );

        // ------------------------------------
        // Fetch pinned repositories (GraphQL)
        // ------------------------------------

        const graphQLQuery = {
            query: `
                query($login: String!) {
                    user(login: $login) {
                        pinnedItems(first: 6, types: REPOSITORY) {
                            nodes {
                                ... on Repository {
                                    name
                                    description
                                    url
                                    updatedAt
                                    stargazerCount
                                    forkCount
                                    primaryLanguage {
                                        name
                                    }
                                }
                            }
                        }
                    }
                }
            `,
            variables: {
                login: username
            }
        };

        const pinnedPromise = axios.post(
            "https://api.github.com/graphql",
            graphQLQuery,
            { headers }
        );

        // ------------------------------------

        const [
            profileRes,
            reposRes,
            pinnedRes
        ] = await Promise.all([
            profilePromise,
            reposPromise,
            pinnedPromise
        ]);

        const profile = profileRes.data;
        const repos = reposRes.data;

        const pinnedRepos =
            pinnedRes.data.data.user.pinnedItems.nodes;

        // ------------------------------------
        // Calculate stats
        // ------------------------------------

        const totalStars = repos.reduce(
            (sum, repo) => sum + repo.stargazers_count,
            0
        );

        return {

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

                repositories: repos.length

            },

            pinnedRepositories: pinnedRepos.map(repo => ({

                name: repo.name,

                description: repo.description,

                language: repo.primaryLanguage?.name ?? null,

                stars: repo.stargazerCount,

                forks: repo.forkCount,

                updatedAt: repo.updatedAt,

                url: repo.url

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