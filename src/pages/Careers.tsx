import { Link } from 'react-router-dom'
import { 
  Users, 
  Heart, 
  Star, 
  Coffee, 
  Globe, 
  Zap, 
  BookOpen, 
  Award, 
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Code,
  PenTool,
  BarChart,
  Headphones,
  MessageSquare
} from 'lucide-react'
import { useState } from 'react'

export function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null)
  
  const departments = [
    { id: 'engineering', name: 'Engineering', icon: <Code className="w-5 h-5" /> },
    { id: 'design', name: 'Design', icon: <PenTool className="w-5 h-5" /> },
    { id: 'marketing', name: 'Marketing', icon: <BarChart className="w-5 h-5" /> },
    { id: 'support', name: 'Customer Support', icon: <Headphones className="w-5 h-5" /> },
    { id: 'product', name: 'Product', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'all', name: 'All Departments', icon: <Users className="w-5 h-5" /> }
  ]
  
  const jobListings = [
    {
      id: 'senior-frontend',
      title: 'Senior Frontend Developer',
      department: 'engineering',
      location: 'Cairo, Egypt (Remote)',
      type: 'Full-time',
      description: "We're looking for a Senior Frontend Developer to join our engineering team and help build the next generation of our e-commerce platform.",
      responsibilities: [
        'Architect and implement new features for our React-based frontend',
        'Collaborate with designers to transform mockups into responsive, accessible interfaces',
        'Write clean, maintainable code with comprehensive test coverage',
        'Mentor junior developers and provide technical leadership'
      ],
      requirements: [
        '5+ years of experience with modern JavaScript frameworks (React preferred)',
        'Strong understanding of web performance optimization',
        'Experience with TypeScript and state management libraries',
        'Knowledge of modern CSS practices and responsive design'
      ]
    },
    {
      id: 'ux-designer',
      title: 'UX Designer',
      department: 'design',
      location: 'Dubai, UAE (Hybrid)',
      type: 'Full-time',
      description: 'Join our design team to create intuitive, beautiful experiences that help our customers succeed with e-commerce.',
      responsibilities: [
        'Design user flows, wireframes, and high-fidelity mockups',
        'Conduct user research and usability testing',
        'Collaborate with product managers to define feature requirements',
        'Work closely with developers to ensure design implementation'
      ],
      requirements: [
        '3+ years of experience in UX/UI design for web applications',
        'Proficiency with design tools like Figma or Sketch',
        'Portfolio demonstrating strong visual design skills',
        'Experience with design systems and component libraries'
      ]
    },
    {
      id: 'growth-marketer',
      title: 'Growth Marketing Manager',
      department: 'marketing',
      location: 'London, UK (Remote)',
      type: 'Full-time',
      description: "Help drive Oomor's growth by developing and executing marketing strategies that acquire and retain customers.",
      responsibilities: [
        'Develop and implement growth marketing strategies across multiple channels',
        'Analyze marketing performance data to optimize campaigns',
        'Collaborate with content team on lead generation initiatives',
        'Manage marketing automation and CRM systems'
      ],
      requirements: [
        '4+ years of experience in B2B SaaS marketing',
        'Strong analytical skills and experience with marketing analytics tools',
        'Experience with SEO, content marketing, and paid acquisition',
        'Knowledge of marketing automation platforms'
      ]
    },
    {
      id: 'customer-success',
      title: 'Customer Success Specialist',
      department: 'support',
      location: 'Remote (EMEA time zones)',
      type: 'Full-time',
      description: 'Join our customer success team to help Oomor users get the most out of our platform and achieve their business goals.',
      responsibilities: [
        'Onboard new customers and provide training on platform features',
        'Proactively identify customer needs and recommend solutions',
        'Resolve technical issues and escalate complex problems',
        'Collect and share customer feedback with product teams'
      ],
      requirements: [
        '2+ years of experience in customer success or support roles',
        'Excellent communication and problem-solving skills',
        'Experience with e-commerce or SaaS platforms',
        'Strong empathy and customer-first mindset'
      ]
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'product',
      location: 'Cairo, Egypt (Hybrid)',
      type: 'Full-time',
      description: 'Shape the future of Oomor by defining product strategy and roadmap for key platform features.',
      responsibilities: [
        'Define product requirements and prioritize feature development',
        'Collaborate with engineering, design, and marketing teams',
        'Analyze user data to inform product decisions',
        'Conduct market research and competitive analysis'
      ],
      requirements: [
        '3+ years of experience in product management for SaaS products',
        'Strong analytical and problem-solving skills',
        'Experience with agile development methodologies',
        'Understanding of e-commerce platforms and user needs'
      ]
    },
    {
      id: 'backend-developer',
      title: 'Backend Developer',
      department: 'engineering',
      location: 'Remote (Global)',
      type: 'Full-time',
      description: 'Build the core services and APIs that power our e-commerce platform, ensuring scalability and performance.',
      responsibilities: [
        'Design and implement backend services and APIs',
        'Optimize database queries and system performance',
        'Implement security best practices and data protection',
        'Collaborate with frontend developers on feature implementation'
      ],
      requirements: [
        '4+ years of experience with backend development',
        'Proficiency in Node.js, Python, or similar languages',
        'Experience with database design and optimization',
        'Knowledge of cloud infrastructure and microservices'
      ]
    }
  ]
  
  const filteredJobs = selectedDepartment && selectedDepartment !== 'all'
    ? jobListings.filter(job => job.department === selectedDepartment)
    : jobListings
  
  const benefits = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours that fit your lifestyle."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Comprehensive Healthcare",
      description: "We offer premium health, dental, and vision coverage for you and your dependents."
    },
    {
      icon: <Coffee className="w-6 h-6 text-white" />,
      title: "Learning & Development",
      description: "Annual learning stipend and dedicated time for professional growth."
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Competitive Compensation",
      description: "Salary packages that recognize your skills and experience, plus equity options."
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: "Work-Life Balance",
      description: "Unlimited PTO, paid parental leave, and company-wide wellness days."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Team Retreats",
      description: "Annual company retreats to connect, collaborate, and celebrate together."
    }
  ]
  
  const values = [
    {
      title: "Customer Obsession",
      description: "We put our customers at the center of everything we do, constantly seeking ways to deliver exceptional value."
    },
    {
      title: "Radical Transparency",
      description: "We believe in open, honest communication and sharing information across the organization."
    },
    {
      title: "Continuous Learning",
      description: "We're curious, always seeking to improve ourselves and our products through experimentation and learning."
    },
    {
      title: "Ownership Mindset",
      description: "We take responsibility for our work and its impact, thinking long-term and acting like owners."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90 mb-8">
              Help us build the future of e-commerce and empower businesses around the world.
            </p>
            <a href="#open-positions" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
              View Open Positions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Our Culture Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <Users className="w-4 h-4 mr-2" />
              <span>Our Culture</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Building a team that makes a difference</h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>
                At Oomor, we're passionate about democratizing e-commerce and making powerful tools accessible to businesses of all sizes. 
                We're a diverse, global team united by our mission to empower entrepreneurs and creators.
              </p>
              <p>
                We believe that great ideas can come from anywhere, and we foster an environment where everyone has a voice. 
                Our culture is built on collaboration, continuous learning, and a healthy balance between work and life.
              </p>
            </div>
          </div>
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

      {/* Our Values Section */}
      <div className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
              <Award className="w-4 h-4 mr-2" />
              <span>Our Values</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What drives us every day</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values shape how we work together and the decisions we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <Heart className="w-4 h-4 mr-2" />
            <span>Benefits & Perks</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why you'll love working here</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in taking care of our team with competitive benefits and a supportive environment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mb-4 inline-block">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Open Positions Section */}
      <div id="open-positions" className="bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              <span>Open Positions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Join our growing team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We're looking for passionate individuals to help us build the future of e-commerce
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {departments.map((dept) => (
              <button
                key={dept.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === dept.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                onClick={() => setSelectedDepartment(dept.id)}
              >
                <span className="mr-2">{dept.icon}</span>
                {dept.name}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                        <div className="flex flex-wrap items-center mt-2 text-sm text-gray-600">
                          <div className="flex items-center mr-4 mb-2 md:mb-0">
                            <MapPin className="w-4 h-4 mr-1 text-gray-400" />
                            {job.location}
                          </div>
                          <div className="flex items-center mr-4 mb-2 md:mb-0">
                            <Clock className="w-4 h-4 mr-1 text-gray-400" />
                            {job.type}
                          </div>
                          <div className="flex items-center mb-2 md:mb-0">
                            <Briefcase className="w-4 h-4 mr-1 text-gray-400" />
                            {departments.find(d => d.id === job.department)?.name}
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-primary-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Responsibilities</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {job.responsibilities.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Requirements</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {job.requirements.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-xl">
                <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">
                  We don't have any open positions in this department right now.
                  <br />Please check back later or explore other departments.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <div className="bg-primary-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't see the right position?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-full shadow-soft hover:bg-primary-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}