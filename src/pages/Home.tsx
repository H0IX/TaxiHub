import React from 'react';
import HeroSection from '../components/home/HeroSection';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedCompanies from '../components/home/FeaturedComp';
import Testimonials from '../components/home/Reviews';
import CompanyPromotion from '../components/home/CompanyPromo';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <HowItWorks />
      <FeaturedCompanies />
      <Testimonials />
      <CompanyPromotion />
    </main>
  );
};

export default Home;