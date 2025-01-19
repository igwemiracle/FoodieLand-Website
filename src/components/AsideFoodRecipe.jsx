import { images } from "../assets/images";
import { otherFoodRecipe } from "../constants";

const AsideFoodieRecipe = () => {
  return (
    <aside className="basis-[45%] flex flex-col gap-6">
      <h1 className="heading1">Other Recipe</h1>
      <div className="flex flex-col gap-5 ss:gap-3 ss:grid ss:grid-cols-2">
        {otherFoodRecipe.map((otherRecipe, index) => (
          <div key={index} className="flex lg:flex-row lg:gap-12  items-center ss:flex-col ss:gap-2 pr-2">
            <img className="flex-shrink-0 w-[230px] h-[120px] object-cover rounded-3xl" src={otherRecipe.otherImage} alt="meat" />
            <div className="flex flex-col gap-5">
              <h1 className="text-xl ss:text-[10px] ss:leading-4 font-semibold leading-7">{otherRecipe.title}</h1>
              <p className="text-sm ss:text-[8px] font-medium text-gray-500">By {otherRecipe.author}</p>
            </div>
          </div>
        ))}

      </div>
      <img className="mt-12 h-[auto] object-cover" src={images.ads} alt="show-ads" />
    </aside>
  );
}

export default AsideFoodieRecipe;