import React, { useRef, useState } from "react";

const AboutUs = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="relative w-full max-w-lg my-44 ml-44">
      <div className="relative w-full border border-gray-300 rounded overflow-hidden flex items-center">
        {/* Input field with padding */}
        <input
          ref={inputRef}
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={handleInputChange}
          className="w-full py-2 pl-4 pr-16 bg-transparent text-black outline-none caret-black"
        />

        {/* Button inside the input (right side) */}
        <button
          type="button"
          className="absolute right-4 top-1 px-4 py-2 bg-blue-500 text-white rounded-r border-l border-gray-300 h-8 w-32"
        >
          Btn
        </button>
      </div>

      {/* Preview of full text */}
      <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
        <p className="text-gray-700">Preview of all text:</p>
        <p className="text-black">{inputValue}</p>
      </div>
    </div>
  );
};

export default AboutUs;
