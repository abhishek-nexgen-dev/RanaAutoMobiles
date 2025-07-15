'use client';

import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import { customLoader } from '@/utils/customLoader';
import { api } from '@/utils/api';
import { Category_Type } from '@/features/category/category.type';

const Page = () => {
  const [categories, setCategories] = React.useState([]);
  // Dummy category data

  const Fetch_Category = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    try {
      const res = await api.get(`/api/v1/findAllCategories`,{
        baseURL: baseUrl
      });

      const data = res.data.data;


      if(res.data.success){
         setCategories(data);
      }


    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };
  
  useEffect(() => {
    Fetch_Category();
  }, [])
  



  return (
   <Suspense fallback={<div>Loading Category...</div>}>
    {categories.length > 0 && (
     <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-8">
     <div className="Caregory_CardContainer w-[90%] bg-amber-600 h-full rounded-2xl shadow-[#08ee7b]/30 p-6">
       <h1 className="text-3xl font-bold text-[#08ee7b] mb-6 text-center">
         Explore Categories
       </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {categories.map((category: Category_Type ) => (
           <Link href={`/category/${category.name}`} key={category._id}>
             <div className="Category_Card bg-[#2A2A2A] rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 hover:cursor-pointer">
               <div className="CardHeader p-0 bg-white rounded-lg overflow-hidden">
                 <Image
                   loader={customLoader}
                   src={category.categoryImage}
                   alt={category.name}
                   layout="responsive"
                   width={400} // Aspect ratio width
                   height={300} // Aspect ratio height
                   className="rounded-lg"
                 />
               </div>
               <div className="CardContent mt-4">
                 <h2 className="text-[#08ee7b] text-xl font-bold">
                   {category.name}
                 </h2>
                 <p className="text-gray-400 text-sm mb-2">
                   {category.description}
                 </p>
                 <p className="text-gray-400 text-sm mb-4">
                   <span className="font-semibold text-white">Products:</span>{' '}
                   {category.Products.length}
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
   )}
  </Suspense>
  );
};

export default Page;
