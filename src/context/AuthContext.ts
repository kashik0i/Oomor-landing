import {createContext} from "react";
import {AuthContextType} from "@/types/AuthContex.ts";
import {Models} from "appwrite";

// Create the context with default values
export const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    loading: true,
    user: null,
    login: async () => {
    },
    logout: async () => {
    },
    register: async () => ({} as Models.User<Models.Preferences>),
});