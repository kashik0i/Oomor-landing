import { Client, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1') // Your Appwrite endpoint
    .setProject('66e57301001124e5010b'); // Your project ID

const account = new Account(client);

export const authService = {
    async register(email: string, password: string) {
        try {
            console.log('Attempting to register user:', email);
            const user = await account.create(
                ID.unique(),
                email,
                password
            );
            console.log('User registered successfully:', user);
            return user;
        } catch (error) {
            console.error('Registration error:', error);
            throw new Error(error instanceof Error ? error.message : 'Registration failed');
        }
    },

    async login(email: string, password: string) {
        try {
            console.log('Attempting to login user:', email);
            //check if session already exists
            const session = await account.createSession(email, password);
            console.log('Login successful, session created');
            return session;
        } catch (error) {
            console.error('Login error:', error);
            throw new Error(error instanceof Error ? error.message : 'Login failed');
        }
    },

    async logout() {
        try {
            console.log('Attempting to logout');
            await account.deleteSession('current');
            console.log('Logout successful');
        } catch (error) {
            console.error('Logout error:', error);
            throw new Error(error instanceof Error ? error.message : 'Logout failed');
        }
    },

    async getCurrentUser() {
        try {
            console.log('Attempting to get current user');
            const user = await account.get();
            console.log('Current user retrieved successfully');
            return user;
        } catch (error) {
            console.error('Get current user error:', error);
            return null;
        }
    }
}; 