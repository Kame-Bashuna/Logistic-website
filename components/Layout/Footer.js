import React from 'react';
import { Mail, Phone, MapPin, Check } from 'lucide-react';


export default function Footer() {
  return (
    <section id="footer">
    
    <div className="min-h-screen   bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 ">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
       

         
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 ">
       
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Get Best Rate Card */}
          <div className="lg:col-span-1">
            <div className="bg-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white rounded"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Get best rate for your</h3>
                  <h3 className="font-bold text-lg">freight transport</h3>
                </div>
              </div>
              <p className="text-sm mb-6 text-orange-100">
                24/7 customer support and instant advice. Up to 70% savings on price with an expert Carriers
              </p>
              <button className="w-full bg-white text-orange-500 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
                <span>Get the best rate</span>
                <Check className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industry Served */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Industry Served</h3>
              <ul className="space-y-3">
                {['Frozen Food', 'Automobile', 'Machineries', 'Export Import', 'Cargo Freight', 'Warehousing'].map((item) => (
                  <li key={item} className="text-teal-200 hover:text-white cursor-pointer transition-colors flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Company Info</h3>
              <ul className="space-y-3">
                {['About Us', 'Our Expertise', 'Latest News', 'Transporters', 'Terms & Condition', 'Case Studies'].map((item) => (
                  <li key={item} className="text-teal-200 hover:text-white cursor-pointer transition-colors flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-white text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {['Less Than Truckload', 'Rail Freight Shipping', 'Hot Shot Trucking', 'Less-than-Truckload', 'Intermodal service', 'Container Freight'].map((item) => (
                  <li key={item} className="text-teal-200 hover:text-white cursor-pointer transition-colors flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>


          </div>
        </div>

     
      </main>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="flex items-center space-x-4 bg-teal-800 bg-opacity-50 rounded-lg p-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-teal-200 text-sm">E-MAIL US</p>
              <p className="text-white font-semibold">Services.Logiscocare.Com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 bg-teal-800 bg-opacity-50 rounded-lg p-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-teal-200 text-sm">SUPPORT 24/7</p>
              <p className="text-white font-semibold">+1 23356 5678 899</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-4 bg-teal-800 bg-opacity-50 rounded-lg p-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-teal-200 text-sm">LOGISCO HEADQUARTER</p>
              <p className="text-white font-semibold">116th Ave, WA 98058-5095,USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-6 border-t border-teal-600 ">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ">
          <p className="text-white text-sm">
            © 2023 Logisco transportation & logistics / All rights reserved
          </p>
          <div className="flex space-x-6 text-white text-sm">
            <p className='text-white text-sm' >
              Privacy
            </p>

              <p className='text-white text-sm' >
              Terms & Conditions
            </p>

             <p className='text-white text-sm' >
             Site map
            </p>

             <p className='text-white text-sm' >
           Contact
            </p>

          </div>
        </div>
      </footer>

     
    </div>


    </section>
  );
}