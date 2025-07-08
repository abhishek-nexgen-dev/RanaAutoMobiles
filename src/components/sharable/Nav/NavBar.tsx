import React from 'react';
import { TiThMenu } from 'react-icons/ti';
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
// } from "@/components/ui/sidebar"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NAV_LINKS } from './nav.constant';

const NavBar = () => {
  // const items = [
  //   {
  //     title: 'Home',
  //     url: '#',
  //     icon: () => <span>🏠</span>, // Placeholder icon
  //   },
  //   {
  //     title: 'Inbox',
  //     url: '#',
  //     icon: () => <span>📥</span>, // Placeholder icon
  //   },
  //   {
  //     title: 'Calendar',
  //     url: '#',
  //     icon: () => <span>📅</span>, // Placeholder icon
  //   },
  //   {
  //     title: 'Search',
  //     url: '#',
  //     icon: () => <span>🔍</span>, // Placeholder icon
  //   },
  //   {
  //     title: 'Settings',
  //     url: '#',
  //     icon: () => <span>⚙️</span>, // Placeholder icon
  //   },
  // ];

  return (
    <div
      className="Navbar_Component  p-[2vh] w-screen flex items-center justify-center  bg-black
    text-white lg:h-[12vh] z-[200] fixed lg:relative"
    >
      <div className="Mobile_Nav h-[10vh] w-full absolute top-0 z-[200] flex flex-col items-center justify-between lg:hidden ">
        <div className="Mobile_Nav_Part1 w-full h-[15vh] bg-black text-white flex items-center justify-between ">
          <div className="Logo w-1/6 h-full flex items-center justify-center text-[2.8vw] font-bold">
            Suraj <br /> Automobiles
          </div>
          <div className="Menu  w-1/6 h-full flex items-center justify-center text-[2.8vw] font-bold">
            <TiThMenu className="text-3xl" />
          </div>
        </div>

        {/* <div className="Mobile_Nav_Part2 w-full h-[85vh] bg-black text-white flex items-center justify-center">
   

         <SidebarProvider className="w-full h-full bg-[#1a1a1a] text-red-700">


         <Sidebar className='w-1/2 h-full block lg:hidden '>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild>
                          <a href={item.url}>
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
          </Sidebar>

         </SidebarProvider>

       
        </div> */}
      </div>

      <div className="Part-1 Logo_container w-[10%] h-full"></div>
      <div className="Part-2 w-[70%] h-full hidden lg:flex items-center justify-center">
        <ol
          className="flex gap-3 
      "
        >
          {
            NAV_LINKS.map((item, index) => (
              <li
                key={index}
                className="text-[1.5vw] lg:text-[0.8vw] font-semibold text-[#d1d5db] hover:text-[#10b981] cursor-pointer"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))
          }
        </ol>
      </div>

      <div className="Part-3 items-center justify-end w-[10%] h-full  hidden lg:flex">
        <Link href="/login">
          <Button className="bg-[#242424] text-[1vw] w-[12vw] h-[80%] font-extrabold cursor-pointer">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
