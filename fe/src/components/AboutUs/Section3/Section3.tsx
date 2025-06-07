import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-white py-24 px-6 text-center">
      {/* Logo Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto rounded-full shadow-lg bg-[#6cbf7e] flex items-center justify-center">
          <img
            src="/img/home++page/logo1.png"
            alt="WebVibe Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#67AE6E] mb-6 tracking-tight">
        Xây dựng mọi thứ với ý tưởng của bạn
      </h2>

      {/* Paragraph */}
      <p className="text-lg text-[#67AE6E] max-w-3xl mx-auto leading-relaxed">
        WebVibe luôn cố gắng để phát triển và trở thành <span className="font-semibold text-[#67AE6E]">#1 công ty thiết kế website</span> có chất lượng và đầu ra đảm bảo nhất cho doanh nghiệp của khách hàng.
         <span className="font-semibold text-[#67AE6E]"></span>{' '}

        <br className="hidden md:block" />
        <span className="block mt-4">
          Đặt chất lượng lên hàng đầu, quy trình nhanh chóng minh bạch là nền tảng vững chắc để làm việc lâu dài với những khách hàng thân yêu tin tưởng.
        </span>
      </p>

    </section>
  );
};

export default Section3;
