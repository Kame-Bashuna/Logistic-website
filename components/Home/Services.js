
import { TruckIcon, GlobeAltIcon, ClockIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: TruckIcon,
    title: 'Ground Transport',
    description: 'Reliable ground transportation services for all your cargo needs across the country.',
    bgImage: '/images/transport.png', 
  },
  {
    icon: GlobeAltIcon,
    title: 'International Shipping',
    description: 'Global logistics solutions connecting your business to markets worldwide.',
    bgImage: '/images/international.webp',
  },
  {
    icon: ClockIcon,
    title: 'Express Delivery',
    description: 'Fast and secure express delivery services for time-sensitive shipments.',
    bgImage: '/images/expres.jpeg',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4 text-blue-950">
            Our Services
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We provide comprehensive logistics solutions tailored to meet your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow bg-white overflow-hidden"
              style={{
                backgroundImage: `url(${service.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 ">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
