import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  HelpCircle, 
  Book, 
  Video, 
  MessageSquare, 
  Mail, 
  Phone,
  ChevronDown,
  ChevronUp,
  FileText,
  ShoppingCart,
  CreditCard,
  Settings,
  Users,
  BarChart,
  Globe,
  Clock
} from 'lucide-react'

export function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  const helpCategories = [
    {
      title: "Getting Started",
      icon: <Book className="w-6 h-6" />,
      description: "Learn the basics of setting up and using your Oomor store",
      link: "#getting-started"
    },
    {
      title: "Video Tutorials",
      icon: <Video className="w-6 h-6" />,
      description: "Step-by-step video guides for common tasks",
      link: "#tutorials"
    },
    {
      title: "FAQs",
      icon: <HelpCircle className="w-6 h-6" />,
      description: "Answers to frequently asked questions",
      link: "#faqs"
    },
    {
      title: "Contact Support",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Get help from our support team",
      link: "#support"
    }
  ]

  const documentationCategories = [
    {
      title: "Store Setup",
      icon: <ShoppingCart className="w-6 h-6" />,
      articles: [
        "Creating your first store",
        "Customizing your store design",
        "Setting up product categories",
        "Adding products to your store",
        "Configuring shipping options"
      ]
    },
    {
      title: "Payments",
      icon: <CreditCard className="w-6 h-6" />,
      articles: [
        "Setting up payment methods",
        "Managing payment gateways",
        "Understanding transaction fees",
        "Setting up taxes",
        "Handling refunds"
      ]
    },
    {
      title: "Store Management",
      icon: <Settings className="w-6 h-6" />,
      articles: [
        "Managing inventory",
        "Processing orders",
        "Setting up discounts and promotions",
        "Email notifications",
        "User roles and permissions"
      ]
    },
    {
      title: "Marketing",
      icon: <Users className="w-6 h-6" />,
      articles: [
        "SEO best practices",
        "Social media integration",
        "Email marketing campaigns",
        "Creating discount codes",
        "Abandoned cart recovery"
      ]
    },
    {
      title: "Analytics",
      icon: <BarChart className="w-6 h-6" />,
      articles: [
        "Understanding your dashboard",
        "Sales reports",
        "Customer analytics",
        "Traffic sources",
        "Conversion tracking"
      ]
    },
    {
      title: "Advanced Features",
      icon: <Globe className="w-6 h-6" />,
      articles: [
        "Multi-language support",
        "API documentation",
        "Custom integrations",
        "Mobile app features",
        "Webhooks and automation"
      ]
    }
  ]

  const faqs = [
    {
      id: "faq1",
      question: "How do I create a new store?",
      answer: "Creating a new store is simple. After logging in to your Oomor account, click on the 'Create Store' button on your dashboard. Follow the step-by-step setup wizard, which will guide you through choosing a template, adding your store details, and setting up your first products."
    },
    {
      id: "faq2",
      question: "How do I add products to my store?",
      answer: "To add products, navigate to the 'Products' section in your dashboard and click 'Add New Product'. Fill in the product details including name, description, price, and images. You can also set inventory levels, add variants (like sizes or colors), and organize products into categories."
    },
    {
      id: "faq3",
      question: "What payment methods can I offer my customers?",
      answer: "Oomor supports a wide range of payment methods including credit cards (via Stripe, PayPal, and other gateways), digital wallets (Apple Pay, Google Pay), and local payment methods specific to different regions. You can configure these in the 'Payments' section of your dashboard."
    },
    {
      id: "faq4",
      question: "How do I set up shipping for my products?",
      answer: "Go to the 'Shipping' section in your dashboard to set up shipping options. You can create shipping zones based on countries or regions, set different rates based on weight or price, and integrate with shipping carriers for real-time rates and label printing."
    },
    {
      id: "faq5",
      question: "Can I customize the design of my store?",
      answer: "Yes, Oomor offers extensive customization options. You can choose from a variety of professional templates, then customize colors, fonts, and layouts to match your brand. Advanced users can also use our theme editor to make more detailed changes to the HTML and CSS."
    },
    {
      id: "faq6",
      question: "How do I track my store's performance?",
      answer: "Your dashboard provides comprehensive analytics including sales data, visitor statistics, conversion rates, and more. You can view reports for different time periods, track the performance of individual products, and see where your traffic is coming from."
    },
    {
      id: "faq7",
      question: "What marketing tools are available?",
      answer: "Oomor includes a range of built-in marketing tools such as SEO optimization, social media integration, email marketing campaigns, discount codes, and abandoned cart recovery. You can access these from the 'Marketing' section of your dashboard."
    },
    {
      id: "faq8",
      question: "How do I get help if I'm having technical issues?",
      answer: "If you're experiencing technical issues, you can contact our support team via live chat, email, or phone depending on your plan. We also offer extensive documentation, video tutorials, and a community forum where you can get help from other Oomor users."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
            <p className="text-xl opacity-90 mb-8">
              Find answers, learn how to use Oomor, and get support when you need it
            </p>
            <div className="relative max-w-xl">
              <input
                type="text"
                placeholder="Search for help..."
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

      {/* Help Categories */}
      <div className="max-w-7xl mx-auto py-16 px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-8">
          {helpCategories.map((category, index) => (
            <a 
              key={index} 
              href={category.link}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="bg-primary-100 p-4 rounded-full mb-4">
                <div className="text-primary-600">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </a>
          ))}
        </div>
      </div>

      {/* Documentation Section */}
      <div id="getting-started" className="max-w-7xl mx-auto py-16 px-4 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Documentation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive guides to help you make the most of your Oomor store
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentationCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                  <div className="text-gray-700">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.articles.map((article, i) => (
                  <li key={i}>
                    <a href="#" className="flex items-start py-2 text-gray-700 hover:text-primary-600 transition-colors">
                      <FileText className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      <span>{article}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Video Tutorials */}
      <div id="tutorials" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Video Tutorials</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn how to use Oomor with our step-by-step video guides
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative pb-[56.25%]">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Getting Started with Oomor</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn how to set up your store, add products, and make your first sale.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>10:25</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative pb-[56.25%]">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Customizing Your Store Design</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn how to personalize your store's appearance to match your brand.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>8:15</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative pb-[56.25%]">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <Video className="w-12 h-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Setting Up Payment Methods</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Learn how to configure payment gateways and accept payments online.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>12:40</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              View All Tutorials
            </button>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div id="faqs" className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about using Oomor
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 py-6">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {expandedFaq === faq.id ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {expandedFaq === faq.id && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link 
            to="/contact" 
            className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>

      {/* Support Options */}
      <div id="support" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get Support</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you with any questions or issues
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Chat with our support team in real-time for immediate assistance.
              </p>
              <button className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors w-full">
                Start Chat
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Available Monday-Friday, 9am-5pm
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:support@oomor.com" 
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors block text-center"
              >
                support@oomor.com
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Response time: within 24 hours
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone Support</h3>
              <p className="text-gray-600 mb-6">
                Call us directly for urgent issues or complex questions.
              </p>
              <a 
                href="tel:+18001234567" 
                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors block text-center"
              >
                +1 (800) 123-4567
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Available for Professional and Enterprise plans
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <div className="bg-primary-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Join the Oomor Community</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with other Oomor users, share tips, and get help from experienced store owners.
          </p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Join Community Forum
          </button>
        </div>
      </div>
    </div>
  )
}
