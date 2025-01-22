import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import { icons } from "../../assets/icons";
import { images } from "../../assets/images";
import { MoreRecipes, SubscribeCard } from "../../components";
import { moreRecipes } from "../../constants";

const BlogPost = () => {
  return (
    <div className="ss:mt-28 sm:mt-48">
      <div className='w-[90%] flex flex-col items-center gap-10 mx-auto mb-20'>
        <h1 className="Header1">
          Full Guide to Becoming a Professional Chef
        </h1>
        <div className="flex lg:flex-row lg:items-center lg:gap-12 ss:flex-col ss:items-start ss:gap-6">
          <div className="flex items-center lg:gap-4 ss:gap-2">
            <img src={icons.smith} alt="show-smith" />
            <p className="font-bold whitespace-nowrap ss:text-xs sm:text-base">John Smith</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-400 ss:hidden lg:block"></div>
          <p className="text-gray-400 ss:text-[10px] lg:text-[13px] sm:text-[12px]">15 March 2022</p>
        </div>
        <p className="paragraph text-center w-[70%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. In feugiat vestibulum velit vel pulvinar.In feugiat vestibulum pulvinar. velit vel pulvinar.
        </p>
      </div>

      <div className="w-[90%] mx-auto">
        <img className="w-full rounded-[30px]" src={images.contactChef} alt="show-chef" />
      </div>

      <div className="flex lg:flex-row flex-col-reverse items-start mx-auto w-[70%] lg:gap-14 ss:gap-10 my-32">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-6">
            <h2 className="lg:text-[24px] font-semibold ss:text-[12px] ss:leading-5 sm:text-[20px] sm:leading-7">
              How did you start out in the food industry?
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit. In feugiat vestibulum velit vel pulvinar. Fusce id mollis
              In feugiat vestibulum velit vel pulvinar. id mollis elementum ex ut suscipit.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="lg:text-[24px] font-semibold ss:text-[12px] ss:leading-5 sm:text-[20px] sm:leading-7">
              What do you like most about your job?
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit. In feugiat vestibulum velit vel pulvinar. Fusce id mollis
              In feugiat vestibulum velit vel pulvinar. id mollis elementum ex ut suscipit.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="lg:text-[24px] font-semibold ss:text-[12px] ss:leading-5 sm:text-[20px] sm:leading-7">
              Do you cook at home on your days off?
            </h2>
            <img src={images.faithCooking} alt="show-faith" />
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit. In feugiat vestibulum velit vel pulvinar. Fusce id mollis
              In feugiat vestibulum velit vel pulvinar. id mollis elementum ex ut suscipit.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="lg:text-[24px] font-semibold ss:text-[12px] ss:leading-5 sm:text-[20px] sm:leading-7">
              What would your advice be to young people looking to get their foot in the door?
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit. In feugiat vestibulum velit vel pulvinar. Fusce id mollis
              In feugiat vestibulum velit vel pulvinar. id mollis elementum ex ut suscipit.
            </p>
          </div>
          <div className="bg-gray-100 w-full py-20 px-6 text-4xl italic leading-[50px]">
            “Lorem ipsum dolor sit amet, consectetur consectetur adipiscing elit. Curabitur ac ultrices odio.”
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="lg:text-[24px] font-semibold ss:text-[12px] ss:leading-5 sm:text-[20px] sm:leading-7">
              What is the biggest misconception that people have about being a professional chef?
            </h2>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit. In feugiat vestibulum velit vel pulvinar. Fusce id mollis
              In feugiat vestibulum velit vel pulvinar. id mollis elementum ex ut suscipit.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          <h2 className="ss:text-[10px] lg:text-[14px] sm:text-[12px] font-semibold whitespace-nowrap">
            SHARE THIS ON:
          </h2>
          <FacebookIcon className="text-black fill-black ss:w-4 ss:h-4 lg:w-[24px] lg:h-[24px]" />
          <TwitterIcon className="text-black fill-black ss:w-4 ss:h-4 lg:w-[24px] lg:h-[24px]" />
          <InstagramIcon className="text-black ss:w-4 ss:h-4 lg:w-[24px] lg:h-[24px]" />
        </div>
      </div>

      <SubscribeCard />

      <div className="w-[90%] mx-auto my-36">
        <h2 className="Header2 text-center mb-20">Check out the delicious recipe</h2>
        <div className="grid ss:grid-cols-2  ss:gap-x-[14px] ss:gap-y-[14px] sm:gap-x-10 sm:gap-y-14 lg:grid-cols-4  lg:gap-y-14">
          {moreRecipes.slice(0, 4).map((recipe, index) => (
            <MoreRecipes key={index} recipe={recipe} />
          )

          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPost;