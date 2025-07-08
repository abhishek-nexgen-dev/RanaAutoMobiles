import { SignUpForm } from '@/features/Auth/v1/components/SignupForm';
// import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="flex w-screen h-screen bg-black">
      <div className="Image_container  w-1/2 h-full">
        {/* <Image src={} /> */}
      </div>

      <div className="Card_Container w-1/2 h-full flex items-center justify-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
