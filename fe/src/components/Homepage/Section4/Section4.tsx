import React from "react";
import { Armchair, Baby, Book, Brush, Building, Carrot, Coffee, Cpu, Home, Hotel, Phone, Pill, Shirt, ShoppingCart, Sparkles } from "lucide-react"

import { FiPhoneCall } from "react-icons/fi";

// const industries = [
//   { title: "Thiết kế Website Bán Hàng", img: "/img/industry/web-ban-hang.jpg" },
//   { title: "Thiết Kế Website Doanh Nghiệp", img: "/img/industry/web-doanh-nghiep.jpg" },
//   { title: "Thiết Kế Website Bất Động Sản", img: "/img/industry/web-bat-dong-san.jpg" },
//   { title: "Thiết Kế Website Nội Thất", img: "/img/industry/web-noi-that.jpg" },
//   { title: "Thiết Kế Website Du Lịch", img: "/img/industry/web-du-lich.jpg" },
//   { title: "Thiết Kế Website Theo Yêu Cầu", img: "/img/industry/web-theo-yeu-cau.jpg" },
//   { title: "Thiết Kế Website Xây Dựng", img: "/img/industry/web-xay-dung.jpg" },
//   { title: "Thiết Kế Website Nhà Hàng", img: "/img/industry/web-nha-hang.jpg" },
//   { title: "Thiết Kế Website Tin Tức", img: "/img/industry/web-tin-tuc.jpg" },
//   { title: "Thiết Kế Website Bệnh Viện", img: "/img/industry/web-benh-vien.jpg" },
//   { title: "Thiết Kế Website Nha Khoa", img: "/img/industry/web-nha-khoa.jpg" },
//   { title: "Thiết Kế Website Thực Phẩm", img: "/img/industry/web-thuc-pham.jpg" },
//   { title: "Thiết Kế Website Spa - thẩm mỹ", img: "/img/industry/web-spa.jpg" },
//   { title: "Thiết Kế Website Thời Trang", img: "/img/industry/web-thoi-trang.jpg" },
//   { title: "Thiết Kế Website Sách & Văn Phòng Phẩm", img: "/img/industry/web-sach.jpg" },
// ];

export default function Section4() {
    const services = [
        { icon: <Shirt size={28} />, label: "Thời Trang" },
        { icon: <Building size={28} />, label: 'Doanh Nghiệp' },
        { icon: <Home size={28} />, label: 'Bất động sản - Xây dựng' },
        { icon: <Hotel size={28} />, label: 'Khách sạn - Du lịch' },
        { icon: <Coffee size={28} />, label: "Thực phẩm - Nhà hàng" },
        { icon: <ShoppingCart size={28} />, label: "Tạp hóa & Siêu thị mini" },
        { icon: <Phone size={28} />, label: "Điện thoại & Điện máy" },
        { icon: <Sparkles size={28} />, label: "Mỹ phẩm - Làm đẹp" },
        { icon: <Baby size={28} />, label: "Mẹ & Bé" },
        { icon: <Pill size={28} />, label: "Y tế" },
        { icon: <Brush size={28} />, label: "Nội thất - Trang trí" },
        { icon: <Cpu size={28} />, label: "Công nghệ - Kỹ thuật số" },
        { icon: <Armchair size={28} />, label: "Nội thất - Trang trí" },
        { icon: <Carrot size={28} />, label: "Thực phẩm - Nhà hàng" },
        { icon: <Book size={28} />, label: "Sách - Văn phòng phẩm" },
    ]
    return (
    // <section className="py-12 px-4 max-w-7xl mx-auto text-center">
    //   <h2 className="text-3xl font-bold text-[#67AE6E] uppercase mb-8">
    //     Giao Diện Đẹp, Chuẩn SEO, Đa Dạng Lĩnh Vực
    //   </h2>
    //   <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
    //     {industries.map((item, index) => (
    //       <div
    //         key={index}
    //         className="relative overflow-hidden rounded-lg shadow-lg group"
    //       >
    //         <img
    //           src={item.img}
    //           alt={item.title}
    //           className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-300"
    //         />
    //         <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm font-semibold p-2">
    //           {item.title}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    //
    //   <div className="mt-8">
    //           <a
    //             href="/Contact" // hoặc tel: hoặc open modal
    //             className="inline-flex items-center gap-2 bg-[#67AE6E] hover:bg-[#90C67C] text-white font-medium px-6 py-3 rounded-full shadow transition"
    //           >
    //             <FiPhoneCall className="text-lg" />
    //             Liên hệ ngay
    //           </a>
    //         </div>
    // </section>
      <section className="bg-[#E8F5E9] py-12 text-center mb-4">

          <h2 className="text-gray-500 uppercase tracking-widest mb-2">DỊCH VỤ THIẾT KẾ WEBSITE</h2>
          <h1 className="text-3xl font-bold text-green-600 mb-10">CHUYÊN NGHIỆP THEO LĨNH VỰC</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 max-w-6xl mx-auto">
              {services.map((item, index) => (
                  <div
                      key={index}
                      className="group flex flex-col items-center p-4 bg-transparent rounded-lg
                                hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
                                cursor-pointer"
                  >
                      <div className="bg-green-100 p-4 rounded-full text-green-600
                                    group-hover:bg-green-600 group-hover:text-white transition-all duration-300 ease-in-out"> {/* Optional: Make icon background/text change on hover too */}
                          {item.icon}
                      </div>
                      <p className="text-base mt-3 font-medium text-gray-700 text-center
                                    group-hover:text-[#F76C06] transition-colors duration-300 ease-in-out">
                          {item.label}
                      </p>
                  </div>
              ))}
          </div>
          {/* <div className="mt-12">
                <div className="inline-flex items-center bg-white shadow-md rounded-full px-4 py-2 text-sm text-gray-600">
                    15 ngày dùng thử miễn phí
                    <Button className="ml-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 text-sm">
                        Đăng ký ngay
                    </Button>
                </div>
            </div> */}
      </section>
  );
}

