import React from "react";

export default function RoomMarquee() {
  return (
    <div className="overflow-hidden w-full bg-white py-4 border-t border-b border-gray-200">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Nhân đôi nội dung để tạo hiệu ứng mượt */}
        {Array(10).fill(0).map((_, idx) => (
          <div key={idx} className="flex items-center text-4xl font-serif font-semibold text-[#1e1e1e] tracking-wider mx-10">
            <span className="text-[#b68c5a] text-2xl mx-4">✻</span>
            <span className="text-[#b68c5a]/20">HOTELER</span>
            <span className="text-[#b68c5a] text-2xl mx-4">✻</span>
            <span>ROOMS & SUITES</span>
          </div>
        ))}
      </div>
    </div>
  );
}
