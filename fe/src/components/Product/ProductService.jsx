import { Armchair, Baby, Book, Brush, Building, Carrot, Coffee, Cpu, Home, Hotel, Phone, Pill, Shirt, ShoppingCart, Sparkles } from "lucide-react"
import { Button } from "../ui/button";
const ProductService = () => {
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
        <section className="bg-[#F4F8FF] py-12 text-center mb-4">
            <h2 className="text-gray-500 uppercase tracking-widest mb-2">DỊCH VỤ THIẾT KẾ WEBSITE</h2>
            <h1 className="text-3xl font-bold text-blue-600 mb-10">CHUYÊN NGHIỆP THEO LĨNH VỰC</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 max-w-6xl mx-auto">
                {services.map((item, index) => (
                    <div
                    key={index}
                    className="group flex flex-col items-center p-4 bg-transparent rounded-lg 
                                hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out
                                cursor-pointer"
                >
                    <div className="bg-blue-100 p-4 rounded-full text-blue-600
                                    group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 ease-in-out"> {/* Optional: Make icon background/text change on hover too */}
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
    )
}
export default ProductService;