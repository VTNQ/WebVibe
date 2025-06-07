import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Section1 = () => {
  const faqs = [
    {
      question: "Lợi ích của việc thiết kế website là gì?",
      answer:
        "Website là bộ mặt đại diện cho một doanh nghiệp, việc bạn so hữu một website sẽ khiến doanh nghiệp của bạn chuyên nghiệp hơn cũng như có thể dễ dàng tiếp cận với khách hàng trong thời buổi công nghệ 4.0.",
    },
    {
      question: "Giá thiết kế website tại WebVibe khoảng bao nhiêu ?",
      answer: "Tùy thuộc vào mức độ và nhu cầu, chúng tôi cung cấp các mức giá phải chăng và đảm bảo rẻ nhất thị trường nhưng cũng không kém phần chất lượng và đầu ra hiệu quả, mức giá thông thường là 3 triệu trở lên, trong trường hợp có nhiều chức năng phức tạp , chúng tôi sẽ đưa ra mức giá hợp lý nhất.",
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
      question: "Mức giá cho một website cơ bản từ a tới z tại WebVibe",
      answer: "Nếu bạn chưa có mã nguồn của giao diện web, chúng tôi nhận thiết kế với mức giá 3 triệu, cộng với chi phí để thực hiện đưa vào hoạt động thì tổng chi phí dao động từ khoảng 6-7 triệu cho một website cơ bản.",
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
