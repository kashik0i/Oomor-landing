import { 
  Smartphone, 
  CreditCard,
  Settings,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {DemoPreview} from "../components/DemoPreview.tsx";

export function DemoPage() {

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Smartphone className="w-4 h-4 mr-2" />
            <span>Interactive Demo</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Oomor Superapp Demo</h1>
          <p className="text-lg text-gray-600">
            Experience the power of multiple apps in one platform. Click on any app icon to see it in action.
          </p>
        </div>

        <DemoPreview/>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Oomor Superapp?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">All-in-One Solution</h3>
              <p className="text-gray-600">Access multiple apps and services from a single platform without switching between apps.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Seamless Integration</h3>
              <p className="text-gray-600">All apps work together seamlessly, sharing data and functionality for a better user experience.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-soft">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customizable</h3>
              <p className="text-gray-600">Tailor the superapp to your needs by adding or removing apps based on your requirements.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary-50 p-8 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-gray-600 mb-6">
              Get started with Oomor Superapp today and provide your customers with a seamless, integrated experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/pricing" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Get Started
              </Link>
              <Link to="/contact" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}