import React from 'react'
import Button from './Button'

export default function InputField({ children, className, buttonText = "Subscribe" }) {
  return (
    <div className="relative lg:mt-12 ss:mt-2 md:mt-6">
      <input
        type="email"
        placeholder={children}
        className={`focus:outline-none  
        lg:pl-10 lg:pr-[11rem] lg:rounded-[20px] lg:placeholder:text-[18px] lg:text-[22px] lg:w-[580px] lg:h-[80px]
        ss:w-[130px] ss:h-[22px] ss:pl-3 ss:pr-[2.3rem] ss:rounded-[5px] ss:text-[6px] ss:placeholder:text-[6px]
        md:w-[270px] md:h-[40px] md:pl-6 md:pr-[5.9rem] md:rounded-[8px] md:text-[11px] md:placeholder:text-[8px]
        sm:w-[350px] sm:h-[50px] sm:pl-7 sm:pr-[7rem] sm:text-[14px] ${className}`}
      />
      <Button
        className="absolute lg:top-[12px] lg:right-3 lg:py-7 lg:px-20 lg:rounded-[16px]
          ss:px-6 ss:text-[4px] ss:h-4 ss:w-4 ss:right-1 ss:top-[8px] ss:rounded-[4px]
          md:px-10 md:text-[6px] md:h-7 md:w-7 md:right-2 md:top-[6px]
          sm:px-12 sm:top-[8px] sm:text-[7px] sm:rounded-[10px]">
        {buttonText}
      </Button>
    </div>
  )
}
