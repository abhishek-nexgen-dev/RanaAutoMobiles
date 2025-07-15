'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Page = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  // setup cors in backend
  // Fetch categories from the API
  const fetchCategory = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/v1/findAllCategories`
      );

      console.log(
        'API URL:',
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/findAllCategories`
      );
      console.log('Categories:', res.data);

      // Assuming the API returns categories in `res.data.categories`
      setCategories(res.data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
        <p className="text-lg font-bold text-[#08ee7b]">
          Loading categories...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="Caregory_CardContainer w-[90%] h-full rounded-2xl bg-white shadow-[#08ee7b]/30 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.title}`}>
              <div className="Category_Card bg-[#2A2A2A] rounded-lg p-4 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="CardHeader p-0 bg-white rounded-lg">
                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-[35vh] object-contain"
                  />
                </div>
                <div className="CardContent mt-4">
                  <h2 className="text-[#08ee7b] text-xl font-bold">
                    {category.title}
                  </h2>
                  <p className="text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
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
  );
};

export default Page;
