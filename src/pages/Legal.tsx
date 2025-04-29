import { useState } from 'react'
import { Shield, FileText, Lock } from 'lucide-react'

export function LegalPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('privacy')

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Information</h1>
            <p className="text-xl opacity-90 mb-8">
              Important information about your rights and our responsibilities
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-wrap gap-2 border-b border-gray-200">
          <button 
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              expandedSection === 'privacy' 
                ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-primary-600'
            }`}
            onClick={() => toggleSection('privacy')}
          >
            Privacy Policy
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              expandedSection === 'terms' 
                ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-primary-600'
            }`}
            onClick={() => toggleSection('terms')}
          >
            Terms of Service
          </button>
          <button 
            className={`px-4 py-2 font-medium text-sm rounded-t-lg ${
              expandedSection === 'cookies' 
                ? 'bg-primary-100 text-primary-700 border-b-2 border-primary-600' 
                : 'text-gray-600 hover:text-primary-600'
            }`}
            onClick={() => toggleSection('cookies')}
          >
            Cookies Policy
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto pb-20 px-4">
        {/* Privacy Policy */}
        <section 
          id="privacy" 
          className={`${expandedSection === 'privacy' ? 'block' : 'hidden'}`}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-2 rounded-full mr-4">
              <Lock className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          </div>
          
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Introduction</h3>
              <p className="mb-3">
                At Oomor, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our e-commerce platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              <p>
                We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Information We Collect</h3>
              <p className="mb-3">We may collect information about you in a variety of ways. The information we may collect via the Site includes:</p>
              
              <h4 className="text-lg font-medium mt-4 mb-2">Personal Data</h4>
              <p className="mb-3">
                Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2">Derivative Data</h4>
              <p className="mb-3">
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>
              
              <h4 className="text-lg font-medium mt-4 mb-2">Financial Data</h4>
              <p className="mb-3">
                Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Use of Your Information</h3>
              <p className="mb-3">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              
              <ul className="list-disc pl-5 space-y-1">
                <li>Create and manage your account.</li>
                <li>Process your orders and manage your transactions.</li>
                <li>Send you email newsletters, if you have opted in to receive them.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <p>
                If you have questions or comments about this Privacy Policy, please contact us at:
                <br /><br />
                Oomor, Inc.<br />
                123 Smart Village, 6th of October<br />
                Cairo, Egypt<br />
                privacy@oomor.com
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service */}
        <section 
          id="terms" 
          className={`${expandedSection === 'terms' ? 'block' : 'hidden'}`}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-2 rounded-full mr-4">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-semibold">Terms of Service</h2>
          </div>
          
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Agreement to Terms</h3>
              <p className="mb-3">
                These Terms of Service constitute a legally binding agreement made between you and Oomor, concerning your access to and use of the Oomor website and platform. You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service.
              </p>
              <p>
                IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF SERVICE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Intellectual Property Rights</h3>
              <p className="mb-3">
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">User Representations</h3>
              <p className="mb-3">By using the Site, you represent and warrant that:</p>
              
              <ul className="list-disc pl-5 space-y-1">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                <li>You are not a minor in the jurisdiction in which you reside.</li>
                <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise.</li>
                <li>You will not use the Site for any illegal or unauthorized purpose.</li>
                <li>Your use of the Site will not violate any applicable law or regulation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Refunds Policy</h3>
              <p className="mb-3">
                All sales are final and no refund will be issued. However, if you are not satisfied with our services, please contact us and we will work with you to resolve any issues.
              </p>
            </div>
          </div>
        </section>

        {/* Cookies Policy */}
        <section 
          id="cookies" 
          className={`${expandedSection === 'cookies' ? 'block' : 'hidden'}`}
        >
          <div className="flex items-center mb-6">
            <div className="bg-primary-100 p-2 rounded-full mr-4">
              <Shield className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-semibold">Cookies Policy</h2>
          </div>
          
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">What Are Cookies</h3>
              <p className="mb-3">
                As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored, however, this may downgrade or 'break' certain elements of the site's functionality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">How We Use Cookies</h3>
              <p className="mb-3">
                We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">The Cookies We Set</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <p className="font-medium">Account related cookies</p>
                  <p>If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out, however in some cases they may remain afterwards to remember your site preferences when logged out.</p>
                </li>
                <li>
                  <p className="font-medium">Login related cookies</p>
                  <p>We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.</p>
                </li>
                <li>
                  <p className="font-medium">Orders processing related cookies</p>
                  <p>This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly.</p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">More Information</h3>
              <p className="mb-3">
                Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site.
              </p>
              <p>
                If you are still looking for more information then you can contact us through one of our preferred contact methods:
                <br /><br />
                Email: privacy@oomor.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}