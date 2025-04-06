import { Smartphone, LayoutDashboard, Truck, Package, User } from 'lucide-react'

export function Features() {
  const features = [
    {
      title: "Mobile & Web Platform",
      description: "Manage your store from anywhere with our responsive platform",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Step-by-Step Setup",
      description: "Easy onboarding process to get your store live quickly",
      icon: <LayoutDashboard className="w-6 h-6" />
    },
    {
      title: "Delivery Integration",
      description: "Seamless shipping options for your customers",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Inventory Management",
      description: "Track products and stock levels effortlessly",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "CRM System",
      description: "Build relationships with your customers",
      icon: <User className="w-6 h-6" />
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-4 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600 pl-12">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
