import React from "react";

const MissionStatement = () => {
  return (
    <div className="relative px-[1rem]  sm:p-[4vh] md:p-[6vh] mt-[4vh] sm:mt-[3vh] md:mt-[4vh]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-no-repeat bg-center"
        style={{
          backgroundImage: 'url("/img/Moderno/HomePage/ricky-2102585885.webp")',
          backgroundSize: "contain", // Adjust to cover
          backgroundPosition: "center",
          zIndex: -2,
        }}
      />
      
      <div className="absolute inset-0 bg-white bg-opacity-70 z-[-1]" />

      <div className="mx-auto px-0 text-center  sm:px-6 md:px-8">
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
          className="text-[20px] sm:text-[36px] md:text-[44px] leading-[50px] sm:leading-[56px] md:leading-[79px] font-medium text-gray-900"
          style={{
            letterSpacing: "-0.03em",
            wordSpacing: "2px",
          }}
        >
          We believe that every human deserves to feel beautiful and confident,
          and we are committed to providing you with the best quality and styles
          that will make you look and feel your best.
        </p>

        {/* Divider */}
        <div className="mt-8 sm:mt-12">
          <div className="inline-block border-t-2 border-pink-400 w-16 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
