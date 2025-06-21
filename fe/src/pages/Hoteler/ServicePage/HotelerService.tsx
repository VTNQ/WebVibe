export default function HotelerService(){
    const offers = [
        { title: "Family Discount", imgSrc: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service1-550x550.jpg" ,srcPage:"/Hoteler/Broadband-Internet"},
        { title: "Couples offer", imgSrc: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service2-550x550.jpg" ,srcPage:""},
        { title: "Buy One Get One", imgSrc: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service3-550x550.jpg" ,srcPage:""},
        { title: "Meeting Room", imgSrc: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service3-550x550.jpg" ,srcPage:""},
        { title: "Parking Facilities", imgSrc: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service3-550x550.jpg" ,srcPage:""},
        { title: "Restaurant", imgSrc: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/service3-550x550.jpg" ,srcPage:""}
    ];

    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-semibold">Services</h1>
                    <div className="mt-4 text-sm flex justify-center items-center gap-2">
                        <span className="text-white/70">Home</span>
                        <span className="text-white font-semibold">› Services</span>
                    </div>
                </div>
            </div>
            <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {offers.map(({ title, imgSrc ,srcPage}, index) => (

                            <a href={srcPage}>
                                <div
                                    key={index}
                                    className="relative group overflow-hidden rounded-md shadow-lg cursor-pointer transition-all duration-300"
                                >
                                    <img
                                        src={imgSrc}
                                        alt={title}
                                        className="object-cover  transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                        width="550"
                                        height="550"
                                    />
                                    <div className="absolute bottom-10 w-2/3 bg-white bg-opacity-60 backdrop-blur-sm px-4 py-3 hover:bg-[#AA8453] h-1/6">
                                        <h3 className="text-lg font-serif text-gray-800">
                                            {title}
                                        </h3>
                                    </div>
                                </div>
                            </a>


                    ))}
                </div>
            </section>
        </div>
    )
}