import { useState } from 'react'
import { 
  Calendar, 
  Tag, 
  ArrowRight, 
  Clock, 
  Star, 
  CheckCircle, 
  AlertCircle, 
  Zap,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
  Bell,
  Shield
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function UpdatesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedUpdate, setExpandedUpdate] = useState<string | null>('v2-5')

  const toggleUpdate = (id: string) => {
    setExpandedUpdate(expandedUpdate === id ? null : id)
  }

  const categories = [
    { id: 'all', name: 'All Updates' },
    { id: 'features', name: 'New Features' },
    { id: 'improvements', name: 'Improvements' },
    { id: 'fixes', name: 'Bug Fixes' },
    { id: 'security', name: 'Security Updates' }
  ]

  const updates = [
    {
      id: 'v2-5',
      version: 'v2.5',
      title: 'Major Platform Update',
      date: 'May 15, 2023',
      description: 'A comprehensive update focusing on performance improvements and new marketing tools.',
      changes: [
        {
          category: 'features',
          items: [
            'New AI-powered product recommendation engine',
            'Advanced email marketing automation tools',
            'Multi-currency support for international stores',
            'Customizable checkout experience with drag-and-drop editor'
          ]
        },
        {
          category: 'improvements',
          items: [
            'Improved page load speed by 40%',
            'Enhanced mobile responsiveness across all store templates',
            'Streamlined inventory management interface',
            'More detailed analytics dashboard with exportable reports'
          ]
        },
        {
          category: 'fixes',
          items: [
            'Fixed issue with discount codes not applying correctly',
            'Resolved image upload errors on certain browsers',
            'Fixed pagination in product catalog',
            'Corrected tax calculation for international orders'
          ]
        }
      ]
    },
    {
      id: 'v2-4-2',
      version: 'v2.4.2',
      title: 'Security & Performance Update',
      date: 'April 28, 2023',
      description: 'This update focuses on security enhancements and performance optimizations.',
      changes: [
        {
          category: 'security',
          items: [
            'Enhanced password security requirements',
            'Improved protection against XSS attacks',
            'Updated SSL certificate handling',
            'Added two-factor authentication option for admin accounts'
          ]
        },
        {
          category: 'improvements',
          items: [
            'Reduced API response time by 25%',
            'Optimized image loading for faster page rendering',
            'Improved caching mechanism for product pages'
          ]
        },
        {
          category: 'fixes',
          items: [
            'Fixed rare issue with order status not updating correctly',
            'Resolved customer login problems on Safari browsers'
          ]
        }
      ]
    },
    {
      id: 'v2-4',
      version: 'v2.4',
      title: 'Enhanced Marketing Tools',
      date: 'April 10, 2023',
      description: 'New marketing features to help you grow your business and reach more customers.',
      changes: [
        {
          category: 'features',
          items: [
            'New social media integration tools',
            'Abandoned cart recovery automation',
            'Customer segmentation for targeted marketing',
            'Enhanced SEO tools with keyword suggestions'
          ]
        },
        {
          category: 'improvements',
          items: [
            'Redesigned marketing dashboard',
            'Improved email template editor',
            'Enhanced analytics for marketing campaigns'
          ]
        },
        {
          category: 'fixes',
          items: [
            'Fixed issue with email scheduling',
            'Resolved display problems in email previews'
          ]
        }
      ]
    },
    {
      id: 'v2-3-1',
      version: 'v2.3.1',
      title: 'Bug Fix Release',
      date: 'March 25, 2023',
      description: 'This release addresses several important bugs reported by our users.',
      changes: [
        {
          category: 'fixes',
          items: [
            'Fixed critical issue with checkout process on mobile devices',
            'Resolved product variant selection problems',
            'Fixed customer account creation errors',
            'Corrected shipping calculation for international orders',
            'Fixed search functionality issues'
          ]
        }
      ]
    },
    {
      id: 'v2-3',
      version: 'v2.3',
      title: 'Inventory & Order Management',
      date: 'March 10, 2023',
      description: 'Major improvements to inventory tracking and order management capabilities.',
      changes: [
        {
          category: 'features',
          items: [
            'New inventory forecasting tools',
            'Batch order processing capabilities',
            'Advanced product variant management',
            'Automated low stock notifications'
          ]
        },
        {
          category: 'improvements',
          items: [
            'Redesigned order management interface',
            'Enhanced product import/export functionality',
            'Improved inventory tracking accuracy'
          ]
        },
        {
          category: 'fixes',
          items: [
            'Fixed inventory sync issues with multiple sales channels',
            'Resolved order status update delays'
          ]
        }
      ]
    }
  ]

  const filteredUpdates = updates.filter(update => {
    if (selectedCategory && selectedCategory !== 'all') {
      const hasCategory = update.changes.some(change => change.category === selectedCategory)
      if (!hasCategory) return false
    }

    if (searchQuery) {
      const matchesSearch = 
        update.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        update.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.changes.some(change => 
          change.items.some(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      if (!matchesSearch) return false
    }

    return true
  })

  const upcomingFeatures = [
    {
      title: "Advanced AI Product Photography",
      description: "Generate professional product photos from simple snapshots using our AI enhancement technology.",
      eta: "Q3 2023",
      category: "AI Tools"
    },
    {
      title: "Global Tax Compliance",
      description: "Automatic tax calculation and compliance for over 100 countries, including VAT, GST, and sales tax.",
      eta: "Q3 2023",
      category: "International Commerce"
    },
    {
      title: "Advanced Customer Insights",
      description: "Detailed customer behavior analytics with actionable insights to improve conversion.",
      eta: "Q4 2023",
      category: "Analytics"
    },
    {
      title: "Mobile App Builder",
      description: "Create custom mobile apps for your store without coding knowledge.",
      eta: "Q4 2023",
      category: "Mobile Commerce"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Updates</h1>
            <p className="text-xl opacity-90 mb-8">
              Stay informed about the latest features, improvements, and fixes to the Oomor platform
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search updates..."
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
        </div>

        {/* Release Notes */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Release Notes</h2>

          {filteredUpdates.length > 0 ? (
            <div className="space-y-6">
              {filteredUpdates.map((update) => (
                <div key={update.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleUpdate(update.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <Tag className="w-4 h-4 text-primary-600 mr-2" />
                          <span className="text-primary-600 font-semibold">{update.version}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {update.date}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{update.title}</h3>
                      </div>
                      <div className="mt-4 md:mt-0">
                        {expandedUpdate === update.id ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{update.description}</p>
                  </div>

                  {expandedUpdate === update.id && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100 mt-2">
                      {update.changes.map((change, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h4 className="text-lg font-semibold mb-3 flex items-center">
                            {change.category === 'features' && (
                              <Zap className="w-5 h-5 text-blue-500 mr-2" />
                            )}
                            {change.category === 'improvements' && (
                              <Star className="w-5 h-5 text-yellow-500 mr-2" />
                            )}
                            {change.category === 'fixes' && (
                              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            )}
                            {change.category === 'security' && (
                              <Shield className="w-5 h-5 text-red-500 mr-2" />
                            )}
                            {change.category.charAt(0).toUpperCase() + change.category.slice(1)}
                          </h4>
                          <ul className="space-y-2 pl-7">
                            {change.items.map((item, i) => (
                              <li key={i} className="text-gray-600 list-disc">{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <AlertCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No updates found</h3>
              <p className="text-gray-600">
                Try adjusting your filters or search query to find what you're looking for.
              </p>
            </div>
          )}

          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View Older Updates
            </button>
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              <span>Coming Soon</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Upcoming Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get a sneak peek at what we're working on next for the Oomor platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-50 text-primary-700 text-xs font-bold px-3 py-1 rounded-full">
                    {feature.category}
                  </div>
                  <div className="ml-auto flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    ETA: {feature.eta}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="bg-primary-50 p-12 rounded-2xl mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
                <Bell className="w-4 h-4 mr-2" />
                <span>Stay Updated</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to our product updates newsletter to be the first to know about new features, improvements, and fixes.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 flex-grow"
                />
                <button
                  type="submit"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-full opacity-10"></div>
                <div className="relative z-10">
                  <Bell className="w-24 h-24 text-primary-600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Have a feature request?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking to improve Oomor based on your feedback. Let us know what features you'd like to see next.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-soft hover:bg-primary-700 transition-colors"
            >
              Submit Feature Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/help" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
