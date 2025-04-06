import { Clock, Users, CreditCard, Box, Globe } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Instant Setup",
      description: "Create your store in minutes with our guided setup process"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Built-in Customer Base",
      description: "Join our marketplace and reach thousands of potential customers"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "All-in-One Solution",
      description: "Payment processing, delivery integration, and inventory management included"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Professional Store",
      description: "Get your own branded shop URL (yourstore.oomor.com)"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Oomor</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
