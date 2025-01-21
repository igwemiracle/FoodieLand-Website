import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="flex gap-4">
      <img className="rounded-[20px]" src={blog.BlogImage} alt={blog.title} />
      <div className="flex flex-col gap-6 p-4 rounded-[10px]">
        <h1 className="text-[20px] font-medium">{blog.title}</h1>
        <p className="paragraph">{blog.description}</p>
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-4">
            <img src={blog.profile} alt={blog.username} />
            <p className="font-bold whitespace-nowrap ss:text-xs sm:text-base">{blog.username}</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-400"></div>
          <div>
            <p className="text-gray-400">{blog.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
