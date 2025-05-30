import { LoginForm } from '@/features/Auth/components/LoginForm';
import React from 'react';
import SignIn_Image from '../../../../public/Image/SignIn.jpg';
import Image from 'next/image';

const page = () => {
  return (
    <div className="flex w-screen h-screen bg-[#1C1C1C] text-black">
     
      <div className="Image_container   w-[40%] h-full  hidden  min-[1000px]:flex">
    
        <img
          src="https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg"
          className="w-full h-full object-contain"
          alt="Sign In"
        />
      </div>

      <div className="Card_Container   w-full min-[1000px]:w-[60%] h-full flex items-start mt-[2.5rem] justify-center">
        <LoginForm />
      </div>

    </div>
  );
};

export default page;
