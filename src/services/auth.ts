import {Account, AppwriteException, ID, type Models} from 'appwrite';
import { getAppwriteClient } from './client';

export class AuthService {
    account: Account;
    session: Models.Session | null = null;
    user: Promise<Models.User<Models.Preferences> | null> | null = null;

    constructor() {
        this.account = new Account(getAppwriteClient());
    }

    async register(email: string, password: string) {
        try {
            return await this.account.create(
                ID.unique(),
                email,
                password
            );
        } catch (error) {
            console.error('Registration error:', error);
            throw new Error(error instanceof Error ? error.message : 'Registration failed');
        }
    }

    async login(email: string, password: string) {
        try {
            const activeSession = await this.checkActiveSession();

            if (activeSession) {
                // Delete the active sessions if one exists
                await this.deleteSessions();
            }
            this.session = await this.account.createEmailPasswordSession(email, password);
            this.user = this.getCurrentUser()
        } catch (error) {
            console.error('Login error:', error);
            throw new Error(error instanceof Error ? error.message : 'Login failed');
        }
    }

    async logout() {
        try {
            await this.deleteSessions();
            this.user = null;
            this.session = null;

        } catch (error) {
            console.error('Logout error:', error);
            throw new Error(error instanceof Error ? error.message : 'Logout failed');
        }
    }

    async getCurrentUser() {
        try {
            if(this.user) return this.user
            return await this.account.get();
        } catch (error) {
            console.error('Get current user error:', error);
            return null;
        }
    }

    async checkActiveSession() {
        try {
            const session = await this.account.getSession('current');
            return session !== null;
        } catch (error) {
            if (error instanceof AppwriteException && error.code === 401) {
                return false; // No active session
            }
            // throw error; // Re-throw other unexpected errors
        }
    }


    async deleteSessions() {
        try {
            // Get the list of all sessions
            const sessions = await this.account.listSessions();

            // Delete each session
            await Promise.all(
                sessions.sessions.map(async (session) => {
                    await this.account.deleteSession(session.$id);
                })
            );
        } catch (error) {
            const errorMsg = (error as Error).message
            console.error('Error deleting sessions:', errorMsg);
            throw error; // Re-throw the error for further handling
        }
    }

}

export const authService = new AuthService()
