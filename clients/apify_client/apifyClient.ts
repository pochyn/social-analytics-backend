import { ApifyClient } from 'apify-client';
require('dotenv').config();


// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: process.env.APIFY_CLIENT_SECRET_TOKEN
});

// Prepare Actor input

export const hashtagAnalytics = (async (hashtags: string[]) => {
    const input = {
        "hashtags": hashtags,
        "resultsPerPage": 5,
        "scrapeEmptyChannelInfo": false,
        "shouldDownloadVideos": false,
        "shouldDownloadCovers": false,
        "proxyConfiguration": {
            "useApifyProxy": true
        }
    };
    // Run the Actor and wait for it to finish
    const run = await client.task("viralhub~tiktok-scrapper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    // items.forEach((item) => {
    //     console.dir(item);
    // });
    return items;
});

export const getUserProfileAnalytics = (async (profiles: string[]) => {
    // do we need checks in place for hashtags for formatting?
    const input = {
        "profiles": profiles,
        "resultsPerPage": 5,
        "scrapeEmptyChannelInfo": false,
        "shouldDownloadVideos": false,
        "shouldDownloadCovers": false,
        "proxyConfiguration": {
            "useApifyProxy": true
        }
    };
    // Run the Actor and wait for it to finish
    const run = await client.task("viralhub~tiktok-scrapper").call(input);

    // Fetch and print actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    // items.forEach((item) => {
    //     console.dir(item);
    // });
    return items;
})