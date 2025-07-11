'use client';

import NavBar from '@/components/sharable/Nav/NavBar';
import React from 'react';

export default function Public_Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <div className="w-screen flex flex-col h-fit">{children}</div>
    </>
  );
}
