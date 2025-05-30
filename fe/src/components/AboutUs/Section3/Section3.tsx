import React from 'react';

const Section3 = () => {
  return (
    <section className="bg-white py-24 px-6 text-center">
      {/* Logo Icon */}
      <div className="mb-8">
        <img
          src="/img/logo.jpg" // 🟡 Đảm bảo bạn dùng dấu "/" và ảnh nằm trong public/img/
          alt="Avada Logo"
          className="mx-auto w-16 h-16 rounded-full shadow-lg object-cover"
        />
      </div>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
        Design Anything, Build Everything
      </h2>

      {/* Paragraph */}
      <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        Avada has been the <span className="font-semibold">#1 selling theme</span> on Themeforest since its launch in 2012,
        with an ever-growing customer base of <span className="font-semibold text-black">1,019,874</span>{' '}
        <a href="#" className="underline text-blue-600 hover:text-blue-800 font-medium transition">beginners</a>,{' '}
        <a href="#" className="underline text-blue-600 hover:text-blue-800 font-medium transition">marketers</a>, and{' '}
        <a href="#" className="underline text-blue-600 hover:text-blue-800 font-medium transition">professionals</a>.
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
