import Image from "next/image";
import React from "react";

const SingleCard = ({ image, title, description, updatedAt }) => {
  return (
    <div className="bg-white w-full h-full transform transition duration-300 hover:bg-slate-300 hover:scale-105">
<Image
  className="top-0 left-0 object-cover p-4"
  src={image} // The dynamic image URL or path
  alt={title} // Alt text for the image, typically passed as a prop
  width={500} // Define a fixed width (example: 500px)
  height={500} // Define a fixed height (example: 500px)
 />
        <p className="text-black text-center  font-extrabold text-xl pt-5 pb-2"> {title}</p>
        <p className="text-black text-center  font-extrabold pb-2"> {description}</p>
        <p className="text-black text-center  font-extrabold bg-red-600"> {updatedAt}</p>
    </div>
  );
};

export default SingleCard;
