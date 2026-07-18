import cron from "node-cron";
import { syncAll } from "./syncService.js";

export function startScheduler() {

    // Every 6 hours
    cron.schedule("0 */6 * * *", async () => {

        console.log("Running scheduled sync...");

        try {

            await syncAll();

            console.log("Scheduled sync completed.");

        }

        catch (err) {

            console.error(err);

        }

    });

}