import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {AdminSidebar} from '../components/admin/AdminSidebar';
import {AdminHeader} from '../components/admin/AdminHeader';
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";

export const AdminDashboard: React.FC = () => {
    const [open, setOpen] = useState(true);

    return (
        <SidebarProvider open={open} onOpenChange={setOpen}>
        <div className="flex w-full h-screen bg-gray-100">
            <AdminSidebar/>
            <SidebarTrigger/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <AdminHeader/>
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
                    <Outlet/>
                </main>
            </div>
        </div>
        </SidebarProvider>

    );
}; 