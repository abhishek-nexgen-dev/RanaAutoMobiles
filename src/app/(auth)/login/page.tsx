import { LoginForm } from '@/features/Auth/v1/components/LoginForm';
import React from 'react';

const page = () => {
  return (
    <div className="w-screen p-[5vw] bg-black flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default page;
