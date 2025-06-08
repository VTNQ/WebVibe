import React, { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-300 font-manrope">
      {/* Top Line */}
      <div className="bg-white border-b text-sm font-semibold tracking-wide">
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 relative">
          {/* Left: Mobile Menu Icon */}
          <div className="flex items-center sm:hidden">
            {menuOpen ? (
              <FaTimes
                className="text-xl cursor-pointer hover:text-red-500"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="text-xl cursor-pointer hover:text-red-500"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
          <div className="hidden sm:block text-xs sm:text-sm whitespace-nowrap">
  BEST SPECIAL OFFERS! <span className="text-red-500">40% OFF!</span>
</div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-3xl font-bold tracking-widest whitespace-nowrap">
            MODERNO
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-4 text-lg sm:text-xl">
              <FaUser className="hover:text-red-500 cursor-pointer" />
              <FaSearch className="hover:text-red-500 cursor-pointer" />
              <FaHeart className="hover:text-red-500 cursor-pointer" />
            </div>
            <FaShoppingBag className="text-xl cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex justify-center items-center space-x-6 sm:space-x-8 py-3 font-semibold text-sm sm:text-base uppercase tracking-wide">
        <a href="#" className="hover:text-red-500">HOMES</a>
        <a href="#" className="hover:text-red-500">SHOP</a>
        <a href="#" className="hover:text-red-500">BLOG</a>
        <a href="#" className="hover:text-red-500">PAGES</a>
        <a href="#" className="hover:text-red-500">MEGA</a>
        <a href="#" className="hover:text-red-500">CONTACTS</a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 py-4 font-semibold text-base uppercase tracking-wide bg-white border-t">
          <a href="#" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>HOMES</a>
          <a href="#" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>SHOP</a>
          <a href="#" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>BLOG</a>
          <a href="#" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>PAGES</a>
          <a href="#" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>MEGA</a>
          <a href="#" className="hover:text-red-500" onClick={() => setMenuOpen(false)}>CONTACTS</a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
