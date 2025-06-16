import React from 'react';
import Image from 'next/image';
import { section } from 'framer-motion/client';

const DeliveryBanner = () => {
  return (
   
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-lg">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/safety.jpg" 
          alt="Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-blue-500 opacity-80"></div>
      </div>

      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600 to-transparent opacity-80"></div>
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-5 right-32 w-20 h-20 bg-white/15 rounded-full"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-between h-full px-8 md:px-12">
        {/* Left Content */}
        <div className="flex-1 max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4 leading-tight">
            We ensure safe transportation & delivery
          </h1>
          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            We prioritize safety in every step of our transportation process. Our team follows strict protocols to protect your goods.
            Reliable delivery is our commitment. We track shipments closely to ensure timely arrival.
          </p>
        </div>

        {/* Right Content - Delivery Person */}
        <div className="flex-shrink-0 relative">
          {/* Contact Info Badge */}
          <div className="absolute -top-8 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center space-x-2 z-20">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
            </div>
            <span className="text-gray-700 font-medium text-sm">(00) 123 456 811</span>
          </div>

         {/* Delivery Person Image Container */}
<div className="relative w-48 h-48 md:w-56 md:h-56 rounded-lg overflow-hidden">
  <Image
    src="/images/safety.jpg" 
    alt="Delivery Person"
    fill
    className="object-cover"
  />
</div>


          
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>



  );
};

export default DeliveryBanner;
