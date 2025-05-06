import { useState } from 'react'
import { 
  Users, 
  MessageSquare, 
  Calendar, 
  Globe, 
  Award, 
  ArrowRight, 
  ExternalLink,
  Search,
  User,
  Clock,
  ThumbsUp,
  MessageCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const communityStats = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "25,000+",
      description: "Active Members"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "100,000+",
      description: "Forum Posts"
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "50+",
      description: "Monthly Events"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "120+",
      description: "Countries Represented"
    }
  ]

  const forumCategories = [
    {
      title: "Getting Started",
      description: "New to Oomor? Find guides and help from fellow beginners.",
      topics: 1250,
      posts: 8430
    },
    {
      title: "Store Customization",
      description: "Share tips and tricks for customizing your store's appearance.",
      topics: 3120,
      posts: 15680
    },
    {
      title: "Marketing Strategies",
      description: "Discuss effective marketing techniques for e-commerce success.",
      topics: 2840,
      posts: 12950
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues from our community experts.",
      topics: 4560,
      posts: 22340
    },
    {
      title: "Feature Requests",
      description: "Suggest new features and vote on ideas from other users.",
      topics: 1890,
      posts: 9720
    },
    {
      title: "Success Stories",
      description: "Share your achievements and learn from other successful stores.",
      topics: 980,
      posts: 5640
    }
  ]

  const upcomingEvents = [
    {
      title: "Oomor Virtual Summit 2025",
      date: "June 15-17, 2025",
      time: "9:00 AM - 5:00 PM EST",
      description: "Join us for three days of expert talks, workshops, and networking opportunities with the Oomor community.",
      type: "Virtual Conference",
      link: "#"
    },
    {
      title: "E-commerce SEO Masterclass",
      date: "May 25, 2025",
      time: "1:00 PM - 3:00 PM EST",
      description: "Learn advanced SEO techniques specifically for e-commerce stores from industry experts.",
      type: "Webinar",
      link: "#"
    },
    {
      title: "Product Photography Workshop",
      date: "June 2, 2025",
      time: "11:00 AM - 12:30 PM EST",
      description: "Discover how to take professional product photos with just your smartphone and basic equipment.",
      type: "Workshop",
      link: "#"
    }
  ]

  const popularDiscussions = [
    {
      title: "What's your most effective customer retention strategy?",
      author: "Sarah Johnson",
      date: "2 days ago",
      replies: 42,
      likes: 87,
      category: "Marketing Strategies"
    },
    {
      title: "Custom checkout page templates - share your designs!",
      author: "Michael Chen",
      date: "1 week ago",
      replies: 36,
      likes: 124,
      category: "Store Customization"
    },
    {
      title: "How I increased my conversion rate by 35% in one month",
      author: "Emma Thompson",
      date: "3 days ago",
      replies: 58,
      likes: 215,
      category: "Success Stories"
    },
    {
      title: "Troubleshooting payment gateway integration issues",
      author: "David Martinez",
      date: "5 days ago",
      replies: 29,
      likes: 43,
      category: "Technical Support"
    }
  ]

  const communityExperts = [
    {
      name: "Alex Rivera",
      role: "Design Expert",
      contributions: 342,
      expertise: ["Theme Customization", "CSS", "User Experience"],
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Guru",
      contributions: 287,
      expertise: ["SEO", "Social Media", "Email Campaigns"],
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "James Wilson",
      role: "Technical Specialist",
      contributions: 416,
      expertise: ["API Integration", "Performance", "Troubleshooting"],
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Oomor Community</h1>
            <p className="text-xl opacity-90 mb-8">
              Connect with fellow store owners, share knowledge, and grow your business together
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#forum" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Join the Forum
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#events" 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="max-w-7xl mx-auto py-16 px-4 -mt-10">
        <div className="grid md:grid-cols-4 gap-8">
          {communityStats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-3 rounded-xl mb-4 inline-block">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Forum Categories */}
      <div id="forum" className="max-w-7xl mx-auto py-16 px-4 border-t border-gray-100">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            <span>Discussion Forums</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Join the Conversation</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with other Oomor users to share ideas, get help, and learn from each other
          </p>
        </div>

        <div className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search forum topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {forumCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600 mb-4 h-12">{category.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{category.topics.toLocaleString()} topics</span>
                <span>{category.posts.toLocaleString()} posts</span>
              </div>
              <div className="mt-6">
                <a 
                  href="#" 
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  Browse Topics
                  <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-soft hover:bg-primary-700 transition-colors"
          >
            Create Account & Join Forum
            <ExternalLink className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Popular Discussions */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Discussions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join these active conversations in our community
            </p>
          </div>

          <div className="space-y-6">
            {popularDiscussions.map((discussion, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
                      <a href="#">{discussion.title}</a>
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <User className="w-4 h-4 mr-1 text-gray-400" />
                        {discussion.author}
                      </div>
                      <div className="flex items-center mr-4">
                        <Clock className="w-4 h-4 mr-1 text-gray-400" />
                        {discussion.date}
                      </div>
                      <div className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                        {discussion.category}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-0">
                    <div className="flex items-center mr-4">
                      <ThumbsUp className="w-4 h-4 mr-1 text-primary-500" />
                      <span>{discussion.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1 text-gray-400" />
                      <span>{discussion.replies}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href="#" 
                    className="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors flex items-center"
                  >
                    Join Discussion
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Experts */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-1 bg-secondary-100 rounded-full text-sm font-medium text-secondary-700 mb-4">
            <Award className="w-4 h-4 mr-2" />
            <span>Community Experts</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Meet Our Top Contributors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These community members go above and beyond to help others succeed
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {communityExperts.map((expert, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 text-center">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img 
                  src={expert.avatar} 
                  alt={expert.name}
                  className="rounded-full w-full h-full object-cover"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {expert.contributions}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{expert.name}</h3>
              <p className="text-primary-600 font-medium mb-4">{expert.role}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {expert.expertise.map((skill, i) => (
                  <span key={i} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center justify-center"
              >
                View Profile
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div id="events" className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1 bg-primary-100 rounded-full text-sm font-medium text-primary-700 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Events & Webinars</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Upcoming Community Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join these virtual events to learn from experts and connect with other Oomor users
            </p>
          </div>

          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <div className="bg-primary-50 p-4 rounded-lg text-center md:mr-6">
                      <div className="text-primary-600 font-bold text-lg mb-1">
                        {event.date.split(',')[0]}
                      </div>
                      <div className="text-sm text-gray-500">
                        {event.time}
                      </div>
                      <div className="mt-3 inline-block bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full">
                        {event.type}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <a 
                      href={event.link} 
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <div className="bg-primary-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Ready to join our community?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with thousands of store owners, share your experiences, and learn from others to grow your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg shadow-soft hover:bg-primary-700 transition-colors"
            >
              Create an Account
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link 
              to="/help" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}