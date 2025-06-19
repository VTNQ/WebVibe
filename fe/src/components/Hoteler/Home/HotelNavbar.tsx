import { useState, useEffect } from "react";
import {
  FaBars,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const HotelNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isFashionRoot = location.pathname === "/Hoteler" || location.pathname === "/hoteler";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50 || !isFashionRoot);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFashionRoot]);

  return (
    <div
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      {/* Top Bar - Hidden on Mobile */}
      <div className={`${scrolled ? "hidden" : "flex"} justify-between items-center px-6 py-2 text-sm border-b border-[#FFFFFF1A] hidden md:flex`}>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-500"><FaYoutube /></a>
          <a href="#" className="hover:text-yellow-500"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
        </div>
        <div className={`flex space-x-6 ${scrolled ? "text-gray-700" : "text-gray-300"}`}>
          <div className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-yellow-500" />
            <span>121 King Street, Melbourne</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineMail className="text-yellow-500" />
            <span>info.company@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className="flex justify-between items-center px-6 transition-all duration-300"
        style={{
          paddingTop: scrolled ? "10px" : "16px",
          paddingBottom: scrolled ? "10px" : "16px",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-semibold text-yellow-500">
          <img
            src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/logo.png"
            width={scrolled ? 120 : 200}
            height={scrolled ? 60 : 103}
            className="transition-all duration-300"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 uppercase text-sm font-medium tracking-wide">
          <li><a href="#" className="hover:text-yellow-500">Home</a></li>
          <li><a href="#" className="hover:text-yellow-500">Pages</a></li>
          <li><a href="#" className="hover:text-yellow-500">Services</a></li>
          <li><a href="#" className="hover:text-yellow-500">Rooms & Suites</a></li>
          <li><a href="#" className="hover:text-yellow-500">News</a></li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4 text-lg items-center">
          <FaSearch className="cursor-pointer hover:text-yellow-500" />
          <div className="md:hidden">
            {menuOpen ? (
              <FaTimes
                className="cursor-pointer hover:text-yellow-500"
                onClick={() => setMenuOpen(false)}
              />
            ) : (
              <FaBars
                className="cursor-pointer hover:text-yellow-500"
                onClick={() => setMenuOpen(true)}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black w-full py-4 px-6 shadow-md">
          <ul className="space-y-4 uppercase text-sm font-medium tracking-wide">
            <li><a href="#" className="block hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="block hover:text-yellow-500">Pages</a></li>
            <li><a href="#" className="block hover:text-yellow-500">Services</a></li>
            <li><a href="#" className="block hover:text-yellow-500">Rooms & Suites</a></li>
            <li><a href="#" className="block hover:text-yellow-500">News</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HotelNavbar;
