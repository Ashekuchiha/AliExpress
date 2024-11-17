import React from "react";

const Card = ({ image, title, description, updatedAt }) => {
  return (
    <div className="bg-white w-full h-full flex">
        <div className=' w-1/2 h-full'>
        <img
          className="top-0 left-0 object-cover h-full"
          src={image}
          alt={title}
        />
        </div>
        <div>
            <p className="text-black m-5"> {title}</p>
            <p className="text-black mt-10 ml-5"> {description}</p>
        </div>
    </div>
  );
};

export default Card;
