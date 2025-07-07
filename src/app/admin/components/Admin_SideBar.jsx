import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';

const items = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: () => <span>📊</span>,
  },
  {
    title: 'Users',
    url: '/admin/users',
    icon: () => <span>👥</span>,
  },
  {
    title: 'Orders',
    url: '/admin/orders',
    icon: () => <span>🛒</span>,
  },
  {
    title: 'Products',
    url: '/admin/products',
    icon: () => <span>📦</span>,
  },
  {
    title: 'Settings',
    url: '/admin/settings',
    icon: () => <span>⚙️</span>,
  },
];

const Admin_SideBar = () => {
  return (
    <SidebarProvider>
      <Sidebar className="min-h-screen w-[270px] bg-black text-white shadow-lg flex flex-col">
        {/* Header with image, title, and description */}
        <SidebarHeader className="flex flex-col items-center justify-center py-8 border-b border-gray-800">
          <img
            src="/admin-avatar.png"
            alt="Admin"
            className="w-20 h-20 rounded-full border-4 border-amber-400 shadow-lg mb-3 object-cover"
          />
          <h2 className="text-2xl font-bold text-amber-400">Admin Panel</h2>
          <p className="text-sm text-gray-400 text-center mt-1 px-2">
            Manage your application, users, orders, and settings from one place.
          </p>
        </SidebarHeader>
        <SidebarContent className="flex-1">
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg text-amber-400 mt-4 mb-2 px-4">
              Navigation
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className="flex items-center gap-3 px-4 py-2 rounded hover:bg-amber-400 hover:text-black transition-colors"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="py-4 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Suraj Admin Panel
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default Admin_SideBar;
