import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
const blogs = [
    {
        date: 'April 23, 2023',
        title: 'Summer Collections',
        description:
            'Summer is just around the corner, which means it’s time to update our wardrobes with the latest fashion trends.',
        category: 'NEWS',
        images: [
            '/img/Moderno/Blog/moderno-2338813525-600x336.jpg',

        ],
        link: '#',
        isVideo: false,
    },
    {
        date: 'April 23, 2023',
        title: 'Best Gifts for Holidays',
        description:
            'The holiday season is a time for joy, celebration, and giving. Finding the perfect gift for your loved ones can be a challenge, but with a little thought and creativity.',
        category: 'DISCOUNTS',
        images: [
            '/img/Moderno/Blog/moderno-2338441644-600x336.jpg',
            '/img/Moderno/Blog/moderno-2338813525-600x336.jpg',
        ],
        link: '#',
        isVideo: false,
    },
    {
        date: 'April 23, 2023',
        title: 'Gigi Hadid Show Our New Luxury Collection',
        description:
            'Fashion icon Gigi Hadid has once again taken the fashion world by storm with her latest collection.',
        category: 'PROMO',
        images: [
            '/img/Moderno/Blog/moderno-2338177441-600x336.jpg',

        ],
        link: '#',
        isVideo: true,
        videoUrl: "/video/Moderno/Blog/iLoveYt.net_YouTube_Spring-Summer-2023-Campaign-starring-Gig_Media_6IKU6vmOMac_001_1080p.mp4",
    },
    {
        date: 'April 23, 2023',
        title: 'New Trends in Clothes Industry in 2023',
        description:
            'The fashion industry is always evolving, and 2023 is no exception. As we move further into the new year, here are some of the latest fashion trends.',
        category: 'NEWS',
        images: [
            '/img/Moderno/Blog/moderno-2607419203-600x336.jpg',

        ],
        link: '#',

    },

]
const BlogComponent = () => {
    const [slideIndexes, setSlideIndexes] = useState(blogs.map(() => 0));
    const [isOpen, setIsOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const openVideoModal = (url) => {
        setCurrentVideoUrl(url);
        setIsLoading(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentVideoUrl("");
    };
    const handlePrev = (index) => {
        setSlideIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[index] =
                (newIndexes[index] - 1 + blogs[index].images.length) % blogs[index].images.length;
            return newIndexes;
        });
    };

    const handleNext = (index) => {
        setSlideIndexes((prev) => {
            const newIndexes = [...prev];
            newIndexes[index] = (newIndexes[index] + 1) % blogs[index].images.length;
            return newIndexes;
        });
    };
    return (
        <div className=" py-12 font-manrope">
            <h2 className=" px-6 text-3xl font-bold mb-8">BLOG</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                {blogs.map((blog, index) => (
                    <div key={index} className="border border-gray-200 relative">
                        <div className="relative">
                            <img
                                src={blog.images[slideIndexes[index]]}
                                alt={`Slide ${slideIndexes[index] + 1}`}
                                className="w-full h-64 object-fill"
                            />
                            {blog.isVideo ? (
                                // Nút Play
                                <button
                                    className="absolute inset-0 flex items-center justify-center"
                                    onClick={() => openVideoModal(blog.videoUrl)}
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
                            ) : (
                                blog.images.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => handlePrev(index)}
                                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                        >
                                            <ChevronLeft />
                                        </button>
                                        <button
                                            onClick={() => handleNext(index)}
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
                                        >
                                            <ChevronRight />
                                        </button>
                                    </>
                                )
                            )}

                        </div>
                        <div className="p-4">
                            <div className="text-xs text-gray-500 mb-2 border border-gray-300 px-2 py-1 inline-block uppercase font-semibold tracking-wide">
                                {blog.date}
                            </div>

                            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                            <p className="text-gray-600 mb-4 font-[400] text-[13px] leading-[21px]" style={{ letterSpacing: '0.0225em' }}>{blog.description}</p>
                            <div className="text-[11px] leading-[15px] font-[500] text-[#070707] mb-2">{blog.category}</div>
                            <a
                                href={`/blog/1`}
                                className="text-sm font-semibold hover:underline inline-flex items-center gap-1"
                            >
                                READ MORE <span>&rarr;</span>
                            </a>
                        </div>
                    </div>
                ))}
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
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                        <div className="relative w-[90vw] h-[90vh] max-w-6xl bg-black rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-full"
                                src={currentVideoUrl}
                                title="Blog Video"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen

                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 text-white text-xl bg-black/50 rounded-full px-3 py-1 hover:bg-black"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                )}     {isOpen && (
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
        </div>
    )
}
export default BlogComponent;