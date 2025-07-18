import { Atom } from 'lucide-react';
import React from 'react';

const Loader_Primary = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex items-center justify-center h-full flex-col gap-[1.8vh]">
        <Atom className="w-16 h-16 text-[#08ee7b] animate-spin text-[2.5vw]" />
        <span className="text-[#08ee7b] text-2xl ml-4">
          Loading Categories...
        </span>
      </div>
    </div>
  );
};

export default Loader_Primary;
