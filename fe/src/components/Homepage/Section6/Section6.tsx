import React from 'react';

const TrustSection: React.FC = () => {
    return (
        <section className="trust-section px-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center md:text-4xl mb-6 text-[#67AE6E]">
                20+ Doanh nghiệp tin tưởng WebVibe
            </h1>
            <p className="text-lg text-center mb-8">

            </p>
            <div className="trust-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/world-class-support.webp" alt="World-Class Support" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Chi phí tối ưu</h3>
                    <p className="text-center text-[#67AE6E]">Xây dựng mối quan hệ lâu dài với khách hàng, đảm bảo bạn nhận được dịch vụ, chất lượng với chi phí hợp lý</p>
                </div>
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/documentation.webp" alt="Documentation & Tutorials" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Webste chuẩn SEO</h3>
                    <p className="text-center">Tối ưu hóa website SEO để dễ dàng hiểu và tìm kiếm trong các công cụ như Google, Bing, ....</p>
                </div>
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/built-in-house-200x94.webp" alt="100% Built In-House" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Đa dạng lĩnh vực</h3>
                    <p className="text-center">Mang đến trải nghiệm xây dựng website ổn định trên mọi nền tảng thiết bị và đa dạng cho mọi ngành nghề.</p>
                </div>
                <div className="trust-item bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                    <img src="/img/free-updates-200x151.webp" alt="Free Lifetime Updates" className="w-24 h-24 object-cover mb-4" />
                    <h3 className="text-lg font-semibold">Dịch vụ chăm sóc Website</h3>
                    <p className="text-center">Là bộ mặt của doanh nghiệp, website cần được chăm sóc cũng như cập nhật mỗi ngày để mang lại sự mới mẻ cho khách hàng.</p>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
