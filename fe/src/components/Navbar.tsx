import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-[#67AE6E] relative">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/img/homepage/logo1.png" alt="WebVibe Logo" className="h-10" />
        {/*<span className="text-xl font-semibold text-gray-800">*/}
        {/*  Web Vibe<span className="text-green-500">:</span>*/}
        {/*</span>*/}
      </div>

      {/* Desktop Menu (only visible ≥ 1024px) */}
      <div className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-700">
        <div className="group relative">
          <button className="hover:text-black">Avada ▾</button>
        </div>
        <div className="group relative">
          <button className="hover:text-black">Avada For ▾</button>
        </div>
        <a href="#" className="hover:text-black">Hosting</a>
        <a href="#" className="hover:text-black">Customization</a>
        <div className="group relative">
          <button className="hover:text-black">Resources ▾</button>
        </div>
      </div>

      {/* CTA Button (only visible ≥ 1024px) */}
      <button className="hidden lg:flex ml-4 px-4 py-2 border rounded-md border-gray-300 text-sm font-medium text-gray-800 hover:border-gray-500 items-center space-x-1">
        <span className="text-sm">✨</span>
        <span>My WebVibe</span>
      </button>

      {/* Mobile Menu Toggle (visible < 1024px) */}
      <button
        className="lg:hidden text-gray-700"
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
