import React from "react";

const blogs = [
  {
    id: 1,
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/news-1.jpg",
    date: "January 12, 2025",
    category: "Tips & Tricks",
    title: "We Offering Online Registration at Your Hotel",
  },
  {
    id: 2,
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/news-2.jpg",
    date: "January 12, 2025",
    category: "Spa & Wellness",
    title: "Our Health Club is Now Available for Your Fitness",
  },
  {
    id: 3,
    image: "https://dev251.kodesolution.com/hoteler/wp-content/uploads/2025/01/news-3.jpg",
    date: "January 12, 2025",
    category: "Popular Places",
    title: "Restoring the Lighting Design in the Hotel",
  },
];

const BlogSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="text-center mb-14">
        <h4 className="text-yellow-600 tracking-widest font-medium text-sm mb-3">
          NEWS & BLOG
        </h4>
        <h2 className="text-4xl font-serif text-gray-800">
          Check Latest Blog Post from Blog List
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-md mb-5">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>{blog.date}</span>
              <span className="mx-2 text-yellow-500">•</span>
              <span>{blog.category.toUpperCase()}</span>
            </div>

            <h3 className="text-lg font-serif text-gray-800 leading-snug group-hover:text-yellow-500 transition">
              {blog.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
