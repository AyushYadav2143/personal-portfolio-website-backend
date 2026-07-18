import axios from "axios";

const GRAPHQL_ENDPOINT = "https://leetcode.com/graphql";

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

// ------------------------------------
// Sleep helper
// ------------------------------------
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ------------------------------------
// Execute GraphQL query with retries
// ------------------------------------
export async function executeGraphQL(query, variables = {}) {

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {

        try {

            const response = await axios.post(

                GRAPHQL_ENDPOINT,

                {
                    query,
                    variables
                },

                {
                    headers: {
                        "Content-Type": "application/json",
                        "User-Agent": "Portfolio Backend"
                    },

                    timeout: 10000
                }

            );

            if (response.data.errors) {

                throw new Error(
                    JSON.stringify(response.data.errors)
                );

            }

            return response.data.data;

        }

        catch (err) {

            console.log(
                `LeetCode Request Failed (Attempt ${attempt}/${MAX_RETRIES})`
            );

            if (attempt === MAX_RETRIES) {

                console.error("LeetCode GraphQL Error");

                throw err;

            }

            await sleep(RETRY_DELAY);

        }

    }

}