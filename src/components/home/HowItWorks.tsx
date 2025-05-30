import React from 'react';
import { Search, Calendar, CreditCard, Car } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Search',
    description: 'Enter your location and destination to find available taxi companies in your area.',
    icon: Search,
    color: 'bg-primary-100 text-primary-600',
  },
  {
    id: 2,
    title: 'Compare & Select',
    description: 'Browse ratings, prices, and available vehicles from different taxi companies.',
    icon: Calendar,
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    id: 3,
    title: 'Book & Pay',
    description: 'Choose your preferred taxi company and complete your booking with secure payment.',
    icon: CreditCard,
    color: 'bg-accent-100 text-accent-600',
  },
  {
    id: 4,
    title: 'Enjoy Your Ride',
    description: 'Track your taxi in real-time and enjoy a comfortable ride to your destination.',
    icon: Car,
    color: 'bg-success-50 text-success-700',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How TaxiHub Works</h2>
          <p className="mt-4 text-xl text-gray-600">
            Book your ride in just a few simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="h-8 w-8" />
                </div>
                
                {step.id < steps.length && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                    <div className="absolute right-0 -top-1 h-2 w-2 rounded-full bg-gray-300"></div>
                  </div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;