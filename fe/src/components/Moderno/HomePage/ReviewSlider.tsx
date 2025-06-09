import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
  const swiperRef = useRef(null); // Sử dụng useRef để giữ tham chiếu đến Swiper

  const [currentIndex, setCurrentIndex] = useState(0); // Giữ trạng thái của slide hiện tại

  return (
    <section className="w-full py-24 bg-white text-center font-manrope">
      <h2 className="text-3xl sm:text-4xl font-bold uppercase mb-12 tracking-wide">Reviews</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // Autoplay không bị tắt khi người dùng tương tác
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)} // Cập nhật currentIndex khi chuyển slide
        modules={[Autoplay]} // Đảm bảo đã import và sử dụng Autoplay module
        className="max-w-full mx-auto px-6"
        ref={swiperRef} // Gán ref cho Swiper
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="border border-gray-800 px-6 py-8 rounded-lg flex items-center gap-6 justify-center min-h-[320px] shadow-md transition-all duration-300">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="text-left max-w-2xl">
                <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                  {review.text}
                </p>
                <p className="font-bold text-base tracking-wider">{review.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Indicator Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3.5 h-3.5 rounded-full transition ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
            onClick={() => swiperRef.current.swiper.slideTo(index)} // Điều khiển slider thông qua swiperRef
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
