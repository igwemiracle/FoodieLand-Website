import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import Subscribe from '../../components/SubscribeCard';
import AsideFoodieRecipe from '../../components/AsideFoodRecipe';
import CheckBoxList from '../../components/CheckBoxList';
import { directionsData, moreRecipes, nutritionInformation } from '../../constants';
import MoreRecipes from '../../components/MoreRecipes';
import { DirectionItem } from '../../components/DirectionItem';

const RecipeDetails = () => {
  const mainDishItems = ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet"];
  const forSauce = ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"];

  return (
    <div className="flex items-center flex-col gap-10 lg:mt-44 ss:mt-5 sm:mt-28">
      <div className="w-[90%] mx-auto">
        <div className="flexCenterBetween mx-[auto] my-20 ss:items-start">
          <div className="flex flex-col gap-7">
            <h1 className="Header1">
              Health Japanese Fried Rice
            </h1>
            <div className="flex flex-wrap max-w-[800px] justify-between ss:gap-10">
              <div className="lg:w-[200px] flex items-center gap-3 lg:border-r border-gray-300 lg:pr-3 ss:w-[150px] ss:border-0 ss:pr-0">
                <img src={icons.smith} alt="smithImage" />
                <div className="flex flex-col gap-1">
                  <p className="font-bold whitespace-nowrap ss:text-xs sm:text-base">John Smith</p>
                  <p className="sm:text-sm text-m-gray whitespace-nowrap ss:text-[11px]">15 March 2022</p>
                </div>
              </div>
              <div className="flexCenterBetween lg:gap-6 ss:gap-2 lg:border-r border-gray-300
              lg:pr-14 ss:border-0">
                <img className='ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto' src={icons.timer} alt="timer" width={20} height={20} />
                <div className="flex flex-col lg:pl-0 lg:gap-1 lg:border-none ss:gap-1 ss:border-l border-gray-300 ss:pl-2">
                  <p className="sm:text-sm lg:font-medium whitespace-nowrap ss:text-[8px]">PREP TIME</p>
                  <p className="lg:text-sm sm:text-[16px] text-m-gray whitespace-nowrap ss:text-[11px]">15 Minutes</p>
                </div>
              </div>
              <div className="flexCenterBetween lg:gap-6 ss:gap-2 lg:border-r border-gray-300
              lg:pr-14 ss:border-0">
                <img className='ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto' src={icons.timer} alt="timer" width={20} height={20} />
                <div className="flex flex-col lg:pl-0 lg:gap-1 lg:border-none ss:gap-1 ss:border-l border-gray-300 ss:pl-2">
                  <p className="sm:text-sm lg:font-medium whitespace-nowrap ss:text-[8px]">COOK TIME</p>
                  <p className="lg:text-sm sm:text-[16px] text-m-gray whitespace-nowrap ss:text-[11px]">15 Minutes</p>
                </div>
              </div>
              <div className="flexCenterBetween lg:gap-6 ss:gap-2">
                <img className='ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto' src={icons.fork} alt="forknife" width={20} height={20} />
                <div className="flex flex-col lg:pl-0 lg:gap-1 lg:border-none ss:gap-1 ss:border-l border-gray-300 ss:pl-2">
                  <p className="lg:text-sm sm:text-[16px] lg:font-medium whitespace-nowrap ss:text-[8px]">Chicken</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:gap-6 ss:gap-2">
            <div className="flex flex-col items-center gap-3">
              <div className="SharePrint">
                <img src={icons.print} alt="print" width={20} height={20} />
              </div>
              <p className="sm:text-xs ss:text-[10px]">PRINT</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="SharePrint">
                <img src={icons.share} alt="print" width={20} height={20} />
              </div>
              <p className="sm:text-xs ss:text-[10px]">SHARE</p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between mx-[auto] my-20 ss:gap-3">
          <img className="lg:basis-[70%] object-cover" src={images.playMeal} alt="playMeal" />
          <div className="lg:basis-[26%] ss:basis-[45%] bg-foodie-blue 
           lg:px-8 ss:p-4 sm:p-6 lg:rounded-[30px] ss:rounded-[20px]">
            <h1 className="sm:text-2xl font-semibold ss:text-[9px] ss:leading-3">Nutrition Information</h1>
            <div className="flex flex-col gap-5 mt-7 font-medium">
              {nutritionInformation.map((item, index) => (
                <div key={index} className="flex-space-border-b">
                  <span className="ss:text-[8px] sm:text-[14px] lg:text-[16px] font-medium text-gray-400">{item.nutrientsName}</span>
                  <span className='text-[6px] sm:text-[12px] lg:text-[16px]'>{item.amount}</span>
                </div>
              ))}
            </div>
            <p className="lg:mt-72 ss:mt-8 text-center text-gray-500 mx-[auto] lg:leading-6 ss:text-[6px] ss:leading-2 lg:text-[14px] lg:w-[330px] sm:text-[10px]">
              adipiscing elit, sed do eiusmod tempor tempor
              incididunt ut labore adipiscing elit, sed do eiusmod.
            </p>
          </div>
          <p className="paragraph ss:basis-[50%] lg:basis-[100%] lg:mt-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum non proident, sunt in culpa qui officia deserunt mollit anim id est laborum deserunt laborum.
          </p>
        </div>
      </div>

      <div className="w-[90%] mx-auto flex ss:gap-8 mb-20">
        <div className="ss:basis-[50%] lg:basis-[70%] flex flex-col lg:gap-10">
          <div>
            <h1 className="ss:text-sm sm:text-2xl lg:text-3xl font-semibold">Ingredients</h1>

            <CheckBoxList checkboxItems={mainDishItems} title="For main dish" />
            <CheckBoxList checkboxItems={forSauce} title="For the sauce" />
          </div>

          <form className="flex flex-col gap-8 ss:mt-[3rem] sm:mt-[26rem] lg:mt-[18rem]">
            <h2 className="Header2">Directions</h2>
            {directionsData.map((direction) => (
              <DirectionItem
                key={direction.id}
                title={direction.title}
                description={direction.description}
                image={direction.image}
              />
            ))}
          </form>

        </div>

        <AsideFoodieRecipe title={`Other Recipe`} />
      </div>

      <Subscribe />

      <div className="w-[90%] mx-auto mb-36">
        <h2 className="Header2 text-center mb-20">You may like these recipe too</h2>
        <div className="grid ss:grid-cols-2  ss:gap-x-[14px] ss:gap-y-[14px] sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4  lg:gap-y-14">
          {moreRecipes.slice(0, 4).map((recipe, index) => (
            <MoreRecipes key={index} recipe={recipe} />
          )

          )}
        </div>
      </div>
    </div >
  );
}


export default RecipeDetails; 