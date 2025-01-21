import { AsideFoodieRecipe, BlogCard, InputField, Pagination, SubscribeCard } from '../../components';
import { images } from "../../assets/images"
import { icons } from '../../assets/icons';
import { blogListData } from '../../constants';

const BlogList = () => {
  return (
    <div className='flex flex-col gap-20'>
      <section className='flex flex-col items-center gap-4 mt-32 w-[70%] mx-auto'>
        <h1 className='heading1'>Blog & Article</h1>
        <p className='paragraph text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore incididunt ut labore et dolore labore et dolore
        </p>
        <InputField className={`border border-solid border-gray-200 lg:w-[880px]`} buttonText="Search">
          Search article, news or recipe...
        </InputField>
      </section>

      <section className='w-[90%] mx-auto'>
        <div className='flex gap-6'>
          <div className='basis-[70%] ss:basis-[50%] flex flex-col gap-10'>
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