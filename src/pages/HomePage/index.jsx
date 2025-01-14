import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import { InstagramIcon, Play } from 'lucide-react';
import Button from '../../components/Button';
import CategoryCard from '../../components/CategoryCard';
import { foodCategories, tastyFoodOptions } from '../../constants';
import TastyRecipe from '../../components/TastyRecipe';

const HomePage = () => {
  return (
    <div className='grid place-items-center'>
      <section className='flex flex-col w-[90%] mx-auto my-32 rounded-[4rem] overflow-hidden lg:flex-row  xs:flex-col '>
        <div className='basis-2/4 flex-1 flex flex-col bg-foodie-blue ss:px-7 ss:py-12 m:sp-14 gap-8 '>
          <div className='flex items-center rounded-3xl gap-3 bg-white max-w-44 py-2 px-6 whitespace-nowrap'>
            <span className='text-2xl'>📜</span>
            Hot Recipes
          </div>
          <h1 className='ss:text-[20px] ss:leading-[30px] sm:text-[69px] sm:leading-[77px] font-semibold'>Spicy delicious chicken wings</h1>
          <p className='ss:text-[12px] ss:leading-5 sm:text-[14px] sm:leading-6 lg:leading-7 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat deserunt euismod laboriosam cumque.
            Molestias, omnis, amet aliquam fugit rem at eaque expedita minim</p>
          <div className="lg:flex-row flex flex-col gap-5">
            <button className="flex items-center  gap-4 bg-[#dbedf1] py-3 px-7 rounded-3xl max-w-44">
              <img src={icons.timer} alt="Facebook Icon" width="20" height="20" />
              <span className='text-gray-500 whitespace-nowrap'>30 Minutes</span>
            </button>
            <button className="flex items-center  gap-4 bg-[#dbedf1] py-3 px-7 rounded-3xl max-w-44">
              <img src={icons.fork} alt="Facebook Icon" width="20" height="20" />
              <span className='text-gray-500'>Chicken</span>
            </button>
          </div>
          <div className="flex-col lg:flex-row gap-7 flex justify-between mt-24">
            <div className="flex gap-4">
              <img src={icons.smith} alt="not-showing" />
              <div className='flex flex-col gap-1'>
                <p className='font-bold whitespace-nowrap'>John Smith</p>
                <p className='text-sm text-gray-500 whitespace-nowrap'>15 March 2022</p>
              </div>
            </div>
            <div>
              <Button icon={<Play className='rounded-[50%] bg-white h-5 w-5 p-1' fill="black" />}>
                View Recipes
              </Button>
            </div>
          </div>
        </div>
        <div className=" basis-2/4 relative w-full">
          <img
            className="w-full h-full object-cover"
            src={images.foodie}
            alt="foodie"
          />
          {/* <img className='absolute top-16 -left-16' src={icons.badge} alt="badge" /> */}
        </div>
      </section>

      {/* Category section */}
      <section className='w-[90%] flex flex-col gap-14 mx-auto mb-48'>
        <div className='flex justify-between items-center'>
          <h1 className='sm:text-4xl font-semibold ss:text-xl'>Categories</h1>
          <Button variant='secondary' className={` min-w-[5px] ss:text-[9px] ss:py-3 ss:px-7 sm:py-5 sm:px-10 sm:text-[16px]`}> View All Categories </Button>
        </div>
        <div className='grid lg:grid-cols-6 justify-center place-items-center sm:grid-cols-3 sm:gap-y-4 ss:grid-cols-2 '>
          {foodCategories.map((category) => (
            <CategoryCard
              key={category.id}
              gradient={category.gradient}
              textShadowClass={category.textShadowClass}
              emoji={category.emoji}
              label={category.label}
            />
          ))}
        </div>
      </section>

      {/* Tasty Recipe section */}
      <section className='flex flex-col items-center justify-center w-[90%]'>
        <h1 className='font-semibold ss:text-xl sm:text-4xl mb-4 '>
          Simple and tasty recipes
        </h1>
        <p className="lg:leading-6 text-center sm:text-[20px] lg:text-base max-w-[706px] text-gray-500 mb-28
        ss:text-[10px]
        ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium ea nostrum
          blanditiis neque ut iusto, totam at distinctio, vero fuga
        </p>
        <div className='grid ss:grid-cols-2 ss:gap-x-[14px] sm:gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3 gap-x-[48px]'>
          {tastyFoodOptions.map((tastyFood, index) => (
            <TastyRecipe key={index} tasty={tastyFood} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;