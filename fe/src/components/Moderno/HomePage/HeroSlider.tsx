import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const HeroSlider = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const progressCircle = useRef(null);

  const slides = [
    {
      title: "New Suits for Men",
      description:
        "Elevate your wardrobe with the new mens suits collection, featuring timeless designs with a modern twist. Crafted from premium fabrics, this collection offers a range of colors and fits to suit any occasion. Make a statement with sleek and sophisticated style.",
      buttonText: "SHOP NOW",
      image: "/img/Moderno/HomePage/ricky-2131549808.jpg",
    },
    {
      title: "New Spring Collection 2023",
      description:
        "Introducing our new spring fashion collection, perfect for effortless casual chic. From flowy dresses to floral tops, mix and match with ease. Lightweight fabrics and cheerful colors to awaken the Spring in you.",
      buttonText: "DISCOVER",
      image: "/img/Moderno/HomePage/ricky-2127760710.jpg",
    },
    {
      title: "Summer Collection",
      description:
        "Introducing the new fashion summer collection, featuring bold and bright colors, playful prints, and comfortable yet stylish pieces perfect for any occasion. From oversized blazer dresses to monochromatic denim pieces, this collection has something for everyone.",
      buttonText: "SEE DEALS",
      image: "/img/Moderno/HomePage/ricky-2131286131.jpg",
    },
  ];

  const onAutoplayTimeLeft = (_, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
  };

  return (
    <section className="relative w-full bg-white font-manrope">
      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[85vh] md:h-screen mb-4"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:grid md:grid-cols-5 h-full">
              {/* Image (takes full width on mobile, 3/5 columns on md and up) */}
              <div className="w-full h-1/2 md:h-full md:col-span-3 flex justify-center items-center md:order-2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content (takes full width on mobile, 2/5 columns on md and up) */}
              <div className="w-full h-1/2 md:h-full md:col-span-2 flex flex-col justify-center p-5 sm:p-10 md:p-10 lg:p-20 md:order-1">
                <h1 className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-7xl
                  mb-3 sm:mb-4 md:mb-6
                  leading-tight
                  whitespace-normal break-words
                  max-w-xl
                  font-medium
                ">
                  {slide.title}
                </h1>
                <p className="text-gray-700 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg break-words">
                  {slide.description}
                </p>

                <button className="self-start bg-black text-white px-6 py-3 sm:px-8 sm:py-4 uppercase tracking-wider hover:bg-red-500 transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Slide Dots */}
      {/* KEY CHANGE: Adjusted bottom and left for mobile to place them closer to the button */}
      <div className="absolute bottom-[-0.5rem] left-5 sm:left-10 md:bottom-10 md:left-20 flex gap-2 sm:gap-4 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className="w-6 h-6 sm:w-8 sm:h-8 relative cursor-pointer"
            onClick={() => swiperRef.current?.slideToLoop(index)}
          >
            {/* Static Background Circle */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#ccc"
                strokeWidth="4"
                fill="none"
              />
              {/* Active Progress Ring */}
              {index === activeIndex && (
                <circle
                  ref={progressCircle}
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#000"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="125.6"
                  style={{
                    strokeDashoffset: `calc(125.6 * var(--progress, 1))`,
                    transition: "stroke-dashoffset 0.1s linear",
                  }}
                />
              )}
            </svg>
            {/* Center dot needs to be inside the SVG to be positioned correctly */}
            <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="4"
                fill={index === activeIndex ? "#000" : "#ccc"}
              />
            </svg>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;