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
  { title: 'Dashboard', url: '/admin/dashboard', icon: () => <span>📊</span> },
  { title: 'Users', url: '/admin/users', icon: () => <span>👥</span> },
  { title: 'Orders', url: '/admin/orders', icon: () => <span>🛒</span> },
  { title: 'Products', url: '/admin/products', icon: () => <span>📦</span> },
  { title: 'Contacts', url: '/admin/contacts', icon: () => <span>📱</span> },
  { title: 'Settings', url: '/admin/settings', icon: () => <span>⚙️</span> },
];

const Admin_SideBar = () => {
  return (
    <div className="min-h-screen bg-[#2A2A2A] relative">
      <SidebarProvider className=" !bg-[#2A2A2A]">
        <Sidebar className="!z-[300] min-h-screen w-[270px] !bg-[#2A2A2A] !text-white shadow-lg flex flex-col">
          <SidebarHeader className="!bg-[#2A2A2A] flex flex-col items-center justify-center py-8 border-b border-[#3A3A3A]">
            {/* <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230409%2Foriginal%2Fpngtree-admin-and-customer-service-job-vacancies-png-image_9041264.png&f=1&nofb=1&ipt=a5b06d2c076c117ffb4efc7da761ac086e44664dc252e11397c3f7256774019a"
              alt="Admin"
              className=" */}
            {/* /> */}
            <h2 className="text-2xl font-bold text-amber-400">Admin Panel</h2>
            <p className="text-sm text-gray-400 text-center mt-1 px-2">
              Manage your application, users, orders, and settings from one
              place.
            </p>
          </SidebarHeader>

          <SidebarContent className="flex-1 !bg-[#2A2A2A]">
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
                          className="flex items-center gap-3 px-4 py-2 rounded transition-colors hover:bg-amber-400 hover:text-black"
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

          <SidebarFooter className="!bg-[#2A2A2A] py-4 border-t border-[#3A3A3A] text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Suraj Admin Panel
          </SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};

export default Admin_SideBar;
