import React from 'react';

import { Button } from '@/components/ui/button';
import { NavigationMenu } from '@/components/ui/navigation-menu';
import { NAV_LINKS } from './nav.constant';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div
      className="Navbar_Component  p-[2vh] w-screen flex items-center justify-center  bg-[#000000]
    text-white h-[12vh]"
    >
      <div className="Part-1 Logo_container w-[10%] h-full">
        
      </div>
      <div className="Part-2 w-[70%] h-full flex items-center justify-center">
        <ol
          className="flex gap-3 
      "
        >
         <Link href="/">
         Home
         </Link>
          <li> About</li>
          <li> Product</li>
        </ol>

     
      </div>

      <div className="Part-3 flex items-center justify-end w-[10%] h-full ">
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
