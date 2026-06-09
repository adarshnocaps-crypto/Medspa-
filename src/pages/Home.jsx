import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ScrollingTestimonials from '../components/sections/ScrollingTestimonials';
import PartnersSection from '../components/sections/PartnersSection';
import BookingSection from '../components/sections/BookingSection';
import BlogSection from '../components/sections/BlogSection';
import AboutFaq from '../components/sections/about/AboutFaq';
import GallerySection from '../components/sections/GallerySection';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ScrollingTestimonials />
      <PartnersSection />
      <GallerySection />
      <BookingSection />
      <div style={{ backgroundColor: '#f4f5f0' }}>
        <AboutFaq />
      </div>
      <BlogSection />
      {/* Other sections like Before/After will go here */}
    </div>
  );
};

export default Home;
