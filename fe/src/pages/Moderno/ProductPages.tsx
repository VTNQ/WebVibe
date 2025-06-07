import {useState} from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";

const ProductPage=()=>{
    const [isHovered, setIsHovered] = useState(false);

    const products = [
        {
            id: 1,
            brand: "PRADA",
            name: "Crossback Halter Dress",
            description:
                "A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event",
            price: "$2,400.00 – $2,650.00",
            img: "/img/Moderno/ProductsPage/Products/product1.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product1-1.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },

        // Thêm bao nhiêu sản phẩm tùy ý...
        {
            id: 2,
            brand: "PRADA",
            name: "Crossback Halter Dress",
            description:
                "A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event",
            price: "$2,400.00 – $2,650.00",
            img: "/img/Moderno/ProductsPage/Products/product1.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product1-1.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },
        {
            id: 3,
            brand: "PRADA",
            name: "Crossback Halter Dress",
            description:
                "A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event",
            price: "$2,400.00 – $2,650.00",
            img: "/img/Moderno/ProductsPage/Products/product1.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product1-1.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },
        {
            id: 4,
            brand: "PRADA",
            name: "Crossback Halter Dress",
            description:
                "A shapely halter dress designed with slinky crossback straps and a leg-baring slit is an elegant option for your upcoming event",
            price: "$2,400.00 – $2,650.00",
            img: "/img/Moderno/ProductsPage/Products/product1.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product1-1.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },
    ];


    return(
        <>
            <div className="flex justify-between items-center px-5 py-1 border-b border-gray-200 text-[0.58rem] text-[#838383]">
                <div className="font-medium ">
                    SHOWING 1–24 OF 64 RESULTS
                </div>

                <div className="text-[0.58rem] text-[#838383] font-medium hidden md:block">
                    HOME &gt; SHOP
                </div>

                <div className=" flex items-center gap-3">
                    <select className="text-[0.7rem] border border-gray-300 rounded px-2 py-1 focus:outline-none">
                        <option>Default Sorting</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>


                </div>
            </div>

            <section className="flex justify-between items-center mt-5">
                <h1>SHOP</h1>
                <div className="flex ">
                    <div className="">
                        <div className="border border-gray-300 focus:outline-none">
                            <img className="" src="/public/img/Moderno/ProductsPage/woman.webp"></img>
                        </div>
                        <h2>WOMEN</h2>
                    </div>
                    <div className="">
                        <div className="border border-gray-300 focus:outline-none">
                            <img className="" src="/public/img/Moderno/ProductsPage/woman.webp"></img>
                        </div>
                        <h2>WOMEN</h2>
                    </div>
                </div>
            </section>

            <section className="mt-5 bg-red-50">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>
                <div className="navigator">

                </div>

            </section>
        </>
    )
}


function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative card flex flex-col bg-white border border-gray-200 group hover:border-black"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-frame bg-white group-hover:bg-gray-200 transition-colors duration-300">
                <img
                    src={isHovered ? product.imgHover : product.img}
                    alt={product.name}
                    className="w-full h-auto transition duration-300"
                />
            </div>
            {/* Tags hiển thị góc trên phải */}
            <div className="absolute top-2 right-2 flex  items-end gap-1 z-10">
                {product.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className={`px-2 py-0.5 text-[10px] font-semibold border uppercase
                     ${
                            tag.type === "highlight"
                                ? "bg-white text-black border-black"
                                : tag.type === "discount"
                                    ? "text-red-500 border-red-500"
                                    : "text-gray-500 border-gray-300"
                        }`}
                    >
                      {tag.label}
                    </span>
                ))}
            </div>
            {/* Buttons */}
            <div
                className={`absolute bottom-[21%] left-0 w-full flex transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                } bg-white`}
            >
                <button className="w-1/2 py-2 text-sm border-t border-r border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-100">
                    <MdRemoveRedEye /> Quick View
                </button>
                <button className="w-1/2 py-2 text-sm border-t border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-100">
                    <VscListSelection />
                    Select Options
                </button>
            </div>

            {/* Heart icon */}
            <div
                className={`absolute top-[1.5%] left-[2%] transition-all duration-300 ${
                    isHovered ? "opacity-100" : "opacity-0"
                }`}
            >
                <CiHeart />
            </div>

            {/* Info */}
            <div className="py-2 px-4">
                <h1 className="text-[11px] text-[#070707] mt-2">{product.brand}</h1>
                <h2 className="text-[14px] font-normal text-[#070707] mt-2">
                    {product.name}
                </h2>
                <h4 className="text-[12px] text-[#454545] mt-2">
                    {product.description}
                </h4>
                <h3 className="text-[12px] mt-2 mb-2">{product.price}</h3>
            </div>
        </div>
    );
}

export default ProductPage;