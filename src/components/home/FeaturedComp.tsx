import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TaxiCard from '../taxi/TaxiCard';
import { mockTaxiCompanies } from '../../data/mockData';

const FeaturedComp: React.FC = () => {
  // Get the top 3 featured companies
  const featuredCompanies = mockTaxiCompanies
    .filter(company => company.featured)
    .slice(0, 3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Featured Taxi Companies</h2>
            <p className="text-gray-600 mt-2">Top-rated companies with excellent service</p>
          </div>
          <Link to="/search" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
            View all companies
            <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCompanies.map(company => (
            <TaxiCard key={company.id} company={company} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedComp;