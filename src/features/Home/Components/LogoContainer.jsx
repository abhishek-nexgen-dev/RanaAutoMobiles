import React from 'react';
import { LogoContainer_Array } from '../constant/LogoContainer.constant';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const LogoContainer = () => {
  let LogoRef = React.useRef(null);

  useGSAP(() => {
    gsap.to(LogoRef.current, {
      x: '-30%',
      duration: 5,

      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: LogoRef.current,
        start: 'top 105%',
        end: 'bottom 0%',
        scrub: 2,
        markers: true,
      },
    });
  }, []);

  return (
    <div className="Logo_Container h-[10vh] w-screen ">
      <div className="w-full h-full relative  overflow-hidden">
        <div
          className="logo w-full h-full flex items-center justify-start gap-2 "
          ref={LogoRef}
        >
          {LogoContainer_Array.map((item, index) => {
            return (
              <div
                className="Image_Container h-full w-fit transition-all overflow-hidden"
                key={index}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-[10vh] w-[10vw] object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { LogoContainer };
