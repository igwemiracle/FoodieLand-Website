import { icons } from "../assets/icons";

const MoreRecipes = ({ recipe }) => {

  return (

    <div className="px-0 relative flex flex-col gap-6">
      <img className="object-cover rounded-3xl" src={recipe.recipeImage} alt="show-fruit-salid" />
      <img className="loveIcon absolute right-4 top-5" src={recipe.isLiked ? icons.love : icons.grayLove} alt="show-love" width={50} height={50} />
      <h1 className="ss:text-[8px] ss:leading-3 sm:text-[20px] sm:leading-6 lg:text-xl font-semibold lg:leading-7">{recipe.description}</h1>
      <div className="flex ss:gap-4 lg:gap-10 mt-3">
        <div className="flex ss:gap-1 sm:gap-3">
          <img className="ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto" src={icons.timer} alt="timer Icon" width="24" height="24" />
          <span className="ss:text-[8px] sm:text-[17px] whitespace-nowrap text-gray-500">30 minutes</span>
        </div>
        <div className="flex ss:gap-1 sm:gap-3">
          <img className="ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto" src={icons.fork} alt="fork Icon" width="24" height="24" />
          <span className="ss:text-[8px] sm:text-[17px] text-gray-500">Healthy</span>
        </div>
      </div>
    </div>
  );
}

export default MoreRecipes;