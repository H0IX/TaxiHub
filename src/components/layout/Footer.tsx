import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-accent-400 dark:text-primary-400" />
              <span className="ml-2 text-xl font-bold">TaxiHub</span>
            </div>
            <p className="mt-4 text-gray-300 text-sm dark:text-gray-400">
              Connecting passengers with reliable taxi services since 2025. Our platform makes it easy to find, book, and pay for your ride.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-400 dark:hover:text-primary-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 dark:hover:text-primary-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-400 dark:hover:text-primary-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase dark:text-gray-300">For Passengers</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/search" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Find a Taxi
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Safety
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase dark:text-gray-300">For Companies</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/for-companies" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Join as a Company
                </Link>
              </li>
              <li>
                <Link to="/business-benefits" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Benefits
                </Link>
              </li>
              <li>
                <Link to="/company-resources" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/boost-visibility" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Boost Your Visibility
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-100 tracking-wider uppercase dark:text-gray-300">Contact & Support</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center text-gray-300 text-sm dark:text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" />
                support@taxihub.com
              </li>
              <li className="flex items-center text-gray-300 text-sm dark:text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-gray-400 dark:text-gray-500" />
                +1 (555) 123-4567
              </li>
              <li className="mt-6">
                <Link to="/help" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm dark:text-gray-500">
              &copy; {new Date().getFullYear()} TaxiHub. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-accent-400 dark:hover:text-primary-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;