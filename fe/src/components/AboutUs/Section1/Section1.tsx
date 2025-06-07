import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Section1 = () => {
  const faqs = [
    {
      question: "Lợi ích của việc thiết kế website là gì ?",
      answer:
        "Website là bộ mặt đại diện cho một doanh nghiệp, việc bạn so hữu một website sẽ khiến doanh nghiệp của bạn chuyên nghiệp hơn cũng như có thể dễ dàng tiếp cận với khách hàng trong thời buổi công nghệ 4.0.",
    },
    {
      question: "Giá thiết kế website tại WebVibe khoảng bao nhiêu ?",
      answer: "Tùy thuộc vào mức độ và nhu cầu, chúng tôi cung cấp các mức giá phải chăng và đảm bảo rẻ nhất thị trường nhưng cũng không kém phần chất lượng và đầu ra hiệu quả, mức giá thông thường là 3 triệu trở lên, trong trường hợp có nhiều chức năng phức tạp , chúng tôi sẽ đưa ra mức giá hợp lý nhất.",
    },
    {
      question: "Dịch vụ chăm sóc (quản trị) website là gì ?",
      answer: "Sau khi một website đã bước vào quá trình hoạt động thì luôn cần được cập nhật thông tin để khiến website luôn có tính động và mới mẻ với khách hàng, nên việc cập nhật và duy trì thông tin liên tục là rất cần thiết, bạn có thể tập trung vào những việc khác có tính chất quan trọng hơn.",
    },
    {
      question: "Có đội ngũ hỗ trợ khi gia công website tại WebVibe không ?",
      answer: "Để phù hợp với nghiệp vụ và tính chất của website chúng tôi sẽ làm việc và thống nhất với khách hàng các ý tưởng cũng như tư vấn mọi lúc để chất lượng đầu ra luôn được đảm bảo.",
    },
    {
      question: "Mức giá cho một website cơ bản từ a tới z tại WebVibe",
      answer: "Nếu bạn chưa có mã nguồn của giao diện web, chúng tôi nhận thiết kế với mức giá 3 triệu, cộng với chi phí để thực hiện đưa vào hoạt động thì tổng chi phí dao động từ khoảng 6-7 triệu cho một website cơ bản.",
    },

  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <div className="w-full space-y-4 text-center mt-4 font-roboto">
        <p className="text-sm text-gray-500 uppercase tracking-widest">FAQ VỀ DỊCH VỤ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 uppercase leading-snug">
          Dịch vụ thiết kế website tại WebVibe
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
            src="img/AboutUs/aboutus_image.png"
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
