import { useState } from 'react'
import { Client, Databases } from 'appwrite'
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, HelpCircle } from 'lucide-react'
import {assertIsDefined} from "@/lib/utils.ts";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    try {
      assertIsDefined(import.meta.env.VITE_APP_PROJECT_ID, 'Project ID is not defined')
      assertIsDefined(import.meta.env.VITE_APP_APPWRITE_URL, 'Appwrite URL is not defined')
      const client = new Client()
        .setEndpoint(import.meta.env.VITE_APP_APPWRITE_URL)
        .setProject(import.meta.env.VITE_APP_PROJECT_ID)

      const databases = new Databases(client)

      await databases.createDocument(
        '67f281a0000f2c5f179c',
        '67f281c6000d8390cc84',
        'unique()',
        formData
      )

      setSubmitSuccess(true)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const offices = [
    {
      city: "Cairo",
      address: "123 Smart Village, 6th of October",
      phone: "+20 123 456 7890",
      email: "cairo@oomor.com",
      hours: "Mon-Fri: 9am - 5pm"
    },
    {
      city: "Dubai",
      address: "456 Business Bay, Downtown Dubai",
      phone: "+971 4 123 4567",
      email: "dubai@oomor.com",
      hours: "Sun-Thu: 8am - 4pm"
    },
    {
      city: "London",
      address: "789 Tech City, Shoreditch",
      phone: "+44 20 1234 5678",
      email: "london@oomor.com",
      hours: "Mon-Fri: 9am - 6pm"
    }
  ]

  const contactReasons = [
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales Question" },
    { value: "support", label: "Technical Support" },
    { value: "billing", label: "Billing Issue" },
    { value: "partnership", label: "Partnership Opportunity" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl opacity-90 mb-8">
              Have questions or need assistance? Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Methods Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 -mt-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
            <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Our friendly team is here to help.
            </p>
            <a href="mailto:contact@oomor.com" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              contact@oomor.com
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
            <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Call Us</h3>
            <p className="text-gray-600 mb-4">
              Mon-Fri from 8am to 5pm.
            </p>
            <a href="tel:+201234567890" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              +20 123 456 7890
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
            <div className="bg-primary-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Live Chat</h3>
            <p className="text-gray-600 mb-4">
              Our support team is available 24/7.
            </p>
            <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
              Start a conversation
            </button>
          </div>
        </div>
      </div>

      {/* Contact Form and Offices Section */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      There was an error sending your message. Please try again.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select a reason for contacting us</option>
                  {contactReasons.map((reason) => (
                    <option key={reason.value} value={reason.value}>
                      {reason.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
            <p className="text-gray-600 mb-8">
              Visit us at one of our office locations around the world.
            </p>

            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Phone className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <span className="text-gray-600">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <HelpCircle className="w-4 h-4 mr-2" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to frequently asked questions about contacting our team
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">What are your support hours?</h3>
              <p className="text-gray-600">
                Our customer support team is available Monday through Friday from 8am to 5pm in each local time zone. For urgent issues, we offer 24/7 emergency support for our Professional and Enterprise customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How quickly will I get a response?</h3>
              <p className="text-gray-600">
                We aim to respond to all inquiries within 24 hours. For technical support, our response times vary by plan: Starter (24h), Professional (12h), and Enterprise (4h).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Do you offer phone support?</h3>
              <p className="text-gray-600">
                Yes, phone support is available for all customers. Our Professional and Enterprise plans include priority phone support with dedicated support agents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3">How do I report a technical issue?</h3>
              <p className="text-gray-600">
                The fastest way to get technical help is through our support portal at support.oomor.com. You can also email support@oomor.com or use the contact form on this page.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <div className="bg-primary-50 p-12 rounded-2xl">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Users className="w-4 h-4 mr-2" />
            <span>Join Our Community</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Connect with other Oomor users</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Join our community forum to connect with other users, share ideas, and get help from our community experts.
          </p>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
            Join Community Forum
          </button>
        </div>
      </div>
    </div>
  )
}
