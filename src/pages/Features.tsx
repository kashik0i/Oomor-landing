import { 
  Smartphone, 
  LayoutDashboard, 
  Truck, 
  Package, 
  User, 
  Layers, 
  ShoppingCart, 
  CreditCard, 
  BarChart, 
  Globe, 
  Shield, 
  MessageSquare,
  Search,
  Zap,
  Settings,
  PenTool
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function FeaturesPage() {
  const mainFeatures = [
    {
      title: "Mobile & Web Platform",
      description: "Manage your store from anywhere with our responsive platform that works on all devices. Our mobile-first approach ensures your customers have a seamless shopping experience whether they're on desktop, tablet, or smartphone.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Step-by-Step Setup",
      description: "Easy onboarding process with guided wizards to get your store live quickly. Our intuitive setup process walks you through each step of creating your online store, from adding products to configuring payment methods.",
      icon: <LayoutDashboard className="w-6 h-6" />
    },
    {
      title: "Delivery Integration",
      description: "Seamless shipping options with major carriers and local delivery services. Automatically calculate shipping rates, print labels, and track packages all from within your dashboard.",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Inventory Management",
      description: "Track products and stock levels with automated alerts and reordering. Set low stock notifications, manage variants, and sync inventory across multiple sales channels.",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "CRM System",
      description: "Build relationships with your customers through personalized communications. Segment your audience, send targeted emails, and track customer interactions to improve retention.",
      icon: <User className="w-6 h-6" />
    }
  ]

  const additionalFeatures = [
    {
      title: "Shopping Cart Optimization",
      description: "Reduce cart abandonment with our optimized checkout process. One-page checkout, saved payment methods, and guest checkout options help maximize conversions.",
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Payment Processing",
      description: "Accept payments from anywhere in the world with our secure payment gateway integrations. Support for credit cards, digital wallets, and local payment methods.",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard",
      description: "Make data-driven decisions with comprehensive analytics and reporting. Track sales, customer behavior, and marketing performance all in one place.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Multi-language Support",
      description: "Reach customers worldwide with automatic translation and localization features. Sell globally while providing a localized experience for each market.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Security & Compliance",
      description: "Keep your store and customer data safe with enterprise-grade security features. PCI compliance, SSL encryption, and fraud prevention tools come standard.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Customer Support Tools",
      description: "Provide excellent customer service with integrated support tools. Live chat, help desk, and knowledge base features help you respond quickly to customer inquiries.",
      icon: <MessageSquare className="w-6 h-6" />
    }
  ]

  const enterpriseFeatures = [
    {
      title: "Advanced Search",
      description: "Help customers find exactly what they're looking for with AI-powered search functionality. Supports filters, autocomplete, and natural language processing.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast page loads with our optimized infrastructure. CDN integration, image optimization, and caching ensure your store performs at its best.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "API Access",
      description: "Extend your store's functionality with our comprehensive API. Connect with third-party services or build custom integrations specific to your business needs.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "White-label Options",
      description: "Create a fully branded experience with white-label customization options. Remove Oomor branding and add your own for a seamless brand experience.",
      icon: <PenTool className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features to Grow Your Business</h1>
            <p className="text-xl opacity-90 mb-8">Everything you need to create, manage, and scale your online store in one platform.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/pricing" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                View Pricing
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Layers className="w-4 h-4 mr-2" />
            <span>Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essential Tools for Every Store</h2>
          <p className="text-lg text-gray-600">Our platform combines all the essential features you need to run your online business efficiently</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start mb-5">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mr-4 text-white transform group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold pt-1">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-16 border-t border-gray-100">
          <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
            <Layers className="w-4 h-4 mr-2" />
            <span>Advanced Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Take Your Store to the Next Level</h2>
          <p className="text-lg text-gray-600">Powerful tools to enhance your customer experience and streamline operations</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start mb-5">
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 p-3 rounded-xl mr-4 text-white transform group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold pt-1">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enterprise Features Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-16 border-t border-gray-100">
          <div className="inline-flex items-center px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-4">
            <Layers className="w-4 h-4 mr-2" />
            <span>Enterprise Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Scale and Performance</h2>
          <p className="text-lg text-gray-600">Enterprise-grade features for businesses with high-volume sales and custom requirements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {enterpriseFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-gray-100"
            >
              <div className="flex items-start mb-5">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-3 rounded-xl mr-4 text-white transform group-hover:rotate-6 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold pt-1">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience these features?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your 14-day free trial today and discover how Oomor can transform your online business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </Link>
            <Link to="/contact" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
