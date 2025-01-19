import React from 'react';

import { directionsData } from "../constants";



export function DirectionItem({ title, description, image }) {
  return (
    <div className="flex items-start justify-center lg:gap-5 ss:gap-2 border-0 border-b border-solid border-gray-200 pb-8">
      <div className="flex items-center justify-center mt-1">
        <input className="peer input-checkbox" type="checkbox" />
      </div>
      <label className="flex flex-col gap-8">
        <h1 className="text-2xl ss:text-[12px] ss:leading-5 font-semibold">{title}</h1>
        {description.map((text, index) => (
          <React.Fragment key={index}>
            <p className="paragraph">{text}</p>
            {image && index === 0 && <img className='object-cover ' src={image} alt="direction" />}
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
