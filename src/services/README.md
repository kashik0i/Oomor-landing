# Appwrite Services

This directory contains services for interacting with Appwrite backend services.

## Services

### Client Service

The `client.ts` file provides a singleton instance of the Appwrite client, ensuring that only one client is created and used throughout the application.

```typescript
import { getAppwriteClient } from '@/services';

const client = getAppwriteClient();
```

### Authentication Service

The `auth.ts` file provides methods for user authentication, including registration, login, logout, and session management.

```typescript
import { authService } from '@/services';

// Register a new user
await authService.register('user@example.com', 'password');

// Login
await authService.login('user@example.com', 'password');

// Get current user
const user = await authService.getCurrentUser();

// Logout
await authService.logout();
```

### Database Service

The `database.ts` file provides methods for interacting with Appwrite databases, including CRUD operations on documents.

```typescript
import { databaseService } from '@/services';

// Create a document
const document = await databaseService.createDocument('databaseId', 'collectionId', { name: 'John' });

// Get a document
const document = await databaseService.getDocument('databaseId', 'collectionId', 'documentId');

// List documents
const documents = await databaseService.listDocuments('databaseId', 'collectionId');

// Update a document
const updatedDocument = await databaseService.updateDocument('databaseId', 'collectionId', 'documentId', { name: 'Jane' });

// Delete a document
await databaseService.deleteDocument('databaseId', 'collectionId', 'documentId');
```

### Functions Service

The `functions.ts` file provides methods for interacting with Appwrite functions, including executing functions and retrieving execution results.

```typescript
import { functionsService } from '@/services';

// Execute a function
const execution = await functionsService.executeFunction('functionId', { data: 'value' });

// Get execution result
const executionResult = await functionsService.getExecution('functionId', 'executionId');

// List executions
const executions = await functionsService.listExecutions('functionId');
```

## Environment Variables

The services require the following environment variables to be set:

- `VITE_APP_APPWRITE_URL`: The URL of your Appwrite instance
- `VITE_APP_PROJECT_ID`: Your Appwrite project ID