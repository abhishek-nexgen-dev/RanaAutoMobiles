'use client';
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import { usePathname } from 'next/navigation';
import './globals.css';
import { Provider } from 'react-redux';
import React, { useEffect, useLayoutEffect, useRef, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';
import { store } from '@/stores/store';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Scroll to the top on route change
  useEffect(() => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  // Initialize Lenis and handle cleanup
  useLayoutEffect(() => {
    lenis.current = new Lenis({
      smoothWheel: true,
      gestureOrientation: 'vertical',
    });

    function onFrame(time: number) {
      lenis.current?.raf(time);
      requestAnimationFrame(onFrame);
    }

    requestAnimationFrame(onFrame);

    return () => {
      lenis.current?.destroy();
      lenis.current = null;
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<p>Loading...</p>}>
          <Provider store={store}>
            <div className="w-screen flex flex-col h-fit">{children}</div>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
}
