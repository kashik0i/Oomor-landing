import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Oomor</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link to="/features" className="text-gray-500 hover:text-gray-900 font-medium">Features</Link>
            <Link to="/pricing" className="text-gray-500 hover:text-gray-900 font-medium">Pricing</Link>
            <Link to="/blog" className="text-gray-500 hover:text-gray-900 font-medium">Blog</Link>
            <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-gray-500 hover:text-gray-900 font-medium">Sign in</Link>
            <Link 
              to="/signup" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
