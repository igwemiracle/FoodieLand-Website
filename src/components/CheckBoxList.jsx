import React from "react";

const CheckBoxList = ({ checkboxItems, title }) => {
  return (
    <form className="flex flex-col gap-8">
      <p className="text-2xl ss:text-[12px] ss:leading-5 font-semibold">{title}</p>
      {checkboxItems.map((item, index) => (
        <div key={index} className="flex-item-c-border-b">
          <input type="checkbox" className="peer input-checkbox" />
          <label className="ss:text-[6px] peer-checked:line-through peer-checked:text-gray-200 cursor-pointer">
            {item}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CheckBoxList;