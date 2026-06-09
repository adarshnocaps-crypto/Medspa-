import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const PricingHero = () => {
  const { scrollY } = useScroll();
  
  // Scale up and fade out as the user scrolls down
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Bottom content fades in and moves up as the user scrolls down
  const contentOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const contentY = useTransform(scrollY, [0, 200], [50, 0]);

  return (
    <section className="about-hero-container">
      <div 
        className="about-hero-banner" 
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920&h=1080')` }}
      >
        <div className="about-hero-overlay"></div>
        <motion.h1 
          className="about-hero-title-centered"
          style={{ 
            scale: textScale, 
            opacity: textOpacity,
            transformOrigin: 'bottom center'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          SPA MENU
        </motion.h1>
      </div>
      
      <div className="about-hero-content-wrapper">
        <motion.div 
          className="about-hero-bottom-content"
          style={{ 
            opacity: contentOpacity, 
            y: contentY 
          }}
        >
          <div className="vertical-line"></div>
          <p className="breadcrumbs">Home &gt; Pricing</p>
          <p className="about-hero-desc">
            Discover our curated selection of premium treatments. All prices are starting estimates; a customized quote will be provided during your complimentary consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingHero;
