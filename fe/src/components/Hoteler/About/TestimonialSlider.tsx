import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const testimonials = [
    {
        name: "Brooklyn Simmons",
        title: "CO Founder",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/client-3.png",
        text: "My stay at hoteler was nothing short of spectacular. From the moment I arrived I was greeted with warm smiles and impeccable service the room",
    },
    {
        name: "Brooklyn Simmons",
        title: "CO Founder",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/testimonials1.jpg",
        text: "My stay at hoteler was nothing short of spectacular. From the moment I arrived I was greeted with warm smiles and impeccable service the room",
    },
    {
        name: "Leslie Alexander",
        title: "Marketing",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/testimonials2.jpg",
        text: "My stay at hoteler was nothing short of spectacular. From the moment I arrived I was greeted with warm smiles and impeccable service the room",
    },
    {
        name: "Leslie Alexander",
        title: "Marketing",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/testimonials3.jpg",
        text: "My stay at hoteler was nothing short of spectacular. From the moment I arrived I was greeted with warm smiles and impeccable service the room",
    },
];
const TestimonialSlider = () => {
    return (
        <div className="py-16 bg-white text-center max-w-7xl mx-auto">
            <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
                Our Testimonials
            </p>
            <h2 className="text-4xl font-serif mb-12">What Client's Say</h2>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination]}
            >
                {testimonials.map((t, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-md p-6 relative text-left">
                            <div className="absolute -top-6 left-6 bg-[#9f7043] w-10  flex items-center justify-center" style={{ height:'9vh' }}>
                                <span className="text-white " style={{ fontSize:'63px',position:'absolute',top:'1vh' }}>“</span>
                            </div>
                            <p className="text-sm text-gray-700 mt-6 mb-4">{t.text}</p>
                            <div className="flex items-center gap-4 mt-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-base font-semibold text-gray-900">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.title}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default TestimonialSlider;