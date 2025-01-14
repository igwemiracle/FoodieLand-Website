import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import { InstagramIcon, Play } from 'lucide-react';
import Button from '../../components/Button';
import CategoryCard from '../../components/CategoryCard';
import { foodCategories, tastyFoodOptions } from '../../constants';
import TastyRecipe from '../../components/TastyRecipe';

const HomePage = () => {
  return (
    <div className='gridCenter'>
      <section className='flex flex-col w-[90%] rounded-[4rem] mx-auto my-32 overflow-hidden lg:flex-row'>
        <div className='basis-2/4 flex-1 flex flex-col bg-foodie-blue ss:px-6 ss:py-12 sm:p-14 gap-8 '>
          <p className='flexCenter buttonWidthHeight gap-3 bg-white rounded-3xl whitespace-nowrap  ss:text-xs ss:py-2 sm:text-[16px] sm:py-4'>
            <span className='ss:text-[18px] sm:text-[24px]'>📜</span>Hot Recipes
          </p>
          <h1 className='ss:text-[26px] ss:leading-[35px] sm:text-[50px] sm:leading-[70px] lg:text-[69px] font-semibold'>
            Spicy delicious chicken wings
          </h1>
          <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat deserunt euismod
            laboriosam cumque.Molestias, omnis, amet aliquam fugit rem at eaque expedita minim
          </p>
          <div className="flex flex-col lg:flex-row gap-5">
            <button className="flexCenter gap-3 buttonWidthHeight bg-foodie-dim-blue py-3 px-7 rounded-3xl">
              <img className='ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto' src={icons.timer} alt="Facebook Icon" />
              <span className='ss:text-xs sm:text-[14px] text-gray-500 whitespace-nowrap'>30 Minutes</span>
            </button>
            <button className="flexCenter gap-3 buttonWidthHeight bg-foodie-dim-blue py-3 px-7 rounded-3xl">
              <img className='ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto' src={icons.fork} alt="Facebook Icon" />
              <span className='ss:text-xs sm:text-[17px] text-gray-500'>Chicken</span>
            </button>
          </div>
          <div className="flex-col lg:flex-row gap-7 flex justify-between mt-24">
            <div className="flex gap-4">
              <img src={icons.smith} alt="not-showing" />
              <div className='flex flex-col gap-1'>
                <p className='font-bold whitespace-nowrap ss:text-xs sm:text-base'>John Smith</p>
                <p className='text-gray-500 whitespace-nowrap ss:text-xs sm:text-sm'>15 March 2022</p>
              </div>
            </div>
            <div>
              <Button className={`ss:text-xs sm:text-[16px]`} icon={<Play className='rounded-[50%] bg-white h-5 w-5 p-1' fill="black" />}>
                View Recipes
              </Button>
            </div>
          </div>
        </div>

        <div className="basis-2/4 relative w-full">
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
        <div className='flexCenterBetween'>
          <h1 className='ss:text-xl sm:text-4xl font-semibold '>Categories</h1>
          <Button variant='secondary' className={` min-w-[5px] ss:text-[9px] ss:py-3 ss:px-7 sm:py-5 sm:px-10 sm:text-[16px]`}> View All Categories </Button>
        </div>
        <div className='gridCenter lg:grid-cols-6 justify-center  sm:grid-cols-3 sm:gap-y-4 ss:grid-cols-2 '>
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
      <section className='flexCenter flex-col w-[90%]'>
        <h1 className='ss:text-xl sm:text-4xl font-semibold mb-4'>
          Simple and tasty recipes
        </h1>
        <p className="paragraph text-center  max-w-[706px] mb-28">
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