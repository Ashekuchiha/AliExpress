import Image from "next/image";
import React from "react";

const ProductCard = ({ image, brand, price, bulkPrice, retailPrice }) => {
  return (
    <div className="max-w-xs p-4 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
      {/* Image */}
      <div className="relative mb-3">
        {/* <img
          src={image}
          alt={brand}
          className="w-full h-48 object-cover rounded-lg"
        /> */}
        <Image
          className="w-full h-48 object-cover rounded-lg"
          src={image} // `image` should be a URL or path to the image
  alt={"title"}  // `title` is used as the alt text for the image
  layout="fill" // Ensures the image takes the full space of its parent
  objectFit="cover" // Ensures the image covers the entire area
/>
        <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
          {brand}
        </span>
      </div>
      {/* Details */}
      <div className="text-center">
        <p className="text-xl font-bold text-gray-800">
          {price} <span className="text-sm text-gray-500">each, ≥3 pcs</span>
        </p>
        <p className="text-sm text-gray-600">
          Retail: <span className="font-semibold">{retailPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
