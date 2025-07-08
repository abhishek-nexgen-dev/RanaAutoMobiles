import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {ShopByCategoryData} from '../index'
gsap.registerPlugin(ScrollTrigger);

export const Shop_by_Category = () => {
  let ShopByCategory_Ref = useRef(null);

  // useGSAP(() => {
  //   gsap.to(ShopByCategory_Ref.current, {
  //     backgroundColor: 'white',
  //     // duration: 1.5,
  //     ease: 'power1.in',

  //     scrollTrigger: {
  //       trigger: ShopByCategory_Ref.current,
  //       start: 'top 120%',
  //       end: 'top -15%',
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
  // });

  return (
    <div
      className="Shop_By_Category w-screen  bg-black flex flex-col"
      ref={ShopByCategory_Ref}
    >
      <div className="Shop_By_Category_Part1 w-[62%] h-screen flex flex-col  items-start p-[4vw]  text-black">
        <div className="Title_Container relative w-full h-[20vh] flex items-center justify-start">
          <h1 className="text-[3.2vw] font-bold mb-4 text-[#08ee7b] dancing-script">
            Shop by Category
          </h1>
          <div className="line absolute w-[100%] h-[2px] bg-[#08ee7b] top-full left-0"></div>
        </div>

        <div className="Text_Container relative w-full h-[50vh] flex items-center justify-start text-white">
          <p className="parastoo text-[2.2vw] !font-extrabold">
            Easily find what you're looking for by choosing from our
            well-organized categories. From engine parts to oils and accessories
            – everything is just one click away! Save time and effort by
            browsing through clean, clearly labeled product types so you can
            focus on getting what matters most.
          </p>
        </div>
      </div>

      <div className="Shop_By_Category_part2 w-full  flex   items-start justify-between flex-wrap p-[4vw]  text-black">
             {

              ShopByCategoryData.map((item, index) => (
            
              <>
              {console.log(item)}
              <div
                  key={index}
                  className="Category_Item w-[45vw]  gap-[2vw] h-[80vh] flex items-center justify-start mb-4 "
                >
                 <div className="w-full h-full flex  flex-col items-start justify-center relative rounded-md">

                 <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover mr-4 absolute z-10 rounded-md"
                  />
                  <h2 className="text-[2.5vw] font-bold absolute z-20 text-white">{item.title}</h2>
                 </div>
                </div>
              
              </>
              ))
             }
    

      </div>
    </div>
  );
};
