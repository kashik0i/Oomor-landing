import {Link} from 'react-router-dom'
import {ShoppingBag, Menu, X} from 'lucide-react'
import {useAuth} from '@/context';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';

export function Header() {
    const {isAuthenticated, user} = useAuth();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDashboard = () => {
        if (isAuthenticated) {
            navigate('/admin/dashboard');
            setMobileMenuOpen(false);
        } else {
            navigate('/admin/auth');
            setMobileMenuOpen(false);
        }
    }

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
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

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link to="/features" className="text-gray-500 hover:text-gray-900 font-medium">Features</Link>
                        <Link to="/pricing" className="text-gray-500 hover:text-gray-900 font-medium">Pricing</Link>
                        <Link to="/blog" className="text-gray-500 hover:text-gray-900 font-medium">Blog</Link>
                        <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium">About</Link>
                        <Link to="/demo" className="text-gray-500 hover:text-gray-900 font-medium">Demo</Link>
                    </nav>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center space-x-4">
                        {
                            isAuthenticated ? (
                                <>
                                    <span className="text-gray-700 font-medium">{user?.name}</span>
                                    <button onClick={handleDashboard} className="text-gray-500 hover:text-gray-900 font-medium">
                                        Dashboard
                                    </button>
                                </>
                            ) : (
                                <Link to="/admin/auth" className="text-gray-500 hover:text-gray-900 font-medium">Sign in</Link>
                            )
                        }
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {mobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
                        <Link 
                            to="/features" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link 
                            to="/pricing" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pricing
                        </Link>
                        <Link 
                            to="/blog" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link 
                            to="/about" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link 
                            to="/demo" 
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Demo
                        </Link>

                        {/* Mobile Auth */}
                        {isAuthenticated ? (
                            <div className="pt-4 pb-3 border-t border-gray-200">
                                <div className="flex items-center px-3">
                                    <div className="text-base font-medium text-gray-800">{user?.name}</div>
                                </div>
                                <div className="mt-3 space-y-1">
                                    <button 
                                        onClick={handleDashboard}
                                        className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                    >
                                        Dashboard
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link 
                                to="/admin/auth" 
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign in
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </header>
    )
}
