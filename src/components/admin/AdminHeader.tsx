import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Bell, LogOut, Settings, Search, Grid, Store, HelpCircle, Users, MessageSquare } from 'lucide-react';
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

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
    <header className="bg-gray-100 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center"/>

        <div className="hidden md:flex items-center relative w-1/3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 z-10" />
            <Input
              type="text"
              placeholder="Search mini-apps, vendors, or users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="end">
              <DropdownMenuLabel className="flex flex-col">
                <span>Notifications</span>
                <span className="text-xs text-gray-500">You have {notifications.filter(n => !n.isRead).length} unread messages</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-72 overflow-y-auto">
                {notifications.map(notification => (
                  <DropdownMenuItem
                    key={notification.id}
                    className={`flex flex-col items-start py-2 ${!notification.isRead ? 'bg-indigo-50' : ''}`}
                  >
                    <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-center justify-center text-indigo-600 hover:text-indigo-800">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 h-8">
                <Avatar className="h-8 w-8 bg-indigo-100">
                  <AvatarFallback className="text-indigo-700 font-medium">
                    {user?.name?.charAt(0) || 'A'}
                  </AvatarFallback>
                </Avatar>
                <span className="text-gray-700 hidden md:inline-block">{user?.name || 'Admin'}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="text-xs font-semibold text-gray-500 uppercase">
                Quick Actions
              </DropdownMenuLabel>
              <DropdownMenuGroup>
                {quickActions.map(action => (
                  <DropdownMenuItem
                    key={action.id}
                    onClick={() => navigate(action.path)}
                    className="flex items-center gap-2"
                  >
                    <span className="text-indigo-600">{action.icon}</span>
                    {action.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate('/admin/settings')}
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4 text-indigo-600" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={handleLogout}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4 text-indigo-600" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
