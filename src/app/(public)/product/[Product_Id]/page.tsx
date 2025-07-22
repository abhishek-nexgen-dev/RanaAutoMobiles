'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { customLoader } from '@/utils/customLoader';
import { useSelector } from 'react-redux';
import { Add_To_Cart } from '@/features/product/Product.service';
import { ToastContainer } from 'react-toastify';
import { RootState } from '@/stores/store';

// Mocked product data (replace this with your backend API call)
const product = {
  name: 'Redmi Note 12 Pro',
  modelNumber: 'RN12P-2023',
  sap: '85%', // Stock Availability Percentage
  description:
    'Feature-rich smartphone with AMOLED display and 5000mAh battery.',
  price: 12999,
  discountPrice: 9499,
  currency: 'INR',
  inStock: true,
  rating: {
    score: 4.5,
    count: 1234,
  },
  colors: [
    {
      name: 'Black',
      hex: '#000000',
      images: [
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/j/m/-original-imahbfd4cdue8gky.jpeg?q=70&crop=false',
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/8/g/-original-imahbfd4adnn5ctk.jpeg?q=70&crop=false',
      ],
    },
    {
      name: 'Blue',
      hex: '#0000FF',
      images: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/b/0/-original-imahbfd4acagjerz.jpeg?q=70&crop=false',
      ],
    },
  ],
  sizes: ['64GB', '128GB', '256GB'],
  category: 'Mobile',
  tags: ['smartphone', 'android'],
  flags: [
    { label: 'Made in India', type: 'info', icon: '🇮🇳' },
    { label: 'Free Shipping', type: 'success', icon: '🚚' },
    { label: 'Available for Pincode', type: 'success', icon: '📍' },
  ],
};

// Define a proper type for flagColorMap
type FlagType = 'info' | 'success' | 'warning' | 'error';

const flagColorMap: Record<FlagType, string> = {
  info: 'bg-blue-600',
  success: 'bg-green-600',
  warning: 'bg-yellow-600',
  error: 'bg-red-600',
};

const Page = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [mainImage, setMainImage] = useState(selectedColor.images[0]);

  const user = useSelector((state: RootState) => state.authSlice.user);

  useEffect(() => {
    setMainImage(selectedColor.images[0]);
  }, [selectedColor]);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-black px-4 py-8">
      <div className="w-full max-w-[85%] bg-[#1a1a1a] rounded-lg shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Image Section */}
        <div className="w-full lg:w-[40%] bg-[#242424] p-6 flex flex-col gap-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {selectedColor.images.map((img, index) => (
              <div
                key={index}
                className={`min-w-[100px] h-[100px] bg-white flex items-center justify-center p-2 rounded-md cursor-pointer ${
                  mainImage === img ? 'ring-2 ring-[#08ee7b]' : ''
                }`}
                onClick={() => setMainImage(img)}
              >
                <Image
                  loader={customLoader}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain rounded"
                />
              </div>
            ))}
          </div>

          <div className="w-full h-[500px] bg-white flex items-center justify-center p-4 rounded-lg">
            <Image
              src={mainImage}
              loader={customLoader}
              alt="Selected Product"
              width={500}
              height={500}
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full lg:w-[60%] p-8 text-white flex flex-col gap-6">
          {/* Title */}
          <h1 className="text-4xl font-bold text-[#08ee7b]">{product.name}</h1>

          {/* Model Number */}
          <p className="text-lg text-gray-400">
            <span className="font-semibold text-white">Model Number:</span>{' '}
            {product.modelNumber}
          </p>

          {/* SAP */}
          <p className="text-lg text-gray-400">
            <span className="font-semibold text-white">SAP:</span> {product.sap}
          </p>

          {/* Flags */}
          {product.flags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.flags.map((flag, idx) => (
                <span
                  key={idx}
                  className={`text-sm px-2 py-1 rounded-full text-white flex items-center gap-1 ${flagColorMap[flag.type as FlagType]}`}
                >
                  {flag.icon && <span>{flag.icon}</span>}
                  {flag.label}
                </span>
              ))}
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">★★★★☆</span>
            <span className="text-gray-400">
              ({product.rating.score}/5) – {product.rating.count} Reviews
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <p className="text-3xl font-semibold text-white">
              ₹{product.discountPrice || product.price}
            </p>
            {product.discountPrice && (
              <>
                <p className="line-through text-gray-500 text-lg">
                  ₹{product.price}
                </p>
                <span className="bg-green-600 text-sm px-2 py-1 rounded font-medium">
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) *
                      100
                  )}
                  % OFF
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed">
            {product.description}
          </p>

          {/* Color Selector */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-300">Color:</span>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <span
                  key={color.name}
                  title={color.name}
                  className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
                    selectedColor.name === color.name
                      ? 'border-white'
                      : 'border-transparent hover:border-white'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="flex items-center gap-3">
            <label htmlFor="size" className="text-sm text-gray-300">
              Size:
            </label>
            <select
              id="size"
              className="bg-gray-800 text-white px-3 py-2 rounded-md focus:outline-none"
            >
              {product.sizes.map((size, idx) => (
                <option key={idx}>{size}</option>
              ))}
            </select>
          </div>

          {/* Stock */}
          <p
            className={`font-semibold ${
              product.inStock ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() =>
                Add_To_Cart({
                  user: user,
                })
              } // Pass the function as a callback
              className="flex-1 bg-[#08ee7b] text-black font-bold py-3 rounded-md hover:bg-[#06c96b] transition-all"
            >
              Add to Cart
            </button>
            <ToastContainer />
            <button
              className="w-12 h-12 flex items-center justify-center border border-gray-600 rounded-md hover:bg-gray-800 transition-all"
              aria-label="Add to Wishlist"
            >
              <svg
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 
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

export default Page;
