import React from "react";
const services = [
    {
        title: "The Restaurant",
        subtitle: "DISCOVER",
        description:
            "A luxury resort is an upscale vacation destination that offers an exceptional level of comfort, amenities, and services, often set in exotic locations.",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog1.jpg",
    },
    {
        title: "Spa Center",
        subtitle: "EXPERIENCE",
        description:
            "Spa center is a facility dedicated to providing wellness and relaxation services aimed at rejuvenating both the body and mind.",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/spa.jpg",
    },
    {
        title: "Fitness Center",
        subtitle: "MODERN",
        description:
            "Fitness center is a facility equipped with a variety of exercise machines, weights, and other fitness tools designed to help individuals improve.",
        image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/gym2.jpg",
    },
]
const ServiceCard = ({ title, subtitle, description, image, reverse }) => {
    return (
        <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
            <div className="md:w-1/2">
                <img src={image} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 bg-[#f9f5f1] flex flex-col justify-center p-8">
                <p className="text-sm text-gray-500 tracking-widest uppercase mb-2">{subtitle}</p>
                <h2 className="text-3xl font-serif text-gray-800 mb-4">{title}</h2>
                <p className="text-gray-600 mb-6">{description}</p>
                <button className="bg-[#5a3e2b] text-white px-5 py-2 text-sm uppercase tracking-wide hover:bg-[#3e2a1c] transition">
                    Contact Us
                </button>
            </div>
        </div>
    )
}
const ServiceSection = () => {
    return (
      <div className="max-w-6xl mx-auto mt-12 mb-12">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    );
  };
export default ServiceSection;