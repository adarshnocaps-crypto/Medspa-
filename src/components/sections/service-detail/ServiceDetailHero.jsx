import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ServiceDetailHero = ({ service }) => {
  const { scrollY } = useScroll();
  
  const textScale = useTransform(scrollY, [0, 400], [1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const contentOpacity = useTransform(scrollY, [0, 200], [0, 1]);
  const contentY = useTransform(scrollY, [0, 200], [50, 0]);

  if (!service) return null;

  return (
    <section className="sd-hero-container">
      <div 
        className="sd-hero-banner" 
        style={{ backgroundImage: `url('${service.heroImage || '/vixen/banners/therapist-back-massage.jpg'}')` }}
      >
        <div className="sd-hero-overlay"></div>
        <motion.h1 
          className="sd-hero-title-centered"
          style={{ 
            scale: textScale, 
            opacity: textOpacity,
            transformOrigin: 'bottom center'
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {service.title.toUpperCase()}
        </motion.h1>
      </div>
      
      <div className="sd-hero-content-wrapper">
        <motion.div 
          className="sd-hero-bottom-content"
          style={{ 
            opacity: contentOpacity, 
            y: contentY 
          }}
        >
          <div className="vertical-line"></div>
          <p className="breadcrumbs">Home &gt; Services &gt; {service.title}</p>
          <p className="sd-hero-desc">
            Licensed, gentle post-operative care in Beverly Hills, designed to help you heal comfortably and see your best results after cosmetic surgery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
