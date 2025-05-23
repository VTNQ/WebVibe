import React from "react";

const Section4 = () => {
    const stats = [
        { label: "Web bán hàng", percent: 41 },
        { label: "Web giới thiệu doanh nghiệp", percent: 27 },
        { label: "Web nội thất", percent: 20 },
        { label: "Web bất động sản", percent: 12 },
    ];

    const projects = [
        {
            image: "/img/pizza.png",
            video: "/video/KIN PIZZA _ GIAO TẬN NƠI & MUA MANG VỀ - KIN PIZZA _ THƯỞNG THỨC NHỮNG CHIẾC BÁNH PIZZA THƠM NGON NHẤT TẠI TP HỒ CHÍ MINH and 4 more pages - Personal - Microsoft​ Edge 2025-05-23 19-27-44.mp4",
            title: "Website Streetwear",
            category: "Bán hàng",
            link:'http://kinpizza.com/'
        },
        {
            image: "/img/Wisdom.png",
            video: "/video/Wisdom Engineering and Business Solutions and 6 more pages - Personal - Microsoft​ Edge 2025-05-23 19-40-12.mp4",
            title: "Website Mỹ Phẩm",
            category: "Làm đẹp",
            link:'https://wisdomrobotics.org/'
        },
        {
            image: "/img/MarkeTing.png",
            video: "/video/Homepage - WebMarketing and 8 more pages - Personal - Microsoft​ Edge 2025-05-23 19-44-42.mp4",
            title: "Website MarkeTing",
            category: "MARKETING",
            link:'https://marketing.wisdombrain.org/home'
        },
        {
            image:'/img/QuảngBa.png',
            video:"/video/Construction and 14 more pages - Personal - Microsoft​ Edge 2025-05-23 19-49-08.mp4",
            title:"Website Quảng Bá",
            category:"Quảng Bá",
            link:'https://wisdomconstruction.wisdombrain.org/'
        }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Stats Section */}
            <div className="relative rounded-2xl p-6 md:p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a6c] to-[#b21f1f] opacity-95" />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.8) 0.5px, transparent 0.5px)",
                        backgroundSize: "20px 20px",
                    }}
                />
                <div className="relative z-10">
                    <h2 className="text-lg font-semibold uppercase">
                        MẪU THIẾT KẾ WEB <br />
                        <span className="text-2xl font-extrabold">ĐƯỢC QUAN TÂM NHẤT</span> <br />
                        TRONG THÁNG
                    </h2>
                    <div className="mt-6 space-y-5">
                        {stats.map((item, i) => (
                            <div key={i}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span>{item.label}</span>
                                    <span>{item.percent}%</span>
                                </div>
                                <div className="w-full bg-white/20 rounded-full h-2">
                                    <div
                                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full"
                                        style={{ width: `${item.percent}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-6 w-full bg-white text-[#1a2a6c] font-semibold py-3 rounded-md hover:bg-gray-100 transition">
                        Đăng ký ngay
                    </button>
                </div>
            </div>

            {/* Right Project Scroll Section */}
            <div className="relative z-10 p-6 md:p-8 rounded-2xl bg-gray-50 shadow-inner">
                <h3 className="text-lg font-bold mb-4">Dự án tiêu biểu</h3>
                <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-transparent hover:scrollbar-thumb-purple-600">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="relative min-w-[320px] sm:min-w-[380px] md:min-w-[420px] lg:min-w-[480px] rounded-2xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105 bg-white"
                        >
                            {/* Image fallback */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 sm:h-72 object-cover transition-opacity duration-300 group-hover:opacity-0"
                            />

                            {/* Hover video */}
                            {project.video && (
                                <video
                                    src={project.video}
                                    muted
                                    loop
                                    playsInline
                                    className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                                    onMouseEnter={(e) => e.currentTarget.play()}
                                    onMouseLeave={(e) => e.currentTarget.pause()}
                                />
                            )}

                            {/* Category Badge */}
                            <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs sm:text-sm px-3 py-1 rounded-full z-20">
                                {project.category}
                            </span>

                            {/* Title & Button */}
                            <div className="p-4 text-center z-20 relative bg-white">
                                <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <a  href={project.link} target="_blank" className="text-xs sm:text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition">
                                    Xem chi tiết →
                                </a>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Section4;
