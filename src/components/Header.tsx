import {Link} from 'react-router-dom'
import {ShoppingBag} from 'lucide-react'
import {useAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

export function Header() {
    const {isAuthenticated, user} = useAuth();
    const navigate = useNavigate();

    const handleDashboard = () => {
        if (isAuthenticated) {
            navigate('/admin/dashboard');
        } else {
            navigate('/admin/auth');
        }
    }
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <ShoppingBag className="h-6 w-6 text-indigo-600"/>
                            <span className="text-xl font-bold text-gray-900">Oomor</span>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/features" className="text-gray-500 hover:text-gray-900 font-medium">Features</Link>
                        <Link to="/pricing" className="text-gray-500 hover:text-gray-900 font-medium">Pricing</Link>
                        <Link to="/blog" className="text-gray-500 hover:text-gray-900 font-medium">Blog</Link>
                        <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium">About</Link>
                        <Link to="/demo" className="text-gray-500 hover:text-gray-900 font-medium">Demo</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        {
                            isAuthenticated ? (
                                <>
                                    <span className="text-gray-700 font-medium">{user?.name}</span>
                                    <button onClick={handleDashboard} className="text-gray-500 hover:text-gray-900 font-medium">
                                        Dashboard
                                    </button>
                                </>
                            ) : (
                                <Link to="/admin/auth" className="text-gray-500 hover:text-gray-900 font-medium">Sign
                                    in</Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}
