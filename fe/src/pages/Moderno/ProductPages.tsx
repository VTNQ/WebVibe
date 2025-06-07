import {useState} from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { VscListSelection } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import Swal from 'sweetalert2';

const ProductPage=()=>{
    const [isHovered, setIsHovered] = useState(false);

    const categories = [
        {
            id: 1,
            nameCategories: "WOMEN",
            img: "/public/img/Moderno/ProductsPage/woman.webp"
        },
        {
            id: 2,
            nameCategories: "MEN",
            img: "/public/img/Moderno/ProductsPage/man.webp"
        },
        {
            id: 3,
            nameCategories: "KIDS",
            img: "/public/img/Moderno/ProductsPage/kids.webp"
        },
        {
            id: 4,
            nameCategories: "ACCESSORIES",
            img: "/public/img/Moderno/ProductsPage/jewerly.webp"
        },
    ]

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
            brand: "BURBERRY",
            name: "Sweetheart Strapless Lamé Silk Blend Gown",
            description:
                "Gathers and plissé pleating multiply the shimmer radiating from this strapless gown styled with a twist-detail sweetheart neck from a perfect-drape silk blend.",
            price: "$2,500.00",
            img: "/img/Moderno/ProductsPage/Products/product2.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product2-2.png",
            tags: [{ label: "-13%", type: "discount" }],
        },
        {
            id: 3,
            brand: "PRADA",
            name: "Cutout Waist Long Sleeve Jersey Gown",
            description:
                "An oversized rosette unites the two halves of this arresting ruched gown sewn from crepe-textured jersey.",
            price: "$4,700.00",
            img: "/img/Moderno/ProductsPage/Products/product3.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product3-3.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },
        {
            id: 4,
            brand: "VALENTINO",
            name: "V Logo Pocket Wool & Silk Dress",
            description:
                "A pair of pockets is often the best thing a dress can offer, and when they appear with the iconic Valentino logo, they really reach perfection.",
            price: "$6,500.00",
            img: "/img/Moderno/ProductsPage/Products/product4.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product4-4.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },
        {
            id: 5,
            brand: "STELLA MCCARTNEY",
            name: "Crystal Embellished Cutout Pleated Satin Maxi Dress",
            description:
                "McCartney leans into her eponymous label’s origins with early aughts–inspired pieces like this pleated satin maxi dress with cutouts and a crystal-wrapped belt.",
            price: "$14,000.00",
            img: "/img/Moderno/ProductsPage/Products/product5.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product5-5.png",
            tags: [

                { label: "-10%", type: "discount" },
            ],
        },
        {
            id: 6,
            brand: "MISSONI",
            name: "Zigzag Lamé Sleeveless Maxi Dress",
            description:
                "Missoni’s famed zigzag motif is set off with chic shimmer on this figure-following maxi with shoulder-baring cutaways and a thigh-high back slit.",
            price: "$9,500.00",
            img: "/img/Moderno/ProductsPage/Products/product6.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product6-6.png",
            tags: [

                { label: "-10%", type: "discount" },
            ],
        },
        {
            id: 7,
            brand: "THE ROW",
            name: "Janita Wool Blend Tunic Dress",
            description:
                "Each of the four fibers comprising this dress makes a noticeable contribution to its texture, drape, sheen and comfort, making this a staple for the season.",
            price: "$5,500.00",
            img: "/img/Moderno/ProductsPage/Products/product7.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product7-7.png",
            tags: [

                { label: "-10%", type: "discount" },
            ],
        },
        {
            id: 8,
            brand: "ZELLA",
            name: "Excursion Hooded Long Sleeve Dress",
            description:
                "Keep moving all day long in this hooded dress featuring princess seams down the front and thumbhole cuffs that keep long sleeves securely in place.",
            price: "$180.00",
            img: "/img/Moderno/ProductsPage/Products/product8.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product8-8.png",
            tags: [

                { label: "-10%", type: "discount" },
            ],
        },

        {
            id: 9,
            brand: "VALENTINO",
            name: "V Logo Pocket Wool & Silk Dress",
            description:
                "A pair of pockets is often the best thing a dress can offer, and when they appear with the iconic Valentino logo, they really reach perfection.",
            price: "$6,500.00",
            img: "/img/Moderno/ProductsPage/Products/product4.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product4-4.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },

        // Thêm bao nhiêu sản phẩm tùy ý...

        {
            id: 10,
            brand: "PRADA",
            name: "Cutout Waist Long Sleeve Jersey Gown",
            description:
                "An oversized rosette unites the two halves of this arresting ruched gown sewn from crepe-textured jersey.",
            price: "$4,700.00",
            img: "/img/Moderno/ProductsPage/Products/product3.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product3-3.png",
            tags: [
                { label: "BEST SELLER", type: "highlight" },
                { label: "-4%", type: "discount" },
            ],
        },
        {
            id: 11,
            brand: "BURBERRY",
            name: "Sweetheart Strapless Lamé Silk Blend Gown",
            description:
                "Gathers and plissé pleating multiply the shimmer radiating from this strapless gown styled with a twist-detail sweetheart neck from a perfect-drape silk blend.",
            price: "$2,500.00",
            img: "/img/Moderno/ProductsPage/Products/product2.jpg",
            imgHover: "/img/Moderno/ProductsPage/Products/product2-2.png",
            tags: [{ label: "-13%", type: "discount" }],
        },
        {
            id: 12,
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

    const handleClick = (categoryName) => {
        console.log("clicke",categoryName);
        if (categoryName === 'WOMEN') {
            setActiveCategory(categoryName);
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Thông báo',
                text: 'Chức năng này chưa khả dụng!',
                confirmButtonText: 'Đã hiểu',
            });
        }
    };

    const [activeCategory, setActiveCategory] = useState("WOMEN");
    return(
        <>
            <div className="flex justify-between items-center px-5 py-1 border-b border-gray-200 text-[0.58rem] text-[#838383]">
                <div className="font-medium font-basier">
                    SHOWING 1–24 OF 64 RESULTS
                </div>

                <div className="text-[0.58rem] text-[#838383] font-medium hidden font-basier md:block">
                    HOME &gt; SHOP
                </div>

                <div className=" flex items-center gap-3 font-basier">
                    <select className="text-[0.7rem] border border-gray-300 rounded px-2 py-1 focus:outline-none">
                        <option>Default Sorting</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                    </select>


                </div>
            </div>

            <section className="flex font-basier flex-col gap-3 justify-between items-center mt-5 px-[30px] md:flex-row">
                <h1 className="text-[24px] text-[#070707]">SHOP</h1>
                <div className="flex ">

                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col justify-between items-center cursor-pointer"
                            onClick={() => handleClick(category.nameCategories)}
                        >
                            <div
                                className={`border transition-all duration-300 ${
                                    activeCategory === category.nameCategories
                                        ? 'border-black'
                                        : 'border-gray-300'
                                }`}
                            >
                                <img
                                    className="w-auto h-[4rem] sm:h-[6rem] md:h-[8rem] lg:h-[10rem]"
                                    src={category.img}
                                    alt={category.nameCategories}
                                />
                            </div>
                            <h2 className="mt-2 text-[12px] text-[#454545]">
                                {category.nameCategories}
                            </h2>
                        </div>
                    ))}


                </div>


            </section>

            <section className="mt-5  font-basier">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4    ">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}

                </div>

                <div className="navigator  h-[10rem] flex items-center justify-center items-center ">
                    <div className="flex justify-center items-center space-x-1 ">
                        <div className="bg-black text-white px-6 py-[1.1rem] rounded-[50%] text-[0.75rem] font-basier">1</div>
                        <div className="bg-white border border-black text-black px-6 py-[1.1rem] rounded-[50%] text-[0.75rem] font-basier hover:bg-[#FC5F49] hover:border-none hover:text-white transition-all duration-200">2</div>
                        <div className="bg-white border border-black text-black px-6 py-[1.1rem] rounded-[50%] text-[0.75rem] font-basier hover:bg-[#FC5F49] hover:border-none hover:text-white transition-all duration-200">3</div>
                        <div className="bg-white border border-black text-black px-[1.3rem] py-[1.3rem] rounded-[50%] text-[0.75rem] font-basier hover:bg-[#FC5F49] hover:border-none hover:text-white transition-all duration-200"><IoIosArrowForward /></div>



                    </div>
                </div>

            </section>
        </>
    )
}


function ProductCard({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative  card flex flex-col bg-white border border-gray-200 group hover:border-black "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="image-frame bg-white group-hover:bg-gray-200 transition-colors duration-300 ">
                <img
                    src={isHovered ? product.imgHover : product.img}
                    alt={product.name}
                    className="w-full h-auto transition-all duration-300"
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
                className={`absolute bottom-[23%] left-0 w-full flex transition-all duration-300 ${
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
            <div className="py-2 px-4 ">
                <h1 className="text-[11px] text-[#070707] font-basier mt-2">{product.brand}</h1>
                <h2 className="text-[14px] font-normal font-basier text-[#070707] mt-2">
                    {product.name}
                </h2>
                <h4 className="text-[12px] font-basier text-[#454545] mt-2">
                    {product.description}
                </h4>
                <h3 className="text-[12px] mt-2 font-basier mb-2">{product.price}</h3>
            </div>
        </div>
    );
}

export default ProductPage;