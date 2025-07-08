'use client';
import React from 'react';
import {
  AboutSec,
  HeroSlider,
  Shop_by_Category,
} from '../../../features/Home/index';
import NavBar from '@/components/sharable/Nav/NavBar';

const page = () => {
  

  return (
    <div className="w-screen flex flex-col h-fit">
      <NavBar />
      <HeroSlider />

      <AboutSec />
      <Shop_by_Category />
    </div>
  );
};

export default page;
