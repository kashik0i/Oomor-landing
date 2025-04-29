import { 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle, 
  Sparkles, 
  Smartphone,
  MessageSquare,
  Calendar,
  MapPin,
  Bell,
  Settings,
  Home,
  Compass,
  Users
} from 'lucide-react'
import { useState } from 'react'

function DemoPreview() {
  const [activeApp, setActiveApp] = useState<string | null>(null);
  
  const apps = [
    { id: 'shop', name: 'Shop', icon: <ShoppingBag className="w-6 h-6" />, color: 'bg-green-500' },
    { id: 'messages', name: 'Messages', icon: <MessageSquare className="w-6 h-6" />, color: 'bg-yellow-500' },
    { id: 'calendar', name: 'Calendar', icon: <Calendar className="w-6 h-6" />, color: 'bg-red-500' },
    { id: 'maps', name: 'Maps', icon: <MapPin className="w-6 h-6" />, color: 'bg-indigo-500' }
  ];

  const handleAppClick = (appId: string) => {
    setActiveApp(appId);
  };

  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] w-[200px] shadow-xl">
      <div className="w-[100px] h-[12px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[80px] rounded-l-lg"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[120px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[17px] top-[100px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[172px] h-[372px] bg-white">
        <div className="h-full flex flex-col">
          <div className="bg-primary-600 p-3 text-white">
            <div className="flex justify-between items-center">
              <span className="font-medium text-sm">Oomor</span>
              <div className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <Settings className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex-grow p-3 bg-gray-100 overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {apps.map((app) => (
                <button
                  key={app.id}
                  onClick={() => handleAppClick(app.id)}
                  className="flex flex-col items-center justify-center p-2 rounded-xl transition-all transform hover:scale-105 focus:outline-none hover:bg-white/50"
                >
                  <div className={`${app.color} p-2 rounded-xl text-white mb-1`}>
                    {app.icon}
                  </div>
                  <span className="text-xs text-gray-700">{app.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="bg-white p-2 border-t border-gray-200">
            <div className="flex justify-around">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Home className="w-5 h-5 text-primary-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Compass className="w-5 h-5 text-gray-500" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Users className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-700 text-white py-24 px-4">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full opacity-5 animate-bounce-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-400 rounded-full opacity-10 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-secondary-500 rounded-full opacity-10 animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="flex flex-wrap gap-4">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
              <span>New: AI-powered product descriptions</span>
            </div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <Smartphone className="w-4 h-4 mr-2 text-blue-300" />
              <span>Try our interactive demo</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Launch Your Online Store in <span className="text-yellow-300">10 Minutes</span>
          </h1>

          <p className="text-xl text-primary-100 max-w-lg">
            Transform your Instagram page or small business into a professional online shop - no technical skills needed
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-semibold px-8 py-4 rounded-full transition-all shadow-soft flex items-center">
              Start Selling Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 font-semibold px-8 py-4 rounded-full transition-all">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
              <span>No credit card required</span>
            </div>
          </div>
        </div>

        <div className="relative animate-slide-up">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500 rounded-full opacity-20"></div>
          <div className="relative z-10 flex gap-4">
            <div className="bg-white p-3 rounded-2xl shadow-card rotate-1 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Oomor app dashboard"
                className="rounded-xl shadow-sm"
              />

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-800 p-4 rounded-xl shadow-card animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <ShoppingBag className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Monthly Sales</p>
                    <p className="text-xl font-bold">$12,426</p>
                  </div>
                </div>
              </div>
            </div>
            <DemoPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
