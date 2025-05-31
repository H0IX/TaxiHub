import React from 'react';
import { Search, MapPin, Calendar, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-primary-800 dark:bg-gray-900">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" 
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-white dark:text-gray-100 leading-tight">
              Your Ride, <span className="text-accent-400">Your Choice</span>
            </h1>
            <p className="mt-4 text-xl text-gray-300 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Book a taxi from the company you trust. Compare options, prices, and availability all in one place.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="accent" 
                rightIcon={<ChevronRight className="h-5 w-5" />}
              >
                Book a Ride Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white dark:border-gray-300 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700"
              >
                For Taxi Companies
              </Button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="bg-accent-400 rounded-full p-2">
                  <Search className="h-5 w-5 text-primary-800 dark:text-gray-900" />
                </div>
                <p className="ml-2 text-white dark:text-gray-300 font-medium">
                  100+ Taxi Companies
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-accent-400 rounded-full p-2">
                  <MapPin className="h-5 w-5 text-primary-800 dark:text-gray-900" />
                </div>
                <p className="ml-2 text-white dark:text-gray-300 font-medium">
                  Coverage in 50+ Cities
                </p>
              </div>
              <div className="flex items-center">
                <div className="bg-accent-400 rounded-full p-2">
                  <Calendar className="h-5 w-5 text-primary-800 dark:text-gray-900" />
                </div>
                <p className="ml-2 text-white dark:text-gray-300 font-medium">
                  Book in Advance
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden animate-fade-in">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">Find Your Ride</h2>
              <form className="space-y-4">
                <div>
                  <Input
                    label="Pickup Location"
                    placeholder="Enter your pickup address"
                    leftIcon={<MapPin className="h-5 w-5" />}
                  />
                </div>
                <div>
                  <Input
                    label="Destination"
                    placeholder="Enter your destination"
                    leftIcon={<MapPin className="h-5 w-5" />}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    label="Date"
                    type="date"
                    placeholder="Select date"
                  />
                  <Input
                    label="Time"
                    type="time"
                    placeholder="Select time"
                  />
                </div>
                <Button variant="primary" fullWidth size="lg" className="mt-2">
                  Search Available Taxis
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;