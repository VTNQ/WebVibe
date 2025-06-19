import React from "react";
import { FaPlay, FaShoppingCart } from "react-icons/fa";
import { BsDisplay } from "react-icons/bs";

const ColorVideoPanel = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/cta1.jpg"
        alt="Decor"
        className="w-full h-full object-cover"
      />

      {/* Play Button Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Ripple Effect */}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white/60 animate-video-play z-0" />

        {/* Button */}
        <button className="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center z-10 shadow-md hover:scale-105 transition-transform">
          <FaPlay className="text-black text-2xl sm:text-3xl" />
        </button>
      </div>

      {/* Action buttons (Right) */}
      <div className="absolute top-1/2 right-2 sm:right-6 -translate-y-1/2 flex flex-col items-center gap-2 sm:gap-3">
        <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
          <FaShoppingCart className="text-base sm:text-lg" />
        </button>
        <button className="w-9 h-9 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow hover:scale-105 transition-transform">
          <BsDisplay className="text-base sm:text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ColorVideoPanel;
