const offers = [
    {
        title: 'Family Discount',
        image: 'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service1-550x550.jpg'
    },
    {
        title: 'Couples offer',
        image: 'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service2-550x550.jpg'
    },
    {
        title: 'Buy One Get One',
        image: 'https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service3-550x550.jpg'
    }
]
const SpecialOffers = () => {
    return (
        <section className="py-24 px-4 text-center mt-4">
            <div className="max-w-4xl mx-auto mb-12">
                <p className="uppercase tracking-widest text-gray-500 text-sm flex items-center justify-center gap-2">
                    <span className="text-xl text-[#C9A96E]">~</span> What We Offer
                </p>
                <h2 className="text-4xl font-semibold text-gray-800 mt-2">Get Our Special Offer</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md group"
                    >
                        <img
                            src={offer.image}
                            alt={offer.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />


                       

                        <div
                            className="z-30 text-lg  text-center relative group-hover:text-white transition-colors duration-300"
                            style={{
                                padding: "20px 30px",
                                background: "rgba(247, 243, 238, 0.8)",
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                minWidth: "221px",
                                transform: "translateY(-50%)",
                                overflow: "hidden",
                            }}
                        >
                            {/* Hover background inside (absolutely positioned) */}
                            <div className="absolute left-0 top-0 w-full h-0 bg-[#C9A96E] z-0 group-hover:h-full transition-all duration-300 ease-in-out opacity-80"></div>

                            {/* Text content above hover background */}
                            <span className="relative z-10 text-inherit">{offer.title}</span>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default SpecialOffers;