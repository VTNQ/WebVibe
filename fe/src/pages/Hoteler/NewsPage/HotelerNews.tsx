export default function HotelerNews() {
    const posts = [
        {
            id: 1,
            date: "26",
            month: "JAN",
            imgSrc:
                "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/bg4-550x550.jpg",
            author: "Sweem",
            category: "Tips & Tricks",
            title: "Benefit from a 15% discount reservations",
            link: "/Hoteler/Benefit-from-a-15-discount-reservations",
        },
        {
            id: 2,
            date: "26",
            month: "JAN",
            imgSrc:
                "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/room-5-550x550.jpg",
            author: "Sweem",
            category: "Digital Nomad",
            title: "Retore Lighting Design in The Hotel",
            link: "#",
        },
        {
            id: 3,
            date: "26",
            month: "JAN",
            imgSrc:
                "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/about4-550x550.jpg",
            author: "Sweem",
            category: "Popular Places",
            title: "New chef and spring special menu",
            link: "#",
        },
        {
            id: 4,
            date: "12",
            month: "JAN",
            imgSrc:
                "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog3-550x550.jpg",
            author: "Sweem",
            category: "Popular Places",
            title: "Restoring the Lighting Design in the Hotel",
            link: "#",
        },
        {
            id: 5,
            date: "12",
            month: "JAN",
            imgSrc:
                "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog2-550x550.jpg",
            author: "Sweem",
            category: "Spa & Wellness",
            title: "Our Health Club is Now Available for Your Fitness",
            link: "#",
        },
        {
            id: 6,
            date: "12",
            month: "JAN",
            imgSrc:
                "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog1-550x550.jpg",
            author: "Sweem",
            category: "Tips & Tricks",
            title: "We Offering Online Registration at Your Hotel",
            link: "#",
        },
    ];
    return (
        <div>
            <div
                className="relative bg-cover bg-center bg-no-repeat h-[400px] flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/page-title-bg.jpg')",
                }}
            >
                <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0" />
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-5xl font-semibold">News</h1>
                    <div className="mt-4 text-sm flex justify-center items-center gap-2">
                        <span className="text-white/70">Home</span>
                        <span className="text-white font-semibold">› News</span>
                    </div>
                </div>
            </div>
            <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <article key={post.id} className="group">
                            <div className="relative overflow-hidden rounded-md shadow-md">
                                <img
                                    src={post.imgSrc}
                                    alt={post.title}
                                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width="550"
                                    height="550"
                                />
                                <div className="absolute left-4 bottom-4 bg-[#AF8B4E] text-white text-[14px] tracking-widest font-semibold px-3 py-2 text-center min-w-[56px]">
                                    <div>{post.date}</div>
                                    <div className="text-xs">{post.month}</div>
                                </div>
                            </div>
                            <div className="mt-2 text-gray-600 text-sm flex flex-wrap items-center gap-2 px-1">
              <span className="flex items-center gap-1 whitespace-nowrap">
                <svg
                    className="w-4 h-4 text-[#AF8B4E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                  <path d="M10 10a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                By {post.author}
              </span>
                                <span className="flex items-center gap-1 whitespace-nowrap text-[#AF8B4E]">
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7M16 3h-1a4 4 0 00-4 4v4a4 4 0 004 4h1"
                  ></path>
                </svg>
                                    {post.category}
              </span>
                            </div>
                            <h3 className="mt-1 mb-1 text-lg font-serif leading-snug text-gray-900 px-1">
                                {post.title}
                            </h3>
                            <a
                                href={post.link}
                                className="flex items-center gap-1 text-sm font-semibold uppercase tracking-[0.07em] text-gray-900 px-1"
                            >
                                Read More
                                <svg
                                    className="w-4 h-4 text-[#AF8B4E]"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </a>
                            <hr className="mt-3 border-t border-gray-200" />
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )

}