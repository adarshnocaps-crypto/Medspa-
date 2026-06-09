import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = () => {
  return (
    <section className="about-split-section">
      <motion.div 
        className="about-intro-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-intro-img-wrapper">
          <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800" alt="Medical MedSpa Treatment" className="about-intro-img" />
        </div>
      </motion.div>
      
      <motion.div 
        className="about-intro-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } }
        }}
      >
        <motion.span 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="about-subtitle"
        >
          WELCOME TO MEDSPA
        </motion.span>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="about-intro-text"
        >
          At MedSpa, we believe that true beauty and wellness come from within. 
          Our luxurious sanctuary is designed to provide you with cutting-edge medical treatments in a deeply relaxing environment.
        </motion.p>
        <motion.p 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
          className="about-intro-text"
        >
          Whether you're seeking a rejuvenating facial, an advanced skincare treatment, or state-of-the-art injectables, our team of highly skilled medical professionals is dedicated to providing you with an unforgettable experience.
        </motion.p>
        <motion.h2 
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          WHERE ADVANCED MEDICINE MEETS TRANQUILITY
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default AboutIntro;
