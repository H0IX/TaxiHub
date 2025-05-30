import React from 'react';
import { Star, MapPin, Users, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { TaxiCompany } from '../../types/taxi';

interface TaxiCardProps {
  company: TaxiCompany;
  featured?: boolean;
}

const TaxiCard: React.FC<TaxiCardProps> = ({ company, featured = false }) => {
  return (
    <div className={`card group transition-all duration-300 ${featured ? 'border-accent-300 bg-accent-50' : ''}`}>
      {featured && (
        <div className="bg-accent-400 text-xs font-semibold px-3 py-1 text-gray-900 flex justify-center">
          FEATURED
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden mr-4 flex-shrink-0">
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 font-bold text-xl">
                  {company.name.charAt(0)}
                </div>
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {company.name}
              </h3>
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(company.rating) 
                          ? 'text-accent-400 fill-accent-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {company.rating.toFixed(1)} ({company.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{company.location}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="h-4 w-4 mr-2 text-gray-400" />
              <span>{company.availability}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="h-4 w-4 mr-2 text-gray-400" />
              <span>{company.fleetSize} vehicles</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{company.description}</p>
          
          <div className="flex space-x-3">
            <Button variant="primary" className="flex-1">
              Book Now
            </Button>
            <Button variant="secondary" className="flex-1">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxiCard;