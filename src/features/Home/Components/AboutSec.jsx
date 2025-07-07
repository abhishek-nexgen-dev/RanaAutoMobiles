import React from 'react';

export const AboutSec = () => {
  return (
    <div className="h-screen w-screen text-white bg-black flex items-center justify-between px-[4vw] py-[4vh] gap-4">
      <div className="About_sec_part1 w-[30%] h-full p-[2.5vw]">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FSELLER%2FDefault%2F2024%2F2%2F384740350%2FZF%2FAK%2FVZ%2F101038197%2Ftwo-wheeler-repair-maintenance-services-500x500.jpg&f=1&nofb=1&ipt=deb7e958df86a04a12fa52f562ed8ae809811dc649e9aa2a9b7cbccbdfae58e6"
          alt=""
          srcset=""
          className="w-[80%] h-1/2 bg-red-600 mt-[3.8vh]"
        />
      </div>
      <div className="About_sec_part2 w-[40%] h-full flex flex-col gap-2  items-center mt-[12vh]">
        <h1 className="text-4xl font-bold mb-4 text-[#08ee7b] dancing-script">
          About Us
        </h1>

        <p className="parastoo text-center text-[1.3vw]">
          Suraj Automobiles started in [Year] with a small setup and a big
          dream. Our founder believed that riders and mechanics deserved access
          to original spare parts without paying premium prices. We grew step by
          step, focusing on quality, honesty, and good service. Today, we are
          proud to be a trusted name in our city, serving customers from all
          walks of life.
        </p>

        <p className="parastoo text-center text-[1.3vw]">
          We are committed to providing the best service and products to our
          customers. Our team is dedicated to ensuring that every rider gets the
          right parts at the right price, with a smile.
        </p>
      </div>
      <div className="About_sec_part3 w-[30%] h-full p-[2.5vw]">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fflat-repair-motorcycle-composition-with-father-biker-his-son-garage_1284-19396.jpg&f=1&nofb=1&ipt=20cc90fb7a7e231f6bec0ab8155f2f7e8baeda86914f7d823c706168eacff655"
          alt=""
          srcset=""
          className="w-[80%] h-1/2 bg-red-600 mt-[3.8vh] object-cover"
        />
      </div>
    </div>
  );
};
