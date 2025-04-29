import { useState } from 'react'
import { 
  Search, 
  Link as LinkIcon, 
  ArrowRight, 
  CheckCircle, 
  Filter,
  Star,
  ExternalLink,
  ShoppingCart,
  CreditCard,
  BarChart,
  Mail,
  MessageSquare,
  Truck,
  Globe,
  Tag
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = [
    { id: 'payments', name: 'Payment Gateways', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing & Analytics', icon: <BarChart className="w-5 h-5" /> },
    { id: 'shipping', name: 'Shipping & Fulfillment', icon: <Truck className="w-5 h-5" /> },
    { id: 'communication', name: 'Communication', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'marketplace', name: 'Marketplaces', icon: <ShoppingCart className="w-5 h-5" /> },
    { id: 'all', name: 'All Integrations', icon: <LinkIcon className="w-5 h-5" /> }
  ]

  const featuredIntegrations = [
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Accept payments online with a seamless checkout experience.',
      category: 'payments',
      logo: 'https://cdn.worldvectorlogo.com/logos/stripe-4.svg',
      rating: 4.9,
      reviewCount: 1250,
      popular: true
    },
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      description: 'Sync your customer data and automate your email marketing campaigns.',
      category: 'marketing',
      logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon-2.svg',
      rating: 4.7,
      reviewCount: 980,
      popular: true
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'Connect your Oomor store with Shopify for expanded marketplace reach.',
      category: 'marketplace',
      logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg',
      rating: 4.8,
      reviewCount: 1120,
      popular: true
    }
  ]

  const integrations = [
    {
      id: 'paypal',
      name: 'PayPal',
      description: 'Accept PayPal payments and offer PayPal Credit to your customers.',
      category: 'payments',
      logo: 'https://cdn.worldvectorlogo.com/logos/paypal-icon.svg',
      rating: 4.6,
      reviewCount: 890
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics',
      description: 'Track visitor behavior and sales performance with detailed analytics.',
      category: 'marketing',
      logo: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg',
      rating: 4.8,
      reviewCount: 1050
    },
    {
      id: 'fedex',
      name: 'FedEx',
      description: 'Offer real-time shipping rates and print shipping labels directly from your dashboard.',
      category: 'shipping',
      logo: 'https://cdn.worldvectorlogo.com/logos/fedex-express-6.svg',
      rating: 4.5,
      reviewCount: 720
    },
    {
      id: 'zendesk',
      name: 'Zendesk',
      description: 'Provide excellent customer support with a powerful help desk solution.',
      category: 'communication',
      logo: 'https://cdn.worldvectorlogo.com/logos/zendesk-1.svg',
      rating: 4.7,
      reviewCount: 830
    },
    {
      id: 'amazon',
      name: 'Amazon',
      description: 'Sell your products on Amazon marketplace directly from your Oomor store.',
      category: 'marketplace',
      logo: 'https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg',
      rating: 4.4,
      reviewCount: 950
    },
    {
      id: 'square',
      name: 'Square',
      description: 'Process payments online and in-person with Square payment solutions.',
      category: 'payments',
      logo: 'https://cdn.worldvectorlogo.com/logos/square-2.svg',
      rating: 4.5,
      reviewCount: 680
    },
    {
      id: 'facebook-pixel',
      name: 'Facebook Pixel',
      description: 'Track conversions from Facebook ads and optimize your ad targeting.',
      category: 'marketing',
      logo: 'https://cdn.worldvectorlogo.com/logos/facebook-3.svg',
      rating: 4.6,
      reviewCount: 920
    },
    {
      id: 'ups',
      name: 'UPS',
      description: 'Calculate shipping rates and generate shipping labels with UPS.',
      category: 'shipping',
      logo: 'https://cdn.worldvectorlogo.com/logos/ups-united-parcel-service.svg',
      rating: 4.4,
      reviewCount: 650
    },
    {
      id: 'intercom',
      name: 'Intercom',
      description: 'Engage with customers through live chat and targeted messaging.',
      category: 'communication',
      logo: 'https://cdn.worldvectorlogo.com/logos/intercom-1.svg',
      rating: 4.7,
      reviewCount: 780
    }
  ]

  const filteredIntegrations = integrations.filter(integration => {
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || integration.category === selectedCategory
    const matchesSearch = !searchQuery || 
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      integration.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })

  const integrationGuides = [
    {
      title: "Setting Up Payment Gateways",
      description: "Learn how to configure popular payment gateways like Stripe, PayPal, and Square.",
      icon: <CreditCard className="w-6 h-6 text-white" />
    },
    {
      title: "Email Marketing Integration",
      description: "Connect your store with email marketing platforms to automate customer communications.",
      icon: <Mail className="w-6 h-6 text-white" />
    },
    {
      title: "Shipping Provider Setup",
      description: "Configure shipping carriers and print labels directly from your dashboard.",
      icon: <Truck className="w-6 h-6 text-white" />
    },
    {
      title: "Marketplace Connections",
      description: "Expand your reach by connecting to popular marketplaces like Amazon and Shopify.",
      icon: <Globe className="w-6 h-6 text-white" />
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect Your Favorite Tools</h1>
            <p className="text-xl opacity-90 mb-8">
              Extend your store's functionality with our powerful integrations and connect with the tools you already use
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-lg text-gray-900 focus:outline-none"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        {/* Filters */}
        <div className="mb-12">
          <div className="flex items-center mb-4">
            <Filter className="w-5 h-5 text-gray-500 mr-2" />
            <h2 className="text-lg font-semibold">Filter by Category</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Integrations */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <Star className="w-4 h-4 mr-2" />
              <span>Featured Integrations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Most Popular Connections</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These are the most widely used integrations by Oomor store owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredIntegrations.map((integration) => (
              <div key={integration.id} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <div className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1 text-yellow-500" />
                    <span>Popular</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-600 mb-4">{integration.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="flex items-center text-yellow-500 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(integration.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">{integration.rating} ({integration.reviewCount})</span>
                  </div>
                  <a 
                    href="#" 
                    className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center"
                  >
                    View Details
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Integrations */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">All Integrations</h2>
          
          {filteredIntegrations.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIntegrations.map((integration) => (
                <div key={integration.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center mr-4">
                      <img 
                        src={integration.logo} 
                        alt={integration.name}
                        className="max-w-full max-h-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{integration.name}</h3>
                      <div className="flex items-center text-sm">
                        <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                          {categories.find(c => c.id === integration.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm">
                      <div className="flex items-center text-yellow-500 mr-2">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                      <span className="text-gray-500">{integration.rating} ({integration.reviewCount})</span>
                    </div>
                    <a 
                      href="#" 
                      className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors flex items-center"
                    >
                      Connect
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <LinkIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No integrations found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Load More Integrations
            </button>
          </div>
        </div>

        {/* Integration Guides */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
              <CheckCircle className="w-4 h-4 mr-2" />
              <span>Integration Guides</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">How to Connect Your Tools</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Step-by-step guides to help you set up integrations with your favorite services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationGuides.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mb-4 inline-block">
                  {guide.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <a 
                  href="#" 
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  Read Guide
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Section */}
        <div className="bg-gray-50 p-12 rounded-2xl mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
                <Tag className="w-4 h-4 mr-2" />
                <span>For Developers</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Build Custom Integrations</h2>
              <p className="text-lg text-gray-600 mb-6">
                Need a custom integration? Our developer-friendly API allows you to build exactly what your business needs. Access comprehensive documentation, SDKs, and developer support.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  API Documentation
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Developer Community
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-gray-800 p-6 rounded-xl text-white font-mono text-sm">
                <div className="text-gray-400 mb-2">// Example API request</div>
                <div><span className="text-green-400">const</span> response = <span className="text-blue-400">await</span> fetch(</div>
                <div className="pl-4 text-yellow-300">'https://api.oomor.com/v1/integrations',</div>
                <div className="pl-4">{'{'}</div>
                <div className="pl-8">method: <span className="text-yellow-300">'POST'</span>,</div>
                <div className="pl-8">headers: {'{'} <span className="text-yellow-300">'Authorization'</span>: <span className="text-yellow-300">'Bearer YOUR_API_KEY'</span> {'}'}</div>
                <div className="pl-4">{'}'}</div>
                );
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to extend your store?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with your favorite tools and services to create a seamless experience for you and your customers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-soft hover:bg-primary-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/help" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}