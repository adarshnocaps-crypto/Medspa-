import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import AboutValues from '../components/sections/about/AboutValues';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ScrollingTestimonials from '../components/sections/ScrollingTestimonials';
import '../styles/about.css';

const About = () => {
  return (
    <div className="about-page">
      <AboutHero />
      <AboutValues />
      <WhyChooseUsSection />
      <ScrollingTestimonials />
    </div>
  );
};

export default About;
