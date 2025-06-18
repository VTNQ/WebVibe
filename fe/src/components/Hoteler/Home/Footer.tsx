const Footer=()=>{
    return (
        <footer className="bg-black text-white pt-16 pb-10 px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {/* Logo + Subscribe */}
            <div>
              <div className="mb-4 flex items-center gap-2 text-[#a57d53] text-2xl font-semibold">
                <span className="text-3xl">👑</span>
                <span>HOTELER</span>
              </div>
              <p className="text-sm mb-6">
                Feel free to reach out if you want to collaborate with us, or chat.
              </p>
              <div className="flex items-center bg-[#1a1a1a] rounded-sm overflow-hidden">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent text-white px-4 py-3 w-full outline-none placeholder:text-gray-400"
                />
                <button className="bg-transparent px-4 text-[#a57d53] text-xl">
                  ✈️
                </button>
              </div>
            </div>
    
            {/* Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Service</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Store Directory</li>
                <li>Top Hotels</li>
                <li>Quick Links</li>
                <li>Important Links</li>
                <li>Insights</li>
                <li>Knowledge Center</li>
              </ul>
            </div>
    
            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Career</li>
                <li>Contact</li>
              </ul>
            </div>
    
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">New York</h4>
              <p className="text-sm text-gray-300">
                2464 Royal Ln. Mesa, New Jersey 45463
              </p>
              <p className="text-sm mt-2">(000) 222-0000</p>
              <p className="text-sm mb-6">info@yourwebsite.com</p>
    
              <h4 className="text-lg font-semibold mb-2">London</h4>
              <p className="text-sm text-gray-300">
                1901 Thornridge Cir. Shiloh, Hawaii 81063
              </p>
              <p className="text-sm mt-2">(229) 555-0109</p>
              <p className="text-sm">info@yourwebsite.com</p>
            </div>
          </div>
    
          {/* Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm text-gray-500">
            <p>© 2025 ThemeMascot Agency</p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-lg">
              <a href="#" className="hover:text-white">🐦</a>
              <a href="#" className="hover:text-white">📘</a>
              <a href="#" className="hover:text-white">▶️</a>
              <a href="#" className="hover:text-white">📸</a>
            </div>
          </div>
        </footer>
      );
}
export default Footer;