import Image from "next/image";
import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="bg-white w-full h-full flex">

        <div className=' w-1/2 h-full'>
        <img
          className="top-0 left-0 object-cover h-full"
          src={image}
          alt={title}
        />
        {/* <Image
  className="top-0 left-0 object-cover h-full"
  src={image} // `image` should be a URL or path to the image
  alt={title}  // `title` is used as the alt text for the image
  layout="fill" // Ensures the image takes the full space of its parent
  objectFit="cover" // Ensures the image covers the entire area
/> */}
        </div>

        <div>
            <p className="text-black m-5"> {title}</p>
            <p className="text-black mt-10 ml-5"> {description}</p>
        </div>
    </div>
  );
};

export default Card;
