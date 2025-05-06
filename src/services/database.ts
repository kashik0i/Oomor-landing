import { Databases, ID } from 'appwrite';
import { getAppwriteClient } from './client';

export class DatabaseService {
    databases: Databases;

    constructor() {
        this.databases = new Databases(getAppwriteClient());
    }

    // Create a document
    async createDocument(databaseId: string, collectionId: string, data: object, permissions: string[] = []) {
        try {
            return await this.databases.createDocument(
                databaseId,
                collectionId,
                ID.unique(),
                data,
                permissions
            );
        } catch (error) {
            console.error('Create document error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to create document');
        }
    }

    // Get a document
    async getDocument(databaseId: string, collectionId: string, documentId: string) {
        try {
            return await this.databases.getDocument(
                databaseId,
                collectionId,
                documentId
            );
        } catch (error) {
            console.error('Get document error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to get document');
        }
    }

    // List documents
    async listDocuments(databaseId: string, collectionId: string, queries: string[] = []) {
        try {
            return await this.databases.listDocuments(
                databaseId,
                collectionId,
                queries
            );
        } catch (error) {
            console.error('List documents error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to list documents');
        }
    }

    // Update a document
    async updateDocument(databaseId: string, collectionId: string, documentId: string, data: object) {
        try {
            return await this.databases.updateDocument(
                databaseId,
                collectionId,
                documentId,
                data
            );
        } catch (error) {
            console.error('Update document error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to update document');
        }
    }

    // Delete a document
    async deleteDocument(databaseId: string, collectionId: string, documentId: string) {
        try {
            await this.databases.deleteDocument(
                databaseId,
                collectionId,
                documentId
            );
            return true;
        } catch (error) {
            console.error('Delete document error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to delete document');
        }
    }
}

export const databaseService = new DatabaseService();
