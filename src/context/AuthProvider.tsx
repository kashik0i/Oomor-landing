import {ReactNode, useState, useEffect} from 'react';
import {authService} from '../services/auth';
import {AuthState} from "@/types/AuthContex.ts";
import {AuthContext} from './AuthContext';


// Create a provider component
export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [authState, setAuthState] = useState<AuthState>({
        isAuthenticated: false,
        loading: true,
        user: null,
    });

    // Check for active session on mount
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authenticated = await authService.checkActiveSession();

                const user = authenticated ? await authService.getCurrentUser() : null;

                setAuthState({
                    isAuthenticated: authenticated,
                    user,
                    loading: false,
                });
            } catch (error) {
                console.error("Auth check failed:", error);
                setAuthState({
                    isAuthenticated: false,
                    user: null,
                    loading: false,
                });
            }
        };

        checkAuth();
    }, []);

    // Login function
    const login = async (email: string, password: string) => {
        setAuthState(prev => ({...prev, loading: true}));

        try {
            await authService.login(email, password);
            const user = await authService.getCurrentUser();

            setAuthState({
                isAuthenticated: true,
                user,
                loading: false,
            });
        } catch (error) {
            setAuthState(prev => ({...prev, loading: false}));
            throw error;
        }
    };

    // Logout function
    const logout = async () => {
        setAuthState(prev => ({...prev, loading: true}));

        try {
            await authService.logout();

            setAuthState({
                isAuthenticated: false,
                user: null,
                loading: false,
            });
        } catch (error) {
            setAuthState(prev => ({...prev, loading: false}));
            throw error;
        }
    };

    // Register function
    const register = async (email: string, password: string) => {
        setAuthState(prev => ({...prev, loading: true}));

        try {
            const newUser = await authService.register(email, password);
            setAuthState({
                isAuthenticated: true,
                user: newUser,
                loading: false,
            });
            return newUser;
        } catch (error) {
            setAuthState(prev => ({...prev, loading: false}));
            throw error;
        }
    };

    const value = {
        ...authState,
        login,
        logout,
        register,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
