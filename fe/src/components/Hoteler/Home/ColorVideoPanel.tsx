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

      {/* Color Palette (Left) */}
      <div className="absolute top-1/2 left-2 -translate-y-1/2 flex flex-col items-center gap-2 bg-white p-2 rounded-full shadow">
        <div className="text-xs font-bold text-center">TRY YOUR<br />COLORS</div>
        {colors.map((color, i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full border-2"
            style={{ backgroundColor: color }}
          />
        ))}
        <div className="text-[10px] mt-2 text-center">Other<br />Set</div>
        <div className="w-8 h-8 rounded-full border-2 bg-gradient-to-r from-blue-500 to-yellow-300" />
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
