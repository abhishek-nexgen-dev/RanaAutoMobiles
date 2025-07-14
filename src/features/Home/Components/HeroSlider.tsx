import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSlider = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!titleRef.current || !videoRef.current || !videoContainerRef.current)
      return;

    // Animate title on load
    gsap.to(titleRef.current, {
      opacity: 1,
      y: '-5vh',
      duration: 1.5,
    });

    // ScrollTrigger animation for the video
    gsap.to(videoRef.current, {
      width: '80%',
      height: '100%',
      scrollTrigger: {
        trigger: videoContainerRef.current,
        start: 'top 110%',
        end: 'bottom 0%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bg-black text-white relative">
      {/* Title Section */}
      <div
        ref={titleRef}
        className="Title_Container py-[13vh] md:py-0 md:h-[60vh] w-full flex flex-col items-center justify-end opacity-0 gap-2"
      >
        <div className="w-[95%] md:w-1/2">
          <h1 className="text-[4vw] md:text-[2.5vw] font-extrabold text-center text-green-400 dancing-script">
            All Bike &amp; Scooty Parts in One Place – Fast, Genuine &amp;
            Affordable
          </h1>
          <p className="text-center text-[#d1d5db] text-[1.8vw] mt-4 lg:text-[1.5vw] parastoo">
            Welcome to Rana Auto Mobiles – your trusted shop for all bike and
            scooty spare parts. We sell original parts at wholesale prices,
            provide quick and expert servicing, and help you keep your
            two-wheeler in top condition. Whether you&apos;re a mechanic or a
            daily rider, we’ve got everything you need under one roof. Our
            priority is to deliver quality and trust to every customer who walks
            into our store or visits our website.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div
        ref={videoContainerRef}
        className="Video_Container w-full py-[5vh] md:py-0 md:h-screen flex items-center justify-center relative"
      >
        <video
          ref={videoRef}
          src="/Video/HeroVideo.mp4" // Ensure this path is correct
          autoPlay
          loop
          muted
          playsInline
          className="Hero_Video w-full h-auto max-h-[80vh] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export { HeroSlider };
