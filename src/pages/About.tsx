import { Link } from 'react-router-dom'
import { 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Eye, 
  Heart, 
  Clock, 
  Users, 
  Award, 
  Sparkles,
  ArrowRight,
  Globe
} from 'lucide-react'
import { useState } from 'react'

export function AboutPage() {
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null)

  const toggleProfile = (name: string) => {
    setExpandedProfile(expandedProfile === name ? null : name)
  }

  const companyValues = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Simplicity",
      description: "We believe technology should simplify, not complicate. Every feature we build focuses on making e-commerce more accessible."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Customer Success",
      description: "Your success is our success. We measure our achievements by the growth and prosperity of the businesses we serve."
    },
    {
      icon: <Award className="w-6 h-6 text-white" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in engineering, design, and customer support to deliver an exceptional platform."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-700 text-white py-20 px-4">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full opacity-5 animate-bounce-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full opacity-10 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
            <span>Transforming e-commerce since 2023</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">Our mission is to democratize e-commerce for everyone</h1>

          <p className="text-xl text-primary-100 max-w-2xl mb-8">
            We're building the tools that empower small businesses and creators to succeed in the digital economy.
          </p>

          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-full hover:bg-primary-50 transition-colors shadow-soft"
          >
            Get in touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Company Overview Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
                <Users className="w-4 h-4 mr-2" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Oomor</h2>
              <div className="text-lg text-gray-600 space-y-4">
                <p>
                  At Oomor, we're driven by a mission to democratize e-commerce for small businesses and creators. 
                  Our founding team combines decades of technical expertise with a passion for empowering entrepreneurs, 
                  bringing together visionary leadership and cutting-edge engineering.
                </p>
                <p>
                  Founded in 2023, Oomor was born from the frustration of seeing talented creators struggle with overly complex e-commerce platforms. 
                  We believe that selling online should be accessible to everyone, regardless of technical background or resources.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary-500 rounded-full opacity-10"></div>
                <div className="relative z-10 bg-white p-3 rounded-2xl shadow-card">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                    alt="Oomor team collaboration"
                    className="rounded-xl shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
              <Target className="w-4 h-4 mr-2" />
              <span>Our Foundation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mission, Vision & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-3 rounded-xl mr-4 text-white">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To create a world where anyone with a product or service can build a thriving online business, 
                regardless of their technical skills or resources. We envision a future where e-commerce is truly democratized.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 p-3 rounded-xl mr-4 text-white">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To build the world's most accessible e-commerce platform by combining enterprise-grade technology with 
                intuitive design, enabling anyone to launch a professional online store in minutes, not months.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300">
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mb-4 inline-block">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experts behind Oomor's innovative e-commerce platform
            </p>
          </div>

          {/* CEO Profile */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 mb-8 hover:shadow-lg transition-all duration-300">
            <div 
              className="flex flex-col md:flex-row items-start cursor-pointer"
              onClick={() => toggleProfile('amr')}
            >
              <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Amr Badawy</h3>
                <p className="text-primary-600 font-medium">CEO & Co-Founder</p>
                <p className="text-gray-500 italic">Architect of Simplicity</p>
                <button className="mt-4 text-primary-600 flex items-center px-4 py-1 rounded-full border border-primary-200 hover:bg-primary-50 transition-colors">
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
                  <p className="text-gray-600 text-lg">
                    With 5+ years in e-commerce and SaaS leadership, Amr founded Oomor to solve the complexity he saw in existing platforms. 
                    His customer-first philosophy drives our product roadmap and company culture.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* CTO Profile */}
          <div className="bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div 
              className="flex flex-col md:flex-row items-start cursor-pointer"
              onClick={() => toggleProfile('ahmed')}
            >
              <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-full flex items-center justify-center">
                    <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Ahmed Abozaid</h3>
                <p className="text-secondary-600 font-medium">CTO & Co-Founder</p>
                <p className="text-gray-500 italic">Scalability Maestro</p>
                <button className="mt-4 text-secondary-600 flex items-center px-4 py-1 rounded-full border border-secondary-200 hover:bg-secondary-50 transition-colors">
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
                  <p className="text-gray-600 text-lg">
                    Ahmed brings deep technical expertise in cloud infrastructure and distributed systems. 
                    His innovative approach to performance optimization helped Oomor achieve industry-leading page load speeds.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Philosophy Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Technical Philosophy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The technical principles that power our platform and drive innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise-Grade Security</h3>
              <p className="text-gray-600">Our platform implements banking-level encryption, OWASP compliance, and regular security audits to ensure your business and customer data remain protected at all times.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Augmented Simplicity</h3>
              <p className="text-gray-600">We leverage machine learning to provide intelligent recommendations for store optimization, product descriptions, and marketing strategies, making e-commerce success accessible to everyone.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Future-Proof Architecture</h3>
              <p className="text-gray-600">Our platform is built on a scalable, blockchain-ready infrastructure with quantum-resistant encryption, ensuring your business is prepared for the next generation of e-commerce technology.</p>
            </div>
          </div>
        </section>

        {/* Why We Build Section */}
        <section className="mb-16 bg-gradient-to-r from-primary-600 to-secondary-700 text-white py-16 px-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full opacity-5"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full opacity-10"></div>
          </div>

          <div className="relative z-10 text-center">
            <blockquote className="max-w-3xl mx-auto text-2xl font-light">
              "Having helped scale systems for 1M+ users, we saw small businesses struggling with outdated platforms. 
              Oomor is our answer - enterprise tech made accessible through elegant simplicity."
              <footer className="mt-6 font-bold text-primary-100">- Amr & Ahmed, Co-Founders</footer>
            </blockquote>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span>Recognition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Certifications & Achievements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team's expertise and platform success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <p className="font-medium text-gray-900">Huawei HCIA AI Engineering</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <p className="font-medium text-gray-900">Alibaba Cloud Machine Learning</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <p className="font-medium text-gray-900">React PWA Specialist</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <p className="font-medium text-gray-900">Published IEEE Researchers</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-secondary-600" />
              </div>
              <p className="font-medium text-gray-900">4.9/5 Platform Rating</p>
              <p className="text-sm text-gray-600">1500+ stores</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center hover:shadow-card transition-all duration-300">
              <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-secondary-600" />
              </div>
              <p className="font-medium text-gray-900">Global Expansion</p>
              <p className="text-sm text-gray-600">12 new markets</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-8 rounded-2xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join us in redefining e-commerce</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Together, we're building the future of accessible online commerce - one 10-minute store at a time. 🚀
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/careers" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-full shadow-soft hover:bg-primary-700 transition-colors"
                aria-label="Explore career opportunities at Oomor"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-primary-600 text-primary-600 font-medium rounded-full shadow-soft hover:bg-primary-50 transition-colors"
                aria-label="Contact Oomor leadership team"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
