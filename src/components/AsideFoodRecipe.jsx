import { images } from "../assets/images";

const AsideFoodieRecipe = () => {
  return (
    <aside className="basis-[33%] flex flex-col gap-6">
      <h1 className="text-4xl font-semibold">Other Recipe</h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-12 pr-2">
          <img className="flex-shrink-0 w-[230px] h-[120px] object-cover rounded-3xl" src={images.meat} alt="meat" />
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold leading-7">Chicken Meatball with Creamy Chees...</h1>
            <p className="text-sm font-medium text-gray-500">By Andreas Paula</p>
          </div>
        </div>

        <div className="flex items-center gap-12 pr-2">
          <img className="flex-shrink-0 w-[230px] h-[120px] object-cover rounded-3xl" src={images.spag} alt="spag" />
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold leading-7">The Creamiest Creamy Chicken an...</h1>
            <p className="text-sm font-medium text-gray-500">By Andreas Paula</p>
          </div>
        </div>

        <div className="flex items-center gap-12 pr-2">
          <img className="flex-shrink-0 w-[230px] h-[120px] object-cover rounded-3xl" src={images.fish} alt="fish" />
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold leading-7">The Best Easy One Pot Chicken and Rice</h1>
            <p className="text-sm font-medium text-gray-500">By Andreas Paula</p>
          </div>
        </div>
      </div>
      <img className="mt-12 h-[auto] object-cover" src={images.ads} alt="show-ads" />
    </aside>
  );
}

export default AsideFoodieRecipe;