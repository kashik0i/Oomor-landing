import { Functions, type Models } from 'appwrite';
import { getAppwriteClient } from './client';

export class FunctionsService {
    functions: Functions;

    constructor() {
        this.functions = new Functions(getAppwriteClient());
    }

    // Execute a function
    async executeFunction(functionId: string, data?: object) {
        try {
            return await this.functions.createExecution(
                functionId,
                data ? JSON.stringify(data) : undefined
            );
        } catch (error) {
            console.error('Execute function error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to execute function');
        }
    }

    // Get a function execution
    async getExecution(functionId: string, executionId: string) {
        try {
            return await this.functions.getExecution(
                functionId,
                executionId
            );
        } catch (error) {
            console.error('Get execution error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to get execution');
        }
    }

    // List function executions
    async listExecutions(functionId: string, queries: string[] = []) {
        try {
            return await this.functions.listExecutions(
                functionId,
                queries
            );
        } catch (error) {
            console.error('List executions error:', error);
            throw new Error(error instanceof Error ? error.message : 'Failed to list executions');
        }
    }
}

export const functionsService = new FunctionsService();
