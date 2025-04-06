export function CtaSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p className="text-xl mb-8 text-blue-100">Join thousands of entrepreneurs who launched their online stores with Oomor</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-full transition-all">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-full transition-all">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  )
}
