import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Settings,
  BarChart2,
  HelpCircle,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ShoppingBag,
  Store,
  Grid,
  Briefcase,
  CreditCard,
  Gift,
  Zap,
  Truck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export const AdminSidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        {path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} />},
        {
            path: '/admin/mini-apps',
            label: 'Mini Apps',
            icon: <Grid size={20} />,
            subItems: [
                {path: '/admin/mini-apps/stores', label: 'Storefronts', icon: <Store size={20} />},
                {path: '/admin/mini-apps/services', label: 'Services', icon: <Briefcase size={20} />},
                {path: '/admin/mini-apps/approvals', label: 'Approvals', icon: <Zap size={20} />}
            ]
        },
        {path: '/admin/marketplace', label: 'Marketplace', icon: <ShoppingBag size={20} />},
        {path: '/admin/vendor-hub', label: 'Vendor Hub', icon: <Store size={20} />},
        {path: '/admin/users', label: 'Users', icon: <Users size={20} />},
        {path: '/admin/products', label: 'Products', icon: <Package size={20} />},
        {path: '/admin/services', label: 'Services', icon: <Briefcase size={20} />},
        {path: '/admin/orders', label: 'Orders', icon: <ShoppingCart size={20} />},
        {path: '/admin/payments', label: 'Payments', icon: <CreditCard size={20} />},
        {path: '/admin/shipping', label: 'Shipping', icon: <Truck size={20} />},
        {path: '/admin/subscriptions', label: 'Subscriptions', icon: <Gift size={20} />},
        {path: '/admin/analytics', label: 'Analytics', icon: <BarChart2 size={20} />},
        {path: '/admin/settings', label: 'Settings', icon: <Settings size={20} />},
        {path: '/admin/support', label: 'Support', icon: <HelpCircle size={20} />},
        {path: '/admin/feedback', label: 'Feedback', icon: <MessageSquare size={20} />},
    ];

    const handleLogout = async () => {
        await logout();
        navigate('/admin/auth');
    };

    return (
        <div className={`bg-white shadow-lg transition-all duration-300 ease-in-out ${collapsed ? 'w-16' : 'w-64'} h-screen overflow-y-auto`}>
            <div className="p-4 flex items-center justify-between">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="h-6 w-6 text-indigo-600"/>
                        <h2 className="text-xl font-bold text-gray-800">Oomor</h2>
                    </div>
                )}
                {collapsed && <ShoppingBag className="h-6 w-6 text-indigo-600 mx-auto"/>}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="mt-6">
                {navItems.map((item) => (
                    <div key={item.path}>
                        <Link
                            to={item.path}
                            className={`flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 ${
                                location.pathname === item.path 
                                    ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500' 
                                    : ''
                            } ${collapsed ? 'justify-center' : ''}`}
                        >
                            <span className="mr-3">{item.icon}</span>
                            {!collapsed && item.label}
                        </Link>

                        {!collapsed && item.subItems && item.subItems.map(subItem => (
                            <Link
                                key={subItem.path}
                                to={subItem.path}
                                className={`flex items-center pl-10 pr-4 py-2 text-gray-600 hover:bg-gray-100 ${
                                    location.pathname === subItem.path 
                                        ? 'bg-indigo-50 text-indigo-700 border-l-4 border-indigo-500' 
                                        : ''
                                }`}
                            >
                                <span className="mr-3">{subItem.icon}</span>
                                {subItem.label}
                            </Link>
                        ))}
                    </div>
                ))}
            </nav>

            <div className="mt-auto p-4 border-t">
                <button
                    onClick={handleLogout}
                    className={`flex items-center text-gray-700 hover:text-red-600 ${
                        collapsed ? 'justify-center' : ''
                    }`}
                >
                    <LogOut size={20} className="mr-2" />
                    {!collapsed && "Logout"}
                </button>
            </div>
        </div>
    );
};

export default AdminSidebar;

