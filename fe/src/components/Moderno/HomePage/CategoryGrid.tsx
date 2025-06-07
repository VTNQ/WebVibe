import React from "react";

const categories = [
  {
    title: "WOMEN",
    image: "/img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
    link: "https://parkofideas.com/moderno/demo/product-category/women/",
  },
  {
    title: "MEN",
    image: "/img/Moderno/HomePage/ricky-2106631175-600x929.jpg",
    link: "#",
  },
  {
    title: "KIDS",
    image: "/img/Moderno/HomePage/ricky-2106332879-600x929.jpg",
    link: "#",
  },
  {
    title: "ACCESSORIES",
    image: "/img/Moderno/HomePage/ricky-2125700451-600x929.jpg",
    link: "#",
  },
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
      {categories.map((cat, index) => (
        <a
          key={index}
          href={cat.link}
          className="relative group h-[80vh] block overflow-hidden"
        >
          {/* Ảnh rõ lúc đầu, mờ khi hover */}
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-10"
          />

          {/* Overlay chữ */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ borderRight:'solid',borderWidth:'2px' }}>
       <div className="bg-white  group-hover:bg-opacity-30 group-hover:text-[#ff5722] px-6 py-3 text-black font-semibold text-lg shadow-md group-hover:shadow-none transition duration-300">
  {cat.title}
</div>

          </div>
        </a>
      ))}
    </div>
  );
};

export default CategoryGrid;
