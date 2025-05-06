import { Client } from 'appwrite';
import { assertIsDefined } from "@/lib/utils.ts";

export class AppwriteClient {
    private static instance: Client;

    private constructor() {
        // Private constructor to prevent direct construction calls with the `new` operator
    }

    public static getInstance(): Client {
        if (!AppwriteClient.instance) {
            assertIsDefined(import.meta.env.VITE_APP_APPWRITE_URL, 'Appwrite URL is not defined');
            assertIsDefined(import.meta.env.VITE_APP_PROJECT_ID, 'Appwrite Project ID is not defined');
            
            AppwriteClient.instance = new Client()
                .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL)
                .setProject(import.meta.env.VITE_APP_PROJECT_ID);
        }

        return AppwriteClient.instance;
    }
}

export const getAppwriteClient = (): Client => {
    return AppwriteClient.getInstance();
};