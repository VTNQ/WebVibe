import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import clsx from 'clsx';

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: 'Đoàn Trang',
            position: 'Kinh doanh',
            content: `Web43 tự hào là một trong những đơn vị hàng đầu trong lĩnh vực thiết kế website tại Việt Nam. Với hơn 22 năm kinh nghiệm...`,
            title: 'Đơn vị thiết kế web uy tín với nhiều giải thưởng',
        },
        {
            name: 'Nguyễn Minh',
            position: 'Marketing',
            content: `Web43 không chỉ mang đến giao diện đẹp mà còn tối ưu trải nghiệm người dùng. Tôi thực sự ấn tượng với tốc độ triển khai.`,
            title: 'Thiết kế ấn tượng, tốc độ triển khai nhanh',
        },
        {
            name: 'Lê Thảo',
            position: 'Doanh nhân',
            content: `Tôi đã hợp tác với nhiều đơn vị, nhưng Web43 là nơi mang đến dịch vụ toàn diện nhất. Từ thiết kế, SEO đến hỗ trợ kỹ thuật.`,
            title: 'Dịch vụ toàn diện và chuyên nghiệp',
        },
    ];

    const [index, setIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const total = testimonials.length;

    const handleSlideChange = (direction) => {
        if (animating) return;

        setAnimating(true);
        setTimeout(() => {
            setIndex((prev) => (prev + direction + total) % total);
            setAnimating(false);
        }, 300);
    };

    const { name, position, content, title } = testimonials[index];

    return (
        <section className="flex justify-center items-center px-4 py-16 bg-white mb-16">
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full justify-center">
                <div className="relative w-[280px] h-[280px] flex items-center justify-center">
                    <img
                        src="/img/product/group11821.png"
                        alt="main-avatar"
                        className="w-50 h-50 rounded-sm object-cover z-10"
                    />
                </div>
                <div
                className={clsx(
                    "bg-white rounded-2xl p-8 shadow-xl w-full max-w-xl relative overflow-hidden ml-10", // Added overflow-hidden
                    animating ? "opacity-0 scale-95" : "opacity-100 scale-100" // Enhanced animation with scale
                )}
                style={{
                    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out", // Smooth transition for both opacity and transform
                }}
            >
                {/* Large decorative quote mark */}
                <div className="text-8xl text-yellow-300 absolute top-0 left-0 opacity-20 -translate-x-4 -translate-y-4 font-serif select-none">““</div>

                {/* Testimonial content */}
                <h3 className="font-bold text-2xl text-green-800 mb-3 relative z-10">{title}</h3> {/* Made title bolder, larger, and darker green */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10">{content}</p> {/* Increased text size */}
                
                {/* Author and position */}
                <p className="mt-4 text-sm text-gray-600 relative z-10">
                    <strong className="font-semibold text-base text-gray-800">{name}</strong> | <span className="text-gray-500">{position}</span> {/* Bolder name */}
                </p>

                {/* Arrows for navigation */}
                <div className="absolute bottom-6 right-6 flex gap-3 z-20"> {/* Slightly increased gap and padding */}
                    <button
                        className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 hover:text-green-800 transition-colors duration-200 shadow-md"
                        onClick={() => handleSlideChange(-1)}
                        aria-label="Previous testimonial"
                    >
                        <FaArrowLeft size={16} /> {/* Increased icon size */}
                    </button>
                    <button
                        className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center hover:bg-green-200 hover:text-green-800 transition-colors duration-200 shadow-md"
                        onClick={() => handleSlideChange(1)}
                        aria-label="Next testimonial"
                    >
                        <FaArrowRight size={16} /> {/* Increased icon size */}
                    </button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default TestimonialSlider;
