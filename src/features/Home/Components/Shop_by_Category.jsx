import React from 'react';
import Link from 'next/link';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Shop_by_Category = () => {
  const categories = [
    {
      id: '1',
      title: 'Electricals',
      description: 'Batteries, bulbs, and wiring for all two-wheelers.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.gpwg.co.za%2Fwp-content%2Fuploads%2F2020%2F08%2FES.png&f=1&nofb=1&ipt=81ada337ad620e703ee953ea8df7d902c72367553ce15b6c8a3898d55facf96a',
      link: '/shop/electricals',
    },
    {
      id: '2',
      title: 'Engine Parts',
      description: 'High quality engine components for all major bikes.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rev6sports.com%2Fwp-content%2Fuploads%2F2021%2F09%2Funnamed.png&f=1&nofb=1&ipt=3ad71688d41d6fe263249be1809bdadc2aa1508dac41cacf95a19c44b06d223c',
      link: '/shop/engine-parts',
    },
    {
      id: '3',
      title: 'Brakes & Suspension',
      description: 'Reliable brakes and suspension parts for safe rides.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbobromano.com.au%2Fwp-content%2Fuploads%2F2018%2F09%2Fbrakes-suspension.png&f=1&nofb=1&ipt=402b22f5d8cce3f425cc426dc148601c733fec964d55d2f1d949c124466e79d4',
      link: '/shop/brakes-suspension',
    },
    {
      id: '4',
      title: 'Tires & Wheels',
      description: 'Durable tires and stylish alloy wheels for smooth rides.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.tirerack.com%2Fcontent%2Fdam%2Ftirerack%2Fdesktop%2FOpen_Graph_Images%2Fog_TireWheelPkg.jpg&f=1&nofb=1&ipt=da3d4174e927a66d8396047a4e2e37c44ac81bfab69ebdbc6270337ee4d2e2a0',
      link: '/shop/tires-wheels',
    },
    {
      id: '5',
      title: 'Body & Frame',
      description: 'Frames, fuel tanks, side panels and other body parts.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsuprememotos.com%2Fuploads%2Fpostfotos%2Fcafe-racer-custom-super-pocket-bike-125cc-race-wide-tires-honda-ct70-mini-bike-1.JPG&f=1&nofb=1&ipt=37132dc00f32f42d87ae51b2fcb57c5a119ef50af7a2d0531d2d7d8b9bc928ca',
      link: '/shop/body-frame',
    },
    {
      id: '6',
      title: 'Exhaust System',
      description: 'Mufflers, silencers, and performance exhausts.',
      imageUrl:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.btbexhausts.co.uk%2Fimg%2Fslider%2Fslide-1-2.png&f=1&nofb=1&ipt=dd8fc373826fff4d6d31b6b45c20cb676a6f1cc3f78da242ed541897fd0c2e00',
      link: '/shop/exhaust',
    },
   
  ];
  

  return (
    <div className="Shop_By_Category w-screen bg-black flex flex-col">
      <div className="Shop_By_Category_Part1 w-[62%] h-screen flex flex-col items-start p-[4vw] text-black">
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

      <div className="w-full flex items-center justify-center">
        <div className="Caregory_CardContainer w-[90%] h-full rounded-2xl  shadow-[#08ee7b]/30 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
              <Link key={category.id} href={category.link}>
                <Card className="Category_Card bg-[#2A2A2A] rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader className="p-0">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="w-full h-[35vh] object-cover  rounded-lg"
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-[#08ee7b] text-xl font-bold">
                      {category.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 text-sm">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <button className="px-6 py-2 bg-[#08ee7b] text-black font-bold rounded-lg hover:bg-[#06c96b] transition-all mt-[6vh]">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
