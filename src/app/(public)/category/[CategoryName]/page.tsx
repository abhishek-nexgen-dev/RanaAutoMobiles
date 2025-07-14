'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image'

const Page = () => {
  const params = useParams<{ CategoryName: string }>();
  const categoryName = params.CategoryName;

  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FMobil-Delvac-1300-Super-Heavy-Duty-Premium-Synthetic-Blend-Diesel-Engine-Oil-10W-30-1-Gallon_d4406420-b201-4238-a6de-08adc7bedfd4.3a634d6138e1476dc7cf90d754a5a479.jpeg&f=1&nofb=1&ipt=11ea946439794625839e426b6d78eeb95c244c6185bc7e2d3ef735a1d5790fb3',
      rating: 4.5,
      price: '₹1,200',
      stock: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-na.ssl-images-amazon.com%2Fimages%2FI%2F71pmg3-PQxL.jpg&f=1&nofb=1&ipt=1ef92277bd52cdaa09412c4d64e6e64165fda07f8d5393c0d2c91f1980f18697',
      rating: 3.8,
      price: '₹800',
      stock: 0,
    },
    {
      id: 3,
      name: 'Product 3',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FBZ%2FHQ%2FTD%2FSELLER-94411169%2Fclutch-plate-500x500.jpg&f=1&nofb=1&ipt=2533e27ff07ccb7a26ac3148e4f78044482567a0877a136fdb059b84e42671d8',
      rating: 4.9,
      price: '₹ 2,500',
      stock: 5,
    },
    {
      id: 4,
      name: 'Product 3',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frukmini1.flixcart.com%2Fimage%2F300%2F300%2Fl4hcx3k0%2Fvehicle-brake-disc%2Fm%2Fc%2Fo%2F10-hero-electric-all-scootyr-break-shoe-msn-original-imagfcz35schxy42.jpeg&f=1&nofb=1&ipt=8b888ba7f1e01af502ba800428a4a8f4d96e3d124d303ae021b8acadef92165d',
      rating: 4.9,
      price: '₹ 3,500',
      stock: 2,
    },
    {
      id: 5,
      name: 'Product 3',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsaproducts.lk%2Fwp-content%2Fuploads%2F2022%2F08%2FDSC_0332.jpg&f=1&nofb=1&ipt=60e3f18e8fa781679111b57d8f4d13ed45395f2ec5e35ff20eed25d7aa425e94',
      rating: 4.9,
      price: '₹ 4,500',
      stock: 5,
    },
    {
      id: 6,
      name: 'Product 3',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F5.imimg.com%2Fdata5%2FANDROID%2FDefault%2F2023%2F4%2F303236162%2FAN%2FDO%2FRN%2F136835525%2Fproduct-jpeg-500x500.jpg&f=1&nofb=1&ipt=d69d84022fc925c244dceae810ee4f3a5bb909bf0721d9a5e7253feecd98d6df',
      rating: 4.9,
      price: '₹500',
      stock: 5,
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
            className="bg-[#1a1a1a] rounded-lg shadow-lg p-4 flex flex-col"
          >
            <div className="Image_Container w-full h-48 bg-white">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain rounded-md mb-4"
              />
            </div>
            <h2 className="text-xl font-bold text-[#08ee7b] mb-2">
              {product.name}
            </h2>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">
                {'★'.repeat(Math.floor(product.rating))}
                {'☆'.repeat(5 - Math.floor(product.rating))}
              </span>
              <span className="text-gray-400 text-sm ml-2">
                ({product.rating.toFixed(1)})
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              {product.stock > 0 ? (
                <span className="text-green-500">In Stock</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
            <p className="text-lg font-bold text-white mb-4">{product.price}</p>
            <button
              className={`w-full py-2 rounded-md font-bold ${
                product.stock > 0
                  ? 'bg-[#08ee7b] text-black hover:bg-[#06c96b]'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
