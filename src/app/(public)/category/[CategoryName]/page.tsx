'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { customLoader } from '@/utils/customLoader';

const Page = () => {
  const params = useParams<{ CategoryName: string }>();
  const categoryName = params.CategoryName;

  // Product data with flags
  const products = [
    {
      id: 1,
      name: 'Redmi Note 12 Pro',
      modelNumber: 'RN12P-2023',
      price: 12999,
      discountPrice: 9499,
      currency: '₹',
      inStock: true,
      rating: 4.5,
      image:
        'https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/s/j/m/-original-imahbfd4cdue8gky.jpeg?q=70&crop=false',
      flags: [
        { label: 'Made in India', type: 'info', icon: '🇮🇳' },
        { label: 'Free Shipping', type: 'success', icon: '🚚' },
      ],
    },
    {
      id: 2,
      name: 'Redmi Note 12 Pro Max',
      modelNumber: 'RN12PM-2023',
      price: 15999,
      discountPrice: 13999,
      currency: '₹',
      inStock: false,
      rating: 4.7,
      image:
        'https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/8/g/-original-imahbfd4adnn5ctk.jpeg?q=70&crop=false',
      flags: [
        { label: 'Best Seller', type: 'success', icon: '🔥' },
        { label: 'Limited Stock', type: 'warning', icon: '⚠️' },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white p-8">
      <h1 className="text-[3vw] font-bold text-[#08ee7b] mb-6 w-full text-left p-[2.5vw]">
        {categoryName.replaceAll('%20', ' ')}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-[5vh]">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1a1a1a] rounded-lg shadow-lg p-4 flex flex-col hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="Image_Container w-full h-48 bg-white rounded-lg overflow-hidden mb-4">
              <Image
                loader={customLoader}
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product Name */}
            <h2 className="text-xl font-bold text-[#08ee7b] mb-2">
              {product.name}
            </h2>

            {/* Model Number */}
            <p className="text-gray-400 text-sm mb-2">
              <span className="font-semibold text-white">Model:</span>{' '}
              {product.modelNumber}
            </p>

            {/* Flags */}
            <div className="flex flex-wrap gap-2 mb-2">
              {product.flags.map((flag, idx) => (
                <span
                  key={idx}
                  className={`text-sm px-2 py-1 rounded-full text-white flex items-center gap-1 ${
                    flag.type === 'info'
                      ? 'bg-blue-600'
                      : flag.type === 'success'
                      ? 'bg-green-600'
                      : flag.type === 'warning'
                      ? 'bg-yellow-600'
                      : 'bg-gray-600'
                  }`}
                >
                  <span>{flag.icon}</span>
                  <span>{flag.label}</span>
                </span>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="text-gray-400 text-sm ml-2">
                ({product.rating.toFixed(1)})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-4">
              <p className="text-lg font-bold text-white">
                {product.currency}
                {product.discountPrice || product.price}
              </p>
              {product.discountPrice && (
                <p className="line-through text-gray-500 text-sm">
                  {product.currency}
                  {product.price}
                </p>
              )}
            </div>

            {/* Stock Status */}
            <p className="text-gray-400 text-sm mb-4">
              {product.inStock ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>

            {/* View Product Button */}
            <button
              className="w-full py-2 rounded-md font-bold bg-[#08ee7b] text-black hover:bg-[#06c96b] transition-all"
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
