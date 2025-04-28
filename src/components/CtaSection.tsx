import { useState } from 'react'
import { DemoForm } from './DemoForm'
import { ArrowRight, Calendar, ShoppingBag } from 'lucide-react'

export function CtaSection() {
  const [showDemoForm, setShowDemoForm] = useState(false)

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-700 z-0">
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 md:p-16 shadow-card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 text-primary-100 max-w-lg">
                Join over 1,250 entrepreneurs who have launched successful online stores with Oomor's all-in-one platform.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <p>Start selling online in minutes, not weeks</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/20 rounded-full p-2 mr-4">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <p>14-day free trial with no credit card required</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-xl shadow-soft transition-all flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button 
                  onClick={() => setShowDemoForm(true)}
                  className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center"
                >
                  Book a Demo
                </button>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-400 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>

                <img 
                  src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Happy Oomor customer" 
                  className="rounded-2xl shadow-card object-cover h-full max-h-96 w-full animate-fade-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDemoForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="animate-slide-up w-full max-w-md">
            <DemoForm onClose={() => setShowDemoForm(false)} />
          </div>
        </div>
      )}
    </section>
  )
}
