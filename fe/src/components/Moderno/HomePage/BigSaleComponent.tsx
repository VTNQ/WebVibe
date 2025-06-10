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
      "https://is4.fwrdassets.com/images/p/ip2/pl2/CLOE-WD161_V1.jpg",
      "https://is4.fwrdassets.com/images/p/fw/z/CLOE-WD161_V3.jpg",
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
      "https://is4.fwrdassets.com/images/p/fw/z/TFOF-WD141_V1.jpg",
      "https://is4.fwrdassets.com/images/p/fw/z/TFOF-WD141_V5.jpg",
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
      "https://is4.fwrdassets.com/images/p/fw/z/OSCF-WD110_V1.jpg",
      "https://is4.fwrdassets.com/images/p/fw/z/OSCF-WD110_V4.jpg",
    ],
    price: "$850.00",
    oldPrice: "$900.00",
    sale: "-6%",
   
    description: "Drawstring cinches the wide hemline of this pullover...",
  },
  {
    id: 5,
    category: "WOMEN",
    brand: "FRAME",
    name: "Le Cutoff Denim Shorts",
    image: [
      "https://is4.fwrdassets.com/images/p/fw/z/TFOF-WD128_V1.jpg",
      "https://is4.fwrdassets.com/images/p/fw/z/TFOF-WD128_V3.jpg",
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
    <div className="w-full px-4 py-8 sm:px-6 md:px-10 lg:px-16 xl:px-20"> {/* Responsive padding cho toàn bộ container */}
      {/* Tabs Section */}
      <div className="flex justify-center mb-8"> {/* Tăng mb cho khoảng cách dưới */}
        {/* Container cho các nút tab - Thay đổi space-x để làm các nút sát vào nhau */}
        <div className="flex space-x-2 sm:space-x-4 overflow-x-auto whitespace-nowrap pb-2"> {/* pb-2 để tạo khoảng trống cho scrollbar nếu có */}
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`
                flex-shrink-0                      /* Ngăn các nút bị co lại */
                rounded-full                       /* Bo tròn góc */
                font-medium transition             /* Hiệu ứng chuyển động */
                
                /* Kích thước chữ responsive */
                text-sm sm:text-base               
                
                /* Responsive Padding cho nút */
                px-3 py-1.5                        /* Padding mặc định cho màn hình rất nhỏ */
                sm:px-4 sm:py-2                    /* Padding lớn hơn từ breakpoint sm trở lên */
                md:px-6 md:py-3                    /* Padding lớn hơn từ breakpoint md trở lên */
                lg:px-8 lg:py-4                    /* Padding lớn hơn từ breakpoint lg trở lên */
                
                ${selectedTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      {/* Thay đổi gap thành gap-0 để các item sản phẩm dính sát vào nhau */}
      <div className="grid grid-cols-2 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            // Loại bỏ shadow để trông "sát" hơn hoặc giữ lại nếu muốn có đường viền nhỏ
            className="relative group text-left flex flex-col justify-between h-full border border-gray-200 hover:border-black transition duration-300"
          >
            {/* Image & Hover Actions */}
            <div className="bg-white hover:bg-[#F4F4F4] w-full flex-grow">
              {/* Wishlist */}
              <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="text-gray-400 hover:text-red-500 transition duration-200 text-lg sm:text-xl">
                  <CiHeart />
                </button>
              </div>

              {/* Tag & Sale */}
              <div className="absolute top-2 right-2 flex items-end space-x-1 z-10">
                {/* {product.tag && (
                  <span className="bg-transparent text-black border border-black text-xs px-2 py-1 rounded-sm">
                    {product.tag}
                  </span>
                )} */}
                {product.sale && (
                  <span className="border border-red-400 text-red-500 text-xs px-2 py-1 rounded-sm">
                    {product.sale}
                  </span>
                )}
              </div>

              {/* Product Image Container */}
              <div className="relative overflow-hidden h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96"> {/* Chiều cao ảnh responsive */}
                {Array.isArray(product.image) ? (
                  <>
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-full h-full object-cover rounded transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-white hover:bg-[#F4F4F4] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img
                        src={product.image[1]}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </>
                ) : (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded"
                  />
                )}

                {/* Hover Buttons */}
                {/* Điều chỉnh kích thước và khoảng cách nút hover */}
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col gap-1 sm:flex-row text-xs">
                  <button className="w-full flex items-center justify-center gap-0.5 px-2 py-1 font-semibold uppercase tracking-tight bg-white hover:bg-black hover:text-white transition text-[0.65rem] sm:text-xs">
                    <MdRemoveRedEye className="text-base" /> Quick View
                  </button>
                  <button className="w-full flex items-center justify-center gap-0.5 px-2 py-1 font-semibold uppercase tracking-tight bg-white hover:bg-black hover:text-white transition text-[0.65rem] sm:text-xs">
                    <MdAddShoppingCart className="text-base" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-2 sm:p-3 flex flex-col justify-between flex-grow"> {/* Giảm padding cho info */}
              <div>
                <div className="text-xs font-semibold text-gray-500">{product.brand}</div>
                <div className="text-sm font-semibold mt-0.5">{product.name}</div>
                <div className="hidden sm:block mt-1 text-xs text-gray-600 line-clamp-2">{product.description}</div> 
                <div className="mt-1.5 sm:mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-base font-bold text-gray-900">{product.price}</div>
                  {product.oldPrice && (
                    <div className="text-xs text-gray-400 line-through mt-0.5 sm:mt-0 sm:ml-1">{product.oldPrice}</div>
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