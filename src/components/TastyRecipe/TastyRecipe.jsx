import { icons } from "../../assets/icons"

const TastyRecipe = ({ tasty }) => {

  return (

    <div className="w-full mb-12 last:mb-0">
      {/* Check if description exists to determine styling */}
      {tasty.description ? (
        // Styled container for recipes with description
        <div className=" px-[17px] pb-4 relative rounded-[20px] bg-gradient-to-t from-[#dbedf1] to-[#FFFFFF]">
          {/* Image */}
          <img className="rounded-[20px] object-cover" src={tasty.TastyImage} alt="not-showing" />
          <img className="absolute top-[10%] right-[9%]" src={tasty.isLiked ? icons.love : icons.grayLove} alt="love" />

          {/* description and Icons */}
          <div className="my-4">
            <h1 className="sm:text-[20px] lg:text-[27px] font-semibold">{tasty.description}</h1>
            <div className="flex gap-[15px] mt-8">
              {icons.timer && (
                <p className="flex items-center justify-center gap-[10px]">
                  <img src={icons.timer} alt="timer" width="20" height="20" />
                  <span>30 minutes</span>
                </p>
              )}
              {icons.fork && (
                <p className="flex items-center justify-center gap-[10px]">
                  <img src={icons.fork} alt="fork" width="20" height="20" />
                  <span>Snack</span>
                </p>
              )}
            </div>
          </div>
        </div>
      ) : (
        // No container, just the image
        <img className="w-[470px] sm:h-[345px] lg:h-[480px]" src={tasty.TastyImage} alt="not-showing" />
      )}
    </div>
  );
}

export default TastyRecipe;