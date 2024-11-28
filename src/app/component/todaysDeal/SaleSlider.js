'use client'
import React, { useState } from "react";
import SingleCard from "./SingleCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
const SaleSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, content: <SingleCard
        image="/images/product2.avif"
        title="SingleCard title 1"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-100" },
    { id: 2, content: <SingleCard
        image="/images/product2.avif"
        title="SingleCard title"
        description="36,895"
        updatedAt="-5%"
      />, bgColor: "bg-gray-200" },
    { id: 3, content:  <SingleCard
        image="/images/product2.avif"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-300" },
    { id: 4, content:  <SingleCard
        image="/images/product2.avif"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-100" },
    { id: 5, content:  <SingleCard
        image="/images/product2.avif"
        title="SingleCard title"
        description="12,558"
        updatedAt="-5%"
      />, bgColor: "bg-gray-200" },
    { id: 6, content:  <SingleCard
        image="/images/product2.avif"
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
    // <div className="relative h-[calc(100%-48px)] mx-5">
        
    //     <div className="hs-carousel h-full w-full  pr-2 overflow-hidden rounded-lg justify-center items-center">
    //         <div className="relative h-full -mx-1">
    //         <div
    //             className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 gap-2"
    //             style={{
    //             transform: `translateX(-${currentIndex * 100}%)`,
    //             }}
    //         >
    //             {slides.map((slide) => (
    //             <div key={slide.id} className="hs-carousel-slide flex-shrink-0">
    //                 <div className={`flex justify-center h-full `}>
    //                 <div className="max-w-xs h-auto mx-auto w-full ">{slide.content}</div >
    //                 </div>
    //             </div>
    //             ))}
    //         </div>
    //         </div>
    //     </div>

    //     <button
    //         onClick={handlePrev}
    //         type="button"
    //         className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center self-center  items-center w-[46px] h-1/4 text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg"
    //     >
    //         <ChevronLeft/>
    //     </button>

    //     <button
    //         onClick={handleNext}
    //         type="button"
    //         className="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center self-center items-center w-[46px] h-1/4 text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg"
    //     >
    //       <ChevronRight/>
    //     </button>

    // </div>
  <div className="relative h-[calc(100%-48px)] mx-5 group">
    <div className="hs-carousel h-full w-full pr-2 overflow-hidden rounded-lg justify-center items-center">
      <div className="relative h-full -mx-1">
        <div
          className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 gap-2"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="hs-carousel-slide flex-shrink-0">
              <div className="flex justify-center h-full">
                <div className="max-w-xs h-auto mx-auto w-full">{slide.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Previous Button */}
    <button
      onClick={handlePrev}
      type="button"
      className="hs-carousel-prev absolute inset-y-0 start-0 inline-flex justify-center self-center items-center w-[46px] h-1/4 text-gray-800 opacity-0 group-hover:opacity-100 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg transition-opacity"
    >
      <ChevronLeft />
    </button>

    {/* Next Button */}
    <button
      onClick={handleNext}
      type="button"
      className="hs-carousel-next absolute inset-y-0 end-0 inline-flex justify-center self-center items-center w-[46px] h-1/4 text-gray-800 opacity-0 group-hover:opacity-100 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg transition-opacity"
    >
      <ChevronRight />
    </button>
  </div>

  );
};

export default SaleSlider;
