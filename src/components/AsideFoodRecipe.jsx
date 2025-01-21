import { images } from "../assets/images";
import { otherFoodRecipe } from "../constants";

const AsideFoodieRecipe = ({ title }) => {
  return (
    <aside className="basis-[45%] flex flex-col gap-6">
      <h1 className="ss:text-sm sm:text-2xl lg:text-[34px] font-semibold">{title}</h1>
      <div className="flex flex-col lg:gap-6 ss:gap-3">
        {otherFoodRecipe.map((otherRecipe, index) => (
          <div key={index} className="flex lg:flex-row sm:px-0 lg:gap-12  items-center ss:flex-col ss:gap-2 lg:pr-2">
            <img className="flex-shrink-0 sm:w-full sm:h-[180px] lg:w-[230px] lg:h-[120px] object-cover rounded-3xl" src={otherRecipe.otherImage} alt="meat" />
            <div className="flex flex-col gap-5">
              <h1 className="text-xl ss:text-[10px] ss:leading-4 sm:text-xl lg:text-[22px] font-semibold leading-7">{otherRecipe.title}</h1>
              <p className="sm:text-sm ss:text-[8px] font-medium text-gray-500">By {otherRecipe.author}</p>
            </div>
          </div>
        ))}

      </div>
      <img className="mt-12 h-[auto] object-cover" src={images.ads} alt="show-ads" />
    </aside>
  );
}

export default AsideFoodieRecipe;