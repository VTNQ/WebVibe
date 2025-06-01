
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";
import React from "react";

const features = [
  {
    title: "Chuyển đổi số doanh nghiệp",
    description:
      "Giúp doanh nghiệp bạn tiếp cận kỷ nguyên số nhanh chóng và hiệu quả với các giải pháp website hiện đại, tăng trưởng vượt trội.",
    img: "/img/illustrate/illu1.png",
  },
  {
    title: "Gia công website theo mẫu có sẵn",
    description:
      "Sử dụng các mẫu website chuyên nghiệp, dễ dàng tùy chỉnh để phù hợp với nhu cầu riêng của bạn mà không mất nhiều thời gian thiết kế.",
    img: "/img/illustrate/illu2_design.png",
  },
  {
    title: "Nghiên cứu nghiệp vụ phù hợp",
    description:
      "Phân tích và thiết kế các tính năng phù hợp với lĩnh vực hoạt động của bạn nhằm tối ưu hiệu suất và trải nghiệm khách hàng.",
    img: "/img/illustrate/illu3_business.png",
  },
  {
    title: "Đa nền tảng",
    description:
      "Website của bạn sẽ hiển thị hoàn hảo trên mọi thiết bị từ máy tính, laptop đến điện thoại di động và tablet, đảm bảo trải nghiệm người dùng liền mạch.",
    img: "/img/illustrate/illu4_plat.png",
  },
  {
    title: "Tích hợp công cụ thứ 3",
    description:
      "Kết nối và sử dụng các công cụ bên ngoài như thanh toán Momo, công cụ marketing, ... giúp vận hành hiệu quả hơn.",
    img: "/img/illustrate/illu5.png",
  },
  {
    title: "Tư vấn hỗ trợ 24/7",
    description:
      "Đội ngũ hỗ trợ luôn sẵn sàng tư vấn và giải đáp mọi thắc mắc của bạn bất kỳ lúc nào, đảm bảo hoạt động website luôn ổn định.",
    img: "/img/illustrate/illu6.png",
  },
];

export default function Section5() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-2 text-[#67AE6E]">Thiết kế đa dạng thể loại website</h2>
      <p className="text-gray-600 mb-10">
        Trải nghiệm tuyệt vời và đa nền tảng cho nhu cầu doanh nghiệp của bạn.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, index) => (
          <div key={index} className="space-y-4">
            <img
  src={f.img}
  alt={f.title}
  className="mx-auto rounded object-cover h-48 w-auto "
/>
            <h3 className="text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600 text-sm">{f.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <button className="bg-[#67AE6E] text-white px-6 py-2 rounded-full inline-block items-center hover:bg-[#90C67C] transition">

          <Link to="/product" className="">Khám phá thêm   </Link>

        </button>
      </div>
    </section>
  );
}
