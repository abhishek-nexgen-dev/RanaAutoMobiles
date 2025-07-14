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
} from '@/components/ui/card';

export const Shop_by_Category = () => {
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
              <Link key={category.id} href={`/category/${category.title}`}>
                <Card className="Category_Card bg-[#2A2A2A] rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <CardHeader className="p-0 bg-white rounded-lg">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="w-full h-[35vh] object-contain "
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
