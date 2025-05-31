import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedCompanies from '../components/home/FeaturedComp';
import Testimonials from '../components/home/Reviews';
import CompanyPromotion from '../components/home/CompanyPromo';

const Home: React.FC = () => {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <HowItWorks />
        <FeaturedCompanies />
        <Testimonials />
        <CompanyPromotion />
      </div>
    </main>
  );
};

export default Home;
