import BlogDetailComponent from "@/components/Moderno/Blog/BlogDetailComponent";
import React from "react";
const BlogDetailPage=()=>{
return(
    <>
    <div className="flex items-center justify-center px-6 py-3 bg-white border-b border-gray-200">
        <nav className="text-sm text-gray-500 font-medium space-x-2">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-[#838383]">Blog</span>
          <span className="text-gray-400">{'>'}</span>
          <span className="text-[#838383]">Gigi Hadid Show Our New Luxury Collection</span>
        </nav>
      </div>
      <BlogDetailComponent/>
    </>
)
}
export default BlogDetailPage;