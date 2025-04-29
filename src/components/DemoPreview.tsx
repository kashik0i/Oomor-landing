import {useState} from "react";
import {
    Bell, Briefcase,
    Calendar, Camera, ChevronLeft, Clock,
    Compass, CreditCard, FileText, Heart,
    Home, Mail, Map,
    MapPin,
    MessageSquare, Music, Phone, Search,
    Settings,
    ShoppingBag,
    ShoppingCart,
    Users
} from "lucide-react";

export function DemoPreview() {
    const [activeApp, setActiveApp] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const apps = [
        { id: 'home', name: 'Home', icon: <Home className="w-6 h-6" />, color: 'bg-blue-500' },
        { id: 'shop', name: 'Shop', icon: <ShoppingCart className="w-6 h-6" />, color: 'bg-green-500' },
        { id: 'finance', name: 'Finance', icon: <CreditCard className="w-6 h-6" />, color: 'bg-purple-500' },
        { id: 'messages', name: 'Messages', icon: <MessageSquare className="w-6 h-6" />, color: 'bg-yellow-500' },
        { id: 'calendar', name: 'Calendar', icon: <Calendar className="w-6 h-6" />, color: 'bg-red-500' },
        { id: 'maps', name: 'Maps', icon: <Map className="w-6 h-6" />, color: 'bg-indigo-500' },
        { id: 'music', name: 'Music', icon: <Music className="w-6 h-6" />, color: 'bg-pink-500' },
        { id: 'camera', name: 'Camera', icon: <Camera className="w-6 h-6" />, color: 'bg-gray-500' },
        { id: 'notes', name: 'Notes', icon: <FileText className="w-6 h-6" />, color: 'bg-orange-500' },
        { id: 'mail', name: 'Mail', icon: <Mail className="w-6 h-6" />, color: 'bg-teal-500' },
        { id: 'phone', name: 'Phone', icon: <Phone className="w-6 h-6" />, color: 'bg-cyan-500' },
        { id: 'clock', name: 'Clock', icon: <Clock className="w-6 h-6" />, color: 'bg-lime-500' },
        { id: 'health', name: 'Health', icon: <Heart className="w-6 h-6" />, color: 'bg-rose-500' },
        { id: 'compass', name: 'Compass', icon: <Compass className="w-6 h-6" />, color: 'bg-emerald-500' },
        { id: 'work', name: 'Work', icon: <Briefcase className="w-6 h-6" />, color: 'bg-amber-500' },
        { id: 'social', name: 'Social', icon: <Users className="w-6 h-6" />, color: 'bg-violet-500' }
    ];

    const handleAppClick = (appId: string) => {
        setActiveApp(appId);
    };

    const handleBackClick = () => {
        setActiveApp(null);
    };

    const renderAppContent = () => {
        const app = apps.find(a => a.id === activeApp);
        if (!app) return null;

        const getAppSpecificContent = () => {
            switch (app.id) {
                case 'home':
                    return (
                        <div className="space-y-4">
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-medium mb-2">Quick Actions</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="p-3 bg-gray-50 rounded-lg text-left">
                                        <div className="flex items-center">
                                            <ShoppingCart className="w-5 h-5 mr-2 text-green-500" />
                                            <span>Shop</span>
                                        </div>
                                    </button>
                                    <button className="p-3 bg-gray-50 rounded-lg text-left">
                                        <div className="flex items-center">
                                            <MessageSquare className="w-5 h-5 mr-2 text-yellow-500" />
                                            <span>Messages</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 shadow-sm">
                                <h4 className="font-medium mb-2">Recent Activity</h4>
                                <div className="space-y-3">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <Users className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm">New message from John</p>
                                            <p className="text-xs text-gray-500">2 minutes ago</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                            <ShoppingCart className="w-4 h-4 text-green-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm">Order #1234 shipped</p>
                                            <p className="text-xs text-gray-500">1 hour ago</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                case 'shop':
                    return (
                        <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="bg-white rounded-xl p-3 shadow-sm">
                                        <div className="aspect-square bg-gray-100 rounded-lg mb-2"></div>
                                        <h4 className="font-medium text-sm">Product {item}</h4>
                                        <p className="text-sm text-gray-500">$99.99</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                case 'messages':
                    return (
                        <div className="space-y-4">
                            {[1, 2, 3].map((chat) => (
                                <div key={chat} className="bg-white rounded-xl p-4 shadow-sm">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <h4 className="font-medium">Chat {chat}</h4>
                                                <span className="text-xs text-gray-500">2:30 PM</span>
                                            </div>
                                            <p className="text-sm text-gray-500">Last message preview...</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                default:
                    return (
                        <div className="text-center py-8">
                            <div className="mx-auto mb-4 p-3 rounded-full inline-flex items-center justify-center">
                                <div className={`${app.color} p-4 rounded-full text-white`}>
                                    {app.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{app.name} App</h3>
                            <p className="text-gray-600 mb-4">This is a demo of the {app.name} app within the Oomor superapp.</p>
                            <p className="text-sm text-gray-500">Tap the back button to return to the home screen.</p>
                        </div>
                    );
            }
        };

        return (
            <div className="h-full flex flex-col">
                <div className={`${app.color} p-4 text-white flex items-center`}>
                    <button
                        onClick={handleBackClick}
                        className="mr-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex items-center">
                        {app.icon}
                        <span className="ml-2 font-medium">{app.name}</span>
                    </div>
                </div>
                <div className="flex-grow p-4 bg-gray-50 overflow-y-auto">
                    {getAppSpecificContent()}
                </div>
            </div>
        );
    };

    return (
        <div className="flex justify-center">
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
                    {activeApp ? (
                        renderAppContent()
                    ) : (
                        <div className="h-full flex flex-col">
                            <div className="bg-primary-600 p-4 text-white">
                                <div className="flex justify-between items-center">
                                    <span className="font-medium">Oomor</span>
                                    <div className="flex items-center space-x-2">
                                        <Bell className="w-5 h-5" />
                                        <Settings className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="mt-3 relative">
                                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search apps..."
                                        className="w-full pl-9 pr-4 py-2 bg-white/10 rounded-lg text-sm placeholder:text-white/70"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex-grow p-4 bg-gray-100 overflow-y-auto">
                                <div className="grid grid-cols-4 gap-4">
                                    {apps
                                        .filter(app =>
                                            app.name.toLowerCase().includes(searchQuery.toLowerCase())
                                        )
                                        .map((app) => (
                                            <button
                                                key={app.id}
                                                onClick={() => handleAppClick(app.id)}
                                                className="flex flex-col items-center justify-center p-2 rounded-xl transition-all transform hover:scale-105 focus:outline-none hover:bg-white/50"
                                            >
                                                <div className={`${app.color} p-3 rounded-xl text-white mb-1`}>
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
                                        <Home className="w-6 h-6 text-primary-600" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                        <Compass className="w-6 h-6 text-gray-500" />
                                    </button>
                                    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                        <Users className="w-6 h-6 text-gray-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
