'use client'
import React, { useState } from "react";
import Logo from "./nav/Logo";
import Card from "./Card";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: <Card
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="Card title"
        description="12,558"
        updatedAt="5 mins ago"
      />, bgColor: "bg-gray-100" },
    { id: 2, content: <Card
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="Card title"
        description="36,895"
        updatedAt="5 mins ago"
      />, bgColor: "bg-gray-200" },
    { id: 3, content:  <Card
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="Card title"
        description="12,558"
        updatedAt="5 mins ago"
      />, bgColor: "bg-gray-300" },
    { id: 4, content:  <Card
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="Card title"
        description="12,558"
        updatedAt="5 mins ago"
      />, bgColor: "bg-gray-100" },
    { id: 5, content:  <Card
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="Card title"
        description="12,558"
        updatedAt="5 mins ago"
      />, bgColor: "bg-gray-200" },
    { id: 6, content:  <Card
        image="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        title="Card title"
        description="12,558"
        updatedAt="5 mins ago"
      />, bgColor: "bg-gray-300" },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-10/12">
      <div className="justify-center h-full">
        <div className="hs-carousel w-full overflow-hidden rounded-lg h-36 justify-center items-center">
            <div className="relative min-h-72 -mx-1">
            <div
                className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 gap-2"
                style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                <div key={slide.id} className="hs-carousel-slide flex-shrink-0">
                    <div className={`flex justify-center h-1/2 `}>
                    <div className="max-w-xs h-auto mx-auto w-full">{slide.content}</div >
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
    </div>
  );
};

export default Slider;
