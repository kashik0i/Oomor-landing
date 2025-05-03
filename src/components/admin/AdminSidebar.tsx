import React, {useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
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
import {useAuth} from '../../context/AuthContext';
import {Button} from "../ui/button";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
    SidebarProvider,
    SidebarTrigger
} from "../ui/sidebar";

export const AdminSidebar: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {logout} = useAuth();

    const navItems = [
        {path: '/admin/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20}/>},
        {
            path: '/admin/mini-apps',
            label: 'Mini Apps',
            icon: <Grid size={20}/>,
            subItems: [
                {path: '/admin/mini-apps/stores', label: 'Storefronts', icon: <Store size={20}/>},
                {path: '/admin/mini-apps/services', label: 'Services', icon: <Briefcase size={20}/>},
                {path: '/admin/mini-apps/approvals', label: 'Approvals', icon: <Zap size={20}/>}
            ]
        },
        {path: '/admin/marketplace', label: 'Marketplace', icon: <ShoppingBag size={20}/>},
        {path: '/admin/vendor-hub', label: 'Vendor Hub', icon: <Store size={20}/>},
        {path: '/admin/users', label: 'Users', icon: <Users size={20}/>},
        {path: '/admin/products', label: 'Products', icon: <Package size={20}/>},
        {path: '/admin/services', label: 'Services', icon: <Briefcase size={20}/>},
        {path: '/admin/orders', label: 'Orders', icon: <ShoppingCart size={20}/>},
        {path: '/admin/payments', label: 'Payments', icon: <CreditCard size={20}/>},
        {path: '/admin/shipping', label: 'Shipping', icon: <Truck size={20}/>},
        {path: '/admin/subscriptions', label: 'Subscriptions', icon: <Gift size={20}/>},
        {path: '/admin/analytics', label: 'Analytics', icon: <BarChart2 size={20}/>},
        {path: '/admin/settings', label: 'Settings', icon: <Settings size={20}/>},
        {path: '/admin/support', label: 'Support', icon: <HelpCircle size={20}/>},
        {path: '/admin/feedback', label: 'Feedback', icon: <MessageSquare size={20}/>},
    ];

    const handleLogout = async () => {
        await logout();
        navigate('/admin/auth');
    };

    return (
        <Sidebar>
            <SidebarHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="h-6 w-6 text-indigo-600"/>
                    <h2 className="text-xl font-bold text-gray-800">Oomor</h2>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {navItems.map((item) => (
                        <SidebarMenuItem key={item.path}>
                            <SidebarMenuButton
                                onClick={() => navigate(item.path)}
                                isActive={location.pathname === item.path}
                                tooltip={item.label}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </SidebarMenuButton>

                            {item.subItems && (
                                <SidebarMenuSub>
                                    {item.subItems.map(subItem => (
                                        <SidebarMenuSubItem key={subItem.path}>
                                            <SidebarMenuSubButton
                                                onClick={() => navigate(subItem.path)}
                                                isActive={location.pathname === subItem.path}
                                            >
                                                {subItem.icon}
                                                <span>{subItem.label}</span>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            )}
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter>
                <Button
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={handleLogout}
                >
                    <LogOut className="mr-2 h-5 w-5"/>
                    <span>Logout</span>
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
};

export default AdminSidebar;
