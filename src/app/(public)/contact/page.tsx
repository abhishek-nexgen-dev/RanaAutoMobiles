import { ContactForm } from '@/features/Contact/v1';
import React, { Suspense } from 'react';

const page = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4 py-8">
        <Suspense fallback={<p className='text-green-800'>Loading Contact Form...</p>}>

            <ContactForm />
        </Suspense>
    </div>
  );
};

export default page;
