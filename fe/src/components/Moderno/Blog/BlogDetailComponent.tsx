import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const blog = {
    date: "April 23, 2023",
    title: "Gigi Hadid Show Our New Luxury Collection",
    description:
        "Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.",
    category: "PROMO",
    images: ["/img/Moderno/Blog/moderno-2338177441-600x336.jpg"],
    link: "#",
    isVideo: true,
    videoUrl: "/video/Moderno/Blog/iLoveYt.net_YouTube_Spring-Summer-2023-Campaign-starring-Gig_Media_6IKU6vmOMac_001_1080p.mp4",
};
const latestPosts = [
    {
        title: "Summer Collections",
        image: "/img/Moderno/Blog/moderno-2338813525-600x336.jpg",
    },
    {
        title: "Best Gifts for Holidays",
        image: "/img/Moderno/Blog/moderno-2338441644-600x336.jpg",
    },
    {
        title: "New Trends in 2023",
        image: "/img/Moderno/Blog/moderno-2338177441-600x336.jpg",
    },
];
const BlogDetailComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const openVideoModal = (url) => {
        setCurrentVideoUrl(url);
        setIsLoading(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentVideoUrl("");
    };
    const renderMedia = () => {
        if (blog.isVideo) {
            return (
                <>
                    <img
                        src={blog.images[0]}
                        alt="Blog Media"
                        className="w-full h-full object-cover rounded"
                    />
                    <button
                        onClick={() => openVideoModal(blog.videoUrl)}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md">
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-black ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            )}
                        </div>
                    </button>
                </>

            );
        }

        return (
            <>
                <img
                    src={blog.images[0]}
                    alt="Blog Media"
                    className="w-full h-64 object-cover rounded"
                />
                {blog.images.length > 1 && (
                    <>
                        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
                            <ChevronLeft />
                        </button>
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white">
                            <ChevronRight />
                        </button>
                    </>
                )}
            </>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 font-manrope">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Main Content */}
                <div className="lg:col-span-3 border rounded-lg p-6 shadow-sm bg-white">
                    <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                    <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
                        <span>By Admin</span>
                        <span>|</span>
                        <span>{blog.date}</span>
                        <span>|</span>
                        <span>{blog.category}</span>
                    </div>

                    <div className="relative aspect-video mb-6">{renderMedia()}</div>

                    <div className="prose max-w-none prose-p:text-gray-700 prose-p:leading-relaxed">
                        <p>{blog.description}</p>
                        <p>The collection features a range of pieces perfect for any occasion...</p>
                        <p>Another highlight is the use of unique prints and patterns...</p>
                        <p>Accessories are minimal and sleek...</p>
                        <p>Gigi Hadid’s collaboration with our brand shows her eye for fashion...</p>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600">
                        <span className="font-medium">Tags:</span>
                        {["arts", "collection", "fashion", "gifts", "men", "promo", "sales", "women"].map((tag) => (
                            <a key={tag} href="#" className="hover:underline">
                                {tag}
                            </a>
                        ))}
                    </div>

                    <hr className="my-8" />

                    {/* Navigation */}
                    <div className="flex justify-between text-sm font-medium text-gray-700">
                        <a href="#" className="hover:underline">← New Trends In Clothes Industry in 2023</a>
                        <a href="#" className="hover:underline">Best Gifts For Holidays →</a>
                    </div>

                    <hr className="my-8" />

                    {/* Author */}
                    <div className="flex items-start gap-4 mb-8">
                        <img
                            src="/img/Moderno/Blog/moderno-0139665883.webp"
                            alt="Author"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-xs uppercase text-gray-500 font-semibold mb-1">Author</p>
                            <h4 className="text-lg font-bold mb-2">Josephine</h4>
                            <div className="flex gap-4 mb-4 text-gray-600 text-xl">
                                <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="#" aria-label="Instagram"><FaInstagram /></a>
                                <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
                                <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            </div>
                            <p className="text-sm text-gray-700 max-w-xl">
                                Hi, I'm the author of this fashion blog! I've always been passionate about the
                                fashion industry and have been lucky enough to turn that passion into a career.
                            </p>
                        </div>
                    </div>

                    {/* Comment Form */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Post a Comment</h3>
                        <form className="space-y-4">
                            <textarea
                                className="w-full border border-gray-300 rounded px-4 py-2"
                                placeholder="Comment*"
                                required
                            />
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input type="text" className="border border-gray-300 rounded px-4 py-2" placeholder="Name*" required />
                                <input type="email" className="border border-gray-300 rounded px-4 py-2" placeholder="Email*" required />
                                <input type="text" className="border border-gray-300 rounded px-4 py-2" placeholder="Website" />
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <input type="checkbox" id="saveInfo" className="w-4 h-4" />
                                <label htmlFor="saveInfo">
                                    Save my name, email, and website in this browser for the next time I comment.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1 space-y-6 border rounded-lg p-4 shadow-sm bg-white">
                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold mb-4 uppercase">Categories</h3>
                        <ul className="space-y-3 text-sm text-gray-800">
                            {["Discounts", "News", "Promo"].map((category, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <input type="checkbox" id={`cat-${idx}`} className="form-checkbox w-4 h-4 text-black" />
                                    <label htmlFor={`cat-${idx}`} className="cursor-pointer">{category}</label>
                                </li>
                            ))}
                        </ul>
                        <hr className="my-5" />
                    </div>

                    {/* Latest Posts */}
                    <div>
                        <h3 className="font-semibold mb-2">Latest Posts</h3>
                        <div className="space-y-3">
                            {latestPosts.map((title, i) => (
                                <a key={i} href="#" className="flex gap-3">
                                    <img src={title.image} alt="" className="w-20 h-14 object-cover" />
                                    <div>
                                        <div className="text-sm text-gray-700 font-medium">{title.title}</div>
                                        <div className="text-xs text-gray-500 px-2 py-1 inline-block uppercase font-semibold tracking-wide">
                                            April 10, 2023
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                        <hr className="my-5" />
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search …"
                            className="w-full border border-gray-300 rounded-lg pl-4 pr-10 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                        <FiSearch className="absolute right-3 top-2.5 text-gray-700 text-lg pointer-events-none" />
                        <hr className="my-5" />
                    </div>

                    {/* Tags */}
                    <div>
                        <h3 className="font-semibold mb-2">Tags</h3>
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                            {["arts", "collection", "fashion", "gifts", "men", "promo", "sales", "women"].map((tag) => (
                                <a key={tag} href="#" className="bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">
                                    {tag}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {currentVideoUrl && (
                <iframe
                    src={currentVideoUrl}
                    style={{ display: 'none' }}
                    onLoad={() => {
                        setIsLoading(false);
                        setIsOpen(true);
                    }}
                />
            )}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
                    <div className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src={currentVideoUrl}
                            title="Blog Video"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>

                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
                        >
                            ✕
                        </button>
                    </div>
                </div>

            )}

        </div>
    );
};

export default BlogDetailComponent;
