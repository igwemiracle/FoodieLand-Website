import React, { useRef, useState } from "react";
import { images } from "../assets/images";
import Button from "./Button";

const SubscribeCard = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-[90%] mx-auto mb-20 bg-foodie-blue flex justify-center items-start  lg:pt-[4rem] lg:pb-10 relative overflow-hidden ss:rounded-[10px] sm:rounded-[36px] ss:py-4 sm:py-6 lg:rounded-[50px]
      ">
      <img className="object-cover lg:w-[450.54px] lg:h-[400.06px] absolute bottom-0 left-0 rounded-[60px]
      ss:w-[90px] ss:h-[80px] ss:-bottom-[0] ss:-left-[14px] sm:w-[200px] sm:h-[170px]" src={images.salad} alt="salad" />
      <div className="flex flex-col items-center ss:gap-1 sm:gap-3 lg:gap-10">

        <h1 className="ss:text-[16px] sm:text-2xl lg:text-[48px] font-semibold">Deliciousness to your inbox</h1>

        <p className="text-gray-500 lg:w-[650px] lg:text-[16px] text-center ss:text-[4px] ss:leading-2 ss:w-[200px] sm:w-[330px] sm:text-[10px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusm tempor
          incididunt ut labore et dolore magna aliqut enim magna aliqut enim ad minim
        </p>
        <div className="relative lg:mt-5">
          <input
            type="email"
            placeholder="Your email address..."
            className="focus:outline-none ss:py-2 ss:overflow-hidden
             ss:pr-16 ss:text-[5px] ss:mt-4 sm:mt-6
             ss:w-[120px] ss:h-[22px] ss:rounded-[5px] ss:placeholder:text-[5px] ss:pb-2 ss:pl-2  sm:min-w-[280px] sm:h-[35px]
             sm:placeholder:text-[8px] lg:w-[580px] lg:h-[80px] lg:pl-10 lg:rounded-[20px] lg:placeholder:text-[15px] lg:mt-8 lg:text-[15px] 
           "

          />
          <div className="absolute lg:bottom-[0.7rem] lg:right-2 ss:bottom-[3px] ss:right-1 sm:bottom-[6px]">
            <Button className="ss:px-4 ss:text-[4px] ss:h-4 ss:w-4 ss:rounded-[4px] sm:h-5 sm:w-5 sm:text-[6px] sm:py-3 
            sm:px-8 lg:py-7 lg:px-16 lg:rounded-[10px]">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <img className="lg:w-[100px] lg:h-[150px] absolute object-cover lg:right-64 lg:bottom-14
       ss:w-[30px] ss:h-[30px] ss:bottom-5 ss:right-12 sm:w-[55px] sm:h-[55px] sm:bottom-12 sm:right-24
      " src={images.rucola} alt="rucola" />

      <img className="object-cover 
       absolute ss:h-[85px] ss:w-[70px]  ss:bottom-[-29px] ss:-right-[3px] sm:bottom-[-29px] sm:right-[-12px]
      sm:w-[140px] sm:h-[150px] lg:w-[250px] lg:h-[200px] lg:bottom-0 lg:right-0 " src={images.egg} alt="egg" />
    </div>
  );
}

export default SubscribeCard;