'use client';
import React from 'react';
import HomePage from './(public)/home/page';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const page = () => {
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // const lenis = new Lenis({
  //   duration: 1.2,
  //   easing: (t) => Math.min(1, t * 1.5), // Custom easing function
  //   smoothWheel: true,
  //   autoToggle: true,

  //   touchMultiplier: 2,
  // })
  return <HomePage />;
};

export default page;
