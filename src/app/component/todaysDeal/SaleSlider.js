'use client'
import React, { useState } from "react";
import SingleCard from "./SingleCard";
const SaleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: <SingleCard
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="SingleCard title 1"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-100" },
    { id: 2, content: <SingleCard
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="SingleCard title"
        description="36,895"
        updatedAt="-5%"
      />, bgColor: "bg-gray-200" },
    { id: 3, content:  <SingleCard
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-300" },
    { id: 4, content:  <SingleCard
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-100" },
    { id: 5, content:  <SingleCard
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-200" },
    { id: 6, content:  <SingleCard
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-300" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[calc(100%-48px)] mx-5">
        
        <div className="hs-carousel h-full w-full  pr-2 overflow-hidden rounded-lg justify-center items-center">
            <div className="relative h-full -mx-1">
            <div
                className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 gap-2"
                style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                <div key={slide.id} className="hs-carousel-slide flex-shrink-0">
                    <div className={`flex justify-center h-full `}>
                    <div className="max-w-xs h-auto mx-auto w-full ">{slide.content}</div >
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>

        <button
            onClick={handlePrev}
            type="button"
            className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center self-center  items-center w-[46px] h-1/4 text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
        >
            <span className="text-2xl" aria-hidden="true">
            <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m15 18-6-6 6-6"></path>
            </svg>
            </span>
            <span className="sr-only">Previous</span>
        </button>

        <button
            onClick={handleNext}
            type="button"
            className="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center self-center items-center w-[46px] h-1/4 text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
        >
            <span className="sr-only">Next</span>
            <span className="text-2xl" aria-hidden="true">
            <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
            </span>
        </button>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
            {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`size-3 border border-gray-400 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-blue-700 border-blue-700" : ""
                }`}
            ></button>
            ))}
        </div>

    </div>
  );
};

export default SaleSlider;
