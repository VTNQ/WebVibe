import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Section1 = () => {
  const faqs = [
    {
      question: "Lợi ích của việc thiết kế website là gì?",
      answer:
        "Website là bộ mặt đại diện cho một doanh nghiệp. Việc sở hữu một website giúp doanh nghiệp trở nên chuyên nghiệp hơn và dễ tiếp cận khách hàng trong thời đại công nghệ 4.0.",
    },
    {
      question: "Giá thiết kế website tại WebVibe khoảng bao nhiêu?",
      answer:
        "Tùy theo yêu cầu, mức giá thiết kế website tại WebVibe thường bắt đầu từ 3 triệu đồng. Với chức năng phức tạp, giá sẽ được điều chỉnh hợp lý.",
    },
    {
      question: "Dịch vụ chăm sóc (quản trị) website là gì?",
      answer:
        "Chăm sóc website gồm việc cập nhật nội dung thường xuyên để giữ cho trang web luôn mới mẻ, giúp bạn tập trung vào các công việc quan trọng hơn.",
    },
    {
      question: "Có đội ngũ hỗ trợ khi gia công website tại WebVibe không?",
      answer:
        "Chúng tôi luôn có đội ngũ hỗ trợ tư vấn, làm việc cùng bạn để đảm bảo sản phẩm đầu ra chất lượng và phù hợp với nghiệp vụ.",
    },
    {
      question: "Mức giá cho một website cơ bản từ A đến Z tại WebVibe?",
      answer:
        "Chi phí trung bình để hoàn thành một website cơ bản là từ 6–7 triệu đồng, bao gồm cả thiết kế và triển khai vận hành.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <p className="text-sm text-gray-500 uppercase tracking-widest">
          FAQ VỀ DỊCH VỤ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 uppercase leading-snug">
          Dịch vụ thiết kế website tại WebVibe
        </h2>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left (FAQ List) */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg transition duration-300 ${
                openIndex === index
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-green-700 group"
              >
                <span className="relative z-10 group-hover:text-green-900 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <motion.div
                  className="px-4 pb-4 text-gray-700"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-[#eaf7ec] rounded-md p-4 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Right (Image) */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/img/AboutUs/aboutus_image.png"
            alt="WebVibe Dịch vụ thiết kế"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
