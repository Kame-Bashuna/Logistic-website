"use client";

import { useState, useEffect } from 'react';

const bgImages = [
  "/images/logi.jpg",
  "/images/supply.jpg",
  "/images/combine.jpg",
];

const Hero = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [bgIndex, setBgIndex] = useState(0);

  // Cycle background image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: `url(${bgImages[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome To Logisco Cargo
              <span className="text-primary"> Transport Services</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We provide reliable, efficient, and cost-effective logistics solutions 
              for businesses worldwide. Your cargo, our commitment.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary text-teal-300 text-2xl">
                Get Started
              </button>
              <button className="btn-secondary border-white text-teal-300 hover:bg-white hover:text-secondary text-2xl">
                Learn More
              </button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm opacity-80">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm opacity-80">Delivered Packages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div> */}

          </div>

          {/* Right Content - Tracking Form */}
          <div className="bg-amber-600 rounded-xl p-8 text-black shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-secondary">
              Track Your Shipment
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Tracking Number
                </label>
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option>Express Delivery</option>
                  <option>Standard Shipping</option>
                  <option>Freight Transport</option>
                </select>
              </div>
              
              <button className="btn-primary w-full">
                Track Package
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
