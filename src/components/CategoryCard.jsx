import React from 'react';

const CategoryCard = ({ gradient, textShadowClass, emoji, label }) => {
  return (
    <div className={`bg-gradient-to-t ${gradient} rounded-[25px] py-8 px-[4rem] border-t border-none flex flex-col justify-end items-center gap-[45px] size`}>
      <span className={`text-8xl ${textShadowClass}`}>{emoji}</span>
      <p className='text-[1rem] font-medium'>{label}</p>
    </div>
  );
};

export default CategoryCard;
