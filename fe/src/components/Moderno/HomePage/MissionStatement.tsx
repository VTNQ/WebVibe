import React from "react";

const MissionStatement = () => {
  return (
    <div className="relative p-[16vh] mt-[14vh]">
      {/* Background image with overlay */}
      <div
  className="absolute inset-0 bg-no-repeat bg-center"
  style={{
    backgroundImage: 'url("/img/Moderno/HomePage/ricky-2102585885.webp")',
    backgroundSize: "60%", // 👈 thu nhỏ hình lại
    backgroundPosition: "center",
    zIndex: -2
  }}
/>

      <div className="absolute inset-0 bg-white bg-opacity-70 z-[-1]" />

      <div className=" mx-auto text-center">
        {/* Icon */}
        <div className="mb-8">
          <svg
            className="h-12 w-12 mx-auto text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>

        {/* Statement */}
        <p
  className="text-[44px] leading-[79px] font-medium text-gray-900"
  style={{
    letterSpacing: "-0.033em",
    wordSpacing: "2px"
  }}
>
  We believe that every human deserves to feel beautiful and confident,
  and we are committed to providing you with the best quality and styles
  that will make you look and feel your best.
</p>


        {/* Divider */}
        <div className="mt-12">
          <div className="inline-block border-t-2 border-pink-400 w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
