import { icons } from "../assets/icons"

const TastyRecipe = ({ tasty }) => {

  return (

    <div className="w-full mb-14 last:mb-0">
      {/* Check if description exists to determine styling */}
      <div className="ss:min-w-[8.4rem] ss:px-[7px] sm:px-[17px] pb-4 relative rounded-[20px] bg-db-gradient to-base">
        {/* Image */}
        <img className="rounded-[15px] object-cover" src={tasty.TastyImage} alt="not-showing" />
        <img className="loveIcon absolute right-[9%] top-[10%]" src={tasty.isLiked ? icons.love : icons.grayLove} alt="love" />
        {/* description and Icons */}
        <div className="my-4">
          <h1 className="ss:text-[9px] sm:text-[20px] lg:text-[26px] font-semibold">{tasty.description}</h1>
          <div className="flex gap-[15px] mt-8">
            {icons.timer && (
              <div className="flexCenter gap-[5px]">
                <img className="ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto" src={icons.timer} alt="timer" width="20" height="20" />
                <span className="ss:text-[8px] sm:text-[17px] whitespace-nowrap ">30 minutes</span>
              </div>
            )}
            {icons.fork && (
              <div className="flexCenter gap-[5px]">
                <img className="ss:w-[14px] ss:h-[14px] sm:min-w-7 sm:h-auto" src={icons.fork} alt="fork" width="20" height="20" />
                <span className="ss:text-[8px] sm:text-[17px]">Snack</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TastyRecipe;