import { Clock, Users, CreditCard, Globe, Zap } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Setup",
      description: "Create your store in minutes with our guided setup process",
      color: "bg-primary-500",
      lightColor: "bg-primary-100"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Built-in Customer Base",
      description: "Join our marketplace and reach thousands of potential customers",
      color: "bg-secondary-500",
      lightColor: "bg-secondary-100"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "All-in-One Solution",
      description: "Payment processing, delivery integration, and inventory management included",
      color: "bg-green-500",
      lightColor: "bg-green-100"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Professional Store",
      description: "Get your own branded shop URL (yourstore.oomor.com)",
      color: "bg-amber-500",
      lightColor: "bg-amber-100"
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Thousands Choose Oomor</h2>
          <p className="text-lg text-gray-600">Everything you need to launch and grow your online business in one place</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl hover:shadow-card border border-gray-100 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`${benefit.lightColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <div className={`${benefit.color} text-white p-2 rounded-lg`}>
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors cursor-pointer">
            <span>Learn more about our features</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
