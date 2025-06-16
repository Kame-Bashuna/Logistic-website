
"use client";
import Image from "next/image";

const features = [
  "Logistics Consulting",
  "Worldwide Coverage",
  "Reliable Warehousing Solutions",
  "Flexible, Modern Fleet",
  "Real-time Monitoring Technology",
  "Certified, Experienced Staff",
];

export default function About() {
  return (
    <section className="py-20 bg-white" id="whywethebest">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Image */}
        <div className="md:w-1/2 relative">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/best.jpg" 
              alt="Logisco Logistics - About"
              width={1040}
              height={540}
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full z-[-1]"></div>
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-blue-950">
            Why we are considered the best in business
          </h2>
          <p className="text-lg text-black mb-6 ">
            At Logisco, we combine decades of experience with cutting-edge technology to deliver logistics solutions that are reliable, efficient, and tailored to your needs. Our commitment to excellence and customer satisfaction sets us apart in the industry.
          </p>
          {/* Features list with colored bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-700">
                {/* Colored bullet: larger and more visible */}
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-base font-medium">{feature}</span>
              </li>

              
            ))}
          </ul>
          <button className="btn-primary text-teal-600 text-2xl">
            Learn More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
