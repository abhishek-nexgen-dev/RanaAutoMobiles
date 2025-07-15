'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { customLoader } from '@/utils/customLoader';

const Page = () => {
  // Dummy category data
  const categories = [
    {
      id: 1,
      title: 'Electronics',
      description: 'Explore the latest gadgets and devices.',
      imageUrl:
        'https://images.unsplash.com/photo-1510552776732-03e61cf4b144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 120,
    },
    {
      id: 2,
      title: 'Fashion',
      description: 'Trendy clothing and accessories for all.',
      imageUrl:
        'https://images.unsplash.com/photo-1521334884684-d80222895322?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 80,
    },
    {
      id: 3,
      title: 'Home Appliances',
      description: 'Upgrade your home with modern appliances.',
      imageUrl:
        'https://images.unsplash.com/photo-1606813901444-1f3d4c8e9c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 50,
    },
    {
      id: 4,
      title: 'Books',
      description: 'Dive into the world of knowledge and stories.',
      imageUrl:
        'https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 200,
    },
    {
      id: 5,
      title: 'Sports',
      description: 'Gear up for your favorite sports and activities.',
      imageUrl:
        'https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 60,
    },
    {
      id: 6,
      title: 'Beauty & Health',
      description: 'Discover products for your beauty and wellness.',
      imageUrl:
        'https://images.unsplash.com/photo-1598514983715-1c6b2d3c6c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
      productCount: 90,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="Caregory_CardContainer w-[90%] bg-amber-600 h-full rounded-2xl bg- shadow-[#08ee7b]/30 p-6">
        <h1 className="text-3xl font-bold text-[#08ee7b] mb-6 text-center">
          Explore Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
          <Link href={`/category/${category.title}`}  key={category.id}>
            <div
             
              className="Category_Card bg-[#2A2A2A] rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer"
            >
              <div className="CardHeader p-0 bg-white rounded-lg overflow-hidden">
                <Image
                loader={customLoader}
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-[35vh] object-cover"
                />
              </div>
              <div className="CardContent mt-4">
                <h2 className="text-[#08ee7b] text-xl font-bold">
                  {category.title}
                </h2>
                <p className="text-gray-400 text-sm mb-2">
                  {category.description}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  <span className="font-semibold text-white">Products:</span>{' '}
                  {category.productCount}
                </p>
                <div className="flex gap-4">
                 
                    <button className="px-4 py-2 bg-[#08ee7b] text-black font-bold rounded-lg hover:bg-[#06c96b] transition-all hover:cursor-pointer">
                      View Products
                    </button>
             
                </div>
              </div>
            </div>
           </Link>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Page;
