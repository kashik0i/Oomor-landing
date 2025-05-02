import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, Settings, Search, Grid, Store, HelpCircle, Users, MessageSquare } from 'lucide-react';

export const AdminHeader: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = async () => {
    await logout();
    navigate('/admin/auth');
  };

  const notifications = [
    { id: 1, title: 'New mini-app submission', message: 'Organic Foods Co. has submitted a new storefront for approval', time: '10 minutes ago', isRead: false },
    { id: 2, title: 'Subscription upgrade', message: 'FashionTrends store upgraded to Premium plan', time: '1 hour ago', isRead: false },
    { id: 3, title: 'New integration request', message: 'HealthyMeals service requested shipping integration', time: '3 hours ago', isRead: true },
    { id: 4, title: 'Payment notification', message: 'Monthly subscription payments processed successfully', time: '5 hours ago', isRead: true },
  ];

  const quickActions = [
    { id: 1, title: 'Review Mini-Apps', icon: <Grid size={18} />, path: '/admin/mini-apps/approvals' },
    { id: 2, title: 'Vendor Support', icon: <Store size={18} />, path: '/admin/vendor-hub' },
    { id: 3, title: 'User Management', icon: <Users size={18} />, path: '/admin/users' },
    { id: 4, title: 'Help Center', icon: <HelpCircle size={18} />, path: '/admin/support' },
    { id: 5, title: 'Messages', icon: <MessageSquare size={18} />, path: '/admin/feedback' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center"/>

        <div className="hidden md:flex items-center relative w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search mini-apps, vendors, or users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="p-2 text-gray-600 hover:text-gray-800 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
              <div className="px-4 py-2 border-b border-gray-100">
                <h3 className="font-medium text-gray-800">Notifications</h3>
                <p className="text-xs text-gray-500">You have {notifications.filter(n => !n.isRead).length} unread messages</p>
              </div>

              <div className="max-h-72 overflow-y-auto">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`px-4 py-3 hover:bg-gray-50 ${!notification.isRead ? 'bg-indigo-50' : ''}`}
                  >
                    <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 border-t border-gray-100 text-center">
                <button className="text-sm text-indigo-600 hover:text-indigo-800">
                  View all notifications
                </button>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="text-indigo-700 font-medium">{user?.name?.charAt(0) || 'A'}</span>
              </div>
              <span className="ml-2 text-gray-700 hidden md:inline-block">{user?.name || 'Admin'}</span>
            </button>

            <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Quick Actions</h3>

              {quickActions.map(action => (
                <button
                  key={action.id}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onClick={() => navigate(action.path)}
                >
                  <span className="mr-2 text-indigo-600">{action.icon}</span>
                  {action.title}
                </button>
              ))}

              <div className="border-t border-gray-100 mt-2 pt-2">
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onClick={() => navigate('/admin/settings')}
                >
                  <Settings className="h-4 w-4 mr-2 text-indigo-600" />
                  Settings
                </button>

                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-2 text-indigo-600" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

