import { SignUpForm } from '@/features/Auth/v1/components/SignupForm';
// import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <div className="flex w-screen  bg-black items-center justify-center p-[5vw]">
        
        <SignUpForm />  

    </div>
  );
};

export default page;
