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
      title: "Summer Collection",
      // Updated description to match the image
      description:
        "Introducing the new fashion summer collection, featuring bold and bright colors, playful prints, and comfortable yet stylish pieces perfect for any occasion. From oversized blazer dresses to monochromatic denim pieces, this collection has something for everyone.",
      buttonText: "SHOP NOW",
      // Note: Make sure this image path is correct in your project
      image: "/img/Moderno/ricky-2131549808.jpg",
    },
    {
      title: "New Arrivals",
      description:
        "Step into style with our latest arrivals. Discover effortless looks that blend comfort and fashion perfectly.",
      buttonText: "DISCOVER",
      image: "/img/Moderno/ricky-2127760710.jpg",
    },
    {
      title: "Exclusive Deals",
      description:
        "Don’t miss out on our limited-time exclusive offers. Shop now and save big on your favorite items.",
      buttonText: "SEE DEALS",
      image: "/img/Moderno/ricky-2131286131.jpg",
    },
  ];

  const onAutoplayTimeLeft = (_, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
  };

  return (
    <section className="relative w-full bg-white">
      {/* Slider */}
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-screen" // You can adjust the height if needed
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* === KEY CHANGE 1: Use a 5-column grid for asymmetrical layout on medium screens and up === */}
            <div className="grid grid-cols-1 md:grid-cols-5 h-full items-center">
              {/* Content (takes 2 of 5 columns) */}
              {/* === KEY CHANGE 2: Assign 2 columns for the text content === */}
              <div className="md:col-span-2 p-10 md:p-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-gray-700 mb-8 text-base md:text-lg break-words">
                  {slide.description}
                </p>

                <button className="bg-black text-white px-6 py-3 uppercase tracking-wider hover:bg-red-500 transition duration-300">
                  {slide.buttonText}
                </button>
              </div>
              {/* Image (takes 3 of 5 columns) */}
              {/* === KEY CHANGE 3: Assign 3 columns for the image container === */}
              <div className="h-full md:col-span-3 flex justify-center items-center p-5 md:p-10">
                {/* === KEY CHANGE 4: Use object-cover to make the image fill its container gracefully === */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Slide Dots */}
      {/* This part remains unchanged, but I've fixed a small typo in the className */}
      <div className="absolute bottom-10 left-10 md:left-20 flex gap-4 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            // Typo fix: missing " " in className
            className="w-8 h-8 relative cursor-pointer"
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
                    strokeDashoffset: `calc(125.6 * var(--progress, 1))`, // Set initial progress to 1
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
                    r="4" // made dot slightly larger
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