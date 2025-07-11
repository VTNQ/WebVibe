import React, { useState } from "react";

const ProductCard = () => {
  const allProducts = [
    {
      id: 1,
      name: "Website nội thất",
      price: "4,000,000 VND",
      category: "Nội thất",
      img: "/img/homepage/website_bg_makingYourDream.png",
      features: ["Xem thực tế", "Dùng thử"],
      link: 'https://wisdomconstruction.wisdombrain.org/'
    },
    {
      id: 2,
      name: "Website Bảo dưỡng xe",
      price: "3,000,000 VND",
      category: "Xe cộ",
      img: "/img/motor.png",
      features: ["Xem thực tế", "Dùng thử"],
      link:'https://antmotor.vn'
    },
    {
      id: 3,
      name: "Website linh kiện robot",
      price: "3,500,000 VND",
      category: "Robot",
      img: "/img/robotic.png",
      features: ["Xem thực tế", "Dùng thử"],
      link:'https://roboticsecommerce.wisdombrain.org/'
    },
    {
      id: 4,
      name: "Website Landing page",
      price: "3,500,000 VND",
      category: "Robot",
      img: "/img/wisdom_robotic.png",
      features: ["Xem thực tế", "Dùng thử"],
      link:'https://wisdomrobotics.org/'
    },
    {
      id: 5,
      name: "Website Dịch vụ xe",
      price: "3,500,000 VND",
      category: "Xe cộ",
      img: "/img/car_page.png",
      features: ["Xem thực tế", "Dùng thử"],
      link:'https://cloudwisdom.wisdombrain.org/'
    },
    {
      id: 6,
      name: "Website bán hàng thời trang",
      price: "3,500,000 VND",
      category: "Xe cộ",
      img: "/img/product/screencapture-webvibe-wisdombrain-org-Morderno-2025-06-19-00_36_49.png",
      features: ["Xem thực tế", "Dùng thử"],
      link:'https://webvibe.wisdombrain.org/Morderno'
    },
    {
      id: 7,
      name: "Website đặt phòng khách sạn",
      price: "3,500,000 VND",
      category: "Xe cộ",
      img: "/img/product/screencapture-localhost-5173-Hoteler-2025-06-19-00_02_31.png",
      features: ["Xem thực tế", "Dùng thử"],
      link:'https://webvibe.wisdombrain.org/Hoteler'
    }
  ];

  const categories = ["Tất cả", "Xe cộ", "Nội thất", "Robot"];

  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "Tất cả" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 font-roboto">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sản phẩm tiêu biểu</h1>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-lg mb-8 max-w-4xl mx-auto shadow">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full sm:w-1/3 px-4 py-2 rounded-md bg-green-100 border border-green-300 focus:outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              Chọn lĩnh vực: {cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Từ khóa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:flex-1 px-4 py-2 rounded-md bg-green-100 border border-green-300 focus:outline-none"
        />
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {currentItems.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <div className="h-60 sm:h-72 lg:h-80 bg-gray-200 overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover object-top hover:object-bottom hover:scale-105 transition-all duration-[3000ms]"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-greenProduct hover:text-orangeProduct transition-all text-lg sm:text-xl font-semibold mb-3">
                  {product.name}
                </h2>
              </div>
              <div className="mt-auto">
                <div className="flex gap-2">
                  <a
                    target="_blank"
                    href={product.link}
                    className="relative overflow-hidden flex-1 bg-green-500 text-white py-2 rounded-lg transition-colors hover:bg-green-600 text-center"
                  >
                    {product.features[0]}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50"
          >
            Trước
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-md text-sm ${currentPage === i + 1 ? "bg-blue-600 text-white" : "border text-gray-700"}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50"
          >
            Tiếp
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
