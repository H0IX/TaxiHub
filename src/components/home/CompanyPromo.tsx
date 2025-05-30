import React from 'react';
import { Gauge, CheckCircle, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

const CompanyPromo: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">Own a Taxi Company?</h2>
            <p className="mt-4 text-xl text-gray-300">
              Join TaxiHub and expand your customer base. Manage bookings, increase visibility, and grow your business.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Increase Your Bookings</h3>
                  <p className="text-gray-300">Get connected with thousands of potential customers looking for taxi services in your area.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Streamlined Management</h3>
                  <p className="text-gray-300">Manage all your bookings through our easy-to-use dashboard and mobile app.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-accent-400 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Boost Your Visibility</h3>
                  <p className="text-gray-300">Get featured in search results and gain more exposure with our promotion options.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/for-companies">
                <Button variant="accent" size="lg">
                  Register Your Company
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="bg-accent-400 text-primary-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Gauge className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Basic Plan</h3>
              <p className="text-gray-300 mb-4">Get listed on our platform and start receiving bookings right away.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Standard listing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Booking management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Customer reviews</span>
                </li>
              </ul>
              <p className="font-semibold text-xl">$49/month</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors relative">
              <div className="absolute -top-3 -right-3 bg-accent-400 text-primary-900 text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <div className="bg-accent-400 text-primary-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Plan</h3>
              <p className="text-gray-300 mb-4">Get boosted visibility and priority in search results.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Featured listing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Priority in search results</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Advanced analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent-400 mr-2" />
                  <span className="text-sm">Promotional badge</span>
                </li>
              </ul>
              <p className="font-semibold text-xl">$99/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPromo;