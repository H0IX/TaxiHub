import React, { useState } from 'react';
import { MapPin, Search, Filter, Clock, Users, Car, Check } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import TaxiCard from '../components/taxi/TaxiCard';
import { mockTaxiCompanies } from '../data/mockData';
import { TaxiCompany } from '../types/taxi';

const SearchTaxis: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredCompanies = mockTaxiCompanies.filter((company) => {
    if (searchQuery && !company.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !company.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    if (selectedRating !== null && company.rating < selectedRating) {
      return false;
    }
    
    return true;
  });

  const sortCompanies = (companies: TaxiCompany[]): TaxiCompany[] => {
    return [...companies].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.rating - a.rating;
    });
  };

  const sortedCompanies = sortCompanies(filteredCompanies);

  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen pb-16">
      <div className="bg-primary-800 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white mb-6">Find the Perfect Taxi Service</h1>
          
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-grow">
                <Input
                  placeholder="Search by company name or location"
                  leftIcon={<Search className="h-5 w-5" />}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button 
                variant="accent" 
                leftIcon={<Filter className="h-5 w-5" />}
                onClick={() => setShowFilters(!showFilters)}
              >
                Filters
              </Button>
            </div>
            
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 grid grid-cols-1 md:grid-cols-3 gap-4 animate-slide-down">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Minimum Rating
                  </label>
                  <div className="flex space-x-2">
                    {[4, 4.5, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => setSelectedRating(rating === selectedRating ? null : rating)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                          selectedRating === rating
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        {rating}+ ⭐
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Availability
                  </label>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      24/7
                    </button>
                    <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                      Now
                    </button>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Vehicle Type
                  </label>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center">
                      <Car className="h-4 w-4 mr-1" />
                      Standard
                    </button>
                    <button className="px-3 py-1.5 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      Large
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {sortedCompanies.length} Taxi {sortedCompanies.length === 1 ? 'Company' : 'Companies'} Available
            </h2>
            {(searchQuery || selectedRating !== null) && (
              <div className="mt-2 flex flex-wrap gap-2">
                {searchQuery && (
                  <div className="inline-flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mr-1">Search: {searchQuery}</span>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      &times;
                    </button>
                  </div>
                )}
                
                {selectedRating !== null && (
                  <div className="inline-flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-sm text-gray-700 dark:text-gray-300">
                    <span className="mr-1">Rating: {selectedRating}+</span>
                    <button 
                      onClick={() => setSelectedRating(null)}
                      className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      &times;
                    </button>
                  </div>
                )}
                
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedRating(null);
                  }}
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>
            <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-1 px-2 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
              <option>Featured</option>
              <option>Rating: High to Low</option>
              <option>Fleet Size</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCompanies.length > 0 ? (
            sortedCompanies.map(company => (
              <TaxiCard key={company.id} company={company} featured={company.featured} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No taxi companies found</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                We couldn't find any taxi companies matching your criteria. Try adjusting your filters or search terms.
              </p>
              <Button 
                variant="primary" 
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedRating(null);
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchTaxis;