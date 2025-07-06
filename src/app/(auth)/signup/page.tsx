import { SignUpForm } from '@/features/Auth/components/SignupForm';
// import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="Image_container  bg-red-400 w-1/2 h-full">
        {/* <Image src={} /> */}
      </div>

      <div className="Card_Container bg-red-900 w-1/2 h-full flex items-center justify-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
