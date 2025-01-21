import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="flex lg:flex-row lg:gap-4 ss:flex-col ss:items-start ss:gap-4">
      <img className="rounded-[20px] object-contain
      ss:w-full" src={blog.BlogImage} alt={blog.title} />
      <div className="flex flex-col lg:gap-6 lg:p-4 rounded-[10px] ss:items-start ss:gap-3">
        <h1 className="lg:text-[20px] font-semibold ss:text-[12px] ss:leading-5">{blog.title}</h1>
        <p className="ss:text-[10px] text-gray-500">{blog.description}</p>

        <div className="flex lg:flex-row lg:items-center lg:gap-12 ss:flex-col ss:items-start ss:gap-6">
          <div className="flex items-center lg:gap-4 ss:gap-2">
            <img src={blog.profile} alt={blog.username} />
            <p className="font-bold whitespace-nowrap ss:text-xs sm:text-base">{blog.username}</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-400 ss:hidden lg:block"></div>
          <p className="text-gray-400 ss:text-[8px]">{blog.date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
