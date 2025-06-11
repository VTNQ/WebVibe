import React, { useState } from "react";
import Swal from 'sweetalert2';

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
  const showFeatureAlert = () => {
    Swal.fire({
      icon: 'info',
      title: 'Muốn xem ư!!!',
      text: 'Không cho đâu :}}',
      confirmButtonColor: '#6c63ff',
      confirmButtonText: 'OK',
    });
  };

  return (
    <header className="border-b border-gray-300 font-manrope">
      {/* Top Line */}
      <div className="bg-white border-b border-black text-sm font-semibold tracking-wide">
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-[1.4rem] relative">
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
          <div className="hidden sm:block text-xs sm:text-[0.75rem] md:text-[1rem] whitespace-nowrap">
  BEST SPECIAL OFFERS! <span className="text-red-500">40% OFF!</span>
</div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-3xl font-bold tracking-widest whitespace-nowrap">
              <img className="h-[1.2rem] " src="/img/Moderno/logo.png"></img>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Hidden on mobile */}
            <div className="hidden sm:flex items-center space-x-4 text-lg sm:text-xl">
              <FaUser className="hover:text-red-500 cursor-pointer" />
              <FaSearch className="hover:text-red-500 cursor-pointer" />
              <FaHeart className="hover:text-red-50á  k0 cursor-pointer" />
            </div>
            <FaShoppingBag className="text-xl cursor-pointer hover:text-red-500" />
          </div>
        </div>
      </div>



      {/* Desktop Navigation */}
      <nav className="hidden sm:flex justify-center items-center space-x-6 sm:space-x-8 py-3 font-semibold text-sm sm:text-[0.7rem] text-base lg:text-[0.78rem] uppercase tracking-wide">
        <a href="/Morderno" className="hover:text-red-500">HOMES</a>
        <a href="/Morderno/product" className="hover:text-red-500">SHOP</a>
        <a href="#" onClick={(e) => { e.preventDefault(); showFeatureAlert(); }} className="hover:text-red-500">BLOG</a>
        <a href="#" onClick={(e) => { e.preventDefault(); showFeatureAlert(); }} className="hover:text-red-500">PAGES</a>
        <a href="#" onClick={(e) => { e.preventDefault(); showFeatureAlert(); }} className="hover:text-red-500">MEGA</a>
        <a href="/contact" className="hover:text-red-500">CONTACTS</a>
      </nav>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 py-4 font-semibold text-base uppercase tracking-wide bg-white border-t ">
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
