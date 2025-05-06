import { useState } from 'react'
import { 
  Search, 
  BookOpen,
  Clock, 
  ChevronRight, 
  Tag, 
  Star, 
  Play,
  Filter,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function TutorialsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const categories = [
    { id: 'getting-started', name: 'Getting Started' },
    { id: 'store-setup', name: 'Store Setup' },
    { id: 'products', name: 'Product Management' },
    { id: 'payments', name: 'Payments & Checkout' },
    { id: 'shipping', name: 'Shipping & Fulfillment' },
    { id: 'marketing', name: 'Marketing Tools' },
    { id: 'analytics', name: 'Analytics & Reporting' },
    { id: 'all', name: 'All Tutorials' }
  ]

  const levels = [
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' }
  ]

  const featuredTutorial = {
    id: 'store-setup-guide',
    title: 'Complete Store Setup Guide',
    description: 'Learn how to set up your Oomor store from scratch, including customization, product setup, and payment configuration.',
    duration: '25:10',
    level: 'beginner',
    category: 'getting-started',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    views: 12540,
    date: 'May 15, 2025'
  }

  const tutorials = [
    {
      id: 'product-import',
      title: 'Importing Products in Bulk',
      description: 'Learn how to import multiple products at once using CSV files and the bulk import tool.',
      duration: '8:45',
      level: 'intermediate',
      category: 'products',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      views: 8320,
      date: 'May 10, 2025'
    },
    {
      id: 'payment-gateways',
      title: 'Setting Up Payment Gateways',
      description: 'Configure multiple payment options including credit cards, PayPal, and local payment methods.',
      duration: '12:20',
      level: 'beginner',
      category: 'payments',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      views: 9150,
      date: 'May 5, 2025'
    },
    {
      id: 'shipping-rates',
      title: 'Configuring Shipping Rates',
      description: 'Learn how to set up shipping zones, rates, and integrate with major shipping carriers.',
      duration: '10:15',
      level: 'intermediate',
      category: 'shipping',
      thumbnail: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      views: 6240,
      date: 'April 28, 2025'
    },
    {
      id: 'seo-optimization',
      title: 'SEO Optimization for Your Store',
      description: 'Improve your store\'s search engine ranking with these proven SEO techniques.',
      duration: '15:30',
      level: 'advanced',
      category: 'marketing',
      thumbnail: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      views: 7890,
      date: 'April 20, 2025'
    },
    {
      id: 'analytics-dashboard',
      title: 'Understanding Your Analytics Dashboard',
      description: 'Learn how to interpret your store\'s analytics and make data-driven decisions.',
      duration: '11:45',
      level: 'intermediate',
      category: 'analytics',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      views: 5430,
      date: 'April 15, 2025'
    },
    {
      id: 'theme-customization',
      title: 'Advanced Theme Customization',
      description: 'Take your store design to the next level with custom CSS and template modifications.',
      duration: '18:20',
      level: 'advanced',
      category: 'store-setup',
      thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      views: 4980,
      date: 'April 8, 2025'
    }
  ]

  const filteredTutorials = tutorials.filter(tutorial => {
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || tutorial.category === selectedCategory
    const matchesLevel = !selectedLevel || tutorial.level === selectedLevel
    const matchesSearch = !searchQuery || 
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tutorial.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesLevel && matchesSearch
  })

  const stepByStepGuides = [
    {
      title: "Setting Up Your First Store",
      steps: [
        "Create your Oomor account",
        "Choose your store name and URL",
        "Select a theme that matches your brand",
        "Customize your store's appearance",
        "Configure basic store settings"
      ],
      link: "#"
    },
    {
      title: "Adding Products to Your Store",
      steps: [
        "Navigate to the Products section",
        "Click 'Add New Product'",
        "Enter product details and pricing",
        "Upload high-quality product images",
        "Set inventory and shipping options"
      ],
      link: "#"
    },
    {
      title: "Configuring Payment Methods",
      steps: [
        "Go to Settings > Payments",
        "Enable your preferred payment gateways",
        "Enter your payment account details",
        "Set up tax rates for different regions",
        "Test the checkout process"
      ],
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Oomor Tutorials</h1>
            <p className="text-xl opacity-90 mb-8">
              Step-by-step guides to help you get the most out of your Oomor store
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search tutorials..."
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
            <h2 className="text-lg font-semibold">Filter Tutorials</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="text-sm font-medium text-gray-700 mr-2 pt-2">Category:</div>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3">
            <div className="text-sm font-medium text-gray-700 mr-2 pt-2">Level:</div>
            {levels.map((level) => (
              <button
                key={level.id}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === level.id
                    ? 'bg-secondary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedLevel(level.id === selectedLevel ? null : level.id)}
              >
                {level.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Tutorial */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Tutorial</h2>
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative">
              <div className="relative pb-[56.25%]">
                <img 
                  src={featuredTutorial.thumbnail} 
                  alt={featuredTutorial.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4">
                    <Play className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                {categories.find(c => c.id === featuredTutorial.category)?.name}
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-full flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {featuredTutorial.duration}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Tag className="w-4 h-4 text-gray-500 mr-1" />
                <span className="text-sm text-gray-500 mr-4">{levels.find(l => l.id === featuredTutorial.level)?.name}</span>
                <Star className="w-4 h-4 text-yellow-500 mr-1" />
                <span className="text-sm text-gray-500">Featured</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{featuredTutorial.title}</h3>
              <p className="text-gray-600 mb-4">{featuredTutorial.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {featuredTutorial.views.toLocaleString()} views • {featuredTutorial.date}
                </div>
                <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center">
                  Watch Now
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tutorial List */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">All Tutorials</h2>
          
          {filteredTutorials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTutorials.map((tutorial) => (
                <div key={tutorial.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="relative pb-[56.25%]">
                      <img 
                        src={tutorial.thumbnail} 
                        alt={tutorial.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="bg-white bg-opacity-90 rounded-full p-3">
                          <Play className="w-6 h-6 text-primary-600" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-md flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {tutorial.duration}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">
                        {categories.find(c => c.id === tutorial.category)?.name}
                      </span>
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {levels.find(l => l.id === tutorial.level)?.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{tutorial.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tutorial.description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-500">
                        {tutorial.views.toLocaleString()} views
                      </div>
                      <button className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors flex items-center">
                        Watch
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No tutorials found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
            </div>
          )}
          
          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Load More Tutorials
            </button>
          </div>
        </div>

        {/* Step-by-Step Guides */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Step-by-Step Guides</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {stepByStepGuides.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold mb-4">{guide.title}</h3>
                <ol className="list-decimal pl-5 space-y-2 mb-6">
                  {guide.steps.map((step, i) => (
                    <li key={i} className="text-gray-600">{step}</li>
                  ))}
                </ol>
                <a 
                  href={guide.link} 
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  View Full Guide
                  <ChevronRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-50 p-12 rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Need personalized help?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or challenges you might face while setting up your store.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center"
            >
              Contact Support
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/help" 
              className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}