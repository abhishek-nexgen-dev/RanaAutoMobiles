'use client';
import React from 'react';
import {
  AboutSec,
  HeroSlider,
  Shop_by_Category,
} from '../../../features/Home/index';

const page = () => {
  

  return (
    <div className="w-screen flex flex-col h-fit">
      <HeroSlider />

      <AboutSec />
      <Shop_by_Category />
    </div>
  );
};

export default page;
