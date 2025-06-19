import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";

const colors = [
  "#B38D5F", // nâu
  "#000000", // đen
  "#FFEFE7", // hồng nhạt
  "#F6F4E6", // trắng ngà
];

const ColorVideoPanel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image or Video */}
      <img
        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/cta1.jpg"
        alt="Decor"
        className="w-full h-full object-cover"
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
      {/* Ripple effect */}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 animate-video-play z-0" />

      {/* Button */}
      <button className="w-32 h-32 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center z-10 shadow-md hover:scale-105 transition-transform">
        <FaPlay className="text-black text-3xl" />
      </button>
    </div>



      {/* Action buttons (Right) */}
      <div className="absolute top-1/2 right-2 -translate-y-1/2 flex flex-col items-center gap-3">
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <FaShoppingCart />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
          <BsDisplay />
        </button>
      </div>
    </div>
  );
};

export default ColorVideoPanel;
