const offers = [
    {
      title: "Family Discount",
      image:
        "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service1-550x550.jpg",
    },
    {
      title: "Couples Offer",
      image:
        "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service2-550x550.jpg",
    },
    {
      title: "Buy One Get One",
      image:
        "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service3-550x550.jpg",
    },
  ];
  
  const SpecialOffers = () => {
    return (
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="uppercase tracking-widest text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="text-xl text-[#C9A96E]">~</span> What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-2">
            Get Our Special Offer
          </h2>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group transition-transform duration-300"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-[280px] sm:h-[300px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
  
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 w-full">
                <div className="relative z-10 px-6 py-4 bg-white/80 backdrop-blur-sm group-hover:bg-[#C9A96E] group-hover:text-white transition-all duration-300">
                  <span className="font-medium text-lg">{offer.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default SpecialOffers;
  