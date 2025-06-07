import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
    image: "/img/Moderno",
    text: "High quality and very professional service. Highly recommended.",
    name: "JANE DOE, MARIE CLAIRE",
  },
];

const ReviewSlider = () => {
  return (
    <div className="w-full py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-12 uppercase">Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        className="max-w-3xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="border p-8 rounded relative flex flex-col items-center text-center shadow-sm min-h-[250px]">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="text-gray-600 mb-4">{review.text}</p>
              <p className="font-semibold text-sm">{review.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Brand logos under review */}
      <div className="flex justify-center flex-wrap items-center gap-10 mt-20">
        <img src="/img/Moderno/HomePage/ricky-2136507208-e1682433504388.webp" alt="PRADA" className="h-6" />
        <img src="/img/logo-burberry.png" alt="BURBERRY" className="h-6" />
        <img src="/img/logo-dolce.png" alt="DOLCE & GABBANA" className="h-6" />
        <img src="/img/logo-hugo.png" alt="HUGO BOSS" className="h-6" />
        <img src="/img/logo-lafayette.png" alt="LAFAYETTE 148" className="h-6" />
      </div>
    </div>
  );
};

export default ReviewSlider;
