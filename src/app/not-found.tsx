'use client';

import { Suspense } from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-[#08ee7b] mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          The page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="px-6 py-2 bg-[#08ee7b] text-black font-bold rounded-lg hover:bg-[#06c96b] transition-all">
            Go Back to Home
          </button>
        </Link>
      </div>
    </Suspense>
  );
}
