'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import HomePage from './(public)/home/page';
import Tempus from '@studio-freight/tempus';
import Lenis from '@studio-freight/lenis';
import { usePathname, useSearchParams } from 'next/navigation';

const Page = () => {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (lenis.current) lenis.current.scrollTo(0, { immediate: true });
  }, [pathname, searchParams]);

  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
    });

    const resize = setInterval(() => {
      lenis.current?.resize();
    }, 150);

    function onFrame(time: number) {
      lenis.current?.raf(time);
    }

    const unsubscribe = Tempus.add(onFrame);

    return () => {
      unsubscribe();
      clearInterval(resize);
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  return <HomePage />;
};

export default Page;
