export function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Legal Information</h1>
        <div className="space-y-8">
          <section id="privacy">
            <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-lg">Our privacy policy explains how we collect and use your data.</p>
          </section>
          <section id="terms">
            <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
            <p className="text-lg">By using our services, you agree to these terms.</p>
          </section>
          <section id="cookies">
            <h2 className="text-2xl font-semibold mb-4">Cookies Policy</h2>
            <p className="text-lg">We use cookies to improve your experience on our site.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
