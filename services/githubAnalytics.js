import axios from "axios";
import pLimit from "p-limit";

// ------------------------------------
// Build language statistics using
// GitHub Language API
// ------------------------------------
export async function buildLanguageStats(repos) {

    // Process at most 5 repos simultaneously
    const limit = pLimit(5);

    // Ignore repos that don't contribute meaningful language data
    const usefulRepos = repos.filter(repo =>
        !repo.fork &&
        !repo.archived &&
        repo.size > 0
    );

    const languageBytes = {};

    await Promise.all(

        usefulRepos.map(repo =>
            limit(async () => {

                try {

                    const { data } = await axios.get(
                        repo.languages_url
                    );

                    for (const [language, bytes] of Object.entries(data)) {

                        languageBytes[language] =
                            (languageBytes[language] || 0) + bytes;

                    }

                } catch (err) {

                    console.log(
                        `Skipping ${repo.name}`
                    );

                }

            })
        )

    );

    const totalBytes = Object.values(languageBytes)
        .reduce((sum, value) => sum + value, 0);

    return Object.entries(languageBytes)
        .map(([name, bytes]) => ({

            name,

            bytes,

            percentage: Number(
                ((bytes / totalBytes) * 100).toFixed(1)
            )

        }))
        .sort((a, b) => b.bytes - a.bytes);

}