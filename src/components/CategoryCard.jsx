import React from 'react';

const CategoryCard = ({ emoji }) => {
  return (
    <img src={emoji} alt="show-emojis" className="object-cover ss:w-[120px] sm:w-[180px] lg:w-[210px] " />
  );
};

export default CategoryCard;
