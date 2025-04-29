import { MessageSquare, Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Handmade Jewelry",
      quote: "Oomor helped me triple my sales in just two months! The platform is intuitive and the customer support team is always there when I need help.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      stars: 5
    },
    {
      name: "Michael Chen",
      business: "Custom Prints",
      quote: "From Instagram to full store in 15 minutes - unbelievable! The seamless integration with my social media accounts made the transition effortless.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      stars: 5
    },
    {
      name: "Emma Rodriguez",
      business: "Organic Skincare",
      quote: "The built-in customer base was a game changer for my small business. I started getting orders within days of launching my store on Oomor.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
      stars: 4
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-yellow-100 rounded-full text-sm font-medium text-yellow-700 mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Customer Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Businesses Worldwide</h2>
          <p className="text-lg text-gray-600">Don't just take our word for it - hear from some of our satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-lg">"{testimonial.quote}"</p>

              <div className="flex items-center mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  loading="lazy"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-white shadow-sm"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-6 rounded-2xl shadow-soft flex items-center flex-col sm:flex-row">
            <div className="flex items-baseline mr-6">
              <span className="font-bold text-4xl">1,250+</span>
              <span className="ml-2 text-primary-100">businesses</span>
            </div>
            <div className="text-lg mt-2 sm:mt-0">selling with Oomor across 30+ countries</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/testimonials" className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center">
            Read more success stories
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
