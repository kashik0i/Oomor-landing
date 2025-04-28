import { Tag, Check, HelpCircle } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for new businesses just getting started with online sales",
      features: [
        "Up to 50 products",
        "Basic store customization",
        "Payment processing (2.9% + 30¢)",
        "Standard shipping labels",
        "Email support (24h response)"
      ],
      cta: "Start Free Trial",
      color: "bg-gradient-to-r from-gray-700 to-gray-900",
      textColor: "text-gray-700"
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "For growing businesses ready to scale their online presence",
      popular: true,
      features: [
        "Up to 500 products",
        "Advanced customization",
        "Payment processing (2.5% + 30¢)",
        "Delivery integration",
        "Inventory management",
        "Priority support (12h response)",
        "Analytics dashboard"
      ],
      cta: "Get Started",
      color: "bg-gradient-to-r from-primary-600 to-primary-800",
      textColor: "text-primary-600"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
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
      cta: "Contact Sales",
      color: "bg-gradient-to-r from-secondary-600 to-secondary-800",
      textColor: "text-secondary-600"
    }
  ]

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-500"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Tag className="w-4 h-4 mr-2" />
            <span>Flexible Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose the Perfect Plan for Your Business</h2>
          <p className="text-lg text-gray-600">No hidden fees. All plans include a 14-day free trial with no credit card required.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl transition-all duration-300 group relative ${
                plan.popular 
                  ? 'shadow-card border-2 border-primary-500 md:-mt-4 md:mb-4 md:py-8' 
                  : 'shadow-soft hover:shadow-card border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className="bg-primary-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className={`${plan.textColor} font-semibold mb-2`}>{plan.name}</div>
                <div className="mb-3 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

                <button className={`w-full py-3 px-4 rounded-xl font-semibold mb-8 transition-all ${
                  plan.popular 
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl max-w-3xl mx-auto">
          <div className="flex items-start">
            <div className="bg-primary-100 p-3 rounded-xl mr-4">
              <HelpCircle className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Not sure which plan is right for you?</h3>
              <p className="text-gray-600 mb-4">Our team can help you find the perfect fit for your business needs and goals.</p>
              <a href="/contact" className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
                Schedule a consultation
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
