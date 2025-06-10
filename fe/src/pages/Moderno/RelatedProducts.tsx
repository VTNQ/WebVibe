import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdAddShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

const relatedProducts = [
  {
    id: 1,
    brand: "PRADA",
    name: "Crossback Halter Dress",
    description:
      "A shapely halter dress designed with slinky crossback straps and a leg-baring slit...",
    price: "$2,400.00 – $2,650.00",
    img: "/img/Moderno/ProductsPage/Products/product1.jpg",
    imgHover: "/img/Moderno/ProductsPage/Products/product1-1.png",
    tags: [
      { label: "BEST SELLER", type: "highlight" },
      { label: "-4%", type: "discount" },
    ],
  },
  {
    id: 2,
    brand: "BURBERRY",
    name: "Sweetheart Strapless Lamé Silk Blend Gown",
    description:
      "Gathers and plissé pleating multiply the shimmer radiating from this strapless gown...",
    price: "$2,500.00",
    img: "/img/Moderno/ProductsPage/Products/product2.jpg",
    imgHover: "/img/Moderno/ProductsPage/Products/product2-2.png",
    tags: [{ label: "-13%", type: "discount" }],
  },
  // Thêm 2–3 sản phẩm nữa nếu cần
];

function RelatedProducts() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(null);

  return (
    <div className="related-products">
      <h2 className="related-title">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/fashion/product/${product.id}`, { state: { product } })}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            className="border hover:border-black transition-all relative p-2 cursor-pointer bg-white"
          >
            {/* Tag */}
            <div className="absolute top-2 right-2 flex gap-1 z-10">
              {product.tags?.map((tag, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 text-[10px] font-semibold border uppercase
                    ${
                      tag.type === "highlight"
                        ? "bg-white text-black border-black"
                        : "text-red-500 border-red-500"
                    }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {/* Hình ảnh */}
            <div className="bg-white mb-2">
              <img
                src={hovered === product.id ? product.imgHover : product.img}
                className="w-full h-auto transition duration-300"
                alt={product.name}
              />
            </div>

            {/* Nội dung */}
            <h1 className="text-[11px] text-[#070707]">{product.brand}</h1>
            <h2 className="text-[14px] font-medium mt-1">{product.name}</h2>
            <p className="text-[12px] text-[#454545] mt-1">{product.description}</p>
            <h3 className="text-[13px] font-semibold mt-1">{product.price}</h3>

            {/* Nút ẩn khi hover */}
            {hovered === product.id && (
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 transition">
                <button className="flex-1 bg-black text-white py-2 text-xs">Quick View</button>
                <button className="flex-1 bg-gray-200 text-black py-2 text-xs">Add to Cart</button>
              </div>
            )}

            <div className="absolute top-2 left-2">{hovered === product.id && <CiHeart />}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
