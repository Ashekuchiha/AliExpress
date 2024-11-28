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
        <div className="relative w-full h-48 rounded-lg">
          <Image
            src={image} // `image` is a URL or path to the image
            alt="title" // Descriptive alt text for accessibility
            fill // Allows the image to fill the parent container
            className="object-cover rounded-lg" // Ensures the image maintains the desired styling
          />
        </div>
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
