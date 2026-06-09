import React from 'react';
import ServicesHero from '../components/sections/services/ServicesHero';
import ServicesSection from '../components/sections/ServicesSection';
import ServicesWhyChooseUs from '../components/sections/services/ServicesWhyChooseUs';
import SpecialDiscounts from '../components/sections/services/SpecialDiscounts';
import ScrollingTestimonials from '../components/sections/ScrollingTestimonials';
import '../styles/services.css';

const Services = () => {
  return (
    <div className="services-page">
      <ServicesHero />
      <ServicesSection />
      <ServicesWhyChooseUs />
      <SpecialDiscounts />
      <ScrollingTestimonials />
    </div>
  );
};

export default Services;
