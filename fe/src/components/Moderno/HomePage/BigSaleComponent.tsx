import React, { useState } from "react";
import { MdAddShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const products = [
  {
    id: 1,
    category: "WOMEN",
    brand: "PRADA",
    name: "Crossback Halter Dress",
    image: [
      "/img/Moderno/HomePage/moderno-2555765914-960x1488.jpg",
      "/img/Moderno/HomePage/product1-1.png",
    ],
    price: "$2,400.00 - $2,650.00",
    sale: "-4%",
    description:
      "An adjustable drawstring cinches the wide hemline of this comfort-first fleece pullover with a slouchy turtleneck and thumbhole cuffs.",
  },
  {
    id: 2,
    category: "WOMEN",
    brand: "VALENTINO",
    name: "V Logo Pocket Wool & Silk Dress",
    image: [
      "/img/Moderno/HomePage/moderno-2555765914-960x1488.jpg",
      "/img/Moderno/HomePage/product1-1.png",
    ],
    price: "$6,500.00",
    oldPrice: "$7,500.00",
    sale: "-13%",
    description: "A pair of pockets is often the best thing a dress can offer...",
  },
  {
    id: 3,
    category: "WOMEN",
    brand: "BOTTEGA VENETA",
    name: "Textured Knit A-Line Gown",
    image: [
      "/img/Moderno/HomePage/moderno-2555765914-960x1488.jpg",
      "/img/Moderno/HomePage/product1-1.png",
    ],
    price: "$6,500.00",
    oldPrice: "$7,000.00",
    sale: "-7%",
    description: "Shimmering sequins illuminate the textured knit...",
  },
  {
    id: 4,
    category: "WOMEN",
    brand: "WOMEN",
    name: "Pullover Sweatshirt",
    image: [
      "/img/Moderno/HomePage/moderno-2555765914-960x1488.jpg",
      "/img/Moderno/HomePage/product1-1.png",
    ],
    price: "$850.00",
    oldPrice: "$900.00",
    sale: "-6%",
    tag: "FEATURED",
    description: "Drawstring cinches the wide hemline of this pullover...",
  },
  {
    id: 5,
    category: "WOMEN",
    brand: "FRAME",
    name: "Le Cutoff Denim Shorts",
    image: [
      "/img/Moderno/HomePage/moderno-2555765914-960x1488.jpg",
      "/img/Moderno/HomePage/product1-1.png",
    ],
    price: "$100.00",
    oldPrice: "$150.00",
    sale: "-33%",
    description: "Relaxed fit boosts the laid-back vibe.",
    sold: 6,
    available: 14,
  },
];

const tabs = ["WOMEN", "MEN", "KIDS", "ACCESSORIES"];

const BigSaleComponent = () => {
  const [selectedTab, setSelectedTab] = useState("WOMEN");
  const filteredProducts = products.filter((p) => p.category === selectedTab);

  return (
    <div className="w-full px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      {/* Tabs */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative group flex flex-col rounded shadow border border-transparent hover:border-black transition bg-white"
          >
            {/* Wishlist */}
            <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition">
              <button className="text-gray-400 hover:text-red-500">
                <CiHeart />
              </button>
            </div>

            {/* Tags */}
            <div className="absolute top-2 right-2 flex space-x-1 z-10">
              {product.tag && (
                <span className="bg-white text-black border border-black text-xs px-2 py-1 rounded-sm">
                  {product.tag}
                </span>
              )}
              {product.sale && (
                <span className="border border-red-400 text-red-500 text-xs px-2 py-1 rounded-sm">
                  {product.sale}
                </span>
              )}
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-t min-h-[240px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[500px]">
              {Array.isArray(product.image) ? (
                <>
                  <img
                    src={product.image[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <img
                      src={product.image[1]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </>
              ) : (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Hover Buttons */}
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col sm:flex-row gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide bg-white hover:bg-black hover:text-white transition">
                  <MdRemoveRedEye className="text-base" /> Quick View
                </button>
                <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wide bg-white hover:bg-black hover:text-white transition">
                  <MdAddShoppingCart className="text-base" /> Add to Cart
                </button>
              </div>

            </div>

            {/* Info */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <div className="text-sm font-semibold">{product.brand}</div>
                <div className="text-lg sm:text-xl font-semibold">{product.name}</div>
                <div className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-lg sm:text-xl font-semibold text-gray-900">{product.price}</div>
                  {product.oldPrice && (
                    <div className="text-xs text-gray-400 line-through">{product.oldPrice}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigSaleComponent;