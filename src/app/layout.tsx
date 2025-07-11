export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Suraj',
  description: 'Suraj Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">
        <div className="w-screen flex flex-col h-fit">{children}</div>
      </body>
    </html>
  );
}
