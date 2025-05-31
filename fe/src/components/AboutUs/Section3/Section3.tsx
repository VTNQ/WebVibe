import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-white py-24 px-6 text-center">
      {/* Logo Icon */}
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto rounded-full shadow-lg bg-[#6cbf7e] flex items-center justify-center">
          <img
            src="/img/homepage/logo1.png"
            alt="WebVibe Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#67AE6E] mb-6 tracking-tight">
        Design Anything, Build Everything
      </h2>

      {/* Paragraph */}
      <p className="text-lg text-[#67AE6E] max-w-3xl mx-auto leading-relaxed">
        Avada has been the <span className="font-semibold text-[#67AE6E]">#1 selling theme</span> on Themeforest since its launch in 2012,
        with an ever-growing customer base of <span className="font-semibold text-[#67AE6E]">1,019,874</span>{' '}
        <a href="#" className="underline text-[#67AE6E] hover:text-[#4a9356] font-medium transition">beginners</a>,{' '}
        <a href="#" className="underline text-[#67AE6E] hover:text-[#4a9356] font-medium transition">marketers</a>, and{' '}
        <a href="#" className="underline text-[#67AE6E] hover:text-[#4a9356] font-medium transition">professionals</a>.
        <br className="hidden md:block" />
        <span className="block mt-4">
          Our core focus has always been to ensure that Avada makes your web design workflow
          more accessible and enjoyable.
        </span>
      </p>

    </section>
  );
};

export default Section3;
