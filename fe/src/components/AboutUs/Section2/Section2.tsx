import React from 'react';

const Section2 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-yellow-100 px-6 py-20 gap-12">
      {/* Left Side - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="/img/AboutUs/team-hands.jpg"
          alt="Team collaboration"
          className="w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Right Side - Text */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-sm font-semibold text-gray-700 tracking-widest uppercase mb-4">
          Passion. Dedication. Community.
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
          We Are Team Avada
        </h2>
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed mb-8">
          We are a creative and dedicated team who love WordPress, our customers, and the online
          community. Since 2012, we’ve been crafting the ultimate website builder — and{' '}
          <a href="#" className="text-blue-700 underline font-medium hover:text-blue-900 transition">
            Avada
          </a>{' '}
          was born.
        </p>

        <a
          href="#"
          className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition duration-200 shadow-lg"
        >
          Buy Avada $69 →
        </a>
      </div>
    </section>
  );
};

export default Section2;
