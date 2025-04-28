import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Tag, Calendar, User, Clock, ChevronRight, Mail } from 'lucide-react'

export function BlogPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the email to a newsletter service
    setSubscribed(true)
    setEmail('')
  }

  const featuredPost = {
    id: 'how-to-increase-sales',
    title: 'How to Increase Your E-commerce Sales by 200% in 3 Months',
    excerpt: "Learn the proven strategies that helped our customers triple their sales in just 90 days using Oomor's powerful features.",
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    author: 'Sarah Johnson',
    date: 'May 15, 2023',
    readTime: '8 min read',
    category: 'Growth Strategies'
  }

  const blogPosts = [
    {
      id: 'mobile-optimization',
      title: "Mobile Optimization: Why It's Critical for E-commerce Success",
      excerpt: 'With over 70% of online shopping happening on mobile devices, optimizing your store for mobile is no longer optional.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      author: 'Michael Chen',
      date: 'May 10, 2023',
      readTime: '6 min read',
      category: 'Mobile Commerce'
    },
    {
      id: 'customer-retention',
      title: '5 Customer Retention Strategies That Actually Work',
      excerpt: "Acquiring new customers costs 5x more than retaining existing ones. Here's how to keep your customers coming back.",
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      author: 'Jessica Williams',
      date: 'May 5, 2023',
      readTime: '7 min read',
      category: 'Customer Experience'
    },
    {
      id: 'inventory-management',
      title: 'Inventory Management Best Practices for Small Businesses',
      excerpt: 'Effective inventory management can make or break your e-commerce business. Learn how to optimize your approach.',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      author: 'David Martinez',
      date: 'April 28, 2023',
      readTime: '5 min read',
      category: 'Operations'
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing for E-commerce: A Complete Guide',
      excerpt: 'Leverage the power of social media to drive traffic and sales to your online store with these proven tactics.',
      image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      author: 'Emma Thompson',
      date: 'April 20, 2023',
      readTime: '9 min read',
      category: 'Marketing'
    },
    {
      id: 'payment-gateways',
      title: 'Choosing the Right Payment Gateways for Your E-commerce Store',
      excerpt: "The right payment options can significantly impact your conversion rates. Here's how to choose wisely.",
      image: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      author: 'Robert Kim',
      date: 'April 15, 2023',
      readTime: '6 min read',
      category: 'Payments'
    },
    {
      id: 'seo-techniques',
      title: 'Advanced SEO Techniques for E-commerce Websites',
      excerpt: 'Boost your organic traffic and outrank competitors with these advanced SEO strategies specifically for e-commerce.',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
      author: 'Sophia Garcia',
      date: 'April 8, 2023',
      readTime: '8 min read',
      category: 'SEO'
    }
  ]

  const categories = [
    { name: 'All Categories', count: 42 },
    { name: 'Growth Strategies', count: 12 },
    { name: 'Marketing', count: 9 },
    { name: 'Customer Experience', count: 8 },
    { name: 'Operations', count: 7 },
    { name: 'SEO', count: 6 },
    { name: 'Mobile Commerce', count: 5 },
    { name: 'Payments', count: 4 },
    { name: 'Case Studies', count: 3 }
  ]

  const popularTags = [
    'E-commerce', 'Marketing', 'Sales', 'Customer Retention', 'SEO', 
    'Mobile', 'Payments', 'Growth', 'Social Media', 'Analytics'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Oomor Blog</h1>
            <p className="text-xl opacity-90 mb-8">
              Insights, strategies, and tips to help you grow your online business
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search articles..."
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-80">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">
                    <Link to={`/blog/${featuredPost.id}`} className="hover:text-primary-600 transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Read Full Article
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Latest Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-medium px-2 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2">
                        <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{post.excerpt}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <div className="flex items-center mr-3">
                          <User className="w-3 h-3 mr-1" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center mr-3">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center text-sm text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Read More
                        <ChevronRight className="w-3 h-3 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#" className="flex justify-between items-center py-2 hover:text-primary-600 transition-colors">
                      <span>{category.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{category.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
              <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-primary-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Mail className="w-5 h-5 text-primary-600 mr-2" />
                <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Get the latest articles, resources, and tips to help you grow your online business.
              </p>
              {subscribed ? (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  <p className="text-sm font-medium">
                    Thank you for subscribing! Check your email to confirm your subscription.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <div className="mb-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to grow your online business?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are using Oomor to build successful e-commerce stores.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing" className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </Link>
            <Link to="/contact" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
