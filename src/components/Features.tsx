import { Smartphone, LayoutDashboard, Truck, Package, User, Layers } from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "Mobile & Web Platform",
      description: "Manage your store from anywhere with our responsive platform that works on all devices",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Step-by-Step Setup",
      description: "Easy onboarding process with guided wizards to get your store live quickly",
      icon: <LayoutDashboard className="w-6 h-6" />
    },
    {
      title: "Delivery Integration",
      description: "Seamless shipping options with major carriers and local delivery services",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Inventory Management",
      description: "Track products and stock levels with automated alerts and reordering",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "CRM System",
      description: "Build relationships with your customers through personalized communications",
      icon: <User className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-24 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary-500"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-secondary-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
            <Layers className="w-4 h-4 mr-2" />
            <span>All-in-One Platform</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg text-gray-600">Our platform combines all the tools you need to run your online business efficiently</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card will-change-transform"
            >
              <div className="flex items-start mb-5">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mr-4 text-white transform group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold pt-1">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-primary-600 font-medium flex items-center text-sm hover:text-primary-700 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="/features" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors font-medium">
            Explore all features
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
