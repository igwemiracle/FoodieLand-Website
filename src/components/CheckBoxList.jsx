import React from "react";

const CheckBoxList = ({ checkboxItems, title }) => {
  return (
    <form className="flex flex-col ss:gap-4  sm:gap-12 mt-12">
      <p className="lg:text-2xl ss:text-[12px] sm:text-xl ss:leading-5 font-semibold ss:mb-4">{title}</p>
      {checkboxItems.map((item, index) => (
        <div key={index} className="flex-item-c-border-b">
          <input type="checkbox" className="peer input-checkbox" />
          <label className="ss:text-[8px] sm:text-[16px] text-gray-600 peer-checked:line-through peer-checked:text-gray-200 cursor-pointer">
            {item}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CheckBoxList;