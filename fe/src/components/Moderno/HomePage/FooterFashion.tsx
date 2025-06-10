import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { FaCcAmex, FaCcApplePay, FaGooglePay, FaCcMastercard, FaCcPaypal, FaCcVisa, FaCcDiscover } from 'react-icons/fa';

const FooterFashion = () => {
  return (
    <>
      {/* Vertical "Buy Theme" Button - positioned relative to the viewport */}
      <a
        href="#"
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-green-600 text-white font-bold py-3 px-6 -rotate-90 origin-bottom-right z-50 hover:bg-green-700 transition-colors hidden sm:block"
        style={{ letterSpacing: '0.1em' }}
      >
       WebVibe
      </a>

      <footer className="bg-black text-gray-400 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">
          {/* Top section with columns */}
          {/* Thay đổi ở đây */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">

            {/* Column 1: Newsletter */}
            <div className="md:col-span-2 lg:col-span-1">
              <h3 className="text-white font-semibold tracking-wider mb-4">
                SIGN UP TO GET 10% OFF YOUR FIRST ORDER AND STAY UP TO DATE ON THE LATEST PRODUCT RELEASES, SPECIAL OFFERS AND NEWS
              </h3>
              <form>
                <input
                  type="email"
                  placeholder="Your Email*"
                  className="bg-transparent border border-gray-600 w-full py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="bg-zinc-800 text-white w-full py-3 px-4 mt-4 hover:bg-zinc-700 transition-colors font-semibold"
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* Column 2: Links */}
            <div>
              <h3 className="text-white font-semibold tracking-wider mb-4 invisible hidden lg:block">LINKS</h3> {/* Hidden title for alignment */}
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">SHOP</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SHIPPING</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RETURNS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CAREERS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TERMS & CONDITIONS</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a></li>
              </ul>
            </div>

            {/* Column 3 & 4: Contact Info */}
            <div className="md:col-span-2 lg:col-span-2">
              <p className="mb-6">
                If you have any questions regarding your order, products or our service, please contact our customer service.
              </p>
              <div className="space-y-3">
                <p><strong>MONDAY - FRIDAY: 10:00-6:00 PM</strong></p>
                <p>PHONE: <a href="tel:+17123399294" className="hover:text-white transition-colors">+1 712-339-9294</a></p>
                <p>EMAIL: <a href="mailto:INFO@MODERNO-THEME.COM" className="hover:text-white transition-colors">INFO@MODERNO-THEME.COM</a></p>
                <p>ADDRESS: <span className="hover:text-white transition-colors">283 N. GLENWOOD STREET, LEVITTOWN, NY</span></p>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright and icons */}
          <div className="border-t border-gray-800 pt-8 flex flex-col-reverse md:flex-row md:justify-between md:items-center">

            {/* Copyright */}
            <p className="text-sm text-center mt-8 md:mt-0">
              © 2023 Moderno Theme. All Rights Reserved.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Payment Icons */}
              <div className="flex items-center justify-center gap-2 text-3xl">
                <FaCcAmex />
                <FaCcApplePay />
                <FaGooglePay />
                <FaCcDiscover /> {/* Placeholder for Maestro */}
                <FaCcMastercard />
                <FaCcPaypal />
                <FaCcVisa /> {/* Placeholder for Shop Pay */}
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3 text-xl">
                <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:bg-white hover:text-black transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" aria-label="Instagram" className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:bg-white hover:text-black transition-all duration-300">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:bg-white hover:text-black transition-all duration-300">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="YouTube" className="w-8 h-8 flex items-center justify-center border border-gray-600 hover:bg-white hover:text-black transition-all duration-300">
                  <FaYoutube />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFashion;
