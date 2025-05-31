import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const industries = [
  { title: "Thiết kế Website Bán Hàng", img: "/img/industry/web-ban-hang.jpg" },
  { title: "Thiết Kế Website Doanh Nghiệp", img: "/img/industry/web-doanh-nghiep.jpg" },
  { title: "Thiết Kế Website Bất Động Sản", img: "/img/industry/web-bat-dong-san.jpg" },
  { title: "Thiết Kế Website Nội Thất", img: "/img/industry/web-noi-that.jpg" },
  { title: "Thiết Kế Website Du Lịch", img: "/img/industry/web-du-lich.jpg" },
  { title: "Thiết Kế Website Theo Yêu Cầu", img: "/img/industry/web-theo-yeu-cau.jpg" },
  { title: "Thiết Kế Website Xây Dựng", img: "/img/industry/web-xay-dung.jpg" },
  { title: "Thiết Kế Website Nhà Hàng", img: "/img/industry/web-nha-hang.jpg" },
  { title: "Thiết Kế Website Tin Tức", img: "/img/industry/web-tin-tuc.jpg" },
  { title: "Thiết Kế Website Bệnh Viện", img: "/img/industry/web-benh-vien.jpg" },
  { title: "Thiết Kế Website Nha Khoa", img: "/img/industry/web-nha-khoa.jpg" },
  { title: "Thiết Kế Website Thực Phẩm", img: "/img/industry/web-thuc-pham.jpg" },
  { title: "Thiết Kế Website Spa - thẩm mỹ", img: "/img/industry/web-spa.jpg" },
  { title: "Thiết Kế Website Thời Trang", img: "/img/industry/web-thoi-trang.jpg" },
  { title: "Thiết Kế Website Sách & Văn Phòng Phẩm", img: "/img/industry/web-sach.jpg" },
];

export default function Section4() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-[#67AE6E] uppercase mb-8">
        Giao Diện Đẹp, Chuẩn SEO, Đa Dạng Lĩnh Vực
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {industries.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-40 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-sm font-semibold p-2">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
              <a
                href="/Contact" // hoặc tel: hoặc open modal
                className="inline-flex items-center gap-2 bg-[#67AE6E] hover:bg-[#90C67C] text-white font-medium px-6 py-3 rounded-full shadow transition"
              >
                <FiPhoneCall className="text-lg" />
                Liên hệ ngay
              </a>
            </div>
    </section>
  );
}

