'use client';
import Image from "next/image";
import { useState } from "react";

const ProductCard = ({ imageSrc, title, price, reviews, sold }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative">
        {/* <img
          src={imageSrc}
          alt={title}
          width={300}
          height={300}
          className="object-cover rounded-md"
        /> */}
        <Image
  src={imageSrc} // `imageSrc` should be the URL or path to the image
  alt={title} // `title` is used as the alt text
  width={300} // Set the width of the image
  height={300} // Set the height of the image
  className="object-cover rounded-md" // Apply your Tailwind CSS classes
/>
      </div>

      {/* Product Details */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <div className="flex items-center space-x-1 text-yellow-500 mt-2">
          {Array.from({ length: reviews }, (_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
        <p className="text-sm text-gray-500">{sold}+ sold</p>
        <p className="mt-2 text-lg font-bold text-indigo-600">BDT {price}</p>
      </div>

      {/* Hover Buttons */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-[-0.7] flex flex-col justify-end items-center space-y-2 pb-4 h-[125%] z-50 ">
          <button className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800 ">
            See preview
          </button>
          <button className="bg-black text-white py-2 px-4 rounded-md w-full hover:bg-gray-800 ">
            Similar items
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
