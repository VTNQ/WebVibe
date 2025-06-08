import React, { useState } from "react";

const reviews = [
  {
    image: "/img/Moderno/HomePage/ricky-2130614752-145x145.jpg",
    text: "I am a regular at this fashion shop – their stylish clothes and accessories always keep me ahead of the trend.",
    name: "MADELYN GEORGE, ELLE",
  },
  {
    image: "/img/Moderno/HomePage/ricky-2132323454-145x145.jpg",
    text: "The pricing is amazing, and I love the variety. It feels like it’s made just for me!",
    name: "MONICA FIELDS, VOGUE",
  },
  {
    image: "/img/Moderno/HomePage/ricky-2132323454-145x145.jpg",
    text: "High quality and very professional service. Highly recommended.",
    name: "JANE DOE, MARIE CLAIRE",
  },
];

const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-24 bg-white text-center font-manrope">
      <h2 className="text-4xl font-bold uppercase mb-20 tracking-wide">Reviews</h2>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="border border-gray-300 px-16 py-12 rounded-lg flex items-center gap-12 justify-center min-h-[320px] shadow-md transition-all duration-300">
          <img
            src={reviews[currentIndex].image}
            alt={reviews[currentIndex].name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <div className="text-left max-w-2xl">
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {reviews[currentIndex].text}
            </p>
            <p className="font-bold text-base tracking-wider">{reviews[currentIndex].name}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition z-10"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition z-10"
        >
          &#8594;
        </button>
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3.5 h-3.5 rounded-full transition ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center items-center gap-14 mt-24">
        <img src="/img/Moderno/HomePage/ricky-2136507208-e1682433504388.webp" alt="PRADA" className="h-8" />
        <img src="/img/Moderno/HomePage/moderno-2531698434.webp" alt="BURBERRY" className="h-8" />
        <img src="/img/Moderno/HomePage/moderno-2531767109.webp" alt="DOLCE & GABBANA" className="h-8" />
        <img src="/img/Moderno/HomePage/moderno-2531627479.webp" alt="HUGO BOSS" className="h-8" />
        <img src="/img/Moderno/HomePage/moderno-2531959934.webp" alt="LAFAYETTE 148" className="h-8" />
      </div>
    </section>
  );
};

export default ReviewSlider;
