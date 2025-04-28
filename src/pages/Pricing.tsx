import { Tag, Check, HelpCircle, X, Shield, CreditCard, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  const plans = [
    {
      name: "Starter",
      monthlyPrice: "$9",
      annualPrice: "$90",
      description: "Perfect for new businesses just getting started with online sales",
      features: [
        "Up to 50 products",
        "Basic store customization",
        "Payment processing (2.9% + 30¢)",
        "Standard shipping labels",
        "Email support (24h response)"
      ],
      notIncluded: [
        "Advanced analytics",
        "API access",
        "White-label options",
        "Dedicated account manager"
      ],
      cta: "Start Free Trial",
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      textColor: "text-gray-700",
      mostPopular: false
    },
    {
      name: "Professional",
      monthlyPrice: "$29",
      annualPrice: "$290",
      description: "For growing businesses ready to scale their online presence",
      features: [
        "Up to 500 products",
        "Advanced customization",
        "Payment processing (2.5% + 30¢)",
        "Delivery integration",
        "Inventory management",
        "Priority support (12h response)",
        "Analytics dashboard"
      ],
      notIncluded: [
        "API access",
        "White-label options",
        "Dedicated account manager"
      ],
      cta: "Get Started",
      color: "bg-gradient-to-r from-primary-600 to-primary-800",
      textColor: "text-primary-600",
      mostPopular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "$99",
      annualPrice: "$990",
      description: "For established businesses with high-volume sales",
      features: [
        "Unlimited products",
        "White-label options",
        "Payment processing (2.2% + 30¢)",
        "API access",
        "Advanced analytics",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom integrations"
      ],
      notIncluded: [],
      cta: "Contact Sales",
      color: "bg-gradient-to-r from-secondary-600 to-secondary-800",
      textColor: "text-secondary-600",
      mostPopular: false
    }
  ]

  const faqs = [
    {
      question: "Do you offer a free trial?",
      answer: "Yes, all plans include a 14-day free trial with no credit card required. You can explore all features and decide which plan is right for your business."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for annual plans."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You only pay the advertised price."
    },
    {
      question: "Do you offer discounts for nonprofits or educational institutions?",
      answer: "Yes, we offer special pricing for qualified nonprofits, educational institutions, and startups. Please contact our sales team for more information."
    },
    {
      question: "What happens when I reach my product limit?",
      answer: "You'll receive a notification when you're approaching your product limit. You can upgrade to a higher plan at any time to increase your limit."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl opacity-90 mb-8">Choose the perfect plan for your business with no hidden fees or long-term commitments.</p>
            <div className="bg-white/10 p-1 rounded-full inline-flex">
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'monthly' ? 'bg-white text-primary-600' : 'text-white'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === 'annual' ? 'bg-white text-primary-600' : 'text-white'
                }`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual (Save 17%)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 -mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl transition-all duration-300 group relative ${
                plan.mostPopular 
                  ? 'shadow-card border-2 border-primary-500 md:-mt-4 md:mb-4 md:py-8' 
                  : 'shadow-soft hover:shadow-card border border-gray-100'
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className="bg-primary-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className={`${plan.textColor} font-semibold mb-2`}>{plan.name}</div>
                <div className="mb-3 flex items-baseline">
                  <span className="text-4xl font-bold">
                    {billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {billingCycle === 'monthly' ? '/month' : '/year'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <button className={`w-full py-3 px-4 rounded-xl font-semibold mb-8 transition-all ${
                  plan.mostPopular 
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm' 
                    : `${plan.color} text-white hover:opacity-90`
                }`}>
                  {plan.cta}
                </button>

                <div className="border-t border-gray-100 pt-6">
                  <p className="font-medium text-sm mb-4">Plan includes:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.notIncluded.length > 0 && (
                  <div className="border-t border-gray-100 pt-6 mt-6">
                    <p className="font-medium text-sm mb-4 text-gray-500">Not included:</p>
                    <ul className="space-y-3">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <X className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-500 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Comparison Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Compare Plan Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find the plan that's right for your business with our detailed feature comparison
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 px-6 text-left font-semibold text-gray-900 w-1/4">Feature</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-900">Starter</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-900">Professional</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-900">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Products</td>
                <td className="py-4 px-6 text-center">Up to 50</td>
                <td className="py-4 px-6 text-center">Up to 500</td>
                <td className="py-4 px-6 text-center">Unlimited</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Store Customization</td>
                <td className="py-4 px-6 text-center">Basic</td>
                <td className="py-4 px-6 text-center">Advanced</td>
                <td className="py-4 px-6 text-center">Advanced + White Label</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Payment Processing Fee</td>
                <td className="py-4 px-6 text-center">2.9% + 30¢</td>
                <td className="py-4 px-6 text-center">2.5% + 30¢</td>
                <td className="py-4 px-6 text-center">2.2% + 30¢</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Shipping Integration</td>
                <td className="py-4 px-6 text-center">Standard</td>
                <td className="py-4 px-6 text-center">Advanced</td>
                <td className="py-4 px-6 text-center">Advanced + Custom</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Analytics</td>
                <td className="py-4 px-6 text-center">Basic</td>
                <td className="py-4 px-6 text-center">Advanced</td>
                <td className="py-4 px-6 text-center">Enterprise-grade</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Support</td>
                <td className="py-4 px-6 text-center">Email (24h)</td>
                <td className="py-4 px-6 text-center">Priority (12h)</td>
                <td className="py-4 px-6 text-center">24/7 + Dedicated Manager</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">API Access</td>
                <td className="py-4 px-6 text-center">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="py-4 px-6 font-medium">Custom Integrations</td>
                <td className="py-4 px-6 text-center">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="py-4 px-6 text-center">
                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Oomor</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best value and experience for your online business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
              <p className="text-gray-600">
                We believe in transparent pricing. What you see is what you pay, with no surprise charges or hidden costs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Free Trial</h3>
              <p className="text-gray-600">
                Try any plan free for 14 days with no credit card required. Experience the full platform before committing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-soft">
              <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cancel Anytime</h3>
              <p className="text-gray-600">
                No long-term contracts or commitments. You're free to cancel your subscription at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our pricing and plans
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-6">
              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-50 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Oomor for their online store needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Start Your Free Trial
            </button>
            <Link to="/contact" className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
