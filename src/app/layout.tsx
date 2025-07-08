import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Suraj',
  description: 'Suraj Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="w-screen flex flex-col h-fit">
          {children}
        </div>
      </body>
    </html>
  );
}