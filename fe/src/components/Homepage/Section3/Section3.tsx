import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section3 = () => {
  const stats = [
    { label: "Web bán hàng", percent: 41 },
    { label: "Web giới thiệu doanh nghiệp", percent: 27 },
    { label: "Web nội thất", percent: 20 },
    { label: "Web bất động sản", percent: 12 },
  ];

  const projects = [
    {
      image: "/img/thoitrang08.webp",
      video:
        "/video/KIN PIZZA _ GIAO TẬN NƠI & MUA MANG VỀ - KIN PIZZA _ THƯỞNG THỨC NHỮNG CHIẾC BÁNH PIZZA THƠM NGON NHẤT TẠI TP HỒ CHÍ MINH and 4 more pages - Personal - Microsoft​ Edge 2025-05-23 19-27-44.mp4",
      title: "Website Streetwear",
      category: "Bán hàng",
      link: "http://kinpizza.com/",
    },
    {
      image: "/img/thoitrang07.webp",
      video:
        "/video/Wisdom Engineering and Business Solutions and 6 more pages - Personal - Microsoft​ Edge 2025-05-23 19-40-12.mp4",
      title: "Website Mỹ Phẩm",
      category: "Làm đẹp",
      link: "https://wisdomrobotics.org/",
    },
    {
      image: "/img/MarkeTing.png",
      video:
        "/video/Homepage - WebMarketing and 8 more pages - Personal - Microsoft​ Edge 2025-05-23 19-44-42.mp4",
      title: "Website MarkeTing",
      category: "MARKETING",
      link: "https://marketing.wisdombrain.org/home",
    },
    {
      image: "/img/QuảngBa.png",
      video:
        "/video/Construction and 14 more pages - Personal - Microsoft​ Edge 2025-05-23 19-49-08.mp4",
      title: "Website Quảng Bá",
      category: "Quảng Bá",
      link: "https://wisdomconstruction.wisdombrain.org/",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Số item hiển thị trên 1 slide
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4 md:px-6 grid grid-cols-1 md:grid-cols-10 gap-8 ">
      {/* Left Stats Section - chiếm 3 cột */}
      <div className="relative rounded-2xl p-6 md:p-8 text-white overflow-hidden max-w-[500px] md:col-span-3">
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
                <div className="flex items-center justify-between text-sm mb-1">
                  <div className="flex items-center gap-2 w-48">
                    {/* Thanh phần trăm nhỏ bên trái */}
                    <div
                      className="h-2 rounded-full bg-yellow-400"
                      style={{ width: `${item.percent}%` }}
                    />
                    <span>{item.label}</span>
                  </div>
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

      {/* Right Project Slider Section - chiếm 7 cột */}
      <div className="relative z-10 p-6 md:p-8 rounded-2xl bg-gray-50 shadow-inner max-w-full md:col-span-7">
        <h3 className="text-lg font-bold mb-4">Dự án tiêu biểu</h3>
        <Slider {...sliderSettings}>
          {projects.map((project, i) => (
            <div key={i} className="px-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-[400px] rounded-2xl overflow-hidden shadow-lg group bg-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-full object-cover object-top
                    group-hover:object-bottom
                    transition-[object-position] duration-[1500ms] ease-in-out
                  "
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h4 className="font-semibold text-lg">{project.title}</h4>
                  <p className="text-sm uppercase tracking-wider">{project.category}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3;
