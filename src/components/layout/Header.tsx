import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car as Taxi, LogIn, UserPlus } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find a Taxi', path: '/search' },
    { name: 'For Companies', path: '/for-companies' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <Taxi className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">RideHub</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 ${
                  isActive(link.path)
                    ? 'border-primary-600 text-primary-800 dark:border-primary-400 dark:text-primary-300'
                    : 'border-transparent text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white hover:border-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            <Link to="/login">
              <Button variant="secondary" size="sm" leftIcon={<LogIn className="h-4 w-4" />}>
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm" leftIcon={<UserPlus className="h-4 w-4" />}>
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3 space-x-3">
                <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="secondary" fullWidth leftIcon={<LogIn className="h-4 w-4" />}>
                    Login
                  </Button>
                </Link>
              </div>
              <div className="mt-3 px-3">
                <Link to="/register" className="w-full" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" fullWidth leftIcon={<UserPlus className="h-4 w-4" />}>
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;