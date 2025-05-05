import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/context';

interface ProtectedRouteProps {
    redirectPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ redirectPath = '/admin/auth' }) => {
    const { isAuthenticated, loading } = useAuth();

    // Show loading spinner while authentication state is being checked
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary-500"></div>
            </div>
        );
    }

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectPath} replace />;
};

