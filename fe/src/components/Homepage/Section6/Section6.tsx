import React from 'react';

const TrustSection: React.FC = () => {
    return (
        <section className="trust-section px-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center md:text-4xl mb-6 text-[#67AE6E]">
                1,019,391 Website Owners Trust Avada
            </h1>
            <p className="text-lg text-center mb-8">
                The #1 selling Website Builder on Themeforest for 12+ years.
            </p>
            <div className="trust-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/world-class-support.webp" alt="World-Class Support" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">World-Class Support</h3>
                    <p className="text-center text-[#67AE6E]">We build long-term professional relationships with our customers that you can rely on & trust.</p>
                </div>
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/documentation.webp" alt="Documentation & Tutorials" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Documentation & Tutorials</h3>
                    <p className="text-center">Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.</p>
                </div>
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/built-in-house-200x94.webp" alt="100% Built In-House" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">100% Built In-House</h3>
                    <p className="text-center">Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.</p>
                </div>
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/free-updates-200x151.webp" alt="Free Lifetime Updates" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Free Lifetime Updates</h3>
                    <p className="text-center">Your website will receive free & regular updates, compatible with industry standards & trends, for life.</p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
