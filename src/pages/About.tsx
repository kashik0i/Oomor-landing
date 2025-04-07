import { Link } from 'react-router-dom'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

export function AboutPage() {
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null)

  const toggleProfile = (name: string) => {
    setExpandedProfile(expandedProfile === name ? null : name)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Company Overview Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Oomor</h1>
          <div className="max-w-3xl mx-auto text-lg text-gray-600 space-y-4">
            <p>
              At Oomor, we're driven by a mission to democratize e-commerce for small businesses and creators. 
              Our founding team combines decades of technical expertise with a passion for empowering entrepreneurs, 
              bringing together visionary leadership and cutting-edge engineering.
            </p>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Leadership Team</h2>
          
          {/* CEO Profile */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm mb-8">
            <div 
              className="flex flex-col md:flex-row items-start cursor-pointer"
              onClick={() => toggleProfile('amr')}
            >
              <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Amr Badawy</h3>
                <p className="text-indigo-600 font-medium">CEO & Co-Founder</p>
                <p className="text-gray-500 italic">Architect of Simplicity</p>
                <button className="mt-4 text-indigo-600 flex items-center">
                  {expandedProfile === 'amr' ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="md:w-3/4 md:pl-8">
                {expandedProfile === 'amr' ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Key Qualifications</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>5+ years full-stack development experience (PHP, .NET Core, Python)</li>
                        <li>Oracle Certified Database Specialist with FinTech integration expertise</li>
                        <li>OWASP Top 10 security implementation authority</li>
                        <li>Published AI/ML researcher (Non-invasive glucose monitoring)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Core Contributions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Designed Oomor's revolutionary 10-minute store builder framework</li>
                        <li>Architected secure payment gateway integrations (Fawry, PayTabs, Tap)</li>
                        <li>Developed patent-pending CDN architecture for global store performance</li>
                        <li>Led implementation of military-grade Vault secret management system</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Signature Projects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Built peer-to-peer chat protocol using Nostr blockchain/IPFS</li>
                          <li>Created CodeColab IDE-as-a-Service platform (50k+ dev users)</li>
                          <li>Developed AI-powered logo generator using GANs (Graduation Project A-)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                        <p className="text-gray-600">BSc Computer Science (Double Degree)<br />
                        October University & University of Greenwich | 3.2/4 GPA</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">
                    With 5+ years in e-commerce and SaaS leadership, Amr founded Oomor to solve the complexity he saw in existing platforms. 
                    His customer-first philosophy drives our product roadmap and company culture.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* CTO Profile */}
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <div 
              className="flex flex-col md:flex-row items-start cursor-pointer"
              onClick={() => toggleProfile('ahmed')}
            >
              <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ahmed Abozaid</h3>
                <p className="text-indigo-600 font-medium">CTO & Co-Founder</p>
                <p className="text-gray-500 italic">Scalability Maestro</p>
                <button className="mt-4 text-indigo-600 flex items-center">
                  {expandedProfile === 'ahmed' ? (
                    <>
                      <span>Show Less</span>
                      <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span>Show More</span>
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="md:w-3/4 md:pl-8">
                {expandedProfile === 'ahmed' ? (
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Key Qualifications</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Polyglot engineer (Node.js, Spring Boot, .NET, Python)</li>
                        <li>Distributed systems specialist (RabbitMQ, Redis, Kafka)</li>
                        <li>Certified Huawei AI Engineer & IBM Cloud Developer</li>
                        <li>Academic Researcher (95.69% accurate cheating detection system)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Core Contributions</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Built Oomor's real-time analytics engine handling 10k+ RPM</li>
                        <li>Designed fault-tolerant microservices architecture</li>
                        <li>Implemented AI-driven store optimization recommendations</li>
                        <li>Developed auto-scaling infrastructure for Black Friday traffic spikes</li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Signature Projects</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Created multi-modal exam proctoring system (ICECET Conference)</li>
                          <li>Built WebRTC video conferencing platform with live activity feeds</li>
                          <li>Developed EEG classification system using LSTM/CNN networks</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Education</h4>
                        <p className="text-gray-600">BSc Computer Science (MSA/Greenwich)<br />
                        3.67/4 GPA | Google Developer Student Club Lead</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">
                    Ahmed brings deep technical expertise in cloud infrastructure and distributed systems. 
                    His innovative approach to performance optimization helped Oomor achieve industry-leading page load speeds.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Philosophy Section */}
        <section className="mb-16 bg-indigo-50 rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Technical Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise-Grade Security</h3>
              <p className="text-gray-600">Banking-level encryption and OWASP compliance</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Augmented Simplicity</h3>
              <p className="text-gray-600">Machine learning-guided store optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-sm">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Future-Proof Architecture</h3>
              <p className="text-gray-600">Blockchain-ready, quantum-resistant design</p>
            </div>
          </div>
        </section>

        {/* Why We Build Section */}
        <section className="mb-16 text-center">
          <blockquote className="max-w-3xl mx-auto text-xl italic text-gray-700">
            "Having helped scale systems for 1M+ users, we saw small businesses struggling with outdated platforms. 
            Oomor is our answer - enterprise tech made accessible through elegant simplicity."
            <footer className="mt-4 not-italic font-bold text-gray-900">- Amr & Ahmed</footer>
          </blockquote>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Certifications & Recognition</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">Huawei HCIA AI Engineering</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">Alibaba Cloud Machine Learning</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">React PWA Specialist</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">Published IEEE Researchers</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">4.9/5 Platform Rating</p>
              <p className="text-sm text-gray-600">1500+ stores</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium text-gray-900">Current Focus</p>
              <p className="text-sm text-gray-600">12 new markets</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Together, we're redefining SMB e-commerce</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in building the future of accessible online commerce - one 10-minute store at a time. 🚀
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/careers" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              aria-label="Explore career opportunities at Oomor"
            >
              View Open Positions
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-gray-50 transition-colors"
              aria-label="Contact Oomor leadership team"
            >
              Contact Our Team
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
