import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Section1 = () => {
  const faqs = [
    {
      question: "Lợi ích của việc thiết kế website là gì ?",
      answer:
        "Việc sở hữu một website đã trở thành một nhu cầu thiết yếu đối với các doanh nghiệp, tổ chức và cá nhân muốn bán hàng trực tuyến, mở rộng thị trường, tương tác với khách hàng qua môi trường online từ đó đưa ra các chiến lược kinh doanh hiệu quả.",
    },
    {
      question: "Giá Thiết Kế Website Tại Web4s Khoảng Bao Nhiêu?",
      answer: "",
    },
    {
      question: "Vì Sao Cần Phải Thiết Kế Website Chuẩn Seo ?",
      answer: "",
    },
    {
      question: "Chi phí cho dịch vụ chăm sóc website thường dao động như thế nào?",
      answer: "",
    },
    {
      question: "Khi thiết kế website có đội ngũ hỗ trợ tôi trong quá trình sử dụng không?",
      answer: "",
    },
    {
      question: "Web4s có hỗ trợ hướng dẫn hoặc liệu bài viết chuẩn SEO lên cho khách được không?",
      answer: "",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="w-full space-y-4 text-center mt-4 font-roboto">
        <p className="text-sm text-gray-500 uppercase tracking-widest">FAQ VỀ DỊCH VỤ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 uppercase leading-snug">
          Dịch vụ chăm sóc website tại Web4s
        </h2>
      </div>

      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-6 flex justify-start">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg ${
                  openIndex === index ? "border-green-500 bg-green-50" : "border-green-300 bg-white"
                } transition duration-300`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full relative group overflow-hidden text-left px-4 py-3 flex justify-between items-center font-medium text-green-700 transition duration-300 rounded-lg"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform relative z-10 group-hover:text-white ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                  <span className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-white group-hover:before:animate-slide-in group-hover:before:bg-gradient-to-r group-hover:before:from-[#67AE6E] group-hover:before:to-[#3A8C49] before:z-[-1]"></span>

                  <style>
                    {`
                      @keyframes slide-in {
                        0% {
                          transform: translateX(-100%);
                        }
                        100% {
                          transform: translateX(0%);
                        }
                      }
                      .group-hover\\:before\\:animate-slide-in:hover::before {
                        animation: slide-in 0.5s forwards;
                      }
                    `}
                  </style>
                </button>

                {openIndex === index && faq.answer && (
                  <motion.div
                    className="px-4 pb-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-[#eaf7ec] text-gray-800 text-lg rounded-md p-4 leading-relaxed font-roboto">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-end items-center">
          <img
            src="img/AboutUs/faq-right.webp"
            alt="Web4s FAQ"
            width={800}
            height={800}
            className="z-10"
          />
        </div>
      </section>
    </>
  );
};

export default Section1;
