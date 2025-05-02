import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Models } from 'appwrite';
import { authService } from '../services/auth';

// Define the structure of our auth context state
interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  user: Models.User<Models.Preferences> | null;
}

// Define the context shape with state and methods
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string) => Promise<Models.User<Models.Preferences>>;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  loading: true,
  user: null,
  login: async () => {},
  logout: async () => {},
  register: async () => ({ $id: '', $createdAt: '', $updatedAt: '', name: '', email: '', phone: '', emailVerification: false, phoneVerification: false, status: false, labels: [], prefs: {} }),
});

// Create a provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
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
    setAuthState(prev => ({ ...prev, loading: true }));

    try {
      await authService.login(email, password);
      const user = await authService.getCurrentUser();

      setAuthState({
        isAuthenticated: true,
        user,
        loading: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    setAuthState(prev => ({ ...prev, loading: true }));

    try {
      await authService.logout();

      setAuthState({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, loading: false }));
      throw error;
    }
  };

  // Register function
  const register = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true }));

    try {
      const newUser = await authService.register(email, password);
      setAuthState(prev => ({ ...prev, loading: false }));
      return newUser;
    } catch (error) {
      setAuthState(prev => ({ ...prev, loading: false }));
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

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
