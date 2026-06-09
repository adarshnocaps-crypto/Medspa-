import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../../styles/services.css';

const ServicesHero = () => {
  const { scrollY } = useScroll();
  
  // Scale up and fade out as the user scrolls down
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Bottom content fades in and moves up as the user scrolls down
  const contentOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const contentY = useTransform(scrollY, [0, 200], [50, 0]);

  return (
    <section className="services-hero-container">
      <div 
        className="services-hero-banner"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1920&h=600')` }}
      >
        <div className="services-hero-overlay"></div>
        <motion.h1 
          className="services-hero-title-centered"
          style={{ 
            scale: textScale, 
            opacity: textOpacity,
            transformOrigin: 'bottom center'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          SERVICES
        </motion.h1>
      </div>
      
      <div className="services-hero-content-wrapper">
        <motion.div 
          className="services-hero-bottom-content"
          style={{ 
            opacity: contentOpacity, 
            y: contentY 
          }}
        >
          <div className="vertical-line"></div>
          <p className="breadcrumbs">Home &gt; Services</p>
          <p className="services-hero-desc">
            Experience thoughtfully crafted treatments where every detail supports deep relaxation and holistic renewal for body and mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
