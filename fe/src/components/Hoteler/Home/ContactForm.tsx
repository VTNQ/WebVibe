const ContactForm = () => {
  return (
    <div className="relative mt-24 mb-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-lg bg-white">
      {/* Left Side: Background Image with overlay */}
      <div
        className="relative h-[500px] md:h-auto bg-cover bg-center"
        style={{ backgroundImage: "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/cta1.jpg')" }} // 👉 đổi ảnh theo ý bạn
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center p-8">
          <div className="text-white text-center max-w-xs">
            <div className="text-5xl mb-4">📞</div>
            <p className="text-sm mb-2">Call us for any inquiry</p>
            <p className="text-2xl font-bold">(000) 222 22 333</p>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="p-10 flex flex-col justify-center">
        <h4 className="text-sm uppercase text-[#a57d53] font-medium mb-2">Contact us</h4>
        <h2 className="text-4xl font-serif text-gray-800 mb-8">Get in Touch</h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#f6f6f6] px-4 py-3 w-full outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#f6f6f6] px-4 py-3 w-full outline-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Check In"
              className="bg-[#f6f6f6] px-4 py-3 w-full outline-none"
            />
            <input
              type="date"
              placeholder="Check Out"
              className="bg-[#f6f6f6] px-4 py-3 w-full outline-none"
            />
          </div>
          <textarea
            rows={4}
            placeholder="Message"
            className="bg-[#f6f6f6] px-4 py-3 w-full outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#a57d53] text-white font-semibold uppercase py-3 w-full hover:bg-[#8c6740] transition"
          >
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
