import { AsideFoodieRecipe, BlogCard, InputField, Pagination, SubscribeCard } from '../../components';
import { blogListData } from '../../constants';

const BlogList = () => {
  return (
    <div className='flex flex-col lg:gap-20 ss:gap-10 ss:mt-28 sm:mt-48'>
      <section className='flex flex-col items-center gap-4 w-[70%] mx-auto'>
        <h1 className='Header1'>
          Blog & Article
        </h1>
        <p className='paragraph text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore labore et dolore
        </p>
        <InputField
          className={`border border-solid border-gray-200 lg:w-[880px] ss:w-[200px] ss:placeholder:text-[8px] ss:text-[12px]`} buttonText="Search">
          Search article, news or recipe...
        </InputField>
      </section>

      <section className='w-[90%] mx-auto'>
        <div className='flex lg:gap-6 sm:gap-10 ss:gap-6'>
          <div className='lg:basis-[70%] ss:basis-[50%] flex flex-col gap-10'>
            {blogListData.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
          <AsideFoodieRecipe title={`Tasty Recipe`} />

        </div>
      </section>
      <Pagination />

      <SubscribeCard />
    </div>
  );
}

export default BlogList;