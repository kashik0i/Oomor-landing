import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Oomor</h3>
          <p className="text-gray-400">The fastest way to launch your online store and grow your business.</p>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2">
            <li><Link to="/features" className="text-gray-400 hover:text-white">Features</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-white">Pricing</Link></li>
            <li><Link to="/integrations" className="text-gray-400 hover:text-white">Integrations</Link></li>
            <li><Link to="/updates" className="text-gray-400 hover:text-white">Updates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link to="/help" className="text-gray-400 hover:text-white">Help Center</Link></li>
            <li><Link to="/tutorials" className="text-gray-400 hover:text-white">Tutorials</Link></li>
            <li><Link to="/community" className="text-gray-400 hover:text-white">Community</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link to="/legal" className="text-gray-400 hover:text-white">Legal</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© 2023 Oomor. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link to="/legal#privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link to="/legal#terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          <Link to="/legal#cookies" className="text-gray-400 hover:text-white">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
