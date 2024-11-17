import React from "react";

const SingleCard = ({ image, title, description, updatedAt }) => {
  return (
    <div className="bg-white w-full h-full transform transition duration-300 hover:bg-slate-300 hover:scale-105">
        <img
          className="top-0 left-0 object-cover p-4"
          src={image}
          alt={title}
        />
        <p className="text-black text-center  font-extrabold text-xl pt-5 pb-2"> {title}</p>
        <p className="text-black text-center  font-extrabold pb-2"> {description}</p>
        <p className="text-black text-center  font-extrabold bg-red-600"> {updatedAt}</p>
    </div>
  );
};

export default SingleCard;
