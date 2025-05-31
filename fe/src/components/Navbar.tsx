import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-[12%] py-4 shadow-sm bg-[#67AE6E] relative z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 z-10">
        <img src="/img/homepage/logo1.png" alt="WebVibe Logo" className="h-6" />
      </Link>

      {/* Centered Desktop Menu */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6 text-sm font-medium text-white">
        <Link to="/" className="hover:text-black">WebVibe</Link>
        <Link to="/product" className="hover:text-black">Live Product</Link>
        <Link to="/contact" className="hover:text-black">Contact</Link>
        <Link to="/aboutUs" className="hover:text-black">About Us</Link>
      </div>

      {/* CTA Button */}
   
      {/* Mobile Menu Toggle */}
      <button
        className="lg:hidden text-white z-10"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-gray-700 lg:hidden z-40">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-black">WebVibe</Link>
          <Link to="/product" onClick={() => setMenuOpen(false)} className="hover:text-black">Live Product</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-black">Contact</Link>
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)} className="hover:text-black">About Us</Link>
          <hr />
        
        </div>
      )}
    </nav>
  );
};

export default NavBar;
