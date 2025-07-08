import { LoginForm } from '@/features/Auth/v1/components/LoginForm';
import React from 'react';

const page = () => {
  return (
    <div className="flex w-screen h-screen bg-black">
      <div className="Image_container   w-[40%] h-full  hidden  min-[1000px]:flex"></div>

      <div className="Card_Container   w-full min-[1000px]:w-[60%] h-full flex items-start mt-[2.5rem] justify-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
