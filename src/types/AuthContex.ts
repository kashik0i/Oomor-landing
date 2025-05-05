// Define the structure of our auth context state
import {Models} from "appwrite";

export interface AuthState {
    isAuthenticated: boolean;
    loading: boolean;
    user: Models.User<Models.Preferences> | null;
}

// Define the context shape with state and methods
export interface AuthContextType extends AuthState {
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<Models.User<Models.Preferences>>;
}