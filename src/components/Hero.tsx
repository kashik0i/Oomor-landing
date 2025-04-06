import { ShoppingBag, Clock, Users, CreditCard, Box, Globe } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Launch Your Online Store in 10 Minutes
          </h1>
          <p className="text-xl text-blue-100">
            Transform your Instagram page or small business into a professional online shop - no technical skills needed
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all">
            Start Selling Online
          </button>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500 rounded-full opacity-20"></div>
          <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Oomor app dashboard"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
