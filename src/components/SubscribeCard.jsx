import React, { useRef, useState } from "react";
import { images } from "../assets/images";
import InputField from "./InputField";
import Button from "./Button";

const SubscribeCard = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      className="w-[90%] mx-auto lg:mb-20 ss:mb-14 bg-foodie-blue flex justify-center items-start relative overflow-hidden lg:py-20   lg:rounded-[60px] ss:py-4  ss:rounded-[20px] md:py-6 sm:py-8
      ">
      <img
        src={images.salad}
        alt="salad"
        className="object-cover lg:w-[450.54px] lg:h-[400.06px] absolute bottom-0 left-0 lg:rounded-[60px]
        ss:w-[70px] ss:h-[80px]
        md:w-[130px] md:h-[140px]
        sm:w-[140px] sm:h-[160px]" />

      <div className="flex flex-col items-center lg:gap-10 ss:gap-1 md:gap-3">
        <h1 className=" lg:text-[56px] font-semibold ss:text-[16px] md:text-[27px] sm:text-3xl">
          Deliciousness to your inbox
        </h1>
        <p className="text-gray-500 lg:w-[750px] lg:text-[16px] text-center lg:leading-7
        ss:text-[6px] ss:leading-[10px] ss:w-[200px]
        md:text-[12px] md:leading-[18px] md:w-[355px]
        sm:text-[10px]">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusm tempor
          incididunt ut labore et dolore magna enim ad enim ad minim enim magna aliqut enim ad minim
        </p>
        <InputField>
          Your email address...
        </InputField>
      </div>
      <img
        src={images.rucola}
        alt="rucola"
        className="lg:w-[100px] lg:h-[150px] absolute object-cover lg:right-[17rem] lg:bottom-14
        ss:w-[15px] ss:h-[25px] ss:right-12 ss:bottom-5
        md:w-[40px] md:h-[45px] md:right-[6.5rem] md:bottom-8
        sm:bottom-14" />

      <img
        src={images.egg}
        alt="egg" className="object-cover absolute lg:w-[260px] lg:h-[260px] bottom-0 right-0 
        ss:h-[55px] ss:w-[50px]
        md:h-[100px] md:w-[115px]
        sm:h-[120px]" />
    </div>
  );
}

export default SubscribeCard;