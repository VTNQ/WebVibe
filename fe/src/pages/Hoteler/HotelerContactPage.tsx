import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function HotelerContactPage() {
  return (
    <div className="bg-white text-gray-700">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
        }}
      >
        <div className="bg-black/60 absolute inset-0" />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-5xl font-serif font-semibold">Contact</h1>
          <p className="mt-2 text-sm">
            <span className="text-white/70">Home</span> <span className="mx-1">›</span>
            <span className="text-white font-semibold">Contact</span>
          </p>
        </div>
      </div>

      {/* Contact Form + Info Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">Send us email</p>
          <h2 className="text-4xl font-serif font-bold mb-8">Feel free to write</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#f6f7fa] p-4 rounded w-full focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#f6f7fa] p-4 rounded w-full focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="date"
                placeholder="Check In"
                className="bg-[#f6f7fa] p-4 rounded w-full focus:outline-none"
              />
              <input
                type="date"
                placeholder="Check Out"
                className="bg-[#f6f7fa] p-4 rounded w-full focus:outline-none"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Message"
              className="bg-[#f6f7fa] p-4 rounded w-full focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#b68c5a] hover:bg-[#a07746] text-white font-bold px-8 py-4 rounded uppercase tracking-wider transition"
            >
              Send a message
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">Need any help?</p>
          <h2 className="text-4xl font-serif font-bold mb-6">Get in touch with us</h2>
          <p className="text-gray-600 mb-10">
            Lorem ipsum is simply free text available dolor sit amet consectetur notted
            adipisicing elit sed do eiusmod tempor incididunt simply dolore magna.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-[#b68c5a] text-white p-4 rounded">
                <FaPhoneAlt className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Have any question?</h4>
                <p className="text-gray-600">Free +88 017 500 500 88</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#b68c5a] text-white p-4 rounded">
                <FaEnvelope className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Write email</h4>
                <p className="text-gray-600">needhelp@company.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#b68c5a] text-white p-4 rounded">
                <FaMapMarkerAlt className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Visit anytime</h4>
                <p className="text-gray-600">66 broklyn golden street. New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9298039278174!2d106.67627387451766!3d10.81668395845092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e19bf6d3a5%3A0x42cb9e8263400b7a!2zODM4IMSQLiBOZ3V54buFbiBLaeG7h20sIFBoxrDhu51uZyAzLCBHw7IgVuG6pXAsIEjhu5MgQ2jDrSBNaW5oIDcxNDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1750323418943!5m2!1svi!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
}
