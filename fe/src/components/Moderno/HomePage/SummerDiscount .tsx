import React, { useState, useEffect } from "react";

const summerDiscountData = {
  header: {
    title: "FOR SUMMER",
    highlight: "Trendy",
    productName: "Sunglasses 2023"
  },
  products: [
    {
      id: 1,
      category: "Trendy",
      name: "Sunglasses 2023",
      images: [
        "img/Moderno/HomePage/ricky-2127760710.jpg",
        "img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
        "img/Moderno/HomePage/ricky-2125700451-600x929.jpg"
      ],
      buttonText: "SHOP NOW"
    },
    {
      id: 2,
      category: "Trendy",
      name: "Sunglasses 2023",
      images: [
        "img/Moderno/HomePage/ricky-2127760710.jpg",
        "img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
        "img/Moderno/HomePage/ricky-2125700451-600x929.jpg"
      ],
      buttonText: "SHOP NOW"
    },
    {
      id: 3,
      category: "Trendy",
      name: "Sunglasses 2023",
      images: [
        "img/Moderno/HomePage/ricky-2127760710.jpg",
        "img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
        "img/Moderno/HomePage/ricky-2125700451-600x929.jpg"
      ],
      buttonText: "SHOP NOW"
    }
  ]
};

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImageIndex(prev => (prev + 1) % product.images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [product.images.length, isHovered]);

  return (
    <div
      className="relative rounded-lg overflow-hidden group h-[500px] w-full transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-black z-10 transition-opacity duration-500 ${isHovered ? 'bg-opacity-30' : 'bg-opacity-20'}`}></div>
      <img
        src={product.images[currentImageIndex]}
        alt={product.name}
        className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
      />
      <div className={`absolute bottom-0 left-0 p-8 z-20 w-full transition-all duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-10'}`}>
        <div className="mb-4">
          <span className={`block text-lg font-medium text-white transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
            {product.category}
          </span>
        </div>
        <div className="mb-6">
          <h5 className={`text-2xl font-bold text-white transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-90'}`}>
            {product.name}
          </h5>
        </div>
        <button className={`bg-white text-black px-6 py-3 rounded-md font-medium text-lg transform transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          {product.buttonText}
        </button>
      </div>
    </div>
  );
};

const SummerDiscount = () => {
  const { header, products } = summerDiscountData;

  return (
    <div className="bg-white p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">{header.title}</h1>
        <div className="inline-block border-t-2 border-gray-300 w-16"></div>
        <h2 className="text-3xl font-medium text-gray-700 italic">{header.highlight}</h2>
        <h3 className="text-4xl font-semibold text-gray-900">{header.productName}</h3>
      </div>

      {/* Hiển thị 3 sản phẩm trên 1 hàng */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SummerDiscount;
