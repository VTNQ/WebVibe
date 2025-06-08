import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
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
    tag: "BEST SELLER",
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
    image: "/img/Moderno/HomePage/ricky-2014887241.jpg",
    price: "$6,500.00",
    oldPrice: "$7,000.00",
    sale: "-7%",
    description: "Shimmering sequins illuminate the textured knit...",
  },
  {
    id: 4,
    category: "ACCESSORIES",
    brand: "WOMEN",
    name: "Pullover Sweatshirt",
    image: "/img/product4.jpg",
    price: "$850.00",
    oldPrice: "$900.00",
    sale: "-6%",
    tag: "FEATURED",
    description: "Drawstring cinches the wide hemline of this pullover...",
  },
  {
    id: 5,
    category: "KIDS",
    brand: "FRAME",
    name: "Le Cutoff Denim Shorts",
    image: "/img/product5.jpg",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const filteredProducts = products.filter((p) => p.category === selectedTab);

  return (
    <div className="w-full px-4 py-8 sm:px-6 md:px-10 lg:px-16">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setSelectedTab(tab);
              setActiveIndex(0); // reset active index when tab changes
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${selectedTab === tab
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Swiper Product Slider */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        slidesPerView={3} // Mặc định cho các màn hình lớn
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },          // 1 sản phẩm mỗi slide cho màn hình nhỏ
          640: { slidesPerView: 2 },        // 2 sản phẩm mỗi slide cho máy tính bảng và màn hình nhỏ
          768: { slidesPerView: 2 },        // 2 sản phẩm mỗi slide cho iPhone và các thiết bị tương tự
          1024: { slidesPerView: 3 },       // 3 sản phẩm mỗi slide cho các màn hình lớn hơn
        }}
        className="mySwiper"
      >
        {filteredProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="relative group rounded shadow text-left flex flex-col justify-between h-full min-h-[900px] border border-transparent hover:border-black transition duration-300">
              {/* left */}
              <div className="bg-white hover:bg-[#F4F4F4] w-full flex-grow">
                {/* Wishlist */}
                <div className="absolute top-2 left-2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">
                  <button className="text-gray-400 hover:text-red-500 transition duration-200">
                    <CiHeart />
                  </button>
                </div>

                {/* Tag & Sale */}
                <div className="absolute top-2 right-2 flex items-end space-x-1 z-10">
                  {product.tag && (
                    <span className="bg-transparent text-black border border-black text-xs px-2 py-1 rounded-sm">
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
                <div className="relative overflow-hidden h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                  {/* Image 1 */}
                  {Array.isArray(product.image) ? (
                    <>
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-full h-full object-cover rounded transition-opacity duration-300 group-hover:opacity-0"
                      />
                      {/* Hover Image with white background */}
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
                  <div className="flex w-full gap-2 absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="flex-1 flex items-center justify-center gap-1 px-2 py-2 sm:px-3 sm:py-3 text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider text-center bg-white border-none cursor-pointer hover:bg-black hover:text-white transition">
                      <MdRemoveRedEye /> Quick View
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1 px-2 py-2 sm:px-3 sm:py-3 text-[10px] sm:text-[12px] font-semibold uppercase tracking-wider text-center bg-white border-none cursor-pointer hover:bg-black hover:text-white transition">
                      <MdAddShoppingCart /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                {/* Info */}
                <div>
                  <div className="text-sm font-semibold">{product.brand}</div>
                  <div className="text-xl font-semibold">{product.name}</div>
                  <div className="mt-2 text-sm text-gray-600">{product.description}</div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-xl font-semibold text-gray-900">{product.price}</div>
                    {product.oldPrice && (
                      <div className="text-xs text-gray-400 line-through">{product.oldPrice}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BigSaleComponent;
