'use client';
import React from 'react';
import {
  AboutSec,
  HeroSlider,
  LogoContainer,
} from '../../../features/Home/index';

const page = () => {
  return (
    <div className="w-screen flex flex-col h-fit">
      <HeroSlider />
      <LogoContainer />
      <AboutSec />

      <div className="w-full h-[10vh] bg-black flex items-center justify-center">
        <p className="text-white text-[1.2vw] font-semibold">
          © 2024 Suraj Automobiles. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default page;
