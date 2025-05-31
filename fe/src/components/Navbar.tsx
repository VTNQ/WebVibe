import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-[#67AE6E] relative">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/img/homepage/logo1.png" alt="WebVibe Logo" className="h-10" />
      </Link>

      {/* Desktop Menu (only visible ≥ 1024px) */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-white">
        <div className="group relative">
          <Link to="/" className="hover:text-black">WebVibe</Link>
        </div>
        <div className="group relative">
          <Link to="/product" className="hover:text-black">Live Product</Link>
        </div>
        <Link to="/contact" className="hover:text-black">Contact</Link>
        <Link to="/aboutUs" className="hover:text-black">About Us</Link>
      </div>

      {/* CTA Button (only visible ≥ 1024px) */}
      <button className="hidden lg:flex ml-4 px-4 py-2 border rounded-md border-white text-sm font-medium text-white hover:border-gray-100 items-center space-x-1">
        <span className="text-sm">✨</span>
        <span>My WebVibe</span>
      </button>

      {/* Mobile Menu Toggle (visible < 1024px) */}
      <button
        className="lg:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu (only visible when open) */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-gray-700 lg:hidden z-50">
          <button className="text-left hover:text-black">Avada ▾</button>
          <button className="text-left hover:text-black">Avada For ▾</button>
          <a href="#" className="hover:text-black">Hosting</a>
          <a href="#" className="hover:text-black">Customization</a>
          <button className="text-left hover:text-black">Resources ▾</button>
          <hr />
          <button className="w-full px-4 py-2 border rounded-md border-gray-300 text-sm font-medium text-gray-800 hover:border-gray-500 flex items-center space-x-1">
            <span className="text-sm">✨</span>
            <span>My WebVibe</span>
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
