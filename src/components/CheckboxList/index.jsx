import React from "react";

const CheckboxList = ({ checkboxItems, title }) => {
  return (
    <form className="flex flex-col gap-8">
      <p className="text-2xl font-semibold">{title}</p>
      {checkboxItems.map((item, index) => (
        <div key={index} className="flex-item-c-border-b">
          <input type="checkbox" className="peer input-checkbox" />
          <label className="peer-checked:line-through peer-checked:text-gray-200 cursor-pointer">
            {item}
          </label>
        </div>
      ))}
    </form>
  );
};

export default CheckboxList;