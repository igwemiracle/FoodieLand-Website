import React from 'react';

import { directionsData } from "../constants";



export function DirectionItem({ title, description, image }) {
  return (
    <div className="flex items-start justify-center lg:gap-5 ss:gap-2 border-0 border-b border-solid border-gray-200 pb-8">
      <div className="flex items-center justify-center mt-[2px]">
        <input className="peer input-checkbox" type="checkbox" />
      </div>
      <label className="flex flex-col gap-2">
        <h1 className="text-2xl ss:text-[10px] sm:text-xl ss:leading-4 font-semibold">{title}</h1>
        {description.map((text, index) => (
          <React.Fragment key={index}>
            <p className="ss:text-[7px] ss:font-normal sm:text-[16px] sm:leading-7 ss:leading-3 text-gray-600 sm:ml-6">{text}</p>
            {image && index === 0 && <img className='object-cover sm:ml-6' src={image} alt="direction" />}
          </React.Fragment>
        ))}
      </label>
    </div>
  );
}

function DirectionsForm() {
  return (
    <form className="flex flex-col gap-8 mt-[5rem]">
      {directionsData.map((direction) => (
        <DirectionItem
          key={direction.id}
          title={direction.title}
          description={direction.description}
          image={direction.image}
        />
      ))}
    </form>
  );
}

export default DirectionsForm;
