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
      image: "/img/product/thoitrang08.webp",
      video: "/video/kinpizza.mp4",
      title: "Website Streetwear",
      category: "Bán hàng",
      link: "http://kinpizza.com/",
    },
    {
      image: "/img/product/thoitrang07.webp",
      video: "/video/wisdom.mp4",
      title: "Website Mỹ Phẩm",
      category: "Làm đẹp",
      link: "https://wisdomrobotics.org/",
    },
    {
      image: "/img/homepage/website_bg_makingYourDream.png",
      video: "/video/marketing.mp4",
      title: "Website Marketing",
      category: "Marketing",
      link: "https://marketing.wisdombrain.org/home",
    },
    {
      image: "/img/homepage/website_bg_pizza.png",
      video: "/video/construction.mp4",
      title: "Website Quảng Bá",
      category: "Quảng Bá",
      link: "https://wisdomconstruction.wisdombrain.org/",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Phần thống kê */}
      <div className="relative lg:col-span-3 p-6 lg:p-8 text-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a6c] to-[#b21f1f] opacity-95" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(
                to bottom,
                #b6e3c9,   /* Light green at the top */
                #6cb28e,   /* Slightly darker green */
                #3a7f6a,   /* Darker green */
                #4a6e5d,   /* Milder dark green */
                #2a4136    /* Subtle dark green at the bottom */
              ),
              radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.08) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100% 100%, 20px 20px",
            opacity: 1,
          }}
          
          

        />
        <div className="relative z-10 text-white">
        <h2 className="text-lg font-semibold uppercase drop-shadow">
  MẪU THIẾT KẾ WEB <br />
  <span className="text-2xl font-extrabold text-white">
    ĐƯỢC QUAN TÂM NHẤT
  </span> <br />
  TRONG THÁNG
</h2>

          <div className="mt-6 space-y-5">
            {stats.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="truncate max-w-[12rem] text-green-100 font-medium">
                    {item.label}
                  </span>
                  <span className="text-green-100">{item.percent}%</span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-lime-300 to-emerald-500"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-emerald-500 to-lime-400 text-green-950 font-semibold py-3 rounded-md hover:brightness-110 transition">
            Đăng ký ngay
          </button>
        </div>

      </div>

      {/* Phần dự án */}
      <div className="lg:col-span-7 px-6 lg:px-8 rounded-2xl relative z-10">
        <h3 className="text-lg font-bold mb-4">Dự án tiêu biểu</h3>
        <p className="text-sm text-gray-600 mb-4">Click để xem bản demo</p>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover object-top group-hover:object-bottom transition-[object-position] duration-[10000ms] ease-in-out"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                    <h4 className="font-semibold text-lg">{project.title}</h4>
                    <p className="text-sm uppercase">{project.category}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#67AE6E] text-white font-semibold px-4 py-2 rounded-lg shadow-md"
                  >
                    Xem Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3;
