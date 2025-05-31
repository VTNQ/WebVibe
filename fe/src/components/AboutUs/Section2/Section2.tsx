import React from 'react';

const Section2 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-[#67AE6E] to-[#98d7a5] px-6 py-20 gap-12">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/img/AboutUs/team-hands.jpg"
          alt="Team collaboration"
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left pr-10">
        <p className="text-sm font-semibold text-white tracking-widest uppercase mb-4">
          Passion. Dedication. Community.
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug">
          We Are Team Avada
        </h2>
        <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
          We are a creative and dedicated team who love WordPress, our customers, and the online
          community. Since 2012, we’ve been crafting the ultimate website builder — and{' '}
          <a href="#" className="text-blue-700 underline font-medium hover:text-blue-900 transition">
            Avada
          </a>{' '}
          was born.
        </p>

        <a
          href="#"
          className="inline-flex items-center bg-[#256d4d] hover:bg-[#1f5d41] text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-lg"
        >
          Buy Avada $69 →
        </a>
      </div>
    </section>
  );
};

export default Section2;
