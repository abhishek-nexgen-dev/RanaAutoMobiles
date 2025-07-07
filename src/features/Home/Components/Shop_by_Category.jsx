import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export const Shop_by_Category = () => {

  let ShopByCategory_Ref = useRef(null)

  useGSAP(() => {

    gsap.to(ShopByCategory_Ref.current, {
        backgroundColor: 'white',
        // duration: 1.5,
        ease: 'power1.in',

      scrollTrigger: {
        trigger: ShopByCategory_Ref.current,
        start: 'top 120%',
        end: 'top -15%',
        scrub: true,
        markers: true,

      },
      
     
    })
  })

  return (
    <div className='w-screen h-screen bg-black' ref={ShopByCategory_Ref}>





    </div>
  )
}

