import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import { InstagramIcon, Play } from 'lucide-react';
import { foodCategories, foodieSocialsCard, moreRecipes, tastyFoodOptions } from '../../constants';
import { Button, CategoryCard, MoreRecipes, PostCard, SubscribeCard, TastyRecipe } from '../../components';

const HomePage = () => {
  return (
    <div className='gridCenter'>
      <section className='flex flex-col w-[90%] rounded-[4rem] mx-auto my-32 overflow-hidden lg:flex-row'>
        <div className='basis-2/4 flex-1 flex flex-col bg-foodie-blue ss:px-6 ss:py-12 sm:p-14 gap-8 '>
          <p className='flexCenter buttonWidthHeight gap-3 bg-white rounded-3xl whitespace-nowrap  ss:text-xs ss:py-2 sm:text-[16px] sm:py-4'>
            <span className='ss:text-[18px] sm:text-[24px]'>
              <img src={images.menu} className='ss:w-5 ss:h-5 lg:w-[24px] lg:h-[24px]' alt="show-menu" />
            </span>Hot Recipes
          </p>
          <h1 className='Header1'>
            Spicy delicious chicken wings
          </h1>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam placeat deserunt euismod
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
              <Button className={``} icon={<Play className='rounded-[50%] bg-white ss:h-[18px] ss:w-[18px] lg:h-5 lg:w-5 p-1' fill="black" />}>
                View Recipes
              </Button>
            </div>
          </div>
        </div>

        <div className="basis-2/4 relative w-full">
          <img
            className="w-full h-full object-cover ss:rotate-90 ss:scale-110 sm:rotate-0"
            src={images.foodie}
            alt="foodie"
          />
          {/* <img className='absolute top-16 -left-16' src={icons.badge} alt="badge" /> */}
        </div>
      </section>

      {/* Category section */}
      <section className='w-[90%] flex flex-col gap-20 mx-auto mb-32'>
        <div className='flexCenterBetween'>
          <h2 className='Header2'>Categories</h2>
          <Button variant='secondary' className={`min-w-[5px] ss:text-[9px] ss:py-3 ss:px-7 sm:py-5 sm:px-10 sm:text-[16px]`}> View All Categories </Button>
        </div>
        <div className='grid lg:grid-cols-6 ss:grid-cols-2 ss:gap-y-10 ss:place-items-center sm:grid-cols-3'>
          {foodCategories.map((category) => (
            <CategoryCard
              key={category.id}
              emoji={category.emoji}
            />
          ))}
        </div>
      </section>

      {/* Tasty Recipe section */}
      <section className='flexCenter flex-col w-[90%] mb-32'>
        <h2 className='Header2 mb-4'>
          Simple and tasty recipes
        </h2>
        <p className="paragraph text-center  max-w-[706px] mb-28">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed praesentium ea nostrum
          blanditiis neque ut iusto, totam at distinctio, vero fuga
        </p>
        <div className='grid ss:grid-cols-2 ss:gap-x-[14px] sm:gap-x-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[40px]'>
          {tastyFoodOptions.map((tastyFood, index) => (
            <TastyRecipe key={index} tasty={tastyFood} />
          ))}
        </div>
      </section>

      {/* Learn more section */}
      <section className="w-[90%] h-auto flex ss:flex-col ss:items-start lg:flex-row lg:items-end mb-32">
        <div className="basis-[40%] flex flex-col lg:gap-[8rem] lg:mb-32 ss:gap-16 ss:mb-8  ">
          <div className='flex flex-col gap-4'>
            <h2 className='Header2'>
              Everyone can be a <br />chef in their own kitchen
            </h2>
            <p className='paragraph lg:w-[500px] ss:w-[220px]  sm:w-96'>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore tempor incididunt ut labore et dolore magna ad ad minim
            </p>
          </div>
          <div className="">
            <Button className="sm:w-32 lg:w-40">Learn More</Button>
          </div>
        </div>

        <div className='basis-[60%]'>
          <img className=" object-cover" src={images.maleChef} alt="not-showing" />
        </div>
      </section >

      {/* Foodie socials section */}
      <section className="w-full flexCenter flex-col gap-6 bg-foodie-gradient mx-auto mb-32">
        <h2 className='Header2 ss:text-center'>Check out @foodieland on Instagram</h2>
        <p className='paragraph text-center font-normal lg:w-[890px] mb-4'>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim enim ad labore et dolore magna minim</p>
        <div className="w-[90%] grid ss:grid-cols-2 ss:gap-y-8 sm:gap-y-14 lg:grid-cols-4 gap-6">
          {foodieSocialsCard.map((post, index) => (
            <PostCard key={index} post={post} />

          ))}
        </div>
        <div className='my-16'>
          <Button className="" icon={<InstagramIcon />}>
            Visit Our Instagram
          </Button>
        </div>
      </section>

      {/* More recipes section */}
      <section className="w-[90%] flex flex-col ss:gap-10 lg:gap-20 mx-auto mb-28">
        <div className='flexCenterBetween ss:flex-col sm:items-start lg:flex-row  lg:items-center gap-8'>
          <h2 className='Header2 max-w-[600px]'>Try this delicious recipe to make your day</h2>
          <p className='paragraph max-w-[750px]'>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut consectetuipis eiusmod dolore magna aliqut enim ad minim
          </p>
        </div>
        <div className='grid ss:grid-cols-2  ss:gap-x-[14px] ss:gap-y-[14px] sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4  lg:gap-y-14 '>
          {moreRecipes.map((more_recipe, index) =>
            <MoreRecipes key={index} recipe={more_recipe} />
          )}
        </div>
      </section>

      {/* Subscribe card section */}
      <SubscribeCard />
    </div >
  );
}
export default HomePage;