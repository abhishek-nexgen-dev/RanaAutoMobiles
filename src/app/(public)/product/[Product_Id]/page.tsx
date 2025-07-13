'use client';

import React, { useState } from 'react';

const thumbnails = [
  'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/j/m/-original-imahbfd4cdue8gky.jpeg?q=70&crop=false',
  'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/b/0/-original-imahbfd4acagjerz.jpeg?q=70&crop=false',
  'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/8/g/-original-imahbfd4adnn5ctk.jpeg?q=70&crop=false',
];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(thumbnails[0]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black px-4 py-8">
      <div className="w-full max-w-7xl bg-[#1a1a1a] rounded-lg shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Images Section */}
        <div className="w-full lg:w-[40%] bg-[#242424] p-4 flex flex-col gap-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {thumbnails.map((img, index) => (
              <div
                key={index}
                className={`min-w-[80px] h-[80px] bg-white flex items-center justify-center p-2 rounded-md cursor-pointer ${
                  selectedImage === img ? 'ring-2 ring-[#08ee7b]' : ''
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            ))}
          </div>

          <div className="w-full h-[400px] bg-white flex items-center justify-center p-4 rounded-lg">
            <img
              src={selectedImage}
              alt="Selected Product"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-[60%] p-6 text-white flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-[#08ee7b]">Product Name</h1>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">★★★★☆</span>
            <span className="text-gray-400">(4.5/5) – 1,234 Reviews</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-white">₹9,499</p>
            <p className="line-through text-gray-500 text-lg">₹12,999</p>
            <span className="bg-green-600 text-sm px-2 py-1 rounded font-medium">27% OFF</span>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            This is a high-quality product designed to meet your needs. It is durable, reliable, and perfect for everyday use.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Color:</span>
            <div className="flex gap-2">
              <span className="w-6 h-6 rounded-full bg-red-500 border-2 border-white cursor-pointer" />
              <span className="w-6 h-6 rounded-full bg-blue-500 border-2 border-transparent hover:border-white cursor-pointer" />
              <span className="w-6 h-6 rounded-full bg-green-500 border-2 border-transparent hover:border-white cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="size" className="text-sm text-gray-300">Size:</label>
            <select
              id="size"
              className="bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none"
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XL</option>
            </select>
          </div>

          <p className="text-green-500 font-semibold">In Stock</p>

          <div className="flex gap-4 mt-4">
            <button className="flex-1 bg-[#08ee7b] text-black font-bold py-3 rounded-md hover:bg-[#06c96b] transition-all">
              Add to Cart
            </button>
            <button
              className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-800 transition-all"
              aria-label="Add to Wishlist"
            >
              <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 
                  12.28 2 8.5 2 5.42 4.42 3 7.5 
                  3c1.74 0 3.41 0.81 4.5 
                  2.09C13.09 3.81 14.76 3 16.5 
                  3 19.58 3 22 5.42 22 8.5c0 
                  3.78-3.4 6.86-8.55 11.54L12 
                  21.35z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
