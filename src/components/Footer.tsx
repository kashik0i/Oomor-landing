import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollTop } from '../hooks/use-scroll-top'

export function Footer() {
  const scrollToTop = useScrollTop()

  // Custom link component that scrolls to top on mobile
  const FooterLink = ({ to, children }: { to: string, children: React.ReactNode }) => {
    const handleClick = (e: React.MouseEvent) => {
        scrollToTop()
    }

    return (
      <Link to={to} className="text-gray-400 hover:text-white" onClick={handleClick}>
        {children}
      </Link>
    )
  }

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        <div className="col-span-2 sm:col-span-2 md:col-span-1">
          <h3 className="text-xl font-bold mb-3 sm:mb-4">Oomor</h3>
          <p className="text-gray-400 text-sm sm:text-base">The fastest way to launch your online store and grow your business.</p>
          <div className="flex space-x-4 mt-4 sm:mt-6">
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
          <h4 className="font-semibold mb-2 sm:mb-4">Product</h4>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><FooterLink to="/features">Features</FooterLink></li>
            <li><FooterLink to="/pricing">Pricing</FooterLink></li>
            <li><FooterLink to="/integrations">Integrations</FooterLink></li>
            <li><FooterLink to="/updates">Updates</FooterLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 sm:mb-4">Resources</h4>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><FooterLink to="/blog">Blog</FooterLink></li>
            <li><FooterLink to="/help">Help Center</FooterLink></li>
            <li><FooterLink to="/tutorials">Tutorials</FooterLink></li>
            <li><FooterLink to="/community">Community</FooterLink></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 sm:mb-4">Company</h4>
          <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><FooterLink to="/about">About</FooterLink></li>
            <li><FooterLink to="/careers">Careers</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
            <li><FooterLink to="/legal">Legal</FooterLink></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm sm:text-base mb-4 md:mb-0">© 2023 Oomor. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link to="/legal#privacy" className="text-gray-400 hover:text-white text-sm sm:text-base">Privacy Policy</Link>
          <Link to="/legal#terms" className="text-gray-400 hover:text-white text-sm sm:text-base">Terms of Service</Link>
          <Link to="/legal#cookies" className="text-gray-400 hover:text-white text-sm sm:text-base">Cookies</Link>
        </div>
      </div>
    </footer>
  )
}
