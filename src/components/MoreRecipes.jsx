import { icons } from "../../assets/icons"

const MoreRecipes = ({ recipe }) => {

  return (

    <div className="relative flex flex-col gap-6">
      <img className=" object-cover rounded-3xl" src={recipe.recipeImage} alt="show-fruit-salid" />
      <img className="absolute right-4 top-5" src={recipe.isLiked ? icons.love : icons.grayLove} alt="show-love" width={50} height={50} />
      <h1 className="text-xl font-semibold leading-7">{recipe.description}</h1>
      <div className="flex gap-10 mt-3">
        <div className="flex gap-3">
          <img src={icons.timer} alt="Facebook Icon" width="24" height="24" />
          <span className="text-gray-500">30 minutes</span>
        </div>
        <div className="flex gap-3">
          <img src={icons.fork} alt="Facebook Icon" width="24" height="24" />
          <span className="text-gray-500">Healthy</span>
        </div>
      </div>
    </div>
  );
}

export default MoreRecipes;