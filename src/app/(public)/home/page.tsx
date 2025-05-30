import React from 'react';
import { HeroSlider , LogoContainer} from '../../../features/Home/index';

const page = () => {
  return (
    <div className="w-screen flex flex-col h-fit">
     
     <HeroSlider />
     <LogoContainer />
    </div>
  );
};

export default page;
