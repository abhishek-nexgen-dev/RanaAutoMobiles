
'use client';

import { SidebarProvider} from "@/components/ui/sidebar"
import Admin_SideBar from "./components/Admin_SideBar";
import Admin_NavBar from "./components/Admin_NavBar";




export default function AdminLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <SidebarProvider>

        <Admin_SideBar />
    

        <main className="flex-1 flex flex-col">
          
        <Admin_NavBar />
           
          {children}

        </main>
      </SidebarProvider>
    )
  }
  