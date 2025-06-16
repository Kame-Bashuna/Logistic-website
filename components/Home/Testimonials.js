

"use client";
import React, { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const LogiscoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    {
      id: 1,
      category: "AIR FREIGHT",
      title: "Relief Transportation For United Nations",
      image: "/images/air.jpg",
      bgColor: "bg-gradient-to-br from-blue-900 to-slate-800",
      description: "Airplane and logistics imagery",
    },
    {
      id: 2,
      category: "CARGO FREIGHT",
      title: "200 Matric ton Grain Freight For Mexico",
      image: "/images/cargo.jpg",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
      description: "Cargo truck imagery",
    },
    {
      id: 3,
      category: "CONTAINER SHIPPING",
      title: "Shipping Large container From China to USA",
      image: "/images/ship.jpg",
      bgColor: "bg-gradient-to-br from-slate-700 to-slate-900",
      description: "Container port imagery",
    },
    {
      id: 4,
      category: "LAND FREIGHT",
      title: "200 Matric ton Grain Freight For Mexico",
      image: "/images/land.jpg",
      bgColor: "bg-gradient-to-br from-orange-800 to-yellow-600",
      description: "Truck on highway imagery",
    },
  ];


  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }, [slides.length]);


  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);


  const handleDotClick = useCallback((index) => {
    setCurrentIndex(index);
  }, []);


  return (
    <section id="cases" className="bg-gray-50">
      <div className="container mx-auto px-6 max-w-7xl py-6 min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-blue-950">Best Cases by Logisco</h1>
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>


        {/* Slides container with responsive layout and custom class */}
        <div className="slides-container flex flex-col sm:flex-row sm:flex-wrap md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-stretch h-auto md:h-[400px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer flex flex-col justify-between ${
                slide.bgColor
              } ${
                index === currentIndex
                  ? "ring-4 ring-orange-500"
                  : "hover:ring-2 hover:ring-orange-300"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "no-repeat",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
              </div>


              <div className="relative p-6 flex flex-col justify-between h-full">
                {/* Top row */}
                <div className="flex justify-between items-start mt-56">
                  <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                    {slide.category}
                  </span>
                  {slide.id === 2 && (
                    <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center ">
                      <span className="text-white text-xs font-bold "></span>
                    </div>
                  )}
                </div>


                {/* Illustration Placeholder */}
                <div className="flex-1 flex items-center justify-center my-4">
                  {/* Optional: Your existing conditionals for illustrations go here */}
                </div>


                <p className="text-white text-lg leading-tight">{slide.title}</p>
              </div>


              {/* Selection Overlay */}
              {index === currentIndex && (
                <div className="absolute inset-0 bg-orange-500/20 border-2 border-orange-500 rounded-2xl pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>


        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>


     
      

        
      </div>
    </section>
  );
};


export default LogiscoSlideshow;


