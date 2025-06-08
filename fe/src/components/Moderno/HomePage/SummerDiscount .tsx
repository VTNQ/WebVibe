import React, { useState, useEffect } from "react";

const summerDiscountData = [
  {
    id: 1,
    label: "FOR SUMMER",
    title: "Trendy Sunglasses 2023",
    images: [
      "img/Moderno/HomePage/ricky-2127760710.jpg",
      "img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
      "img/Moderno/HomePage/ricky-2125700451-600x929.jpg"
    ],
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    label: "DISCOUNT",
    title: "-30% for Spring Collection",
    images: [
      "img/Moderno/HomePage/ricky-2127760710.jpg",
      "img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
      "img/Moderno/HomePage/ricky-2125700451-600x929.jpg"
    ],
    buttonText: "SHOP NOW",
  },
  {
    id: 3,
    label: "COLLECTION",
    title: "Luxury Bags for Women",
    images: [
      "img/Moderno/HomePage/ricky-2127760710.jpg",
      "img/Moderno/HomePage/ricky-2105975080-600x929.jpg",
      "img/Moderno/HomePage/ricky-2125700451-600x929.jpg"
    ],
    buttonText: "SHOP NOW",
  },
];

const SummerCard = ({ item, currentIndex }) => (
  <div className="relative w-full h-[550px] overflow-hidden group">
    {/* Background Image */}
    {item.images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={item.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
          index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0"
        } group-hover:opacity-100`} // Apply hover opacity
      />
    ))}
    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4 text-center group-hover:bg-white/80 group-hover:bg-opacity-30 group-hover:shadow-none transition-colors">
      <span className="text-sm uppercase tracking-wide mb-2 group-hover:text-black font-bold">{item.label}</span>
      <h3 className="text-3xl font-semibold leading-tight mb-4 group-hover:text-[#ff5722] ">{item.title}</h3>
      <button className="border border-white px-6 py-2 text-sm uppercase tracking-wide font-bold hover:bg-white hover:text-black transition group-hover:border-none group-hover:text-black">
        {item.buttonText}
      </button>
    </div>
  </div>
);

const SummerDiscount = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto switch images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === summerDiscountData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white font-manrope py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {summerDiscountData.map((item) => (
          <SummerCard key={item.id} item={item} currentIndex={currentIndex} />
        ))}
      </div>
    </section>
  );
};

export default SummerDiscount;
