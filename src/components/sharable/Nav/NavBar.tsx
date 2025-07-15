'use client';

import React, { useEffect } from 'react';

import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import Link from 'next/link';
import { NAV_LINKS } from './nav.constant';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isLogin, setIsLogin] = React.useState(false);

  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  console.log('Token:', token);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
    }
    setIsLogin(false);
  }, [token]);

  return (
    <div className="Navbar_Component fixed  w-screen flex items-center justify-between top-0 bg-black text-white lg:h-[12vh] z-[200] lg:relative px-6 lg:px-12 py-4 shadow-md border-b border-gray-800">
      {/* Logo Section */}
      <div className="Logo_Container flex items-center gap-2">
        <h1 className="text-[1.5vw] lg:text-[1.2vw] font-extrabold tracking-tight text-[#08ee7b]">
          RANA
        </h1>
        <h1 className="text-[1.5vw] lg:text-[1.2vw] font-extrabold tracking-tight text-[#08ee7b]">
          AUTO MOBILES
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="Nav_Links hidden lg:flex items-center gap-6">
        <ol className="flex gap-6">
          {NAV_LINKS.map((item, index) => (
            <li
              key={index}
              className="text-[1.2vw] lg:text-[0.9vw] font-semibold text-[#d1d5db] hover:text-[#10b981] cursor-pointer"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Search and Icons */}
      <div className="Right_Container flex items-center gap-6">
        {/* Search Container */}
        <div className="Search_Container  hidden lg:flex items-center bg-[#242424] rounded-md px-3 py-2">
          <FaSearch className="text-gray-400 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent text-white placeholder-gray-400 outline-none text-sm lg:text-base"
          />
        </div>

        {/* Icons */}
        <div className="Icon_Container hidden lg:flex items-center gap-4 text-[#08EE7B]">
          {isLogin ? (
            <>
              <Link href="/cart">
                <FaShoppingCart className="text-[1.5vw] lg:text-[1.2vw] cursor-pointer" />
              </Link>
              <Link href="/profile">
                <FaUser className="text-[1.5vw] lg:text-[1.2vw] cursor-pointer" />
              </Link>
            </>
          ) : (
            <Link href="/login">
              <Button className="bg-[#08ee7b] text-black text-sm lg:text-base px-4 py-2 rounded-md font-bold hover:bg-[#06c96b]">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="Menu_Icon lg:hidden">
          <TiThMenu className="text-3xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
