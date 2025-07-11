'use client';

import NavBar from '@/components/sharable/Nav/NavBar';

// src/app/login/layout.tsx
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
