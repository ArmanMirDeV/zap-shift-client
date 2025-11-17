import React from "react";

const FeatureCard = ({ image, title, text }) => {
  return (
    <div
      className={`
        relative flex gap-3 group bg-white rounded-2xl p-8 shadow-lg cursor-pointer
        hover:bg-yellow-300 transform transition duration-300 hover:scale-105 border-gray-400
      `}
    >
      {/* Left side image with vertical dotted line */}
      <div className="flex flex-col items-center mr-8">
        <div className=" flex items-center justify-center bg-white rounded-full shadow-md overflow-hidden">
          <img src={image} alt={title} className="w-24 h-24" />
        </div>
      </div>
      <div className="border border-dotted "></div>
      {/* Right side text */}
      <div className="flex-1 ml-3">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900 transition">
          {title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition">
          {text}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
