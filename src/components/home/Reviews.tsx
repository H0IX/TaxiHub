import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frequent Traveler',
    content: 'TaxiHub has made it so easy to find reliable taxis wherever I go. I love being able to choose from different companies and see the ratings before booking.',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Business Executive',
    content: 'As someone who travels for business regularly, I appreciate the reliability and consistency of the service. The advance booking feature is a game-changer for my airport transfers.',
    rating: 4,
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'City Resident',
    content: 'I\'ve been using TaxiHub for months now and I\'m impressed with how many local taxi companies are available. It\'s nice to support local businesses while getting great service.',
    rating: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">What Our Users Say</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
            Hear from passengers who use TaxiHub every day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 relative">
              <div className="absolute -top-4 -right-4 bg-accent-400 rounded-full p-2">
                <Quote className="h-5 w-5 text-white" />
              </div>
              
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating 
                        ? 'text-accent-400 fill-accent-400' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;