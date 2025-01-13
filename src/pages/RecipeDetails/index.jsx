import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import Subscribe from '../../components/SubscribeCard';
import AsideFoodieRecipe from '../../components/AsideFoodRecipe';
import CheckBoxList from '../../components/CheckBoxList';

const RecipeDetails = () => {
  const mainDishItems = ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet"];
  const forSauce = ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"];

  return (
    <section className="flex items-center flex-col gap-20">
      <div className="w-[90%] mx-auto">
        <div className="flex justify-between items-center mx-[auto] my-20">
          <div className="flex flex-col gap-7">
            <h1 className="text-[67px] font-semibold">Health Japanese Fried Rice</h1>
            <div className="flex max-w-[800px] justify-between">

              <div className="w-[200px] flex items-center gap-3 border-r border-gray-300 pr-3">
                <img src={icons.smith} alt="smithImage" />
                <div className="flex flex-col gap-1">
                  <p className="text-base font-bold">John Smith</p>
                  <p className="text-sm text-m-gray">15 March 2022</p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-6 border-r border-gray-300 pr-14">
                <img src={icons.timer} alt="timer" width={24} height={24} />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium">PREP TIME</p>
                  <p className="text-sm text-m-gray">15 Minutes</p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-6 border-r border-gray-300 pr-14">
                <img src={icons.timer} alt="timer" width={24} height={24} />
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-medium">COOK TIME</p>
                  <p className="text-sm text-m-gray">15 Minutes</p>
                </div>
              </div>

              <div className="flex justify-between items-center gap-6">
                <img src={icons.fork} alt="forknife" width={24} height={24} />
                <div>
                  <p className="text-sm text-m-gray ">Chicken</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-foodie-blue rounded-[50%] w-16 h-16 flex justify-center items-center">
                <img src={icons.print} alt="print" width={20} height={20} />
              </div>
              <p className="text-xs">PRINT</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="bg-foodie-blue rounded-[50%] w-16 h-16 flex justify-center items-center">
                <img src={icons.share} alt="print" width={20} height={20} />
              </div>
              <p className="text-xs">SHARE</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-[auto] my-20">
          <img className="basis-[65%]" src={images.playMeal} alt="playMeal" />
          <div className="basis-[32%] bg-foodie-blue p-8 rounded-[30px] ">
            <h1 className="text-2xl font-semibold">Nutrition Information</h1>
            <div className="flex flex-col gap-5 mt-7 font-medium">
              <div className="flex-space-border-b">
                <span className="text-m-gray">Calories</span>
                <span>219.9 kal</span>
              </div>
              <div className="flex-space-border-b">
                <span className="text-m-gray">Total Fat</span>
                <span>10.7 g</span>
              </div>
              <div className="flex-space-border-b">
                <span className="text-m-gray">Protein</span>
                <span>7.9 g</span>
              </div>
              <div className="flex-space-border-b">
                <span className="text-m-gray">Carbohydrate</span>
                <span>22.3 g</span>
              </div>
              <div className="flex-space-border-b">
                <span className="text-m-gray">Chloesterol</span>
                <span>37.4 mg</span>
              </div>
            </div>
            <p className="mt-56 text-center text-gray-500 mx-[auto] leading-7">
              adipiscing elit, sed do eiusmod tempor tempor
            </p>
            <p className="text-center text-gray-500">incididunt ut labore adipiscing elit, sed do eiusmod.</p>
          </div>
        </div>
        <p className="font-normal text-gray-500 leading-7 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum non proident, sunt in culpa qui officia deserunt mollit anim id est laborum deserunt laborum.
        </p>
      </div>

      <div className="w-[90%] mx-auto flex justify-between">
        <div className="basis-[65%] flex flex-col gap-10">
          <h1 className="text-4xl font-semibold">Ingredients</h1>

          <CheckBoxList checkboxItems={mainDishItems} title="For main dish" />
          <CheckBoxList checkboxItems={forSauce} title="For the sauce" />

          <form className="flex flex-col gap-8 mt-[8.5rem]">
            <p className="text-4xl font-semibold">Directions</p>
            <div className="flex items-start justify-center gap-5 border-0 border-b border-solid border-gray-200 pb-8">
              <input className="direction-input-checkbox w-[110px]" type="checkbox" />
              <label className="flex flex-col gap-8 mt-1">
                <h1 className="text-lg font-semibold text-gray-800">1. Lorem ipsum dolor sit amet</h1>
                <p className="text-gray-600 text-sm leading-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.tempora incidunt ut labore et dolore
                  liquam quaerat voluptatem.tempora incidunt ut labore et voluptatem
                </p>
                <img src={images.femaleChef} alt="show-chef" />
                <p className="text-gray-600 text-sm leading-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.tempora incidunt ut labore et dolore
                  liquam quaerat voluptatem.tempora incidunt ut labore et voluptatem
                </p>
              </label>
            </div>

            <div className="flex items-start justify-center gap-5 border-0 border-b border-solid border-gray-200 pb-8">
              <input className="direction-input-checkbox" type="checkbox" />
              <label className="flex flex-col gap-8 mt-1">
                <h1 className="text-lg font-semibold text-gray-800">2. Lorem ipsum dolor sit amet</h1>
                <p className="text-gray-600 text-sm leading-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </label>
            </div>

            <div className="flex items-start justify-center gap-5 border-0 border-b border-solid border-gray-200 pb-8">
              <input className="direction-input-checkbox" type="checkbox" />
              <label className="flex flex-col gap-8 mt-1">
                <h1 className="text-lg font-semibold text-gray-800">3. Lorem ipsum dolor sit amet</h1>
                <p className="text-gray-600 text-sm leading-6">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                  quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </label>
            </div>
          </form>
        </div>
        <AsideFoodieRecipe />
      </div>

      <Subscribe />

      <div className="w-[90%] mx-auto mb-36">
        <h1 className="text-4xl font-semibold text-center">You may like these recipe too</h1>

        <div className="flex gap-10 justify-between mt-20">
          <div className="flex flex-col gap-5 relative justify-between">
            <img className=" object-cover rounded-3xl" src={images.fruitSalad} alt="show-fruit-salid" />
            <img className="absolute right-4 top-5" src={icons.love} alt="show-love" width={50} height={50} />
            <h1 className="text-xl font-semibold leading-7">Mixed Tropical Fruit Salad with Superfood Boosts </h1>
            <div class="flex gap-10 mt-3">
              <div class="flex gap-3">
                <img src={icons.timer} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">30 minutes</span>
              </div>
              <div class="flex gap-3">
                <img src={icons.fork} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">Healthy</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 relative justify-between">
            <img className=" object-cover rounded-3xl" src={images.wagyuBeef} alt="show-wagyuBeef" />
            <img className="absolute right-4 top-5" src={icons.grayLove} alt="show-love" width={50} height={50} />
            <h1 className="text-xl font-semibold leading-7">Big and Juicy Wagyu Beef Cheeseburger</h1>
            <div class="flex gap-10 mt-3">
              <div class="flex gap-3">
                <img src={icons.timer} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">30 minutes</span>
              </div>
              <div class="flex gap-3">
                <img src={icons.fork} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">Western</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 relative justify-between">
            <img className=" object-cover rounded-3xl" src={images.asparagus} alt="show-asparagus" />
            <img className="absolute right-4 top-5" src={icons.love} alt="show-love" width={50} height={50} />
            <h1 className="text-xl font-semibold leading-7">Healthy Japanese Fried Rice with Asparagus</h1>
            <div class="flex gap-10 mt-3">
              <div class="flex gap-3">
                <img src={icons.timer} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">30 minutes</span>
              </div>
              <div class="flex gap-3">
                <img src={icons.fork} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">Healthy</span>
              </div>
            </div>

          </div>
          <div className="flex flex-col gap-5 relative justify-between">
            <img className=" object-cover rounded-3xl" src={images.tacoMeat} alt="show-tacoMeat" />
            <img className="absolute right-4 top-5" src={icons.grayLove} alt="show-love" width={50} height={50} />
            <h1 className="text-xl font-semibold leading-7">Cauliflower Walnut Vegetarian Taco Meat</h1>
            <div class="flex gap-10 mt-3">
              <div class="flex gap-3">
                <img src={icons.timer} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">30 minutes</span>
              </div>
              <div class="flex gap-3">
                <img src={icons.fork} alt="Facebook Icon" width="24" height="24" />
                <span className="text-gray-500">Eastern</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}


export default RecipeDetails; 