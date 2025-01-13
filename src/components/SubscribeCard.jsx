import { images } from "../assets/images";
import Button from "./Button";

const Subscribe = () => {
  return (
    <div className="w-[90%] mx-auto mb-28 bg-foodie-blue flex justify-center items-start rounded-[60px]
      pt-[4rem] pb-10 relative 
      ">
      <img className="w-[450.54px] h-[400.06px] absolute bottom-0 left-0 rounded-[60px] " src={images.salad} alt="salad" />
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-[53px] font-semibold">Deliciousness to your inbox</h1>
        <p className="w-[725px] text-[16px] text-gray-500 leading-7 text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqut enim magna aliqut enim ad minim
        </p>
        <div className="relative">
          <input type="email" placeholder="Your email address..." className="w-[580px] h-[80px] mt-12 rounded-[24px] pl-10 focus:outline-none" />
          <div className="absolute bottom-[0.6rem] right-2">
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
      <img className="w-[100px] h-[150px] absolute object-cover right-[18rem] top-[15rem] " src={images.rucola} alt="rucola" />
      <img className="object-cover w-[290.06px] h-[355.62] absolute bottom-0 right-0 rounded-[60px]" src={images.egg} alt="egg" />
    </div>
  );
}

export default Subscribe;