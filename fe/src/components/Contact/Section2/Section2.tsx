const Section2 = () => {
    return (
        <section className="px-4">
            <div className="max-w-6xl mx-auto py-10">
                <div style={{
                    backgroundImage: `
              linear-gradient(
                to bottom,
                #67AE6E,   /* Light green at the top */
                #6cb28e,   /* Slightly darker green */
                #3a7f6a,   /* Darker green */
                #4a6e5d,   /* Milder dark green */
                #2a4136    /* Subtle dark green at the bottom */
              ),
              radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.08) 0.5px, transparent 0.5px)
            `,
                    backgroundSize: "100% 100%, 20px 20px",
                    opacity: 1,
                }} className="0 rounded-xl flex flex-col md:flex-row items-center justify-center px-6 py-8 md:py-10 gap-6 md:gap-0">
                    <div className="flex flex-col items-center w-full md:w-auto">
                        <h2 className="text-white font-semibold text-lg md:text-xl leading-tight text-center max-w-xl">
                            Bắt đầu số hóa phát triển doanh nghiệp
                            <br />
                            của bạn ngay hôm nay
                        </h2>
                        <form className="mt-6 flex rounded-full bg-[#6B9AE1]/50 overflow-hidden max-w-md w-full">
                            <input
                                type="text"
                                placeholder="Số điện thoại liên hệ"
                                className="flex-grow px-6 py-3 text-gray-800 placeholder-gray-700 focus:outline-none rounded-l-full h-full" // Add h-full here
                            />
                            <button
                                type="submit"
                                className="bg-[#67AE6E] min-h-fit text-white font-semibold px-8 rounded-r-full hover:bg-[#A8E1B1] transition-color" // Add h-full here
                            >
                                Gửi
                            </button>
                        </form>
                    </div>
                    <img
                        src="https://storage.googleapis.com/a1aa/image/ad813baa-a819-4330-bb4b-51ee2a4f8048.jpg"
                        alt="Illustration of woman holding phone with check icon in orange circle"
                        className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-full md:ml-16"
                        width={120}
                        height={120}
                    />
                </div>
            </div>
        </section>
    );
};

export default Section2;
