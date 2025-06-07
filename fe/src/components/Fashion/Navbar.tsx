import { FaUser, FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  return (
    <header className="border-b border-gray-300 font-manrope">
      {/* Top Line */}
      <div className="bg-white border-b text-sm font-semibold tracking-wide p-3">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Left: Promo Text */}
          <div>
            BEST SPECIAL OFFERS! <span className="text-red-500">40% OFF!</span>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold tracking-widest ">
            MODERNO
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-5 text-xl">
            <FaUser className="hover:text-red-500 cursor-pointer" />
            <FaSearch className="hover:text-red-500 cursor-pointer" />
            <FaHeart className="hover:text-red-500 cursor-pointer" />
            <FaShoppingBag className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex justify-center items-center space-x-8 py-3 font-semibold text-base uppercase tracking-wide">
  <div className="relative group">
    <button className="hover:text-red-500">HOMES</button>
  </div>
  <div className="relative group">
    <button className="hover:text-red-500">SHOP</button>
  </div>
  <div className="relative group">
    <button className="hover:text-red-500">BLOG</button>
  </div>
  <div className="relative group">
    <button className="hover:text-red-500">PAGES</button>
  </div>
  <div className="relative group">
    <button className="hover:text-red-500">MEGA</button>
  </div>
  <a href="#" className="hover:text-red-500">CONTACTS</a>
</nav>

    </header>
  );
};

export default NavBar;
