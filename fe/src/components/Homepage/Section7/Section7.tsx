import React from "react";

const Section7: React.FC = () => {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4"
            style={{
                backgroundImage: `url('/img/banner-form-section7.jpg')`,
            }}
        >
            <div className="rounded-2xl shadow-xl p-6 md:p-12 max-w-7xl w-full flex flex-col md:flex-row items-stretch gap-8 backdrop-blur">
                {/* Left Side - Ảnh rộng bằng form */}
                <div className="w-full md:w-2/3 flex items-center justify-center overflow-hidden rounded-2xl">
                    <img
                        src="/img/homepage/image_section_7_1.png"
                        alt="Shop visual"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 md:p-8 shadow-md flex flex-col justify-center">
                    <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-2">
                        Bạn cần tư vấn thêm về dịch vụ thiết kế Web tại Web4s?
                    </h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Vui lòng để lại thông tin, Web4s sẽ liên hệ lại bạn trong thời gian sớm nhất
                    </p>

                    <form className="space-y-6">
                        {/* Họ và tên */}
                        <div className="relative">
                            <input
                                type="text"
                                id="fullname"
                                required
                                placeholder=" "
                                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
                            />
                            <label
                                htmlFor="fullname"
                                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                            >
                                Họ và tên*
                            </label>
                        </div>

                        {/* Số điện thoại */}
                        <div className="relative">
                            <input
                                type="tel"
                                id="phone"
                                required
                                placeholder=" "
                                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm"
                            />
                            <label
                                htmlFor="phone"
                                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                            >
                                Số điện thoại*
                            </label>
                        </div>

                        {/* Nội dung */}
                        <div className="relative">
                            <textarea
                                id="message"
                                placeholder=" "
                                rows={4}
                                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all shadow-sm resize-none"
                            ></textarea>
                            <label
                                htmlFor="message"
                                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                            >
                                Nội dung
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition shadow-md"
                        >
                            Đăng ký tư vấn
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Section7;
