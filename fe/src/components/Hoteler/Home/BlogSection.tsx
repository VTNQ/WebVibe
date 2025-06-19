import React from "react";

const blogs = [
  {
    id: 1,
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog1-672x448.jpg",
    date: "January 12, 2025",
    category: "Tips & Tricks",
    title: "We Offering Online Registration at Your Hotel",
  },
  {
    id: 2,
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog2-672x448.jpg",
    date: "January 12, 2025",
    category: "Spa & Wellness",
    title: "Our Health Club is Now Available for Your Fitness",
  },
  {
    id: 3,
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/blog3-672x448.jpg",
    date: "January 12, 2025",
    category: "Popular Places",
    title: "Restoring the Lighting Design in the Hotel",
  },
];

const BlogSection = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="text-center mb-14">
        <h4 className="text-yellow-600 tracking-widest font-medium text-sm mb-2">
          NEWS & BLOG
        </h4>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800">
          Check Latest Blog Post from Blog List
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-md mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 sm:h-64 md:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-2">
              <span>{blog.date}</span>
              <span className="mx-2 text-yellow-500">•</span>
              <span className="uppercase">{blog.category}</span>
            </div>

            <h3 className="text-base sm:text-lg font-serif text-gray-800 leading-snug group-hover:text-yellow-500 transition-colors duration-300">
              {blog.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
