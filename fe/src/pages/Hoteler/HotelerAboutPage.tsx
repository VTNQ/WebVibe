import React from "react";
import RoomMarquee from "../../components/Hoteler/Room/RoomBanner";
import ServiceSection from "@/components/Hoteler/About/ServiceSection";
import StatisticCounter from "@/components/Hoteler/Home/StatisticCounter";
import TestimonialSlider from "@/components/Hoteler/About/TestimonialSlider";
export default function HotelerAboutPage() {
  return (
    <div className="bg-white text-gray-700">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-white text-center">
          <h1 className="text-5xl font-serif font-semibold">About</h1>
          <p className="mt-2 text-sm">
            <span className="text-white/70">Home</span>
            <span className="mx-1">›</span>
            <span className="text-white font-semibold">About</span>
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Images */}
        <div className="relative w-full h-[500px]">
          <img
            src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-6.jpg"
            alt="room-1"
            className="absolute top-0 left-0 w-[65%] rounded shadow-xl object-cover h-[320px] z-20"
          />
          <img
            src="https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-1.jpg"
            alt="room-2"
            className="absolute bottom-0 right-0 w-[65%] rounded shadow-xl object-cover h-[320px] z-10"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-500 mb-2">
            About Interiox
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold mb-6 leading-tight">
            We Provide Outdoor <br /> Activities To All Visitors
          </h2>
          <p className="text-[#b68c5a] font-medium text-lg mb-4">
            Our operations span the globe, offering exceptional services across
            various hotel booking
          </p>
          <p className="text-gray-600 mb-6">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Introduce best the Hotel Booking & their services",
              "Booking mission statement or Luxury hotel",
              "Highlight featured on Booking project",
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#b68c5a] text-lg mt-1">✔</span>
                <p className="text-gray-700">{text}</p>
              </li>
            ))}
          </ul>

          <button className="bg-[#b68c5a] text-white font-semibold px-8 py-3 rounded hover:bg-[#a07746] transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
      <RoomMarquee />
      <ServiceSection />
      <div className="flex justify-center gap-16 mb-20">
        <StatisticCounter number={20} label="Projects" />
        <StatisticCounter number={35} label="People" />
        <StatisticCounter number={40} label="Years" />
        <StatisticCounter number={30} label="Award Winner" />
      </div>
      <TestimonialSlider/>
    </div>
  );
}
